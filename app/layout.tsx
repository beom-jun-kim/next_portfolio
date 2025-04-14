import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Welcome to My Portfolio",
  description: "프론트엔드 포트폴리오",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* suppressHydrationWarning prevents errors from browser extensions */}
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}

