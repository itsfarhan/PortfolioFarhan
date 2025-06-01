import { useState, useEffect } from 'react';
import { Settings } from 'lucide-react';

const BackgroundSettings = ({ currentBg, onChange }: { currentBg: string | null, onChange: (bg: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`fixed top-4 right-4 z-50 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:text-emerald-500 transition-colors hover:bg-gray-800/70 transform hover:scale-110 transition-transform"
        style={{ backgroundColor: 'rgba(24, 24, 24, 0.8)', backdropFilter: 'blur(5px)' }}
      >
        <Settings className="w-5 h-5" />
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-2 rounded-lg shadow-lg p-4 w-48 glass-effect animate-fade-in" 
          style={{ 
            backgroundColor: 'rgba(24, 24, 24, 0.8)',
            borderLeft: '1px solid rgba(16, 185, 129, 0.1)',
            borderTop: '1px solid rgba(16, 185, 129, 0.1)',
          }}
        >
          <h4 className="text-sm mb-3 text-white font-semibold">Animated Backgrounds</h4>
          <div className="flex gap-2">
            {[1, 2, 3].map(num => (
              <button
                key={num}
                onClick={() => {
                  onChange(num.toString());
                  setIsOpen(false);
                }}
                className={`w-12 h-12 rounded-md overflow-hidden border-2 transition-all duration-300 transform hover:scale-105 ${
                  currentBg === num.toString() 
                    ? 'border-emerald-500 shadow-lg shadow-emerald-500/20' 
                    : 'border-transparent hover:border-emerald-500/50'
                }`}
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

export default BackgroundSettings;