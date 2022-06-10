import React from "react";
import Auvee from "../../assets/Rafath auvee.png";
const About = () => {
  return (
    <div className=" lg:py-52 lg:py-30 lg:px-0 px-10">
      <div className="grid grid-row-reverse lg:grid-cols-2 sm:grid-cols-1 items-center" id="about">
        <div>
          <img className="w-60 order-1 rounded-lg" src={Auvee} alt="Rafath Bin Zafar Auvee" />
        </div>
        <div>
          <p className="text-3xl w-50 ">
            Hello! My name is Rafath Bin Zafar Auvee. An enthusiastic,
            self-taught, motivated programmer. I'm currently a final year
            student at Bangladesh Army University of Science and Technology.
            pursuing a degree in Computer Science and Engineering. For me,
            computer programming is love, passion, exploration & much more. I
            build things for the web.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
