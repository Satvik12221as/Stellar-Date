import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";

// Audio Context for global control
interface AudioContextType {
  pauseBackgroundAudio: () => void;
  resumeBackgroundAudio: () => void;
  isBackgroundMuted: boolean;
  toggleBackgroundAudio: () => void;
}

const AudioContext = createContext<AudioContextType | null>(null);

export const useBackgroundAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useBackgroundAudio must be used within AudioProvider");
  }
  return context;
};

// Audio Provider Component
export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  useEffect(() => {
    // Create audio element with space ambient sound
    // Using a data URL for a simple ambient tone generator
    // In production, you would use actual space ambient audio files
    audioRef.current = new Audio();

    // Generate ambient space sound using Web Audio API
    const createSpaceAmbientSound = () => {
      try {
        const audioContext = new (window.AudioContext ||
          (window as any).webkitAudioContext)();
        const oscillator1 = audioContext.createOscillator();
        const oscillator2 = audioContext.createOscillator();
        const oscillator3 = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        const filterNode = audioContext.createBiquadFilter();

        // Create layered ambient frequencies
        oscillator1.frequency.setValueAtTime(55, audioContext.currentTime); // Low rumble
        oscillator2.frequency.setValueAtTime(110, audioContext.currentTime); // Harmonic
        oscillator3.frequency.setValueAtTime(220, audioContext.currentTime); // Upper harmonic

        oscillator1.type = "sine";
        oscillator2.type = "triangle";
        oscillator3.type = "sine";

        // Set up filter for atmospheric effect
        filterNode.type = "lowpass";
        filterNode.frequency.setValueAtTime(800, audioContext.currentTime);
        filterNode.Q.setValueAtTime(1, audioContext.currentTime);

        // Very low volume for ambient background
        gainNode.gain.setValueAtTime(0.03, audioContext.currentTime);

        // Connect the audio graph
        oscillator1.connect(gainNode);
        oscillator2.connect(gainNode);
        oscillator3.connect(gainNode);
        gainNode.connect(filterNode);
        filterNode.connect(audioContext.destination);

        // Add subtle modulation for organic feel
        const lfo = audioContext.createOscillator();
        const lfoGain = audioContext.createGain();
        lfo.frequency.setValueAtTime(0.1, audioContext.currentTime);
        lfoGain.gain.setValueAtTime(5, audioContext.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(oscillator1.frequency);

        oscillator1.start();
        oscillator2.start();
        oscillator3.start();
        lfo.start();

        return audioContext;
      } catch (error) {
        console.log("Web Audio API not supported, using fallback");
        return null;
      }
    };

    let audioContext: AudioContext | null = null;

    const startAmbientAudio = () => {
      if (!hasUserInteracted) return;

      audioContext = createSpaceAmbientSound();
      setIsPlaying(true);
    };

    // Start audio after user interaction
    const handleUserInteraction = () => {
      if (!hasUserInteracted) {
        setHasUserInteracted(true);
        startAmbientAudio();
      }
    };

    // Add event listeners for user interaction
    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("keydown", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
      if (audioContext) {
        audioContext.close();
      }
    };
  }, [hasUserInteracted]);

  const pauseBackgroundAudio = () => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const resumeBackgroundAudio = () => {
    if (audioRef.current && !isMuted) {
      audioRef.current.play().catch(console.log);
      setIsPlaying(true);
    }
  };

  const toggleBackgroundAudio = () => {
    if (isMuted) {
      setIsMuted(false);
      resumeBackgroundAudio();
    } else {
      setIsMuted(true);
      pauseBackgroundAudio();
    }
  };

  const contextValue: AudioContextType = {
    pauseBackgroundAudio,
    resumeBackgroundAudio,
    isBackgroundMuted: isMuted,
    toggleBackgroundAudio,
  };

  return (
    <AudioContext.Provider value={contextValue}>
      {children}
    </AudioContext.Provider>
  );
};

// Background Audio Control Button
export const BackgroundAudioControl: React.FC = () => {
  const { isBackgroundMuted, toggleBackgroundAudio } = useBackgroundAudio();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleBackgroundAudio}
      className="fixed top-4 right-4 z-50 bg-background/50 backdrop-blur-sm hover:bg-background/70"
      title={
        isBackgroundMuted
          ? "Enable ambient space sounds"
          : "Disable ambient space sounds"
      }
    >
      {isBackgroundMuted ? (
        <VolumeX className="w-4 h-4" />
      ) : (
        <Volume2 className="w-4 h-4" />
      )}
    </Button>
  );
};

