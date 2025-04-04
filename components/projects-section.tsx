"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online shopping platform with payment integration.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "React", "Tailwind CSS"],
      link: "#",
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media performance tracking.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Chart.js", "Firebase"],
      link: "#",
    },
    {
      id: 3,
      title: "Mobile Fitness App",
      description: "Cross-platform mobile application for fitness tracking.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React Native", "TypeScript", "Redux"],
      link: "#",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="bg-secondary/30 py-16 md:py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-full -z-10" />

      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">My Projects</h2>
              <p className="mt-4 max-w-[600px] text-muted-foreground">
                A showcase of my recent work, featuring web applications, mobile apps, and design projects.
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
                View All Projects
              </Button>
            </motion.div>
          </div>
          <motion.div
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={item}>
                <Card className="overflow-hidden transition-all hover:shadow-lg border-primary/10 hover:border-primary/30">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="mt-2 text-muted-foreground">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button variant="ghost" className="ml-auto gap-1 p-0 text-primary hover:text-primary/80" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project <ArrowUpRight className="h-4 w-4" />
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

