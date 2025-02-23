"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="text-xl text-gray-300 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          The Programming Club at IIITG is a community of passionate coders, developers, and tech enthusiasts. We foster
          innovation, collaboration, and skill development through various activities and projects.
        </motion.p>
      </div>
    </section>
  )
}

