import { useState, useEffect } from 'react';
import { Home, Briefcase, Code, Mail, BookOpen, Award } from 'lucide-react';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentPath, setCurrentPath] = useState(""); // Initialize with empty string

  useEffect(() => {
    // Set the path only after component mounts on client
    setCurrentPath(window.location.pathname);
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 backdrop-blur-md shadow-xl shadow-emerald-500/10 px-6 py-3 rounded-2xl transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
      }`} 
      style={{ backgroundColor: 'rgba(24, 24, 24, 0.7)' }}
    >
      <ul className="flex gap-8">
        <li>
          <a
            href="/home"
            className="hover:text-emerald-500 transition-all duration-300 flex flex-col items-center gap-1 group"
            style={{ color: currentPath === '/home' ? '#10b981' : 'white' }}
          >
            <div className={`p-2 rounded-full transition-all duration-300 ${currentPath === '/home' ? 'bg-emerald-500/20' : 'group-hover:bg-emerald-500/10'}`}>
              <Home className="w-5 h-5" />
            </div>
            <span className="text-xs">Home</span>
          </a>
        </li>
        <li>
          <a
            href="/experience"
            className="hover:text-emerald-500 transition-all duration-300 flex flex-col items-center gap-1 group"
            style={{ color: currentPath === '/experience' ? '#10b981' : 'white' }}
          >
            <div className={`p-2 rounded-full transition-all duration-300 ${currentPath === '/experience' ? 'bg-emerald-500/20' : 'group-hover:bg-emerald-500/10'}`}>
              <Award className="w-5 h-5" />
            </div>
            <span className="text-xs">Experience</span>
          </a>
        </li>
        <li>
          <a
            href="/projects"
            className="hover:text-emerald-500 transition-all duration-300 flex flex-col items-center gap-1 group"
            style={{ color: currentPath === '/projects' ? '#10b981' : 'white' }}
          >
            <div className={`p-2 rounded-full transition-all duration-300 ${currentPath === '/projects' ? 'bg-emerald-500/20' : 'group-hover:bg-emerald-500/10'}`}>
              <Briefcase className="w-5 h-5" />
            </div>
            <span className="text-xs">Projects</span>
          </a>
        </li>
        <li>
          <a
            href="/blog"
            className="hover:text-emerald-500 transition-all duration-300 flex flex-col items-center gap-1 group"
            style={{ color: currentPath === '/blog' || currentPath.startsWith('/blog/') ? '#10b981' : 'white' }}
          >
            <div className={`p-2 rounded-full transition-all duration-300 ${currentPath === '/blog' || currentPath.startsWith('/blog/') ? 'bg-emerald-500/20' : 'group-hover:bg-emerald-500/10'}`}>
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-xs">Blog</span>
          </a>
        </li>
        <li>
          <a
            href="/skills"
            className="hover:text-emerald-500 transition-all duration-300 flex flex-col items-center gap-1 group"
            style={{ color: currentPath === '/skills' ? '#10b981' : 'white' }}
          >
            <div className={`p-2 rounded-full transition-all duration-300 ${currentPath === '/skills' ? 'bg-emerald-500/20' : 'group-hover:bg-emerald-500/10'}`}>
              <Code className="w-5 h-5" />
            </div>
            <span className="text-xs">Skills</span>
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="hover:text-emerald-500 transition-all duration-300 flex flex-col items-center gap-1 group"
            style={{ color: currentPath === '/contact' ? '#10b981' : 'white' }}
          >
            <div className={`p-2 rounded-full transition-all duration-300 ${currentPath === '/contact' ? 'bg-emerald-500/20' : 'group-hover:bg-emerald-500/10'}`}>
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-xs">Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;