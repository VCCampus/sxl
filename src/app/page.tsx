import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, BookOpen, Target, ArrowRight, Quote } from "lucide-react"

export default function CampusVCLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-cyan-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></div>
              <span className="text-xl font-bold text-gray-900">校园VC</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-gray-600 hover:text-gray-900">
                关于我们
              </a>
              <a href="#courses" className="text-gray-600 hover:text-gray-900">
                课程体系
              </a>
              <a href="#team" className="text-gray-600 hover:text-gray-900">
                核心团队
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900">
                学员反馈
              </a>
              <Button className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600">
                立即加入
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-4 py-2">
                  数字创业孵化云
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  校园VC
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
                    10年推动100万大学生创业
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  从零到英雄，寻找改变世界的疯子！培养十年后的数字创业CEO，通过"玩创投"三主线体系，让每一个创业梦想落地。
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-lg px-8 py-4"
                >
                  进入数字创业云
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 bg-transparent">
                  了解更多
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-pink-500" />
                  <span>100万+ 学生受益</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-orange-500" />
                  <span>10年+ 教育经验</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">数创精英班</h3>
                        <p className="text-sm text-gray-600">Digital Entrepreneurship</p>
                      </div>
                    </div>
                    <Badge variant="secondary">热门</Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">项目线：火种节、加速营、路演</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">创业线：导论、机会、团队</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">数字线：产品设计、运营</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">了解校园VC的创业故事</h2>
            <p className="text-xl text-gray-600">通过视频深入了解我们如何帮助大学生实现创业梦想</p>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://player.bilibili.com/player.html?bvid=BV1pW4y1M7JQ&autoplay=1&muted=1"
              className="w-full h-full"
              allowFullScreen
              title="校园VC介绍视频"
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="courses" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">"玩创投"三主线课程体系</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              通过项目线、创业线、数字线三大主线，全方位培养数字创业CEO
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-red-500"></div>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">主线一【项目线】</h3>
                  <p className="text-gray-600">火种节、加速营、项目路演等实战项目，让学生在真实项目中学习成长</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 火种节项目孵化</li>
                    <li>• 创业加速营</li>
                    <li>• 项目路演展示</li>
                    <li>• 投资对接服务</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-yellow-500"></div>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">主线二【创业线】</h3>
                  <p className="text-gray-600">创业导论、创业机会、创业团队等系统性创业知识体系</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 创业基础理论</li>
                    <li>• 商业机会识别</li>
                    <li>• 团队组建管理</li>
                    <li>• 商业模式设计</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">主线三【数字线】</h3>
                  <p className="text-gray-600">数创导论、产品设计、产品运营等数字化创业核心技能</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 数字化转型理论</li>
                    <li>• 产品设计思维</li>
                    <li>• 数字化运营</li>
                    <li>• 技术创新应用</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">创始人介绍</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">殷建松</h2>
                <p className="text-xl text-gray-600">校园VC创始合伙人 · 著名企业家</p>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  著名企业家、社会知名人士，同时担任清华x-lab兼职顾问、清华iCenter创客导师、北京大学研究生院投资导师、教育部"互联网+"创新创业大赛评委等。
                </p>
                <p>畅销书《创业的乐趣》和《从零到英雄》作者，曾任微软Windows产品经理和IDG战略咨询公司In-Stat总经理。</p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900">教育背景</div>
                  <div className="text-gray-600">1997年MBA毕业于荷兰马斯特里赫特管理学院</div>
                  <div className="text-gray-600">1993年本科毕业于对外经济贸易大学</div>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900">职业经历</div>
                  <div className="text-gray-600">微软Windows产品经理</div>
                  <div className="text-gray-600">IDG战略咨询总经理</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl transform -rotate-6 opacity-20"></div>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=500&width=400"
                  alt="殷建松"
                  className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-sm font-semibold text-gray-900">《从零到英雄》</div>
                  <div className="text-xs text-gray-600">校园VC在清华大学x-lab的创业营教材</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">核心团队</h2>
            <p className="text-xl text-gray-600">助力每一个梦想落地的行业专家</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "项方伟",
                role: "加速营合伙人",
                description: "种子投资孵化专家；系列创业者，现长居浙江；全职从事高科技创业项目的种子投资和孵化",
                color: "from-pink-500 to-red-500",
              },
              {
                name: "陶锋",
                role: "创业教育合伙人",
                description: "清华MBA校友、清华x-lab三创教育席教练，超10年互联网经验，五年多的企业管理经验",
                color: "from-orange-500 to-yellow-500",
              },
              {
                name: "张正明",
                role: "创新教育合伙人",
                description: "南开大学创业研究中心成员，拥有超过20年的世界500强与全球企业产品管理经验",
                color: "from-cyan-500 to-blue-500",
              },
              {
                name: "郑羽轩",
                role: "社创投资合伙人",
                description: "校园VC社群负责人，校园文化学者、高校文化资源整合理念提出者",
                color: "from-purple-500 to-pink-500",
              },
            ].map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="relative">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${member.color} rounded-full mx-auto flex items-center justify-center`}
                    >
                      <Users className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-gray-600 font-medium">{member.role}</p>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Wall Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">精彩瞬间</h2>
            <p className="text-xl text-gray-600">记录每一个创业路上的重要时刻</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="relative aspect-square group cursor-pointer">
                <img
                  src={`/placeholder.svg?height=300&width=300&text=Photo${index + 1}`}
                  alt={`活动照片 ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end">
                  <div className="p-4 text-white">
                    <p className="text-sm font-medium">创业活动现场</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">学员反馈</h2>
            <p className="text-xl text-gray-600">收获远远不只于课堂</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "李明",
                role: "清华大学 · 计算机系",
                content:
                  "在校园VC的学习让我从一个技术宅变成了真正的创业者，不仅学会了技术，更重要的是学会了如何把技术变成产品。",
                rating: 5,
              },
              {
                name: "王小雨",
                role: "北京大学 · 经济学院",
                content: "三主线的课程体系非常完整，从项目实战到理论学习，再到数字化技能，让我全方位提升了创业能力。",
                rating: 5,
              },
              {
                name: "张伟",
                role: "复旦大学 · 管理学院",
                content:
                  "殷老师和团队的指导非常专业，不仅帮我完善了商业计划，还帮我对接了投资人，现在我的项目已经拿到了天使轮融资。",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="relative group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <Quote className="h-8 w-8 text-pink-500 opacity-50" />
                    <p className="text-gray-700 leading-relaxed">"{testimonial.content}"</p>
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="pt-4 border-t border-gray-100">
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8 text-white">
            <h2 className="text-3xl md:text-5xl font-bold">准备好开始你的创业之旅了吗？</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              加入校园VC，与100万大学生一起，在数字创业的道路上从零到英雄！
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-4">
                立即报名
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 bg-transparent"
              >
                咨询详情
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></div>
                <span className="text-xl font-bold">校园VC</span>
              </div>
              <p className="text-gray-400">10年推动100万大学生创业，数字创业孵化云平台</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">产品服务</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    校园VC导航板
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    创业教育智慧系统
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Web3师徒导师
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">课程体系</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    数创精英班
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    项目孵化
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    创业加速营
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">联系我们</h3>
              <ul className="space-y-2 text-gray-400">
                <li>官网：xiaoyuanvc.com</li>
                <li>邮箱：contact@xiaoyuanvc.com</li>
                <li>微信：校园VC官方</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 校园VC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
