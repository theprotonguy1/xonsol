import {Hero,About,Roadmap,Tokenomics,Utility,Utilit } from "./components"

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      <Roadmap />
      <Utilit />
      <Utility />
      <Tokenomics />
    </main>
  )
}
