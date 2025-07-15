<template>
  <div class="contact-page">
    <!-- Page Header -->
    <section class="page-header bg-gradient-to-r from-teal-600 to-green-600 text-white">
      <div class="container">
        <div class="text-center py-20">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">联系我们</h1>
          <p class="text-xl md:text-2xl opacity-90">开始你的创业之旅</p>
        </div>
      </div>
    </section>

    <!-- Contact Form & Info -->
    <section class="section bg-white">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div>
            <h2 class="text-3xl font-bold mb-6 gradient-text">立即咨询</h2>
            <p class="text-gray-600 mb-8">填写下方表单，我们会在24小时内与你联系</p>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-2">姓名 *</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="请输入你的姓名"
                  >
                </div>
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">手机号 *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    v-model="form.phone"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="请输入手机号码"
                  >
                </div>
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">邮箱</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="请输入邮箱地址"
                >
              </div>
              
              <div>
                <label for="university" class="block text-sm font-medium text-gray-700 mb-2">学校/公司</label>
                <input 
                  type="text" 
                  id="university" 
                  v-model="form.university"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="请输入学校或公司名称"
                >
              </div>
              
              <div>
                <label for="service" class="block text-sm font-medium text-gray-700 mb-2">感兴趣的服务 *</label>
                <select 
                  id="service" 
                  v-model="form.service"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">请选择服务类型</option>
                  <option value="项目孵化">项目孵化线</option>
                  <option value="校园VC导航板">校园VC导航板</option>
                  <option value="创业教育智慧系统">创业教育智慧系统</option>
                  <option value="Web3师徒导师">Web3师徒导师</option>
                  <option value="投资咨询">投资咨询</option>
                  <option value="其他">其他</option>
                </select>
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">详细需求</label>
                <textarea 
                  id="message" 
                  v-model="form.message"
                  rows="4"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  placeholder="请详细描述你的需求或项目情况..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="w-full btn btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isSubmitting">
                  <span class="mr-2">🚀</span>
                  提交咨询
                </span>
                <span v-else>
                  <span class="mr-2">⏳</span>
                  提交中...
                </span>
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div>
            <h2 class="text-3xl font-bold mb-6 gradient-text">联系方式</h2>
            
            <div class="space-y-6 mb-8">
              <div 
                v-for="contact in contactInfo" 
                :key="contact.type"
                class="flex items-start"
              >
                <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white mr-4">
                  <span class="text-xl">{{ contact.icon }}</span>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800 mb-1">{{ contact.title }}</h3>
                  <p class="text-gray-600">{{ contact.content }}</p>
                  <p v-if="contact.note" class="text-sm text-gray-500 mt-1">{{ contact.note }}</p>
                </div>
              </div>
            </div>

            <!-- Office Hours -->
            <div class="card p-6 mb-8">
              <h3 class="text-xl font-bold mb-4 text-gray-800">工作时间</h3>
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="text-gray-600">周一至周五</span>
                  <span class="font-medium">9:00 - 18:00</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">周六</span>
                  <span class="font-medium">10:00 - 16:00</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">周日</span>
                  <span class="font-medium">休息</span>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div class="card p-6">
              <h3 class="text-xl font-bold mb-4 text-gray-800">关注我们</h3>
              <div class="flex space-x-4">
                <a 
                  v-for="social in socialLinks" 
                  :key="social.name"
                  :href="social.url" 
                  class="w-12 h-12 bg-gray-100 hover:bg-blue-500 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 text-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                  :title="social.name"
                >
                  {{ social.icon }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section bg-gray-50">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="section-title gradient-text">常见问题</h2>
          <p class="section-subtitle">解答你的疑虑</p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="space-y-4">
            <div 
              v-for="(faq, index) in faqs" 
              :key="index"
              class="card"
            >
              <button 
                @click="toggleFaq(index)"
                class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span class="font-semibold text-gray-800">{{ faq.question }}</span>
                <span 
                  class="transform transition-transform duration-200"
                  :class="{ 'rotate-180': openFaqs.includes(index) }"
                >
                  ▼
                </span>
              </button>
              <div 
                v-show="openFaqs.includes(index)"
                class="px-6 pb-4 text-gray-600 leading-relaxed"
              >
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div class="container">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">还在等什么？</h2>
          <p class="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            现在就联系我们，获得专业的创业指导和支持。
            让我们一起将你的创意变成改变世界的产品！
          </p>
          <div class="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <a 
              href="tel:400-123-4567" 
              class="btn bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl inline-block"
            >
              <span class="mr-2">📞</span>
              立即致电
            </a>
            <a 
              href="mailto:contact@xiaoyuanvc.com" 
              class="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl inline-block"
            >
              <span class="mr-2">📧</span>
              发送邮件
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
        university: '',
        service: '',
        message: ''
      },
      isSubmitting: false,
      openFaqs: [],
      contactInfo: [
        {
          type: 'phone',
          icon: '📞',
          title: '咨询热线',
          content: '400-123-4567',
          note: '工作时间内接听，24小时留言'
        },
        {
          type: 'email',
          icon: '📧',
          title: '邮箱联系',
          content: 'contact@xiaoyuanvc.com',
          note: '24小时内回复'
        },
        {
          type: 'wechat',
          icon: '💬',
          title: '微信咨询',
          content: 'xiaoyuanvc2024',
          note: '添加时请备注来意'
        },
        {
          type: 'address',
          icon: '📍',
          title: '办公地址',
          content: '北京市海淀区中关村创业大街',
          note: '欢迎预约实地参观'
        }
      ],
      socialLinks: [
        { name: '微信', icon: '💬', url: '#' },
        { name: '微博', icon: '📱', url: '#' },
        { name: 'B站', icon: '📺', url: 'https://space.bilibili.com/example' },
        { name: 'GitHub', icon: '💻', url: 'https://github.com/VCCampus' }
      ],
      faqs: [
        {
          question: '校园VC适合什么样的学生？',
          answer: '我们欢迎所有有创业梦想的大学生，无论你是否有具体的项目想法。我们提供从创业启蒙到项目孵化的全程服务，帮助每个阶段的创业者找到适合的发展路径。'
        },
        {
          question: '参与校园VC需要付费吗？',
          answer: '基础的创业教育和社区活动是免费的。针对具体的孵化项目，我们会根据服务内容收取合理费用，但我们也提供奖学金和免费名额给优秀的项目和学生。'
        },
        {
          question: '如何申请加入孵化项目？',
          answer: '你可以通过官网提交申请，或参加我们的线下活动。我们会对项目进行初步评估，符合条件的项目将进入面试环节，最终确定是否录取。'
        },
        {
          question: '校园VC提供资金投资吗？',
          answer: '是的，对于优秀的项目，我们会提供种子投资或帮助对接投资机构。投资金额从几万元到数百万元不等，具体根据项目情况而定。'
        },
        {
          question: '毕业后还能继续获得支持吗？',
          answer: '当然可以！我们的校友网络会持续为你提供支持，包括业务合作、人才推荐、后续融资等。我们希望与每位创业者建立长期的合作关系。'
        },
        {
          question: '非北京地区的学生如何参与？',
          answer: '我们在全国多个城市都有合作伙伴和线下活动。同时，我们的线上课程和服务覆盖全国，你可以通过线上方式参与我们的项目。'
        }
      ]
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true
      
      // 模拟表单提交
      try {
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        // 这里应该调用真实的API
        console.log('表单提交:', this.form)
        
        alert('提交成功！我们会在24小时内与你联系。')
        
        // 重置表单
        this.form = {
          name: '',
          phone: '',
          email: '',
          university: '',
          service: '',
          message: ''
        }
      } catch (error) {
        alert('提交失败，请稍后重试或直接联系我们。')
      } finally {
        this.isSubmitting = false
      }
    },
    
    toggleFaq(index) {
      if (this.openFaqs.includes(index)) {
        this.openFaqs = this.openFaqs.filter(i => i !== index)
      } else {
        this.openFaqs.push(index)
      }
    }
  }
}
</script>