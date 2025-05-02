import { Suspense } from "react"
import type { Metadata } from "next"
import DashboardHeader from "@/components/dashboard/dashboard-header"
import DashboardShell from "@/components/dashboard/dashboard-shell"
import IncomeList from "@/components/dashboard/income-list"
import AddIncomeButton from "@/components/dashboard/add-income-button"
import { DataTableSkeleton } from "@/components/dashboard/data-table-skeleton"

export const metadata: Metadata = {
  title: "Income Streams | Passive Income Tracker",
  description: "Manage your passive income streams",
}

export default function IncomePage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Income Streams" text="Manage your passive income sources">
        <AddIncomeButton />
      </DashboardHeader>
      <Suspense fallback={<DataTableSkeleton />}>
        <IncomeList />
      </Suspense>
    </DashboardShell>
  )
}
