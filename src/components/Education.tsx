"use client";

import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, Award, Compass, Sparkles } from "lucide-react";

export function Education() {
  const { education, activities } = portfolioData;

  return (
    <section id="journey" className="py-24 px-6 sm:px-8 border-t border-light-border dark:border-dark-border/80 bg-light-card/30 dark:bg-dark-card/20">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest mb-3">
              <span className="w-6 h-px bg-accent"></span>
              <span>06 / Trajectory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-light-text dark:text-dark-text">
              Education &amp; Journey
            </h2>
          </div>

          <p className="text-sm text-light-muted dark:text-dark-muted max-w-md font-mono">
            Grounding theoretical computer science in Bennett University while actively building practical projects.
          </p>
        </div>

        {/* Two Column Grid: Education & Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Education Timeline (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-light-muted dark:text-dark-muted flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-accent" />
              <span>Academic Foundations</span>
            </h3>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 before:w-px before:bg-light-border dark:before:bg-dark-border">
              {education.map((item, idx) => (
                <div key={idx} className="relative pl-10 group">
                  {/* Timeline node */}
                  <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-light-surface dark:bg-dark-surface border-2 border-accent -translate-x-1/2 group-hover:scale-125 transition-transform" />

                  <div className="p-6 rounded-2xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface shadow-xs hover:border-accent/40 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-accent font-semibold">
                        {item.period}
                      </span>
                      {item.badge && (
                        <span className="px-2 py-0.5 rounded text-[11px] font-mono border border-accent/20 bg-accent/10 text-accent font-medium">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <h4 className="text-lg font-bold text-light-text dark:text-dark-text mb-1">
                      {item.institution}
                    </h4>
                    <p className="text-sm font-medium text-light-text/80 dark:text-dark-text/80 mb-1">
                      {item.degree}
                    </p>
                    <p className="text-xs font-mono text-light-muted dark:text-dark-muted mb-4">
                      {item.location}
                    </p>

                    <ul className="space-y-1.5 text-xs text-light-muted dark:text-dark-muted">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathons & Campus Initiatives (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-light-muted dark:text-dark-muted flex items-center gap-2">
              <Award className="w-4 h-4 text-accent" />
              <span>Hackathons &amp; Activities</span>
            </h3>

            <div className="space-y-4">
              {activities.map((act, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface shadow-xs hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-accent mb-2">
                    <span>{act.organization}</span>
                    <span className="text-light-muted dark:text-dark-muted">{act.period}</span>
                  </div>

                  <h4 className="text-base font-semibold text-light-text dark:text-dark-text mb-2">
                    {act.role}
                  </h4>

                  <p className="text-xs text-light-muted dark:text-dark-muted leading-relaxed mb-4">
                    {act.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {act.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {/* Forward-Looking Roadmap */}
              <div className="p-5 rounded-2xl border border-dashed border-light-border dark:border-dark-border bg-light-card/40 dark:bg-dark-card/40">
                <div className="flex items-center gap-2 text-xs font-mono text-accent font-semibold mb-2">
                  <Compass className="w-4 h-4" />
                  <span>Upcoming Milestones</span>
                </div>
                <p className="text-xs text-light-muted dark:text-dark-muted leading-relaxed">
                  Focusing on advanced machine learning algorithms, expanding open-source contributions on GitHub, and integrating intelligent design systems.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
