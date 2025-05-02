import type { ReactNode } from "react"
import DashboardNav from "@/components/dashboard/dashboard-nav"
import { MobileNav } from "@/components/dashboard/mobile-nav"

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MobileNav />
          <nav className="hidden items-center space-x-4 md:flex">
            <h1 className="text-xl font-bold">Passive Income Tracker</h1>
          </nav>
          <div className="flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex lg:w-[240px]">
          <DashboardNav />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden pt-6">{children}</main>
      </div>
    </div>
  )
}

function UserNav() {
  return (
    <div className="h-8 w-8 rounded-full bg-blue-500 text-center text-white flex items-center justify-center">
      <span className="font-medium">U</span>
    </div>
  )
}
