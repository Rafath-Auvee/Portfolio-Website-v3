import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext.js";
import { useNavigate } from 'react-router-dom';
const Project = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const projects = [
    {
      id:1,
      name: "Marley Electronics",
      description:
        "Manufacturer website made with React, React Router, DaisyUI, Node.js, Express, MongoDB, Firebase Authentication. User can sign in / sign up and can order for product. Also secure payment system implemented with stripe. Admin can make admin any user, track order.",
      link: "https://marley-electronics.web.app",
    },
    {
      id:2,
      name: "Marley Electronics",
      description:
        "Manufacturer website made with React, React Router, DaisyUI, Node.js, Express, MongoDB, Firebase Authentication. User can sign in / sign up and can order for product. Also secure payment system implemented with stripe. Admin can make admin any user, track order.",
      link: "https://marley-electronics.web.app",
    },
    {
      id:3,
      name: "Marley Electronics",
      description:
        "Manufacturer website made with React, React Router, DaisyUI, Node.js, Express, MongoDB, Firebase Authentication. User can sign in / sign up and can order for product. Also secure payment system implemented with stripe. Admin can make admin any user, track order.",
      link: "https://marley-electronics.web.app",
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
                src="https://api.lorem.space/image/shoes?w=400&h=225"
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
