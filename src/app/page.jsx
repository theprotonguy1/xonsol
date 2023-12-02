import {Hero,About,Roadmap,Tokenomics } from "./components"
import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Hero />
      <About />
      <Roadmap />
      <Tokenomics />
    </main>
  )
}
