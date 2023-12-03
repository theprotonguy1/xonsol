import { supply,team,tax,pig } from "../../../public/tokenomics"
import { roadmap } from "../../../public"

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "roadmap",
        title: "Roadmap",
    },
    {
        id: "tokenomics",
        title: "Tokenomics",
    },

]

export const tokenomics = [
    {
        title: "Supply",
        desc: "10B $",
        icon: supply
    },
    {
        title: "Team / Content / Hiring",
        desc: "15%",
        icon: team,
    },
    {
        title: "Tax",
        desc: "0% Buy / 0% Sell",
        icon: tax
    },
    {
        title: "LP",
        desc: "Burned Forever",
        icon: pig
    },
]

export const roadmaps = [
    {
        title: "Token Launch",
        time: "December 2023",
        icon: roadmap
    },
    {
        title: "OnlyHub Platform",
        time: "Dec 2023",
        icon: roadmap
    },
    {
        title: "Partnership with Models",
        time: "Dec 2023 - Jan 2024",
        icon: roadmap
    },
    {
        title: "More Utilities soon",
        time: "Q1 2024",
        icon: roadmap
    },
]

const timelineElements = [
    {
      id: 0,
      title: "TempTitle 1",
      location: "TempLocation",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      date: "Feb 2018 - Mar 2020",
      buttonText: "Press Me! ⚡",
      url: "https://www.brewyourtech.com",
    },
    {
      id: 1,
      title: "TempTitle 2",
      location: "TempLocation",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      date: "Feb 2018 - Mar 2020",
      buttonText: "Press Me! ⚡",
      url: "https://www.brewyourtech.com",
    },
    {
      id: 2,
      title: "TempTitle 3",
      location: "TempLocation",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      date: "Feb 2018 - Mar 2020",
      buttonText: "Press Me! ⚡",
      url: "https://www.brewyourtech.com",
    },
  ];
  
export default timelineElements;