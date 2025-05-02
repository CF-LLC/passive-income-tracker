"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Trash2 } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function GoalsList() {
  // This would normally come from your database
  const [goals, setGoals] = useState([
    {
      id: "1",
      title: "Monthly Passive Income",
      target: 5000,
      current: 2850,
      deadline: "2023-12-31",
      timeframe: "monthly",
      status: "in-progress",
    },
    {
      id: "2",
      title: "Dividend Portfolio",
      target: 1000,
      current: 580,
      deadline: "2023-09-30",
      timeframe: "monthly",
      status: "in-progress",
    },
    {
      id: "3",
      title: "Digital Product Sales",
      target: 800,
      current: 420,
      deadline: "2023-10-31",
      timeframe: "monthly",
      status: "in-progress",
    },
    {
      id: "4",
      title: "Rental Income",
      target: 1500,
      current: 1200,
      deadline: "2023-08-31",
      timeframe: "monthly",
      status: "in-progress",
    },
    {
      id: "5",
      title: "Affiliate Marketing",
      target: 500,
      current: 180,
      deadline: "2023-11-30",
      timeframe: "monthly",
      status: "in-progress",
    },
  ])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Income Goals</CardTitle>
        <CardDescription>Track progress towards your financial targets</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Goal</TableHead>
              <TableHead>Target</TableHead>
              <TableHead>Current</TableHead>
              <TableHead>Deadline</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {goals.map((goal) => {
              const progress = Math.round((goal.current / goal.target) * 100)

              return (
                <TableRow key={goal.id}>
                  <TableCell className="font-medium">{goal.title}</TableCell>
                  <TableCell>${goal.target}</TableCell>
                  <TableCell>${goal.current}</TableCell>
                  <TableCell>{new Date(goal.deadline).toLocaleDateString()}</TableCell>
                  <TableCell className="w-[180px]">
                    <div className="flex items-center gap-2">
                      <Progress value={progress} className="h-2" />
                      <span className="text-xs">{progress}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        progress >= 100
                          ? "success"
                          : progress >= 75
                            ? "default"
                            : progress >= 50
                              ? "outline"
                              : "secondary"
                      }
                    >
                      {progress >= 100 ? "Completed" : "In Progress"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
