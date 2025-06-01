const Skills = () => {
  const skillCategories = {
    'Backend Development': [
      'Java', 'Spring Boot', 'Go', 'Gin', 'Fiber',
      'REST APIs', 'SQL', 'YAML'
    ],
    'DevOps & Cloud': [
      'AWS', 'Docker', 'Kubernetes', 'Terraform', 'Helm',
      'CI/CD', 'Monitoring'
    ],
    'System Design': [
      'Event Driven', 'Distributed Systems', 'API Design',
      'Microservices Architecture',
    ]
  };

  return (
    <div className="min-h-screen pb-32">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Skills & Expertise</h2>
      <div className="space-y-12">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <section key={category} className="space-y-6">
            <h3 className="text-xl font-semibold text-white">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-lg hover:bg-opacity-70 hover:text-emerald-400 transition-all cursor-default text-white backdrop-blur-sm"
                  style={{ backgroundColor: 'rgba(24, 24, 24, 0.7)' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Skills;