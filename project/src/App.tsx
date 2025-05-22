import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { Terminal, Github, Linkedin, Mail, Coffee, PhoneCall, CircleDollarSign, Code, Home as HomeIcon, Briefcase, Volume2, VolumeX, Settings } from 'lucide-react';

// Audio player component - removed as we're using inline audio control

// Glass effect styles
const glassStyles = `
  .glass-effect {
    background: rgba(17, 24, 39, 0.6);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }
`;

// Loading screen styles
const loadingScreenStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');
  
  .loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--light-black-950);
    z-index: 9999;
  }

  .loading-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
  }

  .loading-content {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 800px;
    padding: 0 20px;
    transition: opacity 1s ease-out, transform 1s ease-out;
  }

  .loading-content.hidden {
    opacity: 0;
    transform: translateY(20px);
    visibility: hidden;
  }

  .loading-content.fade-in {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }

  .font-cinematic {
    font-family: 'Orbitron', sans-serif;
    text-transform: uppercase;
    letter-spacing: 4px;
    text-shadow: 0 0 10px rgba(16, 185, 129, 0.5),
                 0 0 20px rgba(16, 185, 129, 0.3),
                 0 0 30px rgba(16, 185, 129, 0.2);
    animation: glow 2s ease-in-out infinite alternate;
  }

  .audio-prompt {
    position: absolute;
    top: 5%;
    left: 0;
    width: 100%;
    text-align: center;
    font-family: 'Orbitron', sans-serif;
    color: rgba(255, 255, 255, 0.8);
    z-index: 3;
    animation: fadeInOut 2s ease-in-out infinite alternate;
  }

  @keyframes fadeInOut {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes glow {
    from {
      text-shadow: 0 0 10px rgba(16, 185, 129, 0.5),
                   0 0 20px rgba(16, 185, 129, 0.3),
                   0 0 30px rgba(16, 185, 129, 0.2);
    }
    to {
      text-shadow: 0 0 20px rgba(16, 185, 129, 0.8),
                   0 0 30px rgba(16, 185, 129, 0.5),
                   0 0 40px rgba(16, 185, 129, 0.3);
    }
  }
`;

// Custom glitch effect CSS class (restored as requested)
const glitchStyles = `
  @keyframes glitch {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-2px, 2px);
    }
    40% {
      transform: translate(-2px, -2px);
    }
    60% {
      transform: translate(2px, 2px);
    }
    80% {
      transform: translate(2px, -2px);
    }
    100% {
      transform: translate(0);
    }
  }
  
  @keyframes scanlines {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 0 100%;
    }
  }
  
  .glitch-text {
    position: relative;
    animation: glitch 1s infinite;
    color: #10b981;
  }
  
  .glitch-text::before,
  .glitch-text::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .glitch-text::before {
    left: 2px;
    text-shadow: -1px 0 #0d9488;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch 0.5s infinite linear alternate-reverse;
  }
  
  .glitch-text::after {
    left: -2px;
    text-shadow: 1px 0 #0369a1;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch 0.5s infinite linear alternate;
  }
  
  .scanlines {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 50%, rgba(16, 185, 129, 0.05) 51%);
    background-size: 100% 4px;
    animation: scanlines 10s linear infinite;
    pointer-events: none;
    z-index: 10;
  }
