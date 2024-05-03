import React from "react"
import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection"

export default function Page() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto p-5 dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
        <NavBar />
        <HeroSection />
      </div>
    </div>
  )
}
