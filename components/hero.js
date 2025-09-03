"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown, Terminal, Code2, Download } from "lucide-react"

export function Hero() {
  const [text, setText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Software Developer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(timer)
      clearInterval(cursorTimer)
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadResume = () => {
    // Create a temporary link element
    const link = document.createElement("a")
    link.href = "/New_Resume.pdf" // Path to your resume file in the public folder
    link.download = "New_Resume.pdf" // Updated filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Floating Code Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 animate-float">
            <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg backdrop-blur-sm border border-white/10">
              <Terminal className="h-6 w-6 text-blue-400" />
            </div>
          </div>
          <div className="absolute top-40 right-20 animate-float-delayed">
            <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-lg backdrop-blur-sm border border-white/10">
              <Code2 className="h-6 w-6 text-purple-400" />
            </div>
          </div>
        </div>

        <div className="mb-8 animate-fade-in">
          {/* Profile Avatar */}
          <div className="relative mb-8 group">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 p-1 animate-pulse-slow">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                <img
                  src="/me.jpg"
                  alt="Abhishek Anand"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    // Fallback to initials if image fails to load
                    e.target.style.display = "none"
                    e.target.nextSibling.style.display = "flex"
                  }}
                />
                <div
                  className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
                  style={{ display: "none" }}
                >
                  AA
                </div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Abhishek Anand
            </span>
          </h1>

          <div className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground mb-8 font-mono animate-slide-up-delayed">
            <span className="text-primary">&gt;</span> {text}
            <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>|</span>
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-delayed">
            I craft <span className="text-blue-400 font-semibold">beautiful</span>,{" "}
            <span className="text-purple-400 font-semibold">functional</span>, and{" "}
            <span className="text-pink-400 font-semibold">user-centered</span> digital experiences. Passionate about
            clean code and innovative solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up-delayed">
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <span className="mr-2">🚀</span>
            View My Work
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>

          <Button
            size="lg"
            onClick={downloadResume}
            className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            Resume
            <span className="ml-2">📄</span>
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="group bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            Get In Touch
          </Button>
        </div>

        {/* 🎯 BIGGER SOCIAL ICONS */}
        <div className="flex justify-center space-x-12 mb-16 animate-fade-in-delayed">
          {[
            {
              icon: Github,
              href: "https://github.com/abhishekanand0811",
              color: "hover:text-gray-400",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/abhishek-anand-a9379b272/",
              color: "hover:text-blue-400",
              label: "LinkedIn",
            },
            {
              icon: Mail,
              href: "mailto:abhishekanand08112002@gmail.com",
              color: "hover:text-green-400",
              label: "Email",
            },
          ].map(({ icon: Icon, href, color, label }, index) => (
            <div key={index} className="group text-center">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className={`p-6 rounded-2xl hover:bg-primary/10 transform hover:scale-125 transition-all duration-300 ${color} w-20 h-20`}
              >
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Icon className="h-12 w-12 group-hover:rotate-12 transition-transform" />
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-2 group-hover:text-primary transition-colors">{label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center mt-12 animate-fade-in-delayed">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection("about")}
            className="animate-bounce hover:animate-none group rounded-full p-10 hover:bg-primary/10 transition-all duration-300 w-15 h-15 border-2 border-primary/20 hover:border-primary/40"
          >
            <ArrowDown className="h-7 w-7 group-hover:translate-y-4 transition-transform text-primary" />
            <span className="sr-only">Scroll down</span>
          </Button>
        </div>

        {/* Optional: Add text below the arrow */}
        {/* <p className="text-sm text-muted-foreground mt-4 animate-fade-in-delayed opacity-70">
          Scroll to explore
        </p> */}
      </div>
    </section>
  )
}
