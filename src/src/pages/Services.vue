<template>
  <div class="services-page">
    <!-- Page Header -->
    <section class="page-header bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <div class="container">
        <div class="text-center py-20">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">服务项目</h1>
          <p class="text-xl md:text-2xl opacity-90">"玩创投"四大业务体系</p>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="section bg-white">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title gradient-text">完整服务体系</h2>
          <p class="section-subtitle">从创意到成功，全程陪伴</p>
        </div>

        <div class="space-y-8">
          <div 
            v-for="(service, index) in services" 
            :key="index"
            class="service-card relative"
          >
            <!-- Service Content -->
            <div 
              v-if="service.url"
              class="card p-8 hover:shadow-xl transition-all duration-300 cursor-pointer"
              @click="openService(service.url)"
            >
              <div class="flex items-start">
                <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6">
                  {{ index + 1 }}
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                    {{ service.title }}
                    <span class="ml-2 text-sm text-blue-500">🔗</span>
                  </h3>
                  <p class="text-gray-600 mb-4 leading-relaxed">{{ service.description }}</p>
                  
                  <!-- Service Features -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div 
                      v-for="feature in service.features" 
                      :key="feature"
                      class="flex items-center text-sm text-gray-600"
                    >
                      <span class="mr-2 text-green-500">✓</span>
                      {{ feature }}
                    </div>
                  </div>

                  <!-- Access Notice -->
                  <div 
                    v-if="service.notice" 
                    class="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg"
                  >
                    <p class="text-sm text-amber-700 flex items-center">
                      <span class="mr-2">⚠️</span>
                      {{ service.notice }}
                    </p>
                  </div>
                </div>
                <div class="flex-shrink-0 ml-4 text-blue-500">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </div>

            <!-- Non-clickable service -->
            <div 
              v-else
              class="card p-8"
            >
              <div class="flex items-start">
                <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6">
                  {{ index + 1 }}
                </div>
                <div class="flex-1">
                  <h3 class="text-2xl font-bold mb-4 text-gray-800">{{ service.title }}</h3>
                  <p class="text-gray-600 mb-4 leading-relaxed">{{ service.description }}</p>
                  
                  <!-- Service Features -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div 
                      v-for="feature in service.features" 
                      :key="feature"
                      class="flex items-center text-sm text-gray-600"
                    >
                      <span class="mr-2 text-green-500">✓</span>
                      {{ feature }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="section bg-gray-50">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title gradient-text">服务流程</h2>
          <p class="section-subtitle">简单三步，开启创业之路</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(step, index) in howItWorks" 
            :key="index"
            class="text-center"
          >
            <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
              {{ index + 1 }}
            </div>
            <h3 class="text-xl font-bold mb-4 text-gray-800">{{ step.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section bg-white">
      <div class="container">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6 gradient-text">准备好开始了吗？</h2>
          <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            加入校园VC，获得专业的创业指导和丰富的资源支持，
            与志同道合的伙伴一起，实现你的创业梦想。
          </p>
          <div class="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <router-link 
              to="/contact" 
              class="btn btn-primary text-lg px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl inline-block"
            >
              <span class="mr-2">🚀</span>
              立即咨询
            </router-link>
            <router-link 
              to="/team" 
              class="btn btn-secondary text-lg px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl inline-block"
            >
              <span class="mr-2">👥</span>
              了解团队
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      services: [
        {
          title: '🚀 项目孵化线',
          description: '火种节、加速营、项目路演等全流程孵化服务',
          features: [
            '创业项目筛选与评估',
            '导师一对一指导',
            '资源对接与支持',
            '投资机会推荐'
          ]
        },
        {
          title: '🧭 校园VC导航板',
          description: '一站式创业资源导航与服务平台',
          url: 'http://me.xiaoyuanvc.com/',
          features: [
            '创业资源整合',
            '行业信息推送',
            '工具推荐使用',
            '社区交流互动'
          ]
        },
        {
          title: '🎓 创业教育智慧系统',
          description: '专业创业教育管理平台（仅限高校教师，需申请开通）',
          url: 'https://chief.xiaoyuanvc.com/',
          notice: '仅对高校教师开放，申请通过后开放',
          features: [
            '课程管理系统',
            '学生进度跟踪',
            '教学资源库',
            '数据分析报告'
          ]
        },
        {
          title: '🌐 Web3师徒导师',
          description: '区块链与Web3领域的专业师徒制导师服务平台',
          url: 'https://css.xiaoyuanvc.com/',
          features: [
            'Web3技术指导',
            '区块链项目孵化',
            '投资机会推荐',
            '行业资源对接'
          ]
        }
      ],
      howItWorks: [
        {
          title: '联系咨询',
          description: '通过官网或微信联系我们，了解详细服务内容和申请流程'
        },
        {
          title: '评估匹配',
          description: '我们会根据你的背景和需求，推荐最适合的服务项目'
        },
        {
          title: '开始服务',
          description: '正式加入服务体系，获得专业指导和资源支持'
        }
      ]
    }
  },
  methods: {
    openService(url) {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }
}
</script>

<style scoped>
.service-card:hover .card {
  transform: translateY(-4px);
}

.service-card .card[onclick] {
  cursor: pointer;
}
</style>