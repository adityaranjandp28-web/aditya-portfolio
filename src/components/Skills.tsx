"use client";

import { useState } from "react";
import { portfolioData, SkillCategory } from "@/data/portfolioData";
import { Code2, BrainCircuit, PenTool, Wrench, CheckCircle2 } from "lucide-react";

export function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState<string>("All");

  const categoryIcons: Record<string, any> = {
    "Programming & Development": Code2,
    "AI & Data": BrainCircuit,
    "Design": PenTool,
    "Tools": Wrench,
  };

  const categories = ["All", ...skills.map((s) => s.category)];

  const filteredCategories =
    activeTab === "All"
      ? skills
      : skills.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-24 px-6 sm:px-8 border-t border-light-border dark:border-dark-border/80 bg-light-card/40 dark:bg-dark-card/20">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest mb-3">
              <span className="w-6 h-px bg-accent"></span>
              <span>02 / Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-light-text dark:text-dark-text">
              Skills &amp; Technologies
            </h2>
          </div>

          <p className="text-sm text-light-muted dark:text-dark-muted max-w-md font-mono">
            Structured into active competencies and developing domains. Authentic proficiency without arbitrary percentage bars.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-light-border dark:border-dark-border">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? "bg-accent text-white shadow-xs"
                    : "bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((catGroup: SkillCategory) => {
            const Icon = categoryIcons[catGroup.category] || Code2;

            return (
              <div
                key={catGroup.category}
                className="p-6 rounded-2xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface flex flex-col justify-between hover:border-accent/40 transition-colors shadow-xs"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-light-text dark:text-dark-text tracking-tight">
                        {catGroup.category}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-light-muted dark:text-dark-muted mb-6">
                    {catGroup.description}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {catGroup.skills.map((skill) => {
                      const isExploration = skill.level === "Active Exploration";
                      const isDeveloping = skill.level === "Developing Proficiency";

                      return (
                        <div
                          key={skill.name}
                          className="p-3 rounded-xl border border-light-border/60 dark:border-dark-border/60 bg-light-card/60 dark:bg-dark-card/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                        >
                          <div className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <div>
                              <div className="text-sm font-semibold text-light-text dark:text-dark-text">
                                {skill.name}
                              </div>
                              {skill.note && (
                                <div className="text-[11px] text-light-muted dark:text-dark-muted">
                                  {skill.note}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="shrink-0 self-start sm:self-center">
                            <span
                              className={`inline-block text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md border ${
                                isExploration
                                  ? "border-amber-500/30 text-amber-500 bg-amber-500/10"
                                  : isDeveloping
                                  ? "border-sky-500/30 text-sky-500 bg-sky-500/10"
                                  : "border-accent/30 text-accent bg-accent/10 font-medium"
                              }`}
                            >
                              {skill.level}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer Note */}
                <div className="mt-6 pt-4 border-t border-light-border dark:border-dark-border/60 flex items-center justify-between text-[11px] font-mono text-light-muted dark:text-dark-muted">
                  <span>{catGroup.skills.length} core competencies</span>
                  <span className="text-accent">Iterating continuously</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
