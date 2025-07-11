/**
 * 校园VC 内容数据
 * 基于 src/home.md 的内容整理
 */
define(function() {
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