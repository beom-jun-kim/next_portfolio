"use client";

import { Mail, MapPin, Phone } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function ContactSection() {
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
      id="contact"
      className="bg-background py-16 md:py-24 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-primary/5 to-transparent -z-10" />

      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Contact
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-[700px] text-center text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            프로젝트를 염두에 두고 있거나 협력하고 싶으신가요? 언제든지 저에게
            연락해 주세요.
          </motion.p>
          <motion.div
            className="mt-12 grid gap-8 md:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Mail className="h-6 w-6 text-primary" />,
                title: "Email",
                description: "Feel free to email me for any inquiries.",
                contact: "gimb52043@gmail.com",
                href: "mailto:gimb52043@gmail.com",
              },
              {
                icon: <Phone className="h-6 w-6 text-primary" />,
                title: "Phone",
                description: "Feel free to call me for any inquiries.",
                contact: "010-3395-2934",
                href: "tel:010-3395-2934",
              },
              {
                icon: <MapPin className="h-6 w-6 text-primary" />,
                title: "Location",
                description: "Based in Busan, South Korea.",
                contact: "부산 수영구 연수로392번가길 36",
                href: "https://map.naver.com/p/entry/place/1529345262?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=129.1116318&lat=35.1660606",
              },
            ].map((contactItem, index) => (
              <motion.div key={index} variants={item}>
                <a href={contactItem.href} className="mt-4 text-primary">
                  <Card className="border-primary/10 hover:border-primary/30 hover:shadow-md transition-all">
                    <CardContent className="flex flex-col items-center p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        {contactItem.icon}
                      </div>
                      <h3 className="mt-4 text-xl font-bold">
                        {contactItem.title}
                      </h3>
                      <p className="mt-2 text-center text-muted-foreground">
                        {contactItem.description}
                      </p>

                      <span className="mt-4 text-primary">
                        {contactItem.contact}
                      </span>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </motion.div>
          {/* <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Card className="border-primary/10 shadow-md">
              <CardContent className="p-6">
                <form className="grid gap-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="border-primary/20 focus-visible:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="border-primary/20 focus-visible:ring-primary"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Subject of your message"
                      className="border-primary/20 focus-visible:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      className="min-h-[150px] border-primary/20 focus-visible:ring-primary"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto gradient-bg text-white hover:shadow-lg hover:shadow-primary/20 transition-all"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
