"use client";

import { portfolioData } from "@/data/portfolioData";
import { Gamepad2, Palette, Sparkles } from "lucide-react";

export function Hobbies() {
  const { hobbies } = portfolioData;

  const iconMap: Record<string, any> = {
    Gamepad2: Gamepad2,
    Palette: Palette,
  };

  return (
    <section className="py-24 px-6 sm:px-8 border-t border-light-border dark:border-dark-border/80">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest mb-3">
            <span className="w-6 h-px bg-accent"></span>
            <span>05 / Personal World</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-light-text dark:text-dark-text">
            Life outside the code.
          </h2>
        </div>

        {/* Two Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hobbies.map((hobby) => {
            const Icon = iconMap[hobby.icon] || Sparkles;

            return (
              <div
                key={hobby.id}
                className="p-8 rounded-3xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface flex flex-col justify-between hover:border-accent/40 transition-all duration-300 shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-light-muted dark:text-dark-muted">
                      Dimension
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-light-text dark:text-dark-text tracking-tight mb-1">
                    {hobby.title}
                  </h3>
                  <div className="text-xs font-mono text-accent mb-4">
                    {hobby.tagline}
                  </div>

                  <p className="text-sm text-light-muted dark:text-dark-muted leading-relaxed mb-6">
                    {hobby.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-light-border dark:border-dark-border">
                    {hobby.aspects.map((aspect, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 text-xs text-light-text/80 dark:text-dark-text/80 font-mono"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/70 shrink-0"></span>
                        <span>{aspect}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-light-border dark:border-dark-border flex items-center justify-between text-[11px] font-mono text-light-muted dark:text-dark-muted">
                  <span>Inspiration &amp; Perspective</span>
                  <span className="text-accent font-semibold">Continuous Balance</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
