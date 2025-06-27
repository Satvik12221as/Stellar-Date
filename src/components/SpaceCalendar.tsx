import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  SpaceEvent,
  getAllEventsInDateRange,
  getEventsForDate,
} from "@/data/spaceEvents";

interface SpaceCalendarProps {
  onDateSelect: (date: Date) => void;
  selectedDate: Date;
}

const SpaceCalendar = ({ onDateSelect, selectedDate }: SpaceCalendarProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
  );
  const endOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  );
  const startOfWeek = new Date(startOfMonth);
  startOfWeek.setDate(startOfMonth.getDate() - startOfMonth.getDay());

  const days = [];
  const currentDay = new Date(startOfWeek);

  // Generate 42 days (6 weeks)
  for (let i = 0; i < 42; i++) {
    days.push(new Date(currentDay));
    currentDay.setDate(currentDay.getDate() + 1);
  }

  const navigateMonth = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate);
    if (direction === "prev") {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date: Date) => {
    return date.toDateString() === selectedDate.toDateString();
  };

  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === currentDate.getMonth();
  };

  const hasEvents = (date: Date) => {
    return getEventsForDate(date).length > 0;
  };

  const getEventCount = (date: Date) => {
    return getEventsForDate(date).length;
  };

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <Card className="bg-card/30 backdrop-blur-sm border-border/50">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-primary" />
            <span className="text-lg font-semibold">
              {currentDate.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigateMonth("prev")}
              className="h-8 w-8 p-0"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigateMonth("next")}
              className="h-8 w-8 p-0"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Week day headers */}
        <div className="grid grid-cols-7 gap-1">
          {weekDays.map((day) => (
            <div
              key={day}
              className="h-8 flex items-center justify-center text-sm font-medium text-muted-foreground"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => {
            const eventCount = getEventCount(day);
            const hasEventsToday = hasEvents(day);

            return (
              <motion.button
                key={day.toISOString()}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: index * 0.01 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onDateSelect(day)}
                className={`
                  relative h-10 w-full rounded-md transition-all duration-200 text-sm font-medium
                  ${
                    isSelected(day)
                      ? "bg-primary text-primary-foreground shadow-lg scale-105"
                      : isToday(day)
                        ? "bg-accent text-accent-foreground ring-2 ring-primary/50"
                        : hasEventsToday
                          ? "bg-space-500/20 text-foreground hover:bg-space-500/30"
                          : isCurrentMonth(day)
                            ? "text-foreground hover:bg-accent"
                            : "text-muted-foreground hover:bg-muted"
                  }
                `}
              >
                <span className="relative z-10">{day.getDate()}</span>

                {hasEventsToday && (
                  <div className="absolute inset-x-0 bottom-0.5 flex justify-center">
                    <div className="flex gap-0.5">
                      {Array.from({ length: Math.min(eventCount, 3) }).map(
                        (_, i) => (
                          <div
                            key={i}
                            className={`w-1 h-1 rounded-full ${
                              isSelected(day)
                                ? "bg-primary-foreground"
                                : "bg-primary"
                            }`}
                          />
                        ),
                      )}
                      {eventCount > 3 && (
                        <div
                          className={`w-1 h-1 rounded-full ${
                            isSelected(day)
                              ? "bg-primary-foreground"
                              : "bg-primary"
                          } animate-pulse`}
                        />
                      )}
                    </div>
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border/50">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Events</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Today</span>
            </div>
          </div>

          {/* Event count for current date range */}
          {(() => {
            const monthEvents = getAllEventsInDateRange(
              startOfMonth,
              endOfMonth,
            );
            return monthEvents.length > 0 ? (
              <Badge variant="outline" className="text-xs">
                {monthEvents.length} events this month
              </Badge>
            ) : null;
          })()}
        </div>
      </CardContent>
    </Card>
  );
};

export default SpaceCalendar;
