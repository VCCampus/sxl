#!/usr/bin/env node

import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const TARGET_URL = 'https://xiaoyuanvc.com/';
const OUTPUT_DIR = './analysis-output';

// 确保输出目录存在
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function analyzeWebsite() {
  console.log('🚀 开始分析 xiaoyuanvc.com...');
  
  const browser = await chromium.launch({ 
    headless: true,
    timeout: 60000
  });
  
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });
  
  const page = await context.newPage();
  
  // 收集所有网络请求
  const resources = [];
  const pageErrors = [];
  
  // 监听所有网络请求
  page.on('response', async (response) => {
    const url = response.url();
    const status = response.status();
    const contentType = response.headers()['content-type'] || '';
    
    try {
      let size = 0;
      const body = await response.body().catch(() => null);
      if (body) {
        size = body.length;
      }
      
      resources.push({
        url,
        status,
        contentType,
        size,
        resourceType: getResourceType(url, contentType),
        isExternal: !url.includes('xiaoyuanvc.com')
      });
    } catch (error) {
      console.warn(`无法获取资源信息: ${url}`, error.message);
    }
  });
  
  // 监听页面错误
  page.on('pageerror', (error) => {
    pageErrors.push({
      message: error.message,
      stack: error.stack
    });
  });
  
  // 监听控制台输出
  const consoleLogs = [];
  page.on('console', (msg) => {
    consoleLogs.push({
      type: msg.type(),
      text: msg.text(),
      location: msg.location()
    });
  });
  
  try {
    console.log('📱 访问目标网站...');
    await page.goto(TARGET_URL, { 
      waitUntil: 'domcontentloaded',
      timeout: 60000 
    });
    
    // 等待页面完全加载
    await page.waitForTimeout(5000);
    
    console.log('🔍 分析页面结构...');
    
    // 获取页面基本信息
    const pageInfo = await page.evaluate(() => {
      return {
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.content || '',
        keywords: document.querySelector('meta[name="keywords"]')?.content || '',
        charset: document.charset,
        lang: document.documentElement.lang,
        url: window.location.href,
        domain: window.location.hostname,
        protocol: window.location.protocol,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      };
    });
    
    // 获取所有链接
    const links = await page.evaluate(() => {
      const allLinks = Array.from(document.querySelectorAll('a[href]'));
      return allLinks.map(link => ({
        href: link.href,
        text: link.textContent?.trim() || '',
        isExternal: !link.href.includes(window.location.hostname)
      }));
    });
    
    // 获取所有图片
    const images = await page.evaluate(() => {
      const allImages = Array.from(document.querySelectorAll('img'));
      return allImages.map(img => ({
        src: img.src,
        alt: img.alt || '',
        width: img.naturalWidth || img.width,
        height: img.naturalHeight || img.height,
        loading: img.loading,
        isExternal: img.src && !img.src.includes(window.location.hostname)
      }));
    });
    
    // 获取所有脚本标签
    const scripts = await page.evaluate(() => {
      const allScripts = Array.from(document.querySelectorAll('script'));
      return allScripts.map(script => ({
        src: script.src || '',
        type: script.type || 'text/javascript',
        async: script.async,
        defer: script.defer,
        isInline: !script.src,
        isExternal: script.src && !script.src.includes(window.location.hostname),
        content: script.src ? '' : script.textContent?.substring(0, 500) + '...'
      }));
    });
    
    // 获取所有样式表
    const stylesheets = await page.evaluate(() => {
      const allStylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"], style'));
      return allStylesheets.map(style => ({
        href: style.href || '',
        media: style.media || 'all',
        isInline: style.tagName === 'STYLE',
        isExternal: style.href && !style.href.includes(window.location.hostname),
        content: style.tagName === 'STYLE' ? style.textContent?.substring(0, 500) + '...' : ''
      }));
    });
    
    // 获取页面HTML结构
    const htmlStructure = await page.evaluate(() => {
      const getElementInfo = (element, depth = 0) => {
        if (depth > 3) return null; // 限制深度避免过大的输出
        
        const info = {
          tagName: element.tagName.toLowerCase(),
          id: element.id || '',
          classes: Array.from(element.classList),
          attributes: {},
          children: []
        };
        
        // 获取重要属性
        const importantAttrs = ['src', 'href', 'alt', 'title', 'data-*'];
        for (let attr of element.attributes) {
          if (importantAttrs.some(pattern => 
            pattern.includes('*') ? attr.name.startsWith(pattern.replace('*', '')) : attr.name === pattern
          )) {
            info.attributes[attr.name] = attr.value;
          }
        }
        
        // 递归获取子元素
        if (depth < 3) {
          for (let child of element.children) {
            const childInfo = getElementInfo(child, depth + 1);
            if (childInfo) {
              info.children.push(childInfo);
            }
          }
        }
        
        return info;
      };
      
      return getElementInfo(document.documentElement);
    });
    
    // 检测使用的框架和库
    const frameworks = await page.evaluate(() => {
      const detected = [];
      
      // 检测常见框架
      if (window.Vue) detected.push({ name: 'Vue.js', version: window.Vue.version || 'unknown' });
      if (window.React) detected.push({ name: 'React', version: window.React.version || 'unknown' });
      if (window.Angular) detected.push({ name: 'Angular', version: 'unknown' });
      if (window.jQuery) detected.push({ name: 'jQuery', version: window.jQuery.fn.jquery || 'unknown' });
      if (window.$) detected.push({ name: 'jQuery (via $)', version: 'unknown' });
      if (window.Swiper) detected.push({ name: 'Swiper', version: 'unknown' });
      if (window.AOS) detected.push({ name: 'AOS (Animate On Scroll)', version: 'unknown' });
      if (window.GSAP || window.gsap) detected.push({ name: 'GSAP', version: 'unknown' });
      
      // 检测CSS框架
      const stylesheets = Array.from(document.styleSheets);
      stylesheets.forEach(sheet => {
        try {
          const href = sheet.href || '';
          if (href.includes('bootstrap')) detected.push({ name: 'Bootstrap', version: 'unknown', type: 'CSS Framework' });
          if (href.includes('tailwind')) detected.push({ name: 'Tailwind CSS', version: 'unknown', type: 'CSS Framework' });
          if (href.includes('bulma')) detected.push({ name: 'Bulma', version: 'unknown', type: 'CSS Framework' });
        } catch (e) {
          // 忽略跨域错误
        }
      });
      
      return detected;
    });
    
    // 截图
    console.log('📸 截图保存...');
    await page.screenshot({ 
      path: `${OUTPUT_DIR}/homepage-full.png`, 
      fullPage: true 
    });
    await page.screenshot({ 
      path: `${OUTPUT_DIR}/homepage-viewport.png`,
      fullPage: false 
    });
    
    // 移动端视图截图
    await page.setViewportSize({ width: 375, height: 667 });
    await page.screenshot({ 
      path: `${OUTPUT_DIR}/homepage-mobile.png`,
      fullPage: true 
    });
    
    console.log('💾 保存分析结果...');
    
    // 汇总分析结果
    const analysisResult = {
      timestamp: new Date().toISOString(),
      pageInfo,
      resources: {
        total: resources.length,
        byType: getResourcesByType(resources),
        external: resources.filter(r => r.isExternal),
        large: resources.filter(r => r.size > 100000), // 大于100KB的资源
        failed: resources.filter(r => r.status >= 400)
      },
      content: {
        links: {
          total: links.length,
          external: links.filter(l => l.isExternal),
          internal: links.filter(l => !l.isExternal)
        },
        images: {
          total: images.length,
          external: images.filter(i => i.isExternal),
          withoutAlt: images.filter(i => !i.alt)
        },
        scripts: {
          total: scripts.length,
          external: scripts.filter(s => s.isExternal),
          inline: scripts.filter(s => s.isInline)
        },
        stylesheets: {
          total: stylesheets.length,
          external: stylesheets.filter(s => s.isExternal),
          inline: stylesheets.filter(s => s.isInline)
        }
      },
      frameworks,
      structure: htmlStructure,
      errors: pageErrors,
      console: consoleLogs,
      migration: {
        complexity: calculateMigrationComplexity(resources, frameworks, scripts),
        recommendations: generateMigrationRecommendations(resources, frameworks, pageInfo)
      }
    };
    
    // 保存分析结果
    fs.writeFileSync(
      `${OUTPUT_DIR}/analysis-result.json`, 
      JSON.stringify(analysisResult, null, 2)
    );
    
    // 保存HTML源码
    const htmlContent = await page.content();
    fs.writeFileSync(`${OUTPUT_DIR}/original-source.html`, htmlContent);
    
    // 生成分析报告
    generateAnalysisReport(analysisResult);
    
    console.log('✅ 分析完成！结果保存在 ./analysis-output/ 目录中');
    console.log(`📊 发现 ${resources.length} 个资源，${frameworks.length} 个框架/库`);
    
  } catch (error) {
    console.error('❌ 分析过程中发生错误:', error);
    
    // 保存错误信息
    fs.writeFileSync(`${OUTPUT_DIR}/error-log.json`, JSON.stringify({
      timestamp: new Date().toISOString(),
      error: {
        message: error.message,
        stack: error.stack
      },
      resources: resources.length,
      pageErrors,
      consoleLogs
    }, null, 2));
  }
  
  await browser.close();
}

