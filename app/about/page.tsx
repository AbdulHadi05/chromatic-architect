"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Users, Target, Lightbulb } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision",
      description: "Every detail matters in creating architectural excellence.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge design solutions.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working closely with clients to bring visions to life.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Committed to delivering outstanding architectural solutions.",
    },
  ]

  const team = [
    {
      name: "Ar. Bilavel Shamas",
      role: "Co-Founder & Principal Architect",
      image: "/images/bilawel.jpg",
      bio: "3+ years of experience in sustainable architecture and urban planning.",
    },
    {
      name: "Ar. Nosherwan Ahmed Qureshi",
      role: "Co-Founder & Senior Architect",
      image: "/images/nosherwan.jpg",
      bio: "Specializes in innovative residential and commercial design solutions.",
    },
    // {
    //   name: "Muhammad Hadi",
    //   role: "Technology Lead",
    //   image: "/images/hadi.jpg",
    //   bio: "Expert in smart building systems and architectural technology integration.",
    // },
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
              <span className="gradient-text">ABOUT</span> OUR STUDIO
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a forward-thinking architectural studio dedicated to creating spaces that harmonize innovation,
              sustainability, and human experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mono">
                OUR <span className="gradient-text">STORY</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in November 2023, BN haus emerged from a vision to revolutionize the architectural
                  landscape through the integration of advanced technology and sustainable design principles.
                </p>
                <p>
                  Our multidisciplinary team combines traditional architectural expertise with cutting-edge digital
                  tools, creating buildings that are not just structures, but living, breathing ecosystems that adapt to
                  their environment and inhabitants.
                </p>
                <p>
                  We believe that architecture should be a catalyst for positive change, addressing contemporary
                  challenges while creating beautiful, functional spaces that inspire and endure.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-effect rounded-lg p-8">
                <Image
                  src="/images/1.jpg"
                  alt="Studio workspace"
                  width={600}
                  height={400}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              OUR <span className="gradient-text">VALUES</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our approach to architectural excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-effect rounded-lg p-6 text-center group hover:border-gray-400 transition-all duration-300"
              >
                <div className="text-gray-400 mb-4 flex justify-center group-hover:text-gray-800 transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mono">
              MEET THE <span className="gradient-text">TEAM</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of architects, designers, and technologists working together to shape the future of
              architecture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* lg:grid-cols-3 */}
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-effect rounded-lg p-6 text-center group hover:border-gray-500 transition-all duration-300"
              >
                <div className="relative mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto w-32 h-32 object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-3 font-mono text-sm">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
