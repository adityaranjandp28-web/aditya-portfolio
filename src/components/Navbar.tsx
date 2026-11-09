"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { portfolioData } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Creative", href: "#creative" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-light-bg/80 dark:bg-dark-bg/85 backdrop-blur-md border-b border-light-border dark:border-dark-border py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Monogram Brand */}
        <Link
          href="#"
          className="group flex items-center gap-2.5 text-light-text dark:text-dark-text transition-transform active:scale-95"
        >
          <div className="w-9 h-9 rounded-md bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border flex items-center justify-center font-mono text-xs font-semibold tracking-wider text-accent group-hover:border-accent transition-colors shadow-sm">
            {portfolioData.personal.monogram}
          </div>
          <span className="font-medium tracking-tight text-sm hidden sm:inline-block group-hover:text-accent transition-colors">
            {portfolioData.personal.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-light-surface/70 dark:bg-dark-surface/60 border border-light-border dark:border-dark-border px-3 py-1.5 rounded-full backdrop-blur-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-150 ${
                  isActive
                    ? "text-accent bg-accent/10 font-semibold"
                    : "text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Actions (Resume & Theme Toggle) */}
        <div className="flex items-center gap-2.5">
          <a
            href={portfolioData.personal.googlePortfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-light-muted dark:text-dark-muted hover:text-accent dark:hover:text-accent px-2.5 py-1.5 rounded-md hover:bg-neutral-200/40 dark:hover:bg-neutral-800/40 transition-colors"
          >
            Design Portfolio
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface px-6 py-5 shadow-xl transition-all">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium rounded-md text-light-text dark:text-dark-text hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-3 border-t border-light-border dark:border-dark-border flex flex-col gap-2">
              <a
                href={portfolioData.personal.googlePortfolio}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-between px-3 py-2 text-xs font-medium text-accent bg-accent/10 rounded-md"
              >
                <span>View Google Sites Design Portfolio</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
