import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SpaceEvent } from "@/data/spaceEvents";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, ChevronDown, ChevronUp } from "lucide-react";

interface EventTimelineProps {
  events: SpaceEvent[];
}

interface TimelineEventProps {
  event: SpaceEvent;
  index: number;
  isLast: boolean;
}

const TimelineEvent = ({ event, index, isLast }: TimelineEventProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getCategoryColor = (category: SpaceEvent["category"]) => {
    switch (category) {
      case "launch":
        return "bg-orange-500";
      case "landing":
        return "bg-green-500";
      case "discovery":
        return "bg-purple-500";
      case "mission":
        return "bg-blue-500";
      case "milestone":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex items-start group"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-12 w-px h-full bg-gradient-to-b from-border to-transparent" />
      )}

      {/* Timeline node */}
      <div
        className={`relative z-10 w-3 h-3 rounded-full ${getCategoryColor(event.category)} mt-6 mr-6 flex-shrink-0 ring-4 ring-background group-hover:ring-primary/20 transition-all duration-300`}
      >
        <div
          className={`absolute inset-0 rounded-full ${getCategoryColor(event.category)} animate-ping opacity-20`}
        />
      </div>

      {/* Event content */}
      <div className="flex-1 min-w-0 pb-8">
        <Card className="bg-card/30 backdrop-blur-sm border border-border/50 hover:bg-card/50 hover:border-border transition-all duration-300">
          <CardContent className="p-4">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="text-xs">
                  {event.category}
                </Badge>
                <span className="text-sm font-medium text-primary">
                  {event.year}
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="h-8 w-8 p-0"
              >
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </Button>
            </div>

            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
              {event.title}
            </h3>

            <p className="text-sm text-muted-foreground mb-3">
              {event.description}
            </p>

            {/* Event Image - shown when expanded or for high importance events */}
            {event.imageUrl && (
              <div className="relative h-32 w-full mb-3 rounded-lg overflow-hidden">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            )}

            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>
                  {new Date(event.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span className="truncate">{event.location}</span>
              </div>
            </div>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 border-t border-border/50 space-y-3">
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {event.details}
                    </p>

                    {event.participants.length > 0 && (
                      <div className="flex items-start gap-2">
                        <Users className="w-4 h-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                        <div className="text-sm text-muted-foreground">
                          <span className="font-medium">Participants: </span>
                          {event.participants.join(", ")}
                        </div>
                      </div>
                    )}

                    <Badge
                      variant="outline"
                      className={`text-xs ${
                        event.importance === "high"
                          ? "border-red-500/30 text-red-400"
                          : event.importance === "medium"
                            ? "border-yellow-500/30 text-yellow-400"
                            : "border-green-500/30 text-green-400"
                      }`}
                    >
                      {event.importance.charAt(0).toUpperCase() +
                        event.importance.slice(1)}{" "}
                      Importance
                    </Badge>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

const EventTimeline = ({ events }: EventTimelineProps) => {
  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">
          No events found for this date range.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-1">
      {events.map((event, index) => (
        <TimelineEvent
          key={event.id}
          event={event}
          index={index}
          isLast={index === events.length - 1}
        />
      ))}
    </div>
  );
};

export default EventTimeline;
