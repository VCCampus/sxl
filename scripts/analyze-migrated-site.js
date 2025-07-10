#!/usr/bin/env node

import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const MIGRATED_URL = 'http://web3mh.101.so:11181/';
const OUTPUT_DIR = './migrated-analysis-output';

async function analyzeMigratedSite() {
  console.log('🔍 分析迁移网站的内容和滚动效果...\n');
  
  // 确保输出目录存在
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 }
  });
  
  try {
    const page = await context.newPage();
    
    console.log('🌐 加载迁移网站...');
    await page.goto(MIGRATED_URL, { waitUntil: 'domcontentloaded', timeout: 30000 });
    
    // 等待页面完全加载
    await page.waitForTimeout(5000);
    
    console.log('📏 获取页面基本信息...');
    const pageInfo = await page.evaluate(() => {
      return {
        title: document.title,
        url: window.location.href,
        bodyHeight: document.body.scrollHeight,
        viewportHeight: window.innerHeight,
        viewportWidth: window.innerWidth,
        hasContent: document.body.textContent.trim().length > 0,
        contentLength: document.body.textContent.trim().length,
        elementCount: document.querySelectorAll('*').length,
        imageCount: document.querySelectorAll('img').length,
        linkCount: document.querySelectorAll('a').length,
        scriptCount: document.querySelectorAll('script').length,
        stylesheetCount: document.querySelectorAll('link[rel="stylesheet"]').length
      };
    });
    
    console.log('页面信息:', pageInfo);
    
    // 获取控制台错误
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    // 获取网络错误
    const networkErrors = [];
    page.on('response', response => {
      if (!response.ok()) {
        networkErrors.push({
          url: response.url(),
          status: response.status(),
          statusText: response.statusText()
        });
      }
    });
    
    console.log('\n📜 分析滚动内容...');
    
    // 分析不同滚动位置的内容
    const scrollPositions = [0, 500, 1000, 2000, 3000, 4000, 5000];
    const scrollAnalysis = {};
    
    for (const scrollY of scrollPositions) {
      console.log(`分析滚动位置: ${scrollY}px`);
      
      // 滚动到指定位置
      await page.evaluate((y) => window.scrollTo(0, y), scrollY);
      await page.waitForTimeout(2000);
      
      // 获取当前视口内容
      const viewportContent = await page.evaluate(() => {
        const visibleElements = [];
        const rect = document.documentElement.getBoundingClientRect();
        
        document.querySelectorAll('*').forEach(el => {
          const elRect = el.getBoundingClientRect();
          // 检查元素是否在视口内
          if (elRect.bottom > 0 && elRect.top < window.innerHeight && 
              elRect.right > 0 && elRect.left < window.innerWidth) {
            const computedStyle = getComputedStyle(el);
            visibleElements.push({
              tag: el.tagName,
              id: el.id,
              className: el.className,
              text: el.textContent?.trim().substring(0, 100),
              hasContent: el.textContent?.trim().length > 0,
              styles: {
                display: computedStyle.display,
                visibility: computedStyle.visibility,
                opacity: computedStyle.opacity,
                position: computedStyle.position,
                backgroundColor: computedStyle.backgroundColor,
                backgroundImage: computedStyle.backgroundImage,
                color: computedStyle.color,
                fontSize: computedStyle.fontSize,
                fontFamily: computedStyle.fontFamily
              },
              rect: {
                x: Math.round(elRect.x),
                y: Math.round(elRect.y),
                width: Math.round(elRect.width),
                height: Math.round(elRect.height)
              }
            });
          }
        });
        
        return {
          scrollY: window.scrollY,
          visibleElements: visibleElements.length,
          elementsWithContent: visibleElements.filter(el => el.hasContent).length,
          actualScrollHeight: document.body.scrollHeight,
          elements: visibleElements.filter(el => el.hasContent).slice(0, 10)
        };
      });
      
      scrollAnalysis[scrollY] = viewportContent;
      
      // 截图
      await page.screenshot({ 
        path: path.join(OUTPUT_DIR, `scroll-${scrollY}.png`),
        fullPage: false
      });
      
      if (viewportContent.visibleElements === 0) {
        console.log(`⚠️  滚动位置 ${scrollY}px 没有可见内容`);
      }
    }
    
    console.log('\n🎨 分析样式和视觉效果...');
    
    // 回到顶部
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(1000);
    
    // 分析CSS和视觉效果
    const styleAnalysis = await page.evaluate(() => {
      const elementsWithStyles = [];
      
      document.querySelectorAll('*').forEach(el => {
        const computed = getComputedStyle(el);
        
        // 检查是否有视觉效果
        const hasVisualEffects = 
          computed.backgroundImage !== 'none' ||
          computed.backgroundColor !== 'rgba(0, 0, 0, 0)' ||
          computed.boxShadow !== 'none' ||
          computed.borderRadius !== '0px' ||
          computed.transform !== 'none' ||
          computed.opacity !== '1' ||
          computed.filter !== 'none';
        
        if (hasVisualEffects) {
          elementsWithStyles.push({
            tag: el.tagName,
            id: el.id,
            className: el.className,
            styles: {
              backgroundImage: computed.backgroundImage,
              backgroundColor: computed.backgroundColor,
              boxShadow: computed.boxShadow,
              borderRadius: computed.borderRadius,
              transform: computed.transform,
              opacity: computed.opacity,
              filter: computed.filter,
              position: computed.position,
              zIndex: computed.zIndex
            }
          });
        }
      });
      
      return {
        totalElementsWithStyles: elementsWithStyles.length,
        elements: elementsWithStyles.slice(0, 20)
      };
    });
    
    console.log('\n⚙️ 分析JavaScript状态...');
    
    // 分析JavaScript状态
    const jsAnalysis = await page.evaluate(() => {
      const scripts = Array.from(document.querySelectorAll('script')).map(script => ({
        src: script.src,
        hasContent: script.textContent.trim().length > 0,
        contentLength: script.textContent.trim().length,
        type: script.type || 'text/javascript'
      }));
      
      return {
        hasJQuery: typeof jQuery !== 'undefined',
        hasReact: typeof React !== 'undefined',
        hasVue: typeof Vue !== 'undefined',
        hasAngular: typeof angular !== 'undefined',
        jQueryVersion: typeof jQuery !== 'undefined' ? jQuery.fn.jquery : null,
        reactVersion: typeof React !== 'undefined' ? React.version : null,
        scripts: scripts,
        scriptsWithContent: scripts.filter(s => s.hasContent).length,
        externalScripts: scripts.filter(s => s.src).length,
        inlineScripts: scripts.filter(s => s.hasContent && !s.src).length,
        globalObjects: Object.keys(window).filter(key => 
          !['window', 'document', 'console', 'location', 'history', 'navigator', 'screen', 'localStorage', 'sessionStorage'].includes(key)
        ).slice(0, 30)
      };
    });
    
    console.log('\n📦 分析资源加载...');
    
    // 分析资源
    const resourceAnalysis = await page.evaluate(() => {
      const images = Array.from(document.querySelectorAll('img')).map(img => ({
        src: img.src,
        alt: img.alt,
        loaded: img.complete,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        displayWidth: img.width,
        displayHeight: img.height,
        hasError: img.naturalWidth === 0 && img.complete
      }));
      
      const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(link => ({
        href: link.href,
        media: link.media,
        disabled: link.disabled
      }));
      
      return {
        images: {
          total: images.length,
          loaded: images.filter(img => img.loaded && !img.hasError).length,
          failed: images.filter(img => img.hasError).length,
          details: images
        },
        stylesheets: {
          total: stylesheets.length,
          details: stylesheets
        }
      };
    });
    
    console.log('\n📱 测试响应式设计...');
    
    // 响应式测试
    const responsiveTest = {};
    const viewports = [
      { name: 'Desktop', width: 1280, height: 720 },
      { name: 'Tablet', width: 768, height: 1024 },
      { name: 'Mobile', width: 375, height: 667 }
    ];
    
    for (const viewport of viewports) {
      console.log(`测试 ${viewport.name} 视口...`);
      
      await page.setViewportSize(viewport);
      await page.waitForTimeout(1000);
      
      const responsiveInfo = await page.evaluate(() => ({
        bodyHeight: document.body.scrollHeight,
        hasHorizontalScroll: document.body.scrollWidth > window.innerWidth,
        scrollWidth: document.body.scrollWidth,
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        hasContent: document.body.textContent.trim().length > 0
      }));
      
      responsiveTest[viewport.name] = responsiveInfo;
      
      // 截图
      await page.screenshot({ 
        path: path.join(OUTPUT_DIR, `responsive-${viewport.name.toLowerCase()}.png`),
        fullPage: true
      });
    }
    
    console.log('\n📄 获取完整HTML...');
    
    // 获取完整HTML
    const fullHTML = await page.content();
    fs.writeFileSync(path.join(OUTPUT_DIR, 'full-content.html'), fullHTML);
    
    // 编译最终报告
    const report = {
      timestamp: new Date().toISOString(),
      url: MIGRATED_URL,
      pageInfo,
      scrollAnalysis,
      styleAnalysis,
      jsAnalysis,
      resourceAnalysis,
      responsiveTest,
      issues: []
    };
    
    // 识别问题
    if (pageInfo.bodyHeight < 1000) {
      report.issues.push('页面高度过低，可能内容缺失');
    }
    
    if (pageInfo.contentLength < 1000) {
      report.issues.push('页面内容过少');
    }
    
    if (Object.values(scrollAnalysis).some(s => s.visibleElements === 0)) {
      report.issues.push('存在滚动位置没有可见内容');
    }
    
    if (resourceAnalysis.images.failed > 0) {
      report.issues.push(`${resourceAnalysis.images.failed}张图片加载失败`);
    }
    
    if (jsAnalysis.scriptsWithContent === 0) {
      report.issues.push('没有JavaScript内容');
    }
    
    if (responsiveTest.Mobile.hasHorizontalScroll) {
      report.issues.push('移动端存在水平滚动');
    }
    
    if (consoleErrors.length > 0) {
      report.issues.push(`${consoleErrors.length}个控制台错误`);
      report.consoleErrors = consoleErrors;
    }
    
    if (networkErrors.length > 0) {
      report.issues.push(`${networkErrors.length}个网络错误`);
      report.networkErrors = networkErrors;
    }
    
    // 保存报告
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'analysis-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    // 生成Markdown报告
    const mdReport = `# 迁移网站分析报告

## 📊 基本信息
- **分析时间**: ${report.timestamp}
- **网站URL**: ${report.url}
- **页面标题**: ${pageInfo.title}
- **页面高度**: ${pageInfo.bodyHeight}px
- **内容长度**: ${pageInfo.contentLength}字符
- **元素数量**: ${pageInfo.elementCount}个

## 🚨 发现的问题
${report.issues.length > 0 ? report.issues.map(issue => `- ❌ ${issue}`).join('\n') : '- ✅ 未发现重大问题'}

## 📜 滚动分析
${Object.entries(scrollAnalysis).map(([pos, data]) => `
### 滚动位置: ${pos}px
- 可见元素: ${data.visibleElements}个
- 有内容元素: ${data.elementsWithContent}个
- 实际页面高度: ${data.actualScrollHeight}px
`).join('\n')}

## 🎨 视觉效果
- 有样式效果的元素: ${styleAnalysis.totalElementsWithStyles}个

## ⚙️ JavaScript状态
- jQuery: ${jsAnalysis.hasJQuery ? '✅ 存在' : '❌ 不存在'}
- React: ${jsAnalysis.hasReact ? '✅ 存在' : '❌ 不存在'}
- 脚本总数: ${jsAnalysis.scripts.length}个
- 外部脚本: ${jsAnalysis.externalScripts}个
- 内联脚本: ${jsAnalysis.inlineScripts}个

## 📦 资源状态
- 图片总数: ${resourceAnalysis.images.total}个
- 加载成功: ${resourceAnalysis.images.loaded}个
- 加载失败: ${resourceAnalysis.images.failed}个
- 样式表: ${resourceAnalysis.stylesheets.total}个

## 📱 响应式测试
${Object.entries(responsiveTest).map(([device, info]) => `
### ${device}
- 页面高度: ${info.bodyHeight}px
- 水平滚动: ${info.hasHorizontalScroll ? '⚠️ 存在' : '✅ 无'}
- 内容: ${info.hasContent ? '✅ 有' : '❌ 无'}
`).join('\n')}

---
*报告生成于: ${new Date().toLocaleString()}*
`;
    
    fs.writeFileSync(path.join(OUTPUT_DIR, 'analysis-report.md'), mdReport);
    
    console.log('\n✅ 迁移网站分析完成！');
    console.log(`📁 分析结果保存在: ${OUTPUT_DIR}/`);
    console.log(`📄 查看报告: ${OUTPUT_DIR}/analysis-report.md`);
    console.log(`\n🔍 主要发现:`);
    console.log(`- 页面高度: ${pageInfo.bodyHeight}px`);
    console.log(`- 内容长度: ${pageInfo.contentLength}字符`);
    console.log(`- 问题数量: ${report.issues.length}个`);
    
    return report;
    
  } catch (error) {
    console.error('❌ 分析过程中发生错误:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

analyzeMigratedSite().catch(console.error);