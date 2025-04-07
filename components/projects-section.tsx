"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Market Soo",
      description: "수산물 판매 · 경매 사이트",
      image: "/placeholder.svg?height=400&width=600",
      tags: [
        "Frontend",
        "Next.js",
        "typescript",
        "AWS S3",
        "react-data-grid",
        "next-intl",
        "zod",
      ],
      link: "https://soolab.co.kr/",
      features: [
        "실시간 경매 시스템 (등록, 참여, 낙찰, 취소)",
        "다국어 지원",
        "상품 검색 · 검색 삭제 (검색어, 원산지, 카테고리)",
        "상품 등록",
        "업체 · 카테고리 즐겨찾기",
        "반응형 UI",
        "인피니트 스크롤",
        "관리자",
      ],
      duration: "2024.11 - 2024.12",
      contribution: "60%",
      screenshots: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: 2,
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
      features: [
        "멘토링 시스템 (신청, 수락, 멘토링, 일지, 후기)",
        "BM 설계",
        "폼 검증 · 저장",
        "BM 설계 목록 조회",
      ],
      duration: "2024.02 - 2024.04",
      contribution: "70%",
      screenshots: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: 3,
      title: "G-CON",
      description: "IOT기반 스마트 신발 적용 사회적 약자 지원 서비스",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Frontend", "React Native", "Vue.js"],
      link: "https://www.smartshoes.kr/",
      features: [
        "위치 추적",
        "알림 시스템",
        "보행패턴 분석 리포트",
        "가까운 지콘 찾기",
        "내 정보 조회 · 수정 ",
        "신발 배터리 관리",
        "QR 생성",
        "친구추가",
      ],
      duration: "2024.06 - 2024.08",
      contribution: "90%",
      screenshots: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: 4,
      title: "관제 서비스",
      description: "사회적 약자 실종 및 배회감지를 위한 관제 서비스",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Frontend", "Vue.js", "Vuetify"],
      link: "https://www.shoeshub.kr/",
      features: [
        "인상착의로 찾기 (CCTV선택, 지역, 성별, 연령대, 옷 색상 등)",
        "이미지로 찾기",
        "GPS기반 대상자 수색 기능 (배회 상태 지도 마커 표시, 경로 라인 및 주거지 반경표시)",
        "보호관찰자 관리 메뉴",
        "모니터링",
        "신고 기능 (신고, 수색, 신고 로그, 이미지 선택, 결과화면)",
        "관리자 관리",
      ],
      duration: "2024.10 - 2024.12",
      contribution: "100%",
      screenshots: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: 5,
      title: "스마트 신발 관리자",
      description: "G-CON 및 관제 서비스 통합 관리자",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Frontend", "Vue.js", "Vuetify"],
      link: "#",
      features: [
        "AI라벨링",
        "지콘 관리 (컨테이너, 회원, CCTV, 신발, 검지매트)",
        "관리자 관리 (권한, 메뉴 관리)",
        "고객정책관리",
        "공통 선택 박스 관리",
      ],
      duration: "2024.08 - 2024.09",
      contribution: "100%",
      screenshots: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: 6,
      title: "Nawriter",
      description: "AI 기사 자동 생성 프로그램",
      image: "/placeholder.svg?height=400&width=600",
      tags: [
        "Frontend",
        "Next.js",
        "typescript",
        "react-cookie",
        "react-i18next",
      ],
      link: "http://www.nawriter.co.kr/",
      features: [
        "AI 기사 생성",
        "첨부자료 찾기",
        "요약하기",
        "MyNews",
        "관리자",
        "다국어 지원",
      ],
      duration: "2024.05 - 2020.06",
      contribution: "30%",
      screenshots: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: 7,
      title: "mcnsports",
      description: "자전거 의류 쇼핑몰",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["publishing", "html", "CSS", "JavaScript", "jQuery"],
      link: "https://mcnsports.co.kr/",
      features: [
        "전체 페이지 리뉴얼",
        "모바일 지원 (적응형)",
        "크로스브라우징",
        "팝업 기능",
      ],
      duration: "2021.07 - 2021.09",
      contribution: "100%",
      screenshots: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: 8,
      title: "mcnfit",
      description: "남성 스포츠 의류 쇼핑몰",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["publishing", "html", "CSS", "JavaScript", "jQuery"],
      link: "https://mcnfit.co.kr/",
      features: [
        "전체 페이지 리뉴얼",
        "모바일 지원 (적응형)",
        "크로스브라우징",
      ],
      duration: "2021.10 - 2020.12",
      contribution: "100%",
      screenshots: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const cardsPerPage = isMobile ? 1 : 3;

  // Function to handle next button click - move 3 cards at a time (or 1 on mobile)
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + cardsPerPage) % projects.length;
      return nextIndex;
    });
  };

  // Function to handle previous button click - move 3 cards at a time (or 1 on mobile)
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        (prevIndex - cardsPerPage + projects.length) % projects.length;
      return newIndex;
    });
  };

  // Create a circular array of projects for smooth infinite navigation
  const getVisibleProjects = () => {
    const result = [];
    for (let i = 0; i < cardsPerPage; i++) {
      const index = (currentIndex + i) % projects.length;
      result.push(projects[index]);
    }
    return result;
  };

  // Open project modal
  const openProjectModal = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
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
                웹/앱 프로젝트 작업 모음입니다.
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
              <div className="flex justify-center min-h-[450px]">
                <AnimatePresence mode="wait">
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
                        <Card
                          className="h-full overflow-hidden transition-all hover:shadow-lg border-primary/10 hover:border-primary/30 cursor-pointer"
                          onClick={() => openProjectModal(project)}
                        >
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
                        </Card>
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
            {Array.from({
              length: Math.ceil(projects.length / cardsPerPage),
            }).map((_, index) => {
              const pageStartIndex = index * cardsPerPage;
              return (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all ${
                    currentIndex >= pageStartIndex &&
                    currentIndex < pageStartIndex + cardsPerPage
                      ? "bg-primary w-4"
                      : "bg-primary/30"
                  }`}
                  onClick={() => setCurrentIndex(pageStartIndex)}
                  aria-label={`Go to page ${index + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      >
        <DialogContent className="max-w-4xl pt-11 max-h-[90vh] overflow-y-auto">
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>

          {selectedProject && (
            <div className="space-y-6">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col md:flex-row items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold">
                    {selectedProject.title}
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    {selectedProject.description}
                  </p>
                </div>
                {selectedProject.link !== "#" && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="rounded-full border-primary/50 text-primary hover:bg-primary/10 hover:text-primary"
                    >
                      View Site
                    </Button>
                  </a>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">추가한 기능</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">작업 기간</h3>
                    <p>{selectedProject.duration}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">참여도</h3>
                    <div className="w-full bg-secondary rounded-full h-2.5">
                      <div
                        className="bg-primary h-2.5 rounded-full"
                        style={{ width: selectedProject.contribution }}
                      ></div>
                    </div>
                    <p className="mt-1 text-sm text-right">
                      {selectedProject.contribution}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">기술 스택</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">스크린샷</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.screenshots.map((screenshot, index) => (
                    <div
                      key={index}
                      className="relative aspect-video rounded-lg overflow-hidden"
                    >
                      <Image
                        src={screenshot || "/placeholder.svg"}
                        alt={`${selectedProject.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
