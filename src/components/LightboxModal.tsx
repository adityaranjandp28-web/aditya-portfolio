"use client";

import { useEffect } from "react";
import { X, ExternalLink, Calendar, Tag } from "lucide-react";
import { CreativeItem } from "@/data/portfolioData";

interface LightboxModalProps {
  item: CreativeItem | null;
  onClose: () => void;
}

export function LightboxModal({ item, onClose }: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text hover:text-accent transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Category & Date */}
        <div className="flex items-center gap-3 text-xs font-mono text-accent mb-3">
          <span className="px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
            {item.category}
          </span>
          <span className="text-light-muted dark:text-dark-muted flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {item.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-3">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-light-muted dark:text-dark-muted leading-relaxed mb-6">
          {item.description}
        </p>

        {/* Visual Showcase Block */}
        <div className="w-full aspect-[16/9] rounded-xl border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card flex flex-col items-center justify-center p-6 text-center mb-6 relative overflow-hidden">
          <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-3">
            <Tag className="w-6 h-6" />
          </div>
          <div className="text-sm font-semibold text-light-text dark:text-dark-text mb-1">
            Visual Asset Archive
          </div>
          <p className="text-xs text-light-muted dark:text-dark-muted max-w-sm">
            High-resolution artwork, poster compositions, and design studies can be previewed directly on the Google Sites design archive.
          </p>
        </div>

        {/* Tags & Action */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-light-border dark:border-dark-border">
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-[11px] font-mono border border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted"
              >
                #{tag}
              </span>
            ))}
          </div>

          <a
            href="https://sites.google.com/view/portfolio1adityaranjan/home?authuser=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline"
          >
            <span>Open in Design Portfolio</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
