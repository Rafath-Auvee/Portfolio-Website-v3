import React from "react";

import { useParams } from "react-router-dom";
const ProjectDetail = () => {
  const { id } = useParams();
  console.log(id);
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
  const project = projects.find((project) => project.id >= id);
  return (
    <div class="hero min-h-screen bg-base-200 container lg:mx-auto my-6 py-6 rounded">
      <div class="grid lg:grid-cols-2">
        <div class="carousel w-full m-3 rounded-xl">
          <div id="slide1" class="carousel-item relative w-full">
            <img src={project.img1} alt="" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" class="carousel-item relative w-full">
            <img src={project.img2} alt="" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" class="carousel-item relative w-full">
            <img src={project.img3} alt="" class="w-full" />
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div className="lg:px-5">
          <h1 class="text-5xl font-bold">{project.name}</h1>
          <p class="py-6">{project.description}</p>
          <h1 class="text-3xl text-center font-bold mb-7">Tools I've used</h1>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
            {project.tools_used.map((tool) => (
              
                <div className="badge badge-outline hover:shadow-lg hover:shadow-green-700">{tool}</div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
