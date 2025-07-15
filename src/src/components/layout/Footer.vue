<template>
  <footer class="footer bg-gray-900 text-white">
    <div class="container">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
        <!-- Company Info -->
        <div class="md:col-span-2">
          <div class="flex items-center space-x-3 mb-4">
            <img src="/images/xyvc-logo.png" alt="校园VC" class="w-12 h-12">
            <span class="text-2xl font-bold">校园VC</span>
          </div>
          <p class="text-gray-400 mb-4">
            10年推动100万大学生创业，数字创业解化云平台
          </p>
          <p class="text-gray-400 mb-6">
            从零到英雄，寻找改变世界的疯子！
          </p>
          
          <!-- Social Links -->
          <div class="flex space-x-4">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url" 
              class="text-gray-400 hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="sr-only">{{ social.name }}</span>
              <span class="text-2xl">{{ social.icon }}</span>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">快速链接</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.name">
              <router-link 
                :to="link.path" 
                class="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4">联系方式</h3>
          <ul class="space-y-2 text-gray-400">
            <li v-for="contact in contactInfo" :key="contact.type">
              <span class="mr-2">{{ contact.icon }}</span>
              <span>{{ contact.value }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 py-6">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="text-sm text-gray-400 mb-4 md:mb-0">
            © {{ currentYear }} 校园VC. All rights reserved.
          </div>
          
          <!-- Legal Links -->
          <div class="flex items-center space-x-6 text-sm">
            <a 
              href="https://beian.miit.gov.cn/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors duration-200"
            >
              京ICP备2021017602号
            </a>
            <a 
              href="https://beian.mps.gov.cn/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors duration-200"
            >
              京公网安备11010802035175号
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      socialLinks: [
        { name: '微信', icon: '💬', url: '#' },
        { name: '微博', icon: '📱', url: '#' },
        { name: 'B站', icon: '📺', url: 'https://space.bilibili.com/example' }
      ],
      quickLinks: [
        { name: '首页', path: '/' },
        { name: '关于我们', path: '/about' },
        { name: '服务项目', path: '/services' },
        { name: '团队介绍', path: '/team' },
        { name: '活动照片墙', path: '/success' },
        { name: '联系我们', path: '/contact' }
      ],
      contactInfo: [
        { type: 'email', icon: '📧', value: 'contact@xiaoyuanvc.com' },
        { type: 'phone', icon: '📞', value: '400-123-4567' },
        { type: 'address', icon: '📍', value: '北京市海淀区' }
      ]
    }
  }
}
</script>