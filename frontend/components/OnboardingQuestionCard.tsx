import { OnboardingQuestion } from "@/static_data/onboardingQuestions";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

interface OnboardingQuestionProps {
  questionData: OnboardingQuestion;
  onAnswer: (value: any) => void;
  index: number;
  total: number;
  goToQuestion: (index: number) => void;
  answeredQuestions: number[];
  currentAnswer?: any;
}

export default function OnboardingQuestionCard({
  questionData,
  onAnswer,
  index,
  total,
  goToQuestion,
  answeredQuestions,
  currentAnswer,
}: OnboardingQuestionProps) {
  const [sliderValue, setSliderValue] = useState<number>(currentAnswer ?? 5);

  // keep slider in sync when revisiting
  useEffect(() => {
    if (questionData.type === "slider") {
      setSliderValue(currentAnswer ?? 5);
    }
  }, [currentAnswer, questionData.type]);

  const toggleMultiChoice = (option: string) => {
    if (!Array.isArray(currentAnswer)) return onAnswer([option]);
    if (currentAnswer.includes(option)) {
      onAnswer(currentAnswer.filter((o: string) => o !== option));
    } else {
      onAnswer([...currentAnswer, option]);
    }
  };

  return (
    <motion.div
      key={questionData.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full"
    >
      {/* Question */}
      <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12 leading-snug">
        {questionData.question}
      </h2>

      {/* Answers */}
      {questionData.type === "singleChoice" && questionData.options && (
        <div className="flex flex-col gap-4">
          {questionData.options.map((option) => (
            <button
              key={option}
              onClick={() => onAnswer(option)}
              className={`
                w-full px-6 py-4 rounded-2xl border text-left text-lg
                transition-all active:scale-[0.98] hover:cursor-pointer
                ${
                  currentAnswer === option
                    ? "bg-[#6366F1] text-white border-[#6366F1]"
                    : "bg-white border-gray-200 hover:border-[#6366F1] hover:bg-[#6366F1]/5"
                }
              `}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {questionData.type === "multiChoice" && questionData.options && (
        <div className="grid grid-cols-2 gap-4">
          {questionData.options.map((option) => (
            <button
              key={option}
              onClick={() => toggleMultiChoice(option)}
              className={`
                px-4 py-4 rounded-xl border transition
                ${
                  Array.isArray(currentAnswer) && currentAnswer.includes(option)
                    ? "bg-[#6366F1] text-white border-[#6366F1]"
                    : "bg-white border-gray-200 hover:border-[#6366F1] hover:bg-[#6366F1]/5"
                }
              `}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {questionData.type === "slider" && (
        <div className="mt-10">
          <Input
            type="range"
            min={0}
            max={10}
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            className="w-full accent-[#6366F1] hover:cursor-pointer"
          />
          <p className="text-sm text-gray-500 text-center mt-4">
            Trust your first instinct
          </p>
          <Button
            onClick={() => onAnswer(sliderValue)}
            className="mt-4 w-full rounded-xl bg-[#6366F1] text-white hover:bg-[#585AE3]"
          >
            Confirm
          </Button>
        </div>
      )}

      {questionData.type === "text" && (
        <Input
          type="text"
          value={currentAnswer ?? ""}
          onChange={(e) => onAnswer(e.target.value)}
          placeholder="Type your answer here"
          className="w-full border-2 border-gray-300 rounded-xl p-4 text-lg focus:border-[#6366F1]"
        />
      )}

      {/* Bottom Progress */}
      <div className="flex justify-center gap-4 mt-12">
        {Array.from({ length: total }).map((_, i) => {
          const isAnswered = answeredQuestions.includes(i);
          const isCurrent = i === index;

          return (
            <div key={i} className="flex flex-col items-center gap-2">
              <motion.button
                onClick={() => goToQuestion(i)}
                className="relative w-10 h-10 rounded-full border-2 border-gray-300 overflow-hidden transition-all hover: cursor-pointer"
              >
                <div
                  className={`absolute inset-0 ${
                    isAnswered ? "bg-[#6366F1]" : "bg-gray-200"
                  }`}
                />
                <span
                  className={`relative z-10 text-sm font-bold ${
                    isAnswered ? "text-white" : "text-gray-600"
                  }`}
                >
                  {i + 1}
                </span>
              </motion.button>

              {/* line under the current question user is on     */}
              {isCurrent && (
                <motion.div
                  layoutId="current-question-indicator"
                  className="h-1 w-6 rounded-full bg-[#6366F1]"
                />
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
