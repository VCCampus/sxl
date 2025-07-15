// 校园VC官网内容数据
// 基于 /opt/src/sxl/logs/xiaoyuanvc.md 整理

export const siteConfig = {
  title: "校园VC - Campus VC Program",
  description: "10年推动100万大学生创业，数字创业解化云",
  keywords: "校园VC,创业投资,数字创业,大学生创业,创业孵化",
  author: "校园VC",
  url: "https://sxl.com",
  logo: "/images/xyvc-logo.png",
  favicon: "/images/xyvc-logo.png",
  // 备案信息
  icp: "京ICP备2021017602号",
  icpUrl: "https://beian.miit.gov.cn/",
  security: "京公网安备11010802035175号",
  securityUrl: "https://beian.mps.gov.cn/",
};

export const heroSection = {
  title: "校园VC",
  subtitle: "10年推动100万大学生创业",
  description: "数字创业解化云",
  cta: "立即加入校园VC",
  ctaUrl: "#contact",
  backgroundImage: "/images/home-1.png",
  logo: "/images/xyvc-logo.png",
  slogan: "从零到英雄，寻找改变世界的疯子！",
  vcDefinition: "VC是指Venture Capital（创业投资）",
  concept: "校园VC = 投资孵化 + 十年后的数创CEO"
};

export const benefitsSection = {
  title: "数字创业精英班",
  subtitle: "Campus VC",
  description: "培养十年后的数字创业CEO",
  benefits: [
    {
      icon: "🎯",
      title: "项目线",
      description: "火种节、加速营、项目路演等"
    },
    {
      icon: "🚀",
      title: "创业线", 
      description: "创业导论、创业机会、创业团队等"
    },
    {
      icon: "💡",
      title: "数字线",
      description: "数创导论、产品设计、产品运营等"
    }
  ],
  courseSystem: {
    title: "\"玩创投\"四大业务体系",
    lines: [
      {
        name: "🚀 项目孵化线",
        content: "火种节、加速营、项目路演等全流程孵化服务",
        url: null,
        isExternal: false
      },
      {
        name: "🧭 校园VC导航板", 
        content: "一站式创业资源导航与服务平台",
        url: "http://me.xiaoyuanvc.com/",
        isExternal: true
      },
      {
        name: "🎓 创业教育智慧系统",
        content: "专业创业教育管理平台（仅限高校教师，需申请开通）",
        url: "https://chief.xiaoyuanvc.com/",
        isExternal: true,
        restricted: true,
        restrictionNote: "仅对高校教师开放，申请通过后开放"
      },
      {
        name: "🌐 Web3师徒导师",
        content: "区块链与Web3领域的专业师徒制导师服务平台",
        url: "https://css.xiaoyuanvc.com/",
        isExternal: true
      }
    ]
  }
};

export const processSection = {
  title: "学习流程",
  description: "系统化的创业培养体系",
  steps: [
    {
      step: 1,
      title: "项目孵化",
      description: "参与火种节、加速营等项目孵化活动",
      icon: "🔥"
    },
    {
      step: 2,
      title: "创业学习",
      description: "学习创业导论、团队建设、机会识别",
      icon: "📚"
    },
    {
      step: 3,
      title: "数字技能",
      description: "掌握产品设计、运营推广等数字技能",
      icon: "🛠️"
    },
    {
      step: 4,
      title: "项目路演",
      description: "展示项目成果，获得投资机会",
      icon: "🎤"
    }
  ]
};

export const teamSection = {
  title: "核心团队",
  subtitle: "助力每一个梦想落地的行业专家",
  founder: {
    name: "段建松",
    title: "校园VC创始合伙人",
    avatar: "/images/duan-jiansong.png",
    description: "著名企业家、社会知名人士",
    background: [
      "清华x-lab兼职顾问、清华iCenter创客导师",
      "北京大学研究生院投资导师",
      "教育部\"互联网+\"创新创业大赛评委",
      "畅销书《创业的乐趣》和《从零到英雄》作者",
      "曾任微软Windows产品经理和IDG战略咨询公司In-Stat总经理",
      "1997年MBA毕业于荷兰马斯特里赫特管理学院",
      "1993年本科毕业于对外经济贸易大学国际金融专业"
    ]
  },
  members: [
    {
      name: "项方伟",
      title: "加速营合伙人",
      avatar: "/images/default-avatar.svg",
      description: "种子投资孵化专家；系列创业者，现长居浙江；全职从事高科技创业项目的种子投资和孵化，参与项目重大事项讨论，为项目创始人提供服务，长期陪跑创业者。"
    },
    {
      name: "陶锋",
      title: "创业教育合伙人",
      avatar: "/images/default-avatar.svg",
      description: "清华MBA校友、清华x-lab三创教育席教练。超10年互联网经验，五年多的企业管理经验；参与创办国内最早的汽车垂直网站、商务社交网站，以及第一家3D虚拟世界游戏"
    },
    {
      name: "张正明",
      title: "创新教育合伙人",
      avatar: "/images/default-avatar.svg",
      description: "南开大学创业研究中心成员、中国高校创新创业联盟设计思维专家委员会委员。拥有超过20年的世界500强与全球企业产品管理、研发与咨询培训经验，超10年的创新管理经验"
    },
    {
      name: "郑羽轩",
      title: "社创投资合伙人",
      avatar: "/images/default-avatar.svg",
      description: "校园VC社群负责人，校园文化学者、高校文化资源整合理念提出者。独立研究校园文化生态系统学生组织发展与公益创业、为创业者提供工商注册、知识产权等咨询。"
    },
    {
      name: "曹红波",
      title: "深圳代表",
      avatar: "/images/default-avatar.svg",
      description: "校园VC驻深圳代表、95后折腾青年，从哈尔滨来到了深圳。大二开始了第一个创业项目万能猫大学生活服务平台，2个月时间营业额突破93万。"
    }
  ]
};

