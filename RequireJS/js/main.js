/**
 * 校园VC 内容数据
 * 基于 src/home.md 的内容整理
 */
define('data/content',[],function() {
    'use strict';
    
    return {
        // 网站基本信息
        site: {
            title: "校园VC - Campus VC Program",
            description: "10年推动100万大学生创业",
            keywords: "校园VC,Campus VC,大学生创业,数字创业,创业投资,创业教育"
        },
        
        // Hero区域
        hero: {
            title: "校园VC",
            subtitle: "10年推动100万大学生创业",
            description: "数字创业解化云",
            tagline: "从零到英雄，寻找改变世界的疯子！",
            cta: {
                primary: {
                    text: "立即加入",
                    link: "#cta"
                },
                secondary: {
                    text: "了解更多",
                    link: "#benefits"
                }
            },
            backgroundImage: "assets/home-1.png"
        },
        
        // 痛点区域
        lossAversion: {
            title: "为什么现在就要行动？",
            points: [
                {
                    icon: "clock",
                    title: "时间窗口有限",
                    description: "数字创业的黄金时期，错过就是终生遗憾"
                },
                {
                    icon: "trending",
                    title: "竞争日益激烈",
                    description: "每天都有新的创业者加入，早一天就多一分优势"
                },
                {
                    icon: "opportunity",
                    title: "机会稍纵即逝",
                    description: "好的创业机会不等人，犹豫就是放弃"
                }
            ]
        },
        
        // 核心优势
        benefits: {
            title: "玩创投三主线",
            subtitle: "系统化的创业教育体系",
            items: [
                {
                    title: "项目线",
                    description: "火种节、加速营、项目路演等",
                    icon: "project",
                    details: [
                        "真实项目实战",
                        "专业导师指导",
                        "投资机构对接"
                    ],
                    image: "assets/home-8-1.png"
                },
                {
                    title: "创业线",
                    description: "创业导论、创业机会、创业团队等",
                    icon: "startup",
                    details: [
                        "系统创业理论",
                        "实战案例分析",
                        "团队组建方法"
                    ],
                    image: "assets/home-8-2.jpeg"
                },
                {
                    title: "数字线",
                    description: "数创导论、产品设计、产品运营等",
                    icon: "digital",
                    details: [
                        "数字化转型",
                        "产品思维培养",
                        "运营增长策略"
                    ],
                    image: "assets/home-8-3.jpeg"
                }
            ]
        },
        
        // 学习流程
        process: {
            title: "你的创业之旅",
            subtitle: "从想法到落地的完整路径",
            steps: [
                {
                    number: "01",
                    title: "火种节",
                    description: "激发创业灵感，找到志同道合的伙伴",
                    duration: "2天"
                },
                {
                    number: "02", 
                    title: "加速营",
                    description: "系统学习创业知识，打磨商业模式",
                    duration: "3个月"
                },
                {
                    number: "03",
                    title: "项目路演",
                    description: "对接投资机构，获得资金支持",
                    duration: "持续进行"
                }
            ]
        },
        
        // 核心功能
        features: {
            title: "数字创业精英班",
            subtitle: "培养十年后的数字创业CEO",
            description: "校园VC = 投资孵化 + 十年后的数创CEO",
            highlights: [
                {
                    icon: "target",
                    title: "明确目标",
                    description: "培养具有全球视野的数字创业领袖"
                },
                {
                    icon: "curriculum",
                    title: "体系课程", 
                    description: "理论与实践结合的完整课程体系"
                },
                {
                    icon: "network",
                    title: "资源对接",
                    description: "连接创业者、投资人、产业资源"
                },
                {
                    icon: "mentor",
                    title: "导师指导",
                    description: "行业专家一对一深度辅导"
                }
            ],
            images: [
                "assets/home-10-1.jpg",
                "assets/home-10-2.jpeg",
                "assets/home-10-3.jpeg"
            ]
        },
        
        // 创始人介绍
        founder: {
            name: "段建松",
            title: "校园VC创始合伙人",
            avatar: "assets/founder-avatar.jpg",
            bio: "著名企业家、社会知名人士。",
            achievements: [
                "清华x-lab兼职顾问",
                "清华iCenter创客导师",
                "北京大学研究生院投资导师",
                "教育部\"互联网+\"创新创业大赛评委"
            ],
            books: [
                {
                    title: "《创业的乐趣》",
                    description: "分享创业过程中的点点滴滴"
                },
                {
                    title: "《从零到英雄》",
                    description: "校园VC在清华大学x-lab的创业营教材，由北京出版社出版"
                }
            ],
            background: [
                "曾任微软Windows产品经理",
                "曾任IDG战略咨询公司In-Stat总经理",
                "1997年MBA毕业于荷兰马斯特里赫特管理学院",
                "1993年本科毕业于对外经济贸易大学国际金融专业"
            ],
            quote: "从零到英雄，寻找改变世界的疯子！"
        },
        
        // 核心团队
        team: {
            title: "核心团队",
            subtitle: "助力每一个梦想落地的行业专家",
            members: [
                {
                    name: "项方伟",
                    position: "加速营合伙人",
                    avatar: "assets/team-1.jpg",
                    bio: "种子投资孵化专家；系列创业者，现长居浙江；全职从事高科技创业项目的种子投资和孵化",
                    expertise: ["种子投资", "项目孵化", "创业辅导"]
                },
                {
                    name: "陶锋",
                    position: "创业教育合伙人",
                    avatar: "assets/team-2.jpg",
                    bio: "清华MBA校友、清华x-lab三创教育席教练。超10年互联网经验，五年多的企业管理经验",
                    expertise: ["创业教育", "互联网产品", "企业管理"]
                },
                {
                    name: "张正明",
                    position: "创新教育合伙人",
                    avatar: "assets/team-3.jpg",
                    bio: "南开大学创业研究中心成员、中国高校创新创业联盟设计思维专家委员会委员",
                    expertise: ["创新管理", "设计思维", "企业咨询"]
                },
                {
                    name: "郑羽轩",
                    position: "社创投资合伙人",
                    avatar: "assets/team-4.jpg",
                    bio: "校园VC社群负责人，校园文化学者、高校文化资源整合理念提出者",
                    expertise: ["社群运营", "公益创业", "资源整合"]
                },
                {
                    name: "曹红波",
                    position: "深圳代表",
                    avatar: "assets/team-5.jpg",
                    bio: "95后折腾青年，大二开始创业，2个月时间营业额突破93万",
                    expertise: ["校园市场", "青年创业", "商业运营"]
                }
            ]
        },
        
        // 学员反馈
        testimonials: {
            title: "学员反馈",
            subtitle: "收获远远不只于课堂",
            items: [
                {
                    name: "李明",
                    position: "某科技创始人",
                    company: "已获A轮融资",
                    avatar: "assets/student-1.jpg",
                    content: "在校园VC的三个月改变了我的人生轨迹。从一个想法到真正的产品，再到获得投资，每一步都有导师的悉心指导。",
                    rating: 5
                },
                {
                    name: "王芳",
                    position: "产品经理",
                    company: "字节跳动",
                    avatar: "assets/student-2.jpg", 
                    content: "数字线的课程让我建立了完整的产品思维体系。现在在大厂工作，这些知识每天都在用。",
                    rating: 5
                },
                {
                    name: "张强",
                    position: "连续创业者",
                    company: "第二个项目进行中",
                    avatar: "assets/student-3.jpg",
                    content: "最大的收获是认识了一群志同道合的伙伴。我们一起学习、一起创业，相互支持。",
                    rating: 5
                }
            ],
            images: [
                "assets/home-9-1.jpeg",
                "assets/home-9-2.jpeg",
                "assets/home-9-3.jpeg",
                "assets/home-9-4.jpeg"
            ]
        },
        
        // 常见问题
        faq: {
            title: "常见问题",
            subtitle: "你想知道的都在这里",
            items: [
                {
                    question: "什么是校园VC？",
                    answer: "校园VC是一个专注于大学生创业教育和投资孵化的平台。我们通过系统的课程体系、实战项目和资源对接，帮助大学生实现创业梦想。"
                },
                {
                    question: "参加校园VC需要什么条件？",
                    answer: "我们欢迎所有对创业有热情的大学生和年轻人加入。不需要有创业经验，只要你有想法、有激情、愿意学习和实践。"
                },
                {
                    question: "课程是如何安排的？",
                    answer: "我们采用线上线下结合的方式，包括周末集训、晚间课程和线上学习。时间安排充分考虑学生的课业情况。"
                },
                {
                    question: "能获得投资吗？",
                    answer: "优秀的项目将有机会获得种子投资，并对接更多投资机构。我们已经帮助多个项目成功融资。"
                },
                {
                    question: "毕业后还能继续获得支持吗？",
                    answer: "当然！校园VC是一个终身学习和成长的平台，我们会持续为校友提供资源对接、投资机会等支持。"
                }
            ]
        },
        
        // 行动召唤
        cta: {
            title: "现在就开启你的创业之旅",
            subtitle: "加入校园VC，成为下一个改变世界的创业者",
            benefits: [
                "系统的创业课程体系",
                "资深导师一对一指导",
                "真实项目实战机会",
                "优质投资机构对接",
                "终身校友资源网络"
            ],
            form: {
                title: "立即报名",
                fields: [
                    {
                        name: "name",
                        label: "姓名",
                        type: "text",
                        required: true
                    },
                    {
                        name: "phone",
                        label: "手机",
                        type: "tel",
                        required: true
                    },
                    {
                        name: "email",
                        label: "邮箱",
                        type: "email",
                        required: true
                    },
                    {
                        name: "school",
                        label: "学校",
                        type: "text",
                        required: true
                    },
                    {
                        name: "message",
                        label: "创业想法",
                        type: "textarea",
                        required: false
                    }
                ],
                submitText: "提交申请"
            },
            contact: {
                wechat: {
                    title: "微信咨询",
                    qrcode: "assets/xyvc-qr.jpg"
                },
                phone: {
                    title: "电话咨询",
                    number: "400-888-8888"
                },
                email: {
                    title: "邮箱",
                    address: "contact@campusvc.com"
                }
            }
        },
        
        // 页脚信息
        footer: {
            copyright: "© 2024 校园VC. All rights reserved.",
            links: [
                {
                    text: "关于我们",
                    url: "#about"
                },
                {
                    text: "联系我们", 
                    url: "#contact"
                },
                {
                    text: "隐私政策",
                    url: "/privacy"
                }
            ],
            beian: {
                icp: {
                    text: "京ICP备2021017602号",
                    url: "https://beian.miit.gov.cn/"
                },
                police: {
                    text: "京公网安备11010802035175号",
                    url: "https://beian.mps.gov.cn/"
                }
            }
        }
    };
});
/**
 * Hero 模块
 * 主标题区域展示
 */
