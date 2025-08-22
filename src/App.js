import "./App.css";
import Header from "./components/Header";
import Stats from "./components/Stats";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <div className="hex-pattern"></div>
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <Header />
      <Stats />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
