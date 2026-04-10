const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Full-featured online store with shopping cart and checkout. Includes user authentication.",
      tech: ["React", "SEO", "React-router", "Redux"],
      icon: "🛒",
      link: "https://github.com/Abdullah-Affef/Ecommerce-App-ReactJS",
    },
    {
      title: "Portfolio",
      description: "Simple portfolio website as a final test",
      tech: ["Tailwindcss", "React-icons", "React"],
      icon: "📋",
      link: "https://github.com/Abdullah-Affef/U-FDR-2503-final-test",
    },
    {
      title: "Insurance Landing Page",
      description:
        "Modern landing page with light theme, smooth animations, and fully responsive design.",
      tech: ["React", "Vite", "Tailwind CSS"],
      icon: "🎨",
      link: "https://github.com/Abdullah-Affef/React-project-insurance",
    },
    {
      title: "API authentication",
      description: "Dashboard level API authentication",
      tech: ["React", "API", "Integration"],
      icon: "🔒",
      link: "https://github.com/Abdullah-Affef/functional-sign-up-using-freeAPI.app",
    },
    {
      title: "Scooter Landing page",
      description:
        "Simple landing page for a scooter company with proper styling and modules.",
      tech: ["HTML5", "CSS3", "Javascript(ES6+)"],
      icon: "📱",
      link: "https://github.com/Abdullah-Affef/E-scooter",
    },
    {
      title: "Furniture Home page",
      description: "My very first project",
      tech: ["CSS3", "HTML5"],
      icon: "📊",
      link: "https://github.com/Abdullah-Affef/Furniture_home_page-CIT",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Some of the projects I've worked on
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
                >
                  View Project
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;