"use client";

import { portfolioData } from "@/data/portfolioData";
import { Terminal, Compass, Layers, Sparkles, MapPin, GraduationCap } from "lucide-react";

export function About() {
  const { personal } = portfolioData;

  const pillars = [
    {
      icon: Terminal,
      title: "AI & Computational Logic",
      description: "Exploring machine learning paradigms, data analytics, and disciplined Python/C++ problem-solving.",
    },
    {
      icon: Layers,
      title: "UI/UX & Visual Architecture",
      description: "Designing structured interfaces with strong typographic hierarchy, high contrast, and ergonomic user flows.",
    },
    {
      icon: Compass,
      title: "Continuous Experimentation",
      description: "Building concepts into tangible artifacts, testing ideas early, and iterating through hands-on practice.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 sm:px-8 border-t border-light-border dark:border-dark-border/80">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col mb-14">
          <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-6 h-px bg-accent"></span>
            <span>01 / Perspective</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-light-text dark:text-dark-text">
            A little about me.
          </h2>
        </div>

        {/* Editorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-base sm:text-lg text-light-text/90 dark:text-dark-text/90 leading-relaxed font-normal">
            {personal.aboutParagraphs.map((para, idx) => (
              <p
                key={idx}
                className={idx === 0 ? "text-lg sm:text-xl font-medium text-light-text dark:text-dark-text leading-snug" : "text-light-muted dark:text-dark-muted"}
              >
                {para}
              </p>
            ))}

            {/* Quick Context Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 mt-2 border-t border-light-border dark:border-dark-border">
              <div className="p-4 rounded-xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface/60">
                <div className="flex items-center gap-2 text-xs font-mono text-accent mb-1.5">
                  <GraduationCap className="w-4 h-4" />
                  <span>Academic Standing</span>
                </div>
                <div className="text-sm font-semibold text-light-text dark:text-dark-text">Bennett University</div>
                <div className="text-xs text-light-muted dark:text-dark-muted mt-0.5">B.Tech CSE (2026–2030)</div>
              </div>

              <div className="p-4 rounded-xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface/60">
                <div className="flex items-center gap-2 text-xs font-mono text-accent mb-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>Geographic Base</span>
                </div>
                <div className="text-sm font-semibold text-light-text dark:text-dark-text">India</div>
                <div className="text-xs text-light-muted dark:text-dark-muted mt-0.5">Greater Noida & Patna</div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Philosophy & Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 rounded-2xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface/80 relative overflow-hidden shadow-xs">
              
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono tracking-wider uppercase text-light-muted dark:text-dark-muted">
                  Guiding Philosophy
                </span>
                <Sparkles className="w-4 h-4 text-accent" />
              </div>

              <div className="space-y-5">
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={idx} className="group flex items-start gap-4">
                      <div className="w-9 h-9 rounded-lg border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card flex items-center justify-center text-accent shrink-0 group-hover:border-accent transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-light-text dark:text-dark-text mb-1">
                          {pillar.title}
                        </h3>
                        <p className="text-xs text-light-muted dark:text-dark-muted leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Editorial Quote at bottom of card */}
              <div className="mt-6 pt-5 border-t border-light-border dark:border-dark-border text-xs italic text-light-muted dark:text-dark-muted font-mono">
                &ldquo;Building experiences that are functional, intuitive, and visually meaningful.&rdquo;
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
