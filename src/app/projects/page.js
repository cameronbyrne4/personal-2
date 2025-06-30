"use client";

import Link from "../components/Link";
import ProjectList from "../components/ProjectList";

import VibeDrawImage from "../assets/projects/vibedraw.gif";
import SlideItInImage from "../assets/projects/slideitin.png";
import MakeItJakesImage from "../assets/projects/makeitjakes.gif";
import TwirlImage from "../assets/projects/twirl.png";
import LayoffEvadersImage from "../assets/projects/layoffevaders.png";
import LiteNetImage from "../assets/projects/litenet.gif";
import KaleidoscopeImage from "../assets/projects/kaleidoscope.png";
import SensaiImage from "../assets/projects/sensai.png";
import UptoneImage from "../assets/projects/uptone.png";
import CredibilityImage from "../assets/projects/credibility.png";
import BYRYouthImage from "../assets/projects/byryouth.png";
import SACHSAppWebsiteImage from "../assets/projects/sachs-app-website.png";
import SACHSWebsiteImage from "../assets/projects/sachs-website.png";
import TicTacToeImage from "../assets/projects/tictactoe.png";
import EnigmaImage from "../assets/projects/enigma.png";
import COVID19TrackerImage from "../assets/projects/covid19-tracker.png";
import EcoRewardsImage from "../assets/projects/ecorewards.png";

import { useState } from "react";
import { Search } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "Personal Website",
      href: "https://github.com/cameronbyrne4/personal-2",
      description:
        "A modern personal website built with Next.js and Tailwind CSS. Features dark mode, responsive design, and a clean portfolio layout.",
      image: VibeDrawImage,
      imageAlt: "Personal Website",
      technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/cameronbyrne4/personal-2",
      demo: "https://cameronbyrne4.github.io",
    },
    {
      title: "Project 2",
      href: "#",
      description:
        "Description of your second project. What did you build? What technologies did you use? What was the impact?",
      image: SlideItInImage,
      imageAlt: "Project 2",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/cameronbyrne4/project-2",
      demo: "#",
    },
    {
      title: "Project 3",
      href: "#",
      description:
        "Description of your third project. Focus on the problem you solved and the technologies you used.",
      image: MakeItJakesImage,
      imageAlt: "Project 3",
      technologies: ["TypeScript", "Next.js", "PostgreSQL"],
      github: "https://github.com/cameronbyrne4/project-3",
      demo: "#",
    },
    {
      title: "Project 4",
      href: "#",
      description:
        "Description of your fourth project. Highlight any unique features or challenges you overcame.",
      image: TwirlImage,
      imageAlt: "Project 4",
      technologies: ["Python", "FastAPI", "React"],
      github: "https://github.com/cameronbyrne4/project-4",
      demo: "#",
    },
    {
      title: "Project 5",
      href: "#",
      description:
        "Description of your fifth project. What makes this project special? What did you learn?",
      image: LayoffEvadersImage,
      imageAlt: "Project 5",
      technologies: ["JavaScript", "Vue.js", "Firebase"],
      github: "https://github.com/cameronbyrne4/project-5",
      demo: "#",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="relative">
        <Search className="absolute top-2.5 left-3 size-6 text-stone-400" />
        <input
          type="text"
          placeholder="search for a project, technology, etc."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-2 px-4 border border-stone-400 rounded-md bg-transparent focus:outline-none focus:border-stone-700 pl-10"
        />
      </div>
      <ProjectList
        projects={projects.filter(
          (project) =>
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            project.technologies.some((technology) =>
              technology.toLowerCase().includes(searchTerm.toLowerCase())
            )
        )}
      />
      <p>
        You can check out the rest of my projects{" "}
        <Link href="https://github.com/cameronbyrne4?tab=repositories&q=&type=source">
          here
        </Link>
        .
      </p>
    </>
  );
}
