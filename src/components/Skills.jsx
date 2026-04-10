const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: '💻',
      skills: ['JavaScript (ES6+)', 'JSX', 'HTML5', 'CSS3',],
    },
    {
      title: 'Frameworks',
      icon: '⚛️',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Redux'],
    },
    {
      title: 'Tools & Tech',
      icon: '🛠️',
      skills: ['Git & GitHub', 'Vite', 'Webpack', 'REST APIs', 'Figma'],
    },
    {
      title: 'Other Skills',
      icon: '✨',
      skills: ['Responsive Design', 'UI/UX', 'Performance', 'SEO', 'Testing'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-slate-400 flex items-center">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;