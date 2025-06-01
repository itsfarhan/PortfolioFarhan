import { Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <footer 
      className="py-8 mt-16 border-t" 
      style={{ 
        borderColor: 'rgba(16, 185, 129, 0.1)',
        opacity: 0,
        animation: isLoaded ? 'fadeIn 0.5s forwards' : 'none'
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm text-white">&copy; {currentYear} Farhan Ahmed. All rights reserved.</p>
            <p className="text-sm mt-1 italic text-white/70 hover:text-emerald-300 transition-colors">
              "I'm not crazy, my mother had me tested. Just like I test my code!"
            </p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/itsfarhan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:text-emerald-500 transition-colors hover:bg-gray-800 transform hover:scale-110 transition-transform"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/itsfarhan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:text-emerald-500 transition-colors hover:bg-gray-800 transform hover:scale-110 transition-transform"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:hello@farhanahmed.pro"
              className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:text-emerald-500 transition-colors hover:bg-gray-800 transform hover:scale-110 transition-transform"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;