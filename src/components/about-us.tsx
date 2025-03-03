"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Rocket, Star, Users, Award } from "lucide-react"

export default function AboutUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    {
      icon: <Rocket className="h-10 w-10 text-purple-500" />,
      title: "Innovation",
      description: "Developing cutting-edge space technologies and solutions through collaborative research.",
    },
    {
      icon: <Star className="h-10 w-10 text-blue-500" />,
      title: "Excellence",
      description: "Striving for excellence in all our projects with meticulous attention to detail.",
    },
    {
      icon: <Users className="h-10 w-10 text-purple-500" />,
      title: "Teamwork",
      description: "Fostering a collaborative environment where diverse talents come together to achieve common goals.",
    },
    {
      icon: <Award className="h-10 w-10 text-blue-500" />,
      title: "Achievement",
      description: "Recognized for our contributions to student space research and innovation.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" ref={ref} className="py-20 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-foreground/80">
            The VJIT Space Team is a passionate group of students dedicated to space exploration and innovation. Founded
            in 2018, our team brings together engineering, science, and design students to work on cutting-edge space
            projects and research.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-lg p-6 shadow-lg border border-border hover:border-primary/50 transition-colors"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-card rounded-lg p-8 shadow-lg border border-border"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-foreground/80 mb-4">
                To inspire and educate the next generation of space enthusiasts while developing innovative solutions
                for space exploration challenges. We aim to bridge the gap between academic knowledge and practical
                applications in the space industry.
              </p>
              <p className="text-foreground/80">
                Through our projects, competitions, and research initiatives, we provide students with hands-on
                experience in designing, building, and testing space systems, preparing them for careers in the
                aerospace industry.
              </p>
            </div>
            <div className="relative h-64 md:h-full min-h-[300px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20" />
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=800')] bg-cover bg-center" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

