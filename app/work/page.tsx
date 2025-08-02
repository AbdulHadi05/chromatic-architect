
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X, ExternalLink, Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  location: string;
  image: string;
  description: string;
  details: string;
  features: string[];
  gallery: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "360 Lifestyle",
    category: "Commercial",
    year: "2025",
    location: "F8 Markaz, Islamabad",
    image: "/images/gym/P2.png?height=600&width=800",
    description: "A futuristic commercial complex that redefines urban architecture.",
    details:
      "This 50-story mixed-use development combines office spaces, retail areas, and public amenities in a striking vertical design. The building features a dynamic facade that responds to environmental conditions and incorporates advanced sustainability systems.",
    features: ["Smart Building Systems", "Renewable Energy", "Vertical Gardens", "Adaptive Facade"],
    gallery: [
      "/images/gym/P1.png?height=400&width=600",
      "/images/gym/P3.png?height=400&width=600",
      "/images/gym/P4.png?height=400&width=600",
      "/images/gym/P5.png?height=400&width=600",
      "/images/gym/P7.png?height=400&width=600",
      "/images/gym/P8.png?height=400&width=600",
      "/images/gym/P9.png?height=400&width=600",
      "/images/gym/P10.png?height=400&width=600",
      "/images/gym/P12.png?height=400&width=600",
      "/images/gym/P17.png?height=400&width=600",
      "/images/gym/P18.png?height=400&width=600",
    ],
  },
  {
    id: 2,
    title: "AAN Associates",
    category: "Commercial",
    year: "2024",
    location: "NSTP Nust Islamabad",
    image: "/images/aanAssociates/B-0014.png?height=600&width=800",
    description: "A luxury residence that seamlessly blends indoor and outdoor living.",
    details:
      "This contemporary home features flowing spaces, floor-to-ceiling windows, and integrated smart home technology. The design emphasizes natural light and creates a harmonious connection with the surrounding landscape.",
    features: ["Smart Home Integration", "Sustainable Materials", "Natural Lighting", "Landscape Integration"],
    gallery: [
      "/images/aanAssociates/B-0009.png",
      "/images/aanAssociates/B-0012.png",
      "/images/aanAssociates/B-0013.png",
    ],
  },
  {
    id: 3,
    title: "Eric Reiner Residence",
    category: "Residential",
    year: "2024",
    location: "Sydney, Australia",
    image: "/images/erichouse/1_1 - Photo.jpg?height=600&width=800",
    description: "A research facility dedicated to sustainable technology development.",
    details:
      "This carbon-neutral building serves as a living laboratory for sustainable technologies. It features innovative materials, energy systems, and design strategies that demonstrate the future of environmentally responsible architecture.",
    features: ["Carbon Neutral", "Living Laboratory", "Innovative Materials", "Research Facilities"],
    gallery: [
      "/images/erichouse/1_2 - Photo.jpg?height=400&width=600",
      "/images/erichouse/1_3 - Photo.jpg?height=400&width=600",
      "/images/erichouse/1_4 - Photo.jpg?height=400&width=600",
    ],
  },
  {
    id: 4,
    title: "Sethi House",
    category: "Residential",
    year: "2025",
    location: "Islamabad, Pakistan",
    image: "/images/sethihouse/R7.jpg?height=600&width=800",
    description: "A mixed-use development that brings nature into the urban environment.",
    details:
      "This innovative project combines residential, commercial, and recreational spaces with extensive green infrastructure. The design creates a vertical ecosystem that improves air quality and provides community gathering spaces.",
    features: ["Vertical Gardens", "Community Spaces", "Mixed-Use Design", "Green Infrastructure"],
    gallery: [
      "/images/sethihouse/R1.jpg?height=400&width=600",
      "/images/sethihouse/R2.jpg?height=400&width=600",
      "/images/sethihouse/R3.jpg?height=400&width=600",
      "/images/sethihouse/R4.jpg?height=400&width=600",
      "/images/sethihouse/R5.jpg?height=400&width=600",
      "/images/sethihouse/R6.jpg?height=400&width=600",
    ],
  },
  {
    id: 5,
    title: "Digital Arts Center",
    category: "Cultural",
    year: "2021",
    location: "Berlin, Germany",
    image: "/placeholder.svg?height=600&width=800",
    description: "A cultural center designed for digital art exhibitions and performances.",
    details:
      "This dynamic building features flexible exhibition spaces, state-of-the-art projection systems, and interactive installations. The architecture itself becomes part of the artistic experience through its responsive design elements.",
    features: ["Flexible Spaces", "Interactive Technology", "Projection Systems", "Responsive Design"],
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    id: 6,
    title: "Skyline Pavilion",
    category: "Commercial",
    year: "2021",
    location: "Dubai, UAE",
    image: "/placeholder.svg?height=600&width=800",
    description: "An iconic pavilion that serves as a gateway to the city's business district.",
    details:
      "This striking structure combines traditional Middle Eastern architectural elements with contemporary design principles. The pavilion features a dramatic canopy that provides shade while creating a memorable landmark.",
    features: ["Iconic Design", "Cultural Integration", "Climate Response", "Landmark Architecture"],
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
];

