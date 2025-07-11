<template>
  <footer class="footer bg-gray-900 text-white">
    <div class="container py-12">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Company Info -->
        <div class="footer-section">
          <div class="flex items-center mb-4">
            <img 
              :src="footerSection.logo || '/images/xyvc-logo.png'" 
              :alt="footerSection.title"
              class="w-12 h-12 mr-3"
            >
            <h3 class="text-xl font-bold">{{ footerSection.title }}</h3>
          </div>
          <p class="text-gray-300 mb-4">{{ footerSection.description }}</p>
          
          <!-- Social Links -->
          <div class="flex space-x-4">
            <a 
              v-for="social in footerSection.social" 
              :key="social.name"
              :href="social.url" 
              class="text-gray-400 hover:text-white transition-colors duration-300"
              :title="social.name"
            >
              <span v-if="social.icon === 'wechat'" class="text-2xl">💬</span>
              <span v-else-if="social.icon === 'weibo'" class="text-2xl">🐦</span>
              <span v-else class="text-2xl">🔗</span>
            </a>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div class="footer-section">
          <h4 class="text-lg font-semibold mb-4">快速链接</h4>
          <ul class="space-y-2">
            <li v-for="link in footerSection.links" :key="link.name">
              <a 
                :href="link.url" 
                class="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Contact Info -->
        <div class="footer-section">
          <h4 class="text-lg font-semibold mb-4">联系我们</h4>
          <div class="space-y-2 text-gray-300">
            <div class="flex items-center">
              <span class="mr-2">📧</span>
              <span>{{ contactSection.email }}</span>
            </div>
            <div class="flex items-center">
              <span class="mr-2">📞</span>
              <span>{{ contactSection.phone }}</span>
            </div>
            <div class="flex items-center">
              <span class="mr-2">📍</span>
              <span>{{ contactSection.address }}</span>
            </div>
          </div>
        </div>
        
        <!-- QR Code -->
        <div class="footer-section">
          <h4 class="text-lg font-semibold mb-4">扫码关注</h4>
          <div class="text-center">
            <div class="w-32 h-32 bg-white rounded-lg p-2 mx-auto mb-2">
              <img 
                :src="contactSection.wechatQr" 
                :alt="contactSection.wechat"
                class="w-full h-full object-contain"
              >
            </div>
            <p class="text-sm text-gray-400">{{ contactSection.wechat }}</p>
          </div>
        </div>
      </div>
      
      <!-- Divider -->
      <div class="border-t border-gray-700 pt-8">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <!-- Copyright -->
          <div class="text-gray-400 text-sm mb-4 md:mb-0">
            {{ footerSection.copyright }}
          </div>
          
          <!-- Legal Links -->
          <div class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
            <a 
              :href="footerSection.icpUrl" 
              class="text-gray-400 hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ footerSection.icp }}
            </a>
            <a 
              :href="footerSection.securityUrl" 
              class="text-gray-400 hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ footerSection.security }}
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Back to Top Button -->
    <button 
      v-if="showBackToTop"
      @click="scrollToTop"
      class="back-to-top fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 z-50"
      aria-label="回到顶部"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  </footer>
</template>

<script>
import { footerSection, contactSection } from '../../data/content.js';

export default {
  name: 'Footer',
  data() {
    return {
      footerSection,
      contactSection,
      showBackToTop: false
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    handleScroll() {
      this.showBackToTop = window.scrollY > 300;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
  position: relative;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent);
}

.footer-section {
  position: relative;
}

.footer-section h3,
.footer-section h4 {
  position: relative;
  padding-bottom: 0.5rem;
}

.footer-section h3::after,
.footer-section h4::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  border-radius: 1px;
}

.footer-section ul li {
  position: relative;
  transition: all 0.3s ease;
}

.footer-section ul li::before {
  content: '';
  position: absolute;
  left: -10px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 2px;
  background: #3b82f6;
  transition: width 0.3s ease;
}

.footer-section ul li:hover::before {
  width: 6px;
}

.footer-section ul li:hover {
  transform: translateX(10px);
}

/* Social Links Hover Effects */
.footer-section .flex.space-x-4 a {
  transition: all 0.3s ease;
}

.footer-section .flex.space-x-4 a:hover {
  transform: translateY(-2px);
  filter: brightness(1.2);
}

/* QR Code Hover Effect */
.w-32.h-32.bg-white {
  transition: all 0.3s ease;
}

.w-32.h-32.bg-white:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
}

/* Back to Top Button */
.back-to-top {
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
}

.back-to-top:hover {
  box-shadow: 0 6px 25px rgba(59, 130, 246, 0.4);
}

/* Legal Links Hover Effects */
.text-gray-400:hover {
  color: #3b82f6;
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer {
    padding: 2rem 0;
  }
  
  .footer-section {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .footer-section h3::after,
  .footer-section h4::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .back-to-top {
    bottom: 4rem;
    right: 1rem;
  }
}

/* Animation for Footer Sections */
.footer-section {
  animation: fadeInUp 0.8s ease;
}

.footer-section:nth-child(1) { animation-delay: 0.1s; }
.footer-section:nth-child(2) { animation-delay: 0.2s; }
.footer-section:nth-child(3) { animation-delay: 0.3s; }
.footer-section:nth-child(4) { animation-delay: 0.4s; }

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Gradient Text for Company Name */
.footer-section h3 {
  background: linear-gradient(135deg, #ffffff, #3b82f6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Hover Effects for Contact Info */
.footer-section .space-y-2 > div {
  transition: all 0.3s ease;
  padding: 0.25rem 0;
  border-radius: 0.25rem;
}

.footer-section .space-y-2 > div:hover {
  background: rgba(59, 130, 246, 0.1);
  transform: translateX(5px);
}

/* Copyright Section Styling */
.border-t.border-gray-700 {
  border-image: linear-gradient(90deg, transparent, #374151, transparent) 1;
}

/* Mobile Optimizations */
@media (max-width: 640px) {
  .container {
    padding: 0 1rem;
  }
  
  .grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .flex.flex-col.md\\:flex-row {
    text-align: center;
    gap: 1rem;
  }
}
</style>