// Enhanced Background Audio with actual space sounds
export const EnhancedBackgroundAudio: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { isBackgroundMuted, pauseBackgroundAudio, resumeBackgroundAudio } =
    useBackgroundAudio();

  useEffect(() => {
    // Create audio element with multiple space ambient tracks
    const audioFiles = [
      // These would be actual space ambient audio files in production
      // For now, we'll use a data URL with generated ambient sound
      "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBz2X4PO+cysELYPL8duSQwkfYbnl4qBMCg9Un+T16nRkGws=",
    ];

    audioRef.current = new Audio(audioFiles[0]);
    audioRef.current.loop = true;
    audioRef.current.volume = 1.0; // Maximum possible volume
    audioRef.current.preload = "auto";

    // Handle audio events
    const handleCanPlay = () => {
      if (!isBackgroundMuted) {
        audioRef.current?.play().catch(() => {
          // Ignore autoplay restrictions
        });
        setIsPlaying(true);
      }
    };

    const handleEnded = () => {
      // Ensure looping
      if (audioRef.current && !isBackgroundMuted) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(console.log);
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("canplay", handleCanPlay);
      audioRef.current.addEventListener("ended", handleEnded);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("canplay", handleCanPlay);
        audioRef.current.removeEventListener("ended", handleEnded);
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [isBackgroundMuted]);

  // Control playback based on mute state
  useEffect(() => {
    if (audioRef.current) {
      if (isBackgroundMuted) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch(() => {
          // Handle autoplay restrictions
        });
        setIsPlaying(true);
      }
    }
  }, [isBackgroundMuted]);

  return null; // This component doesn't render anything visible
};

// Simple Space Ambient Generator
export const SpaceAmbientGenerator: React.FC = () => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);
  const { isBackgroundMuted } = useBackgroundAudio();

  useEffect(() => {
    const createAmbientSound = () => {
      try {
        const AudioContextClass =
          window.AudioContext || (window as any).webkitAudioContext;
        audioContextRef.current = new AudioContextClass();

        const context = audioContextRef.current;
        gainNodeRef.current = context.createGain();
        gainNodeRef.current.gain.setValueAtTime(0.75, context.currentTime); // Further increased volume

        // Create multiple oscillators for rich ambient texture
        const frequencies = [55, 82.5, 110, 165, 220]; // Deep space frequencies

        frequencies.forEach((freq, index) => {
          const oscillator = context.createOscillator();
          const oscGain = context.createGain();

          oscillator.frequency.setValueAtTime(freq, context.currentTime);
          oscillator.type = index % 2 === 0 ? "sine" : "triangle";

          // Vary individual oscillator volumes
          oscGain.gain.setValueAtTime(0.3 - index * 0.05, context.currentTime);

          // Add subtle frequency modulation
          const lfo = context.createOscillator();
          const lfoGain = context.createGain();
          lfo.frequency.setValueAtTime(
            0.05 + index * 0.01,
            context.currentTime,
          );
          lfoGain.gain.setValueAtTime(1 + index * 0.5, context.currentTime);

          lfo.connect(lfoGain);
          lfoGain.connect(oscillator.frequency);

          oscillator.connect(oscGain);
          oscGain.connect(gainNodeRef.current!);

          oscillator.start();
          lfo.start();

          oscillatorsRef.current.push(oscillator);
        });

        // Add a low-pass filter for atmospheric effect
        const filter = context.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(1200, context.currentTime);
        filter.Q.setValueAtTime(0.5, context.currentTime);

        gainNodeRef.current.connect(filter);
        filter.connect(context.destination);
      } catch (error) {
        console.log("Web Audio API not supported");
      }
    };

    const handleUserInteraction = () => {
      if (!audioContextRef.current && !isBackgroundMuted) {
        createAmbientSound();
      }
    };

    // Wait for user interaction to start audio (browser autoplay policy)
    document.addEventListener("click", handleUserInteraction, { once: true });
    document.addEventListener("keydown", handleUserInteraction, { once: true });

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);

      if (audioContextRef.current) {
        oscillatorsRef.current.forEach((osc) => {
          try {
            osc.stop();
          } catch (e) {
            // Oscillator may already be stopped
          }
        });
        audioContextRef.current.close();
      }
    };
  }, [isBackgroundMuted]);

  // Control volume based on mute state
  useEffect(() => {
    if (gainNodeRef.current) {
      if (isBackgroundMuted) {
        gainNodeRef.current.gain.setValueAtTime(
          0,
          audioContextRef.current!.currentTime,
        );
      } else {
        gainNodeRef.current.gain.setValueAtTime(
          0.75,
          audioContextRef.current!.currentTime,
        );
      }
    }
  }, [isBackgroundMuted]);

  return null;
};
