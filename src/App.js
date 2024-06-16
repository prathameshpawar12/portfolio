import NavBar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/contact";
import '../src/App.css'
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
function App() {
  useEffect(() => {
    Aos.init();
  
    
  }, [])
  
  return (
    <div className="App" >
      

          <NavBar/>
          <Intro/>
          <About/>
         <Portfolio/>
          <Skills/>
          <Contact/>
          
      
    </div>
  );
}

export default App;
