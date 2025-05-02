import IncomeTracker from "@/components/income/income-tracker"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard | Passive Income Tracker",
  description: "Track your passive income streams in USD and Bitcoin",
}

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-8 text-3xl font-bold">Passive Income Dashboard</h1>
      <IncomeTracker />
    </div>
  )
}
