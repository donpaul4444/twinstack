"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "services",
    budget: "$5k - $15k",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate instant client confirmation
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-border bg-emerald-50/50 p-8 sm:p-10 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-xl font-bold">
          ✓
        </div>
        <h3 className="mt-4 text-xl font-bold text-foreground">
          Message Received!
        </h3>
        <p className="mt-2 text-sm text-muted max-w-md mx-auto">
          Thanks for reaching out, <span className="font-semibold text-foreground">{formData.name}</span>. We have received your note and will review your requirements and respond to <span className="font-semibold text-foreground">{formData.email}</span> within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              interest: "services",
              budget: "$5k - $15k",
              message: "",
            });
          }}
          className="mt-6 rounded-full bg-accent px-6 py-2.5 text-xs font-semibold text-white transition-opacity hover:opacity-90"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-white p-8 sm:p-10 shadow-sm"
    >
      <h3 className="text-xl font-bold text-foreground">Send us a message</h3>
      <p className="mt-1 text-xs text-muted">
        Fill out the details below and we will get back to you shortly.
      </p>

      <div className="mt-6 space-y-4">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
          >
            Your Name *
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="Jane Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-xl border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-gray-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
          >
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="jane@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full rounded-xl border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-gray-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>

        {/* Interest Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="interest"
              className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
            >
              Interested In
            </label>
            <select
              id="interest"
              value={formData.interest}
              onChange={(e) =>
                setFormData({ ...formData, interest: e.target.value })
              }
              className="w-full rounded-xl border border-border px-4 py-2.5 text-sm text-foreground bg-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            >
              <option value="services">Custom Client Services</option>
              <option value="products">TwinStack Products</option>
              <option value="mvp">SaaS MVP Engineering</option>
              <option value="consultation">Technical Consultation</option>
              <option value="other">Other Inquiry</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="budget"
              className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
            >
              Estimated Budget
            </label>
            <select
              id="budget"
              value={formData.budget}
              onChange={(e) =>
                setFormData({ ...formData, budget: e.target.value })
              }
              className="w-full rounded-xl border border-border px-4 py-2.5 text-sm text-foreground bg-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            >
              <option value="<$5k">&lt; $5k</option>
              <option value="$5k - $15k">$5k - $15k</option>
              <option value="$15k - $30k">$15k - $30k</option>
              <option value="$30k+">$30k+</option>
              <option value="undecided">Undecided / Inquiry</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1.5"
          >
            Project Details & Questions *
          </label>
          <textarea
            id="message"
            required
            rows={4}
            placeholder="Tell us about your project goals, timelines, or questions..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full rounded-xl border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-gray-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent resize-y"
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 w-full rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {submitting ? "Sending..." : "Submit Inquiry →"}
      </button>
    </form>
  );
}

