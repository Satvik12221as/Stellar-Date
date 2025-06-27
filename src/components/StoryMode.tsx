import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
  BookOpen,
  Sparkles,
  Volume2,
  VolumeX,
  Settings,
} from "lucide-react";
import { SpaceEvent } from "@/data/spaceEvents";
import { useBackgroundAudio } from "@/components/BackgroundAudio";

interface StoryModeProps {
  events: SpaceEvent[];
}

const StoryMode = ({ events }: StoryModeProps) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [storyProgress, setStoryProgress] = useState(0);
  const [isNarrating, setIsNarrating] = useState(false);
  const [availableVoices, setAvailableVoices] = useState<
    SpeechSynthesisVoice[]
  >([]);
  const [selectedVoice, setSelectedVoice] = useState<string>("");
  const [showVoiceSettings, setShowVoiceSettings] = useState(false);
  const [speechRate, setSpeechRate] = useState(0.9);

  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);
  const currentEvent = events[currentStoryIndex];
  const { pauseBackgroundAudio, resumeBackgroundAudio } = useBackgroundAudio();

  // Load available voices
  useEffect(() => {
    const loadVoices = () => {
      const voices = speechSynthesis.getVoices();

      // Enhanced filtering for soothing and cute voices
      const sootingVoiceNames = [
        "female",
        "woman",
        "zira",
        "susan",
        "aria",
        "samantha",
        "helen",
        "kate",
        "karen",
        "hazel",
        "zoë",
        "fiona",
        "moira",
        "tessa",
        "victoria",
        "serena",
        "emma",
        "claire",
        "anna",
        "lily",
        "grace",
        "sophia",
        "olivia",
        "emily",
        "natural",
        "enhanced",
        "premium",
        "neural",
        "eloquent",
        "pleasant",
      ];

      // Filter for English voices with soothing characteristics
      const sootingVoices = voices.filter((voice) => {
        const isEnglish = voice.lang.startsWith("en");
        const voiceName = voice.name.toLowerCase();
        const isSoothing = sootingVoiceNames.some((name) =>
          voiceName.includes(name),
        );
        const isHighQuality =
          voiceName.includes("enhanced") ||
          voiceName.includes("premium") ||
          voiceName.includes("neural") ||
          voiceName.includes("natural");

        return isEnglish && (isSoothing || isHighQuality);
      });

      // Sort voices by preference (high quality first, then female names)
      const sortedVoices = sootingVoices.sort((a, b) => {
        const aName = a.name.toLowerCase();
        const bName = b.name.toLowerCase();

        // Prioritize high-quality voices
        const aHighQuality =
          aName.includes("enhanced") ||
          aName.includes("premium") ||
          aName.includes("neural");
        const bHighQuality =
          bName.includes("enhanced") ||
          bName.includes("premium") ||
          bName.includes("neural");

        if (aHighQuality && !bHighQuality) return -1;
        if (!aHighQuality && bHighQuality) return 1;

        // Then prioritize known soothing female names
        const femaleNames = [
          "samantha",
          "aria",
          "susan",
          "zira",
          "emma",
          "sophia",
          "emily",
        ];
        const aFemale = femaleNames.some((name) => aName.includes(name));
        const bFemale = femaleNames.some((name) => bName.includes(name));

        if (aFemale && !bFemale) return -1;
        if (!aFemale && bFemale) return 1;

        return a.name.localeCompare(b.name);
      });

      // If no soothing voices found, use any English voice but prioritize female-sounding ones
      let voicesToUse = sortedVoices;
      if (voicesToUse.length === 0) {
        const allEnglishVoices = voices.filter((voice) =>
          voice.lang.startsWith("en"),
        );
        const femaleEnglishVoices = allEnglishVoices.filter(
          (voice) =>
            voice.name.toLowerCase().includes("female") ||
            voice.name.toLowerCase().includes("woman") ||
            !voice.name.toLowerCase().includes("male"),
        );
        voicesToUse =
          femaleEnglishVoices.length > 0
            ? femaleEnglishVoices
            : allEnglishVoices;
      }

      setAvailableVoices(voicesToUse);

      // Auto-select the best available voice
      if (voicesToUse.length > 0 && !selectedVoice) {
        setSelectedVoice(voicesToUse[0].name);
      }
    };

    loadVoices();
    speechSynthesis.addEventListener("voiceschanged", loadVoices);

    return () => {
      speechSynthesis.removeEventListener("voiceschanged", loadVoices);
    };
  }, [selectedVoice]);

  // Auto-advance story
  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setStoryProgress((prev) => {
        if (prev >= 100) {
          nextStory();
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [isAutoPlay, currentStoryIndex]);

  const stopNarration = () => {
    speechSynthesis.cancel();
    setIsNarrating(false);
    // Resume background audio when narration stops
    resumeBackgroundAudio();
  };

  const startNarration = () => {
    if (!availableVoices.length) return;

    stopNarration();

    // Pause background audio when narration starts
    pauseBackgroundAudio();

    const narrative = generateNarrative(currentEvent);
    const fullText = narrative.join(" ");

    const utterance = new SpeechSynthesisUtterance(fullText);
    const voice = availableVoices.find((v) => v.name === selectedVoice);

    if (voice) {
      utterance.voice = voice;
    }

    utterance.rate = speechRate;
    utterance.pitch = 1.0;
    utterance.volume = 0.8;

    utterance.onstart = () => {
      setIsNarrating(true);
      // Ensure background audio is paused
      pauseBackgroundAudio();
    };
    utterance.onend = () => {
      setIsNarrating(false);
      // Resume background audio when narration completes
      resumeBackgroundAudio();
      // Auto-advance to next story if auto-play is enabled
      if (isAutoPlay && currentStoryIndex < events.length - 1) {
        setTimeout(() => nextStory(), 1000);
      }
    };
    utterance.onerror = () => {
      setIsNarrating(false);
      // Resume background audio on error
      resumeBackgroundAudio();
    };

    speechRef.current = utterance;
    speechSynthesis.speak(utterance);
  };

  const toggleNarration = () => {
    if (isNarrating) {
      stopNarration();
    } else {
      startNarration();
    }
  };

  const nextStory = () => {
    stopNarration();
    if (currentStoryIndex < events.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
      setStoryProgress(0);
    } else {
      setIsAutoPlay(false);
      setStoryProgress(0);
    }
  };

  const prevStory = () => {
    stopNarration();
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
      setStoryProgress(0);
    }
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
    if (!isAutoPlay) {
      setStoryProgress(0);
    } else {
      stopNarration();
    }
  };

  const resetStory = () => {
    stopNarration();
    setCurrentStoryIndex(0);
    setStoryProgress(0);
    setIsAutoPlay(false);
  };

  const goToStory = (index: number) => {
    stopNarration();
    setCurrentStoryIndex(index);
    setStoryProgress(0);
  };

  // Clean up speech synthesis on unmount
  useEffect(() => {
    return () => {
      stopNarration();
    };
  }, []);

  // Stop narration when story changes
  useEffect(() => {
    stopNarration();
  }, [currentStoryIndex]);

  // Generate narrative text based on event
  const generateNarrative = (event: SpaceEvent) => {
    const narratives = {
      launch: [
        `The countdown begins... ${event.year} marked a pivotal moment in space exploration.`,
        `Against the backdrop of ${event.location}, engineers and scientists held their breath.`,
        `${event.title} was about to make history.`,
        `${event.details}`,
        `This mission would forever change our understanding of the cosmos.`,
      ],
      landing: [
        `The moment of truth had arrived. After traveling through the vast emptiness of space...`,
        `In ${event.year}, at ${event.location}, something extraordinary was about to happen.`,
        `${event.title} represented years of planning, hope, and human ingenuity.`,
        `${event.details}`,
        `This achievement opened new chapters in humanity's journey to the stars.`,
      ],
      discovery: [
        `Science has always been about pushing boundaries, and ${event.year} was no exception.`,
        `What happened next at ${event.location} would rewrite textbooks.`,
        `${event.title} emerged from humanity's endless curiosity about the universe.`,
        `${event.details}`,
        `This discovery illuminated new paths for future explorers of the cosmos.`,
      ],
      mission: [
        `Every great mission begins with a dream and the courage to pursue it.`,
        `${event.year} saw an ambitious plan unfold at ${event.location}.`,
        `${event.title} was more than just a mission—it was a testament to human determination.`,
        `${event.details}`,
        `The ripple effects of this endeavor continue to inspire space exploration today.`,
      ],
      milestone: [
        `Some moments in history stand as beacons, lighting the way for future generations.`,
        `${event.year} marked such a moment at ${event.location}.`,
        `${event.title} represented a turning point in our relationship with space.`,
        `${event.details}`,
        `This milestone proved that the impossible was merely waiting for the right moment.`,
      ],
    };

    return narratives[event.category] || narratives.mission;
  };

  const storyText = generateNarrative(currentEvent);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Story Progress Bar */}
      <div className="w-full bg-muted rounded-full h-1 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-cosmic-500"
          initial={{ width: 0 }}
          animate={{
            width: `${((currentStoryIndex + 1) / events.length) * 100}%`,
          }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Story Controls */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3 flex-wrap">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleAutoPlay}
            className="gap-2"
          >
            {isAutoPlay ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
            {isAutoPlay ? "Pause" : "Auto Play"}
          </Button>

          <Button
            variant={isNarrating ? "default" : "outline"}
            size="sm"
            onClick={toggleNarration}
            className="gap-2"
            disabled={!availableVoices.length}
          >
            {isNarrating ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
            {isNarrating ? "Stop Voice" : "Narrate"}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowVoiceSettings(!showVoiceSettings)}
            className="gap-2"
          >
            <Settings className="w-4 h-4" />
          </Button>

          <Button variant="ghost" size="sm" onClick={resetStory}>
            <RotateCcw className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            {currentStoryIndex + 1} of {events.length}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={prevStory}
            disabled={currentStoryIndex === 0}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={nextStory}
            disabled={currentStoryIndex === events.length - 1}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Voice Settings */}
      <AnimatePresence>
        {showVoiceSettings && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-4 space-y-4">
                <h4 className="font-semibold text-sm flex items-center gap-2">
                  <Volume2 className="w-4 h-4" />
                  Voice Settings
                  <span className="text-xs text-muted-foreground font-normal">
                    ({availableVoices.length} soothing voices available)
                  </span>
                </h4>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">
                      Choose Your Narrator
                      <span className="block text-xs text-primary/70">
                        ✨ Premium and 💫 Soothing voices recommended
                      </span>
                    </label>
                    <Select
                      value={selectedVoice}
                      onValueChange={setSelectedVoice}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a soothing voice" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableVoices.map((voice) => {
                          const isHighQuality =
                            voice.name.toLowerCase().includes("enhanced") ||
                            voice.name.toLowerCase().includes("premium") ||
                            voice.name.toLowerCase().includes("neural") ||
                            voice.name.toLowerCase().includes("natural");
                          const isFemale = [
                            "female",
                            "woman",
                            "samantha",
                            "aria",
                            "susan",
                            "zira",
                            "emma",
                            "sophia",
                            "emily",
                          ].some((name) =>
                            voice.name.toLowerCase().includes(name),
                          );

                          return (
                            <SelectItem key={voice.name} value={voice.name}>
                              <div className="flex items-center gap-2">
                                <span>{voice.name}</span>
                                {isHighQuality && (
                                  <span className="text-xs text-green-400">
                                    ✨ Premium
                                  </span>
                                )}
                                {isFemale && (
                                  <span className="text-xs text-pink-400">
                                    💫 Soothing
                                  </span>
                                )}
                                <span className="text-xs text-muted-foreground">
                                  ({voice.lang})
                                </span>
                              </div>
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">
                      Speed: {speechRate.toFixed(1)}x
                    </label>
                    <input
                      type="range"
                      min="0.5"
                      max="1.5"
                      step="0.1"
                      value={speechRate}
                      onChange={(e) =>
                        setSpeechRate(parseFloat(e.target.value))
                      }
                      className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={startNarration}
                    disabled={!selectedVoice}
                    className="gap-2"
                  >
                    <Volume2 className="w-3 h-3" />
                    Test Voice
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Story Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentEvent.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-hidden bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg border border-border/50 shadow-2xl">
            {/* Hero Image */}
            {currentEvent.imageUrl && (
              <div className="relative h-80 overflow-hidden">
                <motion.img
                  src={currentEvent.imageUrl}
                  alt={currentEvent.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                {/* Auto-play progress bar overlay */}
                {isAutoPlay && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-black/30">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: `${storyProgress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                )}

                {/* Event metadata overlay */}
                <div className="absolute top-4 left-4 space-y-2">
                  <Badge className="bg-black/50 backdrop-blur-sm text-white border-white/20">
                    <BookOpen className="w-3 h-3 mr-1" />
                    Chapter {currentStoryIndex + 1}
                  </Badge>
                  <div className="text-white text-sm font-mono bg-black/50 backdrop-blur-sm px-2 py-1 rounded">
                    {currentEvent.year}
                  </div>
                </div>

                <div className="absolute top-4 right-4 space-y-2">
                  <Badge
                    variant="outline"
                    className="bg-black/50 backdrop-blur-sm text-white border-white/20"
                  >
                    {currentEvent.category}
                  </Badge>

                  {isNarrating && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-1 bg-primary/90 backdrop-blur-sm text-primary-foreground px-2 py-1 rounded text-xs"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <Volume2 className="w-3 h-3" />
                      </motion.div>
                      Narrating...
                    </motion.div>
                  )}
                </div>
              </div>
            )}

            <CardContent className="p-8 space-y-6">
              {/* Story Title */}
              <div className="space-y-3">
                <motion.h1
                  className="text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {currentEvent.title}
                </motion.h1>
                <motion.div
                  className="flex items-center gap-2 text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{currentEvent.location}</span>
                </motion.div>
              </div>

              {/* Narrative Text */}
              <div className="space-y-4">
                {storyText.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    className="text-lg leading-relaxed text-foreground/90"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              {/* Participants */}
              {currentEvent.participants.length > 0 && (
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                    Key Players
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentEvent.participants.map((participant, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-sm"
                      >
                        {participant}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Story Navigation Dots */}
      <div className="flex justify-center gap-2 pt-4">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => goToStory(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentStoryIndex
                ? "bg-primary scale-110"
                : index < currentStoryIndex
                  ? "bg-primary/50"
                  : "bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default StoryMode;
