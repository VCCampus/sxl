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

### 当前项目结构（Vue 3 + Tailwind CSS 多页网站）
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

**当前技术方案（2025-07-14实施完成）：**
- **前端框架**: Vue 3.4.0 + Composition API
- **路由系统**: Vue Router 4 (多页面路由)
- **构建工具**: Vite 5.3.0
- **样式框架**: Tailwind CSS 3.4.0
- **预渲染**: Vite Static Site Generation (SSG)
- **开发模式**: SPA + 静态生成
- **包管理**: npm (147个依赖包)
- **部署**: 静态网站托管

**历史技术方案（已迁移至disused/）：**
- **Astro版本**: Astro 4.x + Vue 3.4.0 (单页应用) → `disused/astro/`
- **Nuxt版本**: Nuxt 3.9.0 + Element Plus 2.4.4 → 已废弃
- **RequireJS版本**: 模块化JavaScript + 原生CSS → `disused/RequireJS/`
- **早期Vue版本**: Vue 2.x + 模块化组件设计 → `disused/src/`


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

**当前状态（2025-07-14）**: Vue 3 + Tailwind CSS 多页网站重构完成 ✅

### 已完成的工作
- ✅ 项目架构设计和技术选型
- ✅ 完整的Vue 3 + Vite + Tailwind CSS项目结构
- ✅ **Vue 3 + Tailwind CSS 多页网站重构完成（2025-07-14）**
- ✅ **6个独立页面实现**: 首页、关于我们、服务项目、团队介绍、成功案例、联系我们
- ✅ **组件化布局**: Header导航 + Footer页脚 + 响应式设计
- ✅ **Vue Router 4路由**: 多页面导航和URL管理
- ✅ 响应式设计和移动端优化
- ✅ 备案信息和法律合规要求
- ✅ 完整的数据结构和内容管理
- ✅ **静态网站构建和部署**: 27.23 kB CSS + 178.21 kB JS
- ✅ **图片资源迁移**: 27张原始图片 + 30+张占位符图片
- ✅ 开发文档和部署说明
- ✅ RequireJS迁移方案规划和技术调研（2025-01-11）
- ✅ 高转化率着陆页面结构分析
- ✅ 现有图片资源盘点和映射规划
- ✅ **Nuxt 3 + Element Plus 升级完成（2025-07-11）**
- ✅ **SEO 优化和性能提升**
- ✅ **项目结构整理和清理**

### 当前工作重点
**Vue 3 + Tailwind CSS 多页网站维护和优化**
- ✅ **技术架构**: Vue 3.4.0 + Vue Router 4 + Vite 5.3.0 + Tailwind CSS 3.4.0
- ✅ **构建输出**: `/opt/src/sxl/public/` 静态网站文件
- ✅ **页面结构**: 6个独立页面，组件化布局
- ✅ **资源管理**: 57+张图片资源，响应式设计
- 🔄 **后续优化**: 内容完善、性能优化、SEO增强

### 项目文件统计（2025-07-14更新）
- **Vue页面**: 6个独立页面 (Home, About, Services, Team, Success, Contact)
- **Vue组件**: 8个 (Header, Footer + 6个页面组件)
- **路由配置**: Vue Router 4 多页面路由
- **样式文件**: Tailwind CSS + 自定义组件样式
- **数据文件**: 1个 (content.js)
- **配置文件**: 5个 (vite.config.js, tailwind.config.js, postcss.config.js, package.json, index.html)
- **图片资源**: 57+张 (27张原始 + 30+张占位符)
- **构建输出**: 27.23 kB CSS + 178.21 kB JS (Gzipped)
- **依赖包**: 147个npm包
- **项目规模**: Vue 3生态，轻量化构建

### GitHub Issues
- Issue #2: 校园VC官网重构完整开发计划 (已创建)
- Issue #5: RequireJS单页落地页迁移方案 (已创建 - 2025-01-11)
- Issue #9: Vue 3 项目升级到 Nuxt 3 + Element Plus (已完成 - 2025-07-11)
- Issue #10: 重构为 Astro + Vue + Tailwind CSS (已废弃 - 2025-07-11)
- **Issue #15: Vue+Tailwind CSS多页网站重构方案 (已完成 - 2025-07-14)** ✅
- 开发计划链接: https://github.com/VCCampus/sxl/issues/2
- 迁移方案链接: https://github.com/VCCampus/sxl/issues/5
- 升级完成链接: https://github.com/VCCampus/sxl/issues/9
- **当前重构完成链接: https://github.com/VCCampus/sxl/issues/15** ✅

## 开发工作流程

### 基本命令
```bash
# 进入开发目录
cd src

# 安装依赖
npm install

# 开发环境
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

### 开发流程
1. 开发环境运行：`cd src && npm run dev`
2. 开发完成后：`cd src && npm run build`
3. 部署：`public/` 目录内容已自动生成，可直接部署到静态网站托管服务

## 核心功能实现

### 1. 首页 (Home.vue)
- **位置**: `src/pages/Home.vue`
- **功能**: Hero区块、核心价值展示、统计数据
- **特色**: 渐变背景、动画效果、CTA按钮组

### 2. 关于我们 (About.vue)
- **位置**: `src/pages/About.vue`
- **功能**: 数字创业精英班、学习流程、使命愿景
- **特色**: B站视频嵌入、流程时间线、渐变设计

### 3. 服务项目 (Services.vue)
- **位置**: `src/pages/Services.vue`
- **功能**: 四大业务体系、服务流程、外链跳转
- **特色**: 交互式卡片、外部链接、访问权限提醒

### 4. 团队介绍 (Team.vue)
- **位置**: `src/pages/Team.vue`
- **功能**: 核心团队、公司理念、顾问团队、招聘信息
- **特色**: 团队成员卡片、技能标签、价值观展示

### 5. 成功案例 (Success.vue)
- **位置**: `src/pages/Success.vue`
- **功能**: 明星项目、学员心声、影响力数据、媒体报道
- **特色**: 项目统计、评分系统、成就标签

### 6. 联系我们 (Contact.vue)
- **位置**: `src/pages/Contact.vue`
- **功能**: 咨询表单、联系方式、常见问题、社交媒体
- **特色**: 表单验证、FAQ折叠、工作时间显示

### 7. 布局组件
- **Header**: `src/components/layout/Header.vue` - 导航菜单、移动端汉堡菜单
- **Footer**: `src/components/layout/Footer.vue` - 备案信息、快速链接、联系方式

### 8. 响应式设计
- **框架**: Tailwind CSS 3.4.0
- **特点**: 移动端优先、自适应布局、渐变设计系统
- **动画**: CSS transition + Vue动画、Intersection Observer

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

**最后更新**: 2025-07-14
**当前版本**: v4.0.0 (Vue多页版本)
**项目状态**: ✅ Vue 3 + Tailwind CSS 多页网站重构完成 (Issue #15)
**技术栈**: Vue 3.4.0 + Vue Router 4 + Vite 5.3.0 + Tailwind CSS 3.4.0
**部署方式**: 静态网站生成 (SSG)
**构建输出**: `/opt/src/sxl/public/` - 27.23 kB CSS + 178.21 kB JS (Gzipped)
**图片资源**: 57+张图片 (27张原始 + 30+张占位符)
**构建状态**: ✅ 构建成功，已生成静态网站文件