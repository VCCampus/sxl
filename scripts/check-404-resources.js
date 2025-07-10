import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // 收集所有网络请求
  const failedRequests = [];
  const allRequests = [];
  
  page.on('response', response => {
    const url = response.url();
    const status = response.status();
    
    allRequests.push({ url, status });
    
    if (status >= 400) {
      failedRequests.push({ url, status });
      console.log(`❌ ${status} - ${url}`);
    }
  });
  
  console.log('🔍 检查网站资源: http://web3mh.101.so:11181/');
  console.log('='.repeat(60));
  
  try {
    // 访问网站
    await page.goto('http://web3mh.101.so:11181/', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    // 等待页面完全加载
    await page.waitForTimeout(3000);
    
    // 检查所有图片元素
    const images = await page.$$eval('img', imgs => 
      imgs.map(img => ({ 
        src: img.src, 
        alt: img.alt, 
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        complete: img.complete
      }))
    );
    
    console.log('\\n📸 图片资源检查:');
    console.log('-'.repeat(40));
    
    let loadedImages = 0;
    let failedImages = 0;
    
    for (const img of images) {
      const status = img.naturalWidth > 0 ? '✅' : '❌';
      if (img.naturalWidth > 0) {
        loadedImages++;
        console.log(`${status} ${img.src} (${img.naturalWidth}x${img.naturalHeight})`);
      } else {
        failedImages++;
        console.log(`${status} ${img.src} - 加载失败`);
      }
    }
    
    // 检查CSS背景图片
    const backgroundImages = await page.evaluate(() => {
      const elements = document.querySelectorAll('*');
      const bgImages = [];
      
      elements.forEach(el => {
        const style = window.getComputedStyle(el);
        const bgImage = style.backgroundImage;
        if (bgImage && bgImage !== 'none' && bgImage.includes('url(')) {
          const url = bgImage.replace(/url\\(["\']?([^"\'\\)]+)["\']?\\)/g, '$1');
          bgImages.push(url);
        }
      });
      
      return [...new Set(bgImages)];
    });
    
    console.log('\\n🎨 CSS背景图片检查:');
    console.log('-'.repeat(40));
    
    for (const bgUrl of backgroundImages) {
      try {
        const response = await page.goto(bgUrl, { timeout: 5000 });
        const status = response.status();
        if (status >= 400) {
          console.log(`❌ ${status} - ${bgUrl}`);
          failedRequests.push({ url: bgUrl, status });
        } else {
          console.log(`✅ ${status} - ${bgUrl}`);
        }
      } catch (error) {
        console.log(`❌ 错误 - ${bgUrl}: ${error.message}`);
        failedRequests.push({ url: bgUrl, status: 'ERROR' });
      }
    }
    
    // 返回主页面
    await page.goto('http://web3mh.101.so:11181/', { waitUntil: 'networkidle' });
    
    console.log('\\n📊 总结报告:');
    console.log('='.repeat(40));
    console.log(`总请求数: ${allRequests.length}`);
    console.log(`成功请求: ${allRequests.filter(r => r.status < 400).length}`);
    console.log(`失败请求: ${failedRequests.length}`);
    console.log(`图片总数: ${images.length}`);
    console.log(`加载成功图片: ${loadedImages}`);
    console.log(`加载失败图片: ${failedImages}`);
    console.log(`CSS背景图片: ${backgroundImages.length}`);
    
    if (failedRequests.length > 0) {
      console.log('\\n❌ 失败的资源列表:');
      console.log('-'.repeat(40));
      failedRequests.forEach(req => {
        console.log(`${req.status} - ${req.url}`);
      });
      
      // 保存失败的资源列表到文件
      const fs = await import('fs');
      fs.writeFileSync('failed-resources.json', JSON.stringify(failedRequests, null, 2));
      console.log('\\n💾 失败资源列表已保存到 failed-resources.json');
    } else {
      console.log('\\n✅ 所有资源加载成功！');
    }
    
  } catch (error) {
    console.error('检查失败:', error);
  } finally {
    await browser.close();
  }
})();