"use client";

import { ArrowUpRight, Calendar } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NewsSection() {
  const newsItems = [
    {
      id: 1,
      title: "중진공, 울산 등 8개 지역에 청년창업사관학교 본격 운영",
      date: "2024.03.25",
      description:
        "청년창업사관학교 민간 운영사는 청년창업가의 창업교육·코칭, 사업화 지원 등 창업 전 과정을 일괄 지원한다. 울산은 메라클이 선정됐고...",
      link: "https://www.ksilbo.co.kr/news/articleView.html?idxno=995020",
    },
    {
      id: 2,
      title: "노인성 질환 예방 ‘지콘 스페이스’ 개소",
      date: "2024.11.26",
      description:
        "보행 분석으로 고령층의 건강 이상 신호를 조기에 발견해 노인성 질환 발병 예방을 돕는 ‘지콘 스페이스’가 부산 사상구에 문을 열었다...",
      link: "https://www.busan.com/view/busan/view.php?code=2024112618184651391",
    },
    {
      id: 3,
      title: "부산TP, 스마트 헬스케어로 시민 건강·안전 선도",
      date: "2024.11.27",
      description:
        "지난 26일 사상구 다누림센터에서 지콘스페이스 오픈식과 5개 협력기관의 상호협력 업무협약을 체결했다고 밝혔다...",
      link: "https://www.cnbnews.com/news/article.html?no=694882",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="news"
      className="bg-secondary/30 py-16 md:py-24 relative overflow-hidden"
    >
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                News
              </h2>
              <p className="mt-4 max-w-[600px] text-muted-foreground">
                참여한 프로젝트와 관련된 뉴스들 입니다.
              </p>
            </motion.div>
          </div>
          <motion.div
            className="mt-12 grid gap-6 sm:grid-cols-2"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {newsItems.map((newsItem) => (
              <motion.div key={newsItem.id} variants={item}>
                <a
                  href={newsItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card className="overflow-hidden transition-all border-primary/10 hover:border-primary/30">
                    <CardContent className="p-6 break-keep">
                      <div className="flex items-center gap-2 text-sm text-primary">
                        <Calendar className="h-4 w-4" />
                        <span>{newsItem.date}</span>
                      </div>
                      <h3 className="mt-2 text-xl font-bold">
                        {newsItem.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        {newsItem.description}
                      </p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0 ml-auto gap-1 text-primary">
                      Read More <ArrowUpRight className="h-4 w-4" />
                    </CardFooter>
                  </Card>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
