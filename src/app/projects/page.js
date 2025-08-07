"use client";

import Link from "../components/Link";
import ProjectList from "../components/ProjectList";
import AlumnowImage from "../assets/projects/alumnow.png";
import NvidiaTrackerImage from "../assets/projects/nvidia-tracker.png";
import CamBotImage from "../assets/projects/cam-bot.png";
import BertNLPImage from "../assets/projects/BERT-NLP.png";
import FoodHeroImage from "../assets/projects/foodhero.png";
import PitchPerfectlyImage from "../assets/projects/PitchPerfect.png";
import PensonaImage from "../assets/projects/pensona.png";
import NousImage from "../assets/projects/nous-preview.png";
import { useState } from "react";
import { Search } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "Nous",
      href: "https://x.com/CamByrneTech/status/1953582736465441109",
      description:
        "Investigating the blockchain with a swarm of AI agents prompted with natural language queries.",
      image: NousImage,
      imageAlt: "Nous",
      technologies: ["React", "Vite", "Supabase", "Typescript", "Tailwind", "Next.js", "v3.js", "Node.js", "Clerk", "Stripe", "LangChain"],
      github: "https://github.com/cameronbyrne4/crypto-scribe",
      demo: "https://x.com/CamByrneTech/status/1953582736465441109",
    },
    {
      title: "Pensona",
      href: "https://x.com/CamByrneTech/status/1943890156693647639",
      description:
        "A full-stack web app for transforming AI generated text into your own voice based on uploaded writing samples. Read my blog post to hear why this was a useless idea. Deployed at pensona.vercel.app",
      image: PensonaImage,
      imageAlt: "Pensona",
      technologies: ["React", "Vite", "Supabase", "Typescript", "Tailwind CSS", "Gemini API"],
      github: "https://github.com/cameronbyrne4/pitch-perfect-demo",
      demo: "https://x.com/CamByrneTech/status/1943890156693647639",
    },
    {
      title: "Pitch Perfectly",
      href: "https://x.com/CamByrneTech/status/1940912180511346920",
      description:
        "A conversational AI agent that acts like a VC panelist for practicing pitch decks. Made a quick frontend with Lovable to show it's potential future. Made for ElevenLabs 2 hour hackathon.",
      image: PitchPerfectlyImage,
      imageAlt: "Pitch Perfectly",
      technologies: ["ElevenLabs", "Conversational AI", "Prompt Engineering"],
      github: "https://github.com/cameronbyrne4/pitch-perfect-demo",
      demo: "https://x.com/CamByrneTech/status/1940912180511346920",
    },
    {
      title: "Food Hero",
      href: "https://foodhero.wixsite.com/portfolio",
      description:
        "A semester long UI/UX research study and prototyping project at National University of Singapore. DoorDash for surplus food as a budget-friendly option for busy adults. ",
      image: FoodHeroImage,
      imageAlt: "Food Hero",
      technologies: ["Figma", "Teamwork", "UI/UX"],
      demo: "https://foodhero.wixsite.com/portfolio",
    },
    {
      // Add ui 1
      // Add ui 2 XX
      // add voice vc
      // add pensona
      // add nous
      title: "AKPsi Alumni Network",
      href: "https://github.com/cameronbyrne4/akpsi-alumni",
      description:
        "A searchable alumni database and network for UCSB AKPsi, making it easy for students and grads to connect.",
      image: AlumnowImage,
      imageAlt: "AKPsi Alumni Network",
      technologies: ["TypeScript", "Next.js", "Supabase", "Tailwind CSS"],
      github: "https://github.com/cameronbyrne4/akpsi-alumni",
      demo: "https://x.com/CamByrneTech/status/1939425628266369440",
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
      demo: "https://drive.google.com/file/d/14z2P6uDExbSUYHqLf-Jva2rg_Tg6VvVU/view?usp=sharing",
    },
    {
      title: "Discord Mimic Bot",
      href: "https://github.com/cameronbyrne4/discord-mimic-bot",
      description:
        "A Discord bot that mimics your texting style using iMessage data—10,000+ messages, 50+ users.",
      image: CamBotImage,
      imageAlt: "Discord Mimic Bot",
      technologies: ["Python", "Discord.py", "MongoDB", "NLP", "AI"],
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
