import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Topbar from "./components/topbar/TopBar";
import Menu from "./components/menu/Menu";
import { useState } from "react";
// import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* <ParticlesBackground /> */}
      <Navbar />
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
