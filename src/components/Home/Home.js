import React, {useContext} from "react";
import Typewriter from "typewriter-effect";
import { ThemeContext } from "../../context/ThemeContext.js";
const Home = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  return (
    <div id="home" className={`mt-40 my-36`}>
      <p className="text-3xl mb-3">Hi I am,</p>
      <p className="text-5xl mb-3 ...">Rafath Bin Zafar Auvee</p>
      <p className="text-5xl mb-5">

      <Typewriter 
        onInit={(typewriter) => {
          typewriter
            .typeString("Full Stack Web Developer")
            .pauseFor(2500)
            .start();
        }}
      />
      </p>
      <a href="mailto:rafath.auvee@gmail.com" className={`btn btn-outline btn-lg mb-3 hover:shadow-lg  ${isDarkMode ? 'hover:bg-white hover:shadow-white hover:text-black ease-in duration-300 ' : 'hover:bg-black hover:text-white ease-in duration-300 hover:shadow-black '}`}>Say Hello! 👋🏻</a>
    </div>
  );
};

export default Home;
