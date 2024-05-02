import { SocialsArr } from "@/lib/data"
import Link from "next/link"
import React from "react"

export default function NavBar() {
  return (
    <nav className="py-10 px-16 flex justify-between">
      <h1 
        className="text-3xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2 hover:scale-110 transition-all cursor-pointer">
          Mangat Ram 👨🏻‍💻
      </h1>
      <div className="flex items-center gap-5">
        {SocialsArr.map((social,index) => {
          const Icon = social.icon
          return <Link href={social.link} key={index} aria-label={social.label}>
            <Icon className="w-8 h-8 hover:scale-125 transition-all" />
          </Link>
        })}
      </div>
    </nav>
  )
}
