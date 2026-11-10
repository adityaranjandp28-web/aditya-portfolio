# Aditya Ranjan — Personal Portfolio

A production-ready personal portfolio website for **Aditya Ranjan**, aspiring AI/ML developer, UI/UX enthusiast, and Computer Science Engineering student at Bennett University (2026–2030).

Built with a monochrome foundation, electric blue accents, and an editorial layout representing the intersection of **Technology, Intelligence, and Creativity**.

---

## 🎨 Design Philosophy & Features

- **Monochrome Foundation & Electric Blue**: High-contrast, minimal aesthetic (#111318 dark, #F5F5F5 light, #2563EB electric blue accent).
- **Subtle Computational Background**: Lightweight canvas particle constellation simulating neural network topology with gentle cursor attraction.
- **Hero Presentation**: Architectural profile photo frame featuring Aditya's photo, availability indicator, smooth CTA buttons, and quick links.
- **Authentic Skills Hierarchy**: Clear distinction between *Core Focus*, *Developing Proficiency*, and *Active Exploration* across Programming, AI & Data, Design, and Tools (no fake percentage bars).
- **Featured Project Showcase**: Dedicated interactive preview for **Spotting the At Risk – Interactive Dashboard** with live indicators, dataset highlights, and external demo/GitHub links.
- **Creative Archive & Lightbox**: Editorial gallery for graphic design, UI/UX concepts, and posters, complete with a detail inspection modal and link to the Google Sites portfolio.
- **Personal World & Journey**: Authentic education records (Bennett University, St. Michael's High School), Microsoft Hackathon activities, and hobbies (Gaming & Art).
- **Light & Dark Mode**: Persistent theme toggle with zero-flash client initialization.
- **Centralized Data**: All content, projects, bio details, and links are managed in a single file (`src/data/portfolioData.ts`).

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 18, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Inter (Google Fonts via Next.js Font Optimization)
- **Deployment Ready**: Optimized for [Vercel](https://vercel.com/) with zero extra config

---

## 📁 Project Structure

```
aditya-portfolio/
├── public/
│   └── images/
│       └── aditya.jpg            # Profile photo
├── src/
│   ├── app/
│   │   ├── globals.css           # Tailwind directives, animations & custom scrollbars
│   │   ├── layout.tsx            # Metadata, OpenGraph, theme bootstrap & Inter font
│   │   └── page.tsx              # Clean compositional single-page layout
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky header, monogram, scrollspy & mobile menu
│   │   ├── ThemeToggle.tsx       # Dark/light switcher with localStorage persistence
│   │   ├── NeuralBackground.tsx  # Generative interactive canvas neural network
│   │   ├── Hero.tsx              # Editorial intro, status badge, CTA & photo frame
│   │   ├── About.tsx             # Narrative, Bennett Univ. standing & philosophy
│   │   ├── Skills.tsx            # 4 category matrices with authentic level badges
│   │   ├── Projects.tsx          # Featured Power BI dashboard preview & pipeline
│   │   ├── CreativeGallery.tsx   # Asymmetric visual design gallery
│   │   ├── LightboxModal.tsx     # Inspection modal for creative artworks
│   │   ├── Hobbies.tsx           # Gaming & Art dimensions
│   │   ├── Education.tsx         # Bennett Univ, St. Michael's & Hackathon activities
│   │   ├── Contact.tsx           # Direct email copy, mailto & social channels
│   │   └── Footer.tsx            # Monogram copyright, back-to-top & tech credits
│   ├── data/
│   │   └── portfolioData.ts      # ⚡ Centralized data file (edit everything here!)
│   └── lib/
│       └── utils.ts              # Class name merger helper
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
