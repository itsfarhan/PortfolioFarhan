import { Github, ExternalLink, Code, Server } from 'lucide-react';
import { useEffect, useState } from 'react';

const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      title: 'Portfolio',
      description: 'Personal portfolio showcasing my work, experience, skills and projects. Built with TypeScript, React, and styled with HTML/CSS.',
      tech: ['TypeScript', 'React', 'AWS S3, CloudFront, ACM', 'Cloudflare'],
      link: 'https://farhanahmed.pro',
      icon: <ExternalLink className="w-4 h-4 text-emerald-400" />
    },
    {
      title: 'Interview Prep',
      description: 'Compilation of my interview preparation. This repo includes Java, Spring Boot, DSA in Java, and System Design concepts with Java.',
      tech: ['Java', 'Spring Boot', 'System Design', 'Data Structures & Algorithms'],
      link: 'https://github.com/itsfarhan/interview-prep',
      icon: <Code className="w-4 h-4 text-emerald-400" />
    },
    {
      title: 'Go Web App CI/CD',
      description: 'A simple Go web application designed to demonstrate DevOps practices, including containerization and continuous integration/deployment pipelines.',
      tech: ['Go', 'AWS EKS', 'Docker', 'Kubernetes', 'Helm', 'Github Actions'],
      link: 'https://github.com/itsfarhan/go-web-app-cicd',
      icon: <Server className="w-4 h-4 text-emerald-400" />
    },
    {
      title: 'Accountant Reminder',
      description: 'A Java-based solution for accountants to streamline invoice collection and notification processes. Clients can upload invoices, and accountants can send notifications via email to ensure all required documents are provided, reducing manual follow-up.',
      tech: ['Java', 'Spring Boot', 'AWS S3, Lambda, IAM, SES, VPC, DynamoDB', 'Terraform'],
      link: 'https://github.com/itsfarhan/Accountant-Reminder',
      icon: <Server className="w-4 h-4 text-emerald-400" />
    },
    {
      title: 'URL Shortener Application',
      description: 'A web application that enables users to convert long URLs into short, shareable links and redirects users from shortened URLs back to the original destinations. Built with Spring Boot and Java, featuring a clean HTML/CSS frontend.',
      tech: ['Java', 'Spring Boot', 'HTML', 'CSS', 'Thymeleaf', 'H2 Database'],
      link: 'https://github.com/itsfarhan/URL-Shortener-Application-Spring-Boot-Project',
      icon: <ExternalLink className="w-4 h-4 text-emerald-400" />
    }
  ];

  return (
    <div className="min-h-screen pt-8 pb-32">
      <h2 className="text-3xl font-bold text-white mb-12 text-center animate-fade-in relative inline-block mx-auto">
        Projects
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400 to-transparent"></span>
      </h2>
      
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <a 
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 hover-card glass-effect rounded-lg overflow-hidden"
            style={{ 
              opacity: 0,
              animation: isLoaded ? `fadeIn 0.5s ${index * 0.1}s forwards` : 'none',
            }}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center mr-3" 
                  style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                >
                  {project.icon}
                </div>
                <h3 className="text-xl font-medium text-white">{project.title}</h3>
              </div>
              
              <p className="text-white/70 mb-4 text-sm">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-2 py-0.5 rounded-full text-xs text-emerald-300 transition-all duration-200 hover:bg-emerald-500/10" 
                    style={{ backgroundColor: 'rgba(16, 185, 129, 0.05)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center text-emerald-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                <span className="group-hover:underline">View Source</span>
                <svg 
                  className="w-3 h-3 ml-1 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;