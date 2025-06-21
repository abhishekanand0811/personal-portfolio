"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
            JD
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Abhishek Anand</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8">Full Stack Developer & UI/UX Designer</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            I create beautiful, functional, and user-centered digital experiences. Passionate about clean code and
            innovative solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" onClick={() => scrollToSection("projects")}>
            View My Work
          </Button>
          <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
            Get In Touch
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/abhishekanand0811" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/abhishek-anand-a9379b272/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:abhishekanand08112002@gmail.com">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </div>

        <Button variant="ghost" size="icon" onClick={() => scrollToSection("about")} className="animate-bounce">
          <ArrowDown className="h-6 w-6" />
          <span className="sr-only">Scroll down</span>
        </Button>
      </div>
    </section>
  )
}
