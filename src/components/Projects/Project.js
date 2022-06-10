import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext.js";
const Project = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const projects = [
    {
      name: "Marley Electronics",
      description:
        "Manufacturer website made with React, React Router, DaisyUI, Node.js, Express, MongoDB, Firebase Authentication. User can sign in / sign up and can order for product. Also secure payment system implemented with stripe. Admin can make admin any user, track order.",
      link: "https://marley-electronics.web.app",
    },
    {
      name: "Marley Electronics",
      description:
        "Manufacturer website made with React, React Router, DaisyUI, Node.js, Express, MongoDB, Firebase Authentication. User can sign in / sign up and can order for product. Also secure payment system implemented with stripe. Admin can make admin any user, track order.",
      link: "https://marley-electronics.web.app",
    },
    {
      name: "Marley Electronics",
      description:
        "Manufacturer website made with React, React Router, DaisyUI, Node.js, Express, MongoDB, Firebase Authentication. User can sign in / sign up and can order for product. Also secure payment system implemented with stripe. Admin can make admin any user, track order.",
      link: "https://marley-electronics.web.app",
    },
  ];
  return (
    <div className="mt-64 mb-30" id="project">
      <p className="text-5xl text-center mb-10">
        Some of my noteworthy projects
      </p>
      <div className="grid lg:grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-2 mr-10 mt-32">
        {projects.map((project, index) => (
          <div
            className={`p-6 max-w-sm  rounded-lg border  shadow-lg  dark: ${isDarkMode ? `text-black outline-white border-gray-200 shadow-white` : `text-white outline-gray-800 border-gray-700 shadow-black`}`}
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {project.name}
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {project.description}
            </p>
            <a
              href="https://marley-electronics.web.app"
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Details
              <svg
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
