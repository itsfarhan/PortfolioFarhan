import { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  const [greeting, setGreeting] = useState("Hello");
  const [isHovered, setIsHovered] = useState(false);
  const [currentTime, setCurrentTime] = useState(""); // Initialize with empty string

  const greetings = ["Hello", "Hola", "Bonjour", "Ciao", "こんにちは", "안녕하세요", "नमस्ते", "السلام عليكم"];

  // Update local time every second
  useEffect(() => {
    // Set initial time immediately after component mounts on client
    setCurrentTime(new Date().toLocaleTimeString());
    
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
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-8 justify-center">
            <a
              href="/projects"
              className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;