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
      className="py-8 mt-16" 
      style={{ 
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        opacity: 0,
        animation: isLoaded ? 'fadeIn 0.5s forwards' : 'none'
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm text-white/70">&copy; {currentYear} Farhan Ahmed. All rights reserved.</p>
            <p className="text-sm mt-1 italic text-white/50 hover:text-emerald-300 transition-colors">
              "I'm not crazy, my mother had me tested. Just like I test my code!"
            </p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/itsfarhan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center text-white/60 hover:text-emerald-400 transition-colors hover:bg-white/5 transform hover:scale-110 transition-transform"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="https://linkedin.com/in/itsfarhan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center text-white/60 hover:text-emerald-400 transition-colors hover:bg-white/5 transform hover:scale-110 transition-transform"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="mailto:hello@farhanahmed.pro"
              className="w-8 h-8 rounded-full flex items-center justify-center text-white/60 hover:text-emerald-400 transition-colors hover:bg-white/5 transform hover:scale-110 transition-transform"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;