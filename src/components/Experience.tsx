import { Calendar, MapPin, Link } from 'lucide-react';
import { useState, useEffect } from 'react';

const Experience = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const experiences = [
    {
      title: "Software Engineer",
      company: "Virtusa",
      logo: "/images/logos/virtusa-logo.png",
      period: "2021 - 2024",
      location: "Remote",
      website: "virtusa.com",
      responsibilities: [
        "Developed and maintained microservices using Java Spring Boot, Spring Data JPA, and Maven",
        "Created secure REST APIs with OAuth2 and JWT-based authentication",
        "Performed static code analysis with Veracode to meet PCI-DSS compliance standards",
        "Provisioned AWS infrastructure using EC2, Lambda, and S3 for scalable deployments",
        "Led sprint planning and collaborated across QA and DevOps teams in an Agile environment"
      ]
    },
    {
      title: "Technical Reviewer",
      company: "Packt Publishing",
      logo: "/images/logos/packt-logo.png",
      period: "2024 - 2025",
      location: "Remote",
      website: "packtpub.com",
      responsibilities: [
        "Reviewed Kubernetes and Terraform-based content for technical accuracy",
        "Provided actionable feedback on chapters, diagrams, and code examples",
        "Ensured clarity and completeness of Kubernetes Autoscaling with KEDA book",
        "Worked with tools like Docker, Go, and Karpenter during technical evaluations"
      ]
    }
  ];

  return (
    <div className="min-h-screen pb-32">
      <h2 className="text-3xl font-bold text-white mb-12 text-center animate-fade-in">Experience</h2>

      <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-emerald-500 before:to-transparent">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'}`}
            style={{ 
              opacity: 0,
              animation: isLoaded ? `${index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'} 0.6s ${index * 0.2}s forwards` : 'none'
            }}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-emerald-300 bg-slate-800 group-odd:md:translate-x-0.5 group-even:md:-translate-x-0.5 text-emerald-500 animate-pulse-slow">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
              </svg>
            </div>
            
            <div 
              className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl glass-effect backdrop-blur-md shadow-xl hover-card"
              style={{ 
                backgroundColor: 'rgba(24, 24, 24, 0.7)',
                borderLeft: '1px solid rgba(16, 185, 129, 0.1)',
                borderTop: '1px solid rgba(16, 185, 129, 0.1)',
              }}
            >
              <div className="flex items-center">
                <div className="w-12 h-12 mr-4 rounded-full bg-white p-1 ring-2 ring-emerald-500/30 overflow-hidden">
                  <img 
                    src={exp.logo} 
                    alt={exp.company} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <p className="text-emerald-500">{exp.company}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-3 mb-4">
                <span className="flex items-center text-sm text-white/70 hover:text-emerald-300 transition-colors">
                  <Calendar className="w-4 h-4 mr-1 text-emerald-400" />
                  {exp.period}
                </span>
                <span className="flex items-center text-sm text-white/70 hover:text-emerald-300 transition-colors">
                  <MapPin className="w-4 h-4 mr-1 text-emerald-400" />
                  {exp.location}
                </span>
                <span className="flex items-center text-sm text-white/70 hover:text-emerald-300 transition-colors">
                  <Link className="w-4 h-4 mr-1 text-emerald-400" />
                  {exp.website}
                </span>
              </div>
              
              <ul className="mt-4 space-y-2 list-disc pl-5 text-white">
                {exp.responsibilities.map((responsibility, i) => (
                  <li key={i} className="hover:text-emerald-300 transition-colors">{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;