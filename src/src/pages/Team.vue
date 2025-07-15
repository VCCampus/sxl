<template>
  <div class="team-page">
    <!-- Page Header -->
    <section class="page-header bg-gradient-to-r from-green-600 to-blue-600 text-white">
      <div class="container">
        <div class="text-center py-20">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">团队介绍</h1>
          <p class="text-xl md:text-2xl opacity-90">认识我们的专业团队</p>
        </div>
      </div>
    </section>

    <!-- Leadership Team -->
    <section class="section bg-white">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title gradient-text">核心团队</h2>
          <p class="section-subtitle">经验丰富的创业导师与专家</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="member in teamMembers" 
            :key="member.name"
            class="card p-8 text-center hover:transform hover:scale-105 transition-all duration-300"
          >
            <div class="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200">
              <img 
                :src="member.avatar" 
                :alt="member.name"
                class="w-full h-full object-cover"
                :onerror="`this.src='/images/avatar-placeholder.jpg'`"
              >
            </div>
            <h3 class="text-xl font-bold mb-2 text-gray-800">{{ member.name }}</h3>
            <p class="text-blue-600 font-medium mb-4">{{ member.position }}</p>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">{{ member.bio }}</p>
            
            <!-- Expertise Tags -->
            <div class="flex flex-wrap justify-center gap-2">
              <span 
                v-for="skill in member.skills" 
                :key="skill"
                class="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Culture -->
    <section class="section bg-gray-50">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6 gradient-text">我们的理念</h2>
            <div class="space-y-6">
              <div 
                v-for="value in companyValues" 
                :key="value.title"
                class="flex items-start"
              >
                <div class="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-1">
                  {{ value.icon }}
                </div>
                <div>
                  <h3 class="text-lg font-bold mb-2 text-gray-800">{{ value.title }}</h3>
                  <p class="text-gray-600 leading-relaxed">{{ value.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center">
            <img 
              src="/images/team-culture.jpg" 
              alt="团队文化" 
              class="w-full max-w-md mx-auto rounded-xl shadow-lg"
              onerror="this.src='/images/placeholder.jpg'"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Founder Introduction -->
    <section class="section bg-white">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title gradient-text">创始人介绍</h2>
          <p class="section-subtitle">从零到英雄的创业领袖</p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div 
            v-for="founder in founders" 
            :key="founder.name"
            class="card p-8 mb-8 hover:transform hover:scale-105 transition-all duration-300"
          >
            <div class="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              <!-- Founder Photo -->
              <div class="flex-shrink-0">
                <div class="w-32 h-32 mx-auto lg:mx-0 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    :src="founder.avatar" 
                    :alt="founder.name"
                    class="w-full h-full object-cover"
                    :onerror="`this.src='/images/avatar-placeholder.jpg'`"
                  >
                </div>
              </div>
              
              <!-- Founder Info -->
              <div class="flex-1 text-center lg:text-left">
                <h3 class="text-2xl font-bold mb-2 text-gray-800">{{ founder.name }}</h3>
                <p class="text-blue-600 font-medium text-lg mb-4">{{ founder.position }}</p>
                <p class="text-gray-700 leading-relaxed mb-6">{{ founder.bio }}</p>
                
                <!-- Achievements -->
                <div class="mb-6">
                  <h4 class="text-lg font-semibold mb-3 text-gray-800">主要成就</h4>
                  <ul class="space-y-2">
                    <li 
                      v-for="achievement in founder.achievements" 
                      :key="achievement"
                      class="flex items-center text-gray-600"
                    >
                      <span class="mr-3 text-green-500">🏆</span>
                      {{ achievement }}
                    </li>
                  </ul>
                </div>
                
                <!-- Expertise -->
                <div>
                  <h4 class="text-lg font-semibold mb-3 text-gray-800">专业领域</h4>
                  <div class="flex flex-wrap gap-2">
                    <span 
                      v-for="skill in founder.skills" 
                      :key="skill"
                      class="px-4 py-2 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {{ skill }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Join Our Team -->
    <section class="section bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div class="container">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">加入我们</h2>
          <p class="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            我们正在寻找志同道合的伙伴，一起推动中国创业教育的发展，
            如果你热爱创业、教育或投资，欢迎加入我们的团队。
          </p>
          <div class="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <router-link 
              to="/contact" 
              class="btn bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl inline-block"
            >
              <span class="mr-2">💼</span>
              查看职位
            </router-link>
            <a 
              href="mailto:hr@xiaoyuanvc.com" 
              class="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl inline-block"
            >
              <span class="mr-2">📧</span>
              发送简历
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Team',
  data() {
    return {
      teamMembers: [
        {
          name: '张创始',
          position: '创始人 & CEO',
          avatar: '/images/team-founder.jpg',
          bio: '10年创业教育经验，曾成功孵化多个独角兽项目，致力于推动中国大学生创业发展。',
          skills: ['创业指导', '投资决策', '战略规划', '团队管理']
        },
        {
          name: '李技术',
          position: '技术总监 & CTO',
          avatar: '/images/team-cto.jpg',
          bio: '前腾讯高级工程师，专注于教育技术创新，拥有丰富的产品开发和技术管理经验。',
          skills: ['技术架构', '产品开发', '数据分析', 'AI应用']
        },
        {
          name: '王运营',
          position: '运营总监 & COO',
          avatar: '/images/team-coo.jpg',
          bio: '资深运营专家，曾在多家知名教育机构担任要职，擅长用户增长和社区运营。',
          skills: ['用户运营', '社区管理', '品牌营销', '商务合作']
        },
        {
          name: '赵教育',
          position: '教育总监',
          avatar: '/images/team-education.jpg',
          bio: '北京大学创业导师，拥有15年高等教育经验，专注于创业课程设计和人才培养。',
          skills: ['课程设计', '教学指导', '人才培养', '学术研究']
        },
        {
          name: '陈投资',
          position: '投资总监',
          avatar: '/images/team-investment.jpg',
          bio: '前红杉资本投资经理，专注于早期项目投资，拥有敏锐的市场洞察力。',
          skills: ['项目评估', '投资决策', '市场分析', '风险控制']
        },
        {
          name: '刘设计',
          position: '设计总监',
          avatar: '/images/team-design.jpg',
          bio: '资深UI/UX设计师，专注于教育产品设计，致力于创造优秀的用户体验。',
          skills: ['UI设计', 'UX设计', '用户研究', '产品设计']
        }
      ],
      companyValues: [
        {
          icon: '🎯',
          title: '使命驱动',
          description: '我们相信教育改变命运，创业改变世界，致力于培养有影响力的创业者'
        },
        {
          icon: '🤝',
          title: '协作共赢',
          description: '团队合作是我们的核心价值，通过合作实现个人和团队的共同成长'
        },
        {
          icon: '🚀',
          title: '创新进取',
          description: '持续创新，勇于尝试，在快速变化的环境中保持竞争优势'
        },
        {
          icon: '💡',
          title: '学习成长',
          description: '保持好奇心和学习能力，在实践中不断提升专业能力和综合素质'
        }
      ],
      founders: [
        {
          name: '段建松',
          position: '创始人兼CEO',
          avatar: '/images/duan-jiansong.png',
          bio: '连续创业者，10年创业教育经验。曾创办多家教育科技公司，专注于大学生创业能力培养和项目孵化。北京理工大学MBA，拥有丰富的投资和管理经验，致力于推动中国创业教育事业发展。',
          achievements: [
            '成功孵化1000+创业项目',
            '培养100万+大学生创业者',
            '获得"创业导师杰出贡献奖"',
            '投资50+早期创业项目',
            '出版《从零到英雄》创业指导书籍',
            '受邀担任多所高校创业导师'
          ],
          skills: ['创业指导', '投资决策', '战略规划', '团队管理', '商业模式设计', '教育创新']
        }
      ]
    }
  }
}
</script>