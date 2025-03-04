"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "CanSat Competition 2022",
    description:
      "Designed and built a small satellite prototype that was launched to an altitude of 1km and successfully collected atmospheric data during descent.",
    image: "/cansat-2022.jpg",
    achievements: "3rd Place National Ranking",
  },
  {
    id: 2,
    title: "WCRC",
    description: 
      "The World CanSat Rocketry Competition (WCRC) is an international challenge where students and professionals design, build, and launch miniaturized satellites called CanSats. These soda can-sized satellites are deployed from rockets at altitudes of 1 to 2 km to complete specific missions, such as data collection or controlled descent. ",
    image: "/image2.jpg",
    achievements: "Best Innovation Award",
  },
  {
    id: 3,
    title: "High-Altitude Balloon Project",
    description:
      "Launched a high-altitude balloon reaching 30km altitude, capturing stunning imagery and collecting valuable atmospheric data.",
    image: "/placeholder.jpg",
    achievements: "Featured in National Science Magazine",
  },
  {
    id: 4,
    title: "CubeSat Development",
    description:
      "Currently working on a 1U CubeSat design with an atmospheric monitoring payload, scheduled for launch in 2024.",
    image: "/placeholder.jpg",
    achievements: "Selected for University Space Program",
  },
]

export default function PastExperience() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="experience" ref={ref} className="py-20 bg-gradient-to-b from-background/95 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Past Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-foreground/80">
            Explore our journey through various space-related projects and competitions that showcase our team&apos;s
            innovation and dedication.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-xl shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 bg-card border border-border rounded-xl overflow-hidden"
              >
                <div className="relative h-64 md:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 z-10" />
                  <Image
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                      {projects[currentIndex].title}
                    </h3>
                    <p className="text-foreground/80 mb-4">{projects[currentIndex].description}</p>
                    <div className="mb-6 inline-block bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary">
                      {projects[currentIndex].achievements}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-background/80 backdrop-blur-sm z-10 rounded-full"
            onClick={prevSlide}
            aria-label="Previous project"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-background/80 backdrop-blur-sm z-10 rounded-full"
            onClick={nextSlide}
            aria-label="Next project"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-primary/30 hover:bg-primary/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Our Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-6 shadow-md">
              <div className="text-4xl font-bold text-purple-500 mb-2">12+</div>
              <div className="text-foreground/80">Projects Completed</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 shadow-md">
              <div className="text-4xl font-bold text-blue-500 mb-2">8</div>
              <div className="text-foreground/80">Awards Won</div>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 shadow-md">
              <div className="text-4xl font-bold text-purple-500 mb-2">50+</div>
              <div className="text-foreground/80">Team Members</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

