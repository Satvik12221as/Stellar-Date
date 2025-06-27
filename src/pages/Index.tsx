import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Clock,
  Sparkles,
  Telescope,
  Rocket,
  Globe,
  History,
  Star,
  Zap,
  BookOpen,
  Brain,
} from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import EventCard from "@/components/EventCard";
import EventTimeline from "@/components/EventTimeline";
import ChatBot from "@/components/ChatBot";
import SpaceCalendar from "@/components/SpaceCalendar";
import StoryMode from "@/components/StoryMode";
import SpaceQuiz from "@/components/SpaceQuiz";
import CreativeNavigation from "@/components/CreativeNavigation";
import ImmersiveStoryMode from "@/components/ImmersiveStoryMode";
import CosmicTimeline from "@/components/CosmicTimeline";
import EventConstellation from "@/components/EventConstellation";
import {
  getTodaysEvents,
  getAllEventsInDateRange,
  getEventsForDate,
} from "@/data/spaceEvents";

const Index = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [todaysEvents, setTodaysEvents] = useState(getTodaysEvents());
  const [selectedDateEvents, setSelectedDateEvents] =
    useState(getTodaysEvents());
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState("story");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const events = getEventsForDate(selectedDate);
    setSelectedDateEvents(events);
  }, [selectedDate]);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const getDateRange = () => {
    const startDate = new Date(2025, 5, 20); // June 20, 2025
    const endDate = new Date(2025, 6, 30); // July 30, 2025
    return getAllEventsInDateRange(startDate, endDate);
  };

  const featuredEvents = getDateRange().slice(0, 20);

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Animated space background */}
      <AnimatedBackground />

      {/* Main content */}
      <div className="relative z-10 min-h-screen">
        {/* Hero section */}
        <section className="relative py-20 px-6">
          <div className="container mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex justify-center">
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-primary/10 border-primary/30"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Stellar Date
                </Badge>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Space History
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover the fascinating events that shaped space exploration on
                this day in history. From groundbreaking launches to historic
                landings, explore the cosmos through time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Clock className="w-5 h-5" />
                  <span className="font-mono">
                    {currentTime.toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>

                {todaysEvents.length > 0 && (
                  <Badge variant="secondary" className="px-3 py-1">
                    <Star className="w-4 h-4 mr-1" />
                    {todaysEvents.length} events today
                  </Badge>
                )}
              </div>
            </motion.div>

            {/* Today's featured event */}
            {todaysEvents.length > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="max-w-4xl mx-auto bg-card/30 backdrop-blur-sm border border-primary/20 shadow-2xl shadow-primary/5 overflow-hidden">
                  {/* Featured event image */}
                  {todaysEvents[0].imageUrl && (
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={todaysEvents[0].imageUrl}
                        alt={todaysEvents[0].title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <Badge
                          variant="outline"
                          className="bg-black/50 backdrop-blur-sm text-white border-white/30"
                        >
                          <Telescope className="w-3 h-3 mr-1" />
                          Featured Today
                        </Badge>
                      </div>
                    </div>
                  )}

                  <CardHeader className="text-center">
                    <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                      <Telescope className="w-6 h-6 text-primary" />
                      Featured Event Today
                    </CardTitle>
                    <CardDescription className="text-lg">
                      What happened on this date in space history
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center">
                        <h3 className="text-3xl font-bold text-foreground mb-2">
                          {todaysEvents[0].title}
                        </h3>
                        <p className="text-lg text-muted-foreground mb-4">
                          {todaysEvents[0].description}
                        </p>
                        <div className="flex justify-center gap-4 text-sm text-muted-foreground">
                          <span className="font-mono text-primary text-xl">
                            {todaysEvents[0].year}
                          </span>
                          <span>•</span>
                          <span>{todaysEvents[0].location}</span>
                        </div>
                      </div>
                      <p className="text-center text-foreground/80 max-w-2xl mx-auto leading-relaxed">
                        {todaysEvents[0].details}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </section>

        {/* Creative Navigation and Content */}
        <section className="px-6 pb-20">
          <div className="container mx-auto">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="space-y-12"
            >
              {/* Hidden default tabs, using custom navigation */}
              <TabsList className="hidden">
                <TabsTrigger value="story" />
                <TabsTrigger value="timeline" />
                <TabsTrigger value="events" />
                <TabsTrigger value="calendar" />
                <TabsTrigger value="quiz" />
              </TabsList>

              <CreativeNavigation
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />

              {/* Enhanced Story Content */}
              <TabsContent value="story" className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  <ImmersiveStoryMode events={featuredEvents} />
                </motion.div>
              </TabsContent>

              {/* Enhanced Timeline Content */}
              <TabsContent value="timeline" className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="text-center space-y-4 mb-12">
                    <Badge
                      variant="outline"
                      className="px-4 py-2 text-sm bg-primary/10 border-primary/30"
                    >
                      <History className="w-4 h-4 mr-2" />
                      Time Voyager
                    </Badge>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                      Journey Through Time
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Navigate through the cosmos of space exploration with our
                      interactive timeline. Experience history in multiple
                      dimensions.
                    </p>
                  </div>
                  <CosmicTimeline events={featuredEvents} />
                </motion.div>
              </TabsContent>

              {/* Enhanced Events Content */}
              <TabsContent value="events" className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="text-center space-y-4 mb-12">
                    <Badge
                      variant="outline"
                      className="px-4 py-2 text-sm bg-primary/10 border-primary/30"
                    >
                      <Rocket className="w-4 h-4 mr-2" />
                      Event Galaxy
                    </Badge>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                      Explore Event Constellations
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Discover space events arranged like stars in the cosmos.
                      Search, filter, and explore in multiple engaging layouts.
                    </p>
                  </div>
                  <EventConstellation events={featuredEvents} />
                </motion.div>
              </TabsContent>

              {/* Enhanced Calendar Content */}
              <TabsContent value="calendar" className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="text-center space-y-4 mb-12">
                    <Badge
                      variant="outline"
                      className="px-4 py-2 text-sm bg-primary/10 border-primary/30"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Stellar Calendar
                    </Badge>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                      Navigate Cosmic Dates
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Explore space history through our interactive calendar.
                      Each date holds cosmic secrets waiting to be discovered.
                    </p>
                  </div>

                  <div className="grid gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-1">
                      <SpaceCalendar
                        selectedDate={selectedDate}
                        onDateSelect={handleDateSelect}
                      />
                    </div>

                    <div className="lg:col-span-2 space-y-6">
                      <Card className="bg-card/20 backdrop-blur-sm border-border/50">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Zap className="w-5 h-5 text-primary" />
                            Selected Date Events
                          </CardTitle>
                          <CardDescription>
                            {selectedDate.toLocaleDateString("en-US", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          {selectedDateEvents.length > 0 ? (
                            <div className="space-y-4">
                              {selectedDateEvents.map((event, index) => (
                                <motion.div
                                  key={event.id}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                  }}
                                  className="p-4 rounded-lg bg-accent/50 border border-border/50 hover:bg-accent/70 transition-colors"
                                >
                                  <div className="flex items-start justify-between gap-3 mb-2">
                                    <h4 className="font-semibold text-foreground">
                                      {event.title}
                                    </h4>
                                    <Badge
                                      variant="outline"
                                      className="text-xs"
                                    >
                                      {event.year}
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground mb-2">
                                    {event.description}
                                  </p>
                                  <div className="text-xs text-muted-foreground">
                                    📍 {event.location}
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          ) : (
                            <div className="text-center py-8">
                              <Calendar className="w-12 h-12 mx-auto text-muted-foreground mb-3 opacity-50" />
                              <p className="text-muted-foreground">
                                No space events recorded for this date
                              </p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>

              {/* Enhanced Quiz Content */}
              <TabsContent value="quiz" className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="text-center space-y-4 mb-12">
                    <Badge
                      variant="outline"
                      className="px-4 py-2 text-sm bg-primary/10 border-primary/30"
                    >
                      <Brain className="w-4 h-4 mr-2" />
                      Space Academy
                    </Badge>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                      Test Your Cosmic Knowledge
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Challenge yourself with our interactive space quiz. Each
                      question is carefully crafted from the cosmic events
                      you've explored.
                    </p>
                  </div>
                  <SpaceQuiz events={featuredEvents} />
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>

      {/* Chatbot */}
      <ChatBot currentEvents={todaysEvents} />
    </div>
  );
};

export default Index;
