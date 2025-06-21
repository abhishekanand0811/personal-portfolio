"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Send, MessageCircle, Linkedin, MessageSquare, Whatsapp } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Function to send message via LinkedIn
  const sendLinkedInMessage = () => {
    const message = `Hi Abhishek Anand,

I found your portfolio and would like to connect with you. 

${formData.name ? `My name is ${formData.name}.` : ""}
${formData.email ? `You can reach me at ${formData.email}.` : ""}
${
  formData.message
    ? `

Message: ${formData.message}`
    : ""
}

Best regards!`

    // LinkedIn messaging URL (replace with your LinkedIn profile URL)
    const linkedinUrl = `https://www.linkedin.com/in/abhishek-anand-a9379b272/`
    window.open(linkedinUrl, "_blank")

    // Copy message to clipboard for easy pasting
    navigator.clipboard.writeText(message).then(() => {
      alert("Message copied to clipboard! Paste it in LinkedIn chat.")
    })
  }

  // Function to send message via WhatsApp
  const sendWhatsAppMessage = () => {
    const message = `Hi Abhishek Anand,

I found your portfolio and would like to connect with you.

${formData.name ? `My name is ${formData.name}.` : ""}
${formData.email ? `You can reach me at ${formData.email}.` : ""}
${
  formData.message
    ? `

Message: ${formData.message}`
    : ""
}

Best regards!`


    const whatsappUrl = `https://wa.me/+918547833808?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "abhishekanand08112002@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=abhishekanand08112002@gmail.com&su=Hello%20from%20your%20portfolio&body=Hi%20Abhishek%20Anand,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect.%0D%0A%0D%0ABest%20regards",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/abhishek-anand-a9379b272/", 
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "WhatsApp",
      value: "+91-8547833808", 
      href: "https://wa.me/+918547833808", 
      color: "from-green-500 to-green-700",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 8547833808",
      href: "tel:+91 8547833808",
      color: "from-purple-500 to-purple-700",
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <MessageCircle className="h-8 w-8 text-primary" />
                Let's Connect
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, creative projects, or just chat about the latest in
                technology and design. Choose your preferred way to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="group">
                  <a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-background/50 to-primary/5 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                  >
                    <div
                      className={`p-3 bg-gradient-to-r ${info.color} rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{info.title}</div>
                      <div className="text-muted-foreground group-hover:text-primary transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <Card className="border-0 bg-gradient-to-br from-background/50 to-primary/5 backdrop-blur-sm shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Send className="h-6 w-6 text-primary" />
                Send a Message
              </CardTitle>
              <CardDescription className="text-base">
                Fill out the form below and choose how you'd like to send your message.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 bg-background/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 bg-background/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                  />
                </div>

                {/* Multiple Send Options */}
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground font-medium">Choose how to send your message:</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Button
                      type="button"
                      onClick={sendLinkedInMessage}
                      disabled={!formData.name || !formData.message}
                      className="h-18 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white border-0 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      <Linkedin className="h-5 w-5 mr-2" />
                      LinkedIn DM
                    </Button>

                    <Button
                      type="button"
                      onClick={sendWhatsAppMessage}
                      disabled={!formData.name || !formData.message}
                      className="h-18 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white border-0 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      <MessageSquare className="h-5 w-5 mr-2" />
                      WhatsApp
                    </Button>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.message}
                    className="w-full h-20 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending via Email...
                      </div>
                    ) : (
                      <>
                        <Mail className="h-5 w-5 mr-2" />
                        Send via Email
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="mt-32 pt-4 border-t border-border/50 text-center">
        <p className="text-muted-foreground">&copy; 2025 Abhishek Anand. Made with ❤️ and lots of ☕</p>
      </footer>
    </section>
  )
}