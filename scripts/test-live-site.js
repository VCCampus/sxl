/**
 * Playwright 网站测试脚本
 * 测试 http://web3mh.101.so:11182/ 网站加载情况
 * 检查404错误和资源加载问题
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function testLiveSite() {
    console.log('🚀 开始测试线上网站...');
    
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
        viewport: { width: 1280, height: 720 },
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    });
    
    const page = await context.newPage();
    
    // 收集网络请求和错误
    const networkRequests = [];
    const networkErrors = [];
    const consoleMessages = [];
    
    // 监听网络请求
    page.on('request', request => {
        networkRequests.push({
            url: request.url(),
            method: request.method(),
            resourceType: request.resourceType()
        });
    });
    
    // 监听网络响应
    page.on('response', response => {
        const request = networkRequests.find(req => req.url === response.url());
        if (request) {
            request.status = response.status();
            request.statusText = response.statusText();
            
            // 记录错误响应
            if (response.status() >= 400) {
                networkErrors.push({
                    url: response.url(),
                    status: response.status(),
                    statusText: response.statusText(),
                    resourceType: request.resourceType
                });
            }
        }
    });
    
    // 监听控制台消息
    page.on('console', msg => {
        consoleMessages.push({
            type: msg.type(),
            text: msg.text(),
            location: msg.location()
        });
    });
    
    // 监听JavaScript错误
    page.on('pageerror', error => {
        consoleMessages.push({
            type: 'error',
            text: error.message,
            stack: error.stack
        });
    });
    
    try {
        console.log('📡 正在访问 http://web3mh.101.so:11182/...');
        
        // 访问网站
        await page.goto('http://web3mh.101.so:11182/', { 
            waitUntil: 'networkidle',
            timeout: 30000 
        });
        
        // 等待页面加载
        await page.waitForTimeout(3000);
        
        // 检查页面标题
        const title = await page.title();
        console.log(`📄 页面标题: ${title}`);
        
        // 检查是否有错误页面
        const bodyText = await page.textContent('body');
        const hasError = bodyText.includes('404') || bodyText.includes('Not Found') || bodyText.includes('Error');
        
        if (hasError) {
            console.log('❌ 检测到错误页面');
        } else {
            console.log('✅ 页面基本加载正常');
        }
        
        // 检查关键元素是否存在
        const elements = {
            hero: await page.locator('#hero').count(),
            video: await page.locator('#video').count(),
            benefits: await page.locator('#benefits').count(),
            cta: await page.locator('#cta').count()
        };
        
        console.log('🔍 关键元素检查:');
        Object.entries(elements).forEach(([key, count]) => {
            console.log(`  ${key}: ${count > 0 ? '✅' : '❌'} (${count})`);
        });
        
        // 截图
        const screenshotPath = path.join(__dirname, '../logs/live-site-test.png');
        await page.screenshot({ path: screenshotPath, fullPage: true });
        console.log(`📸 截图保存至: ${screenshotPath}`);
        
        // 检查移动端响应式
        await page.setViewportSize({ width: 375, height: 667 });
        await page.waitForTimeout(1000);
        
        const mobileScreenshotPath = path.join(__dirname, '../logs/live-site-mobile.png');
        await page.screenshot({ path: mobileScreenshotPath, fullPage: true });
        console.log(`📱 移动端截图保存至: ${mobileScreenshotPath}`);
        
    } catch (error) {
        console.error('❌ 页面访问失败:', error.message);
        
        // 尝试截图错误状态
        try {
            const errorScreenshotPath = path.join(__dirname, '../logs/live-site-error.png');
            await page.screenshot({ path: errorScreenshotPath });
            console.log(`📸 错误截图保存至: ${errorScreenshotPath}`);
        } catch (screenshotError) {
            console.log('截图失败');
        }
    }
    
    await browser.close();
    
    // 生成测试报告
    const report = {
        timestamp: new Date().toISOString(),
        url: 'http://web3mh.101.so:11182/',
        title: await page.title().catch(() => 'Unknown'),
        networkRequests: networkRequests.length,
        networkErrors: networkErrors,
        consoleMessages: consoleMessages.filter(msg => msg.type === 'error'),
        status: networkErrors.length === 0 ? 'success' : 'has_errors'
    };
    
    const reportPath = path.join(__dirname, '../logs/live-site-test-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // 输出测试结果
    console.log('\n📊 测试结果汇总:');
    console.log(`总请求数: ${networkRequests.length}`);
    console.log(`错误请求数: ${networkErrors.length}`);
    console.log(`控制台错误数: ${consoleMessages.filter(msg => msg.type === 'error').length}`);
    
    if (networkErrors.length > 0) {
        console.log('\n❌ 发现的404/错误:');
        networkErrors.forEach(error => {
            console.log(`  ${error.status} - ${error.url} (${error.resourceType})`);
        });
    }
    
    if (consoleMessages.filter(msg => msg.type === 'error').length > 0) {
        console.log('\n🐛 JavaScript错误:');
        consoleMessages.filter(msg => msg.type === 'error').forEach(msg => {
            console.log(`  ${msg.text}`);
        });
    }
    
    console.log(`\n📄 完整报告保存至: ${reportPath}`);
    
    return report;
}

// 运行测试
testLiveSite().catch(console.error);