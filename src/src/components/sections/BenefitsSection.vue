<template>
  <section class="benefits-section section bg-gray-50">
    <div class="container">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="section-title gradient-text">{{ benefitsSection.title }}</h2>
        <!-- B站视频组件 -->
        <div class="video-container mb-8">
          <iframe 
            src="//player.bilibili.com/player.html?bvid=BV1pW4y1M7JQ&page=1&autoplay=1&high_quality=1"
            scrolling="no" 
            border="0" 
            frameborder="no" 
            framespacing="0" 
            allowfullscreen="true"
            class="w-full h-64 md:h-96 rounded-xl shadow-lg"
          ></iframe>
        </div>
        <p class="text-lg text-gray-600">
          {{ benefitsSection.description }}
        </p>
      </div>
      
      <!-- Benefits Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div 
          v-for="(benefit, index) in benefitsSection.benefits" 
          :key="index"
          class="benefit-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 fade-in"
        >
          <div class="text-5xl mb-4">{{ benefit.icon }}</div>
          <h3 class="text-2xl font-bold mb-4 text-gray-800">{{ benefit.title }}</h3>
          <p class="text-gray-600 leading-relaxed">{{ benefit.description }}</p>
        </div>
      </div>
      
      <!-- Course System -->
      <div class="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
        <h3 class="text-3xl font-bold text-center mb-8 text-gray-800">
          {{ benefitsSection.courseSystem.title }}
        </h3>
        
        <div class="space-y-6">
          <div 
            v-for="(line, index) in benefitsSection.courseSystem.lines" 
            :key="index"
            class="course-line flex items-start p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl hover:from-blue-100 hover:to-purple-100 transition-all duration-300 fade-in"
          >
            <div class="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-6">
              {{ index + 1 }}
            </div>
            <div>
              <h4 class="text-xl font-semibold text-gray-800 mb-2">{{ line.name }}</h4>
              <p class="text-gray-600">{{ line.content }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        <div class="stat-card text-center p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl text-white fade-in">
          <div class="text-3xl font-bold mb-2">10+</div>
          <div class="text-sm opacity-90">年创业孵化</div>
        </div>
        <div class="stat-card text-center p-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl text-white fade-in">
          <div class="text-3xl font-bold mb-2">100万+</div>
          <div class="text-sm opacity-90">学生受益</div>
        </div>
        <div class="stat-card text-center p-6 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl text-white fade-in">
          <div class="text-3xl font-bold mb-2">1000+</div>
          <div class="text-sm opacity-90">成功项目</div>
        </div>
        <div class="stat-card text-center p-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl text-white fade-in">
          <div class="text-3xl font-bold mb-2">50+</div>
          <div class="text-sm opacity-90">投资案例</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { benefitsSection } from '../../data/content.js';

export default {
  name: 'BenefitsSection',
  data() {
    return {
      benefitsSection
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });
  }
};
</script>

<style scoped>
.benefits-section {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

.benefit-card {
  border: 1px solid #e5e7eb;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
}

.benefit-card:hover {
  border-color: #3b82f6;
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
}

.course-line {
  border-left: 4px solid transparent;
  border-image: linear-gradient(135deg, #3b82f6, #8b5cf6) 1;
}

.stat-card {
  position: relative;
  overflow: hidden;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.stat-card:hover::before {
  opacity: 1;
}

.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.fade-in:nth-child(1) { transition-delay: 0.1s; }
.fade-in:nth-child(2) { transition-delay: 0.2s; }
.fade-in:nth-child(3) { transition-delay: 0.3s; }
.fade-in:nth-child(4) { transition-delay: 0.4s; }

.gradient-text {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.video-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.video-container iframe {
  aspect-ratio: 16/9;
  border-radius: 0.75rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

/* Mobile Optimizations */
@media (max-width: 768px) {
  .benefits-section {
    padding: 3rem 0;
  }
  
  .benefit-card {
    padding: 2rem;
  }
  
  .course-line {
    flex-direction: column;
    text-align: center;
  }
  
  .course-line .flex-shrink-0 {
    margin: 0 auto 1rem auto;
  }
}
</style>