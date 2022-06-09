import React, {useContext} from "react";
import Typewriter from "typewriter-effect";
import { ThemeContext } from "../../context/ThemeContext.js";
const Home = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  return (
    <div id="home" className={`mt-40`}>
      <p class="text-3xl mb-3">Hi I am,</p>
      <p class="text-5xl mb-3 ...">Rafath Bin Zafar Auvee</p>
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
      <button class="btn btn-outline hover:bg-success hover:duration-300 mb-3">Say Hello! 👋🏻</button>
    </div>
  );
};

export default Home;
