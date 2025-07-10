#!/usr/bin/env node

import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const ORIGINAL_URL = 'https://xiaoyuanvc.com/';
const MIGRATED_URL = 'http://web3mh.101.so:11181/';
const OUTPUT_DIR = './verification-output';

// 确保输出目录存在
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function compareWebsites() {
  console.log('🔍 开始对比验证迁移结果...\n');
  
  const browser = await chromium.launch({ 
    headless: true,
    timeout: 60000
  });
  
  const comparisonResults = {
    timestamp: new Date().toISOString(),
    originalUrl: ORIGINAL_URL,
    migratedUrl: MIGRATED_URL,
    visualComparison: {},
    contentComparison: {},
    resourceComparison: {},
    functionalityComparison: {},
    overallScore: 0
  };
  
  try {
    // 创建两个浏览器上下文
    const originalContext = await browser.newContext();
    const migratedContext = await browser.newContext();
    
    const originalPage = await originalContext.newPage();
    const migratedPage = await migratedContext.newPage();
    
    // 收集资源加载情况
    const originalResources = [];
    const migratedResources = [];
    
    originalPage.on('response', (response) => {
      if (response.status() >= 200 && response.status() < 400) {
        originalResources.push({
          url: response.url(),
          status: response.status(),
          type: response.request().resourceType()
        });
      }
    });
    
    migratedPage.on('response', (response) => {
      if (response.status() >= 200 && response.status() < 400) {
        migratedResources.push({
          url: response.url(),
          status: response.status(),
          type: response.request().resourceType()
        });
      }
    });
    
    // 1. 加载两个页面
    console.log('📱 加载原始网站...');
    await originalPage.goto(ORIGINAL_URL, { 
      waitUntil: 'domcontentloaded',
      timeout: 60000 
    });
    await originalPage.waitForTimeout(5000);
    
    console.log('📱 加载迁移后网站...');
    await migratedPage.goto(MIGRATED_URL, { 
      waitUntil: 'domcontentloaded',
      timeout: 60000 
    });
    await migratedPage.waitForTimeout(5000);
    
    // 2. 视觉对比
    console.log('\n📸 进行视觉对比...');
    
    // 桌面端截图
    await originalPage.setViewportSize({ width: 1280, height: 720 });
    await migratedPage.setViewportSize({ width: 1280, height: 720 });
    
    await originalPage.screenshot({ 
      path: `${OUTPUT_DIR}/original-desktop.png`,
      fullPage: false 
    });
    await migratedPage.screenshot({ 
      path: `${OUTPUT_DIR}/migrated-desktop.png`,
      fullPage: false 
    });
    
    // 移动端截图
    await originalPage.setViewportSize({ width: 375, height: 667 });
    await migratedPage.setViewportSize({ width: 375, height: 667 });
    
    await originalPage.screenshot({ 
      path: `${OUTPUT_DIR}/original-mobile.png`,
      fullPage: false 
    });
    await migratedPage.screenshot({ 
      path: `${OUTPUT_DIR}/migrated-mobile.png`,
      fullPage: false 
    });
    
    comparisonResults.visualComparison = {
      desktopScreenshots: {
        original: 'original-desktop.png',
        migrated: 'migrated-desktop.png'
      },
      mobileScreenshots: {
        original: 'original-mobile.png',
        migrated: 'migrated-mobile.png'
      }
    };
    
    // 3. 内容对比
    console.log('📝 进行内容对比...');
    
    const originalContent = await originalPage.evaluate(() => {
      return {
        title: document.title,
        headings: Array.from(document.querySelectorAll('h1, h2, h3')).map(h => ({
          tag: h.tagName,
          text: h.textContent.trim()
        })),
        paragraphs: Array.from(document.querySelectorAll('p')).length,
        images: Array.from(document.querySelectorAll('img')).length,
        links: Array.from(document.querySelectorAll('a')).length,
        buttons: Array.from(document.querySelectorAll('button')).length,
        forms: Array.from(document.querySelectorAll('form')).length,
        textContent: document.body.textContent.trim().substring(0, 1000)
      };
    });
    
    const migratedContent = await migratedPage.evaluate(() => {
      return {
        title: document.title,
        headings: Array.from(document.querySelectorAll('h1, h2, h3')).map(h => ({
          tag: h.tagName,
          text: h.textContent.trim()
        })),
        paragraphs: Array.from(document.querySelectorAll('p')).length,
        images: Array.from(document.querySelectorAll('img')).length,
        links: Array.from(document.querySelectorAll('a')).length,
        buttons: Array.from(document.querySelectorAll('button')).length,
        forms: Array.from(document.querySelectorAll('form')).length,
        textContent: document.body.textContent.trim().substring(0, 1000)
      };
    });
    
    comparisonResults.contentComparison = {
      original: originalContent,
      migrated: migratedContent,
      matches: {
        title: originalContent.title === migratedContent.title,
        headings: originalContent.headings.length === migratedContent.headings.length,
        paragraphs: originalContent.paragraphs === migratedContent.paragraphs,
        images: originalContent.images === migratedContent.images,
        links: originalContent.links === migratedContent.links,
        buttons: originalContent.buttons === migratedContent.buttons,
        forms: originalContent.forms === migratedContent.forms
      }
    };
    
    // 4. 资源对比
    console.log('📦 进行资源对比...');
    
    const originalResourceTypes = {};
    const migratedResourceTypes = {};
    
    originalResources.forEach(r => {
      originalResourceTypes[r.type] = (originalResourceTypes[r.type] || 0) + 1;
    });
    
    migratedResources.forEach(r => {
      migratedResourceTypes[r.type] = (migratedResourceTypes[r.type] || 0) + 1;
    });
    
    comparisonResults.resourceComparison = {
      original: {
        total: originalResources.length,
        byType: originalResourceTypes,
        externalResources: originalResources.filter(r => !r.url.includes('xiaoyuanvc.com')).length
      },
      migrated: {
        total: migratedResources.length,
        byType: migratedResourceTypes,
        externalResources: migratedResources.filter(r => !r.url.includes('web3mh.101.so')).length
      }
    };
    
    // 5. 功能性测试
    console.log('⚡ 进行功能性测试...');
    
    // 测试JavaScript是否正常工作
    const originalJsTest = await originalPage.evaluate(() => {
      return {
        hasReact: typeof React !== 'undefined',
        hasJQuery: typeof jQuery !== 'undefined',
        consoleErrors: []
      };
    });
    
    const migratedJsTest = await migratedPage.evaluate(() => {
      return {
        hasReact: typeof React !== 'undefined',
        hasJQuery: typeof jQuery !== 'undefined',
        consoleErrors: []
      };
    });
    
    // 测试交互元素
    const originalInteractive = await originalPage.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a[href]'));
      const buttons = Array.from(document.querySelectorAll('button'));
      return {
        clickableLinks: links.filter(l => l.offsetWidth > 0).length,
        clickableButtons: buttons.filter(b => b.offsetWidth > 0).length
      };
    });
    
    const migratedInteractive = await migratedPage.evaluate(() => {
      const links = Array.from(document.querySelectorAll('a[href]'));
      const buttons = Array.from(document.querySelectorAll('button'));
      return {
        clickableLinks: links.filter(l => l.offsetWidth > 0).length,
        clickableButtons: buttons.filter(b => b.offsetWidth > 0).length
      };
    });
    
    comparisonResults.functionalityComparison = {
      javascript: {
        original: originalJsTest,
        migrated: migratedJsTest,
        matches: {
          react: originalJsTest.hasReact === migratedJsTest.hasReact,
          jquery: originalJsTest.hasJQuery === migratedJsTest.hasJQuery
        }
      },
      interactivity: {
        original: originalInteractive,
        migrated: migratedInteractive,
        matches: {
          links: Math.abs(originalInteractive.clickableLinks - migratedInteractive.clickableLinks) <= 2,
          buttons: Math.abs(originalInteractive.clickableButtons - migratedInteractive.clickableButtons) <= 2
        }
      }
    };
    
    // 6. 计算总体得分
    const scores = [];
    
    // 内容匹配度
    const contentMatches = Object.values(comparisonResults.contentComparison.matches);
    const contentScore = (contentMatches.filter(m => m).length / contentMatches.length) * 100;
    scores.push(contentScore);
    
    // 资源完整性
    const resourceScore = comparisonResults.resourceComparison.migrated.externalResources === 0 ? 100 : 50;
    scores.push(resourceScore);
    
    // 功能匹配度
    const functionalityMatches = [
      ...Object.values(comparisonResults.functionalityComparison.javascript.matches),
      ...Object.values(comparisonResults.functionalityComparison.interactivity.matches)
    ];
    const functionalityScore = (functionalityMatches.filter(m => m).length / functionalityMatches.length) * 100;
    scores.push(functionalityScore);
    
    comparisonResults.overallScore = Math.round(scores.reduce((a, b) => a + b) / scores.length);
    
    // 生成详细报告
    const report = generateComparisonReport(comparisonResults);
    fs.writeFileSync(`${OUTPUT_DIR}/comparison-report.md`, report);
    fs.writeFileSync(`${OUTPUT_DIR}/comparison-data.json`, JSON.stringify(comparisonResults, null, 2));
    
    console.log('\n📊 验证结果摘要:');
    console.log(`- 内容匹配度: ${contentScore.toFixed(1)}%`);
    console.log(`- 资源本地化: ${resourceScore}%`);
    console.log(`- 功能完整性: ${functionalityScore.toFixed(1)}%`);
    console.log(`- 总体得分: ${comparisonResults.overallScore}%`);
    
    console.log('\n✅ 验证完成！详细报告保存在 ./verification-output/ 目录');
    
  } catch (error) {
    console.error('❌ 验证过程中发生错误:', error);
  }
  
  await browser.close();
}

