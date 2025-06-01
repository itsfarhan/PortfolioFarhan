import { useState, useEffect, useRef } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [showName, setShowName] = useState(false);
  const [audioPromptVisible, setAudioPromptVisible] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playBackgroundMusic = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().then(() => {
        setAudioPromptVisible(false);
      }).catch(error => {
        console.log('Could not autoplay audio from loading screen:', error);
      });
    }
  };

  const handleSkip = () => {
    window.location.href = '/home';
  };

  useEffect(() => {
    const audioElement = new Audio('/audio/Vault-1.mp3');
    audioElement.loop = true;
    audioElement.volume = 0.3;
    audioRef.current = audioElement;

    let interval: ReturnType<typeof setInterval> | null = null;

    // Show name and start progress bar
    const nameAndProgressTimer = setTimeout(() => {
      setShowName(true);
      setProgress(2);
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            if (interval) clearInterval(interval);
            window.location.href = '/home';
            return 100;
          }
          return prev + 2;
        });
      }, 30);
    }, 6000); // Reduced for better UX

    // Hide the audio prompt after a few seconds
    const hideAudioPromptTimer = setTimeout(() => {
      setAudioPromptVisible(false);
    }, 4000);

    return () => {
      if (interval) clearInterval(interval);
      clearTimeout(nameAndProgressTimer);
      clearTimeout(hideAudioPromptTimer);
      
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);

  return (
    <div
      className="loading-screen"
      onClick={playBackgroundMusic}
    >
      <video
        className="loading-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/loading-animation.mp4" type="video/mp4" />
      </video>
      {audioPromptVisible && (
        <div className="audio-prompt font-cinematic">
          <p className="text-sm">Click anywhere to enable audio</p>
        </div>
      )}
      <div className="loading-content">
        {showName && (
          <>
            <h1 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-4 cinematic-title font-cinematic tracking-wide">FARHAN AHMED</h1>
            <p className="text-sm md:text-base text-white/80 mb-6 cinematic-subtitle font-cinematic tracking-wider">BACKEND DEV • AWS COMMUNITY BUILDER • OPEN SOURCE</p>
            <div className="loading-progress max-w-xs mx-auto">
              <div
                className="loading-progress-bar"
                style={{ width: `${progress}%` }}
              />
            </div>
          </>
        )}
      </div>
      <button
        className="fixed bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-emerald-600 text-white text-sm rounded-md hover:bg-emerald-700 transition-all duration-200 transform hover:scale-105 z-50"
        onClick={handleSkip}
      >
        Skip Intro
      </button>
      <div className="scanlines"></div>
    </div>
  );
};

export default LoadingScreen;