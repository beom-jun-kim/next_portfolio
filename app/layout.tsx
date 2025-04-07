import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "My App",
  description: "Created with Next.js",
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

