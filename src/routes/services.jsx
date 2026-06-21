import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, GraduationCap, Users, Sparkles, ArrowRight, Check } from "lucide-react";
import SiteLayout from "../components/SiteLayout.jsx";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Keystone Learn" },
      { name: "description", content: "Corporate training, new-hire induction, open-house batches and finishing school programs by Keystone Learn." },
      { property: "og:title", content: "Services —Keystone Learn" },
      { property: "og:description", content: "Corporate training, induction, open house and finishing school programs." },
    ],
  }),
  component: ServicesPage,
});

const offerings = [
  {
    icon: Building2,
    title: "Corporate Training",
    summary: "Custom programs designed around your team's roles, tools and outcomes.",
    bullets: [
      "Needs analysis with your L&D and engineering leads",
      "Custom syllabus, labs and assessments",
      "Onsite, virtual or hybrid delivery",
      "Post-program skill reports",
    ],
  },
  {
    icon: GraduationCap,
    title: "New-Hire Induction",
    summary: "Structured onboarding tracks that ramp fresh and lateral hires into productive contributors.",
    bullets: [
      "Multi-week immersive bootcamps",
      "Role-aligned technical foundations",
      "Workplace and process readiness",
      "Capstone projects and certification",
    ],
  },
  {
    icon: Users,
    title: "Open House Batches",
    summary: "Scheduled public cohorts on in-demand technologies for individuals and small teams.",
    bullets: [
      "Monthly calendar of live sessions",
      "Small batch sizes for hands-on time",
      "Lab access and recorded sessions",
      "Group discounts for teams",
    ],
  },
  {
    icon: Sparkles,
    title: "Workforce Development",
    summary: "Campus-to-corporate bridge programs combining technical depth with workplace readiness.",
    bullets: [
      "Career-aligned learning pathways",
      "Mentor-led labs and projects",
      "Communication and interview prep",
      "Placement support partnerships",
    ],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="container-page pt-16 md:pt-24 pb-10">
        <p className="eyebrow">Services</p>
        <h1 className="mt-3 font-display text-4xl md:text-6xl max-w-3xl leading-[1.05]">
          Four ways we help teams learn faster.
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
          Every engagement starts with a conversation about outcomes — not catalogues.
          Below is the shape our work usually takes.
        </p>
      </section>

      <section className="container-page pb-16 space-y-6">
        {offerings.map(({ icon: Icon, title, summary, bullets }, i) => (
          <article
            key={title}
            className="grid md:grid-cols-12 gap-6 bg-card border border-border rounded-2xl p-8 md:p-10 hover:shadow-lg transition-shadow"
          >
            <div className="md:col-span-4 flex md:flex-col gap-4 items-start">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Icon size={26} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">0{i + 1}</p>
                <h2 className="font-display text-2xl md:text-3xl mt-1">{title}</h2>
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="text-base text-muted-foreground leading-relaxed">{summary}</p>
              <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="text-accent mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="container-page pb-20">
        <div className="rounded-2xl bg-primary text-primary-foreground p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Ready to scope a program?</h2>
            <p className="mt-2 text-primary-foreground/75 max-w-xl">
              Share your goals and team profile — we'll come back with a tailored proposal.
            </p>
          </div>
          <Link to="/contact" className="btn-primary bg-accent text-accent-foreground hover:bg-accent/90">
            Get a proposal <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
