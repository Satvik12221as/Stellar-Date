import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Trophy,
  RotateCcw,
  CheckCircle,
  XCircle,
  Brain,
  Sparkles,
  Star,
} from "lucide-react";
import { SpaceEvent } from "@/data/spaceEvents";

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  relatedEvent: SpaceEvent;
}

interface SpaceQuizProps {
  events: SpaceEvent[];
}

const SpaceQuiz = ({ events }: SpaceQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [answers, setAnswers] = useState<(number | null)[]>([]);

  // Generate fixed quiz questions based on current date
  const generateQuestions = (): QuizQuestion[] => {
    // Use current date as seed for consistent daily questions
    const today = new Date();
    const dateString = today.toISOString().split("T")[0]; // YYYY-MM-DD format
    const dateSeed = dateString
      .split("-")
      .reduce((acc, num) => acc + parseInt(num), 0);

    // Create a deterministic random function based on date
    const seededRandom = (seed: number) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };

    // Select 3 events deterministically based on date
    const eventsWithSeeds = events.map((event, index) => ({
      event,
      seed: seededRandom(dateSeed + index),
    }));

    // Sort by seed and take first 3 - this ensures same events for same date
    const selectedEvents = eventsWithSeeds
      .sort((a, b) => a.seed - b.seed)
      .slice(0, 3)
      .map((item) => item.event);

    return selectedEvents.map((event, index) => {
      // Create deterministic random function for this specific event
      const eventSeed = dateSeed + index + event.year;
      const eventRandom = (offset: number) => seededRandom(eventSeed + offset);

      const questionTypes = [
        {
          type: "year",
          generate: () => {
            const wrongYears = [
              event.year - 1,
              event.year + 1,
              event.year - 2,
            ].filter((y) => y > 1900 && y <= 2024);

            // Create deterministic shuffling for options
            const allOptions = [event.year, ...wrongYears.slice(0, 3)];
            const shuffledOptions = allOptions
              .map((year, i) => ({ year, sort: eventRandom(i) }))
              .sort((a, b) => a.sort - b.sort)
              .map((item) => String(item.year));

            return {
              question: `In which year did "${event.title}" occur?`,
              options: shuffledOptions,
              correctAnswer: shuffledOptions.indexOf(String(event.year)),
              explanation: `${event.title} occurred in ${event.year}. ${event.description}`,
            };
          },
        },
        {
          type: "location",
          generate: () => {
            const allLocations = events.map((e) => e.location);
            const wrongLocations = allLocations
              .filter((loc) => loc !== event.location)
              .map((loc, i) => ({ loc, sort: eventRandom(i + 10) }))
              .sort((a, b) => a.sort - b.sort)
              .slice(0, 3)
              .map((item) => item.loc);

            const allOptions = [event.location, ...wrongLocations];
            const shuffledOptions = allOptions
              .map((loc, i) => ({ loc, sort: eventRandom(i + 20) }))
              .sort((a, b) => a.sort - b.sort)
              .slice(0, 4)
              .map((item) => item.loc);

            return {
              question: `Where did "${event.title}" take place?`,
              options: shuffledOptions,
              correctAnswer: shuffledOptions.indexOf(event.location),
              explanation: `${event.title} took place at ${event.location}. ${event.description}`,
            };
          },
        },
        {
          type: "category",
          generate: () => {
            const categories = [
              "launch",
              "landing",
              "discovery",
              "mission",
              "milestone",
            ];
            const wrongCategories = categories.filter(
              (cat) => cat !== event.category,
            );

            const allOptions = [
              event.category.charAt(0).toUpperCase() + event.category.slice(1),
              ...wrongCategories
                .slice(0, 3)
                .map((cat) => cat.charAt(0).toUpperCase() + cat.slice(1)),
            ];

            const shuffledOptions = allOptions
              .map((cat, i) => ({ cat, sort: eventRandom(i + 30) }))
              .sort((a, b) => a.sort - b.sort)
              .map((item) => item.cat);

            return {
              question: `What type of space event was "${event.title}"?`,
              options: shuffledOptions,
              correctAnswer: shuffledOptions.indexOf(
                event.category.charAt(0).toUpperCase() +
                  event.category.slice(1),
              ),
              explanation: `${event.title} was a ${event.category} event. ${event.description}`,
            };
          },
        },
      ];

      // Select question type deterministically based on date and index
      const typeIndex = Math.floor(eventRandom(40) * questionTypes.length);
      const selectedType = questionTypes[typeIndex];
      const questionData = selectedType.generate();

      return {
        id: `question-${index}`,
        ...questionData,
        relatedEvent: event,
      };
    });
  };

  useEffect(() => {
    if (events.length >= 3) {
      const newQuestions = generateQuestions();
      setQuestions(newQuestions);
      setAnswers(new Array(3).fill(null));
    }
  }, [events]);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setShowResult(true);
    setTimeout(() => {
      setShowResult(false);
      setSelectedAnswer(null);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizCompleted(true);
      }
    }, 5000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setQuizCompleted(false);
    setAnswers(new Array(3).fill(null));
    // Keep the same questions for the day - don't regenerate
  };

  const getScoreMessage = () => {
    if (score === 3) return "🚀 Space Expert! Perfect score!";
    if (score === 2) return "⭐ Well done! You know your space history!";
    if (score === 1) return "🌟 Good start! Keep exploring the cosmos!";
    return "🌍 Ready for launch! Try again to improve!";
  };

  const getScoreColor = () => {
    if (score === 3) return "text-green-400";
    if (score === 2) return "text-blue-400";
    if (score === 1) return "text-yellow-400";
    return "text-orange-400";
  };

  if (events.length < 3) {
    return (
      <Card className="bg-card/20 backdrop-blur-sm border-border/50">
        <CardContent className="p-8 text-center">
          <Brain className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">
            Explore more space events to unlock the quiz!
          </p>
        </CardContent>
      </Card>
    );
  }

  if (questions.length === 0) {
    return (
      <Card className="bg-card/20 backdrop-blur-sm border-border/50">
        <CardContent className="p-8 text-center">
          <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground">Generating your space quiz...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Quiz Header */}
      <Card className="bg-gradient-to-r from-primary/10 to-cosmic-500/10 border border-primary/20">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <Brain className="w-6 h-6 text-primary" />
            Space History Quiz
          </CardTitle>
          <p className="text-muted-foreground">
            Test your knowledge of the cosmic events you've discovered!
          </p>
        </CardHeader>
      </Card>

      {!quizCompleted ? (
        <>
          {/* Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span>
                Score: {score}/{questions.length}
              </span>
            </div>
            <Progress
              value={((currentQuestion + 1) / questions.length) * 100}
            />
          </div>

          {/* Current Question */}
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-card/30 backdrop-blur-sm border-border/50">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {questions[currentQuestion]?.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-3">
                      {questions[currentQuestion]?.options.map(
                        (option, index) => (
                          <motion.button
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleAnswerSelect(index)}
                            className={`p-4 text-left rounded-lg border transition-all duration-200 ${
                              selectedAnswer === index
                                ? "bg-primary/20 border-primary text-primary-foreground"
                                : "bg-muted/50 border-border hover:bg-muted"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-medium ${
                                  selectedAnswer === index
                                    ? "border-primary bg-primary text-primary-foreground"
                                    : "border-muted-foreground"
                                }`}
                              >
                                {String.fromCharCode(65 + index)}
                              </div>
                              <span>{option}</span>
                            </div>
                          </motion.button>
                        ),
                      )}
                    </div>

                    <Button
                      onClick={handleNextQuestion}
                      disabled={selectedAnswer === null}
                      className="w-full gap-2"
                      size="lg"
                    >
                      {currentQuestion === questions.length - 1
                        ? "Finish Quiz"
                        : "Next Question"}
                      <Sparkles className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-card/30 backdrop-blur-sm border-border/50">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="text-6xl">
                      {selectedAnswer ===
                      questions[currentQuestion]?.correctAnswer ? (
                        <CheckCircle className="w-16 h-16 mx-auto text-green-400" />
                      ) : (
                        <XCircle className="w-16 h-16 mx-auto text-red-400" />
                      )}
                    </div>
                    <h3 className="text-xl font-semibold">
                      {selectedAnswer ===
                      questions[currentQuestion]?.correctAnswer
                        ? "Correct! 🎉"
                        : "Not quite! 🤔"}
                    </h3>
                    <p className="text-muted-foreground">
                      {questions[currentQuestion]?.explanation}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        /* Quiz Results */
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg border border-border/50">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">
                <Trophy className="w-16 h-16 mx-auto text-yellow-400" />
              </div>
              <CardTitle className="text-2xl">Quiz Complete!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold">
                  <span className={getScoreColor()}>{score}</span>
                  <span className="text-muted-foreground">
                    /{questions.length}
                  </span>
                </div>
                <p className={`text-lg font-medium ${getScoreColor()}`}>
                  {getScoreMessage()}
                </p>
              </div>

              <div className="grid gap-3">
                {questions.map((question, index) => (
                  <div
                    key={question.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
                  >
                    <span className="text-sm">Question {index + 1}</span>
                    <div className="flex items-center gap-2">
                      {answers[index] === question.correctAnswer ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-400" />
                      )}
                      <Badge variant="outline" className="text-xs">
                        {question.relatedEvent.year}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 justify-center">
                <Button onClick={resetQuiz} variant="outline" className="gap-2">
                  <RotateCcw className="w-4 h-4" />
                  Try Again
                </Button>
                <Button variant="default" className="gap-2">
                  <Star className="w-4 h-4" />
                  Explore More Events
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
};

export default SpaceQuiz;
