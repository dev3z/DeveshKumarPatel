import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-sans font-black text-foreground mb-4">Devesh Kumar Patel</h3>
              <p className="text-muted-foreground mb-4">
                Passionate about Marketing, data analysis, content creation and driving business growth.
              </p>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.linkedin.com/in/deveshkumarpatel/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
            
                <Button variant="outline" size="sm" asChild>
                  <a href="mailto:deveshkumarpatel05@gmail.com">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
                <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </a>
                <a href="#leadership" className="block text-muted-foreground hover:text-primary transition-colors">
                  Leadership
                </a>
                <a href="#content" className="block text-muted-foreground hover:text-primary transition-colors">
                  Content
                </a>
                <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Content Platforms</h4>
              <div className="space-y-2">
                <a
                  href="https://medium.com/@dev3z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Medium Blog
                </a>
                <a
                  href="https://hashnode.com/@dev3z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Hashnode
                </a>
                <a
                  href="https://www.instagram.com/pixel.manit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Pixel MANIT
                </a>
                <a
                  href="https://www.instagram.com/gdsc.nitb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  GDSC NITB
                </a>
              </div>
            </div>
          </div>

          <Separator className="mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2025 Devesh Kumar Patel. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
