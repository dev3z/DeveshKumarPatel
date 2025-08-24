import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Trophy, Star, Music } from "lucide-react"

export function NotableAchievements() {
  const achievements = [
    {
      title: "National Anveshika Experimental Skill Test",
      organization: "IIT Kanpur",
      description: "Qualified in the prestigious national-level experimental skill assessment",
      icon: <Award className="h-6 w-6" />,
      category: "Academic Excellence",
    },
    {
      title: "Second Prize - State-Level Band Competition",
      organization: "Government of Madhya Pradesh",
      description: "Achieved second place in competitive music performance at state level",
      icon: <Trophy className="h-6 w-6" />,
      category: "Music Achievement",
    },
    {
      title: "Verified Music Artist",
      organization: "Multiple Platforms",
      description: "Produced and distributed original music as a verified artist across streaming platforms",
      icon: <Music className="h-6 w-6" />,
      category: "Creative Recognition",
    },
  ]

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-sans font-black text-foreground mb-4">Notable Achievements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognition and accomplishments across academic, creative, and professional domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {achievement.icon}
                  </div>
                  <Badge variant="outline" className="mb-3">
                    {achievement.category}
                  </Badge>
                  <h3 className="text-lg font-sans font-black mb-2">{achievement.title}</h3>
                  <p className="text-primary font-semibold mb-3">{achievement.organization}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-accent/10 border-accent/20 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <Star className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-sans font-black mb-4">Recognition Summary</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These achievements reflect a commitment to excellence across diverse fields - from technical
                  innovation and academic rigor to creative expression and artistic recognition. Each accomplishment
                  demonstrates the ability to excel in competitive environments while maintaining high standards of
                  quality and performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
