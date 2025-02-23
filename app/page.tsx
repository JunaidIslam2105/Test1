import Hero from "@/components/hero"
import About from "@/components/about"
import Activities from "@/components/activities"
import Events from "@/components/events"
import Projects from "@/components/projects"
import JoinUs from "@/components/join-us"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <About />
      <Activities />
      <Events />
      <Projects />
      <JoinUs />
    </main>
  )
}

