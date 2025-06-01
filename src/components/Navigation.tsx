import { useState, useEffect } from 'react';
import { Home, Briefcase, Code, Mail } from 'lucide-react';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
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
    <nav className={`fixed bottom-4 left-1/2 -translate-x-1/2 backdrop-blur-md shadow-xl shadow-emerald-500/10 px-5 py-2 rounded-2xl transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-32'}`} style={{ backgroundColor: 'rgba(24, 24, 24, 0.5)' }}>
      <ul className="flex gap-6">
        <li>
          <a
            href="/home"
            className="hover:text-emerald-500 transition-colors flex flex-col items-center gap-1"
            style={{ color: currentPath === '/home' ? '#10b981' : 'white' }}
          >
            <Home className="w-5 h-5" />
            <span className="text-xs">Home</span>
          </a>
        </li>
        <li>
          <a
            href="/experience"
            className="hover:text-emerald-500 transition-colors flex flex-col items-center gap-1"
            style={{ color: currentPath === '/experience' ? '#10b981' : 'white' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            <span className="text-xs">Experience</span>
          </a>
        </li>
        <li>
          <a
            href="/projects"
            className="hover:text-emerald-500 transition-colors flex flex-col items-center gap-1"
            style={{ color: currentPath === '/projects' ? '#10b981' : 'white' }}
          >
            <Briefcase className="w-5 h-5" />
            <span className="text-xs">Projects</span>
          </a>
        </li>
        <li>
          <a
            href="/skills"
            className="hover:text-emerald-500 transition-colors flex flex-col items-center gap-1"
            style={{ color: currentPath === '/skills' ? '#10b981' : 'white' }}
          >
            <Code className="w-5 h-5" />
            <span className="text-xs">Skills</span>
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="hover:text-emerald-500 transition-colors flex flex-col items-center gap-1"
            style={{ color: currentPath === '/contact' ? '#10b981' : 'white' }}
          >
            <Mail className="w-5 h-5" />
            <span className="text-xs">Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;