export const bookSection = {
  title: "著作推荐",
  subtitle: "校园VC创始合伙人著作",
  book: {
    title: "《从零到英雄》",
    author: "段建松",
    description: "校园VC在清华大学x-lab的创业营教材，由北京出版社出版，得到李开复、俞敏洪等名人的全力举荐！在微信读书上可以搜索到~",
    cover: "/images/zero-to-hero-book.jpg",
    readUrl: "https://weread.qq.com/",
    highlights: [
      "清华大学x-lab创业营教材",
      "北京出版社出版",
      "李开复、俞敏洪等名人推荐",
      "微信读书平台可搜索"
    ]
  }
};

export const testimonialsSection = {
  title: "学员反馈",
  subtitle: "收获远远不只于课堂",
  testimonials: [
    {
      name: "张同学",
      avatar: "/images/default-avatar.svg",
      content: "通过校园VC的培训，我不仅学到了创业知识，更重要的是结识了志同道合的伙伴。",
      rating: 5,
      school: "清华大学"
    },
    {
      name: "李同学", 
      avatar: "/images/default-avatar.svg",
      content: "段老师的课程让我对创业有了全新的认识，三主线的课程体系非常实用。",
      rating: 5,
      school: "北京大学"
    },
    {
      name: "王同学",
      avatar: "/images/default-avatar.svg", 
      content: "参加了加速营后，我的项目得到了投资，真的很感谢校园VC的平台。",
      rating: 5,
      school: "中国人民大学"
    }
  ],
  gallery: [
    "/images/home-8-1.png",
    "/images/home-8-2.jpeg",
    "/images/home-8-3.jpeg",
    "/images/home-8-4.jpeg",
    "/images/home-9-1.jpeg",
    "/images/home-9-2.jpeg",
    "/images/home-9-3.jpeg",
    "/images/home-9-4.jpeg",
    "/images/home-9-5.png",
    "/images/home-9-6.jpeg",
    "/images/home-9-7.jpg",
    "/images/home-9-8.jpeg",
    "/images/home-10-1.jpg",
    "/images/home-10-2.jpeg",
    "/images/home-10-3.jpeg",
    "/images/home-10-4.jpeg",
    "/images/home-10-5.jpeg",
    "/images/home-10-6.jpeg"
  ]
};

export const faqSection = {
  title: "常见问题",
  subtitle: "解答你的疑问",
  faqs: [
    {
      question: "什么是校园VC？",
      answer: "校园VC是专注于大学生创业投资和孵化的平台，通过投资孵化培养十年后的数创CEO。"
    },
    {
      question: "如何参与校园VC的项目？",
      answer: "可以通过火种节、加速营等活动参与，也可以直接联系我们获取更多信息。"
    },
    {
      question: "三主线课程包括什么内容？",
      answer: "包括项目线（火种节、加速营、路演）、创业线（创业导论、机会识别、团队建设）、数字线（产品设计、运营推广）。"
    },
    {
      question: "是否需要有创业经验？",
      answer: "不需要，我们欢迎所有对创业感兴趣的大学生，会提供从零开始的培训。"
    },
    {
      question: "如何获得投资机会？",
      answer: "通过参与我们的加速营和路演活动，优秀项目将有机会获得种子投资和孵化支持。"
    }
  ]
};

export const ctaSection = {
  title: "开启你的创业之旅",
  subtitle: "加入校园VC，从零到英雄",
  description: "10年推动100万大学生创业，我们帮你实现创业梦想",
  cta: "立即咨询",
  ctaUrl: "#contact",
  secondaryCta: "了解更多",
  secondaryCtaUrl: "#about",
  qrCode: "/images/xyvc-qr.jpg",
  qrCodeTitle: "扫码加入校园VC",
  highlights: [
    "10年创业孵化经验",
    "100万大学生受益",
    "三主线课程体系",
    "种子投资支持"
  ]
};

export const contactSection = {
  title: "联系我们",
  description: "有任何问题，欢迎随时联系",
  wechat: "添加微信咨询",
  wechatQr: "/images/xyvc-qr.jpg",
  email: "contact@sxl.com",
  phone: "400-000-0000",
  address: "北京市朝阳区"
};

export const footerSection = {
  title: "校园VC",
  description: "10年推动100万大学生创业",
  links: [
    { name: "关于我们", url: "#about" },
    { name: "课程体系", url: "#courses" },
    { name: "团队介绍", url: "#team" },
    { name: "联系我们", url: "#contact" }
  ],
  social: [
    { name: "微信", url: "#", icon: "wechat" },
    { name: "微博", url: "#", icon: "weibo" }
  ],
  copyright: "© 2024 校园VC. All rights reserved.",
  icp: siteConfig.icp,
  icpUrl: siteConfig.icpUrl,
  security: siteConfig.security,
  securityUrl: siteConfig.securityUrl
};