import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";

import factorsImg from "@/assets/hiring-factors.png";
import rankingsImg from "@/assets/ranked-candidates.png";

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
              <a href="https://calendar.app.google/txrKmHwrR9MzruMV6cid=bmFyZW5wYXJhc2hhcjFAZ21haWwuY29t" target="_blank" rel="noopener noreferrer">
                <Mail className="mr-2" /> Talk to Us
              </a>
            </Button>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="container mx-auto px-4 py-20 md:py-28">
          <div className="mx-auto max-w-4xl text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Create winning hires with <span className="text-gradient-primary">AI Resume Ranking</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Fetch resumes from your ATS, weight hiring factors, rank candidates with explainable rationale, and get a CSV to your inbox.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Button size="lg" variant="hero" className="hover-scale" onClick={scrollToCTA}>
                Get Started <ArrowRight className="ml-2" />
              </Button>
              <a href="#how-it-works" className="text-sm md:text-base underline-offset-4 hover:underline">
                See how it works
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><CheckCircle2 className="text-primary" /> No credit card</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="text-primary" /> Privacy-first</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="text-primary" /> ATS-friendly</span>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="container mx-auto px-4 pb-8 md:pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">How it works</h2>
            <p className="mt-3 text-muted-foreground">Four simple steps to fair, explainable, and fast candidate ranking.</p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="animate-fade-in">
              <CardContent className="pt-6">
                <img
                  src={factorsImg}
                  alt="Hiring factors with adjustable sliders and weights"
                  className="w-full rounded-lg border border-border shadow-sm"
                  loading="lazy"
                />
                <p className="mt-4 text-sm text-muted-foreground">
                  We create hiring factors based on the job description and role. Edit them and assign importance.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardContent className="pt-6">
                <img
                  src={rankingsImg}
                  alt="Ranked candidates with rationale and highlighted evidence from resumes"
                  className="w-full rounded-lg border border-border shadow-sm"
                  loading="lazy"
                />
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
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Create winning hires with <span className="text-gradient-primary">AI Resume Ranking</span>.
            </h2>
            <p className="mt-3 md:mt-4 text-muted-foreground text-base md:text-lg">Start for free. Cancel anytime.</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Button size="lg" className="hover-scale" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
                Get Started <ArrowRight className="ml-2" />
              </Button>
              <Button asChild size="lg" variant="outline" className="hover-scale">
                <a href="https://calendar.app.google/txrKmHwrR9MzruMV6cid=bmFyZW5wYXJhc2hhcjFAZ21haWwuY29t" target="_blank" rel="noopener noreferrer">Talk to Us</a>
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