`;

// MP4 background loading screen component
const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [showName, setShowName] = useState(false);
  const [audioPromptVisible, setAudioPromptVisible] = useState(true);
  const navigate = useNavigate();

  // Function to attempt playing the background music
  const playBackgroundMusic = () => {
    const audioElements = document.querySelectorAll('audio');
    if (audioElements.length > 0) {
      audioElements.forEach(audio => {
        audio.muted = false;
        audio.volume = 0.3;
        audio.play().catch(() => {
          console.log('Could not autoplay audio from loading screen');
        });
      });
    }
  };

  const handleSkip = () => {
    navigate('/home');
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    // Show name and start progress bar at the 13th second
    const nameAndProgressTimer = setTimeout(() => {
      setShowName(true);
      setProgress(2); // Start progress bar animation
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            if (interval) clearInterval(interval);
            // Auto-navigate to home when progress reaches 100%
            navigate('/home');
            return 100;
          }
          return prev + 2;
        });
      }, 30); // Update progress every 30ms
    }, 13000); // 13 seconds

    // Hide the audio prompt after 8 seconds
    const hideAudioPromptTimer = setTimeout(() => {
      setAudioPromptVisible(false);
    }, 8000);

    return () => {
      if (interval) clearInterval(interval);
      clearTimeout(nameAndProgressTimer);
      clearTimeout(hideAudioPromptTimer);
    };
  }, [navigate]);

  return (
    <div
      className="loading-screen"
      onClick={playBackgroundMusic}
    >
      <video
        className="loading-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/loading-animation.mp4" type="video/mp4" />
      </video>
      {audioPromptVisible && (
        <div className="audio-prompt">
          <p className="text-lg">Click anywhere to enable audio</p>
        </div>
      )}
      <div className="loading-content">
        {showName && (
          <>
            <h1 className="text-4xl font-bold text-emerald-500 mb-4 cinematic-title">FARHAN AHMED</h1>
            <p className="text-xl text-white mb-4 cinematic-subtitle">Backend Dev | AWS Community Builder | Open Source Contributor</p>
            <div className="loading-progress">
              <div
                className="loading-progress-bar"
                style={{ width: `${progress}%` }}
              />
            </div>
          </>
        )}
      </div>
      <button
        className="fixed bottom-10 left-1/2 -translate-x-1/2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors z-50"
        onClick={handleSkip}
      >
        Skip
      </button>
      <div className="scanlines"></div>
    </div>
  );
};

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <nav className={`fixed bottom-4 left-1/2 -translate-x-1/2 backdrop-blur-md shadow-xl shadow-emerald-500/10 px-5 py-2 rounded-2xl transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-32'}`} style={{ backgroundColor: 'rgba(24, 24, 24, 0.5)' }}>
      <ul className="flex gap-6">
        <li>
          <button
            onClick={() => handleNavigation('/home')}
            className="hover:text-emerald-500 transition-colors flex flex-col items-center gap-1"
            style={{ color: location.pathname === '/home' ? '#10b981' : 'white' }}
          >
            <HomeIcon className="w-5 h-5" />
            <span className="text-xs">Home</span>
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavigation('/experience')}
            className="hover:text-emerald-500 transition-colors flex flex-col items-center gap-1"
            style={{ color: location.pathname === '/experience' ? '#10b981' : 'white' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            <span className="text-xs">Experience</span>
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavigation('/projects')}
            className="hover:text-emerald-500 transition-colors flex flex-col items-center gap-1"
            style={{ color: location.pathname === '/projects' ? '#10b981' : 'white' }}
          >
            <Briefcase className="w-5 h-5" />
            <span className="text-xs">Projects</span>
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavigation('/skills')}
            className="hover:text-emerald-500 transition-colors flex flex-col items-center gap-1"
            style={{ color: location.pathname === '/skills' ? '#10b981' : 'white' }}
          >
            <Code className="w-5 h-5" />
            <span className="text-xs">Skills</span>
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavigation('/contact')}
            className="hover:text-emerald-500 transition-colors flex flex-col items-center gap-1"
            style={{ color: location.pathname === '/contact' ? '#10b981' : 'white' }}
          >
            <Mail className="w-5 h-5" />
            <span className="text-xs">Contact</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

// Header component was removed as per user request

