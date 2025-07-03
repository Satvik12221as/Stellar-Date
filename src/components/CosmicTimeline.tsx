import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  Users,
  Zap,
  Star,
  Rocket,
  Target,
  Award,
  Play,
  ChevronDown,
  ChevronUp,
  Filter,
} from "lucide-react";
import { SpaceEvent } from "@/data/spaceEvents";

interface CosmicTimelineProps {
  events: SpaceEvent[];
}

const CosmicTimeline = ({ events }: CosmicTimelineProps) => {
  const [selectedEvent, setSelectedEvent] = useState<SpaceEvent | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"cosmic" | "linear">("cosmic");

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress to timeline progress (as percentage string)
  const timelineProgress = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"],
  );

  // Filter events based on category
  const filteredEvents =
    filter === "all"
      ? events
      : events.filter((event) => event.category === filter);

  // Group events by year for cosmic view
  const eventsByYear = filteredEvents.reduce(
    (acc, event) => {
      const year = event.year;
      if (!acc[year]) acc[year] = [];
      acc[year].push(event);
      return acc;
    },
    {} as Record<number, SpaceEvent[]>,
  );

  const years = Object.keys(eventsByYear)
    .map(Number)
    .sort((a, b) => a - b);

  const getCategoryIcon = (category: SpaceEvent["category"]) => {
    switch (category) {
      case "launch":
        return <Rocket className="w-5 h-5" />;
      case "landing":
        return <Target className="w-5 h-5" />;
      case "discovery":
        return <Zap className="w-5 h-5" />;
      case "mission":
        return <Users className="w-5 h-5" />;
      case "milestone":
        return <Award className="w-5 h-5" />;
      default:
        return <Star className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: SpaceEvent["category"]) => {
    switch (category) {
      case "launch":
        return "from-orange-500 to-red-500";
      case "landing":
        return "from-green-500 to-emerald-500";
      case "discovery":
        return "from-purple-500 to-indigo-500";
      case "mission":
        return "from-blue-500 to-cyan-500";
      case "milestone":
        return "from-yellow-500 to-amber-500";
      default:
        return "from-gray-500 to-slate-500";
    }
  };

  // Cosmic View: Events arranged in space-like formations
  const CosmicView = () => (
    <div className="relative min-h-screen space-y-32">
      {years.map((year, yearIndex) => (
        <motion.div
          key={year}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          {/* Year Label - Central Star */}
          <motion.div
            className="relative mx-auto mb-16 w-32 h-32 flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-cosmic-500 to-stellar-500 rounded-full opacity-20 animate-pulse" />
            <div className="relative z-10 bg-background/90 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center border border-primary/30">
              <span className="text-2xl font-bold text-primary">{year}</span>
            </div>

            {/* Orbiting rings */}
            <motion.div
              className="absolute inset-0 border border-primary/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-2 border border-cosmic-500/20 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Events orbiting around the year */}
          <div className="relative h-96">
            {eventsByYear[year].map((event, eventIndex) => {
              const angle =
                (eventIndex / eventsByYear[year].length) * 2 * Math.PI;
              const radius = 200 + (eventIndex % 3) * 50;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={event.id}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.2, zIndex: 10 }}
                >
                  <Card
                    className={`w-64 cursor-pointer transition-all duration-300 bg-gradient-to-br ${getCategoryColor(event.category)} bg-opacity-10 border-opacity-50 hover:border-opacity-100`}
                    onClick={() => setSelectedEvent(event)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          className={`p-2 rounded-full bg-gradient-to-br ${getCategoryColor(event.category)}`}
                        >
                          {getCategoryIcon(event.category)}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {event.category}
                        </Badge>
                      </div>

                      <h4 className="font-semibold text-sm mb-2 line-clamp-2">
                        {event.title}
                      </h4>

                      <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                        {event.description}
                      </p>

                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        <span className="truncate">{event.location}</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Connecting line to center */}
                  <div
                    className="absolute top-1/2 left-1/2 bg-gradient-to-r from-primary/30 to-transparent h-px"
                    style={{
                      width: `${radius}px`,
                      transformOrigin: "left center",
                      transform: `rotate(${angle + Math.PI}rad) translateY(-50%)`,
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  );

  // Linear View: Traditional timeline
  const LinearView = () => (
    <div className="relative">
      {/* Central Timeline Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-cosmic-500 to-stellar-500 transform -translate-x-1/2" />

      <div className="space-y-16">
        {filteredEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
          >
            {/* Timeline Node */}
            <div className="relative">
              <motion.div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${getCategoryColor(event.category)} flex items-center justify-center text-white shadow-lg`}
                whileHover={{ scale: 1.2, rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                {getCategoryIcon(event.category)}
              </motion.div>

              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {/* Event Content */}
            <motion.div
              className="flex-1 max-w-lg"
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="outline" className="text-xs">
                      {event.category}
                    </Badge>
                    <span className="text-sm font-mono text-primary">
                      {event.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {event.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-4 gap-2"
                    onClick={() => setSelectedEvent(event)}
                  >
                    <Play className="w-3 h-3" />
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="space-y-8">
      {/* Controls */}
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <div className="flex gap-2">
          <Button
            variant={viewMode === "cosmic" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("cosmic")}
            className="gap-2"
          >
            <Star className="w-4 h-4" />
            Cosmic View
          </Button>
          <Button
            variant={viewMode === "linear" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("linear")}
            className="gap-2"
          >
            <Calendar className="w-4 h-4" />
            Linear View
          </Button>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
        </div>
      </div>

      {/* Timeline Content */}
      <div className="relative">
        {viewMode === "cosmic" ? <CosmicView /> : <LinearView />}
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed right-8 top-1/2 transform -translate-y-1/2 w-2 h-32 bg-muted rounded-full overflow-hidden"
        style={{ opacity: scrollYProgress }}
      >
        <motion.div
          className="w-full bg-gradient-to-b from-primary to-cosmic-500"
          style={{ height: timelineProgress }}
        />
      </motion.div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="bg-background/95 backdrop-blur-lg">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-3 rounded-full bg-gradient-to-br ${getCategoryColor(selectedEvent.category)}`}
                    >
                      {getCategoryIcon(selectedEvent.category)}
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2">
                        {selectedEvent.category}
                      </Badge>
                      <h2 className="text-2xl font-bold">
                        {selectedEvent.title}
                      </h2>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedEvent(null)}
                  >
                    ×
                  </Button>
                </div>

                {selectedEvent.imageUrl && (
                  <div className="mb-6 rounded-lg overflow-hidden">
                    <img
                      src={selectedEvent.imageUrl}
                      alt={selectedEvent.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                )}

                <p className="text-lg mb-6 leading-relaxed">
                  {selectedEvent.details}
                </p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>
                      {new Date(selectedEvent.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{selectedEvent.location}</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span>{selectedEvent.participants.join(", ")}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default CosmicTimeline;
