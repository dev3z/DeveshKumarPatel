import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, BookOpen, Code, Lightbulb } from "lucide-react"

export function ContentSection() {
  const content = [
    {
      title: "Domain Ownership and the Internet Ecosystem",
      platform: "Medium",
      description:
        "A comprehensive guide addressing questions about domain names, ownership, and their connection to the internet. Breaking down complex concepts into digestible insights.",
      type: "Technical Guide",
      icon: <BookOpen className="h-5 w-5" />,
      link: "https://medium.com/@dev3z/domain-ownership-and-the-internet-ecosystem-your-questions-answered-28bcc14b5d03",
      image: "/internet-domain-network-diagram.png",
    },
    {
      title: "Java Collections: Ultimate Interview Guide",
      platform: "Medium",
      description:
        "The Java Collections Framework guide for interviews, OA, and LeetCode. A powerful toolkit for managing and manipulating data efficiently for coding interviews.",
      type: "Programming Tutorial",
      icon: <Code className="h-5 w-5" />,
      link: "https://medium.com/@dev3z/java-collections-your-ultimate-guide-for-interviews-oa-and-leetcode-69524b11a7f8",
      image: "/java-programming-code-collections-framework.png",
    },
    {
      title: "From Panic to Perfection: DevOps Life",
      platform: "Medium",
      description:
        "A humorous yet insightful look into the hectic and hilarious life of a DevOps Engineer. Exploring the chaos, coffee, and continuous delivery culture.",
      type: "Career Insights",
      icon: <Lightbulb className="h-5 w-5" />,
      link: "https://medium.com/@dev3z/from-panic-to-perfection-the-hectic-and-hilarious-life-of-a-devops-engineer-3bba1cca2050",
      image: "/devops-engineer-working-with-servers-and-deploymen.png",
    },
  ]

  return (
    <section id="content" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-sans font-black text-foreground mb-4">Content & Writing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sharing knowledge through technical writing and creative documentation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {content.map((item, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1 bg-primary/10 rounded text-primary">{item.icon}</div>
                    <Badge variant="outline">{item.type}</Badge>
                  </div>
                  <CardTitle className="text-lg font-sans font-black line-clamp-2">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{item.platform}</Badge>
                    <Button size="sm" variant="outline" asChild>
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Read
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-sans font-black">Social Media Presence</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">Pixel MANIT</p>
                      <p className="text-sm text-muted-foreground">Art & Photography Society</p>
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://www.instagram.com/pixel.manit" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Instagram
                      </a>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">GDSC NITB</p>
                      <p className="text-sm text-muted-foreground">Google Developer Student Club</p>
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://www.instagram.com/gdsc.nitb/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Instagram
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-sans font-black">Writing Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">Medium</p>
                      <p className="text-sm text-muted-foreground">Technical articles & insights</p>
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://medium.com/@dev3z" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Follow
                      </a>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">Hashnode</p>
                      <p className="text-sm text-muted-foreground">Developer blog & tutorials</p>
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://hashnode.com/@dev3z" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Follow
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
