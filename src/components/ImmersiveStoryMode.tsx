import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Maximize,
  BookOpen,
  Star,
  Clock,
  MapPin,
  Users,
  Sparkles,
} from "lucide-react";
import { SpaceEvent } from "@/data/spaceEvents";
import { useBackgroundAudio } from "@/components/BackgroundAudio";

interface ImmersiveStoryModeProps {
  events: SpaceEvent[];
}

const ImmersiveStoryMode = ({ events }: ImmersiveStoryModeProps) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isNarrating, setIsNarrating] = useState(false);
  const [availableVoices, setAvailableVoices] = useState<
    SpeechSynthesisVoice[]
  >([]);
  const [selectedVoice, setSelectedVoice] =
    useState<SpeechSynthesisVoice | null>(null);

  const { pauseBackgroundAudio, resumeBackgroundAudio } = useBackgroundAudio();
  const currentEvent = events[currentStoryIndex];
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Load available voices and select female voice
  useEffect(() => {
    const loadVoices = () => {
      const voices = speechSynthesis.getVoices();
      setAvailableVoices(voices);

      // Find a female voice (preferably English)
      const femaleVoice =
        voices.find(
          (voice) =>
            (voice.name.toLowerCase().includes("female") ||
              voice.name.toLowerCase().includes("woman") ||
              voice.name.toLowerCase().includes("samantha") ||
              voice.name.toLowerCase().includes("anna") ||
              voice.name.toLowerCase().includes("karen") ||
              voice.name.toLowerCase().includes("moira") ||
              voice.name.toLowerCase().includes("tessa") ||
              voice.name.toLowerCase().includes("veena") ||
              (voice.name.toLowerCase().includes("alex") &&
                voice.name.toLowerCase().includes("female"))) &&
            voice.lang.startsWith("en"),
        ) ||
        voices.find(
          (voice) =>
            voice.lang.startsWith("en") &&
            voice.name.toLowerCase().includes("female"),
        );

      if (femaleVoice) {
        setSelectedVoice(femaleVoice);
      } else if (voices.length > 0) {
        // Fallback to first available English voice
        const englishVoice = voices.find((voice) =>
          voice.lang.startsWith("en"),
        );
        setSelectedVoice(englishVoice || voices[0]);
      }
    };

    loadVoices();
    speechSynthesis.addEventListener("voiceschanged", loadVoices);

    return () => {
      speechSynthesis.removeEventListener("voiceschanged", loadVoices);
    };
  }, []);

  // Voice narration function
  const startNarration = () => {
    if (!selectedVoice || !window.speechSynthesis) return;

    // Stop any existing narration
    speechSynthesis.cancel();

    // Create story text from current segment
    const storyText = currentSegment
      ? currentSegment.content
      : currentEvent.description;

    const utterance = new SpeechSynthesisUtterance(storyText);
    utterance.voice = selectedVoice;
    utterance.rate = 0.7; // Slow pace as requested
    utterance.pitch = 1.0;
    utterance.volume = 0.8;

    utterance.onstart = () => {
      setIsNarrating(true);
      pauseBackgroundAudio(); // Pause background audio during narration
    };

    utterance.onend = () => {
      setIsNarrating(false);
      resumeBackgroundAudio(); // Resume background audio
    };

    utterance.onerror = () => {
      setIsNarrating(false);
      resumeBackgroundAudio();
    };

    speechRef.current = utterance;
    speechSynthesis.speak(utterance);
  };

  const stopNarration = () => {
    speechSynthesis.cancel();
    setIsNarrating(false);
    resumeBackgroundAudio();
  };

  const toggleNarration = () => {
    if (isNarrating) {
      stopNarration();
    } else {
      startNarration();
    }
  };

  // Auto-hide controls
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (showControls) {
      timeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [showControls]);

  // Cleanup voice narration on unmount
  useEffect(() => {
    return () => {
      speechSynthesis.cancel();
    };
  }, []);

  // Auto-advance story
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (currentStoryIndex < events.length - 1) {
            setCurrentStoryIndex(currentStoryIndex + 1);
            setProgress(0);
            stopNarration(); // Stop narration when auto-advancing
          } else {
            setIsPlaying(false);
            setProgress(0);
            stopNarration(); // Stop narration when reaching the end
          }
          return 0;
        }
        return prev + 1;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [isPlaying, currentStoryIndex, events.length]);

  const nextStory = () => {
    stopNarration(); // Stop narration when changing stories
    if (currentStoryIndex < events.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
      setProgress(0);
    } else {
      setIsPlaying(false);
      setProgress(0);
    }
  };

  const prevStory = () => {
    stopNarration(); // Stop narration when changing stories
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
      setProgress(0);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      containerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  const generateStorySegments = (event: SpaceEvent) => {
    return [
      {
        type: "introduction",
        content: `In the year ${event.year}, humanity was about to witness something extraordinary...`,
        emphasis: event.year.toString(),
      },
      {
        type: "setting",
        content: `At ${event.location}, the stage was set for a moment that would change our understanding of the cosmos.`,
        emphasis: event.location,
      },
      {
        type: "event",
        content: event.title,
        emphasis: event.title,
      },
      {
        type: "description",
        content: event.description,
        emphasis: null,
      },
      {
        type: "details",
        content: event.details,
        emphasis: null,
      },
      {
        type: "legacy",
        content:
          "This moment became a stepping stone in humanity's journey to understand and explore the infinite cosmos.",
        emphasis: null,
      },
    ];
  };

  const storySegments = generateStorySegments(currentEvent);
  const currentSegment =
    storySegments[Math.floor((progress / 100) * storySegments.length)];

  return (
    <div
      ref={containerRef}
      className={`relative ${isFullscreen ? "fixed inset-0 z-50" : "rounded-xl overflow-hidden"} bg-black`}
      onMouseMove={() => setShowControls(true)}
    >
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        {currentEvent.imageUrl && (
          <motion.div
            key={currentEvent.id}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img
              src={currentEvent.imageUrl}
              alt={currentEvent.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          </motion.div>
        )}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => {
          // Pre-compute random values to avoid re-computation on each render
          const xOffset = ((i * 37) % 100) - 50; // Deterministic but varied
          const duration = 15 + ((i * 3) % 10); // 15-25 seconds
          const delay = (i * 2) % 10; // 0-10 seconds
          const leftPosition = (i * 47) % 100; // 0-100%

          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              animate={{
                y: [-10, -800],
                x: [0, xOffset],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: "linear",
                delay,
              }}
              style={{
                left: `${leftPosition}%`,
                top: "100%",
              }}
            />
          );
        })}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col justify-end h-full min-h-[70vh] p-8">
        {/* Story Progress Indicator */}
        <div className="absolute top-8 left-8 right-8 z-20">
          <div className="flex justify-between items-center mb-4">
            <Badge
              variant="outline"
              className="bg-black/50 backdrop-blur-sm text-white border-white/20"
            >
              <BookOpen className="w-3 h-3 mr-1" />
              Chapter {currentStoryIndex + 1} of {events.length}
            </Badge>
            <div className="text-white text-sm font-mono bg-black/50 backdrop-blur-sm px-3 py-1 rounded">
              {Math.floor((progress / 100) * storySegments.length) + 1}/
              {storySegments.length}
            </div>
          </div>
          <Progress value={progress} className="h-1 bg-white/20" />
        </div>

        {/* Main Story Content */}
        <motion.div
          className="space-y-6 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Event Metadata */}
          <div className="flex flex-wrap gap-4 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{new Date(currentEvent.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{currentEvent.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>{currentEvent.participants.slice(0, 2).join(", ")}</span>
            </div>
          </div>

          {/* Main Title */}
          <motion.h1
            key={`title-${currentStoryIndex}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
          >
            {currentEvent.title}
          </motion.h1>

          {/* Current Story Segment */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`segment-${Math.floor((progress / 100) * storySegments.length)}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                {currentSegment?.content}
              </p>

              {currentSegment?.emphasis && (
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="inline-block"
                >
                  <Badge
                    variant="outline"
                    className="bg-primary/20 text-primary border-primary/50 text-lg px-4 py-2"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    {currentSegment.emphasis}
                  </Badge>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Category and Importance */}
          <div className="flex gap-3">
            <Badge
              variant="outline"
              className="bg-black/50 backdrop-blur-sm text-white border-white/30"
            >
              {currentEvent.category.charAt(0).toUpperCase() +
                currentEvent.category.slice(1)}
            </Badge>
            <Badge
              variant="outline"
              className={`backdrop-blur-sm border-white/30 ${
                currentEvent.importance === "high"
                  ? "bg-red-500/20 text-red-300"
                  : currentEvent.importance === "medium"
                    ? "bg-yellow-500/20 text-yellow-300"
                    : "bg-green-500/20 text-green-300"
              }`}
            >
              <Star className="w-3 h-3 mr-1" />
              {currentEvent.importance} Priority
            </Badge>
          </div>
        </motion.div>
      </div>

      {/* Media Controls */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-8 left-8 right-8 z-20"
          >
            <Card className="bg-black/50 backdrop-blur-lg border-white/20">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  {/* Playback Controls */}
                  <div className="flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={prevStory}
                      disabled={currentStoryIndex === 0}
                      className="text-white hover:bg-white/20"
                    >
                      <SkipBack className="w-4 h-4" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="lg"
                      onClick={togglePlay}
                      className="text-white hover:bg-white/20"
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6" />
                      ) : (
                        <Play className="w-6 h-6" />
                      )}
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={nextStory}
                      disabled={currentStoryIndex === events.length - 1}
                      className="text-white hover:bg-white/20"
                    >
                      <SkipForward className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Additional Controls */}
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleNarration}
                      className="text-white hover:bg-white/20"
                    >
                      {isNarrating ? (
                        <Volume2 className="w-4 h-4" />
                      ) : (
                        <VolumeX className="w-4 h-4" />
                      )}
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleFullscreen}
                      className="text-white hover:bg-white/20"
                    >
                      <Maximize className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImmersiveStoryMode;
