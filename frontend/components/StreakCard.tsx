import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type StreakCardProps = {
    streak: number,
    completedToday: boolean,
    onComplete: () => void
}

export default function StreakCard({streak, completedToday, onComplete}: StreakCardProps) {
  return (
    <Card className="rounded-3xl shadow-lg border-none bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-800">
          Consistency
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-600 mb-4">
          Showing up matters more than perfection.
        </p>
        <p className="text-3xl font-bold text-[#6366F1] inline-block">
          🔥 {streak} day streak
        </p>

        <Button 
        className="bg-[#6366F1] hover:cursor-pointer hover:bg-[#585AE3] w-full"
        onClick={onComplete}
        disabled={completedToday}
        >
          {completedToday ? "Daily Exercise completed" : "Complete Daily Exercise"}
        </Button>
      </CardContent>
    </Card>
  );
}
