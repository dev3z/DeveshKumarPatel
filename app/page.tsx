import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { LeadershipSection } from "@/components/leadership-section"
import { ProjectsSection } from "@/components/projects-section"
import { TechnicalSection } from "@/components/technical-section"
import { ContentSection } from "@/components/content-section"
import { MusicSection } from "@/components/music-section"
import { PhotographySection } from "@/components/photography-section"
import { ContactSection } from "@/components/contact-section"
import { NotableAchievements } from "@/components/notable-achievements"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TechnicalSection />
      <ContentSection />
      <LeadershipSection />
      <MusicSection />
      <PhotographySection />
      <ContactSection />
      <NotableAchievements />
      <Footer />
    </main>
  )
}
