<template>
  <header class="header bg-white shadow-sm sticky top-0 z-50">
    <nav class="container">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-3">
          <img src="/images/xyvc-logo.png" alt="校园VC" class="w-10 h-10">
          <span class="text-xl font-bold gradient-text">校园VC</span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.path" 
            class="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            :class="{ 'text-blue-600': $route.path === item.path }"
          >
            {{ item.name }}
          </router-link>
          <a 
            href="#contact" 
            class="btn btn-primary text-sm px-4 py-2"
          >
            联系我们
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-gray-700 hover:text-blue-600 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                :class="{ 'hidden': mobileMenuOpen, 'inline-flex': !mobileMenuOpen }"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path 
                :class="{ 'hidden': !mobileMenuOpen, 'inline-flex': mobileMenuOpen }"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div 
        :class="{ 'block': mobileMenuOpen, 'hidden': !mobileMenuOpen }"
        class="md:hidden"
      >
        <div class="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
          <router-link 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.path" 
            @click="mobileMenuOpen = false"
            class="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            :class="{ 'text-blue-600': $route.path === item.path }"
          >
            {{ item.name }}
          </router-link>
          <a 
            href="#contact" 
            @click="mobileMenuOpen = false"
            class="block px-3 py-2 text-blue-600 font-medium"
          >
            联系我们
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      mobileMenuOpen: false,
      navigation: [
        { name: '首页', path: '/' },
        { name: '关于我们', path: '/about' },
        { name: '服务项目', path: '/services' },
        { name: '团队介绍', path: '/team' },
        { name: '活动照片墙', path: '/success' },
        { name: '联系我们', path: '/contact' }
      ]
    }
  },
  watch: {
    $route() {
      this.mobileMenuOpen = false
    }
  }
}
</script>