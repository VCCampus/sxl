# CLAUDE.md

此文件为 Claude Code (claude.ai/code) 在本仓库中工作时提供指导。

## 项目概述

这是 `sxl` 项目 - 校园VC官网的静态网站重构项目。目标是将原有的 sxl.com（校园VC - Campus VC）官网从现有托管方案迁移到自主托管的静态网站。

## 项目结构

### Vue项目结构（已完成）
```
/opt/src/sxl/
├── src/                    # Vue源代码目录
│   ├── components/         # Vue组件
│   │   ├── common/        # 通用组件 (Header, Footer)
│   │   ├── sections/      # 页面区块组件 (VideoSection, PhotoGallery)
│   │   └── ui/            # UI组件
│   ├── views/             # 页面视图
│   │   ├── Home.vue       # 首页
│   │   ├── About.vue      # 关于我们
│   │   ├── Products.vue   # 产品展示
│   │   ├── Gallery.vue    # 照片墙
│   │   └── Contact.vue    # 联系我们
│   ├── assets/            # 静态资源
│   ├── styles/            # 样式文件
│   │   └── main.css       # 主样式文件
│   ├── utils/             # 工具函数
│   ├── data/              # 数据文件
│   │   ├── products.js    # 产品数据
│   │   └── gallery.js     # 照片墙数据
│   ├── router/            # 路由配置
│   ├── App.vue            # 根组件
│   └── main.js            # 应用入口
├── public/                # 构建输出目录（静态网站部署）
├── docs/                  # 文档和项目规划
├── disused/               # 废弃代码
├── index.html             # HTML模板
├── package.json           # 项目配置
├── vite.config.js         # Vite构建配置
├── tailwind.config.js     # Tailwind CSS配置
├── .eslintrc.js           # ESLint配置
├── postcss.config.js      # PostCSS配置
├── README.md              # 项目说明文档
├── 开发文档.md            # 完整开发文档
└── LICENSE                # MIT许可证
```

### RequireJS项目结构（开发中）
```
/opt/src/sxl/
├── src/                    # RequireJS源代码目录
│   ├── js/                # JavaScript文件
│   │   ├── modules/       # RequireJS模块
│   │   │   ├── hero.js    # 主标题区域模块
│   │   │   ├── benefits.js # 核心优势模块
│   │   │   ├── process.js  # 学习流程模块
│   │   │   ├── features.js # 核心功能模块
│   │   │   ├── founder.js  # 创始人模块
│   │   │   ├── team.js     # 团队模块
│   │   │   ├── testimonials.js # 用户见证模块
│   │   │   ├── faq.js      # 常见问题模块
│   │   │   └── cta.js      # 行动号召模块
│   │   ├── lib/           # 第三方库
│   │   └── main.js        # RequireJS主入口
│   ├── css/               # 样式文件
│   │   └── main.css       # 主样式文件
│   ├── templates/         # HTML模板
│   ├── data/              # 数据文件
│   │   └── content.js     # 内容数据
│   ├── assets/            # 静态资源（图片等）
│   └── index.html         # 单页面入口
├── RequireJS/             # RequireJS编译输出目录
│   ├── index.html         # 编译后的HTML
│   ├── js/                # 编译后的JS
│   ├── css/               # 编译后的CSS
│   └── assets/            # 复制的静态资源
├── build.js               # RequireJS构建配置
└── logs/photos/           # 图片资源源文件
```

## 技术栈

**已选定并实施的技术方案：**
- **前端框架**: Vue 3 + Composition API
- **构建工具**: Vite 5.0
- **样式框架**: Tailwind CSS 3.4
- **状态管理**: Pinia 2.1
- **路由**: Vue Router 4.2
- **代码规范**: ESLint + Prettier
- **包管理**: npm/yarn

## 项目需求

### 法律合规要求
- 必须包含 ICP 备案号：京ICP备2021017602号（链接到 https://beian.miit.gov.cn/）
- 必须包含公安备案号：京公网安备11010802035175号（链接到 https://beian.mps.gov.cn/）
- 备案信息必须显示在网站底部

### 技术需求
- 必须是响应式设计（移动端优先，因为移动端是主要使用场景）
- 必须支持嵌入B站视频播放宣传内容
- 必须包含照片墙功能

### 功能需求
- **Bilibili视频自动播放**: 支持B站视频嵌入和自动播放
- **照片墙**: 分类展示、图片预览、全屏浏览
- **产品展示**: 大创社群、CSS播客、AI搞钱周刊
- **响应式设计**: 移动端友好的用户界面
- **SEO优化**: 适当的meta标签和页面结构

## 开发状态

**当前状态（2025-01-11）**: 迁移方案规划阶段 🔄

### 已完成的工作
- ✅ 项目架构设计和技术选型
- ✅ 完整的Vue 3 + Vite + Tailwind CSS项目结构
- ✅ 所有核心组件开发完成
- ✅ 5个主要页面实现：首页、关于我们、产品展示、照片墙、联系我们
- ✅ Bilibili视频播放组件 (VideoSection.vue)
- ✅ 照片墙组件 (PhotoGallery.vue) - 支持6个分类
- ✅ 响应式设计和移动端优化
- ✅ 备案信息和法律合规要求
- ✅ 完整的数据结构和内容管理
- ✅ 开发文档和部署说明
- ✅ RequireJS迁移方案规划和技术调研（2025-01-11）
- ✅ 高转化率着陆页面结构分析
- ✅ 现有图片资源盘点和映射规划

