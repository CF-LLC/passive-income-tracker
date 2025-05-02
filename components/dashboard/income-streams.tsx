"use client"

import { useState } from "react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface IncomeStreamsProps {
  className?: string
}

export default function IncomeStreams({ className }: IncomeStreamsProps) {
  const [activeTab, setActiveTab] = useState("monthly")

  // This would normally come from your database
  const monthlyData = [
    { name: "Dividends", value: 580 },
    { name: "Rental", value: 1200 },
    { name: "Royalties", value: 350 },
    { name: "Digital Products", value: 420 },
    { name: "Affiliate", value: 180 },
    { name: "Interest", value: 85 },
    { name: "Other", value: 35 },
  ]

  const yearlyData = [
    { name: "Dividends", value: 6960 },
    { name: "Rental", value: 14400 },
    { name: "Royalties", value: 4200 },
    { name: "Digital Products", value: 5040 },
    { name: "Affiliate", value: 2160 },
    { name: "Interest", value: 1020 },
    { name: "Other", value: 420 },
  ]

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Income Streams</CardTitle>
        <CardDescription>Breakdown of your passive income sources</CardDescription>
        <Tabs defaultValue="monthly" value={activeTab} onValueChange={setActiveTab} className="mt-2">
          <TabsList>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={activeTab === "monthly" ? monthlyData : yearlyData}
            margin={{ top: 10, right: 10, left: 10, bottom: 30 }}
          >
            <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} tick={{ fontSize: 12 }} />
            <YAxis tickFormatter={(value) => `$${value}`} tick={{ fontSize: 12 }} />
            <Tooltip formatter={(value) => [`$${value}`, "Income"]} labelStyle={{ fontWeight: "bold" }} />
            <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
