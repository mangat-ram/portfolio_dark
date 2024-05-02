import { IconType } from "react-icons";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

type SocialsArrType = {
  link: string;
  label: string;
  icon: IconType;
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