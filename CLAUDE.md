# CLAUDE.md

此文件为 Claude Code (claude.ai/code) 在本仓库中工作时提供指导。

## 项目概述

这是 `sxl` 项目 - 校园VC官网的静态网站重构项目。目标是将原有的 sxl.com（校园VC - Campus VC）官网从现有托管方案迁移到自主托管的静态网站。

## 项目结构
> 基本约定:

无论怎么迭代项目根目录要保持整洁, 只有以下目录和文件:

```
.
├── .claude ~ CLaude 内置指令
├── .git ~ 版本仓库
├── .gitignore ~ git 忽略配置
├── CLAUDE.md ~ Claude 工程自述
├── README.md ~ 工程自述
├── disused/ ~ 失效工程
├── docs/ ~ 工程文档
├── logs/ ~ 工程日志
├── public/ ~ 正式编译成果, 用以发布
├── scripts/ ~ 辅助脚本
└── src/ ~ 工程代码
```

迭代过程中, 

- 各种 测试/部署脚本, 都输出到 scripts/
- 各种检验成果和记录, 都输出到 docs/reports/
- 各种开发计划, 都记录在 docs/plans/

### 当前项目结构（Nuxt 3 + Element Plus）
```
/opt/src/sxl/
├── 📋 项目文档
│   ├── CLAUDE.md                          # Claude 指导文档
│   ├── README.md                          # 项目说明文档
│   └── docs/                              # 文档目录
│       ├── plans/migration-plan.md        # 迁移计划
│       ├── reports/                       # 开发报告
│       │   ├── development-report-20250710.md
│       │   └── requirejs-implementation-report-20250111.md
│       └── research/                      # 研究文档
│
...
│
├── 🗂️ 历史版本存档
│   ├── disused/                           # 已停用的版本
│   │   ├── RequireJS/                     # RequireJS 版本
│   │   │   ├── assets/                    # 图片资源 (27个)
│   │   │   ├── css/main.css
│   │   │   ├── js/main.js
│   │   │   ├── data/content.js
│   │   │   └── index.html
│   │   ├── src/                           # 早期 Vue 版本
│   │   │   ├── assets/                    # 图片资源 (27个)
│   │   │   ├── css/main.css
│   │   │   ├── js/modules/                # 功能模块 (10个)
│   │   │   └── index.html
│   │   └── vue/home.md                    # Vue 版本说明
│   └── scripts/                           # 构建和测试脚本
│       ├── build.js
│       ├── test-website.js
│       ├── website-migrator.js
│       └── 其他工具脚本
└── .gitignore                             # Git忽略文件
```


## 技术栈

**计划技术方案（2025-07-11更新）：**
- **前端框架**: Astro 4.x + Vue 3.4.0 + Composition API
- **组件库**: Vue 3 组件 + Tailwind CSS 原生组件
- **构建工具**: Vite (集成在 Astro 中)
- **样式框架**: Tailwind CSS 3.4.0
- **预渲染**: Astro Static Site Generation (SSG)
- **开发模式**: 混合渲染，HTML 优先，按需 hydration
- **包管理**: npm
- **部署**: 静态网站托管

**当前技术方案（Nuxt 3 - 即将迁移）：**
- **前端框架**: Nuxt 3.9.0 + Vue 3.4.0 + Composition API
- **组件库**: Element Plus 2.4.4
- **构建工具**: Vite (集成在 Nuxt 中)
- **样式框架**: Tailwind CSS 3.4.0
- **预渲染**: Nuxt Static Site Generation (SSG)
- **开发模式**: SSR禁用，使用纯静态生成
- **包管理**: npm
- **部署**: 静态网站托管

**历史版本技术栈：**
- **RequireJS版本**: 模块化JavaScript + 原生CSS
- **早期Vue版本**: Vue 2.x + 模块化组件设计

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

**当前状态（2025-07-11）**: 准备重构为 Astro + Vue + Tailwind CSS 🚀

### 已完成的工作
- ✅ 项目架构设计和技术选型
- ✅ 完整的Vue 3 + Vite + Tailwind CSS项目结构
- ✅ 所有核心组件开发完成
- ✅ 7个主要页面区块实现：英雄区、优势展示、流程介绍、团队介绍、用户见证、常见问题、行动号召
- ✅ 响应式设计和移动端优化
- ✅ 备案信息和法律合规要求
- ✅ 完整的数据结构和内容管理
- ✅ 开发文档和部署说明
- ✅ RequireJS迁移方案规划和技术调研（2025-01-11）
- ✅ 高转化率着陆页面结构分析
- ✅ 现有图片资源盘点和映射规划
- ✅ **Nuxt 3 + Element Plus 升级完成（2025-07-11）**
- ✅ **SEO 优化和性能提升**
- ✅ **项目结构整理和清理**
- ✅ **静态网站构建和部署**

### 当前工作重点
**Astro + Vue + Tailwind CSS 技术栈重构**
- 目标：基于 Astro 4.x 的现代化静态网站生成器
- 技术方案：Astro 4.x + Vue 3.4.0 + Tailwind CSS 3.4.0
- 构建输出：`/opt/src/sxl/public/` 静态网站
- 重构原因：更好的性能、更轻量的构建、更优的SEO
- 内容来源：`/opt/src/sxl/logs/xiaoyuanvc.md` 和 `/opt/src/sxl/logs/xiaoyuanvc/` 图片资源
- 项目结构：遵循既定的根目录整洁原则

### 项目文件统计
- **总文件数**: 96个源代码文件
- **Vue组件**: 8个 (7个 sections + 1个 common)
- **页面**: 1个 (index.vue)
- **数据文件**: 1个 (content.js)
- **配置文件**: 3个 (nuxt.config.ts, tailwind.config.js, package.json)
- **文档文件**: 5个 (README.md, CLAUDE.md, 开发报告等)
- **图片资源**: 77个 (来自原项目资源，存在重复)
- **构建输出**: 静态网站文件 (HTML, CSS, JS)
- **项目规模**: 359MB 总大小，338MB 为开发依赖