function generateComparisonReport(results) {
  const report = `# xiaoyuanvc.com 迁移验证报告

## 📊 验证摘要
- **验证时间**: ${new Date(results.timestamp).toLocaleString('zh-CN')}
- **原始网站**: ${results.originalUrl}
- **迁移网站**: ${results.migratedUrl}
- **总体得分**: ${results.overallScore}%

## 📸 视觉对比
- **桌面端截图**: 已保存对比截图
- **移动端截图**: 已保存对比截图

## 📝 内容对比

### 页面元素统计
| 元素类型 | 原始网站 | 迁移网站 | 匹配状态 |
|---------|---------|---------|---------|
| 页面标题 | ${results.contentComparison.original.title} | ${results.contentComparison.migrated.title} | ${results.contentComparison.matches.title ? '✅' : '❌'} |
| 标题数量 | ${results.contentComparison.original.headings.length} | ${results.contentComparison.migrated.headings.length} | ${results.contentComparison.matches.headings ? '✅' : '❌'} |
| 段落数量 | ${results.contentComparison.original.paragraphs} | ${results.contentComparison.migrated.paragraphs} | ${results.contentComparison.matches.paragraphs ? '✅' : '❌'} |
| 图片数量 | ${results.contentComparison.original.images} | ${results.contentComparison.migrated.images} | ${results.contentComparison.matches.images ? '✅' : '❌'} |
| 链接数量 | ${results.contentComparison.original.links} | ${results.contentComparison.migrated.links} | ${results.contentComparison.matches.links ? '✅' : '❌'} |
| 按钮数量 | ${results.contentComparison.original.buttons} | ${results.contentComparison.migrated.buttons} | ${results.contentComparison.matches.buttons ? '✅' : '❌'} |
| 表单数量 | ${results.contentComparison.original.forms} | ${results.contentComparison.migrated.forms} | ${results.contentComparison.matches.forms ? '✅' : '❌'} |

## 📦 资源对比

### 资源加载统计
| 指标 | 原始网站 | 迁移网站 |
|------|---------|---------|
| 总资源数 | ${results.resourceComparison.original.total} | ${results.resourceComparison.migrated.total} |
| 外部资源 | ${results.resourceComparison.original.externalResources} | ${results.resourceComparison.migrated.externalResources} |

### 资源类型分布
| 资源类型 | 原始网站 | 迁移网站 |
|---------|---------|---------|
${Object.keys({...results.resourceComparison.original.byType, ...results.resourceComparison.migrated.byType})
  .map(type => `| ${type} | ${results.resourceComparison.original.byType[type] || 0} | ${results.resourceComparison.migrated.byType[type] || 0} |`)
  .join('\n')}

## ⚡ 功能性对比

### JavaScript框架
| 框架 | 原始网站 | 迁移网站 | 状态 |
|-----|---------|---------|------|
| React | ${results.functionalityComparison.javascript.original.hasReact ? '✅' : '❌'} | ${results.functionalityComparison.javascript.migrated.hasReact ? '✅' : '❌'} | ${results.functionalityComparison.javascript.matches.react ? '✅ 匹配' : '❌ 不匹配'} |
| jQuery | ${results.functionalityComparison.javascript.original.hasJQuery ? '✅' : '❌'} | ${results.functionalityComparison.javascript.migrated.hasJQuery ? '✅' : '❌'} | ${results.functionalityComparison.javascript.matches.jquery ? '✅ 匹配' : '❌ 不匹配'} |

### 交互元素
| 元素 | 原始网站 | 迁移网站 | 状态 |
|-----|---------|---------|------|
| 可点击链接 | ${results.functionalityComparison.interactivity.original.clickableLinks} | ${results.functionalityComparison.interactivity.migrated.clickableLinks} | ${results.functionalityComparison.interactivity.matches.links ? '✅ 匹配' : '⚠️ 有差异'} |
| 可点击按钮 | ${results.functionalityComparison.interactivity.original.clickableButtons} | ${results.functionalityComparison.interactivity.migrated.clickableButtons} | ${results.functionalityComparison.interactivity.matches.buttons ? '✅ 匹配' : '⚠️ 有差异'} |

## 🎯 验证结论

${results.overallScore >= 90 ? '### ✅ 迁移成功！\n\n网站已成功实现本地化，所有关键功能和内容都得到了保留。' : 
  results.overallScore >= 70 ? '### ⚠️ 迁移基本成功\n\n大部分内容和功能已成功迁移，但存在一些差异需要关注。' :
  '### ❌ 迁移存在问题\n\n迁移过程中出现了较多问题，需要进一步优化。'}

### 关键成就
- ${results.resourceComparison.migrated.externalResources === 0 ? '✅ 所有资源已完全本地化' : '⚠️ 仍有外部资源依赖'}
- ${results.contentComparison.matches.title ? '✅ 页面标题正确保留' : '❌ 页面标题不匹配'}
- ${results.functionalityComparison.javascript.matches.react && results.functionalityComparison.javascript.matches.jquery ? '✅ JavaScript框架正常工作' : '⚠️ JavaScript框架可能存在问题'}

---
*报告生成时间: ${new Date().toLocaleString('zh-CN')}*
`;

  return report;
}

// 执行验证
compareWebsites().catch(console.error);