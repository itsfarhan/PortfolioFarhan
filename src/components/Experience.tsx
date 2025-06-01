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
    <div className="min-h-screen pt-8 pb-32">
      <h2 className="text-3xl font-bold text-white mb-12 text-center animate-fade-in relative inline-block mx-auto">
        Experience
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400 to-transparent"></span>
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="glass-effect hover-card rounded-lg overflow-hidden"
            style={{ 
              opacity: 0,
              animation: isLoaded ? `fadeIn 0.6s ${index * 0.2}s forwards` : 'none'
            }}
          >
            <div className="p-6">
              <div className="flex items-center">
                <div className="w-10 h-10 mr-4 rounded bg-white p-1 overflow-hidden flex-shrink-0">
                  <img 
                    src={exp.logo} 
                    alt={exp.company} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white">{exp.title}</h3>
                  <p className="text-emerald-400 text-sm">{exp.company}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-3 mb-4 text-xs text-white/60">
                <span className="flex items-center hover:text-emerald-300 transition-colors">
                  <Calendar className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                  {exp.period}
                </span>
                <span className="flex items-center hover:text-emerald-300 transition-colors">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                  {exp.location}
                </span>
                <span className="flex items-center hover:text-emerald-300 transition-colors">
                  <Link className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                  {exp.website}
                </span>
              </div>
              
              <ul className="mt-4 space-y-2 text-white/80 text-sm">
                {exp.responsibilities.map((responsibility, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-emerald-400 mr-2 mt-1">•</span>
                    <span>{responsibility}</span>
                  </li>
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