import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AudioControl = () => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio
  useEffect(() => {
    // Create audio element in DOM to better handle autoplay
    const audioElement = document.createElement('audio');
    audioElement.src = '/audio/Vault-1.mp3';
    audioElement.loop = true;
    audioElement.volume = 0.3;
    audioElement.id = 'background-music';
    audioElement.preload = 'auto';

    // Store in ref for later control
    audioRef.current = audioElement;

    // Add to DOM for better browser support
    document.body.appendChild(audioElement);

    // Try multiple play attempts
    const tryPlay = () => {
      if (audioElement.paused) {
        audioElement.play().catch(() => { });
      }
    };

    // Attempt initial play
    tryPlay();

    // Set up various timers to try playing at different times
    const timers = [
      setTimeout(tryPlay, 500),   // Quick initial retry
      setTimeout(tryPlay, 2000),  // After 2 seconds
      setTimeout(tryPlay, 5000),  // After 5 seconds
      setTimeout(tryPlay, 10000), // After 10 seconds
      setTimeout(tryPlay, 14000)  // Just before loading screen might end
    ];

    // Set up a variety of events that might trigger audio playback
    const events = ['click', 'touchstart', 'keydown', 'scroll', 'mousemove'];

    const playOnUserAction = () => {
      if (audioElement.paused) {
        audioElement.play().catch(() => { });
      }
    };

    // Add all listeners
    events.forEach(evt => {
      window.addEventListener(evt, playOnUserAction);
    });

    // Cleanup function
    return () => {
      // Clear all timers
      timers.forEach(timer => clearTimeout(timer));

      // Remove all event listeners
      events.forEach(evt => {
        window.removeEventListener(evt, playOnUserAction);
      });

      // Remove audio element from DOM
      if (document.body.contains(audioElement)) {
        document.body.removeChild(audioElement);
      }
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

      // Try to play with a small delay to ensure UI has updated
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().catch(() => { });
        }
      }, 100);
    }
  }, [isMuted]);

  return (
    <button
      onClick={() => setIsMuted(!isMuted)}
      className="fixed bottom-24 right-4 z-50 backdrop-blur-md p-2 rounded-full hover:text-emerald-500 transition-colors"
      style={{ backgroundColor: 'rgba(24, 24, 24, 0.5)', color: isMuted ? 'white' : '#10b981' }}
      aria-label={isMuted ? 'Unmute' : 'Mute'}
    >
      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
    </button>
  );
};

export default AudioControl;