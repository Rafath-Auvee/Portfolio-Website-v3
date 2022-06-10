import React from "react";
import Auvee from "../../assets/Rafath auvee.png";
const About = () => {
  return (
    <div className=" lg:py-52 lg:py-30 lg:px-0 mr-16" id="about">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={Auvee}
            alt="Rafath Bin Zafar Auvee"
            className="lg:max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Hello! </h1>
            <p className="py-6 lg:mr-32 mr-0  text-2xl">
              My name is Rafath Bin Zafar Auvee. An enthusiastic, self-taught,
              motivated programmer. I'm currently a final year student at
              Bangladesh Army University of Science and Technology. pursuing a
              degree in Computer Science and Engineering. For me, computer
              programming is love, passion, exploration & much more. I build
              things for the web.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
