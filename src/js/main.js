/**
 * RequireJS 主入口文件
 * 校园VC单页落地页应用
 */

requirejs.config({
    baseUrl: 'js',
    paths: {
        // 模块路径配置
        'modules': 'modules'
    },
    shim: {
        // 非AMD模块的配置
    },
    // 缓存控制
    urlArgs: "v=" + (new Date()).getTime()
});

// 启动应用
requirejs([
    'modules/hero',
    'modules/lossAversion',
    'modules/video',
    'modules/benefits', 
    'modules/process',
    'modules/features',
    'modules/founder',
    'modules/team',
    'modules/testimonials',
    'modules/faq',
    'modules/cta'
], function(
    Hero,
    LossAversion,
    Video,
    Benefits,
    Process,
    Features,
    Founder,
    Team,
    Testimonials,
    FAQ,
    CTA
) {
    'use strict';
    
    // 初始化应用
    console.log('校园VC Landing Page 初始化中...');
    
    // 隐藏加载屏幕
    var loadingScreen = document.getElementById('loading');
    var appContainer = document.getElementById('app');
    
    // 初始化各个模块
    var modules = {
        hero: new Hero('hero'),
        lossAversion: new LossAversion('loss-aversion'),
        video: new Video('video'),
        benefits: new Benefits('benefits'),
        process: new Process('process'),
        features: new Features('features'),
        founder: new Founder('founder'),
        team: new Team('team'),
        testimonials: new Testimonials('testimonials'),
        faq: new FAQ('faq'),
        cta: new CTA('cta')
    };
    
    // 渲染所有模块
    Promise.all(
        Object.values(modules).map(function(module) {
            return module.render();
        })
    ).then(function() {
        // 所有模块加载完成
        console.log('所有模块加载完成');
        
        // 显示应用
        loadingScreen.style.display = 'none';
        appContainer.style.display = 'block';
        
        // 初始化滚动动画
        initScrollAnimations();
        
        // 初始化导航
        initNavigation();
        
    }).catch(function(error) {
        console.error('模块加载失败:', error);
        loadingScreen.innerHTML = '<p>加载失败，请刷新页面重试</p>';
    });
    
    // 滚动动画初始化
    function initScrollAnimations() {
        var sections = document.querySelectorAll('section');
        
        var observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        sections.forEach(function(section) {
            observer.observe(section);
        });
    }
    
    // 导航初始化
    function initNavigation() {
        // 平滑滚动
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                var target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // 固定导航栏
        var header = document.getElementById('header');
        var headerHeight = header ? header.offsetHeight : 0;
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > headerHeight) {
                header.classList.add('fixed');
            } else {
                header.classList.remove('fixed');
            }
        });
    }
});