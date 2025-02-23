"use client"

import { motion } from "framer-motion"
import { useCallback } from "react"
import Particles from "react-particles"
import type { Engine } from "tsparticles-engine"
import { loadSlim } from "tsparticles-slim"

export default function Hero() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      <nav className="absolute top-0 right-0 flex justify-end py-4 px-8 z-20">
        <ul className="flex space-x-8 text-white">
          <li className="hover:text-blue-400 cursor-pointer transition duration-300">Events</li>
          <li className="hover:text-blue-400 cursor-pointer transition duration-300">Coordinators</li>
          <li className="hover:text-blue-400 cursor-pointer transition duration-300">Newsletter</li>
        </ul>
      </nav>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Programming Club IIITG
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Innovate. Code. Create.
        </motion.p>
        <motion.button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join Us
        </motion.button>
      </motion.div>
    </section>
  )
}

