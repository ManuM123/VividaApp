import { Sparkles, Brain, TrendingUp } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type Feature = {
    title: string
    description: string,
    icon: LucideIcon
}

export const features: Feature[] = [
  {
    title: "Change Starts in Your Mind",
    description: "Vivida helps you uncover the beliefs and mental patterns that quietly hold you back — and gives you tools to rewrite them.",
    icon: Brain,
  },
  {
    title: "Personalised, Adaptive Guidance",
    description: "Your journey isn't generic. Exercises, reflections, and challenges adapt to how you think, feel, and respond over time.",
    icon: Sparkles,
  },
  {
    title: "Progress You Can Actually Feel",
    description: "Track streaks, build momentum, and celebrate small wins that compound into real, lasting change.",
    icon: TrendingUp,
  },
];