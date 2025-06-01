import { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [showName, setShowName] = useState(false);

  const handleSkip = () => {
    window.location.href = '/home';
  };

  useEffect(() => {
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
    }, 13000); // 13 seconds

    return () => {
      if (interval) clearInterval(interval);
      clearTimeout(nameAndProgressTimer);
    };
  }, []);

  return (
    <div className="loading-screen">
      <video
        className="loading-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/loading-animation.mp4" type="video/mp4" />
      </video>
      <div className="loading-content">
        {showName && (
          <>
            <h1 className="text-4xl font-bold text-emerald-500 mb-4 cinematic-title">FARHAN AHMED</h1>
            <p className="text-xl text-white mb-4 cinematic-subtitle">Backend Dev | AWS Community Builder | Open Source Contributor</p>
            <div className="loading-progress">
              <div
                className="loading-progress-bar"
                style={{ width: `${progress}%` }}
              />
            </div>
          </>
        )}
      </div>
      <button
        className="fixed bottom-10 left-1/2 -translate-x-1/2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors z-50"
        onClick={handleSkip}
      >
        Skip
      </button>
      <div className="scanlines"></div>
    </div>
  );
};

export default LoadingScreen;