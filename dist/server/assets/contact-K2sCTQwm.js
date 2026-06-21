import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { S as SiteLayout } from "./SiteLayout-ipoyODAS.js";
import emailjs from "@emailjs/browser";
import "@tanstack/react-router";
function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.target;
    const templateParams = {
      from_name: form.name.value,
      from_email: form.email.value,
      company: form.company.value || "Not provided",
      phone: form.phone.value || "Not provided",
      topic: form.topic.value || "General enquiry",
      message: form.message.value,
      to_email: "lmsadmin@keystonelearn.in"
      // For testing - change to sales@keystonelearn.in later
    };
    try {
      const result = await emailjs.send("service_8wnpyqm", "template_xh4386p", templateParams, "2csLEDZbt91rOG7JS");
      if (result.status === 200) {
        setSent(true);
        form.reset();
      } else {
        setError("Failed to send enquiry. Please try again.");
      }
    } catch (error2) {
      console.error("EmailJS error:", error2);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  }
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxs("section", { className: "container-page pt-16 md:pt-24 pb-12", children: [
      /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Contact" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-4xl md:text-6xl max-w-3xl leading-[1.05]", children: "Tell us what your team needs to learn next." }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-2xl text-muted-foreground leading-relaxed", children: "Drop a quick note and we'll respond within two working days with a tailored program outline." })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "container-page pb-20", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-xl p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl", children: "Reach us directly" }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-4 text-sm", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(Mail, { size: 18, className: "text-accent mt-0.5" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Email" }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "sales@keystonelearn.in" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(Phone, { size: 18, className: "text-accent mt-0.5" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Phone" }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "+91 96863 53294" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(MapPin, { size: 18, className: "text-accent mt-0.5" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Office" }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Central Bengaluru, India" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-primary text-primary-foreground rounded-xl p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl", children: "Working hours" }),
          /* @__PURE__ */ jsxs("p", { className: "mt-2 text-sm text-primary-foreground/75", children: [
            "Monday – Saturday",
            /* @__PURE__ */ jsx("br", {}),
            "09:00 – 18:00 IST"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-7", children: sent ? /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-2xl p-7 md:p-9 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "text-6xl mb-4", children: "✅" }),
        /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl mb-2", children: "Thank You!" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Your enquiry has been sent successfully. We'll be in touch within two working days." }),
        /* @__PURE__ */ jsx("button", { onClick: () => setSent(false), className: "btn-primary mt-6", children: "Send another enquiry" })
      ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "bg-card border border-border rounded-2xl p-7 md:p-9 space-y-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsx(Field, { label: "Your name", name: "name", required: true }),
          /* @__PURE__ */ jsx(Field, { label: "Company", name: "company" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsx(Field, { label: "Work email", name: "email", type: "email", required: true }),
          /* @__PURE__ */ jsx(Field, { label: "Phone", name: "phone" })
        ] }),
        /* @__PURE__ */ jsx(Field, { label: "Training area of interest", name: "topic", placeholder: "e.g. AWS for backend engineers" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium mb-1.5", children: "Tell us about your team" }),
          /* @__PURE__ */ jsx("textarea", { name: "message", rows: 5, className: "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent", placeholder: "Team size, current skill level, timelines…", required: true })
        ] }),
        error && /* @__PURE__ */ jsx("div", { className: "bg-red-50 border border-red-200 text-red-600 rounded-lg p-3 text-sm", children: error }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 pt-2 flex-wrap", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "By submitting you agree to be contacted about your enquiry." }),
          /* @__PURE__ */ jsxs("button", { type: "submit", className: "btn-primary flex items-center gap-2", disabled: loading, children: [
            loading ? "Sending..." : "Send enquiry",
            !loading && /* @__PURE__ */ jsx(Send, { size: 15 })
          ] })
        ] })
      ] }) })
    ] }) })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required,
  placeholder
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium mb-1.5", children: label }),
    /* @__PURE__ */ jsx("input", { type, name, required, placeholder, className: "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent" })
  ] });
}
export {
  ContactPage as component
};
