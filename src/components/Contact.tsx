"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight, Send } from "lucide-react";

export function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="py-28 px-6 sm:px-8 border-t border-light-border dark:border-dark-border/80">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Section Pill */}
        <div className="inline-flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest mb-4">
          <span className="w-6 h-px bg-accent"></span>
          <span>07 / Get In Touch</span>
          <span className="w-6 h-px bg-accent"></span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-light-text dark:text-dark-text max-w-2xl mb-5 leading-tight">
          Let&apos;s create something meaningful.
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg text-light-muted dark:text-dark-muted max-w-xl mb-10 leading-relaxed">
          I&apos;m always interested in connecting with people, exploring ideas, and working on interesting projects.
        </p>

        {/* Email Direct Interaction Box */}
        <div className="w-full max-w-lg p-2 sm:p-2.5 rounded-2xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface shadow-md flex flex-col sm:flex-row items-center gap-2 mb-8">
          <div className="flex items-center gap-3 px-4 py-2 text-sm font-mono text-light-text dark:text-dark-text flex-1 truncate w-full sm:w-auto">
            <Mail className="w-4 h-4 text-accent shrink-0" />
            <span className="truncate">{personal.email}</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={copyEmail}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card text-xs font-medium text-light-text dark:text-dark-text hover:border-accent hover:text-accent transition-colors"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-500">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${personal.email}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-accent text-white text-xs font-semibold hover:bg-accent-dark transition-all shadow-xs"
            >
              <span>Email Directly</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Social Profile Grid */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-xs font-medium text-light-text dark:text-dark-text hover:border-accent hover:text-accent transition-all"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-light-muted dark:text-dark-muted" />
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-xs font-medium text-light-text dark:text-dark-text hover:border-accent hover:text-accent transition-all"
          >
            <Linkedin className="w-4 h-4 text-accent" />
            <span>LinkedIn Network</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-light-muted dark:text-dark-muted" />
          </a>

          <a
            href={personal.googlePortfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-xs font-medium text-light-text dark:text-dark-text hover:border-accent hover:text-accent transition-all"
          >
            <span>Google Design Archive</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-light-muted dark:text-dark-muted" />
          </a>
        </div>

        {/* Closing Note */}
        <div className="pt-8 border-t border-light-border/60 dark:border-dark-border/60 w-full max-w-xs">
          <p className="font-serif italic text-base sm:text-lg text-light-muted dark:text-dark-muted">
            &ldquo;Thanks for stopping by.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}
