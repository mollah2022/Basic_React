import React from "react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Travel Website",
      desc: "A responsive travel and tour booking website built with HTML, CSS, and React.",
      img: "https://source.unsplash.com/600x400/?travel",
    },
    {
      id: 2,
      title: "E-commerce Store",
      desc: "Full-featured e-commerce platform using MERN stack with product filters and cart.",
      img: "https://source.unsplash.com/600x400/?shopping",
    },
    {
      id: 3,
      title: "Quiz App",
      desc: "Interactive online quiz application using JavaScript DOM and React.",
      img: "https://source.unsplash.com/600x400/?quiz",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 min-h-screen p-8 flex justify-center items-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          💼 My Portfolio
        </h2>

        <p className="text-center text-gray-100 mb-10 text-lg">
          Some of my favorite projects built with ❤️ passion and modern web
          technologies.
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.desc}</p>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300">
                  View Details 🔍
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