function getResourceType(url, contentType) {
  if (contentType.includes('text/css')) return 'CSS';
  if (contentType.includes('javascript')) return 'JavaScript';
  if (contentType.includes('image/')) return 'Image';
  if (contentType.includes('font')) return 'Font';
  if (contentType.includes('video/')) return 'Video';
  if (contentType.includes('audio/')) return 'Audio';
  if (contentType.includes('text/html')) return 'HTML';
  if (url.includes('.css')) return 'CSS';
  if (url.includes('.js')) return 'JavaScript';
  if (url.match(/\.(jpg|jpeg|png|gif|svg|webp|ico)$/i)) return 'Image';
  if (url.match(/\.(woff|woff2|ttf|eot|otf)$/i)) return 'Font';
  return 'Other';
}

function getResourcesByType(resources) {
  const byType = {};
  resources.forEach(resource => {
    const type = resource.resourceType;
    if (!byType[type]) {
      byType[type] = { count: 0, totalSize: 0 };
    }
    byType[type].count++;
    byType[type].totalSize += resource.size || 0;
  });
  return byType;
}

function calculateMigrationComplexity(resources, frameworks, scripts) {
  let complexity = 0;
  
  // 外部资源增加复杂度
  const externalResources = resources.filter(r => r.isExternal);
  complexity += externalResources.length * 2;
  
  // JavaScript框架增加复杂度
  complexity += frameworks.filter(f => f.name.includes('Vue') || f.name.includes('React')).length * 10;
  
  // 内联脚本增加复杂度
  complexity += scripts.filter(s => s.isInline).length * 3;
  
  // 大文件增加复杂度
  complexity += resources.filter(r => r.size > 500000).length * 5;
  
  if (complexity < 20) return 'Low';
  if (complexity < 50) return 'Medium';
  return 'High';
}

