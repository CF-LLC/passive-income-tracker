import { Suspense } from "react"
import type { Metadata } from "next"
import DashboardHeader from "@/components/dashboard/dashboard-header"
import DashboardShell from "@/components/dashboard/dashboard-shell"
import GoalsList from "@/components/dashboard/goals-list"
import AddGoalButton from "@/components/dashboard/add-goal-button"
import { DataTableSkeleton } from "@/components/dashboard/data-table-skeleton"

export const metadata: Metadata = {
  title: "Income Goals | Passive Income Tracker",
  description: "Set and track your passive income goals",
}

export default function GoalsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Income Goals" text="Set and track your passive income goals">
        <AddGoalButton />
      </DashboardHeader>
      <Suspense fallback={<DataTableSkeleton />}>
        <GoalsList />
      </Suspense>
    </DashboardShell>
  )
}
