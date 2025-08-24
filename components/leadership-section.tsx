import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Calendar, Camera } from "lucide-react"

export function LeadershipSection() {
  const experiences = [
    {
      role: "President",
      organization: "Pixel – The Art & Photography Society of MANIT",
      period: "Sept 2023 – Present",
      description:
        "Led a 40-member creative team and managed sponsorship, logistics, budgeting, and promotion for Kodachrome, an art exhibition with 1000+ participants across India.",
      achievements: ["1000+ participants", "Cross-India reach", "Full event management"],
      icon: <Camera className="h-6 w-6" />,
      image: "/images/pixel-team.jpg",
    },
    {
      role: "Core Team Member",
      organization: "Google Developer Student Club, MANIT",
      period: "Dec 2022 – Aug 2024",
      description:
        "Organized technical workshops on Zoom/Meet with 1000+ participants and managed Devfest 2022 logistics with GDG Bhopal for 500+ attendees.",
      achievements: ["1000+ workshop participants", "500+ DevFest attendees", "Technical leadership"],
      icon: <Users className="h-6 w-6" />,
      image: "/images/gdsc-team.png",
    },
    {
      role: "Member, Drummer",
      organization: "Roobaroo – The Cultural Society of MANIT",
      period: "Apr 2023 – Oct 2024",
      description:
        "Performed as drummer and managed stage setup, sound checks, and instrument arrangement for cultural fests.",
      achievements: ["Live performances", "Technical management", "Cultural leadership"],
      icon: <Award className="h-6 w-6" />,
      image: "/images/drummer-performance.jpg",
    },
  ]

  return (
    <section id="leadership" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-sans font-black text-foreground mb-4">Leadership Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building communities and driving impact through collaborative leadership
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <img
                      src={exp.image || "/placeholder.svg"}
                      alt={exp.organization}
                      className="w-full h-48 md:h-full object-cover rounded-l-lg"
                    />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">{exp.icon}</div>
                        <div>
                          <CardTitle className="text-xl font-sans font-black">{exp.role}</CardTitle>
                          <p className="text-primary font-semibold">{exp.organization}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <Badge key={achIndex} variant="secondary">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
