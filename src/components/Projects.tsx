"use client";

import { portfolioData, Project } from "@/data/portfolioData";
import { ExternalLink, Github, BarChart3, AlertCircle, TrendingUp, Users, ArrowUpRight } from "lucide-react";

export function Projects() {
  const { projects } = portfolioData;
  const featured = projects.find((p) => p.featured) || projects[0];
  const upcoming = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 sm:px-8 border-t border-light-border dark:border-dark-border/80">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest mb-3">
              <span className="w-6 h-px bg-accent"></span>
              <span>03 / Featured Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-light-text dark:text-dark-text">
              Things I&apos;ve been building.
            </h2>
          </div>

          <p className="text-sm text-light-muted dark:text-dark-muted max-w-md font-mono">
            Translating analytical indicators and human interfaces into real-world interactive tools.
          </p>
        </div>

        {/* Primary Featured Project Card (Large Editorial Presentation) */}
        <div className="rounded-3xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface overflow-hidden shadow-md hover:border-accent/50 transition-all duration-300 mb-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Visual Dashboard Simulation Preview (7 cols on lg) */}
            <div className="lg:col-span-7 bg-light-card/80 dark:bg-[#0e1017] p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-light-border dark:border-dark-border flex flex-col justify-between">
              
              {/* Fake Dashboard Window Frame */}
              <div className="rounded-2xl border border-light-border dark:border-dark-border/80 bg-light-surface dark:bg-dark-surface/90 overflow-hidden shadow-sm">
                
                {/* Window top bar */}
                <div className="px-4 py-3 border-b border-light-border dark:border-dark-border/70 flex items-center justify-between bg-light-card/50 dark:bg-dark-card/50">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></span>
                  </div>
                  <div className="text-[11px] font-mono text-light-muted dark:text-dark-muted flex items-center gap-1.5">
                    <BarChart3 className="w-3.5 h-3.5 text-accent" />
                    <span>Power BI Dashboard • Risk Assessment Engine</span>
                  </div>
                  <div className="w-8"></div>
                </div>

                {/* Dashboard Inner Body */}
                <div className="p-5 space-y-4">
                  {/* Top Stats Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    <div className="p-3 rounded-xl bg-light-card dark:bg-dark-card/60 border border-light-border/70 dark:border-dark-border/50">
                      <div className="flex items-center justify-between text-[10px] font-mono text-light-muted dark:text-dark-muted mb-1">
                        <span>Risk Index</span>
                        <AlertCircle className="w-3 h-3 text-amber-500" />
                      </div>
                      <div className="text-lg font-bold text-light-text dark:text-dark-text">14.2%</div>
                      <div className="text-[10px] text-emerald-500 font-mono">-2.4% vs benchmark</div>
                    </div>

                    <div className="p-3 rounded-xl bg-light-card dark:bg-dark-card/60 border border-light-border/70 dark:border-dark-border/50">
                      <div className="flex items-center justify-between text-[10px] font-mono text-light-muted dark:text-dark-muted mb-1">
                        <span>Attendance KPI</span>
                        <Users className="w-3 h-3 text-accent" />
                      </div>
                      <div className="text-lg font-bold text-light-text dark:text-dark-text">88.6%</div>
                      <div className="text-[10px] text-accent font-mono">&gt; 85% Target Met</div>
                    </div>

                    <div className="p-3 rounded-xl bg-light-card dark:bg-dark-card/60 border border-light-border/70 dark:border-dark-border/50 col-span-2 sm:col-span-1">
                      <div className="flex items-center justify-between text-[10px] font-mono text-light-muted dark:text-dark-muted mb-1">
                        <span>Proactive Support</span>
                        <TrendingUp className="w-3 h-3 text-emerald-500" />
                      </div>
                      <div className="text-lg font-bold text-light-text dark:text-dark-text">91%</div>
                      <div className="text-[10px] text-emerald-500 font-mono">Early Interventions</div>
                    </div>
                  </div>

                  {/* Simulated Chart Bars */}
                  <div className="p-4 rounded-xl bg-light-card dark:bg-dark-card/60 border border-light-border/70 dark:border-dark-border/50">
                    <div className="flex items-center justify-between text-xs font-mono text-light-muted dark:text-dark-muted mb-3">
                      <span>Performance vs Attendance Distribution</span>
                      <span className="text-[10px] text-accent font-semibold">INTERACTIVE VIEW</span>
                    </div>

                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-[11px] mb-1">
                          <span className="text-light-text dark:text-dark-text font-medium">Safe Benchmark (&gt;75% Attendance)</span>
                          <span className="font-mono text-xs text-light-muted dark:text-dark-muted">74%</span>
                        </div>
                        <div className="h-2 rounded-full bg-light-border dark:bg-neutral-800 overflow-hidden">
                          <div className="h-full bg-accent rounded-full" style={{ width: "74%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[11px] mb-1">
                          <span className="text-light-text dark:text-dark-text font-medium">Borderline Attention (65%–75%)</span>
                          <span className="font-mono text-xs text-light-muted dark:text-dark-muted">18%</span>
                        </div>
                        <div className="h-2 rounded-full bg-light-border dark:bg-neutral-800 overflow-hidden">
                          <div className="h-full bg-amber-400 rounded-full" style={{ width: "18%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[11px] mb-1">
                          <span className="text-light-text dark:text-dark-text font-medium">Critical Action Needed (&lt;65%)</span>
                          <span className="font-mono text-xs text-light-muted dark:text-dark-muted">8%</span>
                        </div>
                        <div className="h-2 rounded-full bg-light-border dark:bg-neutral-800 overflow-hidden">
                          <div className="h-full bg-red-400 rounded-full" style={{ width: "8%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom preview note */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-light-muted dark:text-dark-muted pt-1">
                    <span>Dataset: Academic Indicators &amp; Attendance</span>
                    <span className="text-accent">Live GitHub Pages Build</span>
                  </div>

                </div>
              </div>

            </div>

            {/* Project Details Copy (5 cols on lg) */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                {/* Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-accent/15 text-accent border border-accent/30 font-semibold">
                    PROJECT 01 • FEATURED
                  </span>
                  <span className="text-xs font-mono text-light-muted dark:text-dark-muted">
                    {featured.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-light-text dark:text-dark-text tracking-tight mb-2">
                  {featured.title}
                </h3>
                <p className="text-xs font-mono text-accent mb-4">
                  {featured.subtitle}
                </p>

                {/* Descriptions */}
                <p className="text-sm text-light-text/90 dark:text-dark-text/90 leading-relaxed mb-4">
                  {featured.description}
                </p>

                {featured.detailedDescription && (
                  <p className="text-xs text-light-muted dark:text-dark-muted leading-relaxed mb-6">
                    {featured.detailedDescription}
                  </p>
                )}

                {/* Highlights */}
                {featured.highlights && (
                  <div className="mb-6 space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-light-muted dark:text-dark-muted">
                      Key Highlights:
                    </div>
                    <ul className="space-y-1.5">
                      {featured.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-xs text-light-text/80 dark:text-dark-text/80 flex items-start gap-2">
                          <span className="text-accent font-bold">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-mono border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card text-light-muted dark:text-dark-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-light-border dark:border-dark-border">
                {featured.liveUrl && (
                  <a
                    href={featured.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white text-xs font-semibold hover:bg-accent-dark transition-colors shadow-xs"
                  >
                    <span>Launch Live Dashboard</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {featured.githubUrl && (
                  <a
                    href={featured.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text text-xs font-semibold hover:border-accent hover:text-accent transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
              </div>

            </div>

          </div>
        </div>

        {/* Space for Next / Ongoing Project */}
        {upcoming.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcoming.map((proj: Project) => (
              <div
                key={proj.id}
                className="p-6 rounded-2xl border border-dashed border-light-border dark:border-dark-border bg-light-surface/60 dark:bg-dark-surface/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider border border-amber-500/40 text-amber-500 bg-amber-500/10">
                      {proj.status}
                    </span>
                    <span className="text-[11px] font-mono text-light-muted dark:text-dark-muted">
                      R&amp;D Pipeline
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-light-text dark:text-dark-text mb-1">
                    {proj.title}
                  </h4>
                  <p className="text-xs font-mono text-accent mb-3">{proj.subtitle}</p>
                  <p className="text-xs text-light-muted dark:text-dark-muted leading-relaxed mb-4">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-mono border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-light-border dark:border-dark-border text-xs font-mono text-light-muted dark:text-dark-muted flex items-center justify-between">
                  <span>Future Milestone</span>
                  <span className="text-accent font-semibold">Active Experimentation</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
