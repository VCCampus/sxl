// 图片加载问题专项测试脚本
const { chromium } = require('playwright');

async function testImageLoadingIssues() {
  console.log('🔍 开始专项测试图片加载问题...');
  
  const browser = await chromium.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // 监听网络请求
  const failedRequests = [];
  const requests = [];
  
  page.on('requestfailed', request => {
    if (request.url().includes('.png') || request.url().includes('.jpg') || request.url().includes('.svg')) {
      failedRequests.push({
        url: request.url(),
        failure: request.failure().errorText
      });
    }
  });
  
  page.on('request', request => {
    if (request.url().includes('default-placeholder') || request.url().includes('default-avatar')) {
      requests.push({
        url: request.url(),
        type: 'placeholder'
      });
    }
  });
  
  try {
    console.log('📡 访问网站并监听图片请求...');
    await page.goto('http://web3mh.101.so:11181/', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    // 等待所有图片加载完成
    await page.waitForTimeout(5000);
    
    // 检查页面中的所有图片
    const images = await page.$$eval('img', imgs => 
      imgs.map(img => ({
        src: img.src,
        alt: img.alt,
        complete: img.complete,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        errorHandled: img.dataset.errorHandled
      }))
    );
    
    console.log('📊 图片加载统计:');
    console.log(`总图片数量: ${images.length}`);
    
    const loadedImages = images.filter(img => img.complete && img.naturalWidth > 0);
    const failedImages = images.filter(img => img.complete && img.naturalWidth === 0);
    const placeholderImages = images.filter(img => img.src.includes('default-'));
    
    console.log(`✅ 成功加载: ${loadedImages.length}`);
    console.log(`❌ 加载失败: ${failedImages.length}`);
    console.log(`🔄 使用占位图: ${placeholderImages.length}`);
    
    if (failedImages.length > 0) {
      console.log('\n❌ 加载失败的图片:');
      failedImages.forEach(img => {
        console.log(`  - ${img.src} (alt: ${img.alt})`);
      });
    }
    
    if (placeholderImages.length > 0) {
      console.log('\n🔄 使用占位图的图片:');
      placeholderImages.forEach(img => {
        console.log(`  - ${img.src} (alt: ${img.alt}) [errorHandled: ${img.errorHandled}]`);
      });
    }
    
    if (failedRequests.length > 0) {
      console.log('\n🚫 网络请求失败:');
      failedRequests.forEach(req => {
        console.log(`  - ${req.url}: ${req.failure}`);
      });
    }
    
    if (requests.length > 0) {
      console.log('\n🔄 占位图请求:');
      requests.forEach(req => {
        console.log(`  - ${req.url}`);
      });
    }
    
    // 检查是否还有持续的加载尝试
    console.log('\n⏱️  监听持续加载尝试...');
    const beforeCount = requests.length;
    await page.waitForTimeout(10000); // 等待10秒
    const afterCount = requests.length;
    
    if (afterCount > beforeCount) {
      console.log(`⚠️  检测到 ${afterCount - beforeCount} 次额外的占位图请求，可能存在循环加载问题`);
      return false;
    } else {
      console.log('✅ 未检测到持续的图片加载问题');
      return true;
    }
    
  } catch (error) {
    console.error('❌ 测试过程中出现错误:', error.message);
    return false;
  } finally {
    await browser.close();
  }
}

// 运行测试
testImageLoadingIssues().then(success => {
  console.log(success ? '\n🎉 图片加载问题修复验证成功！' : '\n⚠️  仍存在图片加载问题');
  process.exit(success ? 0 : 1);
}).catch(error => {
  console.error('❌ 测试脚本执行失败:', error);
  process.exit(1);
});