"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"

export function ThemeScript() {
  const { theme, resolvedTheme } = useTheme()

  useEffect(() => {
    // Ensure the theme is applied to the document
    if (resolvedTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [resolvedTheme])

  return null
}
