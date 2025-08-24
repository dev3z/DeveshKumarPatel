import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Camera, Instagram, Play } from "lucide-react"

export function PhotographySection() {
  return (
    <section id="photography" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-sans font-black text-foreground mb-4">Photography Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visual storytelling through creative photography and artistic expression
            </p>
          </div>

          <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 mb-8">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Camera className="h-10 w-10" />
              </div>
              <CardTitle className="text-2xl font-sans font-black">Fotulelo Photography</CardTitle>
              <p className="text-muted-foreground">Creative visual storytelling and artistic photography</p>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Portrait Photography</h4>
                  <p className="text-sm text-muted-foreground">Capturing authentic moments and emotions</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Event Coverage</h4>
                  <p className="text-sm text-muted-foreground">Professional event and celebration photography</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Creative Concepts</h4>
                  <p className="text-sm text-muted-foreground">Artistic and conceptual photography projects</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-2 mb-8">
                <Badge variant="secondary">Portrait</Badge>
                <Badge variant="secondary">Event Photography</Badge>
                <Badge variant="secondary">Creative Direction</Badge>
                <Badge variant="secondary">Visual Storytelling</Badge>
              </div>

              <Button size="lg" asChild className="w-full md:w-auto">
                <a href="https://www.instagram.com/fotulelo" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-5 w-5" />
                  View Photography Portfolio
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card border-border mb-8">
            <CardHeader>
              <CardTitle className="text-xl font-sans font-black text-center">Photography Portfolio Showcase</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src="/images/photography-portfolio.png"
                alt="Photography Portfolio Collage"
                className="w-full rounded-lg shadow-lg"
              />
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <Play className="h-10 w-10" />
              </div>
              <CardTitle className="text-2xl font-sans font-black">Video Editing Portfolio</CardTitle>
              <p className="text-muted-foreground">Creative video production and post-production work</p>
            </CardHeader>
            <CardContent className="text-center">
              <div className="aspect-video mb-6">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/p09oO5pm5v4"
                  title="Video Editing Portfolio"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <Badge variant="secondary">Video Editing</Badge>
                <Badge variant="secondary">Motion Graphics</Badge>
                <Badge variant="secondary">Color Grading</Badge>
                <Badge variant="secondary">Audio Mixing</Badge>
              </div>
              <p className="text-muted-foreground">
                Showcasing creative video editing skills with professional post-production techniques
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
