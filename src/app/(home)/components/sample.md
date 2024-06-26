import Link from "next/link"
import React from "react"

export default function HeroSection() {
  return (
    <div className="min-h-[60vh] flex items-center justify-between">
      <div>
        <h1 className="text-3xl lg:text-6xl font-bold">Nice to meet you! 👋
          <br/><span className="underline underline-offset-8 decoration-green-500">I&apos;m Mangat.</span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          Based in India, I&apos;m a Fullstack developer passionate
          about building a modern web application that users love.
        </p>
        <Link href={"mailto:someone@gmail.com"}>
          <div>
            <h1>Contact Me 📫</h1>
          </div>
        </Link>
      </div>
          <div className="w-72 h-72 space-y-3 -rotate-[30deg]">
            <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div> 
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
        </div>
    </div>
  )
}
