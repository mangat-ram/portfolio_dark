import React from "react"
import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection"

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto p-5 overflow-hidden">
        <NavBar />
        <HeroSection />
      </div>
    </div>
  )
}
