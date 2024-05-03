"use client"

import React from "react"
import Title from "./Title"
import { HoverEffect } from "./ui/hover-card"
import { SkillsArr } from "@/lib/data"

export default function Skills() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title title="Skills 🎯" className="flex flex-col items-center justify-center -rotate-6"/>
      <HoverEffect items={SkillsArr} /> 
    </div>
  )
}
