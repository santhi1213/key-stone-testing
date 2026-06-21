import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { S as SiteLayout } from "./SiteLayout-ipoyODAS.js";
import "react";
const texture = "/assets/texture-beige-D2_1JsKo.jpg";
const values = [{
  t: "Practitioner-led",
  d: "Our trainers ship work in the real world — what they teach is what they do."
}, {
  t: "Outcome-first",
  d: "We measure success by the capability your team gains, not slides covered."
}, {
  t: "Quietly rigorous",
  d: "Solid syllabus design, honest assessments, and the patience to repeat what matters."
}];
function AboutPage() {
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxs("section", { className: "container-page pt-16 md:pt-24 pb-16 relative", style: {
      backgroundImage: `url(${texture})`,
      backgroundSize: "cover"
    }, children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "About Keystone" }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-3 font-display text-4xl md:text-6xl max-w-3xl leading-[1.05]", children: [
        "A small team obsessed with making training actually ",
        /* @__PURE__ */ jsx("span", { className: "italic text-accent", children: "stick" }),
        "."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-2xl text-muted-foreground text-lg leading-relaxed", children: "Keystone Learn was founded on a simple belief: corporate training should look less like a presentation and more like apprenticeship. We work with engineering, operations and L&D leaders to design programs that shorten the distance between learning and applying." })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "container-page section pt-0", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-12 gap-10", children: [
      /* @__PURE__ */ jsx("div", { className: "md:col-span-5", children: /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl", children: "Our story" }) }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-7 space-y-4 text-muted-foreground leading-relaxed", children: [
        /* @__PURE__ */ jsx("p", { children: "Keystone began as a quiet bet by a group of senior practitioners who'd spent years on the delivery floor — building networks, shipping cloud workloads, mentoring graduates into engineers. The pattern they kept seeing: real-world skill rarely matched the certificate on the wall." }),
        /* @__PURE__ */ jsx("p", { children: "Today we partner with enterprises to design induction tracks, upskilling cohorts and finishing-school programs that close that gap. Small team, high care, repeatable outcomes." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-secondary/40 border-y border-border", children: /* @__PURE__ */ jsxs("div", { className: "container-page section", children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "What we hold to" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl md:text-5xl max-w-2xl", children: "Principles that shape every engagement." }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid md:grid-cols-3 gap-6", children: values.map((v, i) => /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-xl p-7 border border-border", children: [
        /* @__PURE__ */ jsxs("p", { className: "font-display text-5xl text-accent/80", children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-3 font-display text-xl", children: v.t }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: v.d })
      ] }, v.t)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "container-page section", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-10 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-4xl", children: "Who we work with" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: "We've designed programs for enterprise engineering practices, IT services firms, system integrators and growing startups — from short workshops to multi-month induction immersions." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "btn-primary", children: [
          "Start a conversation ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-3", children: ["Engineering", "L&D", "IT Services", "Startups", "Telecom", "Banking", "Cloud", "Networking", "Data"].map((tag) => /* @__PURE__ */ jsx("div", { className: "aspect-square rounded-lg bg-card border border-border flex items-center justify-center text-xs font-medium text-muted-foreground p-2 text-center", children: tag }, tag)) })
    ] }) })
  ] });
}
export {
  AboutPage as component
};
