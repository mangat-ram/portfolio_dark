import { IconType } from "react-icons";
import { SiGit, SiGithub, SiJavascript, SiLinkedin, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiSupabase, SiTailwindcss, SiX } from "react-icons/si";

type SocialsArrType = {
  link: string;
  label: string;
  icon: IconType;
}

type SkillsArrType = {
  title:string;
  icon: IconType
}

export const SocialsArr: Array<SocialsArrType> = [
  {
    link:"www.linkedin.com/in/mangat-ram-dev",
    label:"LinkedIn",
    icon:SiLinkedin
  },
  {
    link:"https://github.com/mangat-ram",
    label:"GitHub",
    icon:SiGithub
  },
  {
    link:"{twitterUrl}",
    label:"Twitter",
    icon:SiX
  }
]

export const SkillsArr: Array<SkillsArrType> = [
  {
    title:"JavaScript",
    icon:SiJavascript
  },
  {
    title:"Git",
    icon:SiGit
  },
  {
    title:"React",
    icon:SiReact
  },
  {
    title:"Next.js",
    icon:SiNextdotjs
  },
  {
    title:"Tailwind",
    icon:SiTailwindcss
  },
  {
    title:"NodeJs",
    icon:SiNodedotjs
  },
  {
    title:"Postgresql",
    icon:SiPostgresql
  },
  {
    title:"Supabase",
    icon:SiSupabase
  },
  {
    title:"Tailwind",
    icon:SiTailwindcss
  },
]