"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface IncomeGoalsProps {
  className?: string
}

export default function IncomeGoals({ className }: IncomeGoalsProps) {
  // This would normally come from your database
  const goals = [
    {
      title: "Monthly Passive Income",
      target: 5000,
      current: 2850,
      timeframe: "monthly",
    },
    {
      title: "Dividend Portfolio",
      target: 1000,
      current: 580,
      timeframe: "monthly",
    },
    {
      title: "Digital Product Sales",
      target: 800,
      current: 420,
      timeframe: "monthly",
    },
    {
      title: "Rental Income",
      target: 1500,
      current: 1200,
      timeframe: "monthly",
    },
  ]

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Income Goals</CardTitle>
        <CardDescription>Track progress towards your financial targets</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {goals.map((goal) => {
          const progress = Math.round((goal.current / goal.target) * 100)

          return (
            <div key={goal.title} className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{goal.title}</p>
                  <p className="text-xs text-muted-foreground">
                    ${goal.current.toLocaleString()} of ${goal.target.toLocaleString()} {goal.timeframe}
                  </p>
                </div>
                <p className={`text-sm font-medium ${progress >= 100 ? "text-green-500" : ""}`}>{progress}%</p>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
