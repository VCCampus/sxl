// Playwright 网站测试脚本
// 测试 http://web3mh.101.so:11181/ 网站效果

const { chromium } = require('playwright');

async function testWebsite() {
  console.log('🚀 开始测试校园VC网站...');
  
  const browser = await chromium.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  try {
    // 访问网站
    console.log('📡 正在访问 http://web3mh.101.so:11181/');
    await page.goto('http://web3mh.101.so:11181/', { 
      waitUntil: 'domcontentloaded',
      timeout: 30000 
    });
    
    // 等待页面加载
    await page.waitForTimeout(2000);
    
    // 检查页面标题
    const title = await page.title();
    console.log('📄 页面标题:', title);
    
    // 检查网站logo是否存在
    const logoExists = await page.locator('img[src*="xyvc-logo"]').count() > 0;
    console.log('🏷️  Logo 图片:', logoExists ? '✅ 已加载' : '❌ 未找到');
    
    // 检查数字创业精英班标题
    const benefitsTitle = await page.locator('text=数字创业精英班').count() > 0;
    console.log('🎯 数字创业精英班标题:', benefitsTitle ? '✅ 存在' : '❌ 未找到');
    
    // 检查B站视频iframe
    const bilibiliVideo = await page.locator('iframe[src*="bilibili.com"]').count() > 0;
    console.log('📺 B站视频:', bilibiliVideo ? '✅ 已嵌入' : '❌ 未找到');
    
    // 检查照片墙
    const photoGallery = await page.locator('text=活动照片墙').count() > 0;
    console.log('📸 活动照片墙:', photoGallery ? '✅ 存在' : '❌ 未找到');
    
    // 检查照片数量
    const photoCount = await page.locator('.gallery-item').count();
    console.log('🖼️  照片数量:', photoCount, '张');
    
    // 检查微信二维码
    const qrCode = await page.locator('img[src*="xyvc-qr"]').count() > 0;
    console.log('📱 微信二维码:', qrCode ? '✅ 已加载' : '❌ 未找到');
    
    // 检查段建松头像
    const founderAvatar = await page.locator('img[src*="duan-jiansong"]').count() > 0;
    console.log('👤 段建松头像:', founderAvatar ? '✅ 已加载' : '❌ 未找到');
    
    // 检查书影
    const bookCover = await page.locator('img[src*="zero-to-hero"]').count() > 0;
    console.log('📚 《从零到英雄》书影:', bookCover ? '✅ 已加载' : '❌ 未找到');
    
    // 测试照片墙点击功能
    console.log('🖱️  测试照片墙点击功能...');
    const firstPhoto = page.locator('.gallery-item').first();
    if (await firstPhoto.count() > 0) {
      await firstPhoto.click();
      await page.waitForTimeout(1000);
      
      const modal = await page.locator('.fixed.inset-0').count() > 0;
      console.log('🔍 照片放大模态框:', modal ? '✅ 正常工作' : '❌ 未正常工作');
      
      if (modal) {
        // 关闭模态框
        await page.keyboard.press('Escape');
        await page.waitForTimeout(500);
      }
    }
    
    // 检查响应式设计
    console.log('📱 测试移动端响应式...');
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(1000);
    
    const mobileTitle = await page.locator('text=校园VC').count() > 0;
    console.log('📲 移动端显示:', mobileTitle ? '✅ 正常' : '❌ 异常');
    
    // 截图保存
    await page.screenshot({ 
      path: '/opt/src/sxl/docs/reports/website-test-screenshot.png',
      fullPage: true 
    });
    console.log('📷 已保存测试截图到 docs/reports/website-test-screenshot.png');
    
    console.log('✅ 网站测试完成！');
    
  } catch (error) {
    console.error('❌ 测试过程中出现错误:', error.message);
    return false;
  } finally {
    await browser.close();
  }
  
  return true;
}

// 运行测试
testWebsite().then(success => {
  process.exit(success ? 0 : 1);
}).catch(error => {
  console.error('❌ 测试脚本执行失败:', error);
  process.exit(1);
});