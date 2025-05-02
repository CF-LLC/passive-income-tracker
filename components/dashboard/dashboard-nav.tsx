"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, DollarSign, Home, LineChart, Settings, Target } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface NavItem {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

export default function DashboardNav() {
  const pathname = usePathname()

  const navItems: NavItem[] = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      title: "Income Streams",
      href: "/dashboard/income",
      icon: DollarSign,
    },
    {
      title: "Goals",
      href: "/dashboard/goals",
      icon: Target,
    },
    {
      title: "Analytics",
      href: "/dashboard/analytics",
      icon: BarChart3,
    },
    {
      title: "Reports",
      href: "/dashboard/reports",
      icon: LineChart,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ]

  return (
    <nav className="grid items-start gap-2">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === item.href ? "bg-muted hover:bg-muted" : "hover:bg-transparent hover:underline",
            "justify-start",
          )}
        >
          <item.icon className="mr-2 h-4 w-4" />
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
