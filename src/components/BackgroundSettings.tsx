import { useState, useEffect } from 'react';
import { Settings } from 'lucide-react';

const BackgroundSettings = ({ currentBg, onChange }: { currentBg: string | null, onChange: (bg: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`fixed top-6 right-6 z-50 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full text-white/70 hover:text-emerald-400 transition-colors hover:bg-white/5 transform hover:scale-110"
        aria-label="Background settings"
      >
        <Settings className="w-4 h-4" />
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-2 rounded-lg shadow-lg p-3 w-40 glass-effect animate-fade-in" 
        >
          <h4 className="text-xs mb-2 text-white/70 font-medium">Animated Backgrounds</h4>
          <div className="flex gap-2">
            {[1, 2, 3].map(num => (
              <button
                key={num}
                onClick={() => {
                  onChange(num.toString());
                  setIsOpen(false);
                }}
                className={`w-10 h-10 rounded overflow-hidden border transition-all duration-200 ${
                  currentBg === num.toString() 
                    ? 'border-emerald-500 shadow-md shadow-emerald-500/10' 
                    : 'border-white/10 hover:border-emerald-500/50'
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