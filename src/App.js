
import "./App.css";
import {  useState } from "react";
import Header from "./components/Header/Header.js";
import { ThemeContext } from "./context/ThemeContext.js";
import HomePage from "./components/HomePage.js"
import ProjectDetail from "./components/Projects/ProjectDetail.js"
import {
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <div className={`${isDarkMode ? 'bg-black text-white ease-in duration-300 ' : 'bg-gray-100 text-black ease-in duration-300 '}`}>
        <Header />
        <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/projectdescription/:id' element={<ProjectDetail/>}/>
        {/* <Route path='/blog' element={<Blog/>}/> */}
        </Routes>
      </div>
    
    </ThemeContext.Provider>

  );
}

export default App;
