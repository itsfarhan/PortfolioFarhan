import { useState } from 'react';
import { Settings } from 'lucide-react';

const BackgroundSettings = ({ currentBg, onChange }: { currentBg: string | null, onChange: (bg: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:text-emerald-500 transition-colors"
        style={{ backgroundColor: 'var(--light-black-800)' }}
      >
        <Settings className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 rounded-lg shadow-lg p-3 w-48 glass-effect" style={{ backgroundColor: 'rgba(24, 24, 24, 0.7)' }}>
          <h4 className="text-sm mb-2 text-white">Animated Backgrounds</h4>
          <div className="flex gap-2">
            {[1, 2, 3].map(num => (
              <button
                key={num}
                onClick={() => {
                  onChange(num.toString());
                  setIsOpen(false);
                }}
                className={`w-12 h-12 rounded-md overflow-hidden border-2 ${currentBg === num.toString() ? 'border-emerald-500' : 'border-transparent'}`}
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