import React from "react"
import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection"

export default function Page() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className=" dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.5]">
        <div className="max-w-7xl mx-auto p-5">
          <NavBar />
          <HeroSection />
        </div>
      </div>
    </div>
  )
}