### GitHub Issues
- Issue #2: 校园VC官网重构完整开发计划 (已创建)
- Issue #5: RequireJS单页落地页迁移方案 (已创建 - 2025-01-11)
- Issue #9: Vue 3 项目升级到 Nuxt 3 + Element Plus (已完成 - 2025-07-11)
- Issue #10: 重构为 Astro + Vue + Tailwind CSS (进行中 - 2025-07-11)
- 开发计划链接: https://github.com/VCCampus/sxl/issues/2
- 迁移方案链接: https://github.com/VCCampus/sxl/issues/5
- 升级完成链接: https://github.com/VCCampus/sxl/issues/9
- 当前重构链接: https://github.com/VCCampus/sxl/issues/10

## 开发工作流程

### 基本命令
```bash
# 进入开发目录
cd nuxt-app

# 安装依赖
npm install

# 开发环境
npm run dev

# 构建生产版本
npm run generate

# 预览构建结果
npm run preview
```

### 开发流程
1. 开发环境运行：`cd nuxt-app && npm run dev`
2. 开发完成后：`cd nuxt-app && npm run generate`
3. 部署：`public/` 目录内容已自动生成，可直接部署到静态网站托管服务

## 核心功能实现

### 1. 英雄区块 (HeroSection.vue)
- **位置**: `nuxt-app/components/sections/HeroSection.vue`
- **功能**: 主标题展示、CTA按钮、视差滚动效果
- **Element Plus**: el-button, el-image, el-tooltip

### 2. 优势展示 (BenefitsSection.vue)
- **位置**: `nuxt-app/components/sections/BenefitsSection.vue`
- **功能**: 核心优势展示、进度条、统计数据
- **Element Plus**: el-card, el-progress, el-statistic

### 3. 流程介绍 (ProcessSection.vue)
- **位置**: `nuxt-app/components/sections/ProcessSection.vue`
- **功能**: 学习流程步骤、时间线展示
- **Element Plus**: el-steps, el-timeline

### 4. 团队介绍 (TeamSection.vue)
- **位置**: `nuxt-app/components/sections/TeamSection.vue`
- **功能**: 团队成员展示、轮播图
- **Element Plus**: el-carousel, el-card

### 5. 用户见证 (TestimonialsSection.vue)
- **位置**: `nuxt-app/components/sections/TestimonialsSection.vue`
- **功能**: 用户评价展示、评分系统
- **Element Plus**: el-rate, el-card

### 6. 常见问题 (FaqSection.vue)
- **位置**: `nuxt-app/components/sections/FaqSection.vue`
- **功能**: 折叠面板、在线客服
- **Element Plus**: el-collapse, el-button

### 7. 行动号召 (CtaSection.vue)
- **位置**: `nuxt-app/components/sections/CtaSection.vue`
- **功能**: 最终转化、倒计时、信任指标
- **Element Plus**: el-button, el-countdown

### 8. 页脚组件 (Footer.vue)
- **位置**: `nuxt-app/components/common/Footer.vue`
- **功能**: 备案信息、联系方式、社交媒体
- **Element Plus**: el-row, el-col, el-image, el-icon

### 9. 响应式设计
- **框架**: Tailwind CSS 3.4.0
- **特点**: 移动端优先、自适应布局、Element Plus主题集成

## 内容管理

### 内容数据更新
编辑 `nuxt-app/data/content.js` 文件，修改页面内容、产品信息、统计数据等

### 图片资源更新
将新图片添加到 `nuxt-app/public/images/` 目录，并在 `content.js` 中引用

### 组件样式更新
编辑对应的 `.vue` 文件中的 `<style>` 部分，或修改 `nuxt-app/assets/css/main.css`

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

### 技术升级时间线
- **2025-01-11**: 迁移方案规划完成，GitHub Issue #5 创建
- **2025-07-11**: Nuxt 3 + Element Plus 升级完成，GitHub Issue #9 完成
- **当前状态**: 生产环境部署就绪，项目结构整理完成

### 技术升级成果
1. **现代化架构**: 完成从传统架构到 Nuxt 3 + Element Plus 的完整升级
2. **组件化设计**: 实现高度模块化和可维护的代码结构
3. **用户体验优化**: Element Plus 组件库提供一致的用户界面
4. **性能提升**: SSG 静态生成，优化加载速度和SEO表现
5. **开发效率**: TypeScript 支持，现代化开发工具链

## 后续优化计划

1. **资源优化**: 清理冗余图片资源，实现 WebP 格式转换
2. **性能优化**: 代码分割、CDN 配置、图片懒加载
3. **SEO增强**: 添加结构化数据、sitemap.xml、robots.txt
4. **功能扩展**: 考虑添加在线客服、表单提交等交互功能
5. **监控体系**: 添加性能监控、错误追踪、用户行为分析
6. **国际化**: 如需要，添加多语言支持
7. **内容管理**: 考虑集成 Headless CMS 实现内容动态管理

---

**最后更新**: 2025-07-11
**当前版本**: v3.0.0 (计划中)
**项目状态**: 准备重构为 Astro + Vue + Tailwind CSS (Issue #10)
**技术栈**: Astro 4.x + Vue 3.4.0 + Tailwind CSS 3.4.0 (计划中)
**部署方式**: 静态网站生成 (SSG)
**内容来源**: `/opt/src/sxl/logs/xiaoyuanvc.md` + 27张图片资源
**构建状态**: 🚀 准备开始重构，目标输出到 `/opt/src/sxl/public/`