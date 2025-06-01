import { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  const [greeting, setGreeting] = useState("Hello");
  const [isHovered, setIsHovered] = useState(false);
  const [currentTime, setCurrentTime] = useState(""); // Initialize with empty string
  const [isLoaded, setIsLoaded] = useState(false);

  const greetings = ["Hello", "Hola", "Bonjour", "Ciao", "こんにちは", "안녕하세요", "नमस्ते", "السلام عليكم"];

  // Update local time every second
  useEffect(() => {
    // Set initial time immediately after component mounts on client
    setCurrentTime(new Date().toLocaleTimeString());
    setIsLoaded(true);
    
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
          <div 
            className="flex items-center justify-center mb-6"
            style={{
              opacity: 0,
              animation: isLoaded ? 'fadeIn 0.5s 0.3s forwards' : 'none'
            }}
          >
            <Terminal
              className={`w-12 h-12 ${isHovered ? 'text-white' : 'text-emerald-500'} mr-4 transition-colors duration-300 animate-float`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>

          <div 
            className="text-center mb-8"
            style={{
              opacity: 0,
              animation: isLoaded ? 'fadeIn 0.5s 0.5s forwards' : 'none'
            }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              <div className="greeting-container inline-block">
                <span className="greeting-text">{greeting}</span>
                <span className="comma">,&nbsp;</span>
              </div>
              I'm <span className="text-emerald-500 hover:text-emerald-400 transition-colors cursor-pointer relative">
                Farhan
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-emerald-500/50 rounded-full"></span>
              </span>
            </h1>

            <div 
              className="flex gap-2 justify-center mt-4"
              style={{
                opacity: 0,
                animation: isLoaded ? 'fadeIn 0.5s 0.7s forwards' : 'none'
              }}
            >
              <a href="https://github.com/itsfarhan" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-emerald-500 transition-colors p-2.5 hover:bg-gray-800 hover:scale-110 rounded-full transform transition-transform">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/itsfarhan" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-emerald-500 transition-colors p-2.5 hover:bg-gray-800 hover:scale-110 rounded-full transform transition-transform">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:hello@farhanahmed.pro"
                className="text-white hover:text-emerald-500 transition-colors p-2.5 hover:bg-gray-800 hover:scale-110 rounded-full transform transition-transform">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <div 
              className="flex items-center justify-center gap-4 mt-4"
              style={{
                opacity: 0,
                animation: isLoaded ? 'fadeIn 0.5s 0.9s forwards' : 'none'
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-white text-sm">Available for work</span>
              </div>
              <div className="text-white text-sm">{currentTime}</div>
            </div>
          </div>

          <div 
            className="space-y-6 max-w-3xl mx-auto text-center"
            style={{
              opacity: 0,
              animation: isLoaded ? 'fadeIn 0.5s 1.1s forwards' : 'none'
            }}
          >
            <p className="text-lg text-white leading-relaxed">
              I am a backend developer who enjoys building and learning how things work behind the scenes. <br></br>
              As an AWS Community Builder, I am currently focused on deepening my skills in cloud-native development and sharing what I learn as part of the AWS Community Builders program. In my free time, I contribute to open source, write technical blogs, and experiment with new tools and ideas. I am continuously exploring ways to improve backend performance and reliability.
            </p>
          </div>

          <div 
            className="flex flex-wrap gap-4 pt-8 justify-center"
            style={{
              opacity: 0,
              animation: isLoaded ? 'fadeIn 0.5s 1.3s forwards' : 'none'
            }}
          >
            <a
              href="/projects"
              className="btn-primary px-8 py-3.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-600/20 flex items-center justify-center group"
            >
              <span className="relative z-10 group-hover:animate-pulse-slow">View Projects</span>
            </a>
            <a
              href="/contact"
              className="btn-secondary px-8 py-3.5 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-gray-800/20 flex items-center justify-center group"
            >
              <span className="relative z-10 group-hover:animate-pulse-slow">Get In Touch</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;