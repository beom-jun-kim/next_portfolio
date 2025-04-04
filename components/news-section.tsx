"use client"

import { ArrowUpRight, Calendar } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function NewsSection() {
  const newsItems = [
    {
      id: 1,
      title: "Launched New E-commerce Platform",
      date: "April 1, 2025",
      description: "Successfully delivered a comprehensive e-commerce solution for a major retail client.",
      link: "https://example.com/news/1",
    },
    {
      id: 2,
      title: "Speaking at Tech Conference 2025",
      date: "March 15, 2025",
      description: "Invited as a speaker to discuss modern web development practices at the annual tech conference.",
      link: "https://example.com/news/2",
    },
    {
      id: 3,
      title: "Open Source Contribution Milestone",
      date: "February 28, 2025",
      description: "Reached 500+ contributions to open source projects, helping improve developer tools worldwide.",
      link: "https://example.com/news/3",
    },
    {
      id: 4,
      title: "New Tutorial Series Released",
      date: "January 20, 2025",
      description: "Published a comprehensive tutorial series on building modern web applications with Next.js.",
      link: "https://example.com/news/4",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="news" className="bg-secondary/30 py-16 md:py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/6 bg-gradient-to-r from-primary/5 to-violet-500/5 rounded-b-full blur-3xl -z-10" />

      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">Latest News</h2>
              <p className="mt-4 max-w-[600px] text-muted-foreground">
                Stay updated with my latest activities, publications, and appearances.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Button
                variant="outline"
                className="rounded-full border-primary/50 text-primary hover:bg-primary/10 hover:text-primary"
              >
                View All News
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="mt-12 grid gap-6 sm:grid-cols-2"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {newsItems.map((item) => (
              <motion.div key={item.id} variants={item}>
                <Card className="overflow-hidden transition-all hover:shadow-md border-primary/10 hover:border-primary/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <Calendar className="h-4 w-4" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button variant="ghost" className="ml-auto gap-1 p-0 text-primary hover:text-primary/80" asChild>
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        Read More <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

