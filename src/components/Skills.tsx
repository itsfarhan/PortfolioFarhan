import { Database, Cloud, Server, Code, FileCode, Workflow, GitBranch, LayoutGrid, Boxes, FileJson, Network, HardDrive, Award, BookOpen, BadgeCheck } from 'lucide-react';
import { useState, useEffect } from 'react';

const Skills = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
      <h2 className="text-3xl font-bold text-white mb-12 text-center animate-fade-in">Skills & Certifications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
          <section 
            key={category} 
            className="rounded-xl p-6 glass-effect backdrop-blur-md transition-all duration-500 hover-card"
            style={{ 
              backgroundColor: 'rgba(24, 24, 24, 0.7)',
              opacity: 0,
              animation: isLoaded ? `fadeIn 0.5s ${categoryIndex * 0.15}s forwards` : 'none',
              borderLeft: '1px solid rgba(16, 185, 129, 0.1)',
              borderTop: '1px solid rgba(16, 185, 129, 0.1)',
            }}
          >
            <h3 className="text-xl font-semibold text-white mb-6 border-b border-emerald-500/30 pb-2 relative">
              {category}
              <span 
                className="absolute bottom-0 left-0 h-[3px] bg-emerald-500 rounded-full"
                style={{ 
                  width: '30%',
                  opacity: 0,
                  animation: isLoaded ? `fadeIn 0.5s ${categoryIndex * 0.15 + 0.3}s forwards` : 'none'
                }}
              ></span>
            </h3>
            <div className="flex flex-wrap gap-3 stagger-animate">
              {skills.map((skill, skillIndex) => (
                <span
                  key={skill.name}
                  className="px-4 py-2 rounded-lg hover:bg-emerald-500/20 hover:text-emerald-300 transition-all duration-300 cursor-default text-white flex items-center transform hover:scale-105"
                  style={{ 
                    backgroundColor: 'rgba(30, 32, 38, 0.9)',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                    borderLeft: '1px solid rgba(16, 185, 129, 0.1)',
                    borderTop: '1px solid rgba(16, 185, 129, 0.1)',
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