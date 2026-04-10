const About = () => {
  const highlights = [
    { icon: '🎯', text: '5+ Years Experience' },
    { icon: '🚀', text: '30+ Projects Completed' },
    { icon: '💡', text: 'Creative Problem Solver' },
    { icon: '🤝', text: 'Team Collaborator' },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm a dedicated <span className="text-cyan-400">Frontend Developer</span> with a passion for building 
              intuitive, responsive, and visually appealing web applications. With expertise in modern JavaScript 
              frameworks and a keen eye for design, I strive to create seamless user experiences.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              My journey in web development started 5 years ago, and since then I've worked on numerous projects 
              ranging from simple landing pages to complex web applications. I specialize in React, Vue.js, 
              and modern CSS frameworks to bring ideas to life.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, 
              or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-700/50 p-6 rounded-xl hover:border-cyan-500/50 transition-colors duration-300"
              >
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <p className="text-white font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;