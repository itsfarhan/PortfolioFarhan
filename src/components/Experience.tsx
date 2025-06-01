import { Calendar, MapPin, Link } from 'lucide-react';

const Experience = () => {
  return (
    <div className="min-h-screen pb-32">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Experience</h2>

      <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-emerald-500 before:to-transparent">
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-800 group-odd:md:translate-x-0.5 group-even:md:-translate-x-0.5 text-emerald-500">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
            </svg>
          </div>
          
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl glass-effect backdrop-blur-md shadow-xl" style={{ backgroundColor: 'rgba(24, 24, 24, 0.7)' }}>
            <div className="flex items-center">
              <img 
                src="/images/logos/virtusa-logo.png" 
                alt="Virtusa" 
                className="w-12 h-12 mr-4 rounded-full bg-white p-1 ring-2 ring-emerald-500/30"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Software Engineer</h3>
                <p className="text-emerald-500">Virtusa</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-3 mb-4">
              <span className="flex items-center text-sm text-white/70">
                <Calendar className="w-4 h-4 mr-1 text-emerald-400" />
                2021 - 2024
              </span>
              <span className="flex items-center text-sm text-white/70">
                <MapPin className="w-4 h-4 mr-1 text-emerald-400" />
                Remote
              </span>
              <span className="flex items-center text-sm text-white/70">
                <Link className="w-4 h-4 mr-1 text-emerald-400" />
                virtusa.com
              </span>
            </div>
            
            <ul className="mt-4 space-y-2 list-disc pl-5 text-white">
              <li>Developed and maintained microservices using Java Spring Boot, Spring Data JPA, and Maven</li>
              <li>Created secure REST APIs with OAuth2 and JWT-based authentication</li>
              <li>Performed static code analysis with Veracode to meet PCI-DSS compliance standards</li>
              <li>Provisioned AWS infrastructure using EC2, Lambda, and S3 for scalable deployments</li>
              <li>Led sprint planning and collaborated across QA and DevOps teams in an Agile environment</li>
            </ul>
          </div>
        </div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-800 group-odd:md:translate-x-0.5 group-even:md:-translate-x-0.5 text-emerald-500">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
            </svg>
          </div>
          
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl glass-effect backdrop-blur-md shadow-xl" style={{ backgroundColor: 'rgba(24, 24, 24, 0.7)' }}>
            <div className="flex items-center">
              <img 
                src="/images/logos/packt-logo.png" 
                alt="Packt Publishing" 
                className="w-12 h-12 mr-4 rounded-full bg-white p-1 ring-2 ring-emerald-500/30"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Technical Reviewer</h3>
                <p className="text-emerald-500">Packt Publishing</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-3 mb-4">
              <span className="flex items-center text-sm text-white/70">
                <Calendar className="w-4 h-4 mr-1 text-emerald-400" />
                2024 - 2025
              </span>
              <span className="flex items-center text-sm text-white/70">
                <MapPin className="w-4 h-4 mr-1 text-emerald-400" />
                Remote
              </span>
              <span className="flex items-center text-sm text-white/70">
                <Link className="w-4 h-4 mr-1 text-emerald-400" />
                packtpub.com
              </span>
            </div>
            
            <ul className="mt-4 space-y-2 list-disc pl-5 text-white">
              <li>Reviewed Kubernetes and Terraform-based content for technical accuracy</li>
              <li>Provided actionable feedback on chapters, diagrams, and code examples</li>
              <li>Ensured clarity and completeness of Kubernetes Autoscaling with KEDA book</li>
              <li>Worked with tools like Docker, Go, and Karpenter during technical evaluations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;