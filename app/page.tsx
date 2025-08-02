"use client"

import { ArrowDown, Play, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

// Landscape images for slideshow
const landscapeImages = [
  "/images/arc1.jpg?height=800&width=1200&text=Urban+Skyline+Architecture+2",
  "/images/arc2.jpg?height=800&width=1200&text=Urban+Skyline+Architecture+2",
  "/images/arch3.jpg?height=800&width=1200&text=Urban+Skyline+Architecture+2",
  "/images/arch4.jpg?height=800&width=1200&text=Urban+Skyline+Architecture+2",
  "/images/arch5.jpg?height=800&width=1200&text=Urban+Skyline+Architecture+2",
  
]

// Sample projects data
const featuredProjects = [
  {
    id: 1,
    title: "360 Lifestyle",
    category: "Commercial",
    year: "2025",
    location: "F8 Markaz, Islamabad",
    image: "/images/gym/P2.png?height=600&width=800",
    description: "A futuristic commercial complex that redefines urban architecture.",
  },
  {
    id: 2,
    title: "AAN Associates",
    category: "Commercial",
    year: "2024",
    location: "NSTP Nust Islamabad",
    image: "/images/aanAssociates/B-0009.png",
    description: "A luxury residence that seamlessly blends indoor and outdoor living.",
  },
  {
    id: 3,
    title: "Eric Reiner Residence",
    category: "Residential",
    year: "2024",
    location: "Sydney, Australia",
    image: "/images/erichouse/1_1 - Photo.jpg?height=600&width=800",
    description: "A research facility dedicated to sustainable technology development.",
  },
]

// Architect contact information
const architects = [
  {
    name: "Ar. Muhammad Bilavel Shamas",
    role: "Co-Founder & Lead Architect",
    email: "ar.bilavel@gmail.com",
    phone: "+923117064237",
    image: "/images/bilawel.jpg",
  },
  {
    name: "Ar. Nosherwan Ahmed Qureshi",
    role: "Co-Founder & Senior Architect",
    email: "q.nosherwan@gmail.com",
    phone: "+923015326156",
    image: "/images/nosherwan.jpg",
  },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Landscape slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % landscapeImages.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* Landscape Slideshow Background */}
      <div className="fixed inset-0 z-0">
        {landscapeImages.map((image, index) => (
          <div
            key={index}
            className={`landscape-slide ${index === currentSlide ? "active" : "" }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6">
                <span className="text-white">BN haus</span>
                <br />
                {/* <span className="text-black">ARCHITECT</span> */}
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
                Designing the future of architecture through innovative, sustainable, and technologically advanced
                solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                asChild
                size="lg"
                className="bg-background text-black border-1 border-black hover:bg-white transition-colors"
              >
                <Link href="/work">
                  <Play className="w-4 h-4 mr-2" />
                  View Our Work
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-1 border-black bg-background text-black hover:bg-white transition-colors"
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>

            <div className="flex justify-center">
              <ArrowDown className="w-6 h-6 text-gray-600 animate-bounce" />
            </div>
          </div>
        </section>

        {/* Innovation Meets Design Section */}
        <section className="py-20 px-4 bg-white/90">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">INNOVATION</span> MEETS DESIGN
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                We blend cutting-edge technology with timeless architectural principles to create spaces that inspire
                and endure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Sustainable Design",
                  description: "Eco-friendly solutions that minimize environmental impact while maximizing efficiency.",
                  // icon: "🌱",
                },
                {
                  title: "Smart Integration",
                  description: "IoT and AI-powered systems that make buildings more intelligent and responsive.",
                  // icon: "🤖",
                },
                {
                  title: "Future-Ready",
                  description: "Designs that adapt and evolve with changing needs and technologies.",
                  // icon: "🚀",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="glass-effect rounded-lg p-8 text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  {/* <div className="text-4xl mb-4">{feature.icon}</div> */}
                  <h3 className="text-xl font-bold mb-4 text-black group-hover:gradient-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-20 px-4 bg-background/90">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                FEATURED <span className="gradient-text">PROJECTS</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Explore some of our most innovative architectural projects that showcase our commitment to excellence
                and forward-thinking design.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="glass-effect rounded-lg overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm">{project.description}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-black bg-background px-2 py-1 rounded border">
                        {project.category}
                      </span>
                      <span className="text-xs text-gray-600">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-black group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-700 flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {project.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-background text-black border-1 border-black hover:bg-white transition-colors"
              >
                <Link href="/work">
                  <Play className="w-4 h-4 mr-2" />
                  View all projects
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Meet Our Architects Section */}
        <section className="py-20 px-4 bg-white/90">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                MEET OUR <span className="gradient-text">ARCHITECTS</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Connect directly with our expert architects to discuss your project and bring your vision to life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {architects.map((architect, index) => (
                <div
                  key={index}
                  className="glass-effect rounded-lg p-6 text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative mb-6">
                    <Image
                      src={architect.image || "/placeholder.svg"}
                      alt={architect.name}
                      width={200}
                      height={200}
                      className="rounded-full mx-auto w-32 h-32 object-cover border-4 border-gray-300"
                    />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-black group-hover:gradient-text transition-all duration-300">
                    {architect.name}
                  </h3>
                  <p className="text-gray-700 mb-4 font-bold text-sm">{architect.role}</p>

                  <div className="space-y-3">
                    <a
                      href={`mailto:${architect.email}`}
                      className="flex items-center justify-center space-x-2 text-sm text-gray-700 hover:text-black transition-colors duration-200 hover:scale-105"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{architect.email}</span>
                    </a>

                    <a
                      href={`tel:${architect.phone}`}
                      className="flex items-center justify-center space-x-2 text-sm text-gray-700 hover:text-black transition-colors duration-200 hover:scale-105"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{architect.phone}</span>
                    </a>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-300">
                    <div className="flex justify-center space-x-2">
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="bg-gray-200 border-none text-black hover:bg-slate-300 transition-colors"
                      >
                        <a href={`mailto:${architect.email}`}>
                          <Mail className="w-3 h-3 mr-1" />
                          Email
                        </a>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="bg-gray-200 border-none text-black hover:bg-slate-300 transition-colors"
                      >
                        <a href={`tel:${architect.phone}`}>
                          <Phone className="w-3 h-3 mr-1" />
                          Call
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
