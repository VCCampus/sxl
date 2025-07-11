<template>
  <section class="cta-section section relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600"></div>
      <div class="absolute inset-0 bg-pattern"></div>
    </div>
    
    <div class="container relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Main Title -->
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white fade-in">
          {{ ctaSection.title }}
        </h2>
        
        <!-- Subtitle -->
        <p class="text-xl md:text-2xl mb-8 text-blue-100 fade-in">
          {{ ctaSection.subtitle }}
        </p>
        
        <!-- Description -->
        <p class="text-lg mb-12 text-gray-200 max-w-2xl mx-auto fade-in">
          {{ ctaSection.description }}
        </p>
        
        <!-- Highlights -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 fade-in">
          <div 
            v-for="(highlight, index) in ctaSection.highlights" 
            :key="index"
            class="highlight-card bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 text-center border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
          >
            <div class="text-2xl mb-2">
              <span v-if="index === 0">⏰</span>
              <span v-else-if="index === 1">👥</span>
              <span v-else-if="index === 2">📚</span>
              <span v-else>💰</span>
            </div>
            <p class="text-white text-sm font-medium">{{ highlight }}</p>
          </div>
        </div>
        
        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 fade-in">
          <a 
            :href="ctaSection.ctaUrl" 
            class="btn bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            <span class="mr-2">🚀</span>
            {{ ctaSection.cta }}
          </a>
          <a 
            :href="ctaSection.secondaryCtaUrl" 
            class="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
          >
            <span class="mr-2">📖</span>
            {{ ctaSection.secondaryCta }}
          </a>
        </div>
        
        <!-- QR Code Section -->
        <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white border-opacity-20 fade-in">
          <div class="flex flex-col md:flex-row items-center justify-center gap-8">
            <!-- QR Code -->
            <div class="text-center">
              <div class="w-40 h-40 bg-white rounded-2xl p-4 mx-auto mb-4 shadow-2xl">
                <img 
                  :src="ctaSection.qrCode" 
                  :alt="ctaSection.qrCodeTitle"
                  class="w-full h-full object-contain"
                >
              </div>
              <p class="text-white font-semibold">{{ ctaSection.qrCodeTitle }}</p>
              <p class="text-blue-100 text-sm">微信扫码，立即咨询</p>
            </div>
            
            <!-- Contact Info -->
            <div class="text-center md:text-left">
              <h3 class="text-2xl font-bold text-white mb-4">联系方式</h3>
              <div class="space-y-2 text-gray-200">
                <div class="flex items-center justify-center md:justify-start">
                  <span class="mr-2">📧</span>
                  <span>{{ contactSection.email }}</span>
                </div>
                <div class="flex items-center justify-center md:justify-start">
                  <span class="mr-2">📞</span>
                  <span>{{ contactSection.phone }}</span>
                </div>
                <div class="flex items-center justify-center md:justify-start">
                  <span class="mr-2">📍</span>
                  <span>{{ contactSection.address }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Urgency Element -->
        <div class="mt-8 fade-in">
          <div class="inline-flex items-center bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-semibold">
            <span class="mr-2">⚡</span>
            限时优惠：前100名报名者享受早鸟价格
          </div>
        </div>
      </div>
    </div>
    
    <!-- Floating Elements -->
    <div class="floating-elements">
      <div class="floating-element floating-element-1">💡</div>
      <div class="floating-element floating-element-2">🚀</div>
      <div class="floating-element floating-element-3">⭐</div>
      <div class="floating-element floating-element-4">💰</div>
    </div>
  </section>
</template>

<script>
import { ctaSection, contactSection } from '../../data/content.js';

export default {
  name: 'CtaSection',
  data() {
    return {
      ctaSection,
      contactSection
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
.cta-section {
  background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%);
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%);
  pointer-events: none;
}

.highlight-card {
  transition: all 0.3s ease;
}

.highlight-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.floating-element {
  position: absolute;
  font-size: 2rem;
  opacity: 0.1;
  animation: float 6s ease-in-out infinite;
}

.floating-element-1 {
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.floating-element-2 {
  top: 20%;
  right: 15%;
  animation-delay: 2s;
}

.floating-element-3 {
  bottom: 30%;
  left: 15%;
  animation-delay: 4s;
}

.floating-element-4 {
  bottom: 20%;
  right: 10%;
  animation-delay: 1s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
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
.fade-in:nth-child(5) { transition-delay: 1.0s; }
.fade-in:nth-child(6) { transition-delay: 1.2s; }
.fade-in:nth-child(7) { transition-delay: 1.4s; }

/* Button Hover Effects */
.btn {
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.btn:hover::before {
  left: 100%;
}

/* Mobile Optimizations */
@media (max-width: 768px) {
  .cta-section {
    padding: 4rem 0;
    min-height: auto;
  }
  
  .highlight-card {
    padding: 1rem;
  }
  
  .floating-elements {
    display: none;
  }
  
  .bg-white\/10 {
    padding: 2rem;
  }
}

/* Pulsing Animation for Urgency */
.inline-flex.bg-yellow-400 {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* Backdrop Blur Support */
@supports (backdrop-filter: blur(10px)) {
  .backdrop-blur-sm {
    backdrop-filter: blur(10px);
  }
}

/* Fallback for older browsers */
@supports not (backdrop-filter: blur(10px)) {
  .bg-white\/10 {
    background-color: rgba(255, 255, 255, 0.2);
  }
}

/* QR Code Hover Effect */
.w-40.h-40.bg-white {
  transition: all 0.3s ease;
}

.w-40.h-40.bg-white:hover {
  transform: scale(1.05);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

/* Gradient Text Animation */
.text-4xl.font-bold {
  background: linear-gradient(135deg, #ffffff, #bfdbfe, #ffffff);
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>