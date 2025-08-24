"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-sans font-black text-primary">Devesh Kumar Patel</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("technical")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Technical
            </button>
            <button
              onClick={() => scrollToSection("music")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Music
            </button>
            <button
              onClick={() => scrollToSection("photography")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Photography
            </button>
            <button
              onClick={() => scrollToSection("leadership")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Leadership
            </button>
            <button
              onClick={() => scrollToSection("content")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Content
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("technical")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Technical
              </button>
              <button
                onClick={() => scrollToSection("music")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Music
              </button>
              <button
                onClick={() => scrollToSection("photography")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Photography
              </button>
              <button
                onClick={() => scrollToSection("leadership")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Leadership
              </button>
              <button
                onClick={() => scrollToSection("content")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Content
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
