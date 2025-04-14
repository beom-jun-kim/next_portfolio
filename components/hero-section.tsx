"use client";

import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-secondary/30 pt-16">
      <div className="container flex flex-col items-center justify-center px-4 text-center md:px-6">
        <motion.h1
          className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="gradient-text">안녕하세요</span>
          <br />
          <motion.span
            className="mt-2 block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            I'm a Developer
          </motion.span>
        </motion.h1>
        <motion.p
          className="mt-4 max-w-[700px] text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          프론트엔드 개발자로서 사용자 친화적인 인터페이스를 설계하고 구현하는데 열정을 가지고 있습니다.
          문제 해결 능력을 바탕으로 웹 애플리케이션의 성능과 접근성을 최적화합니다.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Button
            onClick={scrollToAbout}
            size="lg"
            className="rounded-full gradient-bg text-white hover:shadow-lg hover:shadow-primary/20 transition-all"
          >
            확인하기
          </Button>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-8 -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="h-8 w-8 text-primary" />
      </motion.div>

      {/* Background decorative elements */}
      <motion.div
        className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/5"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 8,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 10,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </section>
  );
}
