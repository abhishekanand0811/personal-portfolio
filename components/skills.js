"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Server, Smartphone, Database, Globe, Brain, Camera, Cpu, Bot, Wrench } from "lucide-react"

export function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".skill-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-slide-in-up")
              }, index * 100)
            })
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

  const skillCategories = [
    {
      title: "Software Development",
      icon: <Cpu className="h-6 w-6" />,
      color: "from-orange-500 to-red-500",
      skills: ["Python", "C", "Git", "GitHub", "OOP", "APIs", "VS Code", "Debugging"],
    },
    {
      title: "Machine Learning",
      icon: <Brain className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500",
      skills: ["Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Regression", "Classification", "Model Evaluation"],
    },
    {
      title: "Computer Vision",
      icon: <Camera className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      skills: ["OpenCV", "YOLOv8", "FaceNet", "Monocular Depth Estimation", "Haar Cascades", "Image Processing", "Object Detection"],
    },
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      title: "AI & Deep Learning",
      icon: <Bot className="h-6 w-6" />,
      color: "from-indigo-500 to-purple-500",
      skills: ["Neural Networks", "TensorFlow", "Keras", "CNNs", "NLP Basics", "Transfer Learning", "Model Training", "PyTorch (beginner)"],
    },
    {
      title: "Dev Tools & Workflow",
      icon: <Wrench className="h-6 w-6" />,
      color: "from-teal-500 to-blue-500",
      skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab", "Debugging", "Virtual Environments", "Documentation"],
    },
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The frameworks and tools I work with to build smart solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="skill-card group h-full border-0 bg-gradient-to-br from-background/50 to-primary/5 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105 opacity-0"
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <div
                    className={`p-3 bg-gradient-to-r ${category.color} rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>
                  <span className="text-lg font-bold">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="px-3 py-1 bg-gradient-to-r from-primary/10 to-primary/20 hover:from-primary/20 hover:to-primary/30 transition-all duration-300 cursor-default hover:scale-105"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
