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
```

---

## 🚀 Running Locally

1. **Clone or navigate to the directory**:
   ```bash
   cd /Users/adityaranjan/.gemini/antigravity/scratch/aditya-portfolio
   ```

2. **Install dependencies** (already pre-installed):
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

---

## ⚡ How to Update Your Content

You never need to touch complex layout code to update your info. Simply open:
👉 `src/data/portfolioData.ts`

- **Change Social / Contact Links**: Update `personal.email`, `personal.github`, `personal.linkedin`, or `personal.googlePortfolio`.
- **Add New Projects**: Append items into the `projects` array with title, tags, live URLs, and descriptions.
- **Update Skills**: Modify categories and tags under `skills`.
- **Add Artwork / Graphic Designs**: Append items to `creativeWorks` with categories, dates, and tags.

---

## 🌐 Deploying to Vercel (Step-by-Step)

### Step 1: Initialize Git and Push to GitHub

1. Open your terminal in the project directory:
   ```bash
   cd /Users/adityaranjan/.gemini/antigravity/scratch/aditya-portfolio
   git init
   git add .
   git commit -m "Initial commit: Aditya Ranjan personal portfolio"
   ```

2. Create a new repository on your GitHub account (`adityaranjandp28-web`) named `portfolio` (or `aditya-portfolio`).

3. Link and push to GitHub:
   ```bash
   git remote add origin https://github.com/adityaranjandp28-web/aditya-portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Import Project into Vercel

1. Go to [https://vercel.com](https://vercel.com) and log in with your GitHub account (`adityaranjandp28-web`).
2. Click **"Add New..."** → **"Project"**.
3. Under **"Import Git Repository"**, find and select `aditya-portfolio`.
4. In the configuration screen:
   - **Framework Preset**: Next.js (automatically detected)
   - **Root Directory**: `./` (leave default)
   - **Build Command**: `next build` (leave default)
   - **Output Directory**: `.next` (leave default)
5. Click **"Deploy"**.
6. In ~60 seconds, your site will be live with an SSL-secured URL like `https://aditya-portfolio.vercel.app`. Every time you push changes to `main`, Vercel will automatically redeploy!

### Step 3: Setting Up a Custom Domain (Optional)

1. In your Vercel project dashboard, navigate to **Settings** → **Domains**.
2. Enter your desired custom domain (e.g. `adityaranjan.dev` or `adityaranjan.tech`).
3. Follow the DNS instructions provided by Vercel (adding a CNAME record or A record at your domain registrar).
