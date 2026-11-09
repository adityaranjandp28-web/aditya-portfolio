"use client";

import { useState } from "react";
import { portfolioData, CreativeItem } from "@/data/portfolioData";
import { LightboxModal } from "./LightboxModal";
import { Sparkles, ArrowUpRight, Palette, Eye } from "lucide-react";

export function CreativeGallery() {
  const { creativeWorks, personal } = portfolioData;
  const [selectedItem, setSelectedItem] = useState<CreativeItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Graphic Design", "UI/UX Concept", "Visual Composition"];

  const filteredItems =
    activeFilter === "All"
      ? creativeWorks
      : creativeWorks.filter((item) => item.category === activeFilter);

  return (
    <section id="creative" className="py-24 px-6 sm:px-8 border-t border-light-border dark:border-dark-border/80 bg-light-card/30 dark:bg-dark-card/20">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest mb-3">
              <span className="w-6 h-px bg-accent"></span>
              <span>04 / Visual Expression</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-light-text dark:text-dark-text">
              Beyond code, I create.
            </h2>
          </div>

          <p className="text-sm text-light-muted dark:text-dark-muted max-w-md font-mono">
            Graphic design, poster work, UI experiments, and visual compositions exploring balance and form.
          </p>
        </div>

        {/* Filter Bar & Digital Portfolio Link */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-light-border dark:border-dark-border">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === cat
                    ? "bg-accent text-white shadow-xs"
                    : "bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <a
            href={personal.googlePortfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline font-mono"
          >
            <span>Explore Full Google Portfolio</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Asymmetrical Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer rounded-2xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface overflow-hidden flex flex-col justify-between hover:border-accent/60 transition-all duration-300 hover:-translate-y-1 shadow-xs"
            >
              {/* Card Visual Placeholder with Elegant Editorial Pattern */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-light-card to-neutral-200 dark:from-dark-card dark:to-neutral-900 border-b border-light-border dark:border-dark-border flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                
                {/* Decorative technical grid background */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#2563EB_1px,transparent_1px)] [background-size:12px_12px]" />
                
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent group-hover:scale-110 transition-transform mb-3 z-10">
                  <Palette className="w-5 h-5" />
                </div>

                <div className="z-10 text-xs font-mono font-medium text-light-text dark:text-dark-text">
                  {item.category}
                </div>
                <div className="z-10 text-[10px] text-light-muted dark:text-dark-muted font-mono mt-0.5">
                  Click to inspect
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1 text-xs font-semibold text-accent backdrop-blur-[2px]">
                  <Eye className="w-4 h-4" />
                  <span>View Details</span>
                </div>
              </div>

              {/* Card Text Content */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-light-muted dark:text-dark-muted mb-1.5">
                    <span className="text-accent">{item.category}</span>
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-sm font-semibold text-light-text dark:text-dark-text group-hover:text-accent transition-colors line-clamp-1 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-light-muted dark:text-dark-muted line-clamp-2 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-3 border-t border-light-border dark:border-dark-border">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-light-card dark:bg-dark-card text-light-muted dark:text-dark-muted"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for Future Uploads */}
        <div className="mt-12 p-6 rounded-2xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-light-text dark:text-dark-text">
                Centralized Creative Manifest
              </div>
              <div className="text-xs text-light-muted dark:text-dark-muted font-mono">
                Easily append high-res posters and UI mockups in `src/data/portfolioData.ts`.
              </div>
            </div>
          </div>

          <a
            href={personal.googlePortfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-accent text-white text-xs font-semibold hover:bg-accent-dark transition-colors inline-flex items-center gap-1.5 shrink-0"
          >
            <span>Live Google Portfolio Archive</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}
