"use client";

import { portfolioData } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-light-border dark:border-dark-border py-12 px-6 sm:px-8 bg-light-surface dark:bg-dark-surface/90 text-xs font-mono">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Copyright */}
        <div className="flex items-center gap-3 text-light-muted dark:text-dark-muted">
          <span className="font-semibold text-light-text dark:text-dark-text">
            {portfolioData.personal.monogram}
          </span>
          <span>•</span>
          <span>&copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</span>
        </div>

        {/* Center: Tech Spec */}
        <div className="text-light-muted dark:text-dark-muted hidden md:flex items-center gap-2">
          <span>Engineered with Next.js, TypeScript &amp; Tailwind CSS</span>
        </div>

        {/* Right: Back to Top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card text-light-muted dark:text-dark-muted hover:text-accent hover:border-accent transition-colors"
          aria-label="Back to top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
