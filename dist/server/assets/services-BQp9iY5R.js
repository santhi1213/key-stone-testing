import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Building2, GraduationCap, Users, Sparkles, Check, ArrowRight } from "lucide-react";
import { S as SiteLayout } from "./SiteLayout-ipoyODAS.js";
import "react";
const offerings = [{
  icon: Building2,
  title: "Corporate Training",
  summary: "Custom programs designed around your team's roles, tools and outcomes.",
  bullets: ["Needs analysis with your L&D and engineering leads", "Custom syllabus, labs and assessments", "Onsite, virtual or hybrid delivery", "Post-program skill reports"]
}, {
  icon: GraduationCap,
  title: "New-Hire Induction",
  summary: "Structured onboarding tracks that ramp fresh and lateral hires into productive contributors.",
  bullets: ["Multi-week immersive bootcamps", "Role-aligned technical foundations", "Workplace and process readiness", "Capstone projects and certification"]
}, {
  icon: Users,
  title: "Open House Batches",
  summary: "Scheduled public cohorts on in-demand technologies for individuals and small teams.",
  bullets: ["Monthly calendar of live sessions", "Small batch sizes for hands-on time", "Lab access and recorded sessions", "Group discounts for teams"]
}, {
  icon: Sparkles,
  title: "Workforce Development",
  summary: "Campus-to-corporate bridge programs combining technical depth with workplace readiness.",
  bullets: ["Career-aligned learning pathways", "Mentor-led labs and projects", "Communication and interview prep", "Placement support partnerships"]
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxs("section", { className: "container-page pt-16 md:pt-24 pb-10", children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Services" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-4xl md:text-6xl max-w-3xl leading-[1.05]", children: "Four ways we help teams learn faster." }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-2xl text-muted-foreground leading-relaxed", children: "Every engagement starts with a conversation about outcomes — not catalogues. Below is the shape our work usually takes." })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "container-page pb-16 space-y-6", children: offerings.map(({
      icon: Icon,
      title,
      summary,
      bullets
    }, i) => /* @__PURE__ */ jsxs("article", { className: "grid md:grid-cols-12 gap-6 bg-card border border-border rounded-2xl p-8 md:p-10 hover:shadow-lg transition-shadow", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-4 flex md:flex-col gap-4 items-start", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/15 text-accent", children: /* @__PURE__ */ jsx(Icon, { size: 26 }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: [
            "0",
            i + 1
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl md:text-3xl mt-1", children: title })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-8", children: [
        /* @__PURE__ */ jsx("p", { className: "text-base text-muted-foreground leading-relaxed", children: summary }),
        /* @__PURE__ */ jsx("ul", { className: "mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-2.5", children: bullets.map((b) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
          /* @__PURE__ */ jsx(Check, { size: 16, className: "text-accent mt-0.5 shrink-0" }),
          /* @__PURE__ */ jsx("span", { children: b })
        ] }, b)) })
      ] })
    ] }, title)) }),
    /* @__PURE__ */ jsx("section", { className: "container-page pb-20", children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-primary text-primary-foreground p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl", children: "Ready to scope a program?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-primary-foreground/75 max-w-xl", children: "Share your goals and team profile — we'll come back with a tailored proposal." })
      ] }),
      /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "btn-primary bg-accent text-accent-foreground hover:bg-accent/90", children: [
        "Get a proposal ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
      ] })
    ] }) })
  ] });
}
export {
  ServicesPage as component
};
