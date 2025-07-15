<template>
  <div class="photo-gallery-page">
    <!-- Page Header -->
    <section class="page-header bg-gradient-to-r from-orange-600 to-red-600 text-white">
      <div class="container">
        <div class="text-center py-20">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">活动照片墙</h1>
          <p class="text-xl md:text-2xl opacity-90">记录精彩瞬间，见证成长历程</p>
        </div>
      </div>
    </section>

    <!-- Photo Gallery -->
    <section class="section bg-white">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title gradient-text">活动回顾</h2>
          <p class="section-subtitle">校园VC的精彩活动时刻</p>
        </div>

        <!-- Category Tabs -->
        <div class="flex flex-wrap justify-center mb-12">
          <button 
            v-for="category in categories" 
            :key="category.key"
            @click="activeCategory = category.key"
            class="px-6 py-3 m-2 rounded-full transition-all duration-300"
            :class="activeCategory === category.key 
              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
          >
            <span class="mr-2">{{ category.icon }}</span>
            {{ category.name }}
          </button>
        </div>

        <!-- Photo Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div 
            v-for="photo in filteredPhotos" 
            :key="photo.id"
            class="photo-item relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
            @click="openLightbox(photo)"
          >
            <div class="aspect-square overflow-hidden">
              <img 
                :src="photo.src" 
                :alt="photo.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              >
            </div>
            
            <!-- Hover Overlay -->
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
              <div class="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="text-2xl mb-2">🔍</div>
                <h3 class="text-lg font-semibold mb-1">{{ photo.title }}</h3>
                <p class="text-sm opacity-90">{{ photo.date }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-12" v-if="hasMorePhotos">
          <button 
            @click="loadMorePhotos"
            class="btn btn-primary text-lg px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            <span class="mr-2">📷</span>
            加载更多照片
          </button>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <div 
      v-if="lightboxPhoto" 
      @click="closeLightbox"
      class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
    >
      <div class="relative max-w-4xl max-h-full">
        <!-- Close Button -->
        <button 
          @click="closeLightbox"
          class="absolute top-4 right-4 text-white text-2xl w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all duration-300 z-10"
        >
          ✕
        </button>
        
        <!-- Photo -->
        <img 
          :src="lightboxPhoto.src" 
          :alt="lightboxPhoto.title"
          class="max-w-full max-h-full object-contain rounded-lg"
          @click.stop
        >
        
        <!-- Photo Info -->
        <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-6 rounded-b-lg">
          <h3 class="text-xl font-semibold mb-2">{{ lightboxPhoto.title }}</h3>
          <p class="text-gray-300 mb-1">{{ lightboxPhoto.description }}</p>
          <p class="text-sm text-gray-400">{{ lightboxPhoto.date }} • {{ lightboxPhoto.location }}</p>
        </div>
        
        <!-- Navigation Arrows -->
        <button 
          v-if="lightboxPhoto.id > 1"
          @click.stop="previousPhoto"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl w-12 h-12 bg-black bg-opacity-50 rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all duration-300"
        >
          ‹
        </button>
        <button 
          v-if="lightboxPhoto.id < photos.length"
          @click.stop="nextPhoto"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl w-12 h-12 bg-black bg-opacity-50 rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all duration-300"
        >
          ›
        </button>
      </div>
    </div>

    <!-- Statistics Section -->
    <section class="section bg-gray-50">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title gradient-text">活动数据</h2>
          <p class="section-subtitle">10年来的精彩足迹</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div 
            v-for="stat in activityStats" 
            :key="stat.label"
            class="text-center p-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl text-white fade-in"
          >
            <div class="text-4xl font-bold mb-2">{{ stat.value }}</div>
            <div class="text-sm opacity-90">{{ stat.label }}</div>
            <div class="text-xs opacity-75 mt-1">{{ stat.description }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <div class="container">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">加入我们的活动</h2>
          <p class="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            参与校园VC的各种活动，与志同道合的创业伙伴一起成长，
            创造属于你的精彩瞬间！
          </p>
          <div class="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <router-link 
              to="/contact" 
              class="btn bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl inline-block"
            >
              <span class="mr-2">🎯</span>
              报名参与活动
            </router-link>
            <router-link 
              to="/services" 
              class="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl inline-block"
            >
              <span class="mr-2">📋</span>
              查看活动安排
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PhotoGallery',
  data() {
    return {
      activeCategory: 'all',
      lightboxPhoto: null,
      displayCount: 12,
      categories: [
        { key: 'all', name: '全部', icon: '📷' },
        { key: 'events', name: '大型活动', icon: '🎉' },
        { key: 'workshops', name: '工作坊', icon: '💼' },
        { key: 'competitions', name: '比赛路演', icon: '🏆' },
        { key: 'social', name: '社交聚会', icon: '🤝' }
      ],
      photos: [
        // Events (大型活动) - home-8 系列
        {
          id: 1,
          src: '/images/home-8-1.png',
          title: '校园VC年度峰会',
          description: '2024年度校园VC创业峰会，汇聚全国优秀创业者',
          date: '2024-05-15',
          location: '北京国际会议中心',
          category: 'events'
        },
        {
          id: 2,
          src: '/images/home-8-2.jpeg',
          title: '创业导师分享会',
          description: '知名企业家分享创业经验和心得',
          date: '2024-04-20',
          location: '清华大学',
          category: 'events'
        },
        {
          id: 3,
          src: '/images/home-8-3.jpeg',
          title: '校园创业节开幕式',
          description: '第十届校园创业节隆重开幕',
          date: '2024-03-10',
          location: '北京大学',
          category: 'events'
        },
        {
          id: 4,
          src: '/images/home-8-4.jpeg',
          title: '投融资对接会',
          description: '创业项目与投资机构面对面交流',
          date: '2024-02-28',
          location: '中关村创业大街',
          category: 'events'
        },

        // Workshops (工作坊) - home-9 系列
        {
          id: 5,
          src: '/images/home-9-1.jpeg',
          title: '产品设计工作坊',
          description: '从0到1的产品设计全流程实战',
          date: '2024-04-15',
          location: '校园VC孵化基地',
          category: 'workshops'
        },
        {
          id: 6,
          src: '/images/home-9-2.jpeg',
          title: '商业模式训练营',
          description: '创新商业模式设计与验证',
          date: '2024-03-25',
          location: '创业空间',
          category: 'workshops'
        },
        {
          id: 7,
          src: '/images/home-9-3.jpeg',
          title: '团队建设工作坊',
          description: '高效团队组建与管理技巧',
          date: '2024-03-18',
          location: '培训中心',
          category: 'workshops'
        },
        {
          id: 8,
          src: '/images/home-9-4.jpeg',
          title: '市场营销实战课',
          description: '数字营销策略与实践',
          date: '2024-02-20',
          location: '营销学院',
          category: 'workshops'
        },
        {
          id: 9,
          src: '/images/home-9-5.png',
          title: '财务管理培训',
          description: '创业公司财务规划与管理',
          date: '2024-01-30',
          location: '商学院',
          category: 'workshops'
        },
        {
          id: 10,
          src: '/images/home-9-6.jpeg',
          title: '技术创新研讨',
          description: '前沿技术在创业中的应用',
          date: '2024-01-15',
          location: '科技园',
          category: 'workshops'
        },
        {
          id: 11,
          src: '/images/home-9-7.jpg',
          title: '用户体验设计',
          description: 'UX/UI设计思维与方法',
          date: '2023-12-20',
          location: '设计工作室',
          category: 'workshops'
        },
        {
          id: 12,
          src: '/images/home-9-8.jpeg',
          title: '数据分析课程',
          description: '创业数据分析与决策',
          date: '2023-12-10',
          location: '数据中心',
          category: 'workshops'
        },

        // Competitions (比赛路演) - home-10 系列
        {
          id: 13,
          src: '/images/home-10-1.jpg',
          title: '创业大赛决赛',
          description: '全国大学生创业大赛总决赛现场',
          date: '2024-06-01',
          location: '国家会议中心',
          category: 'competitions'
        },
        {
          id: 14,
          src: '/images/home-10-2.jpeg',
          title: '项目路演现场',
          description: '优秀创业项目路演展示',
          date: '2024-05-20',
          location: '创投大厦',
          category: 'competitions'
        },
        {
          id: 15,
          src: '/images/home-10-3.jpeg',
          title: '投资人评审',
          description: '知名投资人现场点评项目',
          date: '2024-05-18',
          location: '投资大厦',
          category: 'competitions'
        },
        {
          id: 16,
          src: '/images/home-10-4.jpeg',
          title: '颁奖典礼',
          description: '优胜项目颁奖仪式',
          date: '2024-05-15',
          location: '颁奖大厅',
          category: 'competitions'
        },
        {
          id: 17,
          src: '/images/home-10-5.jpeg',
          title: '创新项目展示',
          description: '科技创新项目成果展示',
          date: '2024-04-30',
          location: '展览中心',
          category: 'competitions'
        },
        {
          id: 18,
          src: '/images/home-10-6.jpeg',
          title: '团队合影留念',
          description: '获奖团队与评委合影',
          date: '2024-04-28',
          location: '会议厅',
          category: 'competitions'
        }
      ],
      activityStats: [
        {
          value: '300+',
          label: '举办活动',
          description: '累计活动场次'
        },
        {
          value: '10万+',
          label: '参与人次',
          description: '活动参与总数'
        },
        {
          value: '50+',
          label: '合作伙伴',
          description: '战略合作机构'
        },
        {
          value: '1000+',
          label: '精彩瞬间',
          description: '记录美好时刻'
        }
      ]
    }
  },
  computed: {
    filteredPhotos() {
      let filtered = this.activeCategory === 'all' 
        ? this.photos 
        : this.photos.filter(photo => photo.category === this.activeCategory)
      
      return filtered.slice(0, this.displayCount)
    },
    hasMorePhotos() {
      let totalFiltered = this.activeCategory === 'all' 
        ? this.photos.length 
        : this.photos.filter(photo => photo.category === this.activeCategory).length
      
      return this.displayCount < totalFiltered
    }
  },
  methods: {
    openLightbox(photo) {
      this.lightboxPhoto = photo
      document.body.style.overflow = 'hidden'
    },
    closeLightbox() {
      this.lightboxPhoto = null
      document.body.style.overflow = 'auto'
    },
    previousPhoto() {
      const currentIndex = this.photos.findIndex(p => p.id === this.lightboxPhoto.id)
      if (currentIndex > 0) {
        this.lightboxPhoto = this.photos[currentIndex - 1]
      }
    },
    nextPhoto() {
      const currentIndex = this.photos.findIndex(p => p.id === this.lightboxPhoto.id)
      if (currentIndex < this.photos.length - 1) {
        this.lightboxPhoto = this.photos[currentIndex + 1]
      }
    },
    loadMorePhotos() {
      this.displayCount += 6
    }
  },
  mounted() {
    // Handle ESC key to close lightbox
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.lightboxPhoto) {
        this.closeLightbox()
      }
    })
    
    // Initialize animations
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
</script>

<style scoped>
.photo-item {
  transition: transform 0.3s ease;
}

.photo-item:hover {
  transform: translateY(-4px);
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

/* Lightbox animations */
.fixed {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Grid responsive adjustments */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }
}

@media (max-width: 480px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>