import { Database, Cloud, Server, Code, FileCode, Workflow, GitBranch, LayoutGrid, Boxes, FileJson, Network, HardDrive, Award, BookOpen, BadgeCheck } from 'lucide-react';
import { useState, useEffect } from 'react';

const Skills = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skillCategories = {
    'Backend Development': [
      { name: 'Java', icon: <FileCode className="w-4 h-4 mr-2" /> },
      { name: 'Spring Boot', icon: <Server className="w-4 h-4 mr-2" /> },
      { name: 'Go', icon: <Code className="w-4 h-4 mr-2" /> },
      { name: 'Gin', icon: <FileCode className="w-4 h-4 mr-2" /> },
      { name: 'Fiber', icon: <Network className="w-4 h-4 mr-2" /> },
      { name: 'REST APIs', icon: <Network className="w-4 h-4 mr-2" /> },
      { name: 'SQL', icon: <Database className="w-4 h-4 mr-2" /> },
      { name: 'YAML', icon: <FileJson className="w-4 h-4 mr-2" /> }
    ],
    'DevOps & Cloud': [
      { name: 'AWS', icon: <Cloud className="w-4 h-4 mr-2" /> },
      { name: 'Docker', icon: <Boxes className="w-4 h-4 mr-2" /> },
      { name: 'Kubernetes', icon: <HardDrive className="w-4 h-4 mr-2" /> },
      { name: 'Terraform', icon: <LayoutGrid className="w-4 h-4 mr-2" /> },
      { name: 'Helm', icon: <Server className="w-4 h-4 mr-2" /> },
      { name: 'CI/CD', icon: <GitBranch className="w-4 h-4 mr-2" /> },
      { name: 'Monitoring', icon: <LayoutGrid className="w-4 h-4 mr-2" /> }
    ],
    'System Design': [
      { name: 'Event Driven', icon: <Workflow className="w-4 h-4 mr-2" /> },
      { name: 'Distributed Systems', icon: <Network className="w-4 h-4 mr-2" /> },
      { name: 'API Design', icon: <Code className="w-4 h-4 mr-2" /> },
      { name: 'Microservices Architecture', icon: <Boxes className="w-4 h-4 mr-2" /> }
    ],
    'Certifications': [
      { name: 'AWS Certified Solutions Architect', icon: <BadgeCheck className="w-4 h-4 mr-2" /> },
      { name: 'AWS Certified Developer', icon: <BadgeCheck className="w-4 h-4 mr-2" /> },
      { name: 'Kubernetes Administrator (CKA)', icon: <Award className="w-4 h-4 mr-2" /> },
      { name: 'Java Professional', icon: <BookOpen className="w-4 h-4 mr-2" /> }
    ]
  };

  return (
    <div className="min-h-screen pt-8 pb-32">
      <h2 className="text-3xl font-bold text-white mb-12 text-center animate-fade-in relative inline-block mx-auto">
        Skills & Certifications
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400 to-transparent"></span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
          <section 
            key={category} 
            className="rounded-lg p-5 glass-effect hover-card"
            style={{ 
              opacity: 0,
              animation: isLoaded ? `fadeIn 0.5s ${categoryIndex * 0.15}s forwards` : 'none',
            }}
          >
            <h3 className="text-lg font-medium text-white mb-4 pb-2 border-b border-white/10 relative">
              {category}
              <span 
                className="absolute bottom-0 left-0 h-[2px] bg-emerald-400 rounded-full"
                style={{ 
                  width: '25%',
                  opacity: 0,
                  animation: isLoaded ? `fadeIn 0.5s ${categoryIndex * 0.15 + 0.3}s forwards` : 'none'
                }}
              ></span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, skillIndex) => (
                <span
                  key={skill.name}
                  className="px-3 py-1.5 rounded hover:bg-emerald-500/10 transition-all duration-200 cursor-default text-white/80 flex items-center text-sm"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    opacity: 0,
                    animation: isLoaded ? `fadeIn 0.3s ${categoryIndex * 0.15 + 0.3 + skillIndex * 0.05}s forwards` : 'none'
                  }}
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