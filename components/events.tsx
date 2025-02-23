"use client"

import { motion } from "framer-motion"

const events = [
  {
    date: "May 15, 2023",
    title: "Web Development Bootcamp",
    description: "A 3-day intensive bootcamp on modern web development technologies.",
  },
  {
    date: "June 5, 2023",
    title: "Competitive Programming Contest",
    description: "Test your coding skills in our monthly competitive programming contest.",
  },
  {
    date: "July 10, 2023",
    title: "AI/ML Workshop Series",
    description: "Explore the world of Artificial Intelligence and Machine Learning in this workshop series.",
  },
]

export default function Events() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Upcoming Events
        </motion.h2>
        <div className="space-y-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="text-blue-500 font-semibold mb-2 md:mb-0 md:w-1/4">{event.date}</div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-400">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

