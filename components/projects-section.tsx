"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "사업계획서 완성 프로그램",
      description: "창업 멘토링 및 비즈니스 모델 설계 플랫폼",
      image: "/placeholder.svg?height=400&width=600",
      tags: [
        "Frontend",
        "Next.js",
        "tailwindcss",
        "react-hook-form",
        "recoil",
        "yup",
      ],
      link: "#",
    },
    {
      id: 2,
      title: "Market Soo",
      description: "수산물 판매 · 경매 사이트",
      image: "/placeholder.svg?height=400&width=600",
      tags: [
        "Frontend",
        "Next.js",
        "typescript",
        "react-simple-wysiwyg",
        "react-data-grid",
        "next-intl",
        "zod",
      ],
      link: "#",
    },
    {
      id: 3,
      title: "G-CON",
      description: "IOT기반 스마트 신발 적용 사회적 약자 지원 서비스",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Frontend", "React Native"],
      link: "#",
    },
    {
      id: 4,
      title: "관제 서비스",
      description: "사회적 약자 실종 및 배회감지를 위한 관제 서비스",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Frontend", "Vue.js", "Vuetify"],
      link: "#",
    },
    {
      id: 5,
      title: "스마트 신발 관리자",
      description: "G-CON 및 관제 서비스 통합 관리자",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Frontend", "Vue.js", "Vuetify"],
      link: "#",
    },
    {
      id: 6,
      title: "Nawriter",
      description: "ai 기사 자동 생성 프로그램",
      image: "/placeholder.svg?height=400&width=600",
      tags: [
        "Frontend",
        "Next.js",
        "typescript",
        "react-cookie",
        "react-i18next",
      ],
      link: "#",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Calculate how many cards to show based on viewport
  const [visibleCards, setVisibleCards] = useState(3);

  // Function to handle next button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      // Calculate the next index with wrapping
      const nextIndex = (prevIndex + 1) % projects.length;
      return nextIndex;
    });
  };

  // Function to handle previous button click
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      // Calculate the previous index with wrapping
      const newIndex = (prevIndex - 1 + projects.length) % projects.length;
      return newIndex;
    });
  };

  // Create a circular array of projects for smooth infinite navigation
  const getVisibleProjects = () => {
    const result = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (currentIndex + i) % projects.length;
      result.push(projects[index]);
    }
    return result;
  };

  return (
    <section
      id="projects"
      className="bg-secondary/30 py-16 md:py-24 relative overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-full -z-10" />

      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                My Projects
              </h2>
              <p className="mt-4 max-w-[600px] text-muted-foreground">
                A showcase of my recent work, featuring web applications, mobile
                apps, and design projects.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            ></motion.div>
          </div>

          {/* Carousel container with navigation buttons */}
          <div className="relative w-full">
            {/* Previous button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 hover:text-primary"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>

            {/* Carousel */}
            <div className="relative w-full overflow-hidden" ref={carouselRef}>
              <div className="flex justify-center">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    className="flex gap-6 justify-center flex-wrap md:flex-nowrap"
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                  >
                    {getVisibleProjects().map((project, index) => (
                      <motion.div
                        key={`${project.id}-${index}`}
                        className="w-full sm:w-[300px] md:w-[350px] flex-shrink-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Card className="h-full overflow-hidden transition-all hover:shadow-lg border-primary/10 hover:border-primary/30">
                            <div className="relative aspect-video overflow-hidden">
                              <Image
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform hover:scale-105"
                              />
                            </div>
                            <CardContent className="p-6">
                              <h3 className="text-xl font-bold">
                                {project.title}
                              </h3>
                              <p className="mt-2 text-muted-foreground">
                                {project.description}
                              </p>
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
                              <Button
                                variant="ghost"
                                className="ml-auto gap-1 p-0 text-primary hover:text-primary/80"
                                asChild
                              >
                                {/* <a href={project.link} target="_blank" rel="noopener noreferrer">
                                View Project <ArrowUpRight className="h-4 w-4" />
                              </a> */}
                              </Button>
                            </CardFooter>
                          </Card>
                        </a>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Next button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 hover:text-primary"
              onClick={handleNext}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>

          {/* Pagination indicators */}
          <div className="mt-6 flex justify-center gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-all ${
                  currentIndex === index ? "bg-primary w-4" : "bg-primary/30"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
