#!/usr/bin/env node

import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';
import { URL } from 'url';

const TARGET_URL = 'https://xiaoyuanvc.com/';
const OUTPUT_DIR = './xiaoyuanvc-local';
const ASSETS_DIR = path.join(OUTPUT_DIR, 'assets');

// 创建目录结构
const createDirectories = () => {
  const dirs = [
    OUTPUT_DIR,
    path.join(ASSETS_DIR, 'css'),
    path.join(ASSETS_DIR, 'js'),
    path.join(ASSETS_DIR, 'images'),
    path.join(ASSETS_DIR, 'fonts'),
    path.join(ASSETS_DIR, 'media')
  ];
  
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};

// 下载文件函数
const downloadFile = (url, filePath) => {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(filePath);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve(filePath);
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // 处理重定向
        downloadFile(response.headers.location, filePath)
          .then(resolve)
          .catch(reject);
      } else {
        reject(new Error(`HTTP ${response.statusCode}: ${url}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
};

// 生成本地文件名
const generateLocalPath = (url, resourceType) => {
  const urlObj = new URL(url);
  const pathname = urlObj.pathname;
  const search = urlObj.search;
  
  // 生成安全的文件名
  let filename = path.basename(pathname);
  
  // 处理带参数的URL（特别是图片）
  if (search && resourceType === 'Image') {
    const hash = Buffer.from(url).toString('base64').slice(0, 8);
    const ext = path.extname(filename) || '.jpg';
    filename = `${path.basename(filename, ext)}_${hash}${ext}`;
  }
  
  // 确保文件名安全
  filename = filename.replace(/[^a-zA-Z0-9.-]/g, '_');
  
  // 根据资源类型分配目录
  let subdir = 'media';
  switch (resourceType) {
    case 'CSS':
      subdir = 'css';
      break;
    case 'JavaScript':
      subdir = 'js';
      break;
    case 'Image':
      subdir = 'images';
      break;
    case 'Font':
      subdir = 'fonts';
      break;
  }
  
  return {
    fullPath: path.join(ASSETS_DIR, subdir, filename),
    relativePath: `assets/${subdir}/${filename}`
  };
};

// 主要迁移函数
async function migrateWebsite() {
  console.log('🚀 开始迁移 xiaoyuanvc.com 到本地...');
  
  // 创建目录结构
  createDirectories();
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  // 收集所有资源
  const resources = [];
  const resourceMap = new Map(); // URL -> 本地路径映射
  
  page.on('response', async (response) => {
    const url = response.url();
    const status = response.status();
    const contentType = response.headers()['content-type'] || '';
    
    if (status === 200 && !url.includes('xiaoyuanvc.com')) {
      // 只处理外部资源
      const resourceType = getResourceType(url, contentType);
      const localPaths = generateLocalPath(url, resourceType);
      
      resources.push({
        url,
        resourceType,
        contentType,
        localPaths,
        downloaded: false
      });
    }
  });
  
  try {
    console.log('📱 访问目标网站并收集资源...');
    await page.goto(TARGET_URL, { 
      waitUntil: 'domcontentloaded',
      timeout: 60000 
    });
    
    // 等待页面完全加载
    await page.waitForTimeout(8000);
    
    console.log(`📦 发现 ${resources.length} 个外部资源`);
    
    // 下载所有外部资源
    console.log('⬇️ 开始下载外部资源...');
    
    const downloadPromises = resources.map(async (resource, index) => {
      try {
        console.log(`   📥 [${index + 1}/${resources.length}] ${resource.resourceType}: ${path.basename(resource.url)}`);
        await downloadFile(resource.url, resource.localPaths.fullPath);
        resource.downloaded = true;
        resourceMap.set(resource.url, resource.localPaths.relativePath);
        return resource;
      } catch (error) {
        console.warn(`   ❌ 下载失败: ${resource.url} - ${error.message}`);
        resource.downloaded = false;
        return resource;
      }
    });
    
    const downloadResults = await Promise.allSettled(downloadPromises);
    const successfulDownloads = downloadResults.filter(result => 
      result.status === 'fulfilled' && result.value.downloaded
    ).length;
    
    console.log(`✅ 成功下载 ${successfulDownloads}/${resources.length} 个资源`);
    
    // 获取完整的HTML源码
    console.log('📝 获取页面HTML源码...');
    const originalHtml = await page.content();
    
    // 处理HTML，替换外部链接
    console.log('🔄 处理HTML源码，替换外部链接...');
    let processedHtml = originalHtml;
    
    // 替换所有外部资源链接
    for (const [originalUrl, localPath] of resourceMap) {
      // 使用正则表达式替换所有出现的URL
      const escapedUrl = originalUrl.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&');
      const regex = new RegExp(escapedUrl, 'g');
      processedHtml = processedHtml.replace(regex, localPath);
    }
    
    // 添加本地化标记和说明
    const metaTag = `
    <!-- 本地化版本 - 原始网站: ${TARGET_URL} -->
    <!-- 迁移时间: ${new Date().toISOString()} -->
    <!-- 资源统计: ${successfulDownloads}/${resources.length} 个外部资源已本地化 -->
    `;
    
    processedHtml = processedHtml.replace('</head>', `${metaTag}</head>`);
    
    // 保存处理后的HTML
    const htmlFilePath = path.join(OUTPUT_DIR, 'index.html');
    fs.writeFileSync(htmlFilePath, processedHtml);
    
    // 生成资源映射表
    const mappingData = {
      timestamp: new Date().toISOString(),
      originalUrl: TARGET_URL,
      totalResources: resources.length,
      successfulDownloads,
      failedDownloads: resources.length - successfulDownloads,
      resourceMap: Object.fromEntries(resourceMap),
      downloadResults: resources.map(r => ({
        url: r.url,
        type: r.resourceType,
        localPath: r.localPaths.relativePath,
        downloaded: r.downloaded
      }))
    };
    
    fs.writeFileSync(
      path.join(OUTPUT_DIR, 'resource-mapping.json'),
      JSON.stringify(mappingData, null, 2)
    );
    
    // 生成使用说明
    const readmeContent = `# xiaoyuanvc.com 本地化版本

## 📋 基本信息
- **原始网站**: ${TARGET_URL}
- **迁移时间**: ${new Date().toLocaleString('zh-CN')}
- **资源统计**: ${successfulDownloads}/${resources.length} 个外部资源已本地化

## 🚀 使用方法

### 方法一：直接打开
在浏览器中打开 \`index.html\` 文件即可访问本地化版本

### 方法二：本地服务器
\`\`\`bash
# 使用 Python 启动本地服务器
python -m http.server 8000

# 或使用 Node.js
npx serve .

# 或使用 PHP
php -S localhost:8000
\`\`\`

然后访问 http://localhost:8000

## 📂 目录结构
\`\`\`
xiaoyuanvc-local/
├── index.html                  # 主页面
├── assets/                     # 资源目录
│   ├── css/                   # 样式文件
│   ├── js/                    # JavaScript文件
│   ├── images/                # 图片资源
│   ├── fonts/                 # 字体文件
│   └── media/                 # 其他媒体文件
├── resource-mapping.json       # 资源映射表
└── README.md                  # 本文件
\`\`\`

## ⚠️ 注意事项
1. 本版本为静态本地化版本，无法连接原始网站的后端服务
2. 部分依赖外部API的功能可能无法正常工作
3. 实时更新的内容将保持迁移时的状态
4. 建议在现代浏览器中使用以获得最佳体验

## 📊 迁移统计
- **成功下载**: ${successfulDownloads} 个资源
- **下载失败**: ${resources.length - successfulDownloads} 个资源
- **总文件大小**: 约 ${Math.round(fs.statSync(htmlFilePath).size / 1024)} KB（HTML文件）

## 🔍 技术细节
详细的资源映射和下载状态请查看 \`resource-mapping.json\` 文件

---
*自动生成于 ${new Date().toLocaleString('zh-CN')}*
`;
    
    fs.writeFileSync(path.join(OUTPUT_DIR, 'README.md'), readmeContent);
    
    console.log('🎉 迁移完成！');
    console.log(`📁 输出目录: ${OUTPUT_DIR}`);
    console.log(`📄 主文件: ${htmlFilePath}`);
    console.log(`📊 成功率: ${Math.round(successfulDownloads/resources.length*100)}%`);
    
    // 进行基本验证
    console.log('🔍 进行基本验证...');
    await validateMigration(htmlFilePath);
    
  } catch (error) {
    console.error('❌ 迁移过程中发生错误:', error);
  }
  
  await browser.close();
}

// 验证迁移结果
async function validateMigration(htmlFilePath) {
  try {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    
    // 加载本地文件
    await page.goto(`file://${path.resolve(htmlFilePath)}`);
    await page.waitForTimeout(3000);
    
    // 检查页面标题
    const title = await page.title();
    console.log(`   ✅ 页面标题: ${title}`);
    
    // 检查是否有404资源
    const failedResources = [];
    page.on('response', (response) => {
      if (response.status() >= 400) {
        failedResources.push(response.url());
      }
    });
    
    await page.reload();
    await page.waitForTimeout(5000);
    
    if (failedResources.length > 0) {
      console.log(`   ⚠️ 检测到 ${failedResources.length} 个资源加载失败`);
    } else {
      console.log('   ✅ 所有资源加载正常');
    }
    
    // 检查页面是否渲染正常
    const bodyText = await page.textContent('body');
    if (bodyText && bodyText.length > 1000) {
      console.log('   ✅ 页面内容渲染正常');
    } else {
      console.log('   ⚠️ 页面内容可能不完整');
    }
    
    await browser.close();
  } catch (error) {
    console.warn('   ⚠️ 验证过程中出现错误:', error.message);
  }
}

// 资源类型判断函数
function getResourceType(url, contentType) {
  if (contentType.includes('text/css')) return 'CSS';
  if (contentType.includes('javascript')) return 'JavaScript';
  if (contentType.includes('image/')) return 'Image';
  if (contentType.includes('font')) return 'Font';
  if (contentType.includes('video/')) return 'Video';
  if (contentType.includes('audio/')) return 'Audio';
  if (url.includes('.css')) return 'CSS';
  if (url.includes('.js')) return 'JavaScript';
  if (url.match(/\\.(jpg|jpeg|png|gif|svg|webp|ico)$/i)) return 'Image';
  if (url.match(/\\.(woff|woff2|ttf|eot|otf)$/i)) return 'Font';
  return 'Other';
}

// 执行迁移
migrateWebsite().catch(console.error);