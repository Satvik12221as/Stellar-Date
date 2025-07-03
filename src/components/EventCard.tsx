import React from "react";
import { motion } from "framer-motion";
import { SpaceEvent } from "@/data/spaceEvents";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Calendar,
  MapPin,
  Users,
  Rocket,
  Target,
  Zap,
  Award,
} from "lucide-react";

interface EventCardProps {
  event: SpaceEvent;
  index: number;
}

const getCategoryIcon = (category: SpaceEvent["category"]) => {
  switch (category) {
    case "launch":
      return <Rocket className="w-4 h-4" />;
    case "landing":
      return <Target className="w-4 h-4" />;
    case "discovery":
      return <Zap className="w-4 h-4" />;
    case "mission":
      return <Users className="w-4 h-4" />;
    case "milestone":
      return <Award className="w-4 h-4" />;
    default:
      return <Calendar className="w-4 h-4" />;
  }
};

const getCategoryColor = (category: SpaceEvent["category"]) => {
  switch (category) {
    case "launch":
      return "bg-orange-500/10 text-orange-400 border-orange-500/20";
    case "landing":
      return "bg-green-500/10 text-green-400 border-green-500/20";
    case "discovery":
      return "bg-purple-500/10 text-purple-400 border-purple-500/20";
    case "mission":
      return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    case "milestone":
      return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
    default:
      return "bg-gray-500/10 text-gray-400 border-gray-500/20";
  }
};

const getImportanceGlow = (importance: SpaceEvent["importance"]) => {
  switch (importance) {
    case "high":
      return "shadow-lg shadow-primary/20 border-primary/30";
    case "medium":
      return "shadow-md shadow-space-500/10 border-space-500/20";
    case "low":
      return "shadow-sm border-border";
    default:
      return "shadow-sm border-border";
  }
};

const EventCard = ({ event, index }: EventCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="group cursor-pointer"
    >
      <Card
        className={`h-full bg-card/50 backdrop-blur-sm border transition-all duration-300 hover:bg-card/70 ${getImportanceGlow(event.importance)}`}
      >
        {/* Event Image */}
        {event.imageUrl && (
          <div className="relative h-48 overflow-hidden">
            <motion.img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute top-3 right-3">
              <Badge
                variant="outline"
                className={`text-xs font-medium bg-black/50 backdrop-blur-sm ${getCategoryColor(event.category)}`}
              >
                {event.category.charAt(0).toUpperCase() +
                  event.category.slice(1)}
              </Badge>
            </div>
            <div className="absolute bottom-3 left-3 text-white font-mono text-sm font-bold">
              {event.year}
            </div>
          </div>
        )}

        <CardHeader className={`space-y-4 ${event.imageUrl ? "pt-4" : ""}`}>
          {!event.imageUrl && (
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                {getCategoryIcon(event.category)}
                <Badge
                  variant="outline"
                  className={`text-xs font-medium ${getCategoryColor(event.category)}`}
                >
                  {event.category.charAt(0).toUpperCase() +
                    event.category.slice(1)}
                </Badge>
              </div>
              <div className="text-right text-sm text-muted-foreground font-mono">
                {event.year}
              </div>
            </div>
          )}

          <div>
            <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
              {event.title}
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground mt-2 line-clamp-2">
              {event.description}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-sm text-foreground/80 line-clamp-3 leading-relaxed">
            {event.details}
          </p>

          <div className="space-y-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">{event.location}</span>
            </div>

            {event.participants.length > 0 && (
              <div className="flex items-start gap-2">
                <Users className="w-3 h-3 flex-shrink-0 mt-0.5" />
                <span className="line-clamp-2">
                  {event.participants.join(", ")}
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 pt-2">
            <Calendar className="w-3 h-3" />
            <span className="text-xs font-medium text-primary">
              {new Date(event.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EventCard;
