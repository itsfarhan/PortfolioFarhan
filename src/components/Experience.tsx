const Experience = () => {
  return (
    <div className="min-h-screen pb-32">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Experience</h2>

      <div className="space-y-12">
        <div className="rounded-lg p-6 border-l-4 border-emerald-500 glass-effect" style={{ backgroundColor: 'rgba(24, 24, 24, 0.7)' }}>
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <img 
                src="/images/logos/virtusa-logo.png" 
                alt="Virtusa" 
                className="w-12 h-12 mr-4 rounded bg-white p-1"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Software Engineer</h3>
                <p className="text-emerald-500">Virtusa</p>
              </div>
            </div>
            <span className="text-white">2021 - 2024</span>
          </div>
          <ul className="mt-4 space-y-2 list-disc pl-5 text-white">
            <li>Developed and maintained microservices using Java Spring Boot, Spring Data JPA, and Maven</li>
            <li>Created secure REST APIs with OAuth2 and JWT-based authentication</li>
            <li>Performed static code analysis with Veracode to meet PCI-DSS compliance standards</li>
            <li>Provisioned AWS infrastructure using EC2, Lambda, and S3 for scalable deployments</li>
            <li>Led sprint planning and collaborated across QA and DevOps teams in an Agile environment</li>
          </ul>
        </div>


        <div className="rounded-lg p-6 border-l-4 border-emerald-500 glass-effect" style={{ backgroundColor: 'rgba(24, 24, 24, 0.7)' }}>
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <img 
                src="/images/logos/packt-logo.png" 
                alt="Packt Publishing" 
                className="w-12 h-12 mr-4 rounded bg-white p-1"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Technical Reviewer</h3>
                <p className="text-emerald-500">Packt Publishing</p>
              </div>
            </div>
            <span className="text-white">2024 - 2025</span>
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
  );
};

export default Experience;