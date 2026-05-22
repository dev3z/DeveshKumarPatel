import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Target, Lightbulb } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-sans font-black text-foreground mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A data-driven problem solver with a passion for innovation and leadership
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-sans font-black mb-2">Education</h3>
                <p className="text-muted-foreground mb-4">
                  B.Tech Chemical Engineering
                  <br />
                  NIT Bhopal
                </p>
                <Badge variant="outline">Nov 2022 - June 2026</Badge>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-sans font-black mb-2">Career Focus</h3>
                <p className="text-muted-foreground mb-4">
                  Targeting roles in Product, Data Analytics, Agentic AI Development
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Strategy</Badge>
                  <Badge variant="secondary">Growth</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-sans font-black mb-2">Passion</h3>
                <p className="text-muted-foreground mb-4">
                  Combining analytical thinking with creative thinking to solve complex problems
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Innovation</Badge>
                  <Badge variant="secondary">Creativity</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/30 rounded-2xl p-8">
            <h3 className="text-2xl font-sans font-black mb-8 text-center">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-3 text-primary">Data Analysis & Visualization</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>SQL</Badge>
                  <Badge>Python</Badge>
                  <Badge>LangChain</Badge>
                  <Badge>Power BI</Badge>
                  <Badge>Excel</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-primary">Databases & Cloud</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>PostgreSQL</Badge>
                  <Badge>AWS</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-primary">Creative & Design Tools</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Adobe Photoshop</Badge>
                  <Badge>Adobe Lightroom</Badge>
                  <Badge>Adobe Premiere Pro</Badge>
                  <Badge>After Effects</Badge>
                  <Badge>Figma</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-primary">Marketing & Content</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Marketing</Badge>
                  <Badge>Technical Documentation</Badge>
                  <Badge>Content Development</Badge>
                  <Badge>Market Research</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-primary">Collaboration & Management</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Project Management</Badge>
                  <Badge>Cross-functional Collaboration</Badge>
                  <Badge>Engineering Assistance</Badge>
                  <Badge>Reporting</Badge>
                  <Badge>Attention to Detail</Badge>
                  <Badge>Proactive Teamwork</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-primary">Development and AI</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>MERN Stack</Badge>
                  <Badge>LangChain</Badge>
                  <Badge>Github Actions</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
