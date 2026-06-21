import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import SiteLayout from "../components/SiteLayout.jsx";
import texture from "../assets/texture-beige.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Keystone Learn" },
      { name: "description", content: "Keystone Learn is a corporate training company helping enterprises build future-ready teams." },
      { property: "og:title", content: "About Keystone Learn" },
      { property: "og:description", content: "A corporate training partner for technology and professional skills." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { t: "Practitioner-led", d: "Our trainers ship work in the real world — what they teach is what they do." },
  { t: "Outcome-first", d: "We measure success by the capability your team gains, not slides covered." },
  { t: "Quietly rigorous", d: "Solid syllabus design, honest assessments, and the patience to repeat what matters." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section
        className="container-page pt-16 md:pt-24 pb-16 relative"
        style={{ backgroundImage: `url(${texture})`, backgroundSize: "cover" }}
      >
        <p className="eyebrow">About Keystone</p>
        <h1 className="mt-3 font-display text-4xl md:text-6xl max-w-3xl leading-[1.05]">
          A small team obsessed with making training actually <span className="italic text-accent">stick</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground text-lg leading-relaxed">
          Keystone Learn was founded on a simple belief: corporate training
          should look less like a presentation and more like apprenticeship. We work
          with engineering, operations and L&amp;D leaders to design programs that
          shorten the distance between learning and applying.
        </p>
      </section>

      <section className="container-page section pt-0">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <h2 className="font-display text-3xl md:text-4xl">Our story</h2>
          </div>
          <div className="md:col-span-7 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Keystone began as a quiet bet by a group of senior practitioners who'd
              spent years on the delivery floor — building networks, shipping cloud
              workloads, mentoring graduates into engineers. The pattern they kept
              seeing: real-world skill rarely matched the certificate on the wall.
            </p>
            <p>
              Today we partner with enterprises to design induction tracks, upskilling
              cohorts and finishing-school programs that close that gap. Small team,
              high care, repeatable outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border">
        <div className="container-page section">
          <p className="eyebrow">What we hold to</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl max-w-2xl">Principles that shape every engagement.</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={v.t} className="bg-card rounded-xl p-7 border border-border">
                <p className="font-display text-5xl text-accent/80">0{i + 1}</p>
                <h3 className="mt-3 font-display text-xl">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page section">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Who we work with</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We've designed programs for enterprise engineering practices, IT services
              firms, system integrators and growing startups — from short workshops
              to multi-month induction immersions.
            </p>
            <div className="mt-6">
              <Link to="/contact" className="btn-primary">Start a conversation <ArrowRight size={16} /></Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {["Engineering", "L&D", "IT Services", "Startups", "Telecom", "Banking", "Cloud", "Networking", "Data"].map((tag) => (
              <div key={tag} className="aspect-square rounded-lg bg-card border border-border flex items-center justify-center text-xs font-medium text-muted-foreground p-2 text-center">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
