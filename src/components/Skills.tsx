import { Database, Cloud, Server, Code, FileCode, Workflow, GitBranch, LayoutGrid, Boxes, FileJson, Network, HardDrive } from 'lucide-react';

const Skills = () => {
  const skillCategories = {
    'Backend Development': [
      { name: 'Java', icon: <FileCode className="w-5 h-5 mr-2" /> },
      { name: 'Spring Boot', icon: <Server className="w-5 h-5 mr-2" /> },
      { name: 'Go', icon: <Code className="w-5 h-5 mr-2" /> },
      { name: 'Gin', icon: <FileCode className="w-5 h-5 mr-2" /> },
      { name: 'Fiber', icon: <Network className="w-5 h-5 mr-2" /> },
      { name: 'REST APIs', icon: <Network className="w-5 h-5 mr-2" /> },
      { name: 'SQL', icon: <Database className="w-5 h-5 mr-2" /> },
      { name: 'YAML', icon: <FileJson className="w-5 h-5 mr-2" /> }
    ],
    'DevOps & Cloud': [
      { name: 'AWS', icon: <Cloud className="w-5 h-5 mr-2" /> },
      { name: 'Docker', icon: <Boxes className="w-5 h-5 mr-2" /> },
      { name: 'Kubernetes', icon: <HardDrive className="w-5 h-5 mr-2" /> },
      { name: 'Terraform', icon: <LayoutGrid className="w-5 h-5 mr-2" /> },
      { name: 'Helm', icon: <Server className="w-5 h-5 mr-2" /> },
      { name: 'CI/CD', icon: <GitBranch className="w-5 h-5 mr-2" /> },
      { name: 'Monitoring', icon: <LayoutGrid className="w-5 h-5 mr-2" /> }
    ],
    'System Design': [
      { name: 'Event Driven', icon: <Workflow className="w-5 h-5 mr-2" /> },
      { name: 'Distributed Systems', icon: <Network className="w-5 h-5 mr-2" /> },
      { name: 'API Design', icon: <Code className="w-5 h-5 mr-2" /> },
      { name: 'Microservices Architecture', icon: <Boxes className="w-5 h-5 mr-2" /> }
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
                  key={skill.name}
                  className="px-4 py-2 rounded-lg hover:bg-opacity-70 hover:text-emerald-400 transition-all cursor-default text-white backdrop-blur-sm flex items-center"
                  style={{ backgroundColor: 'rgba(24, 24, 24, 0.7)' }}
                >
                  {skill.icon}
                  {skill.name}
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