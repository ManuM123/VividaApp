"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import OnboardingQuestionCard from "@/components/OnboardingQuestionCard";
import { onboardingQuestions } from "@/static_data/onboardingQuestions";
import { useRouter } from "next/navigation";

import { createClient } from "@/utils/supabase/client";
import { toast } from "sonner";

export default function Onboarding() {
  const supabase = createClient();

  const [onboardingStarted, setOnboardingStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [answers, setAnswers] = useState<{ [key: number]: any }>({});

  const router = useRouter();
  const totalQuestions = onboardingQuestions.length;

  const startOnboarding = () => {
    setOnboardingStarted(true);
  };

  const handleAnswer = (value: any) => {
    // store the answer
    setAnswers((prev) => ({ ...prev, [currentQuestionIndex]: value }));

    // mark question as answered if not already
    if (!answeredQuestions.includes(currentQuestionIndex)) {
      setAnsweredQuestions((prev) => [...prev, currentQuestionIndex]);
    }

    // advance if not last question
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const allQuestionsAnswered = answeredQuestions.length === totalQuestions;

  const handleSubmit = async () => {
    if (!allQuestionsAnswered) return;

    // creating the json object to insert into the 'onboarding_answers' column in supabase
    const onboardingAnswers: { [key: string]: any } = {};

    for (let i = 0; i < onboardingQuestions.length; i++) {
      const questionText = onboardingQuestions[i].question;
      const answer = answers[i];

      onboardingAnswers[questionText] = answer;
    }

    // Get current logged-in user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      toast.error("User not found. Please log in again.");
      return;
    }

    const { error: updateError } = await supabase
      .from("user_profile")
      .update({ onboarding_answers: onboardingAnswers })
      .eq("id", user.id);

    if (updateError) {
      toast.error(updateError.message)
    }

    // toast.success("Onboarding Complete")
    router.push("/dashboard")
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-linear-to-br from-[#6366F1]/10 via-purple-100/40 to-indigo-100/30">
      <AnimatePresence mode="wait">
        {!onboardingStarted ? (
          <motion.div
            key="welcome"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="max-w-lg w-full rounded-3xl shadow-2xl border-none bg-white relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#6366F1]/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl" />

              <CardContent className="p-12 text-center relative z-10">
                <CardHeader>
                  <CardTitle className="text-5xl font-extrabold bg-linear-to-r from-[#6366F1] via-purple-500 to-indigo-600 bg-clip-text text-transparent mb-6">
                    Welcome to Vivida ✨
                  </CardTitle>
                </CardHeader>

                <p className="text-gray-600 text-xl mb-10 leading-relaxed">
                  Before we begin, we'll ask a few questions to personalise your
                  journey.
                </p>

                <Button
                  onClick={startOnboarding}
                  className="w-full h-14 text-lg font-bold rounded-2xl bg-linear-to-r from-[#6366F1] to-purple-600 hover:from-[#4F46E5] hover:to-purple-700 shadow-lg hover:shadow-xl transition"
                >
                  Let's begin
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-xl"
          >
            <OnboardingQuestionCard
              questionData={onboardingQuestions[currentQuestionIndex]}
              index={currentQuestionIndex}
              total={totalQuestions}
              onAnswer={handleAnswer}
              goToQuestion={(i) => setCurrentQuestionIndex(i)}
              answeredQuestions={answeredQuestions}
              currentAnswer={answers[currentQuestionIndex]}
            />

            {currentQuestionIndex === totalQuestions - 1 && (
              <div className="mt-8 flex justify-center">
                <Button
                  onClick={handleSubmit}
                  disabled={!allQuestionsAnswered}
                  className="px-6 py-3 rounded-2xl text-lg font-bold bg-[#6366F1] hover:bg-[#585AE3] disabled:opacity-50 disabled:cursor-not-allowed transition cursor-pointer"
                >
                  Submit
                </Button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
