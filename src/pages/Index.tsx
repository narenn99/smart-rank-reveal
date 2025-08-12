import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import factorsImg from "@/assets/hiring-factors.png";
import rankingsImg from "@/assets/ranked-candidates.png";

const Index = () => {
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Resume Ranking Agent – AI Resume Ranking";
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!email || !message) {
      toast({ title: "Please complete required fields", description: "Email and message are required." });
      return;
    }

    console.log("Contact form submitted", { name, email, company, message });
    toast({ title: "Thanks!", description: "We’ll get back to you within 1 business day." });
    (e.target as HTMLFormElement).reset();
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
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
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            <Button variant="outline" className="hover-scale" onClick={scrollToContact}>
              <Mail className="mr-2" /> Contact Us
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
              <Button size="lg" variant="hero" className="hover-scale" onClick={scrollToContact}>
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

        <section id="contact" className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">Contact us</h2>
            <p className="mt-3 text-muted-foreground">Tell us about your role and hiring process. We’ll reply shortly.</p>
          </div>
          <form onSubmit={onSubmit} className="mx-auto mt-8 max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Jane Doe" autoComplete="name" />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" placeholder="jane@company.com" required autoComplete="email" />
            </div>
            <div>
              <Label htmlFor="company">Company</Label>
              <Input id="company" name="company" placeholder="Acme Inc." autoComplete="organization" />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea id="message" name="message" placeholder="What role are you hiring for?" required rows={5} />
            </div>
            <div className="md:col-span-2 flex items-center justify-between">
              <p className="text-xs text-muted-foreground">We respect your privacy. No spam ever.</p>
              <Button type="submit" size="lg" variant="hero" className="hover-scale">
                Send message <ArrowRight className="ml-2" />
              </Button>
            </div>
          </form>
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
