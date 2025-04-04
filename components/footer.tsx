"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-background py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <motion.div
            className="flex flex-col items-center gap-4 md:items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Link href="/" className="text-xl font-bold tracking-tighter gradient-text transition-colors">
              Portfolio
            </Link>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {[
              { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com", label: "Twitter" },
              { icon: <Github className="h-5 w-5" />, href: "https://github.com", label: "GitHub" },
              { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com", label: "LinkedIn" },
            ].map((item, index) => (
              <motion.div key={index} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  {item.icon}
                  <span className="sr-only">{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

