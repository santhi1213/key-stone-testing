import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Building2, GraduationCap, Users, Sparkles, Award, Clock, Globe2, CheckCircle2 } from "lucide-react";
import { S as SiteLayout } from "./SiteLayout-ipoyODAS.js";
import "react";
const heroImg = "/assets/hero-training-BoCmldTS.jpg";
const services = [{
  icon: Building2,
  title: "Corporate Training",
  text: "Bespoke programs designed around your team's roles, tools and goals — delivered onsite or virtually."
}, {
  icon: GraduationCap,
  title: "New-Hire Induction",
  text: "Structured onboarding tracks that ramp graduates and lateral hires into productive contributors."
}, {
  icon: Users,
  title: "Open House Batches",
  text: "Scheduled cohort sessions on in-demand technologies for individuals and small teams."
}, {
  icon: Sparkles,
  title: "Workforce Development",
  text: "Campus-to-corporate bridge programs that combine technical depth with workplace readiness."
}];
const whyUs = [{
  icon: Award,
  title: "Industry-Seasoned Trainers",
  text: "Practitioners with real delivery experience — not just slide-deck instructors."
}, {
  icon: Clock,
  title: "Agile Engagement",
  text: "From a half-day workshop to a 12-week immersion, scoped to your timelines."
}, {
  icon: Globe2,
  title: "Hybrid Delivery",
  text: "Onsite, virtual instructor-led, or self-paced — designed for distributed teams."
}, {
  icon: CheckCircle2,
  title: "Measured Outcomes",
  text: "Pre/post assessments, lab-based evaluation, and reporting your leaders can act on."
}];
const tracks = ["Cloud — AWS, Azure, GCP, Microsoft Entra ID, Hybrid Cloud Management", "Networking — CCNA, CCNP, SD-WAN", "DevOps & SRE", "Cybersecurity Fundamentals", "Virtualization — VMware, SCVMM", "Python & Modern Web Development", "Communication & Leadership", "Windows Administration", "Linux Administration", "SAP Technologies", "Modern Desktop Management", "Microsoft Intune", "Microsoft 365 (M365)", "Office 365 (O365)", "Scripting & Automation", "ITIL & IT Service Management (ITSM)"];
function HomePage() {
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx("section", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "container-page grid lg:grid-cols-12 gap-10 pt-16 md:pt-24 pb-20 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Corporate Training Delivery" }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-4 font-display text-4xl md:text-6xl leading-[1.05]", children: [
          "Sharper teams.",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-accent italic", children: "Built session by session." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed", children: "Keystone Learn partners with enterprises to design and deliver training programs that turn capability gaps into real, measurable skill — in technology, cloud, networking and the human side of work." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "btn-primary", children: [
            "Plan your program ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/services", className: "btn-ghost", children: "Explore our services" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-accent/15 rounded-2xl rotate-1", "aria-hidden": true }),
        /* @__PURE__ */ jsx("img", { src: heroImg, alt: "Corporate professionals in a training session around a conference table", width: 1600, height: 1100, className: "relative rounded-xl shadow-2xl object-cover w-full aspect-[4/3]" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section bg-secondary/30 border-y border-border", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "What we do" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl md:text-5xl", children: "Programs shaped to how your teams actually work." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: services.map(({
        icon: Icon,
        title,
        text
      }) => /* @__PURE__ */ jsxs("article", { className: "group bg-card rounded-xl p-6 border border-border hover:border-accent/60 transition-all hover:-translate-y-1 hover:shadow-lg", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors", children: /* @__PURE__ */ jsx(Icon, { size: 22 }) }),
        /* @__PURE__ */ jsx("h3", { className: "font-display text-xl", children: title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: text })
      ] }, title)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxs(Link, { to: "/services", className: "text-sm font-medium text-accent inline-flex items-center gap-1.5 hover:gap-2.5 transition-all", children: [
        "See all training tracks ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 10 })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", children: /* @__PURE__ */ jsxs("div", { className: "container-page grid lg:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Training tracks" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl md:text-4xl", children: "From foundational concepts to advanced specialisations." }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: "Every track is modular. Pick the modules that match your team's level, tooling and timelines — we'll assemble a syllabus that fits." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsx("ul", { className: "grid sm:grid-cols-2 gap-3", children: tracks.map((t) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-3.5", children: [
        /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-accent" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: t })
      ] }, t)) }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow text-accent", children: "Why Keystone" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl md:text-5xl", children: "A training partner, not a vendor." }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-primary-foreground/75 leading-relaxed", children: "We invest the time to understand your team's reality before a single session is scheduled. The result is training that lands." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: whyUs.map(({
        icon: Icon,
        title,
        text
      }) => /* @__PURE__ */ jsxs("div", { className: "border-t border-primary-foreground/15 pt-5", children: [
        /* @__PURE__ */ jsx(Icon, { size: 24, className: "text-accent" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 font-display text-xl", children: title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-primary-foreground/70 leading-relaxed", children: text })
      ] }, title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "section", children: /* @__PURE__ */ jsxs("div", { className: "container-page max-w-4xl", children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "From a recent program" }),
      /* @__PURE__ */ jsx("blockquote", { className: "mt-5 font-display text-2xl md:text-4xl leading-snug", children: "“The trainer brought real project depth into every session. Our team walked away with skills they could apply the very next sprint — and the assessment data gave us a clear roadmap for the next cohort.”" }),
      /* @__PURE__ */ jsx("footer", { className: "mt-6 text-sm text-muted-foreground", children: "— L&D Lead, Enterprise Cloud Practice" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "container-page pb-20", children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-gradient-to-br from-accent/20 via-secondary to-secondary/50 border border-border p-10 md:p-16 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-5xl max-w-2xl mx-auto", children: "Have a skill gap to close? Let's design the program." }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground max-w-xl mx-auto", children: "Tell us about your team, timelines and outcomes. We'll come back with a delivery plan within two working days." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-7 flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "btn-primary", children: [
          "Talk to us ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/about", className: "btn-ghost", children: "About Keystone" })
      ] })
    ] }) })
  ] });
}
export {
  HomePage as component
};
