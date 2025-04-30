"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-background py-16 md:py-24 relative overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full -z-10" />

      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            About Me
          </motion.h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-12">
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative h-[350px] w-[300px] overflow-hidden rounded-xl shadow-xl gradient-border">
                <Image
                  src="/profile-img.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold">Who I Am</h3>
              <p className="mt-4 text-muted-foreground">
                웹 퍼블리싱 기반을 다진 프론트엔드 개발자 입니다 다양한
                프로젝트에서 기획 단계부터 디자인, 개발, 유지보수까지 전 주기에
                걸쳐 참여하며 실질적인 사용성과 품질을 고려한 개발을
                경험했습니다. UI 컴포넌트의 모듈화와 재사용성 중심의 구조 설계 ,
                Git 기반의 버전 관리 및 코드 리뷰, 지속적인 리팩토링과 사용자
                피드백 반영까지 책임감 있게 수행해왔습니다.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <Card className="border-primary/30">
                  <CardContent className="flex flex-col items-center p-4">
                    <span className="text-3xl font-bold text-primary">4+</span>
                    <span className="text-sm text-muted-foreground">
                      Years Experience
                    </span>
                  </CardContent>
                </Card>

                <Card className="border-primary/30">
                  <CardContent className="flex flex-col items-center p-4">
                    <span className="text-3xl font-bold text-primary">8+</span>
                    <span className="text-sm text-muted-foreground">
                      Projects Completed
                    </span>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-6">
                {[
                  {
                    icon: <Github className="h-20 w-20" />,
                    href: "https://github.com/beom-jun-kim",
                    label: "GitHub",
                  },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full inline-block text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Button className="px-6 py-5 rounded-full gradient-bg text-white hover:shadow-lg hover:shadow-primary/20 transition-all">
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </Button>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
