"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Github, Linkedin, FileText } from "lucide-react"

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src="/images/devesh-profile.jpg"
              alt="Devesh Kumar Patel"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary shadow-lg object-cover"
            />
            <h1 className="text-4xl md:text-6xl font-sans font-black text-foreground mb-4">Devesh Kumar Patel</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              {""}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary">Founder's Office</Badge>
              <Badge variant="secondary">Content Marketing</Badge>
              <Badge variant="secondary">Data Analysis</Badge>
              <Badge variant="secondary">Leadership</Badge>
            </div>
          </div>

          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about crafting compelling stories and technical content to engage tech audiences. Skilled in market research, creative writing, and collaborative campaigns supporting strategic growth in dynamic environments. Experienced in project management, data analysis, and cross-functional collaboration 
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a
                href="https://drive.google.com/file/d/1cTIBnBibIpfLsX7GUgQ1PhobtFF3AUea/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-2 h-5 w-5" />
                View Resume
              </a>
            </Button>
            <div className="flex gap-4">
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.linkedin.com/in/deveshkumarpatel/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            
            </div>
          </div>

          <Button variant="ghost" size="lg" onClick={scrollToAbout} className="animate-bounce">
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