define('modules/hero',['data/content'], function(content) {
    'use strict';
    
    function Hero(containerId) {
        this.container = document.getElementById(containerId);
        this.data = content.hero;
    }
    
    Hero.prototype.render = function() {
        return new Promise((resolve, reject) => {
            try {
                var html = `
                    <div class="hero-content">
                        <div class="hero-bg" style="background-image: url('${this.data.backgroundImage}')"></div>
                        <div class="hero-overlay"></div>
                        <div class="hero-inner">
                            <h1 class="hero-title">${this.data.title}</h1>
                            <h2 class="hero-subtitle">${this.data.subtitle}</h2>
                            <p class="hero-description">${this.data.description}</p>
                            <p class="hero-tagline">${this.data.tagline}</p>
                            <div class="hero-cta">
                                <a href="${this.data.cta.primary.link}" class="btn btn-primary">
                                    ${this.data.cta.primary.text}
                                </a>
                                <a href="${this.data.cta.secondary.link}" class="btn btn-secondary">
                                    ${this.data.cta.secondary.text}
                                </a>
                            </div>
                        </div>
                        <div class="hero-scroll-indicator">
                            <span>向下滚动</span>
                            <div class="scroll-arrow"></div>
                        </div>
                    </div>
                `;
                
                this.container.innerHTML = html;
                this.initAnimations();
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    };
    
    Hero.prototype.initAnimations = function() {
        // 添加入场动画
        setTimeout(() => {
            this.container.querySelector('.hero-content').classList.add('animated');
        }, 100);
        
        // 滚动指示器动画
        var scrollIndicator = this.container.querySelector('.hero-scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', function() {
                var nextSection = document.getElementById('loss-aversion');
                if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    };
    
    return Hero;
});
/**
 * Loss Aversion 模块
 * 痛点阐述区域
 */
define('modules/lossAversion',['data/content'], function(content) {
    'use strict';
    
    function LossAversion(containerId) {
        this.container = document.getElementById(containerId);
        this.data = content.lossAversion;
    }
    
    LossAversion.prototype.render = function() {
        return new Promise((resolve, reject) => {
            try {
                var pointsHtml = this.data.points.map((point, index) => `
                    <div class="loss-point" data-index="${index}">
                        <div class="point-icon">
                            <i class="icon-${point.icon}"></i>
                        </div>
                        <h3 class="point-title">${point.title}</h3>
                        <p class="point-description">${point.description}</p>
                    </div>
                `).join('');
                
                var html = `
                    <div class="loss-aversion-wrapper">
                        <div class="section-header">
                            <h2 class="section-title">${this.data.title}</h2>
                        </div>
                        <div class="loss-points-grid">
                            ${pointsHtml}
                        </div>
                    </div>
                `;
                
                this.container.innerHTML = html;
                this.initAnimations();
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    };
    
    LossAversion.prototype.initAnimations = function() {
        var points = this.container.querySelectorAll('.loss-point');
        
        points.forEach((point, index) => {
            point.style.animationDelay = (index * 0.2) + 's';
        });
    };
    
    return LossAversion;
});
/**
 * 视频播放组件
 * 支持B站视频嵌入播放
 */
define('modules/video',['data/content'], function(content) {
    'use strict';
    
    function Video(containerId) {
        this.container = document.getElementById(containerId);
        
        // 调试：检查 content 和 content.video
        console.log('Content object:', content);
        console.log('Content.video:', content ? content.video : 'content is undefined');
        
        // 添加容错处理
        if (!content || !content.video) {
            console.error('Video data not found in content, using fallback data');
            this.data = {
                title: "校园VC精彩回顾",
                subtitle: "看看我们是如何帮助大学生实现创业梦想的",
                videoTitle: "校园VC创业故事分享",
                videoDescription: "真实案例分享，感受创业的力量与激情",
                embedUrl: "https://player.bilibili.com/player.html?bvid=BV1pW4y1M7JQ&autoplay=1&muted=1&high_quality=1&danmaku=0"
            };
        } else {
            this.data = content.video;
        }
        
        this.isVisible = false;
        this.observer = null;
        this.initIntersectionObserver();
    }
    
    Video.prototype.initIntersectionObserver = function() {
        var self = this;
        
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting && !self.isVisible) {
                        self.isVisible = true;
                        self.loadVideo();
                    }
                });
            }, {
                threshold: 0.1
            });
        }
    };
    
    Video.prototype.render = function() {
        var self = this;
        
        return new Promise(function(resolve) {
            var html = `
                <div class="video-container">
                    <div class="section-header">
                        <h2 class="section-title">${self.data.title}</h2>
                        <p class="section-subtitle">${self.data.subtitle}</p>
                    </div>
                    <div class="video-wrapper">
                        <div class="video-player" id="video-player">
                            <div class="video-placeholder">
                                <div class="play-button">
                                    <div class="play-icon">▶</div>
                                </div>
                                <div class="video-info">
                                    <h3>${self.data.videoTitle}</h3>
                                    <p>${self.data.videoDescription}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            self.container.innerHTML = html;
            
            // 设置观察者
            if (self.observer) {
                self.observer.observe(self.container);
            } else {
                // 降级处理：直接加载视频
                self.loadVideo();
            }
            
            resolve();
        });
    };
    
    Video.prototype.loadVideo = function() {
        var videoPlayer = document.getElementById('video-player');
        var self = this;
        
        if (videoPlayer && !this.isLoaded) {
            this.isLoaded = true;
            
            var iframe = document.createElement('iframe');
            iframe.src = this.data.embedUrl;
            iframe.width = '100%';
            iframe.height = '100%';
            iframe.frameBorder = '0';
            iframe.allowFullscreen = true;
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
            iframe.setAttribute('loading', 'lazy');
            
            // 添加加载完成事件
            iframe.onload = function() {
                videoPlayer.classList.add('loaded');
            };
            
            videoPlayer.innerHTML = '';
            videoPlayer.appendChild(iframe);
        }
    };
    
    Video.prototype.destroy = function() {
        if (this.observer) {
            this.observer.disconnect();
        }
    };
    
    return Video;
});
/**
 * Benefits 模块
 * 核心优势展示
 */
define('modules/benefits',['data/content'], function(content) {
    'use strict';
    
    function Benefits(containerId) {
        this.container = document.getElementById(containerId);
        this.data = content.benefits;
    }
    
    Benefits.prototype.render = function() {
        return new Promise((resolve, reject) => {
            try {
                var benefitsHtml = this.data.items.map((item, index) => `
                    <div class="benefit-item" data-index="${index}">
                        <div class="benefit-image">
                            <img src="${item.image}" alt="${item.title}">
                        </div>
                        <div class="benefit-content">
                            <div class="benefit-icon">
                                <i class="icon-${item.icon}"></i>
                            </div>
                            <h3 class="benefit-title">${item.title}</h3>
                            <p class="benefit-description">${item.description}</p>
                            <ul class="benefit-details">
                                ${item.details.map(detail => `<li>${detail}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `).join('');
                
                var html = `
                    <div class="benefits-wrapper">
                        <div class="section-header">
                            <h2 class="section-title">${this.data.title}</h2>
                            <p class="section-subtitle">${this.data.subtitle}</p>
                        </div>
                        <div class="benefits-grid">
                            ${benefitsHtml}
                        </div>
                    </div>
                `;
                
                this.container.innerHTML = html;
                this.initInteractions();
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    };
    
    Benefits.prototype.initInteractions = function() {
        var items = this.container.querySelectorAll('.benefit-item');
        
        items.forEach(function(item, index) {
            // 添加悬停效果
            item.addEventListener('mouseenter', function() {
                this.classList.add('hover');
            });
            
            item.addEventListener('mouseleave', function() {
                this.classList.remove('hover');
            });
            
            // 添加延迟动画
            item.style.animationDelay = (index * 0.1) + 's';
        });
    };
    
    return Benefits;
});
/**
 * Process 模块
 * 学习流程展示
 */
define('modules/process',['data/content'], function(content) {
    'use strict';
    
    function Process(containerId) {
        this.container = document.getElementById(containerId);
        this.data = content.process;
    }
    
    Process.prototype.render = function() {
        return new Promise((resolve, reject) => {
            try {
                var stepsHtml = this.data.steps.map((step, index) => `
                    <div class="process-step" data-step="${index + 1}">
                        <div class="step-number">${step.number}</div>
                        <div class="step-content">
                            <h3 class="step-title">${step.title}</h3>
                            <p class="step-description">${step.description}</p>
                            <span class="step-duration">${step.duration}</span>
                        </div>
                        ${index < this.data.steps.length - 1 ? '<div class="step-connector"></div>' : ''}
                    </div>
                `).join('');
                
                var html = `
                    <div class="process-wrapper">
                        <div class="section-header">
                            <h2 class="section-title">${this.data.title}</h2>
                            <p class="section-subtitle">${this.data.subtitle}</p>
                        </div>
                        <div class="process-timeline">
                            ${stepsHtml}
                        </div>
                    </div>
                `;
                
                this.container.innerHTML = html;
                this.initTimeline();
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    };
    
    Process.prototype.initTimeline = function() {
        var steps = this.container.querySelectorAll('.process-step');
        var container = this.container;
        
        // 创建时间线进度追踪
        var observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };
        
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // 激活连接线动画
                    var connector = entry.target.querySelector('.step-connector');
                    if (connector) {
                        setTimeout(function() {
                            connector.classList.add('active');
                        }, 300);
                    }
                }
            });
        }, observerOptions);
        
        steps.forEach(function(step) {
            observer.observe(step);
        });
    };
    
    return Process;
});
/**
 * Features 模块
 * 核心功能展示
 */
define('modules/features',['data/content'], function(content) {
    'use strict';
    
    function Features(containerId) {
        this.container = document.getElementById(containerId);
        this.data = content.features;
    }
    
    Features.prototype.render = function() {
        return new Promise((resolve, reject) => {
            try {
                var highlightsHtml = this.data.highlights.map(highlight => `
                    <div class="feature-highlight">
                        <div class="highlight-icon">
                            <i class="icon-${highlight.icon}"></i>
                        </div>
                        <h4 class="highlight-title">${highlight.title}</h4>
                        <p class="highlight-description">${highlight.description}</p>
                    </div>
                `).join('');
                
                var imagesHtml = this.data.images.map((image, index) => `
                    <div class="feature-image" data-index="${index}">
                        <img src="${image}" alt="教学现场 ${index + 1}">
                    </div>
                `).join('');
                
                var html = `
                    <div class="features-wrapper">
                        <div class="section-header">
                            <h2 class="section-title">${this.data.title}</h2>
                            <p class="section-subtitle">${this.data.subtitle}</p>
                            <p class="section-description">${this.data.description}</p>
                        </div>
                        <div class="features-content">
                            <div class="features-highlights">
                                ${highlightsHtml}
                            </div>
                            <div class="features-gallery">
                                ${imagesHtml}
                            </div>
                        </div>
                    </div>
                `;
                
                this.container.innerHTML = html;
                this.initGallery();
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    };
    
    Features.prototype.initGallery = function() {
        var images = this.container.querySelectorAll('.feature-image');
        var currentIndex = 0;
        
        // 自动轮播
        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
        }
        
        showImage(0);
        
        // 自动切换
        setInterval(function() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }, 3000);
        
        // 点击切换
        images.forEach((img, index) => {
            img.addEventListener('click', function() {
                currentIndex = index;
                showImage(currentIndex);
            });
        });
    };
    
    return Features;
});
/**
 * Founder 模块
 * 创始人介绍
 */
define('modules/founder',['data/content'], function(content) {
    'use strict';
    
    function Founder(containerId) {
        this.container = document.getElementById(containerId);
        this.data = content.founder;
    }
    
    Founder.prototype.render = function() {
        return new Promise((resolve, reject) => {
            try {
                var achievementsHtml = this.data.achievements.map(achievement => 
                    `<li>${achievement}</li>`
                ).join('');
                
                var booksHtml = this.data.books.map(book => `
                    <div class="book-item">
                        <h4 class="book-title">${book.title}</h4>
                        <p class="book-description">${book.description}</p>
                    </div>
                `).join('');
                
                var backgroundHtml = this.data.background.map(item => 
                    `<li>${item}</li>`
                ).join('');
                
                var html = `
                    <div class="founder-wrapper">
                        <div class="section-header">
                            <h2 class="section-title">创始人介绍</h2>
                        </div>
                        <div class="founder-content">
                            <div class="founder-profile">
                                <div class="founder-avatar">
                                    <img src="${this.data.avatar || 'assets/default-avatar.jpg'}" alt="${this.data.name}">
                                </div>
                                <div class="founder-info">
                                    <h3 class="founder-name">${this.data.name}</h3>
                                    <p class="founder-title">${this.data.title}</p>
                                    <p class="founder-bio">${this.data.bio}</p>
                                </div>
                            </div>
                            <div class="founder-details">
                                <div class="detail-section">
                                    <h4>主要成就</h4>
                                    <ul class="achievements-list">
                                        ${achievementsHtml}
                                    </ul>
                                </div>
                                <div class="detail-section">
                                    <h4>出版著作</h4>
                                    <div class="books-list">
                                        ${booksHtml}
                                    </div>
                                </div>
                                <div class="detail-section">
                                    <h4>背景经历</h4>
                                    <ul class="background-list">
                                        ${backgroundHtml}
                                    </ul>
                                </div>
                            </div>
                            <blockquote class="founder-quote">
                                "${this.data.quote}"
                            </blockquote>
                        </div>
                    </div>
                `;
                
                this.container.innerHTML = html;
                this.initAnimations();
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    };
    
    Founder.prototype.initAnimations = function() {
        var detailSections = this.container.querySelectorAll('.detail-section');
        
        detailSections.forEach((section, index) => {
            section.style.animationDelay = (index * 0.2) + 's';
        });
    };
    
    return Founder;
});
/**
 * Team 模块
 * 核心团队展示
 */
define('modules/team',['data/content'], function(content) {
    'use strict';
    
    function Team(containerId) {
        this.container = document.getElementById(containerId);
        this.data = content.team;
    }
    
    Team.prototype.render = function() {
        return new Promise((resolve, reject) => {
            try {
                var membersHtml = this.data.members.map((member, index) => `
                    <div class="team-member" data-index="${index}">
                        <div class="member-card">
                            <div class="member-avatar">
                                <img src="${member.avatar || 'assets/default-avatar.jpg'}" alt="${member.name}">
                            </div>
                            <div class="member-info">
                                <h3 class="member-name">${member.name}</h3>
                                <p class="member-position">${member.position}</p>
                                <p class="member-bio">${member.bio}</p>
                                <div class="member-expertise">
                                    ${member.expertise.map(skill => 
                                        `<span class="expertise-tag">${skill}</span>`
                                    ).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('');
                
                var html = `
                    <div class="team-wrapper">
                        <div class="section-header">
                            <h2 class="section-title">${this.data.title}</h2>
                            <p class="section-subtitle">${this.data.subtitle}</p>
                        </div>
                        <div class="team-grid">
                            ${membersHtml}
                        </div>
                    </div>
                `;
                
                this.container.innerHTML = html;
                this.initInteractions();
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    };
    
    Team.prototype.initInteractions = function() {
        var members = this.container.querySelectorAll('.team-member');
        
        members.forEach((member, index) => {
            // 添加进入动画延迟
            member.style.animationDelay = (index * 0.1) + 's';
            
            // 悬停效果
            member.addEventListener('mouseenter', function() {
                this.classList.add('hover');
            });
            
            member.addEventListener('mouseleave', function() {
                this.classList.remove('hover');
            });
        });
    };
    
    return Team;
});
/**
 * Testimonials 模块
 * 学员反馈展示
 */
define('modules/testimonials',['data/content'], function(content) {
    'use strict';
    
    function Testimonials(containerId) {
        this.container = document.getElementById(containerId);
        this.data = content.testimonials;
    }
    
    Testimonials.prototype.render = function() {
        return new Promise((resolve, reject) => {
            try {
                var testimonialsHtml = this.data.items.map((item, index) => `
                    <div class="testimonial-item" data-index="${index}">
                        <div class="testimonial-card">
                            <div class="testimonial-header">
                                <img class="testimonial-avatar" src="${item.avatar || 'assets/default-avatar.jpg'}" alt="${item.name}">
                                <div class="testimonial-author">
                                    <h4 class="author-name">${item.name}</h4>
                                    <p class="author-position">${item.position}</p>
                                    <p class="author-company">${item.company}</p>
                                </div>
                            </div>
                            <div class="testimonial-content">
                                <p>"${item.content}"</p>
                            </div>
                            <div class="testimonial-rating">
                                ${this.generateStars(item.rating)}
                            </div>
                        </div>
                    </div>
                `).join('');
                
                var imagesHtml = this.data.images.map((image, index) => `
                    <div class="activity-image" data-index="${index}">
                        <img src="${image}" alt="学员活动 ${index + 1}">
                    </div>
                `).join('');
                
                var html = `
                    <div class="testimonials-wrapper">
                        <div class="section-header">
                            <h2 class="section-title">${this.data.title}</h2>
                            <p class="section-subtitle">${this.data.subtitle}</p>
                        </div>
                        <div class="testimonials-carousel">
                            ${testimonialsHtml}
                        </div>
                        <div class="testimonials-nav">
                            <button class="nav-prev">‹</button>
                            <div class="nav-dots"></div>
                            <button class="nav-next">›</button>
                        </div>
                        <div class="activity-gallery">
                            <h3>学员风采</h3>
                            <div class="activity-images">
                                ${imagesHtml}
                            </div>
                        </div>
                    </div>
                `;
                
                this.container.innerHTML = html;
                this.initCarousel();
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    };
    
    Testimonials.prototype.generateStars = function(rating) {
        var stars = '';
        for (var i = 0; i < 5; i++) {
            stars += `<span class="star ${i < rating ? 'filled' : ''}">★</span>`;
        }
        return stars;
    };
    
    Testimonials.prototype.initCarousel = function() {
        var carousel = this.container.querySelector('.testimonials-carousel');
        var items = this.container.querySelectorAll('.testimonial-item');
        var prevBtn = this.container.querySelector('.nav-prev');
        var nextBtn = this.container.querySelector('.nav-next');
        var dotsContainer = this.container.querySelector('.nav-dots');
        var currentIndex = 0;
        
        // 创建导航点
        items.forEach((_, index) => {
            var dot = document.createElement('span');
            dot.className = 'nav-dot';
            dot.addEventListener('click', () => this.goToSlide(index));
            dotsContainer.appendChild(dot);
        });
        
        var dots = dotsContainer.querySelectorAll('.nav-dot');
        
        // 显示指定索引的幻灯片
        this.goToSlide = function(index) {
            items.forEach((item, i) => {
                item.classList.toggle('active', i === index);
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            currentIndex = index;
        };
        
        // 初始显示第一个
        this.goToSlide(0);
        
        // 导航按钮事件
        prevBtn.addEventListener('click', () => {
            var newIndex = (currentIndex - 1 + items.length) % items.length;
            this.goToSlide(newIndex);
        });
        
        nextBtn.addEventListener('click', () => {
            var newIndex = (currentIndex + 1) % items.length;
            this.goToSlide(newIndex);
        });
        
        // 自动播放
        setInterval(() => {
            var newIndex = (currentIndex + 1) % items.length;
            this.goToSlide(newIndex);
        }, 5000);
    };
    
    return Testimonials;
});
/**
 * FAQ 模块
 * 常见问题展示
 */
define('modules/faq',['data/content'], function(content) {
    'use strict';
    
    function FAQ(containerId) {
        this.container = document.getElementById(containerId);
        this.data = content.faq;
    }
    
    FAQ.prototype.render = function() {
        return new Promise((resolve, reject) => {
            try {
                var faqHtml = this.data.items.map((item, index) => `
                    <div class="faq-item" data-index="${index}">
                        <div class="faq-question">
                            <h3>${item.question}</h3>
                            <span class="faq-toggle">+</span>
                        </div>
                        <div class="faq-answer">
                            <p>${item.answer}</p>
                        </div>
                    </div>
                `).join('');
                
                var html = `
                    <div class="faq-wrapper">
                        <div class="section-header">
                            <h2 class="section-title">${this.data.title}</h2>
                            <p class="section-subtitle">${this.data.subtitle}</p>
                        </div>
                        <div class="faq-list">
                            ${faqHtml}
                        </div>
                    </div>
                `;
                
                this.container.innerHTML = html;
                this.initAccordion();
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    };
    
    FAQ.prototype.initAccordion = function() {
        var items = this.container.querySelectorAll('.faq-item');
        
        items.forEach(item => {
            var question = item.querySelector('.faq-question');
            var answer = item.querySelector('.faq-answer');
            var toggle = item.querySelector('.faq-toggle');
            
            question.addEventListener('click', function() {
                var isOpen = item.classList.contains('open');
                
                // 关闭其他所有项
                items.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('open');
                        otherItem.querySelector('.faq-toggle').textContent = '+';
                    }
                });
                
                // 切换当前项
                if (isOpen) {
                    item.classList.remove('open');
                    toggle.textContent = '+';
                } else {
                    item.classList.add('open');
                    toggle.textContent = '−';
                }
            });
        });
        
        // 默认打开第一个
        if (items.length > 0) {
            items[0].classList.add('open');
            items[0].querySelector('.faq-toggle').textContent = '−';
        }
    };
    
    return FAQ;
});
/**
 * CTA 模块
 * 行动号召区域
 */
define('modules/cta',['data/content'], function(content) {
    'use strict';
    
    function CTA(containerId) {
        this.container = document.getElementById(containerId);
        this.data = content.cta;
    }
    
    CTA.prototype.render = function() {
        return new Promise((resolve, reject) => {
            try {
                var benefitsHtml = this.data.benefits.map(benefit => 
                    `<li><span class="check-icon">✓</span>${benefit}</li>`
                ).join('');
                
                var formFieldsHtml = this.data.form.fields.map(field => `
                    <div class="form-group">
                        <label for="${field.name}">${field.label}${field.required ? ' *' : ''}</label>
                        ${field.type === 'textarea' 
                            ? `<textarea id="${field.name}" name="${field.name}" ${field.required ? 'required' : ''}></textarea>`
                            : `<input type="${field.type}" id="${field.name}" name="${field.name}" ${field.required ? 'required' : ''}>`
                        }
                    </div>
                `).join('');
                
                var html = `
                    <div class="cta-wrapper">
                        <div class="section-header">
                            <h2 class="section-title">${this.data.title}</h2>
                            <p class="section-subtitle">${this.data.subtitle}</p>
                        </div>
                        <div class="cta-content">
                            <div class="cta-benefits">
                                <h3>你将获得</h3>
                                <ul class="benefits-list">
                                    ${benefitsHtml}
                                </ul>
                            </div>
                            <div class="cta-form-wrapper">
                                <div class="form-container">
                                    <h3>${this.data.form.title}</h3>
                                    <form id="signup-form" class="cta-form">
                                        ${formFieldsHtml}
                                        <button type="submit" class="btn btn-primary btn-large">
                                            ${this.data.form.submitText}
                                        </button>
                                    </form>
                                </div>
                                <div class="contact-info">
                                    <div class="contact-item">
                                        <h4>${this.data.contact.wechat.title}</h4>
                                        <img src="${this.data.contact.wechat.qrcode}" alt="微信二维码" class="qrcode">
                                    </div>
                                    <div class="contact-item">
                                        <h4>${this.data.contact.phone.title}</h4>
                                        <p class="contact-number">${this.data.contact.phone.number}</p>
                                    </div>
                                    <div class="contact-item">
                                        <h4>${this.data.contact.email.title}</h4>
                                        <p><a href="mailto:${this.data.contact.email.address}">${this.data.contact.email.address}</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                
                this.container.innerHTML = html;
                this.initForm();
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    };
    
    CTA.prototype.initForm = function() {
        var form = this.container.querySelector('#signup-form');
        
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // 收集表单数据
                var formData = new FormData(form);
                var data = {};
                formData.forEach((value, key) => {
                    data[key] = value;
                });
                
                // 这里可以添加实际的提交逻辑
                console.log('表单提交:', data);
                
                // 显示成功消息
                alert('报名成功！我们会尽快与您联系。');
                form.reset();
            });
            
            // 实时验证
            var inputs = form.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                input.addEventListener('blur', function() {
                    this.classList.remove('error');
                    if (this.hasAttribute('required') && !this.value.trim()) {
                        this.classList.add('error');
                    }
                });
            });
        }
    };
    
    return CTA;
});
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
define("main", function(){});

