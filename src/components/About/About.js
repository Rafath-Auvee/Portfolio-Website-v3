import React from "react";
import Auvee from "../../assets/Rafath auvee.png";
const About = () => {
  return (
    <div className=" pt-52 pb-30">
      <div class="flex justify-evenly items-center" id="about">
        <div>
          <p className="text-1xl w-1/2 ml-20">
            Hello! My name is Rafath Bin Zafar Auvee. An enthusiastic,
            self-taught, motivated programmer. I'm currently a final year
            student at Bangladesh Army University of Science and Technology.
            pursuing a degree in Computer Science and Engineering. For me,
            computer programming is love, passion, exploration & much more. I
            build things for the web.
          </p>
        </div>
        <div>
          <img className="w-1/2 rounded-lg" src={Auvee} alt="Rafath Bin Zafar Auvee" />
        </div>
      </div>
    </div>
  );
};

export default About;
