"use client";

import Image from "next/image";
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
              <p className="break-keep mt-4 text-muted-foreground">
                웹 퍼블리싱 기반을 다진 프론트엔드 개발자 입니다 프로젝트의
                기획부터 유지보수 단계까지 다수 참여한 이력이 있습니다 현재
                정보처리기사 필기 합격, 실기 준비중입니다
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="border-primary/20 shadow-sm hover:shadow-md transition-all">
                    <CardContent className="flex flex-col items-center p-4">
                      <span className="text-3xl font-bold text-primary">
                        5+
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Years Experience
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="border-primary/20 shadow-sm hover:shadow-md transition-all">
                    <CardContent className="flex flex-col items-center p-4">
                      <span className="text-3xl font-bold text-primary">
                        50+
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Projects Completed
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
              <div className="mt-6">
                <Button className="rounded-full gradient-bg text-white hover:shadow-lg hover:shadow-primary/20 transition-all">
                  Download Resume
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
