"use client"

import { DollarSign, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function IncomeOverview() {
  // This would normally come from your database
  const stats = [
    {
      title: "Total Monthly Income",
      value: "$2,850",
      change: "+12.5%",
      increasing: true,
      icon: DollarSign,
    },
    {
      title: "Active Streams",
      value: "7",
      change: "+2",
      increasing: true,
      icon: TrendingUp,
    },
    {
      title: "Highest Earner",
      value: "$1,200",
      change: "+5.3%",
      increasing: true,
      icon: ArrowUpRight,
    },
    {
      title: "Lowest Earner",
      value: "$85",
      change: "-2.1%",
      increasing: false,
      icon: ArrowDownRight,
    },
  ]

  return (
    <>
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className={`text-xs ${stat.increasing ? "text-green-500" : "text-red-500"} flex items-center`}>
              {stat.change}
              {stat.increasing ? (
                <ArrowUpRight className="ml-1 h-3 w-3" />
              ) : (
                <ArrowDownRight className="ml-1 h-3 w-3" />
              )}
            </p>
          </CardContent>
        </Card>
      ))}
    </>
  )
}
