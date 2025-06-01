import { useState, useEffect, useRef } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [showName, setShowName] = useState(false);
  const [audioPromptVisible, setAudioPromptVisible] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Function to attempt playing the background music
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
    // Create audio element
    const audioElement = new Audio('/audio/Vault-1.mp3');
    audioElement.loop = true;
    audioElement.volume = 0.3;
    audioRef.current = audioElement;

    let interval: ReturnType<typeof setInterval> | null = null;

    // Show name and start progress bar at the 13th second
    const nameAndProgressTimer = setTimeout(() => {
      setShowName(true);
      setProgress(2); // Start progress bar animation
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            if (interval) clearInterval(interval);
            // Auto-navigate to home when progress reaches 100%
            window.location.href = '/home';
            return 100;
          }
          return prev + 2;
        });
      }, 30); // Update progress every 30ms
    }, 8000); // Reduced from 13 seconds to 8 seconds for better UX

    // Hide the audio prompt after 5 seconds
    const hideAudioPromptTimer = setTimeout(() => {
      setAudioPromptVisible(false);
    }, 5000); // Reduced from 8 seconds to 5 seconds

    return () => {
      if (interval) clearInterval(interval);
      clearTimeout(nameAndProgressTimer);
      clearTimeout(hideAudioPromptTimer);
      
      // Stop and clean up audio when component unmounts
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
          <p className="text-lg">Click anywhere to enable audio</p>
        </div>
      )}
      <div className="loading-content">
        {showName && (
          <>
            <h1 className="text-5xl font-bold text-emerald-500 mb-6 cinematic-title font-cinematic">FARHAN AHMED</h1>
            <p className="text-xl text-white mb-8 cinematic-subtitle font-cinematic">BACKEND DEV • AWS COMMUNITY BUILDER • OPEN SOURCE</p>
            <div className="loading-progress max-w-sm mx-auto">
              <div
                className="loading-progress-bar"
                style={{ width: `${progress}%` }}
              />
            </div>
          </>
        )}
      </div>
      <button
        className="fixed bottom-10 left-1/2 -translate-x-1/2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-600/20 z-50"
        onClick={handleSkip}
      >
        Skip Intro
      </button>
      <div className="scanlines"></div>
    </div>
  );
};

export default LoadingScreen;