import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import SiteLayout from "../components/SiteLayout";
import emailjs from '@emailjs/browser';

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Keystone Learn" },
      { name: "description", content: "Get in touch with Keystone Learn to plan a corporate training program for your team." },
      { property: "og:title", content: "Contact Keystone Learn" },
      { property: "og:description", content: "Plan a corporate training program for your team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.target;
    
    // Collect form data
    const templateParams = {
      from_name: form.name.value,
      from_email: form.email.value,
      company: form.company.value || "Not provided",
      phone: form.phone.value || "Not provided",
      topic: form.topic.value || "General enquiry",
      message: form.message.value,
      to_email: "lmsadmin@keystonelearn.in", // For testing - change to sales@keystonelearn.in later
    };

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      if (result.status === 200) {
        setSent(true);
        form.reset();
      } else {
        setError("Failed to send enquiry. Please try again.");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <SiteLayout>
      <section className="container-page pt-16 md:pt-24 pb-12">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-3 font-display text-4xl md:text-6xl max-w-3xl leading-[1.05]">
          Tell us what your team needs to learn next.
        </h1>
        <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
          Drop a quick note and we'll respond within two working days with a
          tailored program outline.
        </p>
      </section>

      <section className="container-page pb-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-display text-xl">Reach us directly</h3>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-accent mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">sales@keystonelearn.in</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-accent mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+91 96863 53294</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-accent mt-0.5" />
                  <div>
                    <p className="font-medium">Office</p>
                    <p className="text-muted-foreground">Central Bengaluru, India</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-primary text-primary-foreground rounded-xl p-6">
              <h3 className="font-display text-xl">Working hours</h3>
              <p className="mt-2 text-sm text-primary-foreground/75">
                Monday – Saturday<br />09:00 – 18:00 IST
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            {sent ? (
              <div className="bg-card border border-border rounded-2xl p-7 md:p-9 text-center">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="font-display text-2xl mb-2">Thank You!</h3>
                <p className="text-muted-foreground">
                  Your enquiry has been sent successfully. We'll be in touch within two working days.
                </p>
                <button 
                  onClick={() => setSent(false)} 
                  className="btn-primary mt-6"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-7 md:p-9 space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Your name" name="name" required />
                  <Field label="Company" name="company" />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Work email" name="email" type="email" required />
                  <Field label="Phone" name="phone" />
                </div>
                <Field label="Training area of interest" name="topic" placeholder="e.g. AWS for backend engineers" />
                <div>
                  <label className="block text-sm font-medium mb-1.5">Tell us about your team</label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                    placeholder="Team size, current skill level, timelines…"
                    required
                  />
                </div>
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-600 rounded-lg p-3 text-sm">
                    {error}
                  </div>
                )}
                <div className="flex items-center justify-between gap-4 pt-2 flex-wrap">
                  <p className="text-xs text-muted-foreground">
                    By submitting you agree to be contacted about your enquiry.
                  </p>
                  <button 
                    type="submit" 
                    className="btn-primary flex items-center gap-2"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send enquiry"} 
                    {!loading && <Send size={15} />}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
      />
    </div>
  );
}