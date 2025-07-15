<template>
  <div class="about-page">
    <!-- Page Header -->
    <section class="page-header bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div class="container">
        <div class="text-center py-20">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">关于我们</h1>
          <p class="text-xl md:text-2xl opacity-90">了解校园VC的使命与愿景</p>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="section bg-gray-50">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title gradient-text">数字创业精英班</h2>
          <p class="section-subtitle">培养十年后的数字创业CEO</p>
        </div>

        <!-- Video Section -->
        <div class="video-container mb-12 max-w-4xl mx-auto">
          <iframe 
            src="//player.bilibili.com/player.html?bvid=BV1pW4y1M7JQ&page=1&autoplay=0&high_quality=1" 
            scrolling="no" 
            border="0" 
            frameborder="no" 
            framespacing="0" 
            allowfullscreen="true" 
            class="w-full h-64 md:h-96 rounded-xl shadow-lg"
          ></iframe>
        </div>

        <!-- Benefits Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div 
            v-for="benefit in benefits" 
            :key="benefit.title"
            class="card p-8 hover:transform hover:scale-105 transition-all duration-300"
          >
            <div class="text-5xl mb-4">{{ benefit.icon }}</div>
            <h3 class="text-2xl font-bold mb-4 text-gray-800">{{ benefit.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="section bg-white">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title gradient-text">学习流程</h2>
          <p class="section-subtitle">系统化的创业培养体系</p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="space-y-8">
            <div 
              v-for="(step, index) in processSteps" 
              :key="index"
              class="flex flex-col md:flex-row items-center"
              :class="{ 'md:flex-row-reverse': index % 2 === 1 }"
            >
              <!-- Step Number -->
              <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 md:mb-0 md:mx-8">
                {{ index + 1 }}
              </div>
              
              <!-- Step Content -->
              <div class="card p-8 flex-1">
                <div class="text-4xl mb-4">{{ step.icon }}</div>
                <h3 class="text-2xl font-bold mb-4 text-gray-800">{{ step.title }}</h3>
                <p class="text-gray-600 leading-relaxed">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="section bg-gray-50">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6 gradient-text">我们的使命</h2>
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
              推动中国大学生创业教育发展，培养具有国际视野和创新精神的数字创业人才，
              构建完整的创业生态系统，让每一个有梦想的大学生都能找到适合的创业路径。
            </p>
            <p class="text-lg text-gray-700 leading-relaxed">
              我们相信，通过系统化的培养和专业的指导，每个大学生都能成为改变世界的创业者。
            </p>
          </div>
          <div class="text-center">
            <img 
              src="/images/team-mission.jpg" 
              alt="团队使命" 
              class="w-full max-w-md mx-auto rounded-xl shadow-lg"
              onerror="this.src='/images/placeholder.jpg'"
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      benefits: [
        {
          icon: '🎯',
          title: '项目线',
          description: '火种节、加速营、项目路演等全流程孵化服务'
        },
        {
          icon: '🚀',
          title: '创业线',
          description: '创业导论、创业机会、创业团队等系统课程'
        },
        {
          icon: '💡',
          title: '数字线',
          description: '数创导论、产品设计、产品运营等专业技能'
        }
      ],
      processSteps: [
        {
          icon: '🔥',
          title: '项目孵化',
          description: '参与火种节、加速营等项目孵化活动，获得专业指导和资源支持'
        },
        {
          icon: '📚',
          title: '创业学习',
          description: '系统学习创业导论、团队建设、机会识别等核心创业知识'
        },
        {
          icon: '💻',
          title: '数字技能',
          description: '掌握产品设计、数据分析、数字营销等现代数字化技能'
        },
        {
          icon: '🎯',
          title: '实战演练',
          description: '通过真实项目实践，积累宝贵的创业经验和行业洞察'
        },
        {
          icon: '🏆',
          title: '成果展示',
          description: '参与路演比赛，展示创业成果，获得投资机会和市场认可'
        }
      ]
    }
  }
}
</script>