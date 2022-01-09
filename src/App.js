import './Styles/App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}



export default App;
