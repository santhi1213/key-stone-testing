import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { X, Menu, Mail, Phone, MapPin } from "lucide-react";
const logo = "/assets/TechStoneLogo-9KmWXLC9.png";
const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" }
];
function SiteLayout({ children }) {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur", children: [
      /* @__PURE__ */ jsxs("div", { className: "container-page flex items-center justify-between py-4", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2.5 group", children: [
          /* @__PURE__ */ jsx("img", { src: logo, alt: "Keystone Learn Logo", className: "h-10 w-12 object-contain", suppressHydrationWarning: true }),
          "            ",
          /* @__PURE__ */ jsxs("span", { className: "font-display text-2xl leading-tight", children: [
            "Keystone ",
            /* @__PURE__ */ jsx("span", { className: "text-accent", children: "Learn" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-8", children: [
          NAV.map((n) => /* @__PURE__ */ jsx(
            Link,
            {
              to: n.to,
              activeProps: { className: "text-accent" },
              className: "text-sm font-medium hover:text-accent transition-colors",
              children: n.label
            },
            n.to
          )),
          /* @__PURE__ */ jsx(Link, { to: "/contact", className: "btn-primary py-2 px-4 text-sm", children: "Request a Proposal" })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "md:hidden p-2",
            onClick: () => setOpen((v) => !v),
            "aria-label": "Toggle menu",
            children: open ? /* @__PURE__ */ jsx(X, { size: 22 }) : /* @__PURE__ */ jsx(Menu, { size: 22 })
          }
        )
      ] }),
      open && /* @__PURE__ */ jsx("div", { className: "md:hidden border-t border-border bg-background", children: /* @__PURE__ */ jsx("div", { className: "container-page py-4 flex flex-col gap-3", children: NAV.map((n) => /* @__PURE__ */ jsx(Link, { to: n.to, onClick: () => setOpen(false), className: "py-2 text-sm font-medium", children: n.label }, n.to)) }) })
    ] }),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsxs("footer", { className: "mt-20 border-t border-border bg-secondary/40", children: [
      /* @__PURE__ */ jsxs("div", { className: "container-page py-14 grid gap-10 md:grid-cols-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsx("img", { src: logo, alt: "Keystone Learn Logo", className: "h-10 w-12 object-contain", suppressHydrationWarning: true }),
            "              ",
            /* @__PURE__ */ jsx("span", { className: "font-display text-lg", children: "Keystone Learn" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-md text-sm text-muted-foreground leading-relaxed", children: "A corporate learning partner helping organisations build future-ready teams through expert-led technology and professional skills training." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold mb-3", children: "Explore" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm text-muted-foreground", children: NAV.map((n) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: n.to, className: "hover:text-foreground", children: n.label }) }, n.to)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold mb-3", children: "Reach Us" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(Mail, { size: 14, className: "mt-1" }),
              " sales@keystonelearn.in"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(Phone, { size: 14, className: "mt-1" }),
              " +91 96863 53294"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(MapPin, { size: 14, className: "mt-1" }),
              " Central Bengaluru, India"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "border-t border-border/70", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-5 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Keystone Learn. All rights reserved."
        ] }),
        /* @__PURE__ */ jsx("p", { children: "Crafted for learners and the teams that grow them." })
      ] }) })
    ] })
  ] });
}
export {
  SiteLayout as S
};
