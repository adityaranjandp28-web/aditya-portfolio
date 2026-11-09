"use client";

import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Sparkles } from "lucide-react";

export function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 px-6 sm:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Editorial Copy (7 cols on lg) */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          
          {/* Availability pill */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-light-border dark:border-dark-border bg-light-surface/90 dark:bg-dark-surface/90 text-xs font-mono mb-6 backdrop-blur-sm shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-light-muted dark:text-dark-muted">
              {personal.availability}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-light-text dark:text-dark-text leading-[1.08] mb-4">
            Hey, I&apos;m <span className="text-accent underline decoration-accent/30 underline-offset-8">{personal.name}</span>.
          </h1>

          {/* Subtitle / Professional Introduction */}
          <p className="text-lg sm:text-xl font-medium text-light-text/90 dark:text-dark-text/90 leading-snug mb-5 max-w-xl">
            {personal.headline}
          </p>

          {/* Supporting Narrative */}
          <p className="text-sm sm:text-base text-light-muted dark:text-dark-muted leading-relaxed mb-8 max-w-xl font-normal">
            {personal.summary}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white font-medium text-sm hover:bg-accent-dark transition-all duration-200 shadow-sm hover:shadow-accent/25 hover:shadow-md active:scale-98"
            >
              <span>View My Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text font-medium text-sm hover:border-accent hover:text-accent transition-all duration-200 active:scale-98"
            >
              <span>Get In Touch</span>
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Social Proof & Direct Channels */}
          <div className="flex items-center gap-5 pt-6 border-t border-light-border dark:border-dark-border/80 w-full max-w-md">
            <span className="text-xs font-mono uppercase tracking-widest text-light-muted dark:text-dark-muted">
              Connect
            </span>
            <div className="h-3 w-px bg-light-border dark:bg-dark-border" />
            
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-1.5 text-light-muted dark:text-dark-muted hover:text-accent dark:hover:text-accent transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personal.email}`}
              aria-label="Send Email"
              className="p-1.5 text-light-muted dark:text-dark-muted hover:text-accent dark:hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={personal.googlePortfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono text-light-muted dark:text-dark-muted hover:text-accent transition-colors ml-auto"
            >
              <span>Visual Archive</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

        {/* Right Photo Frame (5 cols on lg) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
          <div className="relative group w-full max-w-xs sm:max-w-sm">
            
            {/* Architectural Frame Accents */}
            <div className="absolute -inset-2.5 rounded-2xl border border-light-border dark:border-dark-border pointer-events-none opacity-60 group-hover:border-accent/40 transition-colors" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-accent" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-accent" />

            {/* Photo Container */}
            <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border shadow-lg">
              <Image
                src={personal.profileImage}
                alt={`${personal.name} - ${personal.role}`}
                fill
                priority
                className="object-cover object-center grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 360px"
              />

              {/* Subtle gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-60 dark:opacity-80" />

              {/* Bottom Caption Pill */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-dark-surface/85 backdrop-blur-md border border-white/10 text-white text-xs flex items-center justify-between">
                <div>
                  <div className="font-semibold tracking-tight">{personal.name}</div>
                  <div className="text-[11px] text-neutral-400 font-mono">B.Tech CSE • Bennett Univ.</div>
                </div>
                <div className="w-6 h-6 rounded-md bg-accent/20 border border-accent/40 flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-accent" />
                </div>
              </div>
            </div>

            {/* Status chip */}
            <div className="absolute -bottom-3 -right-3 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-md bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border text-[11px] font-mono text-light-muted dark:text-dark-muted shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              2026 – 2030
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
