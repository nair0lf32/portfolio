import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <main>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      </main>
      <footer>
      <Contact />
      </footer>
    </div>
  );
}
