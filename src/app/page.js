"use client";

import Link from "./components/Link";
import NextLink from "next/link";
import Headshot from "@/app/assets/headshot.png";
import UCSBLogo from "@/app/components/icon/UCSB.png";
import MinecraftLogo from "@/app/components/icon/mclogo.png";
import Image from "next/image";
import { useState } from "react";
import { GalleryHorizontalEnd } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col max-w-2xl mx-auto">
      <ul className="grid gap-1 text-base">
        <li className="group flex items-start gap-4 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400">
            Software Engineer learning how to build stuff that matters
          </span>
        </li>
        <li className="group flex items-start gap-4 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400">
            cs @ {" "}
            <span className="inline-flex items-baseline gap-1">
              <Image src={UCSBLogo} alt="UCSB Logo" width={20} height={20} className="object-contain" />
              <Link href="https://www.ucsb.edu" className="font-medium">
                UC Santa Barbara
              </Link>
            </span>
          </span>
        </li>
        <li className="group flex flex-col gap-3 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400 italic font-medium">recently:</span>
          <ul className="grid gap-1 pl-4">
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">↳</span>
              <span className="text-stone-600 dark:text-stone-400">
                launched an alumni database <Link href="https://github.com/cameronbyrne4/akpsi-alumni" className="font-medium">network</Link> for college organizations <Link href="https://x.com/CamByrneTech/status/1939425628266369440" className="font-medium">(featured on X)</Link>
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">↳</span>
              <span className="text-stone-600 dark:text-stone-400">
                built a full-stack <Link href="https://github.com/cameronbyrne4/nvidia-tracker" className="font-medium">app</Link> for Reddit sentiment investing, analyzing 1,000+ posts
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">↳</span>
              <span className="text-stone-600 dark:text-stone-400">
                shipped an AI Discord <Link href="https://github.com/cameronbyrne4/discord-mimic-bot" className="font-medium">bot</Link> that mimics your texting style, 10,000+ messages, 50+ users
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">↳</span>
              <span className="text-stone-600 dark:text-stone-400">
                optimized a BERT <Link href="https://github.com/cameronbyrne4/Bert-fine-tuning-NER" className="font-medium">model</Link> for Named Entity Recognition, hitting 90% accuracy with PyTorch & Transformers
              </span>
            </li>
          </ul>
        </li>
        <li className="group flex items-start gap-4 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400">
            in high school: wanted to major in biology, only code written were scripts to automate <span className="inline-flex items-baseline gap-1"><Image src={MinecraftLogo} alt="Minecraft Logo" width={14} height={14} className="object-contain" /><Link href="https://www.minecraft.net/" className="font-medium">Minecraft</Link></span> farms
          </span>
        </li>
      </ul>

      <NextLink
        href="/projects"
        className="text-center mt-4 py-4 px-6 rounded-lg border-2 border-stone-400 dark:border-stone-600 hover:bg-stone-800 hover:text-white dark:hover:bg-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-600 dark:text-stone-400 transform transition-all duration-300 font-medium hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md"
      >
        see what i&apos;ve built{" "}
        <GalleryHorizontalEnd className="size-5 inline align-top ml-1 transition-transform group-hover:rotate-3" />
      </NextLink>

      <div className="flex items-center justify-center gap-2 text-stone-600 dark:text-stone-400 mt-4">
        <span>or, </span>
        <span>→</span>
        <Link href="/resume.pdf" className="font-medium">
          view my resume
        </Link>
      </div>

      <div className="flex justify-center mt-8">
        <div className="w-48 h-48 relative rounded-full border-2 border-stone-200 dark:border-stone-700 shadow-lg overflow-hidden bg-stone-50 dark:bg-stone-800">
          <Image
            src={Headshot}
            alt="Cameron Byrne Headshot"
            fill
            className="object-cover object-top rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
