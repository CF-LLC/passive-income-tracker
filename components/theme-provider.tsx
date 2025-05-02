"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
  attribute?: string
}

const initialState = {
  theme: "dark" as Theme,
  setTheme: (theme: Theme) => {},
}

const ThemeContext = createContext(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  enableSystem = true,
  disableTransitionOnChange = false,
  attribute = "data-theme",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  useEffect(() => {
    // Always use dark theme for our application
    document.documentElement.classList.add("dark")

    // Add the attribute for any components that might use it
    document.documentElement.setAttribute(attribute, "dark")
  }, [attribute])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      setTheme(theme)
      // In a real implementation, this would change the theme
      // But for our simplified version, we always use dark theme
    },
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
