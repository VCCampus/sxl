// 业务链接功能测试脚本
const { chromium } = require('playwright');

async function testBusinessLinks() {
  console.log('🔗 开始测试业务链接功能...');
  
  const browser = await chromium.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  try {
    console.log('📡 访问网站...');
    await page.goto('http://web3mh.101.so:11181/', { 
      waitUntil: 'domcontentloaded',
      timeout: 30000 
    });
    
    // 等待页面加载
    await page.waitForTimeout(2000);
    
    // 检查四大业务体系标题
    const businessTitle = await page.locator('text="玩创投"四大业务体系').count() > 0;
    console.log('📋 四大业务体系标题:', businessTitle ? '✅ 存在' : '❌ 未找到');
    
    // 检查各个业务链接
    const links = [
      { text: '🚀 项目孵化线', hasLink: false },
      { text: '🧭 校园VC导航板', hasLink: true, url: 'me.xiaoyuanvc.com' },
      { text: '🎓 创业教育智慧系统', hasLink: true, url: 'chief.xiaoyuanvc.com' },
      { text: '🌐 Web3师徒导师', hasLink: true, url: 'css.xiaoyuanvc.com' }
    ];
    
    console.log('\n🔍 检查业务链接:');
    
    for (let linkInfo of links) {
      const titleExists = await page.locator(`text="${linkInfo.text}"`).count() > 0;
      console.log(`📌 ${linkInfo.text}: ${titleExists ? '✅ 存在' : '❌ 未找到'}`);
      
      if (linkInfo.hasLink && titleExists) {
        // 检查是否有对应的链接
        const linkExists = await page.locator(`a[href*="${linkInfo.url}"]`).count() > 0;
        console.log(`   🔗 链接到 ${linkInfo.url}: ${linkExists ? '✅ 正常' : '❌ 缺失'}`);
        
        // 检查链接是否在新窗口打开
        const linkElement = page.locator(`a[href*="${linkInfo.url}"]`).first();
        if (await linkElement.count() > 0) {
          const target = await linkElement.getAttribute('target');
          const isNewWindow = target === '_blank';
          console.log(`   🪟 新窗口打开: ${isNewWindow ? '✅ 是' : '❌ 否'}`);
        }
      }
    }
    
    // 检查高校教师系统的特殊说明
    const restrictionNote = await page.locator('text="仅对高校教师开放，申请通过后开放"').count() > 0;
    console.log('\n⚠️  高校教师系统限制说明:', restrictionNote ? '✅ 存在' : '❌ 未找到');
    
    // 检查外部链接图标
    const externalIcons = await page.locator('svg').count();
    console.log('🔗 外部链接图标数量:', externalIcons);
    
    // 测试链接的hover效果
    console.log('\n🖱️  测试hover效果...');
    const firstLink = page.locator('a[href*="xiaoyuanvc.com"]').first();
    if (await firstLink.count() > 0) {
      await firstLink.hover();
      await page.waitForTimeout(500);
      console.log('✅ Hover效果测试完成');
    }
    
    // 截图保存
    await page.screenshot({ 
      path: '/opt/src/sxl/docs/reports/business-links-test-screenshot.png',
      fullPage: true 
    });
    console.log('📷 已保存测试截图到 docs/reports/business-links-test-screenshot.png');
    
    console.log('\n✅ 业务链接功能测试完成！');
    
  } catch (error) {
    console.error('❌ 测试过程中出现错误:', error.message);
    return false;
  } finally {
    await browser.close();
  }
  
  return true;
}

// 运行测试
testBusinessLinks().then(success => {
  process.exit(success ? 0 : 1);
}).catch(error => {
  console.error('❌ 测试脚本执行失败:', error);
  process.exit(1);
});