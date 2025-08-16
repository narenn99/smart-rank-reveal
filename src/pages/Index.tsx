import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";


const Index = () => {
  

  useEffect(() => {
    document.title = "Resume Ranking Agent – AI Resume Ranking";
  }, []);


  const scrollToCTA = () => {
    const el = document.getElementById("cta");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <nav className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="#top" className="flex items-center gap-2 text-lg font-semibold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Resume Ranking Agent</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How it works</a>
            <Button asChild variant="outline" className="hover-scale">
              <a href="https://calendar.app.google/6V5cGYHF75L2uWAeA" target="_blank" rel="noopener noreferrer">
                <Mail className="mr-2" /> Talk to Us
              </a>
            </Button>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="container mx-auto px-4 py-20 md:py-28">
          <div className="mx-auto max-w-4xl text-center animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.25] md:leading-[1.25]">
              Screen resumes with <span className="text-gradient-primary">AI Resume Ranking</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We pull resumes from your ATS, auto-create role-specific hiring factors, weight them by importance, and score each resume — all at just ₹0.8 or $0.01 per resume, saving 95% cost over traditional screening.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Button size="lg" variant="hero" className="hover-scale" onClick={scrollToCTA}>
                Get Started <ArrowRight className="ml-2" />
              </Button>
              <a href="#how-it-works" className="text-sm md:text-base underline-offset-4 hover:underline">
                See how it works
              </a>
            </div>
            
          </div>
        </section>

        <section id="how-it-works" className="container mx-auto px-4 pb-8 md:pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">How it works</h2>
            <p className="mt-3 text-muted-foreground">We create hiring factors based on the role and JD and score resumes accordingly</p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="animate-fade-in">
              <CardContent className="pt-6">
                <div className="w-full rounded-lg border border-border shadow-sm bg-background p-6">
                  <h3 className="text-lg font-semibold">Hiring Factors</h3>
                  <div className="mt-4 space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground">A/B Testing</span>
                        <span className="text-muted-foreground">35%</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-gradient-to-r from-primary to-primary/60" style={{ width: "35%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground">Market understanding</span>
                        <span className="text-muted-foreground">30%</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-gradient-to-r from-primary to-primary/60" style={{ width: "30%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground">Understanding AI</span>
                        <span className="text-muted-foreground">20%</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-gradient-to-r from-primary to-primary/60" style={{ width: "20%" }} />
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-muted-foreground">Weights are based on the role and JD</p>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  We create hiring factors and importances based on the job description and role. You can choose to edit them.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardContent className="pt-6">
                <div className="w-full rounded-lg border border-border shadow-sm bg-background overflow-hidden">
                  <div className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium">Ranked Candidates</div>
                  <table className="w-full text-sm">
                    <thead className="text-muted-foreground">
                      <tr className="border-b">
                        <th className="text-left px-4 py-2">Rank</th>
                        <th className="text-left px-4 py-2">Name</th>
                        <th className="text-left px-4 py-2">Rationale</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="px-4 py-2 font-medium">1</td>
                        <td className="px-4 py-2">
                          <span className="rounded px-1.5 py-0.5 bg-primary/10 text-primary">Jordan Patel</span>
                        </td>
                        <td className="px-4 py-2">
                          <span className="mr-1">Strong role alignment —</span>
                          <span className="rounded px-1 bg-accent">conducted A/B test at last company</span>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-4 py-2 font-medium">2</td>
                        <td className="px-4 py-2">Riley Chen</td>
                        <td className="px-4 py-2">Led growth experiments; relevant B2B experience</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-medium">3</td>
                        <td className="px-4 py-2">Samira Khan</td>
                        <td className="px-4 py-2">Strong analytics and SQL; stakeholder communication</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Ranks for each candidate with rationale and highlighted evidence from their resume.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="p-4 rounded-lg border bg-card shadow-sm"><strong>Step 1:</strong> Fetch resumes from your ATS.</div>
            <div className="p-4 rounded-lg border bg-card shadow-sm"><strong>Step 2:</strong> Set and weight hiring factors.</div>
            <div className="p-4 rounded-lg border bg-card shadow-sm"><strong>Step 3:</strong> Rank with rationale and evidence.</div>
            <div className="p-4 rounded-lg border bg-card shadow-sm"><strong>Step 4:</strong> Email a CSV of ranked resumes.</div>
          </div>
        </section>

        <section id="cta" className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-5xl rounded-3xl border bg-card shadow-xl p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.25] md:leading-[1.25]">
              Screen resumes with <span className="text-gradient-primary">AI Resume Ranking</span>.
            </h2>
            <p className="mt-3 md:mt-4 text-muted-foreground text-base md:text-lg">95% cheaper and accurate than traditional resume screening</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Button asChild size="lg" variant="outline" className="hover-scale">
                <a href="https://calendar.app.google/6V5cGYHF75L2uWAeA" target="_blank" rel="noopener noreferrer">Talk to Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-8 text-sm text-muted-foreground flex items-center justify-between">
          <p>© {new Date().getFullYear()} Resume Ranking Agent</p>
          <a href="#top" className="underline-offset-4 hover:underline">Back to top</a>
        </div>
      </footer>

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Resume Ranking Agent",
            applicationCategory: "BusinessApplication",
            description:
              "Fetch ATS resumes, set and weight hiring factors, rank candidates with rationale, and receive a CSV via email.",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />
    </>
  );
};

export default Index;
