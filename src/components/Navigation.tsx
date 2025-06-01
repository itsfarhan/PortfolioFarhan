import { useState, useEffect } from 'react';
import { Home, Briefcase, Code, Mail, BookOpen, Award, FileText } from 'lucide-react';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentPath, setCurrentPath] = useState(""); 
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
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
    { path: '/home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { path: '/experience', label: 'Experience', icon: <Award className="w-4 h-4" /> },
    { path: '/projects', label: 'Projects', icon: <Briefcase className="w-4 h-4" /> },
    { path: '/blog', label: 'Blog', icon: <BookOpen className="w-4 h-4" />, includes: ['/blog/'] },
    { path: '/docs', label: 'Docs', icon: <FileText className="w-4 h-4" />, includes: ['/docs/'] },
    { path: '/skills', label: 'Skills', icon: <Code className="w-4 h-4" /> },
    { path: '/contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> },
  ];

  const isActive = (item: { path: string, includes?: string[] }) => {
    if (currentPath === item.path) return true;
    if (item.includes && item.includes.some(path => currentPath.startsWith(path))) return true;
    return false;
  };

  return (
    <nav 
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 px-5 py-3 rounded-full transition-all duration-300 nav-container z-50 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
      }`}
    >
      <ul className="flex gap-5 md:gap-8 stagger-animate">
        {navItems.map((item, index) => (
          <li key={item.path} style={{ animationDelay: `${(index + 1) * 100}ms` }}>
            <a
              href={item.path}
              className="hover:text-emerald-400 transition-all duration-200 flex flex-col items-center gap-1 group"
              style={{ color: isActive(item) ? 'var(--accent)' : 'var(--text-secondary)' }}
            >
              <div 
                className={`nav-icon-container p-1.5 rounded-full transition-all duration-200 ${
                  isActive(item) 
                    ? 'bg-emerald-500/10 text-emerald-400' 
                    : 'group-hover:bg-emerald-500/5'
                }`}
              >
                {item.icon}
              </div>
              <span className="text-xs relative" style={{ opacity: isActive(item) ? 1 : 0.7 }}>
                {item.label}
                {isActive(item) && isLoaded && (
                  <span className="nav-active-indicator w-full" />
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