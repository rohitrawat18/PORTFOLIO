import Navbar from "./components/Navbar";
import Contact from "./sections/Contact";
import About from "./sections/About";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Project from "./sections/Project";
import Experience from "./sections/Experience";
import Testimonial from "./sections/testimonial";
import Footer from "./sections/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import CustomCursor from "./components/CustomCursor"; // Add this

export default function App() {
  return (
    <div className="relative gradient text-white">
      {/*<ParticlesBackground />*/}
      <CustomCursor />

      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Experience />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}