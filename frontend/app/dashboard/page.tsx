"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import { getUserProfile } from "@/utils/supabase/helper_functions";
import StreakCard from "@/components/StreakCard";
import axios from "axios";
import Overlay from "@/components/Overlay";
import HamburgerButton from "@/components/HamburgerButton";
import Menu from "@/components/Menu";

export default function DashboardPage() {
  const supabase = createClient();
  const [firstName, setFirstName] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const [userId, setUserId] = useState<string>("");

  const [streak, setStreak] = useState(0);
  const [dailyExerciseCompletedToday, setDailyExerciseCompletedToday] =
    useState(false);

  useEffect(() => {
    // fetching data from supabase
    const fetchProfile = async () => {
      const { data } = await supabase.auth.getSession();
      const id = data?.session?.user?.id;
      if (!id) return;

      setUserId(id);

      const profile = await getUserProfile(id);
      setFirstName(profile?.first_name ?? null);
      setStreak(profile?.current_streak ?? 0);
    };

    fetchProfile();

    // Trigger animations after component mounts
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const currentXP = 100;
  const nextLevelXP = 100;
  const xpPercent = (currentXP / nextLevelXP) * 100;

  function handleDailyExerciseCompleted() {
    if (!userId || dailyExerciseCompletedToday) return; // prevents double-clicking

    axios
      .post("http://localhost:8000/daily-exercise/complete", {
        user_id: userId,
      })
      .then(function (response) {
        const { current_streak, completed_today } = response.data;

        setStreak(current_streak);
        setDailyExerciseCompletedToday(completed_today);
      })
      .catch(function (error) {
        console.log("Error completing daily exercise: ", error);
      });
  }

  return (
    <div className="relative min-h-screen w-full bg-linear-to-br from-[#F08080]/10 via-purple-100/40 to-indigo-100/30 px-6 py-8">
      
      <Menu />

      {/* Hero Section with Animated Text */}
      <div className="max-w-5xl mx-auto mb-16 pt-8">
        {/* Welcome back - letters appear one by one */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#6366F1] mb-6">
          {"Welcome back!".split("").map((char, idx) => (
            <span
              key={idx}
              className={`inline-block transition-all duration-500 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
              style={{
                transitionDelay: `${idx * 50}ms`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        {/* Main message - fades in with delay and slide up */}
        <div
          className={`transition-all duration-700 delay-200 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-2xl md:text-4xl font-bold text-gray-800 max-w-4xl leading-tight">
            <span className="inline-block">Incase you forgot {firstName}</span>,
            you're absolutely capable of creating the version of yourself that
            you{" "}
            <span className="text-[#6366F1] inline-block">
              can't stop thinking about
            </span>
            .
          </p>
        </div>

        {/* Subtle decorative line that grows in */}
        <div
          className={`mt-8 h-1 bg-linear-to-r from-[#6366F1] to-purple-400 rounded-full transition-all duration-1000 delay-500 ease-out ${
            isLoaded ? "w-32 opacity-100" : "w-0 opacity-0"
          }`}
        />
      </div>

      {/* Main content - staggered fade in */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Streak - appears first */}
        <div
          className={`transition-all duration-700 delay-300 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <StreakCard
            streak={streak}
            completedToday={dailyExerciseCompletedToday}
            onComplete={handleDailyExerciseCompleted}
          />
        </div>

        {/* Progress - appears second */}
        <div
          className={`md:col-span-2 transition-all duration-700 delay-500 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <Card className="rounded-3xl shadow-lg border-none bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800">
                Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-3">
                Each reflection nudges your brain forward.
              </p>

              <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden">
                <div
                  className={`bg-[#6366F1] h-5 transition-all duration-1000 delay-700 ease-out ${
                    isLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    width: isLoaded ? `${xpPercent}%` : "0%",
                    transition:
                      "width 1000ms ease-out 700ms, opacity 1000ms ease-out 700ms",
                  }}
                />
              </div>

              <p className="mt-2 text-sm text-gray-600 text-right">
                {currentXP} / {nextLevelXP} XP
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
