"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Braces, FileCode2, Code2, Database, GitBranch, Trello } from "lucide-react"

export default function SkillsSection() {
  const skills = [
    {
      icon: <FileCode2 className="h-10 w-10 text-primary" />,
      name: "Vue.js",
      level: 90,
      description: "Building interactive user interfaces with Vue.js framework",
    },
    {
      icon: <Braces className="h-10 w-10 text-primary" />,
      name: "Next.js",
      level: 85,
      description: "Creating server-side rendered React applications",
    },
    {
      icon: <Code2 className="h-10 w-10 text-primary" />,
      name: "jQuery",
      level: 95,
      description: "DOM manipulation and event handling with jQuery",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      name: "TypeScript",
      level: 80,
      description: "Type-safe JavaScript development with TypeScript",
    },
    {
      icon: <Trello className="h-10 w-10 text-primary" />,
      name: "Jira",
      level: 85,
      description: "Project management and issue tracking with Jira",
    },
    {
      icon: <GitBranch className="h-10 w-10 text-primary" />,
      name: "Confluence",
      level: 75,
      description: "Documentation and knowledge sharing with Confluence",
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
    <section id="skills" className="bg-background py-16 md:py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-0 w-32 h-32 bg-primary/5 rounded-full -z-10" />
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-primary/5 rounded-full -z-10" />

      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            My Skills
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-[700px] text-center text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Technologies and tools I've mastered to create exceptional digital experiences.
          </motion.p>
          <motion.div
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div key={index} variants={item}>
                <Card className="overflow-hidden border-primary/10 hover:border-primary/30 hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-3">{skill.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold">{skill.name}</h3>
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                      </div>
                    </div>
                    <div className="mt-4 w-full h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-violet-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                    <div className="mt-1 text-right text-xs text-muted-foreground">{skill.level}%</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

