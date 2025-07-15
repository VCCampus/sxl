<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Gradient -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60"></div>
      </div>
      
      <!-- Content -->
      <div class="container relative z-10 text-center text-white">
        <!-- Logo -->
        <div class="mb-8 fade-in">
          <img 
            src="/images/xyvc-logo.png" 
            alt="校园VC"
            class="mx-auto w-24 h-24 md:w-32 md:h-32 object-contain"
          >
        </div>
        
        <!-- Main Title -->
        <h1 class="text-5xl md:text-7xl font-bold mb-4 fade-in gradient-text-white">
          {{ heroSection.title }}
        </h1>
        
        <!-- Subtitle -->
        <p class="text-xl md:text-2xl mb-6 fade-in">
          {{ heroSection.subtitle }}
        </p>
        
        <!-- Description -->
        <p class="text-lg md:text-xl mb-8 fade-in text-gray-200">
          {{ heroSection.description }}
        </p>
        
        <!-- Slogan -->
        <div class="mb-8 fade-in">
          <p class="text-2xl md:text-3xl font-semibold mb-4 text-yellow-400">
            {{ heroSection.slogan }}
          </p>
          <p class="text-lg text-gray-300 mb-2">
            {{ heroSection.vcDefinition }}
          </p>
          <p class="text-xl font-medium text-blue-300">
            {{ heroSection.concept }}
          </p>
        </div>
        
        <!-- CTA Buttons -->
        <div class="fade-in space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
          <router-link 
            to="/services" 
            class="btn btn-primary text-lg px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl inline-block"
          >
            <span class="mr-2">🚀</span>
            了解我们的服务
          </router-link>
          <router-link 
            to="/contact" 
            class="btn btn-secondary text-lg px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl inline-block"
          >
            <span class="mr-2">💬</span>
            立即联系我们
          </router-link>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div class="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>

    <!-- Core Values Section -->
    <section class="section bg-gray-50">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title gradient-text">核心价值</h2>
          <p class="section-subtitle">为什么选择校园VC</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(value, index) in coreValues" 
            :key="index"
            class="card p-8 text-center hover:transform hover:scale-105 transition-all duration-300"
          >
            <div class="text-5xl mb-4">{{ value.icon }}</div>
            <h3 class="text-2xl font-bold mb-4 text-gray-800">{{ value.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="section bg-white">
      <div class="container">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div 
            v-for="(stat, index) in stats" 
            :key="index"
            class="text-center p-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl text-white fade-in"
          >
            <div class="text-3xl font-bold mb-2">{{ stat.value }}</div>
            <div class="text-sm opacity-90">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { heroSection } from '../data/content.js'

export default {
  name: 'Home',
  data() {
    return {
      heroSection,
      coreValues: [
        {
          icon: '🎯',
          title: '专业指导',
          description: '10年创业孵化经验，专业导师团队全程指导'
        },
        {
          icon: '🚀',
          title: '实战项目',
          description: '真实项目孵化，从想法到落地的全流程支持'
        },
        {
          icon: '🌐',
          title: '生态资源',
          description: '完整的创业生态圈，连接投资人、导师、同行'
        }
      ],
      stats: [
        { value: '10+', label: '年创业孵化' },
        { value: '100万+', label: '学生受益' },
        { value: '1000+', label: '成功项目' },
        { value: '50+', label: '投资案例' }
      ]
    }
  },
  mounted() {
    this.initAnimations()
  },
  methods: {
    initAnimations() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
            }
          })
        },
        { threshold: 0.1 }
      )
      
      document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el)
      })
    }
  }
}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.gradient-text-white {
  background: linear-gradient(135deg, #ffffff, #e2e8f0, #f1f5f9);
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 4s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>