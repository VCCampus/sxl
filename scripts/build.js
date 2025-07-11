({
    // 应用目录
    appDir: "src",
    
    // 基础URL路径
    baseUrl: "js",
    
    // 输出目录
    dir: "RequireJS",
    
    // 模块配置
    modules: [
        {
            name: "main",
            include: [
                "modules/hero",
                "modules/lossAversion",
                "modules/video",
                "modules/benefits",
                "modules/process",
                "modules/features",
                "modules/founder",
                "modules/team",
                "modules/testimonials",
                "modules/faq",
                "modules/cta"
            ]
        }
    ],
    
    // 路径配置
    paths: {
        // 如果需要jQuery等第三方库，在此配置
        // "jquery": "lib/jquery.min"
    },
    
    // 文件排除规则
    fileExclusionRegExp: /^(r|build)\.js$/,
    
    // CSS优化
    optimizeCss: "standard",
    
    // 移除合并后的文件
    removeCombined: true,
    
    // 保留许可证注释
    preserveLicenseComments: false,
    
    // 优化级别
    optimize: "none",
    
    // uglify2配置
    uglify2: {
        output: {
            beautify: false
        },
        compress: {
            drop_console: true
        },
        warnings: false
    },
    
    // 查找嵌套依赖
    findNestedDependencies: true,
    
    // 跳过模块化
    skipModuleInsertion: false,
    
    // 严格模式
    useStrict: true,
    
    // 源码映射
    generateSourceMaps: false,
    
    // 复制非JS/CSS文件
    copyFiles: true
})