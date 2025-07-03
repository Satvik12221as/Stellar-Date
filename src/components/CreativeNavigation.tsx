import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  History,
  Rocket,
  Calendar,
  Brain,
  Sparkles,
  Zap,
  Star,
  Globe,
  Target,
} from "lucide-react";

interface NavigationItemProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

const NavigationItem = ({
  title,
  description,
  icon,
  gradient,
  isActive,
  onClick,
  index,
}: NavigationItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative cursor-pointer group ${isActive ? "z-10" : ""}`}
    >
      <div
        className={`
          relative overflow-hidden rounded-2xl border transition-all duration-300
          ${
            isActive
              ? "bg-gradient-to-br from-primary/20 to-cosmic-500/20 border-primary/50 shadow-2xl shadow-primary/25"
              : "bg-card/30 border-border/50 hover:bg-card/50 hover:border-border"
          }
        `}
      >
        {/* Animated background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
        />

        {/* Sparkle animation for active tab */}
        {isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-2 right-2"
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          </motion.div>
        )}

        <div className="relative p-6 text-center">
          {/* Icon container */}
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className={`
              mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center
              ${
                isActive
                  ? "bg-primary/20 text-primary"
                  : "bg-muted/50 text-muted-foreground group-hover:text-foreground"
              }
            `}
          >
            <div className="w-8 h-8">{icon}</div>
          </motion.div>

          {/* Title */}
          <h3
            className={`
              font-bold text-lg mb-2 transition-colors duration-200
              ${isActive ? "text-primary" : "text-foreground group-hover:text-primary"}
            `}
          >
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>

          {/* Active indicator */}
          {isActive && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary rounded-full"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

interface CreativeNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const CreativeNavigation = ({
  activeTab,
  onTabChange,
}: CreativeNavigationProps) => {
  const navigationItems = [
    {
      id: "story",
      title: "Cosmic Stories",
      description:
        "Immersive narratives with voice guidance through space history",
      icon: <BookOpen className="w-full h-full" />,
      gradient: "from-blue-500 to-purple-600",
    },
    {
      id: "timeline",
      title: "Time Voyager",
      description: "Journey through chronological space exploration milestones",
      icon: <History className="w-full h-full" />,
      gradient: "from-green-500 to-teal-600",
    },
    {
      id: "events",
      title: "Event Galaxy",
      description: "Explore space events in beautiful card constellations",
      icon: <Rocket className="w-full h-full" />,
      gradient: "from-orange-500 to-red-600",
    },
    {
      id: "calendar",
      title: "Stellar Calendar",
      description: "Navigate through dates and discover cosmic happenings",
      icon: <Calendar className="w-full h-full" />,
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      id: "quiz",
      title: "Space Academy",
      description: "Test your cosmic knowledge with interactive challenges",
      icon: <Brain className="w-full h-full" />,
      gradient: "from-pink-500 to-rose-600",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="flex justify-center">
          <Badge
            variant="outline"
            className="px-4 py-2 text-sm bg-primary/10 border-primary/30"
          >
            <Star className="w-4 h-4 mr-2" />
            Choose Your Space Adventure
          </Badge>
        </div>

        <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
          Explore the Cosmos
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto">
          Select your preferred way to journey through space history. Each path
          offers a unique perspective on humanity's greatest adventures.
        </p>
      </motion.div>

      {/* Navigation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {navigationItems.map((item, index) => (
          <NavigationItem
            key={item.id}
            {...item}
            isActive={activeTab === item.id}
            onClick={() => onTabChange(item.id)}
            index={index}
          />
        ))}
      </div>

      {/* Space-themed decorative elements */}
      <div className="relative h-32 overflow-hidden">
        <motion.div
          animate={{ x: [-100, 1200] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-4 text-primary/20"
        >
          <Zap className="w-6 h-6" />
        </motion.div>
        <motion.div
          animate={{ x: [1200, -100] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-12 text-cosmic-400/20"
        >
          <Star className="w-4 h-4" />
        </motion.div>
        <motion.div
          animate={{ x: [-100, 1200] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 text-stellar-400/20"
        >
          <Globe className="w-5 h-5" />
        </motion.div>
      </div>
    </div>
  );
};

export default CreativeNavigation;
