import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-cyan-50 flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-gray-900">
            页面未找到
          </h2>
          <p className="text-gray-600">
            抱歉，您访问的页面不存在。
          </p>
        </div>
        <Link href="/">
          <Button className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600">
            返回首页
          </Button>
        </Link>
      </div>
    </div>
  )
}