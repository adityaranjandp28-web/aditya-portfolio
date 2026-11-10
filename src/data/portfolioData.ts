export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription?: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  status: "Completed" | "In Development" | "Concept";
  highlights?: string[];
}

export interface CreativeItem {
  id: string;
  title: string;
  category: "Graphic Design" | "UI/UX Concept" | "Poster Art" | "Visual Composition";
  description: string;
  date: string;
  tags: string[];
  image?: string;
  aspect: "portrait" | "landscape" | "square";
  link?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: "Core Focus" | "Developing Proficiency" | "Active Exploration";
    note?: string;
  }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  details: string[];
  badge?: string;
}

export interface ActivityItem {
  role: string;
  organization: string;
  period: string;
  description: string;
  tags: string[];
}

export const portfolioData = {
  personal: {
    name: "Aditya Ranjan",
    monogram: "AR",
    tagline: "Hey, I'm Aditya Ranjan.",
    role: "Aspiring AI/ML Developer & UI/UX Enthusiast",
    headline: "An aspiring AI/ML developer with a passion for UI/UX and visual design.",
    summary:
      "I explore the intersection of intelligent technology and creative design, building experiences that are functional, intuitive, and visually meaningful.",
    aboutParagraphs: [
      "I'm a Computer Science Engineering student at Bennett University, exploring the world of artificial intelligence, machine learning, and software development.",
      "Beyond programming, I have a strong interest in UI/UX and visual design. I enjoy understanding how technology and creativity can come together to create meaningful digital experiences.",
      "I'm constantly learning, experimenting, and turning ideas into projects.",
    ],
    availability: "Available for internships & collaborations",
    location: "Patna, Bihar & Bennett University (Greater Noida), India",
    email: "adityaranjandp28@gmail.com",
    github: "https://github.com/adityaranjandp28-web",
    linkedin: "https://www.linkedin.com/in/aditya-ranjan-393",
    googlePortfolio: "https://sites.google.com/view/portfolio1adityaranjan/home?authuser=1",
    resumePdf: "./Aditya_Ranjan_Resume.pdf",
    profileImage: "/images/aditya.jpg",
  },

  skills: [
    {
      category: "Programming & Development",
      description: "Core programming languages and web fundamentals used to build software applications.",
      skills: [
        { name: "Python", level: "Core Focus", note: "Primary language for algorithmic problem-solving & ML experimentation" },
        { name: "C++", level: "Core Focus", note: "Data structures, OOP, and computational logic" },
        { name: "HTML5", level: "Core Focus", note: "Semantic structure & web accessibility" },
        { name: "CSS3", level: "Core Focus", note: "Responsive layouts, Tailwind, and modern styling" },
        { name: "JavaScript", level: "Developing Proficiency", note: "DOM manipulation and modern ES6+ interactivity" },
      ],
    },
    {
      category: "AI & Data",
      description: "Analytical tools and machine learning domains I am actively exploring and applying.",
      skills: [
        { name: "Power BI", level: "Core Focus", note: "Interactive dashboard development, KPI modeling & reporting" },
        { name: "Data Analytics", level: "Core Focus", note: "Interpreting performance metrics & identifying actionable trends" },
        { name: "Artificial Intelligence", level: "Active Exploration", note: "Core AI concepts, problem formulations, and modern architectures" },
        { name: "Machine Learning", level: "Active Exploration", note: "Predictive models, classification, and statistical methods" },
      ],
    },
    {
      category: "Design",
      description: "Crafting visually refined, user-centered digital artifacts and brand identities.",
      skills: [
        { name: "UI/UX Design", level: "Core Focus", note: "Wireframing, user flows, and intuitive layout hierarchy" },
        { name: "Visual Design", level: "Core Focus", note: "Editorial composition, typography, and contrast balancing" },
        { name: "Graphic Design", level: "Core Focus", note: "Event identity, digital poster design, and visual assets" },
        { name: "Presentation Design", level: "Core Focus", note: "Structured pitch decks and technical visual communication" },
      ],
    },
    {
      category: "Tools",
      description: "Software and version-control workflows that support daily development.",
      skills: [
        { name: "Git", level: "Core Focus", note: "Source versioning, branching, and commit management" },
        { name: "GitHub", level: "Core Focus", note: "Collaborative repos, GitHub Pages deployment, and project tracking" },
        { name: "VS Code", level: "Core Focus", note: "Customized development environment and extensions" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "spotting-the-at-risk",
      title: "Spotting the At Risk – Interactive Dashboard",
      subtitle: "Performance & Academic Risk Analytics",
      description:
        "An interactive analytics dashboard designed to identify at-risk students and employees through performance indicators, attendance, academic data, and other measurable factors.",
      detailedDescription:
        "Developed to translate dense institutional datasets into clear visual summaries. By consolidating academic metrics, attendance benchmarks, and behavioral flags into real-time KPI cards, stakeholders can spot early warning indicators and intervene proactively.",
      tags: ["Power BI", "Data Analytics", "Performance Metrics", "Interactive Dashboards"],
      liveUrl: "https://adityaranjandp28-web.github.io/Power-Bi-dashboard/",
      githubUrl: "https://github.com/adityaranjandp28-web",
      featured: true,
      status: "Completed",
      highlights: [
        "Interactive KPI metric cards for real-time risk assessment",
        "Multi-dimensional drill-downs across attendance and grade distributions",
        "Clean, human-centered visual data architecture",
        "Deployed publicly via GitHub Pages",
      ],
    },
    {
      id: "neural-creative-exploration",
      title: "AI-Augmented Creative Studio (Concept)",
      subtitle: "Exploratory Interface & Generative Canvas",
      description:
        "An experimental project exploring how client-side algorithmic intelligence can assist visual designers with palette harmony, layout balances, and generative graphic compositions.",
      tags: ["AI/ML Exploration", "UI/UX Experiment", "Python / Web", "Creative Coding"],
      featured: false,
      status: "In Development",
      highlights: [
        "Investigating algorithmic color balance and layout symmetry",
        "Exploring lightweight machine learning models for design recommendations",
        "Clean monochrome UI prototype",
      ],
    },
  ] as Project[],

  creativeWorks: [
    {
      id: "creative-01",
      title: "Academic & Institutional Identity",
      category: "Graphic Design",
      description: "Visual identity, poster series, and collateral designed for campus initiatives and student-led events.",
      date: "2024",
      tags: ["Poster Art", "Typography", "Editorial"],
      aspect: "portrait",
    },
    {
      id: "creative-02",
      title: "Performance Analytics UI Concept",
      category: "UI/UX Concept",
      description: "High-contrast minimalist interface study for academic dashboards focusing on readability and data density.",
      date: "2024",
      tags: ["UI/UX", "Dashboard", "Figma/Wireframes"],
      aspect: "landscape",
    },
    {
      id: "creative-03",
      title: "Digital Form & Composition Study",
      category: "Visual Composition",
      description: "Exploration in geometric abstraction, negative space, and typographic tension across digital media.",
      date: "2024",
      tags: ["Abstract", "Geometry", "Monochrome"],
      aspect: "square",
    },
    {
      id: "creative-04",
      title: "Event & Stall Creative Collateral",
      category: "Graphic Design",
      description: "Print and digital promotional banners designed for high visual impact in busy collegiate environments.",
      date: "2024",
      tags: ["Branding", "Event Design", "Visuals"],
      aspect: "portrait",
    },
  ] as CreativeItem[],

  hobbies: [
    {
      id: "gaming",
      title: "Gaming & Virtual Worlds",
      tagline: "Appreciating craft, mechanics, and spatial design",
      description:
        "I enjoy gaming, exploring immersive worlds, and appreciating the creativity behind game environments, mechanics, and storytelling.",
      aspects: [
        "Environmental storytelling & atmospheric world-building",
        "Interactive feedback loops and interface HUD aesthetics",
        "Analyzing pacing and game design mechanics",
      ],
      icon: "Gamepad2",
    },
    {
      id: "art",
      title: "Art & Visual Creativity",
      tagline: "Exploring expression beyond digital screens",
      description:
        "I enjoy artistic expression, experimenting with visual styles, and exploring creativity beyond technology.",
      aspects: [
        "Graphic composition, proportions, and negative space",
        "Experimenting with visual harmony and editorial styling",
        "Drawing inspiration from modern architecture and minimalism",
      ],
      icon: "Palette",
    },
  ],

  education: [
    {
      institution: "Bennett University",
      degree: "Bachelor of Technology — Computer Science and Engineering",
      period: "2026 – 2030 (Expected)",
      location: "Greater Noida, Uttar Pradesh, India",
      badge: "Current Undergraduate",
      details: [
        "Coursework in Object-Oriented Programming, Data Structures, and Foundations of Artificial Intelligence.",
        "Active member of campus technical and creative student societies.",
        "Focusing on the convergence of machine learning systems and human-computer interaction.",
      ],
    },
    {
      institution: "St. Michael's High School",
      degree: "Secondary Schooling (Classes I–X)",
      period: "Completed",
      location: "Patna, Bihar, India",
      badge: "Class X: 92%",
      details: [
        "Graduated with a strong academic distinction of 92% in Class X board examinations.",
        "Led multiple school creative design, poster-making, and presentation initiatives.",
      ],
    },
  ] as EducationItem[],

  activities: [
    {
      role: "Hackathon Participant",
      organization: "Microsoft-Organized Hackathon",
      period: "Collaborative Project",
      description:
        "Participated in a Microsoft-organized hackathon and contributed to building a project. Project work included developing a data-focused dashboard concept and presenting data findings.",
      tags: ["Hackathon", "Data Visualization", "Teamwork", "Dashboard"],
    },
    {
      role: "Creative & Design Contributor",
      organization: "College Technical & Event Initiatives",
      period: "Ongoing",
      description:
        "Engaged in college technology and creative activities, including visual concepts, promotional collateral, and design work for student clubs and event initiatives.",
      tags: ["Visual Design", "Creative Direction", "Community"],
    },
  ] as ActivityItem[],
};
