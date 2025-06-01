import { Database, Cloud, Server, Code, FileCode, Workflow, GitBranch, LayoutGrid, Boxes, FileJson, Network, HardDrive, Award, BookOpen, BadgeCheck } from 'lucide-react';

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
    ],
    'Certifications': [
      { name: 'AWS Certified Solutions Architect', icon: <BadgeCheck className="w-5 h-5 mr-2" /> },
      { name: 'AWS Certified Developer', icon: <BadgeCheck className="w-5 h-5 mr-2" /> },
      { name: 'Kubernetes Administrator (CKA)', icon: <Award className="w-5 h-5 mr-2" /> },
      { name: 'Java Professional', icon: <BookOpen className="w-5 h-5 mr-2" /> }
    ]
  };

  return (
    <div className="min-h-screen pb-32">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Skills & Certifications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <section key={category} className="rounded-xl p-6 glass-effect backdrop-blur-md transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10" style={{ backgroundColor: 'rgba(24, 24, 24, 0.7)' }}>
            <h3 className="text-xl font-semibold text-white mb-6 border-b border-emerald-500/30 pb-2">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-4 py-2 rounded-lg hover:bg-emerald-500/10 hover:text-emerald-400 transition-all duration-300 cursor-default text-white flex items-center"
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