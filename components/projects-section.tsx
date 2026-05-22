import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, BarChart3, TrendingUp, GitBranch } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Business Performance Dashboard",
      description:
        "Analyzed 148K+ transactions using SQL joins on 5 tables to clean and prepare data for visualization. Built a Power BI dashboard with 8 visuals and 6+ DAX measures to analyze trends across 279 products.",
      impact: "Identified a 57.7% sales drop from 2019–2020 and revealed seasonal and regional demand peaks",
      technologies: ["Power BI", "MySQL", "DAX", "Data Modeling"],
      icon: <BarChart3 className="h-6 w-6" />,
      image: "https://github.com/dev3z/Sales-Visualization/raw/main/images/overall_sales_dashboard.png",
       github: "https://github.com/dev3z/Sales-Visualization",
      demo: "https://github.com/dev3z/Sales-Visualization",
    },
    {
      title: "Consumer Behavior Analysis",
      description:
        "Performed EDA on 10K+ retail transactions to analyze customer behavior, product sales, and regional performance. Cleaned, transformed, and structured raw data using Pandas and NumPy.",
      impact: "Visualized key trends with Seaborn and Matplotlib to support data-driven business recommendations",
      technologies: ["Python", "Pandas", "NumPy", "Seaborn", "Matplotlib"],
      icon: <TrendingUp className="h-6 w-6" />,
      image: "https://github.com/dev3z/Sales-EDA/raw/main/screenshots/occupation.png",
      github: "https://github.com/dev3z/Sales-EDA",
      demo: "https://github.com/dev3z/Sales-EDA",
      },
    {
      title: "DSA Notes Automation System",
      description:
        "Built an automated system using Python that syncs technical documentation from Notion to GitHub. Implemented GitHub Actions workflow with cron jobs to convert Notion pages to Markdown and update README.md every 6 hours.",
      impact: "Streamlined documentation workflow, ensuring always up-to-date technical notes accessible on GitHub",
      technologies: ["Python", "GitHub Actions", "Notion API", "Markdown", "YAML", "Cron Jobs"],
      icon: <GitBranch className="h-6 w-6" />,
      image: "https://img.freepik.com/premium-vector/text-files-concept-illustration_114360-4044.jpg",
      github: "https://github.com/dev3z/DSA-Notes-Problems",
      demo: "https://wooded-liquid-52c.notion.site/DSA-Notes-Leetcode-Problems-200e2fec691d8079a5ccc406899ca1fc",
    },
    {
      title: "Multi-Model LangChain Agentic System",
      description:
        "Engineered a vendor-agnostic LLM backend supporting dynamic swapping between OpenAI, Google Gemini, and Groq models. Developed intelligent autonomous agent equipped with custom tool-calling capabilities for seamless execution of external functions and automation of complex workflows.",
      impact: "Optimized token usage and improved multi-turn conversations through custom middleware and prompt context management",
      technologies: ["Python", "LangChain", "TavilySearch", "OpenAI", "Google Gemini", "Groq"],
      icon: <TrendingUp className="h-6 w-6" />,
      image: "https://cdn.prod.website-files.com/67efa112fb94a795e40d92ee/6863a1206e0d5a21d2d71878_Untitled%20design%20(7).webp",
      github: "https://github.com/dev3z/LangChain-Multi-Agent-AI-System",
      demo: "https://github.com/dev3z/LangChain-Multi-Agent-AI-System",
    },
    {
      title: "Lyrics-Based Music Recommendation System",
      description:
        "Built a content-based music recommender that analyzes song lyrics to surface similar tracks using TF-IDF vectorization and cosine similarity. Implemented a preprocessing pipeline and interactive Streamlit app to clean and tokenize lyrics, compute embeddings, and return top-N recommendations.",
      impact: "Delivered behavior-agnostic recommendations that mitigate cold-start issues by relying on content signals rather than historical user activity",
      technologies: ["Python", "Streamlit", "Scikit-learn", "TF-IDF", "NLP", "Pandas"],
      icon: <BarChart3 className="h-6 w-6" />,
      image: "https://miro.medium.com/v2/da:true/resize:fit:1200/0*eZvgciSpW4-s4-Hf",
      github: "https://github.com/dev3z/music-recommendation-system",
      demo: "https://github.com/dev3z/music-recommendation-system",
    },
    {
      title: "CafeFlow – Restaurant Management System",
      description:
        "Developed a full-stack restaurant POS system with modular React components for order handling and table management. Built RESTful APIs using Express.js and MongoDB to manage menu, orders, and real-time updates with JWT-based authentication and role-based access control.",
      impact: "Integrated Razorpay payments with invoice generation, enabling seamless transaction processing and order tracking",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Razorpay"],
      icon: <BarChart3 className="h-6 w-6" />,
      image: "https://img.freepik.com/premium-psd/realistic-pos-machine-mockup-template_1249834-1152.jpg?semt=ais_hybrid&w=740&q=80",
      github: "https://github.com/dev3z/CafeFlow-management",
      demo: "https://github.com/dev3z/CafeFlow-management",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-sans font-black text-foreground mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Data-driven solutions and automation systems that deliver measurable business impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {project.icon}
                    </div>
                    <CardTitle className="text-xl font-sans font-black">{project.title}</CardTitle>
                  </div>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="bg-accent/10 p-4 rounded-lg mb-4">
                    <p className="text-sm font-semibold text-black">
                      <strong>Impact:</strong> {project.impact}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github || "#"} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.demo || "#"} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
