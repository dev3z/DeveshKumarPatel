import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, FileText, Code, BookOpen } from "lucide-react"

export function TechnicalSection() {
  const technicalContent = [
  
    {
      title: "Java Collections for Interviews",
      description: "In-depth guide to Java Collections framework with practical examples and interview questions.",
      type: "Blog Post",
      platform: "Hashnode",
      icon: <Code className="h-6 w-6" />,
      link: "https://java-collections-by-dev3z.hashnode.dev",
      tags: ["Java", "Collections", "Interview", "Programming"],
    },
    {
      title: "Shell Scripting & Linux for DevOps",
      description: "Complete guide to shell scripting and Linux commands essential for DevOps practices.",
      type: "Blog Post",
      platform: "Hashnode",
      icon: <FileText className="h-6 w-6" />,
      link: "https://shellscriptingbydev3z.hashnode.dev",
      tags: ["Shell Scripting", "Linux", "DevOps", "Automation"],
    },
  ]

  return (
    <section id="technical" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-sans font-black text-foreground mb-4">Technical Documentation</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive guides and documentation for developers and technical interviews
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {technicalContent.map((content, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {content.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg font-sans font-black">{content.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {content.type} • {content.platform}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{content.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {content.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button size="sm" variant="outline" asChild className="w-full bg-transparent">
                    <a href={content.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Read More
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Live Technical Documentation */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-sans font-black mb-4 text-center">Notion Documentation</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-background border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-sans font-black mb-2">DSA Notes & Problems</h4>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive documentation of Data Structures and Algorithms with detailed explanations and solutions to coding problems.
                  </p>
                  <Button size="sm" variant="outline" asChild className="w-full bg-transparent">
                    <a
                      href="https://wooded-liquid-52c.notion.site/DSA-Notes-Leetcode-Problems-200e2fec691d8079a5ccc406899ca1fc"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View DSA Documentation
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-background border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-sans font-black mb-2">Web Dev Documentation</h4>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive web development guide with embedded code examples
                  </p>
                  <Button size="sm" variant="outline" asChild className="w-full bg-transparent">
                    <a
                      href="https://wooded-liquid-52c.notion.site/ebd/259e2fec691d807b9c0dc125e2c3ddb8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Web Dev Guide
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
