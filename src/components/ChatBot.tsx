import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, Sparkles, X, Bot, User } from "lucide-react";
import { SpaceEvent, spaceEvents } from "@/data/spaceEvents";

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

interface ChatBotProps {
  currentEvents: SpaceEvent[];
}

const ChatBot = ({ currentEvents }: ChatBotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content: `🚀 Welcome to Stellar Date! I'm your space exploration assistant. I can help you discover fascinating space events from history. Ask me about specific dates, missions, or let me tell you about today's space history!`,
      timestamp: new Date(),
      suggestions: [
        "What happened in space today?",
        "Tell me about the Apollo missions",
        "Show me satellite launches",
        "What's special about July 4th in space?",
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const generateBotResponse = (
    userMessage: string,
  ): { content: string; suggestions?: string[] } => {
    const lowerMessage = userMessage.toLowerCase();

    // Today's events
    if (lowerMessage.includes("today") || lowerMessage.includes("now")) {
      if (currentEvents.length > 0) {
        const eventsList = currentEvents
          .slice(0, 3)
          .map((event) => `🌟 ${event.year}: ${event.title}`)
          .join("\n");
        return {
          content: `Here's what happened in space on this date in history:\n\n${eventsList}\n\nWould you like to know more about any of these events?`,
          suggestions: currentEvents
            .slice(0, 3)
            .map((event) => `Tell me about ${event.title}`),
        };
      } else {
        return {
          content:
            "I don't have any specific space events recorded for today's date, but every day in space history is significant! Would you like to explore events from other dates?",
          suggestions: [
            "Show me June events",
            "What about July?",
            "Random space fact",
          ],
        };
      }
    }

    // Specific missions or terms
    if (lowerMessage.includes("apollo")) {
      return {
        content:
          "🌙 The Apollo program was NASA's incredible journey to the Moon! The most famous mission was Apollo 11 on July 20, 1969, when Neil Armstrong and Buzz Aldrin became the first humans to walk on the Moon. Would you like to know about other Apollo missions or lunar exploration?",
        suggestions: [
          "Tell me about Apollo 11",
          "Other moon missions",
          "Space exploration timeline",
        ],
      };
    }

    if (lowerMessage.includes("satellite") || lowerMessage.includes("launch")) {
      const satelliteEvents = spaceEvents.filter(
        (event) =>
          event.category === "launch" &&
          (event.title.toLowerCase().includes("satellite") ||
            event.description.toLowerCase().includes("satellite")),
      );

      if (satelliteEvents.length > 0) {
        const example = satelliteEvents[0];
        return {
          content: `🛰️ Satellite launches have been crucial for space exploration! For example, on ${new Date(example.date).toLocaleDateString()}, ${example.year}: ${example.title}. ${example.description}`,
          suggestions: [
            "More satellite missions",
            "Weather satellites",
            "Communication satellites",
          ],
        };
      }
    }

    if (
      lowerMessage.includes("july 4") ||
      lowerMessage.includes("independence day")
    ) {
      const july4Events = spaceEvents.filter((event) =>
        event.date.includes("-07-04"),
      );
      if (july4Events.length > 0) {
        const eventsList = july4Events
          .map((event) => `🎆 ${event.year}: ${event.title}`)
          .join("\n");
        return {
          content: `July 4th has been a special day for space exploration too!\n\n${eventsList}\n\nSpace exploration truly represents the spirit of pushing boundaries!`,
          suggestions: [
            "Mars Pathfinder details",
            "Deep Impact mission",
            "Space Shuttle missions",
          ],
        };
      }
    }

    // Date-specific queries
    const dateMatches = lowerMessage.match(/(june|july)\s+(\d{1,2})/);
    if (dateMatches) {
      const month = dateMatches[1];
      const day = parseInt(dateMatches[2]);
      const monthNum = month === "june" ? 6 : 7;

      const dateEvents = spaceEvents.filter((event) => {
        const eventDate = new Date(event.date);
        return (
          eventDate.getMonth() + 1 === monthNum && eventDate.getDate() === day
        );
      });

      if (dateEvents.length > 0) {
        const eventsList = dateEvents
          .slice(0, 2)
          .map(
            (event) =>
              `⭐ ${event.year}: ${event.title} - ${event.description}`,
          )
          .join("\n\n");
        return {
          content: `Here's what happened on ${month.charAt(0).toUpperCase() + month.slice(1)} ${day} in space history:\n\n${eventsList}`,
          suggestions: dateEvents
            .slice(0, 2)
            .map(
              (event) =>
                `More about ${event.title.split(" ").slice(0, 3).join(" ")}`,
            ),
        };
      }
    }

    // Random space facts
    if (
      lowerMessage.includes("random") ||
      lowerMessage.includes("fact") ||
      lowerMessage.includes("interesting")
    ) {
      const randomEvent =
        spaceEvents[Math.floor(Math.random() * spaceEvents.length)];
      return {
        content: `🌌 Here's a fascinating space fact: On ${new Date(randomEvent.date).toLocaleDateString()}, ${randomEvent.year}, ${randomEvent.title}! ${randomEvent.description}`,
        suggestions: [
          "Another random fact",
          "Tell me more about this",
          "Show timeline",
        ],
      };
    }

    // Category queries
    if (
      lowerMessage.includes("landing") ||
      lowerMessage.includes("touchdown")
    ) {
      const landingEvents = spaceEvents.filter(
        (event) => event.category === "landing",
      );
      if (landingEvents.length > 0) {
        const example =
          landingEvents[Math.floor(Math.random() * landingEvents.length)];
        return {
          content: `🎯 Space landings are always thrilling! Here's one: ${example.title} on ${new Date(example.date).toLocaleDateString()}, ${example.year}. ${example.description}`,
          suggestions: ["More landings", "Mars missions", "Moon landings"],
        };
      }
    }

    // Default responses
    const defaultResponses = [
      {
        content:
          "🚀 I'm here to help you explore space history! You can ask me about specific dates, missions, or types of space events. What would you like to discover?",
        suggestions: [
          "Today's space events",
          "Apollo missions",
          "Recent space news",
          "Satellite launches",
        ],
      },
      {
        content:
          "✨ Space exploration is full of amazing stories! I can tell you about launches, landings, discoveries, and milestones. What interests you most?",
        suggestions: [
          "June space events",
          "July milestones",
          "International missions",
          "Space stations",
        ],
      },
      {
        content:
          "🌟 Every day has been significant in space history! I can help you discover events by date, mission type, or organization. What would you like to explore?",
        suggestions: [
          "What happened today?",
          "Show me timeline",
          "Space firsts",
          "Recent missions",
        ],
      },
    ];

    return defaultResponses[
      Math.floor(Math.random() * defaultResponses.length)
    ];
  };

  const handleSendMessage = async (message: string = inputValue) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: message.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(
      () => {
        const response = generateBotResponse(message);
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: "bot",
          content: response.content,
          timestamp: new Date(),
          suggestions: response.suggestions,
        };

        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
      },
      1000 + Math.random() * 1000,
    );
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  return (
    <>
      {/* Chat button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full w-14 h-14 shadow-lg bg-primary hover:bg-primary/90"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </motion.div>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]"
          >
            <Card className="shadow-2xl border bg-background/95 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-lg font-semibold flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Stellar Assistant
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Messages */}
                <div className="h-96 overflow-y-auto space-y-3 pr-2">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`flex gap-2 max-w-[85%] ${message.type === "user" ? "flex-row-reverse" : "flex-row"}`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.type === "user" ? "bg-primary" : "bg-muted"}`}
                        >
                          {message.type === "user" ? (
                            <User className="w-4 h-4 text-primary-foreground" />
                          ) : (
                            <Bot className="w-4 h-4 text-muted-foreground" />
                          )}
                        </div>
                        <div
                          className={`rounded-lg p-3 ${message.type === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                        >
                          <p className="text-sm whitespace-pre-line">
                            {message.content}
                          </p>
                          {message.suggestions && (
                            <div className="flex flex-wrap gap-1 mt-3">
                              {message.suggestions.map((suggestion, index) => (
                                <Badge
                                  key={index}
                                  variant="outline"
                                  className="text-xs cursor-pointer hover:bg-accent transition-colors"
                                  onClick={() =>
                                    handleSuggestionClick(suggestion)
                                  }
                                >
                                  {suggestion}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex gap-2 max-w-[85%]">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                          <Bot className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <div className="bg-muted rounded-lg p-3">
                          <div className="flex space-x-1">
                            <div
                              className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                              style={{ animationDelay: "0ms" }}
                            />
                            <div
                              className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                              style={{ animationDelay: "150ms" }}
                            />
                            <div
                              className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                              style={{ animationDelay: "300ms" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="flex gap-2">
                  <Input
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Ask about space history..."
                    className="flex-1"
                  />
                  <Button
                    onClick={() => handleSendMessage()}
                    size="sm"
                    disabled={!inputValue.trim() || isTyping}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
