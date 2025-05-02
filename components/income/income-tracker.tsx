"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import IncomeStreamForm from "@/components/income/income-stream-form"
import IncomeStreamList from "@/components/income/income-stream-list"
import IncomeSummary from "@/components/income/income-summary"
import type { IncomeStream, TimePeriod } from "@/lib/types"

// In a real app, this would come from an API
const BITCOIN_PRICE = 62500

export default function IncomeTracker() {
  const [incomeStreams, setIncomeStreams] = useState<IncomeStream[]>([])
  const [activeTab, setActiveTab] = useState<TimePeriod>("monthly")
  const [displayBtcAsSats, setDisplayBtcAsSats] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    const savedStreams = localStorage.getItem("incomeStreams")
    if (savedStreams) {
      try {
        setIncomeStreams(JSON.parse(savedStreams))
      } catch (e) {
        console.error("Failed to parse saved income streams", e)
      }
    }

    const savedDisplayPreference = localStorage.getItem("displayBtcAsSats")
    if (savedDisplayPreference) {
      setDisplayBtcAsSats(savedDisplayPreference === "true")
    }
  }, [])

  // Save to localStorage when streams change
  useEffect(() => {
    localStorage.setItem("incomeStreams", JSON.stringify(incomeStreams))
  }, [incomeStreams])

  // Save display preference
  useEffect(() => {
    localStorage.setItem("displayBtcAsSats", displayBtcAsSats.toString())
  }, [displayBtcAsSats])

  const addIncomeStream = (stream: IncomeStream) => {
    setIncomeStreams((prev) => [...prev, { ...stream, id: Date.now().toString() }])
  }

  const deleteIncomeStream = (id: string) => {
    setIncomeStreams((prev) => prev.filter((stream) => stream.id !== id))
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Add Income Stream</CardTitle>
            <CardDescription>Track a new source of passive income</CardDescription>
          </CardHeader>
          <CardContent>
            <IncomeStreamForm onAddStream={addIncomeStream} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Income Summary</CardTitle>
            <CardDescription>Overview of your passive income</CardDescription>
          </CardHeader>
          <CardContent>
            <IncomeSummary
              incomeStreams={incomeStreams}
              bitcoinPrice={BITCOIN_PRICE}
              displayBtcAsSats={displayBtcAsSats}
              onToggleBtcDisplay={setDisplayBtcAsSats}
            />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Income Streams</CardTitle>
          <CardDescription>All your passive income sources</CardDescription>
          <Tabs defaultValue="monthly" value={activeTab} onValueChange={(v) => setActiveTab(v as TimePeriod)}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="daily">Daily</TabsTrigger>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">Yearly</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          <IncomeStreamList
            incomeStreams={incomeStreams.filter((stream) => stream.timePeriod === activeTab)}
            onDelete={deleteIncomeStream}
            bitcoinPrice={BITCOIN_PRICE}
            displayBtcAsSats={displayBtcAsSats}
          />
        </CardContent>
      </Card>
    </div>
  )
}
