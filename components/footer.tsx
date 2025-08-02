"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Linkedin, Instagram, Mail, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Architectural Design", href: "/services" },
    { name: "Interior Design", href: "/services" },
    { name: "Smart Buildings", href: "/services" },
    { name: "Sustainability", href: "/services" },
  ],
  social: [
    // { name: "GitHub", href: "https://github.com", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/bnhaus", icon: Linkedin },
    { name: "Instagram", href: "https://www.instagram.com/bn.haus/", icon: Instagram },
    { name: "Email", href:"mailto:bnhaus.co@gmail.com", icon: Mail },
  ],
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-muted/20 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              {/* <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="w-8 h-8 rounded-lg flex items-center justify-center"
              > */}
                <div className="w-8 h-8 border-2 flex items-center justify-center">
              <span className="text-black font-bold text-lg">BN</span>
            </div>
            
              {/* </motion.div> */}
              <span className="gradient-text">haus</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Innovative architectural design studio specializing in modern, sustainable, and technologically advanced
              building solutions for the future.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((item) => {
                const Icon = item.icon
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="glass-effect rounded-lg p-2 hover:border-blue-400/50 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold mb-4 font-mono">COMPANY</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-bold mb-4 font-mono">SERVICES</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">© 2025 BN haus. All rights reserved.</p>

          <div className="flex items-center space-x-4">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <Button variant="ghost" size="icon" onClick={scrollToTop} className="ml-4">
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
