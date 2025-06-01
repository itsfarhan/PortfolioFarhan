import { useState, useEffect } from 'react';
import { Home, Briefcase, Code, Mail, BookOpen, Award, FileText } from 'lucide-react';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentPath, setCurrentPath] = useState(""); // Initialize with empty string
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set the path only after component mounts on client
    setCurrentPath(window.location.pathname);
    setIsLoaded(true);
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { path: '/home', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { path: '/experience', label: 'Experience', icon: <Award className="w-5 h-5" /> },
    { path: '/projects', label: 'Projects', icon: <Briefcase className="w-5 h-5" /> },
    { path: '/blog', label: 'Blog', icon: <BookOpen className="w-5 h-5" />, includes: ['/blog/'] },
    { path: '/docs', label: 'Docs', icon: <FileText className="w-5 h-5" />, includes: ['/docs/'] },
    { path: '/skills', label: 'Skills', icon: <Code className="w-5 h-5" /> },
    { path: '/contact', label: 'Contact', icon: <Mail className="w-5 h-5" /> },
  ];

  const isActive = (item: { path: string, includes?: string[] }) => {
    if (currentPath === item.path) return true;
    if (item.includes && item.includes.some(path => currentPath.startsWith(path))) return true;
    return false;
  };

  return (
    <nav 
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 backdrop-blur-md shadow-xl shadow-emerald-500/10 px-6 py-3 rounded-2xl transition-all duration-300 nav-container ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
      }`} 
      style={{ 
        backgroundColor: 'rgba(24, 24, 24, 0.8)',
        borderTop: '1px solid rgba(16, 185, 129, 0.1)',
        borderLeft: '1px solid rgba(16, 185, 129, 0.05)',
        borderRight: '1px solid rgba(16, 185, 129, 0.05)',
      }}
    >
      <ul className="flex gap-8 stagger-animate">
        {navItems.map((item, index) => (
          <li key={item.path} style={{ animationDelay: `${(index + 1) * 100}ms` }}>
            <a
              href={item.path}
              className="hover:text-emerald-500 transition-all duration-300 flex flex-col items-center gap-1 group nav-item-hover"
              style={{ color: isActive(item) ? '#10b981' : 'white' }}
            >
              <div 
                className={`nav-icon-container p-2 rounded-full transition-all duration-300 ${
                  isActive(item) 
                    ? 'bg-emerald-500/20 animate-pulse-slow' 
                    : 'group-hover:bg-emerald-500/10'
                }`}
              >
                {item.icon}
              </div>
              <span className="text-xs relative">
                {item.label}
                {isActive(item) && isLoaded && (
                  <span 
                    className="nav-active-indicator w-full" 
                    style={{
                      animation: 'fadeIn 0.3s forwards'
                    }}
                  />
                )}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;