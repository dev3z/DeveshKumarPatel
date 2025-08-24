import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Music, Play, Headphones } from "lucide-react"

export function MusicSection() {
  const musicPlatforms = [
    {
      name: "Spotify",
      description: "Stream Devibers India's latest releases and curated playlists",
      icon: <Play className="h-6 w-6" />,
      link: "https://open.spotify.com/artist/7HfQ8sPzR0NC9cAcyeVrx8?si=1O6uSoKiRPmrH88VpEsioA",
      color: "bg-green-500",
    },
    {
      name: "SoundCloud",
      description: "Discover exclusive tracks and behind-the-scenes content",
      icon: <Headphones className="h-6 w-6" />,
      link: "https://soundcloud.com/devibers-india",
      color: "bg-orange-500",
    },
    {
      name: "Amazon Music",
      description: "High-quality streaming on Amazon Music platform",
      icon: <Music className="h-6 w-6" />,
      link: "https://music.amazon.in/artists/B08R65SCX4/devibers-india",
      color: "bg-blue-500",
    },
  ]

  return (
    <section id="music" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-sans font-black text-foreground mb-4">Music & Creative Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Devibers India - Music production and creative marketing campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {musicPlatforms.map((platform, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 ${platform.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform`}
                  >
                    {platform.icon}
                  </div>
                  <CardTitle className="text-xl font-sans font-black">{platform.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6 leading-relaxed">{platform.description}</p>
                  <Button asChild className="w-full">
                    <a href={platform.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Listen Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-sans font-black text-center mb-8">Marketing & Social Media</h3>
            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Badge variant="secondary" className="mb-4">
                    Social Media Marketing
                  </Badge>
                  <h4 className="text-xl font-sans font-bold mb-2">Devibers India Instagram</h4>
                  <p className="text-muted-foreground mb-6">
                    Creative marketing campaigns, visual storytelling, and audience engagement strategies
                  </p>
                </div>
                <Button asChild>
                  <a href="https://www.instagram.com/devibers" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Marketing Work
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