const Home = () => {
  const [greeting, setGreeting] = useState("Hello");
  const [isHovered, setIsHovered] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  const greetings = ["Hello", "Hola", "Bonjour", "Ciao", "こんにちは", "안녕하세요", "नमस्ते", "السلام عليكم"];

  // Update local time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Greeting rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting(prev => {
        const currentIndex = greetings.indexOf(prev);
        return greetings[(currentIndex + 1) % greetings.length];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="space-y-16">
        <section className="min-h-[80vh] flex flex-col justify-center">
          <div className="flex items-center justify-center mb-6">
            <Terminal
              className={`w-12 h-12 ${isHovered ? 'text-white' : 'text-emerald-500'} mr-4 transition-colors duration-300`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>

          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              <div className="greeting-container inline-block">
                <span className="greeting-text">{greeting}</span>
                <span className="comma">,&nbsp;</span>
              </div>
              I'm <span className="text-emerald-500 hover:text-emerald-400 transition-colors cursor-pointer">Farhan</span>
            </h1>

            <div className="flex gap-2 justify-center mt-4">
              <a href="https://github.com/itsfarhan" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-emerald-500 transition-colors p-1.5 hover:bg-gray-800 rounded-full">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/itsfarhan" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-emerald-500 transition-colors p-1.5 hover:bg-gray-800 rounded-full">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:hello@farhanahmed.pro"
                className="text-white hover:text-emerald-500 transition-colors p-1.5 hover:bg-gray-800 rounded-full">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-white text-sm">Available for work</span>
              </div>
              <div className="text-white text-sm">{currentTime}</div>
            </div>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto text-center">
            <p className="text-lg text-white leading-relaxed">
              I am a backend developer who enjoys building and learning how things work behind the scenes. <br></br>
              As an AWS Community Builder, I am currently focused on deepening my skills in cloud-native development and sharing what I learn as part of the AWS Community Builders program. In my free time, I contribute to open source, write technical blogs, and experiment with new tools and ideas. I am continuously exploring ways to improve backend performance and reliability.
              {/* <p className="text-lg text-white leading-relaxed"> */}
            </p>
            {/* Video section commented out for later use */}
            {/* <div className="mt-8 bg-gray-800 p-4 rounded-lg shadow-lg shadow-emerald-500/10">
              <h3 className="text-emerald-500 mb-2 font-medium">Intro Video</h3>
              <div className="aspect-video bg-gray-900 rounded flex items-center justify-center">
                <a 
                  href="https://www.youtube.com/watch?v=example-video-id" 
                  target="_blank" 
                  rel="noopener noreferrer noreferrer"
                  className="text-emerald-500 hover:text-emerald-400 transition-colors"
                >
                  <div className="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                    <span className="mt-2">Watch my introduction (Coming Soon)</span>
                  </div>
                </a>
              </div>
            </div> */}
          </div>

          <div className="flex flex-wrap gap-4 pt-8 justify-center">
            <Link
              to="/projects"
              className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

const Projects = () => (
  <div className="min-h-screen pb-32">
    <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        {
          title: 'Cloud Native Platform',
          description: 'A scalable microservices architecture handling millions of requests daily. Built with Spring Boot, Java, and AWS services.',
          tech: ['Java', 'Spring Boot', 'AWS', 'PostgreSQL', 'Docker'],
          link: 'https://github.com'
        },
        {
          title: 'Real-time Analytics Engine',
          description: 'Processing terabytes of data in real-time with distributed systems. Handles complex data pipelines with Go and AWS.',
          tech: ['Go', 'AWS', 'DynamoDB', 'Kubernetes', 'Terraform'],
          link: 'https://github.com'
        },
        {
          title: 'Infrastructure as Code Framework',
          description: 'A comprehensive IaC solution for managing cloud infrastructure. Supports multi-cloud deployments and complex architectures.',
          tech: ['Terraform', 'AWS', 'Kubernetes', 'Helm', 'Docker'],
          link: 'https://github.com'
        },
        {
          title: 'API Gateway Service',
          description: 'High-performance API Gateway with built-in authentication, rate limiting, and monitoring capabilities.',
          tech: ['Go', 'Gin', 'Fiber', 'PostgreSQL', 'Docker'],
          link: 'https://github.com'
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

const Skills = () => {
  const skillCategories = {
    'Backend Development': [
      'Java', 'Spring Boot', 'Go', 'Gin', 'Fiber',
      'REST APIs', 'SQL', 'YAML'
    ],
    'DevOps & Cloud': [
      'AWS', 'Docker', 'Kubernetes', 'Terraform', 'Helm',
      'CI/CD', 'Monitoring'
    ],
    // 'Databases': [
    //   'PostgreSQL', 'DynamoDB', 'Redis',
    //   'Database Design', 
    // ],
    'System Design': [
      'Event Driven', 'Distributed Systems', 'API Design',
      'Microservices Architecture',
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
                  key={skill}
                  className="px-4 py-2 rounded-lg hover:bg-opacity-70 hover:text-emerald-400 transition-all cursor-default text-white backdrop-blur-sm"
                  style={{ backgroundColor: 'rgba(24, 24, 24, 0.7)' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="min-h-screen pb-32">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Experience</h2>

      <div className="space-y-12">
        {/* <div className="rounded-lg p-6 border-l-4 border-emerald-500 glass-effect" style={{ backgroundColor: 'rgba(24, 24, 24, 0.7)' }}>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-white">Software Engineer</h3>
              <p className="text-emerald-500">Virtusa</p>
            </div>
            <span className="text-white">2021 - 2024</span>
          </div>
          <ul className="mt-4 space-y-2 list-disc pl-5 text-white">
            <li>Led the development of microservices architecture that improved system reliability by 40%</li>
            <li>Implemented CI/CD pipelines that reduced deployment time from days to minutes</li>
            <li>Mentored junior developers and conducted code reviews</li>
          </ul>
        </div> */}

        {/* <div className="rounded-lg p-6 border-l-4 border-emerald-500 glass-effect" style={{ backgroundColor: 'rgba(24, 24, 24, 0.7)' }}>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-white">Backend Developer</h3>
              <p className="text-emerald-500">InnovateSoft</p>
            </div>
            <span className="text-white">2019 - 2022</span>
          </div>
          <ul className="mt-4 space-y-2 list-disc pl-5 text-white">
            <li>Designed and implemented RESTful APIs for mobile and web applications</li>
            <li>Optimized database queries resulting in 60% faster response times</li>
            <li>Integrated third-party services and payment gateways</li>
          </ul>
        </div>
         */}
        <div className="rounded-lg p-6 border-l-4 border-emerald-500 glass-effect" style={{ backgroundColor: 'rgba(24, 24, 24, 0.7)' }}>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-white">Software Engineer</h3>
              <p className="text-emerald-500">Virtusa</p>
            </div>
            <span className="text-white">2021 - 2024</span>
          </div>
          <ul className="mt-4 space-y-2 list-disc pl-5 text-white">
            <li>Developed and maintained Microservices using Java and Springboot</li>
            <li>Collaborated with frontend developers to integrate APIs</li>
            <li>Participated in agile development process and sprint planning</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    reason: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen pb-32">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Get In Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info Panel */}
        <div
          className="p-8 rounded-lg space-y-6 glass-effect"
          style={{ backgroundColor: 'rgba(24, 24, 24, 0.7)' }}
        >
          <p className="text-white">
            Whether you want to discuss a project, ask about tech, or just want to say hi,
            I am always open for a chat!
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:hello@farhanahmed.pro"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-500 transition-colors"
            >
              <Mail className="w-5 h-5" />
              hello@farhanahmed.pro
            </a>
            <a
              href="https://calendly.com/hello-farhanahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-500 transition-colors"
            >
              <Coffee className="w-5 h-5" />
              Schedule a Coffee Chat
            </a>
            <a
              href="https://ko-fi.com/itsfarhan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-500 transition-colors"
            >
              <CircleDollarSign className="w-5 h-5" />
              Buy a coffee for Farhan
            </a>
          </div>
        </div>

        {/* Unified Form with FormSubmit.co */}
        <form
          action="https://formsubmit.co/5bdb03a51a3b91312a323dcf167753bd"
          method="POST"
          className="p-8 rounded-lg space-y-6"
          style={{ backgroundColor: 'var(--light-black-800)' }}
        >
          {/* Honeypot field */}
          <input type="text" name="_honey" style={{ display: 'none' }} />

          {/* Disable default captcha */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Redirect to thank you page */}
          <input type="hidden" name="_next" value="https://farhanahmed.pro/thankyou.html" />

          {/* Pass formData fields */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1 text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              style={{
                backgroundColor: 'var(--light-black-700)',
                borderColor: 'var(--light-black-600)',
                borderWidth: '1px'
              }}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              style={{
                backgroundColor: 'var(--light-black-700)',
                borderColor: 'var(--light-black-600)',
                borderWidth: '1px'
              }}
            />
          </div>

          <div>
            <label htmlFor="reason" className="block text-sm font-medium mb-1 text-white">
              Reason for Contact
            </label>
            <select
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              style={{
                backgroundColor: 'var(--light-black-700)',
                borderColor: 'var(--light-black-600)',
                borderWidth: '1px'
              }}
            >
              <option value="" disabled hidden>
                Select an option
              </option>
              <option value="Project Inquiry">Project Inquiry</option>
              <option value="Job Opportunity">Job Opportunity</option>
              <option value="Freelance">Freelance</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-1 text-white">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              style={{
                backgroundColor: 'var(--light-black-700)',
                borderColor: 'var(--light-black-600)',
                borderWidth: '1px'
              }}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1 text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              style={{
                backgroundColor: 'var(--light-black-700)',
                borderColor: 'var(--light-black-600)',
                borderWidth: '1px'
              }}
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="py-6 mt-12 border-t" style={{ borderColor: 'var(--light-black-800)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white">&copy; 2025 Farhan Ahmed. All rights reserved.</p>
          <p className="text-sm mt-2 md:mt-0 italic text-white">
            "I'm not crazy, my mother had me tested. Just like I test my code!"</p>
        </div>
      </div>
    </footer>
  );
};

const BackgroundSettings = ({ currentBg, onChange }: { currentBg: string | null, onChange: (bg: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:text-emerald-500 transition-colors"
        style={{ backgroundColor: 'var(--light-black-800)' }}
      >
        <Settings className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 rounded-lg shadow-lg p-3 w-48 glass-effect" style={{ backgroundColor: 'rgba(24, 24, 24, 0.7)' }}>
          <h4 className="text-sm mb-2 text-white">Animated Backgrounds</h4>
          <div className="flex gap-2">
            {[1, 2, 3].map(num => (
              <button
                key={num}
                onClick={() => {
                  onChange(num.toString());
                  setIsOpen(false);
                }}
                className={`w-12 h-12 rounded-md overflow-hidden border-2 ${currentBg === num.toString() ? 'border-emerald-500' : 'border-transparent'}`}
              >
                <img
                  src={`/images/animated-bg-${num}.gif`}
                  alt={`Animated Background ${num}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

function App() {
  // Default to the first animated background
  const [backgroundOption, setBackgroundOption] = useState<string>('1');
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Add styles to the document
  useEffect(() => {
    // Add the loading screen and glass styles to the document
    const styleElement = document.createElement('style');
    styleElement.innerHTML = loadingScreenStyles + glassStyles + glitchStyles;
    document.head.appendChild(styleElement);

    return () => {
      // Remove the style element if it exists in the document
      if (document.head.contains(styleElement)) {
        document.head.removeChild(styleElement);
      }
    };
  }, []);

  // Initialize audio with super aggressive approach
  useEffect(() => {
    // Create audio element in DOM to better handle autoplay
    const audioElement = document.createElement('audio');
    audioElement.src = '/audio/Vault-1.mp3';
    audioElement.loop = true;
    audioElement.volume = 0.3;
    audioElement.id = 'background-music';
    audioElement.preload = 'auto';

    // Store in ref for later control
    audioRef.current = audioElement;

    // Add to DOM for better browser support
    document.body.appendChild(audioElement);

    // Try multiple play attempts
    const tryPlay = () => {
      if (audioElement.paused) {
        audioElement.play().catch(() => { });
      }
    };

    // Attempt initial play
    tryPlay();

    // Set up various timers to try playing at different times
    const timers = [
      setTimeout(tryPlay, 500),   // Quick initial retry
      setTimeout(tryPlay, 2000),  // After 2 seconds
      setTimeout(tryPlay, 5000),  // After 5 seconds
      setTimeout(tryPlay, 10000), // After 10 seconds
      setTimeout(tryPlay, 14000), // Just before loading screen ends
      setTimeout(tryPlay, 15500), // Just after loading screen ends
      setTimeout(tryPlay, 16500)  // 1.5 seconds after loading screen ends
    ];

    // Set up a variety of events that might trigger audio playback
    const events = ['click', 'touchstart', 'keydown', 'scroll', 'mousemove'];

    const playOnUserAction = () => {
      if (audioElement.paused) {
        audioElement.play().catch(() => { });
      }
    };

    // Add all listeners
    events.forEach(evt => {
      window.addEventListener(evt, playOnUserAction);
    });

    // Cleanup function
    return () => {
      // Clear all timers
      timers.forEach(timer => clearTimeout(timer));

      // Remove all event listeners
      events.forEach(evt => {
        window.removeEventListener(evt, playOnUserAction);
      });

      // Remove audio element from DOM
      if (document.body.contains(audioElement)) {
        document.body.removeChild(audioElement);
      }
    };
  }, []);

  // Handle mute/unmute 
  useEffect(() => {
    if (!audioRef.current) return;

    if (isMuted) {
      audioRef.current.volume = 0;
      audioRef.current.pause();
    } else {
      audioRef.current.volume = 0.3;

      // Try to play with a small delay to ensure UI has updated
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().catch(() => { });
        }
      }, 100);
    }
  }, [isMuted]);

  return (
    <Router>
      <div className="min-h-screen text-white relative overflow-hidden" style={{ backgroundColor: 'var(--light-black-950)' }}>
        {/* We need to use useLocation to conditionally render components */}
        <RouteConditionalComponents
          backgroundOption={backgroundOption}
          setBackgroundOption={setBackgroundOption}
          isMuted={isMuted}
          setIsMuted={setIsMuted}
        />
        {/* <div className="absolute inset-0 z-0 opacity-30 bg-blend-overlay"> */}

        <div className="absolute inset-0 z-0 bg-blend-overlay" style={{ opacity: 0.15 }}>
          <img
            src={`/images/animated-bg-${backgroundOption || '1'}.gif`}
            alt="Animated Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 relative z-10">
          <Routes>
            <Route path="/" element={<LoadingScreen />} />
            <Route path="/home" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thankyou" element={<Navigate to="/home" replace />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

// Helper component to conditionally render UI elements based on current route
const RouteConditionalComponents = ({
  backgroundOption,
  setBackgroundOption,
  isMuted,
  setIsMuted
}: {
  backgroundOption: string,
  setBackgroundOption: (bg: string) => void,
  isMuted: boolean,
  setIsMuted: (muted: boolean) => void
}) => {
  const location = useLocation();
  const isLoadingScreen = location.pathname === '/';

  // Only render these components when not on the loading screen
  if (isLoadingScreen) {
    return null;
  }

  return (
    <>
      {/* Audio toggle button */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="fixed bottom-24 right-4 z-50 backdrop-blur-md p-2 rounded-full hover:text-emerald-500 transition-colors"
        style={{ backgroundColor: 'rgba(24, 24, 24, 0.5)', color: isMuted ? 'white' : '#10b981' }}
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>

      {/* Scroll to top button */}
      <button
        className="fixed top-4 right-4 p-2 rounded-full text-emerald-400 hover:text-emerald-300 transition-colors z-20"
        style={{ backgroundColor: 'var(--light-black-800)' }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <Navigation />
      </div>

      {/* Background Settings */}
      <BackgroundSettings
        currentBg={backgroundOption}
        onChange={setBackgroundOption}
      />
    </>
  );
}

export default App;