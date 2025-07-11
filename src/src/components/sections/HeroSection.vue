<template>
  <section class="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img 
        :src="heroSection.backgroundImage" 
        :alt="heroSection.title"
        class="w-full h-full object-cover"
      >
      <div class="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60"></div>
    </div>
    
    <!-- Content -->
    <div class="container relative z-10 text-center text-white">
      <!-- Logo -->
      <div class="mb-8 fade-in">
        <img 
          :src="heroSection.logo" 
          :alt="heroSection.title"
          class="mx-auto w-24 h-24 md:w-32 md:h-32 object-contain"
        >
      </div>
      
      <!-- Main Title -->
      <h1 class="text-5xl md:text-7xl font-bold mb-4 fade-in gradient-text">
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
      
      <!-- CTA Button -->
      <div class="fade-in">
        <a 
          :href="heroSection.ctaUrl" 
          class="btn btn-primary text-lg px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl"
        >
          <span class="mr-2">🚀</span>
          {{ heroSection.cta }}
        </a>
      </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
      <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center">
        <div class="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { heroSection } from '../../data/content.js';

export default {
  name: 'HeroSection',
  data() {
    return {
      heroSection
    };
  },
  mounted() {
    // Intersection Observer for fade-in animations
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
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

.gradient-text {
  background: linear-gradient(135deg, #60a5fa, #a855f7, #fbbf24);
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

/* Mobile Optimizations */
@media (max-width: 768px) {
  .hero-section {
    min-height: 100vh;
    padding: 2rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
}
</style>