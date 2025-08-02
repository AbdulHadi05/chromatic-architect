"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    // icon: <Building2 className="w-8 h-8" />,
    title: "Architectural Design",
    description: "Complete architectural solutions from concept to construction documentation.",
    features: [
      "Conceptual Design",
      "Schematic Design",
      "Design Development",
      "Construction Documents",
      "3D Visualization",
      "Building Information Modeling (BIM)",
    ],
    // color: "from-blue-400 to-blue-600",
  },
  {
    // icon: <Lightbulb className="w-8 h-8" />,
    title: "Design Consultation",
    description: "Expert guidance and strategic planning for your architectural projects.",
    features: [
      "Site Analysis",
      "Feasibility Studies",
      "Design Strategy",
      "Code Compliance",
      "Zoning Analysis",
      "Project Planning",
    ],
    // color: "from-purple-400 to-purple-600",
  },
  {
    // icon: <Palette className="w-8 h-8" />,
    title: "Interior Design",
    description: "Comprehensive interior design services that complement our architectural vision.",
    features: [
      "Space Planning",
      "Material Selection",
      "Furniture Design",
      "Lighting Design",
      "Color Consultation",
      "Custom Millwork",
    ],
    // color: "from-green-400 to-green-600",
  },
  {
    // icon: <Cpu className="w-8 h-8" />,
    title: "Smart Building Integration",
    description: "Cutting-edge technology integration for intelligent building systems.",
    features: [
      "IoT Integration",
      "Building Automation",
      "Energy Management",
      "Security Systems",
      "Smart Lighting",
      "Climate Control",
    ],
    // color: "from-cyan-400 to-cyan-600",
  },
  {
    // icon: <TreePine className="w-8 h-8" />,
    title: "Sustainable Design",
    description: "Environmentally responsible design solutions for a sustainable future.",
    features: [
      "LEED Certification",
      "Energy Modeling",
      "Renewable Energy",
      "Green Materials",
      "Water Conservation",
      "Carbon Footprint Analysis",
    ],
    // color: "from-emerald-400 to-emerald-600",
  },
  {
    // icon: <Users className="w-8 h-8" />,
    title: "Project Management",
    description: "End-to-end project management ensuring successful delivery.",
    features: [
      "Construction Administration",
      "Quality Control",
      "Timeline Management",
      "Budget Oversight",
      "Contractor Coordination",
      "Client Communication",
    ],
    // color: "from-orange-400 to-orange-600",
  },
]

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We begin by understanding your vision, requirements, and project goals through detailed consultation.",
  },
  {
    step: "02",
    title: "Concept",
    description: "Our team develops initial design concepts that align with your vision and site constraints.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "We refine the concept into detailed architectural plans with 3D visualizations and technical drawings.",
  },
  {
    step: "04",
    title: "Development",
    description: "Complete design development including materials, systems, and construction documentation.",
  },
  {
    step: "05",
    title: "Delivery",
    description: "Construction administration and project management to ensure successful completion.",
  },
]

export default function ServicesPage() {
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
              OUR <span className="gradient-text">SERVICES</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive architectural services that transform your vision into reality through innovative design and
              expert execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-effect rounded-lg p-8 group hover:border-gray-400 transition-all duration-300"
              >
                {/* <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} mb-6`}>
                  <div className="text-white">{service.icon}</div>
                </div> */}

                <h3 className="text-xl font-bold mb-4 group-hover:gradient-text transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mono">
              OUR <span className="gradient-text">PROCESS</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured approach that ensures every project is delivered with precision, creativity, and excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="glass-effect rounded-lg p-6 mb-4">
                  <div className="text-3xl font-bold gradient-text font-mono mb-2">{step.step}</div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>

                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-muted-foreground" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mono">
              READY TO START YOUR <span className="gradient-text">PROJECT</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&rsquo;s discuss how we can bring your architectural vision to life with our innovative design solutions and
              expert execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="border-1 border-black bg-background text-black hover:bg-white"
              >
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-gradient bg-transparent">
                <Link href="/work">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
