"use client"

import { motion } from "framer-motion"
import { Code, Users, Lightbulb } from "lucide-react"

const activities = [
  {
    icon: Code,
    title: "Coding Workshops",
    description: "Regular workshops on various programming languages and technologies.",
  },
  {
    icon: Users,
    title: "Hackathons",
    description: "Organize and participate in exciting hackathons to solve real-world problems.",
  },
  {
    icon: Lightbulb,
    title: "Tech Talks",
    description: "Invite industry experts for insightful talks on cutting-edge technologies.",
  },
]

export default function Activities() {
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
          Our Activities
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <activity.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
              <p className="text-gray-400">{activity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

