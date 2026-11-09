import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { NeuralBackground } from "@/components/NeuralBackground";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { CreativeGallery } from "@/components/CreativeGallery";
import { Hobbies } from "@/components/Hobbies";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text selection:bg-accent selection:text-white transition-colors duration-300">
      {/* Background Neural / Computational Canvas */}
      <NeuralBackground />

      {/* Fixed Navigation Header */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CreativeGallery />
        <Hobbies />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
