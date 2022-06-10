import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext.js";
import { useNavigate } from 'react-router-dom';
const Project = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const projects = [
    {
      id: 1,
      name: "Marley Electronics",
      description:
        "Manufacturer website made with React, React Router, DaisyUI, Node.js, Express, MongoDB, Firebase Authentication. User can sign in / sign up and can order for product. Also secure payment system implemented with stripe. Admin can make admin any user, track order.",
      link: "https://marley-electronics.web.app",
      tools_used: ['ReactJS','ExpressJS','NodeJS', 'Firebase','MongoDB','React-Toast','Stripe'],
      img1: "https://i.ibb.co/4mMpQSJ/image.png",
      img2: "https://i.ibb.co/NsWzjvj/image.png",
      img3: "https://i.ibb.co/jWb2kR5/image.png",
    },
    {
      id: 2,
      name: "Paratronics Warehouse Solution",
      description:
        "Inventory Website, Full stack website where we used to keep records of our products and suppliers can request for product and order. Fully dynamic made with React, React Router, MongoDB, Express, Bootstrap, Tailwind CSS, Node.js, Firebase Authentication. User can decrement the order quantity or increase vice versa and also add, delete and update product.",
      link: "https://paratronics-2213d.web.app",
      tools_used: ['ReactJS','ExpressJS','NodeJS', 'Firebase','MongoDB','React-Toast','Stripe'],
      img1: "https://i.ibb.co/6P0jPkK/image.png",
      img2: "https://i.ibb.co/ZXC2s20/image.png",
      img3: "https://i.ibb.co/YRzTBHf/image.png",
    },
    {
      id: 3,
      name: "Paradis Island Electronic Shop",
      description:
        "Paradis Island Electronic Shop. A beautiful landing page made react and react router dom",
      link: "https://auvee-assignment-9.netlify.app",
      tools_used: ['ReactJS','ExpressJS','NodeJS', 'Firebase'],
      img1: "https://i.ibb.co/gP6q5zR/image.png",
      img2: "https://i.ibb.co/tXspvXB/image.png",
      img3: "https://i.ibb.co/LPktHks/image.png",
    },
    
  ];
  const navigate = useNavigate();


  const navigateToUpdate = id =>{
      navigate(`/projectdescription/${id}`);
  }
  return (
    <div className="mt-64 mb-30" id="project">
      <p className="text-5xl text-center mb-10">
        Some of my noteworthy projects
      </p>
      <div className="grid lg:grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-2 mr-10 mt-32">
        {projects.map((project, index) => (
          // <div
          //   className={`p-6 max-w-sm  rounded-lg border  shadow-lg  dark: ${isDarkMode ? `text-black outline-white border-gray-200 shadow-white` : `text-white outline-gray-800 border-gray-700 shadow-black`}`}></div>
          <div className={`card card-compact p-6 max-w-sm  rounded-lg border  shadow-lg  dark: ${isDarkMode ? `text-white outline-white border-white shadow-white` : "text-black outline-black border-black shadow-black"}`}>
            <figure>
              <img
                src={project.img1}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              <div className="card-actions justify-end">
              <button className={`btn btn-outline btn-md mb-3 hover:shadow-lg  ${isDarkMode ? 'hover:bg-white hover:shadow-white hover:text-black ease-in duration-300 ' : 'hover:bg-black hover:text-white ease-in duration-300 hover:shadow-black '}`} onClick={() => navigateToUpdate(project.id)} >Detail</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
