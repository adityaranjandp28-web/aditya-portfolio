import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya Ranjan | Aspiring AI/ML Developer & UI/UX Enthusiast",
  description:
    "Personal portfolio of Aditya Ranjan — Computer Science student at Bennett University exploring artificial intelligence, machine learning, data analytics, and visual UI/UX design.",
  keywords: [
    "Aditya Ranjan",
    "Bennett University",
    "AI/ML Developer",
    "UI/UX Design",
    "Visual Designer",
    "Power BI Dashboard",
    "Portfolio",
    "Computer Science",
  ],
  authors: [{ name: "Aditya Ranjan" }],
  creator: "Aditya Ranjan",
  metadataBase: new URL("https://aditya-ranjan.vercel.app"),
  openGraph: {
    title: "Aditya Ranjan | Aspiring AI/ML Developer & UI/UX Enthusiast",
    description:
      "Explore the intersection of intelligent technology and creative design. Featured projects, skills, and creative archive.",
    url: "https://aditya-ranjan.vercel.app",
    siteName: "Aditya Ranjan Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Ranjan | Aspiring AI/ML Developer & UI/UX Enthusiast",
    description:
      "Explore the intersection of intelligent technology and creative design.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F5F5" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0f14" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Anti-flash inline script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
        {/* Web font link for client-side loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
