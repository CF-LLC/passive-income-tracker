"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, DollarSign, Home, LineChart, Menu, Settings, Target, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface NavItem {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

export function MobileNav() {
  const [open, setOpen] = useState(false)
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
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2" onClick={() => setOpen(false)}>
            <span className="font-bold">Passive Income Tracker</span>
          </Link>
          <Button
            variant="ghost"
            className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            onClick={() => setOpen(false)}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <nav className="mt-8 grid gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 px-2 py-2 text-base font-medium transition-colors",
                pathname === item.href ? "bg-muted" : "hover:bg-muted",
              )}
              onClick={() => setOpen(false)}
            >
              <item.icon className="h-5 w-5" />
              {item.title}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
