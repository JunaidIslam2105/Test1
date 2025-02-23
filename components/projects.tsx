"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "Smart Campus App",
    image: "/placeholder.svg?height=200&width=300",
    description: "An all-in-one app for IIITG students to access campus services and information.",
  },
  {
    title: "AI-powered Chatbot",
    image: "/placeholder.svg?height=200&width=300",
    description: "A chatbot that assists students with common queries and academic information.",
  },
  {
    title: "Competitive Coding Platform",
    image: "/placeholder.svg?height=200&width=300",
    description: "A custom-built platform for hosting coding contests and practice sessions.",
  },
]

export default function Projects() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