const categories = ["All", "Commercial", "Residential", "Institutional", "Mixed-Use", "Cultural"];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentGallerySlide, setCurrentGallerySlide] = useState(0);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Auto-slide effect for gallery slideshow
  useEffect(() => {
    if (selectedProject) {
      const interval = setInterval(() => {
        setCurrentGallerySlide((prev) =>
          (prev + 1) % selectedProject.gallery.length
        );
      }, 5000); // Change slide every 5 seconds
      return () => clearInterval(interval);
    }
  }, [selectedProject]);

  // Handle next/previous slide
  const nextSlide = () => {
    if (selectedProject) {
      setCurrentGallerySlide((prev) =>
        (prev + 1) % selectedProject.gallery.length
      );
    }
  };

  const prevSlide = () => {
    if (selectedProject) {
      setCurrentGallerySlide((prev) =>
        prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-century-gothic">
              OUR <span className="gradient-text">WORK</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of innovative architectural projects that
              push the boundaries of design and sustainability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-gray-200 text-gray-800 hover:bg-gray-400"
                    : "border-gray-300 text-gray-700 hover:border-gray-400/50 hover:bg-background-secondary/20"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden group cursor-pointer hover:border-gray-400/50 transition-all duration-300"
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentGallerySlide(0); // Reset slideshow to first image
                }}
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
                    <span className="text-xs font-mono text-gray-500 bg-background-secondary/20 px-2 py-1 rounded border border-gray-300">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-300 font-century-gothic">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {project.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Modal with Slideshow */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Slideshow */}
            <div className="relative">
              <div className="relative w-full h-64 md:h-80 overflow-hidden">
                {selectedProject.gallery.map((image, index) => (
                  <Image
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`${selectedProject.title} gallery ${index + 1}`}
                    width={800}
                    height={400}
                    className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentGallerySlide ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                onClick={prevSlide}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                onClick={nextSlide}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {selectedProject.gallery.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentGallerySlide ? "bg-white" : "bg-white/50"
                    }`}
                    onClick={() => setCurrentGallerySlide(index)}
                  />
                ))}
              </div>
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-300">
                <span className="text-sm font-mono text-gray-400 bg-background-secondary/20 px-3 py-1 rounded border border-gray-300">
                  {selectedProject.category}
                </span>
                <span className="text-sm text-muted-foreground flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {selectedProject.year}
                </span>
                <span className="text-sm text-muted-foreground flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {selectedProject.location}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-century-gothic">
                {selectedProject.title}
              </h2>

              <p className="text-lg text-gray-300 mb-6">
                {selectedProject.details}
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-white font-century-gothic">
                  Key Features
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {selectedProject.features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-whtie/20 backdrop-blur-md rounded-lg p-3 text-center"
                    >
                      <span className="text-sm font-medium text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4 text-white font-century-gothic">
                  Project Gallery
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedProject.gallery.map((image, index) => (
                    <Image
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`${selectedProject.title} gallery ${index + 1}`}
                      width={400}
                      height={300}
                      className="rounded-lg w-full h-32 md:h-40 object-cover cursor-pointer"
                      onClick={() => setCurrentGallerySlide(index)}
                    />
                  ))}
                </div>
              </div>

              <Button
                asChild
                className="bg-gray-200 text-gray-800 hover:bg-gray-400 flex items-center mt-4"
              >
                <Link href={`/projects/${selectedProject.id}`}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Full Case Study
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
