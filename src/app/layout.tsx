import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '校园VC - 数字创业孵化云',
  description: '校园VC致力于10年推动100万大学生创业，提供数字创业孵化、投资孵化、人才培养等全方位服务',
  keywords: '校园VC,创业孵化,大学生创业,数字创业,投资孵化,人才培养',
  authors: [{ name: '校园VC' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
