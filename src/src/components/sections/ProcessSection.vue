<template>
  <section class="process-section section bg-white">
    <div class="container">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="section-title gradient-text">{{ processSection.title }}</h2>
        <p class="section-subtitle">{{ processSection.description }}</p>
      </div>
      
      <!-- Process Timeline -->
      <div class="relative">
        <!-- Timeline Line -->
        <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full hidden md:block timeline-line"></div>
        
        <!-- Process Steps -->
        <div class="space-y-16 md:space-y-24">
          <div 
            v-for="(step, index) in processSection.steps" 
            :key="index"
            class="process-step relative fade-in"
            :class="{ 'md:flex-row-reverse': index % 2 === 1 }"
          >
            <!-- Step Number (Mobile) -->
            <div class="flex items-center mb-6 md:hidden">
              <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                {{ step.step }}
              </div>
              <div class="flex-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
            
            <!-- Desktop Layout -->
            <div class="md:flex md:items-center md:justify-center">
              <!-- Content -->
              <div class="md:w-5/12" :class="{ 'md:text-right': index % 2 === 1 }">
                <div class="process-card bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100">
                  <div class="text-4xl mb-4" :class="{ 'md:text-right': index % 2 === 1 }">
                    {{ step.icon }}
                  </div>
                  <h3 class="text-2xl font-bold mb-4 text-gray-800">{{ step.title }}</h3>
                  <p class="text-gray-600 leading-relaxed">{{ step.description }}</p>
                </div>
              </div>
              
              <!-- Timeline Node (Desktop) -->
              <div class="hidden md:flex md:w-2/12 md:justify-center">
                <div class="relative">
                  <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {{ step.step }}
                  </div>
                  <div class="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse opacity-30"></div>
                </div>
              </div>
              
              <!-- Spacer -->
              <div class="md:w-5/12"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- CTA Section -->
      <div class="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl">
        <h3 class="text-2xl font-bold mb-4 text-gray-800">准备开始你的创业之旅？</h3>
        <p class="text-gray-600 mb-6">加入校园VC，获得系统化的创业培训和投资机会</p>
        <a href="#contact" class="btn btn-primary text-lg px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
          <span class="mr-2">🚀</span>
          立即报名
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { processSection } from '../../data/content.js';

export default {
  name: 'ProcessSection',
  data() {
    return {
      processSection
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
.process-section {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
}

.process-step {
  position: relative;
}

.process-card {
  position: relative;
  overflow: hidden;
}

.process-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.process-card:hover::before {
  opacity: 1;
}

.process-card:hover {
  border-color: #3b82f6;
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
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

.fade-in:nth-child(1) { transition-delay: 0.2s; }
.fade-in:nth-child(2) { transition-delay: 0.4s; }
.fade-in:nth-child(3) { transition-delay: 0.6s; }
.fade-in:nth-child(4) { transition-delay: 0.8s; }

.gradient-text {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Mobile Optimizations */
@media (max-width: 768px) {
  .process-section {
    padding: 3rem 0;
  }
  
  .process-card {
    padding: 1.5rem;
  }
  
  .process-step {
    margin-bottom: 2rem;
  }
}

/* Timeline Animation */
@keyframes drawLine {
  from {
    height: 0;
  }
  to {
    height: 100%;
  }
}

.process-section .timeline-line {
  animation: drawLine 2s ease-out;
}

/* Pulse Animation for Timeline Nodes */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

.process-step.visible .absolute.inset-0 {
  animation: pulse 2s ease-in-out infinite;
}
</style>