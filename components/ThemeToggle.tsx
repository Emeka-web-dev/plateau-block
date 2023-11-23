"use client"

import {useState, useEffect} from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Moon, SunMoon } from "lucide-react"

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  if(!isMounted) return;

    const handleTheme = () => {
        if(theme == "dark") setTheme("light");
        if(theme == "light") setTheme("dark");
    }

  return (
    <Button variant="ghost" size="icon" onClick={handleTheme}>
        {/* <SunMoon className="w-5 h-5" /> */}
        {theme == "dark" ? <SunMoon className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </Button>
  )
}
