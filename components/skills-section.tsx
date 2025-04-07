"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Braces, FileCode2, Code2, Database, GitBranch, Trello } from "lucide-react"
import Nextjs from "@/public/icons/nextjs.svg"
import Vuejs from "@/public/icons/vuejs.svg"
import Typescript from "@/public/icons/typescript.svg"
import Jquery from "@/public/icons/jquery.svg"
import Jira from "@/public/icons/jira.svg"
import Confluence from "@/public/icons/confluence.svg"

export default function SkillsSection() {
  const skills = [
    {
      icon: <img src={Nextjs.src} alt="Next.js" className="h-14 w-20" />,
      name: "Next.js",
      level: 75,
      description: "서버사이드 렌더링 React 애플리케이션 개발",
    },
    {
      icon: <img src={Vuejs.src} alt="Vuejs.js" className="h-14 w-20" />,
      name: "Vue.js",
      level: 85,
      description: "양방향 데이터 바인딩으로 동적 UI 구현",
    },
    {
      icon: <img src={Typescript.src} alt="Typescript" className="h-14 w-20" />,
      name: "TypeScript",
      level: 75,
      description: "TypeScript를 사용한 타입 안전 JavaScript 개발",
    },
    {
      icon: <img src={Jquery.src} alt="Jquery" className="h-14 w-20" />,
      name: "jQuery",
      level: 85,
      description: "jQuery를 활용한 DOM 조작 및 이벤트 처리",
    },
    {
      icon: <img src={Jira.src} alt="Jira" className="h-14 w-20" />,
      name: "Jira",
      level: 70,
      description: "Jira를 통한 프로젝트 관리 및 이슈 추적",
    },
    {
      icon: <img src={Confluence.src} alt="Confluence" className="h-14 w-20" />,
      name: "Confluence",
      level: 70,
      description: "Confluence를 활용한 문서 작성 및 지식 공유",
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
            className="break-keep mx-auto mt-4 max-w-[700px] text-center text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            스택과 도구들을 활용하여 프로젝트 이슈를<br/>관리하고 뛰어난 사용자 경험을 구현합니다.
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
                <Card className="overflow-hidden border-primary/10 border-primary/30">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="rounded-full p-3">{skill.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{skill.name}</h3>
                        <p className="text-sm break-keep text-muted-foreground">{skill.description}</p>
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

