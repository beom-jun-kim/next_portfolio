"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Building2, Calendar } from "lucide-react";

export default function CareerSection() {
  const careers = [
    {
      period: "2024.02 - 현재",
      position: "Frontend Developer",
      company: "Merakl",
      description: [
        "BM 설계 및 멘토링 시스템 플랫폼 구축 (울산 청년 창업 사관학교 채택)",
        "사회적 취약계층 웹/앱 개발 (협력기관 : 사상경찰서, 사상소방서, 부산보훈병원 등)",
        "관제 시스템 구축 및 고도화 (AI 기반 인원 수색 기능 및 위험 상황 감지 기능)",
        "수산물 상품 판매 및 경매 시스템 개발",
      ],
      technologies: [
        "Vue.js",
        "Next.js",
        "React Native",
        "TypeScript",
        "Tailwind CSS",
        "AWS S3",
        "mongoDB",
        "MySQL",
      ],
    },
    {
      period: "2021.07 - 2023.10",
      position: "Publisher",
      company: "MCN",
      description: ["3개의 자사 플랫폼 전체 리뉴얼", "총 5개 플랫폼 관리"],
      technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="career" className="bg-muted/30 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
              Career
            </h2>
            <p className="mt-4 max-w-[600px] text-muted-foreground">
              짧은 시간 내 다양한 프로젝트를 통해
              <br />
              밀도 있는 실무 경험과 개발 역량을 갖추었습니다.
            </p>
          </motion.div>

          <motion.div
            className="mt-12 space-y-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {careers.map((career, index) => (
              <motion.div key={index} variants={item}>
                <Card className="overflow-hidden border-muted hover:border-muted/80 hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex items-center gap-2 text-sm mt-1 text-muted-foreground md:mb-0">
                        <Calendar className="h-4 w-4" />
                        <span>{career.period}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                          <h3 className="text-xl font-bold">
                            {career.position}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Building2 className="h-4 w-4" />
                            <span>{career.company}</span>
                          </div>
                        </div>
                        <ul className="space-y-2 mb-4">
                          {career.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Briefcase className="h-5 w-5 mt-0.5 flex-shrink-0 text-muted-foreground" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {career.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="rounded-full"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Timeline connector */}
          <div className="hidden md:block relative h-full">
            <div className="absolute left-[7.5rem] top-0 bottom-0 w-0.5 bg-muted-foreground/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
