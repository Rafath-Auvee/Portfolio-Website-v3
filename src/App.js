import logo from "./logo.svg";
import "./App.css";
import { createContext, useState } from "react";
import DarkModeToggle from "./components/Utilities/DarkModeToggle.js";
import Header from "./components/Header/Header.js";
import { ThemeContext } from "./context/ThemeContext.js";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js"
import Project from "./components/Projects/Project.js"
import Contact from "./components/Contact/Contact.js"
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <div className={`${isDarkMode ? 'bg-black text-white ease-in duration-300 ' : 'bg-gray-100 text-black ease-in duration-300 '}`}>
        <Header />
        <div className="ml-10 lg:ml-20 ">
          <Home />
          <About/>
          <Project/>
          <Contact/>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
