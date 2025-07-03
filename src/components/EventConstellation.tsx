import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Search,
  Filter,
  SortAsc,
  Grid3X3,
  List,
  Star,
  Zap,
  MapPin,
  Calendar,
  Users,
  Sparkles,
  Eye,
  Heart,
  Share,
} from "lucide-react";
import { SpaceEvent } from "@/data/spaceEvents";

interface EventConstellationProps {
  events: SpaceEvent[];
}

const EventConstellation = ({ events }: EventConstellationProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<
    "constellation" | "grid" | "masonry"
  >("constellation");
  const [sortBy, setSortBy] = useState<"date" | "importance" | "category">(
    "date",
  );
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);
  const [likedEvents, setLikedEvents] = useState<Set<string>>(new Set());

  // Filter and sort events
  const filteredEvents = events
    .filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || event.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "date":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "importance":
          const importanceOrder = { high: 3, medium: 2, low: 1 };
          return importanceOrder[b.importance] - importanceOrder[a.importance];
        case "category":
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

  const categories = [
    "all",
    ...Array.from(new Set(events.map((e) => e.category))),
  ];

  const toggleLike = (eventId: string) => {
    const newLiked = new Set(likedEvents);
    if (newLiked.has(eventId)) {
      newLiked.delete(eventId);
    } else {
      newLiked.add(eventId);
    }
    setLikedEvents(newLiked);
  };

  // Constellation View: Events arranged in space-like patterns
  const ConstellationView = () => {
    return (
      <div className="relative min-h-screen">
        {/* Background constellation lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 1 }}
        >
          {filteredEvents.map((event, index) => {
            if (index === 0) return null;
            const prevIndex = index - 1;
            return (
              <motion.line
                key={`line-${event.id}`}
                x1={`${(index % 5) * 20 + 10}%`}
                y1={`${Math.floor(index / 5) * 25 + 15}%`}
                x2={`${(prevIndex % 5) * 20 + 10}%`}
                y2={`${Math.floor(prevIndex / 5) * 25 + 15}%`}
                stroke="url(#constellation-gradient)"
                strokeWidth="1"
                opacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: index * 0.1 }}
              />
            );
          })}
          <defs>
            <linearGradient
              id="constellation-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgb(139, 92, 246)" />
              <stop offset="100%" stopColor="rgb(59, 130, 246)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Event cards positioned like stars */}
        <div className="relative z-10 p-8">
          {filteredEvents.map((event, index) => {
            const row = Math.floor(index / 5);
            const col = index % 5;
            const x = col * 20 + 10; // Percentage
            const y = row * 25 + 15; // Percentage

            return (
              <motion.div
                key={event.id}
                className="absolute"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ opacity: 1, scale: 1, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  z: 50,
                  transition: { duration: 0.2 },
                }}
                onHoverStart={() => setHoveredEvent(event.id)}
                onHoverEnd={() => setHoveredEvent(null)}
              >
                <EventCard
                  event={event}
                  isHovered={hoveredEvent === event.id}
                  isLiked={likedEvents.has(event.id)}
                  onLike={() => toggleLike(event.id)}
                  variant="constellation"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  };

  // Grid View: Organized grid layout
  const GridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredEvents.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <EventCard
            event={event}
            isHovered={hoveredEvent === event.id}
            isLiked={likedEvents.has(event.id)}
            onLike={() => toggleLike(event.id)}
            variant="grid"
          />
        </motion.div>
      ))}
    </div>
  );

  // Masonry View: Pinterest-style layout
  const MasonryView = () => (
    <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6">
      {filteredEvents.map((event, index) => (
        <motion.div
          key={event.id}
          className="break-inside-avoid mb-6"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <EventCard
            event={event}
            isHovered={hoveredEvent === event.id}
            isLiked={likedEvents.has(event.id)}
            onLike={() => toggleLike(event.id)}
            variant="masonry"
          />
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Search and Filter Controls */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-2 flex-1 max-w-md">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search events, locations, or descriptions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              variant={viewMode === "constellation" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("constellation")}
              className="gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Constellation
            </Button>
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="gap-2"
            >
              <Grid3X3 className="w-4 h-4" />
              Grid
            </Button>
            <Button
              variant={viewMode === "masonry" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("masonry")}
              className="gap-2"
            >
              <List className="w-4 h-4" />
              Masonry
            </Button>
          </div>
        </div>

        {/* Categories and Sort */}
        <div className="flex flex-wrap gap-2 items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="flex gap-2 items-center">
            <SortAsc className="w-4 h-4 text-muted-foreground" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-background border border-border rounded px-3 py-1 text-sm"
            >
              <option value="date">Date</option>
              <option value="importance">Importance</option>
              <option value="category">Category</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Info */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {filteredEvents.length} cosmic events found
        </p>
        <Badge variant="outline" className="gap-1">
          <Heart className="w-3 h-3" />
          {likedEvents.size} liked
        </Badge>
      </div>

      {/* Events Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={viewMode}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {viewMode === "constellation" && <ConstellationView />}
          {viewMode === "grid" && <GridView />}
          {viewMode === "masonry" && <MasonryView />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// Enhanced Event Card Component
interface EventCardProps {
  event: SpaceEvent;
  isHovered: boolean;
  isLiked: boolean;
  onLike: () => void;
  variant: "constellation" | "grid" | "masonry";
}

const EventCard = ({
  event,
  isHovered,
  isLiked,
  onLike,
  variant,
}: EventCardProps) => {
  const getCategoryIcon = (category: SpaceEvent["category"]) => {
    switch (category) {
      case "launch":
        return "🚀";
      case "landing":
        return "🎯";
      case "discovery":
        return "⚡";
      case "mission":
        return "👥";
      case "milestone":
        return "🏆";
      default:
        return "⭐";
    }
  };

  const cardSize = variant === "constellation" ? "w-64" : "w-full";
  const imageHeight = variant === "masonry" ? "h-32" : "h-40";

  return (
    <Card
      className={`${cardSize} group cursor-pointer transition-all duration-300 bg-card/80 backdrop-blur-sm border hover:border-primary/50 overflow-hidden`}
    >
      {/* Image */}
      {event.imageUrl && (
        <div className={`relative ${imageHeight} overflow-hidden`}>
          <motion.img
            src={event.imageUrl}
            alt={event.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Category emoji overlay */}
          <div className="absolute top-3 left-3 text-2xl">
            {getCategoryIcon(event.category)}
          </div>

          {/* Action buttons */}
          <div className="absolute top-3 right-3 flex gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                onLike();
              }}
              className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                isLiked
                  ? "bg-red-500/80 text-white"
                  : "bg-black/20 text-white hover:bg-red-500/80"
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-black/20 backdrop-blur-sm text-white hover:bg-blue-500/80 transition-colors"
            >
              <Share className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Year badge */}
          <div className="absolute bottom-3 left-3">
            <Badge className="bg-black/50 backdrop-blur-sm text-white font-mono">
              {event.year}
            </Badge>
          </div>
        </div>
      )}

      <CardContent className="p-4 space-y-3">
        {/* Category and importance */}
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs capitalize">
            {event.category}
          </Badge>
          <div className="flex">
            {[
              ...Array(
                event.importance === "high"
                  ? 3
                  : event.importance === "medium"
                    ? 2
                    : 1,
              ),
            ].map((_, i) => (
              <Star
                key={i}
                className="w-3 h-3 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-bold text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors">
          {event.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-muted-foreground line-clamp-2">
          {event.description}
        </p>

        {/* Metadata */}
        <div className="space-y-1 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{new Date(event.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span className="truncate">{event.location}</span>
          </div>
        </div>

        {/* View details button */}
        <Button
          variant="ghost"
          size="sm"
          className="w-full gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Eye className="w-3 h-3" />
          View Details
        </Button>
      </CardContent>

      {/* Hover effect overlay */}
      <AnimatePresence>
        {isHovered && variant === "constellation" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-br from-primary/20 to-cosmic-500/20 pointer-events-none"
          />
        )}
      </AnimatePresence>
    </Card>
  );
};

export default EventConstellation;
