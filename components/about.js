"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-primary/5 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            More than code — it's a mission.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative w-full h-96 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-2xl flex items-center justify-center text-white text-6xl font-bold shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
              <div className="absolute inset-4 bg-background/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                AA
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm an aspiring software developer and engineering student with a strong interest in{" "}
                  <span className="text-red-400 font-semibold">Machine Learning</span> and <span className="text-yellow-400 font-semibold">Web Development</span>.
                  My journey started with a curiosity for how technology can solve real-world problems, which led me to explore the world of{" "}
                  <span className="text-purple-400 font-semibold">AI</span>,{" "}
                  <span className="text-pink-400 font-semibold">Deep Learning</span>, and{" "}
                  <span className="text-green-400 font-semibold">Web Technologies</span> solutions.
                </p>
                <p>I enjoy building meaningful projects — from voice-assisted navigation systems to intelligent face recognition tools — and I’m 
                  constantly learning and improving my skills to turn ideas into impactful solutions.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "7", label: "Projects Built", color: "from-blue-500 to-cyan-500" },
                { number: "Fresher", label: "Years Experience", color: "from-purple-500 to-pink-500" },
                { number: "10+", label: "Tech Domains Explored", color: "from-green-500 to-emerald-500" },
                { number: "100%", label: "Dedication", color: "from-orange-500 to-red-500" },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background/50 to-primary/5 backdrop-blur-sm"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {["Problem Solver", "Creative Thinker", "Team Player", "Continuous Learner"].map((trait, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/20 hover:from-primary/20 hover:to-primary/30 transition-all duration-300 cursor-default"
                >
                  {trait}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
