import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Awards from "./components/Awards";

function App() {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Awards />
      <Contact />
    </Layout>
  );
}

export default App;
