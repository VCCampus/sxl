<template>
  <section class="testimonials-section section bg-white">
    <div class="container">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="section-title gradient-text">{{ testimonialsSection.title }}</h2>
        <p class="section-subtitle">{{ testimonialsSection.subtitle }}</p>
      </div>
      
      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div 
          v-for="(testimonial, index) in testimonialsSection.testimonials" 
          :key="index"
          class="testimonial-card bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 fade-in"
        >
          <!-- Avatar -->
          <div class="text-center mb-6">
            <div class="w-16 h-16 mx-auto rounded-full overflow-hidden shadow-lg border-3 border-gray-200">
              <img 
                :src="testimonial.avatar" 
                :alt="testimonial.name"
                class="w-full h-full object-cover"
                @error="handleImageError"
              >
            </div>
          </div>
          
          <!-- Content -->
          <div class="text-center">
            <p class="text-gray-600 mb-4 italic leading-relaxed">
              "{{ testimonial.content }}"
            </p>
            
            <!-- Rating -->
            <div class="flex justify-center mb-4">
              <div class="flex text-yellow-400">
                <span v-for="i in testimonial.rating" :key="i" class="text-lg">★</span>
              </div>
            </div>
            
            <!-- Author -->
            <h4 class="font-semibold text-gray-800 mb-1">{{ testimonial.name }}</h4>
            <p class="text-sm text-blue-600">{{ testimonial.school }}</p>
          </div>
        </div>
      </div>
      
      <!-- Photo Gallery -->
      <div class="photo-gallery">
        <h3 class="text-2xl font-bold text-center mb-8 text-gray-800">活动照片墙</h3>
        
        <!-- Gallery Grid -->
        <div class="gallery-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div 
            v-for="(photo, index) in displayedPhotos" 
            :key="index"
            class="gallery-item relative overflow-hidden rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl fade-in"
            @click="openModal(photo, index)"
          >
            <img 
              :src="photo" 
              :alt="`活动照片 ${index + 1}`"
              class="w-full h-full object-cover"
              @error="handleImageError"
            >
            <div class="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300 flex items-center justify-center">
              <span class="text-white text-2xl">🔍</span>
            </div>
          </div>
        </div>
        
        <!-- 所有照片懒加载展示，移除查看更多按钮 -->
      </div>
      
      <!-- Modal for Photo Viewer -->
      <div 
        v-if="modalPhoto" 
        class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
        @click="closeModal"
      >
        <div class="relative max-w-4xl max-h-4xl mx-4">
          <img 
            :src="modalPhoto" 
            :alt="'活动照片'"
            class="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          >
          <button 
            @click="closeModal"
            class="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors"
          >
            ✕
          </button>
          
          <!-- Navigation -->
          <button 
            v-if="modalIndex > 0"
            @click.stop="prevPhoto"
            class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300 transition-colors"
          >
            ❮
          </button>
          <button 
            v-if="modalIndex < testimonialsSection.gallery.length - 1"
            @click.stop="nextPhoto"
            class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300 transition-colors"
          >
            ❯
          </button>
          
          <!-- Photo Counter -->
          <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">
            {{ modalIndex + 1 }} / {{ testimonialsSection.gallery.length }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { testimonialsSection } from '../../data/content.js';

export default {
  name: 'TestimonialsSection',
  data() {
    return {
      testimonialsSection,
      showAllPhotos: false,
      modalPhoto: null,
      modalIndex: 0
    };
  },
  computed: {
    displayedPhotos() {
      // 直接显示所有照片，实现懒加载
      return this.testimonialsSection.gallery;
    }
  },
  methods: {
    handleImageError(event) {
      event.target.src = '/images/default-placeholder.png';
    },
    loadMorePhotos() {
      this.showAllPhotos = true;
    },
    openModal(photo, index) {
      this.modalPhoto = photo;
      this.modalIndex = index;
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.modalPhoto = null;
      this.modalIndex = 0;
      document.body.style.overflow = '';
    },
    prevPhoto() {
      if (this.modalIndex > 0) {
        this.modalIndex--;
        this.modalPhoto = this.testimonialsSection.gallery[this.modalIndex];
      }
    },
    nextPhoto() {
      if (this.modalIndex < this.testimonialsSection.gallery.length - 1) {
        this.modalIndex++;
        this.modalPhoto = this.testimonialsSection.gallery[this.modalIndex];
      }
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
    
    // Keyboard navigation for modal
    document.addEventListener('keydown', (e) => {
      if (this.modalPhoto) {
        if (e.key === 'Escape') {
          this.closeModal();
        } else if (e.key === 'ArrowLeft') {
          this.prevPhoto();
        } else if (e.key === 'ArrowRight') {
          this.nextPhoto();
        }
      }
    });
  }
};
</script>

<style scoped>
.testimonials-section {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
}

.testimonial-card {
  position: relative;
  overflow: hidden;
  border: 1px solid #e5e7eb;
}

.testimonial-card::before {
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

.testimonial-card:hover::before {
  opacity: 1;
}

.testimonial-card:hover {
  border-color: #3b82f6;
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
}

.photo-gallery {
  margin-top: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 1.5rem;
}

.gallery-grid {
  gap: 1rem;
}

.gallery-item {
  aspect-ratio: 1;
  position: relative;
  overflow: hidden;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
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
.fade-in:nth-child(7) { transition-delay: 0.7s; }
.fade-in:nth-child(8) { transition-delay: 0.8s; }

.gradient-text {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Modal Styles */
.fixed.inset-0 {
  backdrop-filter: blur(8px);
}

.fixed.inset-0 .relative {
  animation: modalFadeIn 0.3s ease;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Mobile Optimizations */
@media (max-width: 768px) {
  .testimonials-section {
    padding: 3rem 0;
  }
  
  .testimonial-card {
    padding: 1.5rem;
  }
  
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }
  
  .photo-gallery {
    padding: 1rem;
  }
}

/* Responsive Gallery */
@media (min-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Hover Effects */
.testimonial-card:hover {
  transform: translateY(-5px);
}

.gallery-item:hover {
  transform: translateY(-3px);
}
</style>