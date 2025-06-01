import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AudioControl = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio
  useEffect(() => {
    setIsLoaded(true);
    
    if (!audioRef.current) return;
    
    const audioElement = audioRef.current;
    audioElement.volume = 0.3;

    // Try multiple play attempts
    const tryPlay = () => {
      if (audioElement.paused) {
        audioElement.play().catch(() => { });
      }
    };

    tryPlay();

    const timers = [
      setTimeout(tryPlay, 500),
      setTimeout(tryPlay, 2000),
      setTimeout(tryPlay, 5000),
      setTimeout(tryPlay, 10000),
      setTimeout(tryPlay, 14000)
    ];

    const events = ['click', 'touchstart', 'keydown', 'scroll', 'mousemove'];
    const playOnUserAction = () => {
      if (audioElement.paused) {
        audioElement.play().catch(() => { });
      }
    };

    events.forEach(evt => {
      window.addEventListener(evt, playOnUserAction);
    });

    return () => {
      timers.forEach(timer => clearTimeout(timer));
      events.forEach(evt => {
        window.removeEventListener(evt, playOnUserAction);
      });
    };
  }, []);

  // Handle mute/unmute 
  useEffect(() => {
    if (!audioRef.current) return;

    if (isMuted) {
      audioRef.current.volume = 0;
      audioRef.current.pause();
    } else {
      audioRef.current.volume = 0.3;
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().catch(() => { });
        }
      }, 100);
    }
  }, [isMuted]);

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/Vault-1.mp3"
        loop
        preload="auto"
        id="background-music"
        style={{ display: 'none' }}
      />
      <button
        onClick={() => setIsMuted(!isMuted)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed bottom-20 right-6 z-50 p-2 rounded-full transition-all duration-200 transform ${isHovered ? 'scale-110' : ''} ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
        style={{ 
          backgroundColor: 'rgba(24, 24, 24, 0.8)', 
          color: isMuted ? 'white' : '#10b981',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>
    </>
  );
};

export default AudioControl;