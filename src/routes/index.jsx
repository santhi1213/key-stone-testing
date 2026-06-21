import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Building2, Users, Sparkles, CheckCircle2, Award, Clock, Globe2 } from "lucide-react";
import SiteLayout from "../components/SiteLayout.jsx";
import heroImg from "../assets/hero-training.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Keystone Learn  — Corporate Training Delivery" },
      { name: "description", content: "Expert-led corporate training in cloud, networking, data, cybersecurity and professional skills. Built for modern enterprise teams." },
      { property: "og:title", content: "Keystone Learn" },
      { property: "og:description", content: "Corporate training delivery for technology and professional skills." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Building2, title: "Corporate Training", text: "Bespoke programs designed around your team's roles, tools and goals — delivered onsite or virtually." },
  { icon: GraduationCap, title: "New-Hire Induction", text: "Structured onboarding tracks that ramp graduates and lateral hires into productive contributors." },
  { icon: Users, title: "Open House Batches", text: "Scheduled cohort sessions on in-demand technologies for individuals and small teams." },
  { icon: Sparkles, title: "Workforce Development", text: "Campus-to-corporate bridge programs that combine technical depth with workplace readiness." },
];

const whyUs = [
  { icon: Award, title: "Industry-Seasoned Trainers", text: "Practitioners with real delivery experience — not just slide-deck instructors." },
  { icon: Clock, title: "Agile Engagement", text: "From a half-day workshop to a 12-week immersion, scoped to your timelines." },
  { icon: Globe2, title: "Hybrid Delivery", text: "Onsite, virtual instructor-led, or self-paced — designed for distributed teams." },
  { icon: CheckCircle2, title: "Measured Outcomes", text: "Pre/post assessments, lab-based evaluation, and reporting your leaders can act on." },
];

const tracks = [
  "Cloud — AWS, Azure, GCP, Microsoft Entra ID, Hybrid Cloud Management",
  "Networking — CCNA, CCNP, SD-WAN",
  "DevOps & SRE",
  "Cybersecurity Fundamentals",
  "Virtualization — VMware, SCVMM",
  "Python & Modern Web Development",
  "Communication & Leadership",
  "Windows Administration",
  "Linux Administration",
  "SAP Technologies",
  "Modern Desktop Management",
  "Microsoft Intune",
  "Microsoft 365 (M365)",
  "Office 365 (O365)",
  "Scripting & Automation",
  "ITIL & IT Service Management (ITSM)"
];

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-page grid lg:grid-cols-12 gap-10 pt-16 md:pt-24 pb-20 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow">Corporate Training Delivery</p>
            <h1 className="mt-4 font-display text-4xl md:text-6xl leading-[1.05]">
              Sharper teams.
              <br />
              <span className="text-accent italic">Built session by session.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Keystone Learn partners with enterprises to design and deliver
              training programs that turn capability gaps into real, measurable
              skill — in technology, cloud, networking and the human side of work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Plan your program <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn-ghost">Explore our services</Link>
            </div>

            {/* <dl className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              {[
                ["120+", "Programs delivered"],
                ["40+", "Corporate clients"],
                ["4.8/5", "Avg. learner rating"],
              ].map(([k, v]) => (
                <div key={v}>
                  <dt className="font-display text-2xl md:text-3xl text-primary">{k}</dt>
                  <dd className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{v}</dd>
                </div>
              ))}
            </dl> */}
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/15 rounded-2xl rotate-1" aria-hidden />
              <img
                src={heroImg}
                alt="Corporate professionals in a training session around a conference table"
                width={1600}
                height={1100}
                className="relative rounded-xl shadow-2xl object-cover w-full aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-secondary/30 border-y border-border">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow">What we do</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl">
              Programs shaped to how your teams actually work.
            </h2>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ icon: Icon, title, text }) => (
              <article key={title} className="group bg-card rounded-xl p-6 border border-border hover:border-accent/60 transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-xl">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <Link to="/services" className="text-sm font-medium text-accent inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
              See all training tracks <ArrowRight size={10} />
            </Link>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="section">
        <div className="container-page grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Training tracks</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              From foundational concepts to advanced specialisations.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Every track is modular. Pick the modules that match your team's level,
              tooling and timelines — we'll assemble a syllabus that fits.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-3">
              {tracks.map((t) => (
                <li key={t} className="flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-3.5">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span className="text-sm font-medium">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section bg-primary text-primary-foreground">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow text-accent">Why Keystone</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl">
              A training partner, not a vendor.
            </h2>
            <p className="mt-5 text-primary-foreground/75 leading-relaxed">
              We invest the time to understand your team's reality before a single
              session is scheduled. The result is training that lands.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map(({ icon: Icon, title, text }) => (
              <div key={title} className="border-t border-primary-foreground/15 pt-5">
                <Icon size={24} className="text-accent" />
                <h3 className="mt-4 font-display text-xl">{title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/70 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section">
        <div className="container-page max-w-4xl">
          <p className="eyebrow">From a recent program</p>
          <blockquote className="mt-5 font-display text-2xl md:text-4xl leading-snug">
            “The trainer brought real project depth into every session. Our team
            walked away with skills they could apply the very next sprint — and the
            assessment data gave us a clear roadmap for the next cohort.”
          </blockquote>
          <footer className="mt-6 text-sm text-muted-foreground">
            — L&amp;D Lead, Enterprise Cloud Practice
          </footer>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-20">
        <div className="rounded-2xl bg-gradient-to-br from-accent/20 via-secondary to-secondary/50 border border-border p-10 md:p-16 text-center">
          <h2 className="font-display text-3xl md:text-5xl max-w-2xl mx-auto">
            Have a skill gap to close? Let's design the program.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Tell us about your team, timelines and outcomes. We'll come back with
            a delivery plan within two working days.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-primary">Talk to us <ArrowRight size={16} /></Link>
            <Link to="/about" className="btn-ghost">About Keystone</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
