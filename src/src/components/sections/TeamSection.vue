<template>
  <section class="team-section section bg-gray-50">
    <div class="container">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="section-title gradient-text">{{ teamSection.title }}</h2>
        <p class="section-subtitle">{{ teamSection.subtitle }}</p>
      </div>
      
      <!-- Founder Section -->
      <div class="founder-section mb-20">
        <div class="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div class="flex flex-col md:flex-row items-center md:items-start gap-8">
            <!-- Founder Avatar -->
            <div class="flex-shrink-0 fade-in">
              <div class="w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-gradient-to-r from-blue-500 to-purple-500 p-1">
                <img 
                  :src="teamSection.founder.avatar" 
                  :alt="teamSection.founder.name"
                  class="w-full h-full rounded-full object-cover"
                  @error="handleImageError"
                >
              </div>
            </div>
            
            <!-- Founder Info -->
            <div class="flex-1 text-center md:text-left fade-in">
              <h3 class="text-3xl font-bold mb-2 text-gray-800">
                {{ teamSection.founder.name }}
              </h3>
              <p class="text-xl text-blue-600 font-semibold mb-4">
                {{ teamSection.founder.title }}
              </p>
              <p class="text-lg text-gray-600 mb-6">
                {{ teamSection.founder.description }}
              </p>
              
              <!-- Background List -->
              <div class="space-y-2">
                <div 
                  v-for="(item, index) in teamSection.founder.background" 
                  :key="index"
                  class="flex items-start text-gray-700"
                >
                  <span class="text-blue-500 mr-2 mt-1">•</span>
                  <span>{{ item }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Team Members Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(member, index) in teamSection.members" 
          :key="index"
          class="member-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 fade-in"
        >
          <!-- Member Avatar -->
          <div class="text-center mb-6">
            <div class="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-lg border-3 border-gray-200">
              <img 
                :src="member.avatar" 
                :alt="member.name"
                class="w-full h-full object-cover"
                @error="handleImageError"
              >
            </div>
          </div>
          
          <!-- Member Info -->
          <div class="text-center">
            <h4 class="text-xl font-bold mb-2 text-gray-800">{{ member.name }}</h4>
            <p class="text-blue-600 font-semibold mb-4">{{ member.title }}</p>
            <p class="text-gray-600 text-sm leading-relaxed">{{ member.description }}</p>
          </div>
        </div>
      </div>
      
      <!-- Book Section -->
      <div class="book-section mt-20">
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div class="flex flex-col md:flex-row items-center gap-8">
            <!-- Book Cover -->
            <div class="flex-shrink-0 fade-in">
              <div class="w-40 h-56 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  :src="bookSection.book.cover" 
                  :alt="bookSection.book.title"
                  class="w-full h-full object-cover"
                  @error="handleImageError"
                >
              </div>
            </div>
            
            <!-- Book Info -->
            <div class="flex-1 text-center md:text-left fade-in">
              <h3 class="text-2xl font-bold mb-2">{{ bookSection.title }}</h3>
              <p class="text-lg mb-4 opacity-90">{{ bookSection.subtitle }}</p>
              <h4 class="text-3xl font-bold mb-4">{{ bookSection.book.title }}</h4>
              <p class="text-lg mb-6 opacity-90">{{ bookSection.book.description }}</p>
              
              <!-- Book Highlights -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                <div 
                  v-for="(highlight, index) in bookSection.book.highlights" 
                  :key="index"
                  class="flex items-center text-sm"
                >
                  <span class="text-yellow-300 mr-2">✓</span>
                  <span>{{ highlight }}</span>
                </div>
              </div>
              
              <!-- Book CTA -->
              <a 
                :href="bookSection.book.readUrl" 
                class="btn bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                📚 立即阅读
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { teamSection, bookSection } from '../../data/content.js';

export default {
  name: 'TeamSection',
  data() {
    return {
      teamSection,
      bookSection
    };
  },
  methods: {
    handleImageError(event) {
      // 使用默认头像或占位图
      event.target.src = '/images/default-avatar.png';
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
.team-section {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

.founder-section {
  position: relative;
}

.founder-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%);
  border-radius: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.founder-section:hover::before {
  opacity: 1;
}

.member-card {
  position: relative;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
}

.member-card::before {
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

.member-card:hover::before {
  opacity: 1;
}

.member-card:hover {
  border-color: #3b82f6;
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
}

.book-section {
  position: relative;
  overflow: hidden;
}

.book-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.book-section:hover::before {
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
.fade-in:nth-child(5) { transition-delay: 0.5s; }
.fade-in:nth-child(6) { transition-delay: 0.6s; }

.gradient-text {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Mobile Optimizations */
@media (max-width: 768px) {
  .team-section {
    padding: 3rem 0;
  }
  
  .founder-section .flex-col {
    text-align: center;
  }
  
  .member-card {
    padding: 1.5rem;
  }
  
  .book-section .flex-col {
    text-align: center;
  }
}

/* Avatar Border Animation */
.w-48.h-48.rounded-full {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  padding: 4px;
  animation: rotate 6s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.w-48.h-48.rounded-full img {
  border: 2px solid white;
}
</style>