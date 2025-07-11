<template>
  <section class="faq-section section bg-gray-50">
    <div class="container">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="section-title gradient-text">{{ faqSection.title }}</h2>
        <p class="section-subtitle">{{ faqSection.subtitle }}</p>
      </div>
      
      <!-- FAQ Items -->
      <div class="max-w-4xl mx-auto">
        <div class="space-y-4">
          <div 
            v-for="(faq, index) in faqSection.faqs" 
            :key="index"
            class="faq-item bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 fade-in"
          >
            <button 
              @click="toggleFaq(index)"
              class="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-2xl"
              :class="{ 'text-blue-600': openFaq === index }"
            >
              <h3 class="text-lg font-semibold text-gray-800 pr-4">
                {{ faq.question }}
              </h3>
              <div class="flex-shrink-0">
                <svg 
                  class="w-6 h-6 transform transition-transform duration-300"
                  :class="{ 'rotate-180': openFaq === index }"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            
            <div 
              class="faq-answer overflow-hidden transition-all duration-300"
              :class="{ 'max-h-0': openFaq !== index, 'max-h-screen': openFaq === index }"
            >
              <div class="px-6 pb-6">
                <p class="text-gray-600 leading-relaxed">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Contact Section -->
      <div class="mt-16 text-center">
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <h3 class="text-2xl font-bold mb-4">还有其他问题？</h3>
          <p class="text-lg mb-6 opacity-90">我们随时为您答疑解惑</p>
          
          <div class="flex flex-col md:flex-row items-center justify-center gap-4">
            <a 
              href="#contact" 
              class="btn bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              📞 联系我们
            </a>
            <a 
              href="#" 
              class="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              💬 在线咨询
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { faqSection } from '../../data/content.js';

export default {
  name: 'FaqSection',
  data() {
    return {
      faqSection,
      openFaq: null
    };
  },
  methods: {
    toggleFaq(index) {
      this.openFaq = this.openFaq === index ? null : index;
    }
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
.faq-section {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

.faq-item {
  border: 1px solid #e5e7eb;
  position: relative;
  overflow: hidden;
}

.faq-item::before {
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

.faq-item:hover::before {
  opacity: 1;
}

.faq-item:hover {
  border-color: #3b82f6;
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.1);
}

.faq-answer {
  transition: max-height 0.3s ease;
}

.faq-answer.max-h-0 {
  max-height: 0;
}

.faq-answer.max-h-screen {
  max-height: 200px;
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
.fade-in:nth-child(5) { transition-delay: 0.5s; }

.gradient-text {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Animation for FAQ opening */
.faq-item button {
  position: relative;
  z-index: 1;
}

.faq-item button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}

/* Smooth rotation animation */
.faq-item button svg {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-item button svg.rotate-180 {
  transform: rotate(180deg);
}

/* Mobile Optimizations */
@media (max-width: 768px) {
  .faq-section {
    padding: 3rem 0;
  }
  
  .faq-item {
    margin-bottom: 1rem;
  }
  
  .faq-item button {
    padding: 1rem;
  }
  
  .faq-answer div {
    padding: 0 1rem 1rem 1rem;
  }
}

/* Accessibility */
.faq-item button:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Hover effects */
.faq-item:hover {
  transform: translateY(-2px);
}

.faq-item button:hover {
  color: #3b82f6;
}

/* Loading Animation */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.faq-answer.max-h-screen .text-gray-600 {
  animation: slideDown 0.3s ease;
}
</style>