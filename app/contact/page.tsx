"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    const data = await res.json()

    if (!res.ok) {
      toast({
        title: "Error",
        description: data.error || "Failed to send message.",
        variant: "destructive",
      })
    } else {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      })
      setFormData({ name: "", email: "", message: "" })
    }
  } catch {
    toast({
      title: "Error",
      description: "Something went wrong. Please try again.",
      variant: "destructive",
    })
  } finally {
    setIsSubmitting(false)
  }
}


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "bnhaus.co@gmail.com",
      // link: "bnhaus.co@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+92 311 7064237",
      // link: "+92 311 7064237",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      details: "Islamabad, Pakistan",
      // link: "https://maps.google.com",
    },
  ]

  const socialLinks = [
    // {
    //   icon: <Github className="w-5 h-5" />,
    //   name: "GitHub",
    //   url: "https://github.com",
    //   color: "hover:text-gray-400",
    // },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/bnhaus",
      color: "hover:text-blue-400",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      url: "https://www.instagram.com/bn.haus/",
      color: "hover:text-pink-400",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-mono">
              GET IN <span className="gradient-text">TOUCH</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your next architectural project? We would love to hear from you and discuss how we can bring
              your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass-effect rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6 font-mono">
                  SEND US A <span className="gradient-text">MESSAGE</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background/50 border-muted-foreground/20 focus:border-blue-400"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background/50 border-muted-foreground/20 focus:border-blue-400"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="bg-background/50 border-muted-foreground/20 focus:border-blue-400 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gray-200 text-gray-800 hover:bg-gray-500 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6 font-mono">
                  CONTACT <span className="gradient-text">INFO</span>
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      // href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="glass-effect rounded-lg p-6 block group hover:border-gray-500 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="text-gray-800 hover:bg-gray-400 transition-colors duration-300">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-bold mb-1 group-hover:gradient-text transition-all duration-300">
                            {info.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">{info.details}</p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold mb-4 font-mono">
                  FOLLOW <span className="gradient-text">US</span>
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`glass-effect rounded-lg p-3 ${social.color} transition-all duration-300 hover:border-gray-400`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div className="glass-effect rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 font-mono">
                  OFFICE <span className="gradient-text">HOURS</span>
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span className="text-muted-foreground">9:00 AM - 10:00 PM</span>
                  </div>
                  {/* <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-muted-foreground">10:00 AM - 4:00 PM</span>
                  </div> */}
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
