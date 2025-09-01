// Components
import About from "./Components/About";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