### 当前工作重点
**RequireJS单页落地页迁移项目**
- 目标：实现从 https://www.xiaoyuanvc.com/ 到独立主机的完整迁移
- 技术方案：基于RequireJS模块化开发框架
- 内容来源：sxl/src/home.md + sxl/logs/photos图片资源
- 输出目录：sxl/RequireJS/

### 项目文件统计
- Vue组件: 10+ 个
- 页面视图: 5 个
- 数据文件: 2 个（产品数据、照片墙数据）
- 配置文件: 6 个
- 文档文件: 2 个
- 图片资源: 25+ 个（来自logs/photos目录）

### GitHub Issues
- Issue #2: 校园VC官网重构完整开发计划 (已创建)
- Issue #5: RequireJS单页落地页迁移方案 (已创建 - 2025-01-11)
- 开发计划链接: https://github.com/VCCampus/sxl/issues/2
- 迁移方案链接: https://github.com/VCCampus/sxl/issues/5

## 开发工作流程

### 基本命令
```bash
# 安装依赖
npm install

# 开发环境
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview

# 代码检查
npm run lint

# 代码格式化
npm run format
```

### 开发流程
1. 开发环境运行：`npm run dev`
2. 开发完成后：`npm run build`
3. 部署：将 `public/` 目录内容部署到静态网站托管服务

## 核心功能实现

### 1. Bilibili视频播放 (VideoSection.vue)
- **位置**: `src/components/sections/VideoSection.vue`
- **功能**: 支持B站视频嵌入、自动播放、响应式播放器
- **参数**: 可配置视频BV号、标题、描述等

### 2. 照片墙功能 (PhotoGallery.vue)
- **位置**: `src/components/sections/PhotoGallery.vue`
- **功能**: 分类筛选、图片懒加载、全屏预览、键盘导航
- **分类**: 活动现场、团队风采、产品展示、办公环境、荣誉奖项、全部

### 3. 产品展示系统
- **数据源**: `src/data/products.js`
- **产品**: 大创社群、CSS播客、AI搞钱周刊、创业工具箱
- **功能**: 详细信息展示、产品详情模态框

### 4. 响应式设计
- **框架**: Tailwind CSS
- **特点**: 移动端优先、自适应布局、触摸友好交互

## 内容管理

### 产品数据更新
编辑 `src/data/products.js` 文件，修改产品信息、统计数据等

### 照片墙内容更新
编辑 `src/data/gallery.js` 文件，添加新照片或修改现有照片信息

### 团队信息更新
编辑 `src/views/About.vue` 文件中的团队成员、发展历程等内容

## 部署说明

### 构建输出
- **目标目录**: `public/`
- **文件类型**: 静态HTML、CSS、JavaScript文件
- **部署方式**: 直接部署到静态网站托管服务

### 部署要求
- 支持单页应用(SPA)路由
- 正确的MIME类型配置
- 启用Gzip压缩
- 适当的缓存策略

## 重要注意事项

1. **备案信息**: 确保页面底部正确显示备案信息和链接
2. **移动端优化**: 主要用户通过移动设备访问，优先保证移动端体验
3. **内容更新**: 定期更新产品数据和照片墙内容
4. **性能优化**: 注意图片优化和加载速度
5. **SEO**: 确保页面title、meta描述等SEO元素正确设置

## 内部指令

### /sync-status
**用途**: 每次完成 Issue 任务后，自动同步项目状态到 CLAUDE.md 文件

**触发时机**: 
- 完成 GitHub Issue 任务后
- 重大功能开发完成后
- 项目状态发生重要变化时

**执行内容**:
1. 更新开发状态部分
2. 同步已完成的工作列表
3. 更新项目统计信息
4. 记录时间戳和变更摘要

**使用方法**: 
在完成任务后调用 `/sync-status`，系统将自动更新项目状态到 CLAUDE.md

## 迁移计划

### RequireJS单页落地页项目时间线
- **2025-01-11**: 迁移方案规划完成，GitHub Issue #5 创建
- **2025-01-12**: 开始RequireJS基础架构搭建
- **2025-01-15**: 完成核心模块开发
- **2025-01-20**: 完成样式和交互实现
- **2025-01-25**: 完成测试和生产部署

### 技术迁移重点
1. **保持原网站效果**: 确保从 xiaoyuanvc.com 迁移时功能和体验不降低
2. **模块化重构**: 基于RequireJS实现高可维护性的代码结构
3. **高转化率设计**: 参考专业着陆页面设计原则
4. **性能优化**: 单页面应用的加载速度和用户体验优化

## 后续优化计划

1. **内容完善**: 补充实际的图片、视频、文案内容
2. **SEO优化**: 添加结构化数据、优化meta标签
3. **性能优化**: 图片压缩、代码分割、CDN配置
4. **功能扩展**: 考虑添加搜索功能、评论系统等
5. **国际化**: 如需要，添加多语言支持
6. **RequireJS迁移**: 基于现有内容创建高转化率单页落地页

---

**最后更新**: 2025-01-11
**当前版本**: v1.0.0
**项目状态**: 迁移方案规划阶段，开始RequireJS单页落地页开发