export type OnboardingQuestion = {
  id: string;
  image: string;
  question: string;
  options?: string[];
  type: "singleChoice" | "multiChoice" | "slider" | "text";
};

export const onboardingQuestions: OnboardingQuestion[] = [
  {
    id: "q1",
    image: "temporary_brain_hero_img.avif",
    question: "What is your main personal goal right now?",
    type: "singleChoice",
    options: [
      "Build confidence",
      "Improve discipline / stop procrastinating",
      "Become more consistent",
      "Manage stress better",
      "Improve general wellbeing",
    ],
  },
  {
    id: "q2",
    image: "temporary_brain_hero_img.avif",
    question: "What do you struggle with the most?",
    type: "singleChoice",
    options: [
      "I procrastinate",
      "I doubt myself",
      "I lose motivation quickly",
      "I get overwhelmed",
      "I struggle with routine",
      "I struggle with stress",
    ],
  },
  {
    id: "q3",
    image: "temporary_brain_hero_img.avif",
    question: "How confident do you feel today?",
    type: "slider",
  },
  {
    id: "q4",
    image: "temporary_brain_hero_img.avif",
    question: "What support style works best for you?",
    type: "singleChoice",
    options: [
      "Soft & encouraging",
      "Direct & motivational",
      "Calm & grounding",
      "Humorous & light",
      "Tough-love / energetic",
    ],
  },
  {
    id: "q5",
    image: "temporary_brain_hero_img.avif",
    question: "When during the day do you want support?",
    type: "singleChoice",
    options: [
      "Morning boost",
      "Afternoon pick-me-up",
      "Evening reflection",
      "Throughout the day",
      "No reminders (I'll check in myself)",
    ],
  },
];
