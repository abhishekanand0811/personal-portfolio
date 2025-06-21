"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star, Clock } from "lucide-react"

export function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".project-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-slide-in-up")
              }, index * 150)
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

  const projects = [
    {
      title: "Computer-Vision Based Voice-Assisted Indoor-Navigation System",
      description:
        "An AI-powered assistive system designed to help visually impaired individuals navigate indoor environments using Object Detection, Depth Estimation, and Voice Assistance. The system combines computer vision and large language models (LLMs) to identify obstacles, estimate distances, and provide real-time voice feedback.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Python", "YOLOv8", "OpenCV", "Streamlit", "pyttsx3", "Monocular Depth Estimation", "NumPy", "PyTorch"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/abhishekanand0811/Computer-Vision-Based-Voice-Assisted-Indoor-Navigation-System",
      featured: true,
      gradient: "from-blue-500 to-cyan-500",
      isLive: false, 
    },
    {
      title: "Facial Recognition Module for Indoor Navigation System",
      description:
        "It is designed to identify users in real-time using facial recognition techniques and personalize the indoor navigation experience accordingly.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Python", "FaceNet", "OpenCV", "Dlib", "Haar Cascades", "NumPy", "Streamlit", "PyTorch"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/abhishekanand0811/Facial-Recognition-Module-for-Indoor-Navigation-System",
      featured: true,
      gradient: "from-purple-500 to-pink-500",
      isLive: false, 
    },
    {
      title: "Movie Success Prediction: A Machine Learning Approach",
      description:
        "This study compares the performance of K-Nearest Neighbors (KNN), Decision Tree, SVR, and Linear Regression models in predicting box office patterns using four diverse datasets. The objective is to identify the most accurate model-dataset combination for box office prediction, employing accuracy score as the evaluation metric. The research provides valuable insights for enhancing the film industry by systematically analyzing model outcomes across datasets.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/abhishekanand0811/-Movie-Success-Prediction-A-Machine-Learning-Approach",
      featured: false,
      gradient: "from-green-500 to-emerald-500",
      isLive: false,
    },
    {
      title: "Book Rental App",
      description:
        "A MERN Stack application that allows users to browse, rent, and manage books online. This app provides an intuitive user experience for book lovers and library managers.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["MongoDB Atlas", "Express.js", "JavaScript", "React", "Node.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/abhishekanand0811/bookrental",
      featured: false,
      gradient: "from-orange-500 to-red-500",
      isLive: false,
    },
    {
      title: "Attendance Management System",
      description:
        "The Attendance Management System is a project designed to facilitate the efficient tracking and management of absences within an educational institution.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Angular", "Angular Material" , "Bootstrap", "Spring Boot", "Hibernate" , "MySQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/anaswara11/attendance-management-system-angular",
      featured: false,
      gradient: "from-indigo-500 to-purple-500",
      isLive: false,
    },
    /*{
      title: "Fitness Tracking App",
      description:
        "A comprehensive fitness app with workout tracking, nutrition logging, progress analytics, and social features.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
      gradient: "from-teal-500 to-blue-500",
      isLive: false, // Set to false for "Coming Soon"
    },*/
  ]

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-primary/5 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I'm passionate about.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`project-card group overflow-hidden border-0 bg-gradient-to-br from-background/50 to-primary/5 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105 opacity-0 ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative overflow-hidden">
                <div
                  className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white text-2xl font-bold relative group-hover:scale-110 transition-transform duration-500`}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10">
                    {project.title
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Star className="h-3 w-3 fill-current" />
                      Featured
                    </div>
                  )}
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs px-2 py-1 border-primary/30 hover:bg-primary/10 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  {project.isLive ? (
                    <Button
                      size="sm"
                      asChild
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo(Coming Soon)
                      </a>
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      disabled
                      className="flex-1 bg-gray-400 hover:bg-gray-400 text-gray-600 border-0 cursor-not-allowed opacity-60"
                    >
                      <Clock className="h-4 w-4 mr-2" />
                      Live Demo(Coming Soon)
                    </Button>
                  )}

                  <Button variant="outline" size="sm" asChild className="flex-1 border-primary/30 hover:bg-primary/10">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
