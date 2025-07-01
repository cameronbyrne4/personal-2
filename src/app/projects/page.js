"use client";

import Link from "../components/Link";
import ProjectList from "../components/ProjectList";
import AlumnowImage from "../assets/projects/alumnow.png";
import NvidiaTrackerImage from "../assets/projects/nvidia-tracker.png";
import CamBotImage from "../assets/projects/cam-bot.png";
import BertNLPImage from "../assets/projects/BERT-NLP.png";

import { useState } from "react";
import { Search } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "AKPsi Alumni Network",
      href: "https://github.com/cameronbyrne4/akpsi-alumni",
      description:
        "A searchable alumni database and network for UCSB AKPsi, making it easy for students and grads to connect.",
      image: AlumnowImage,
      imageAlt: "AKPsi Alumni Network",
      technologies: ["TypeScript", "Next.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/cameronbyrne4/akpsi-alumni",
      demo: "https://github.com/cameronbyrne4/akpsi-alumni",
    },
    {
      title: "NVIDIA Tracker",
      href: "https://github.com/cameronbyrne4/nvidia-tracker",
      description:
        "A full-stack app that scrapes Reddit and analyzes sentiment to track how people are investing in Nvidia.",
      image: NvidiaTrackerImage,
      imageAlt: "NVIDIA Tracker",
      technologies: ["React", "Vite", "Python", "Flask", "NLP"],
      github: "https://github.com/cameronbyrne4/nvidia-tracker",
      demo: "https://github.com/cameronbyrne4/nvidia-tracker",
    },
    {
      title: "Discord Mimic Bot",
      href: "https://github.com/cameronbyrne4/discord-mimic-bot",
      description:
        "A Discord bot that mimics your texting style using iMessage data—10,000+ messages, 50+ users.",
      image: CamBotImage,
      imageAlt: "Discord Mimic Bot",
      technologies: ["Python", "Discord.py", "NLP", "AI"],
      github: "https://github.com/cameronbyrne4/discord-mimic-bot",
      demo: "https://github.com/cameronbyrne4/discord-mimic-bot",
    },
    {
      title: "BERT Fine-Tuning for NER",
      href: "https://github.com/cameronbyrne4/Bert-fine-tuning-NER",
      description:
        "Fine-tuned a BERT model for Named Entity Recognition using PyTorch and Hugging Face Transformers (90%+ accuracy).",
      image: BertNLPImage,
      imageAlt: "BERT Fine-Tuning for NER",
      technologies: ["Python", "PyTorch", "Transformers", "Jupyter Notebook"],
      github: "https://github.com/cameronbyrne4/Bert-fine-tuning-NER",
      demo: "https://github.com/cameronbyrne4/Bert-fine-tuning-NER",
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
