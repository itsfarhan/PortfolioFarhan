import { Github } from 'lucide-react';

const Projects = () => (
  <div className="min-h-screen pb-32">
    <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        {
          title: 'Portfolio',
          description: 'Personal portfolio showcasing my work, experience, skills and projects. Built with TypeScript, React, and styled with HTML/CSS.',
          tech: ['TypeScript', 'React', 'AWS S3, CloudFront, ACM', 'Cloudflare'],
          link: 'https://farhanahmed.pro'
        },
        {
          title: 'Interview Prep',
          description: 'Compilation of my interview preparation. This repo includes Java, Spring Boot, DSA in Java, and System Design concepts with Java.',
          tech: ['Java', 'Spring Boot', 'System Design', 'Data Structures & Algorithms'],
          link: 'https://github.com/itsfarhan/interview-prep'
        },
        {
          title: 'Go Web App CI/CD',
          description: 'A simple Go web application designed to demonstrate DevOps practices, including containerization and continuous integration/deployment pipelines.',
          tech: ['Go', 'AWS EKS', 'Docker', 'Kubernetes', 'Helm', 'Github Actions'],
          link: 'https://github.com/itsfarhan/go-web-app-cicd'
        },

        {
          title: 'Accountant Reminder',
          description: 'A Java-based solution for accountants to streamline invoice collection and notification processes. Clients can upload invoices, and accountants can send notifications via email to ensure all required documents are provided, reducing manual follow-up.',
          tech: ['Java', 'Spring Boot', 'AWS S3, Lambda, IAM, SES, VPC, DynamoDB', 'Terraform'],
          link: 'https://github.com/itsfarhan/Accountant-Reminder'
        },

        {
          title: 'URL Shortener Application',
          description: 'A web application that enables users to convert long URLs into short, shareable links and redirects users from shortened URLs back to the original destinations. Built with Spring Boot and Java, featuring a clean HTML/CSS frontend. Designed for scalability and ease of use.',
          tech: ['Java', 'Spring Boot', 'HTML', 'CSS', 'Thymeleaf', 'H2 Database'],
          link: 'https://github.com/itsfarhan/URL-Shortener-Application-Spring-Boot-Project'
        }
      ].map((project, index) => (
        <div key={index} className="p-6 rounded-lg space-y-4 hover:shadow-md hover:shadow-emerald-500/10 transition-all" style={{ backgroundColor: 'var(--light-black-800)' }}>
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="text-white">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, techIndex) => (
              <span key={techIndex} className="px-2 py-1 rounded text-xs text-emerald-400" style={{ backgroundColor: 'var(--light-black-700)' }}>
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-500 transition-colors mt-4"
          >
            <Github className="w-4 h-4" />
            View Source
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;