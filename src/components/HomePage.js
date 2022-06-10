import React from 'react'
import Home from "../components/Home/Home.js";
import About from "../components/About/About.js"
import Project from "../components/Projects/Project.js"
import Contact from "../components/Contact/Contact.js"
const HomePage = () => {
  return (
    <div>
      <div className="ml-10 lg:ml-20 ">
          <Home />
          <About />
          <Project/>
          <Contact/>
        </div>
    </div>
  )
}

export default HomePage
