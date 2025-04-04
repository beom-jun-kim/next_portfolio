"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

export default function ContactSection() {
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
    <section id="contact" className="bg-background py-16 md:py-24 relative overflow-hidden">
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
            Get In Touch
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-[700px] text-center text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Have a project in mind or want to collaborate? Feel free to reach out to me.
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
                contact: "contact@example.com",
                href: "mailto:contact@example.com",
              },
              {
                icon: <Phone className="h-6 w-6 text-primary" />,
                title: "Phone",
                description: "Available for calls during business hours.",
                contact: "+1 (234) 567-890",
                href: "tel:+1234567890",
              },
              {
                icon: <MapPin className="h-6 w-6 text-primary" />,
                title: "Location",
                description: "Based in Seoul, South Korea.",
                contact: "Available for remote work",
                href: null,
              },
            ].map((item, index) => (
              <motion.div key={index} variants={item}>
                <Card className="border-primary/10 hover:border-primary/30 hover:shadow-md transition-all">
                  <CardContent className="flex flex-col items-center p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      {item.icon}
                    </div>
                    <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-center text-muted-foreground">{item.description}</p>
                    {item.href ? (
                      <a href={item.href} className="mt-4 text-primary hover:underline">
                        {item.contact}
                      </a>
                    ) : (
                      <span className="mt-4 text-primary">{item.contact}</span>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}

