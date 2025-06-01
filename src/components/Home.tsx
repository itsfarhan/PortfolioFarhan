import { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  const [greeting, setGreeting] = useState("Hello");
  const [isHovered, setIsHovered] = useState(false);
  const [currentTime, setCurrentTime] = useState(""); 
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
      <section className="min-h-[80vh] flex flex-col justify-center items-center">
        <div 
          className="mb-8"
          style={{
            opacity: 0,
            animation: isLoaded ? 'fadeIn 0.5s 0.3s forwards' : 'none'
          }}
        >
          <Terminal
            className={`w-10 h-10 ${isHovered ? 'text-white' : 'text-emerald-400'} transition-colors duration-300 animate-float`}
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
            <div className="greeting-container inline-block">
              <span className="greeting-text">{greeting}</span>
              <span className="comma">,&nbsp;</span>
            </div>
            I'm <span className="text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer relative">
              Farhan
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-emerald-400/40 rounded-full"></span>
            </span>
          </h1>

          <div 
            className="flex gap-4 justify-center mt-6"
            style={{
              opacity: 0,
              animation: isLoaded ? 'fadeIn 0.5s 0.7s forwards' : 'none'
            }}
          >
            <a href="https://github.com/itsfarhan" target="_blank" rel="noopener noreferrer"
              className="text-white/70 hover:text-emerald-400 transition-colors p-2 hover:bg-white/5 hover:scale-110 rounded-full transform transition-transform">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/itsfarhan" target="_blank" rel="noopener noreferrer"
              className="text-white/70 hover:text-emerald-400 transition-colors p-2 hover:bg-white/5 hover:scale-110 rounded-full transform transition-transform">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:hello@farhanahmed.pro"
              className="text-white/70 hover:text-emerald-400 transition-colors p-2 hover:bg-white/5 hover:scale-110 rounded-full transform transition-transform">
              <Mail className="w-5 h-5" />
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
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-white/70 text-sm">Available for work</span>
            </div>
            <div className="text-white/50 text-sm">{currentTime}</div>
          </div>
        </div>

        <div 
          className="max-w-2xl mx-auto text-center px-4"
          style={{
            opacity: 0,
            animation: isLoaded ? 'fadeIn 0.5s 1.1s forwards' : 'none'
          }}
        >
          <p className="text-white/70 leading-relaxed">
            I am a backend developer who enjoys building and learning how things work behind the scenes. 
            As an AWS Community Builder, I focus on cloud-native development and sharing knowledge.
            In my free time, I contribute to open source, write technical blogs, and experiment with new tools.
          </p>
        </div>

        <div 
          className="flex flex-wrap gap-4 pt-10 justify-center"
          style={{
            opacity: 0,
            animation: isLoaded ? 'fadeIn 0.5s 1.3s forwards' : 'none'
          }}
        >
          <a
            href="/projects"
            className="btn-primary px-6 py-2.5 rounded-md flex items-center justify-center group"
          >
            <span className="relative z-10">View Projects</span>
          </a>
          <a
            href="/contact"
            className="btn-secondary px-6 py-2.5 rounded-md flex items-center justify-center group"
          >
            <span className="relative z-10">Get In Touch</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;