function generateMigrationRecommendations(resources, frameworks, pageInfo) {
  const recommendations = [];
  
  const externalResources = resources.filter(r => r.isExternal);
  if (externalResources.length > 0) {
    recommendations.push(`需要下载 ${externalResources.length} 个外部资源到本地`);
  }
  
  const jsFrameworks = frameworks.filter(f => 
    f.name.includes('Vue') || f.name.includes('React') || f.name.includes('Angular')
  );
  if (jsFrameworks.length > 0) {
    recommendations.push(`检测到 JavaScript 框架: ${jsFrameworks.map(f => f.name).join(', ')}，需要保留相关逻辑`);
  }
  
  const largeResources = resources.filter(r => r.size > 1000000);
  if (largeResources.length > 0) {
    recommendations.push(`优化 ${largeResources.length} 个大文件 (>1MB)`);
  }
  
  recommendations.push('将所有外部CDN资源替换为本地文件');
  recommendations.push('保留页面交互功能和动画效果');
  recommendations.push('确保移动端响应式设计正常工作');
  
  return recommendations;
}

function generateAnalysisReport(result) {
  const report = `# xiaoyuanvc.com 网站分析报告

## 📊 分析摘要
- **分析时间**: ${new Date(result.timestamp).toLocaleString('zh-CN')}
- **页面标题**: ${result.pageInfo.title}
- **页面URL**: ${result.pageInfo.url}
- **总资源数**: ${result.resources.total}
- **迁移复杂度**: ${result.migration.complexity}

## 🌐 页面基本信息
- **描述**: ${result.pageInfo.description}
- **关键词**: ${result.pageInfo.keywords}
- **语言**: ${result.pageInfo.lang || '未设置'}
- **字符编码**: ${result.pageInfo.charset}

## 📦 资源统计
${Object.entries(result.resources.byType).map(([type, info]) => 
  `- **${type}**: ${info.count} 个文件，总大小 ${(info.totalSize / 1024).toFixed(2)} KB`
).join('\n')}

## 🔗 外部依赖
- **外部资源**: ${result.resources.external.length} 个
- **外部链接**: ${result.content.links.external.length} 个
- **外部图片**: ${result.content.images.external.length} 个
- **外部脚本**: ${result.content.scripts.external.length} 个
- **外部样式**: ${result.content.stylesheets.external.length} 个

## ⚡ 检测到的框架/库
${result.frameworks.length > 0 ? 
  result.frameworks.map(f => `- ${f.name} ${f.version ? `(${f.version})` : ''}`).join('\n') 
  : '- 未检测到主要框架'}

## 🚨 问题和错误
- **页面错误**: ${result.errors.length} 个
- **失败的资源**: ${result.resources.failed.length} 个
- **无alt属性的图片**: ${result.content.images.withoutAlt.length} 个

## 📋 迁移建议
${result.migration.recommendations.map(rec => `- ${rec}`).join('\n')}

## 🔧 详细资源列表

### 外部资源
${result.resources.external.map(res => 
  `- **${res.resourceType}**: ${res.url} (${res.status}) - ${(res.size / 1024).toFixed(2)} KB`
).slice(0, 20).join('\n')}
${result.resources.external.length > 20 ? `\n... 还有 ${result.resources.external.length - 20} 个资源` : ''}

### 大文件 (>100KB)
${result.resources.large.map(res => 
  `- **${res.resourceType}**: ${res.url} - ${(res.size / 1024).toFixed(2)} KB`
).join('\n')}

---
*报告生成时间: ${new Date().toLocaleString('zh-CN')}*
`;

  fs.writeFileSync(`${OUTPUT_DIR}/analysis-report.md`, report);
}

// 执行分析
analyzeWebsite().catch(console.error);