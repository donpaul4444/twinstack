import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us — TwinStack Solutions",
  description:
    "Get in touch with TwinStack Solutions. Discuss a project, request a quote, or ask a question.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      {/* Header */}
      <div className="max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent">
          Get in Touch
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
          Let&apos;s build something exceptional together
        </h1>
        <p className="mt-4 text-lg text-muted leading-relaxed">
          Whether you have a concrete project ready to launch, need advice on architecture, or want to explore our digital products, we are here to help.
        </p>
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-12 items-start">
        {/* Left Column: Direct info & context */}
        <div className="lg:col-span-5 space-y-8">
          {/* Brand Card with Stacked Logo */}
          <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <Image
                src={site.logoStacked}
                alt={site.name}
                width={160}
                height={80}
                className="h-16 w-auto object-contain"
              />
              <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                ● Available for Projects
              </span>
            </div>
            <p className="mt-4 text-xs text-muted leading-relaxed">
              Based remotely, working with partners and clients globally across all timezones.
            </p>
          </div>

          {/* Email card */}
          <div className="rounded-3xl border border-border bg-white p-8">
            <h2 className="text-base font-bold text-foreground">Direct Email</h2>
            <p className="mt-1 text-xs text-muted">
              Prefer writing an email directly? Reach our inbox anytime.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block text-lg font-bold text-accent hover:underline"
            >
              {site.email}
            </a>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
              <span>Typically replies within 24 business hours</span>
            </div>
          </div>

          {/* Direct Collaboration info */}
          <div className="rounded-3xl border border-border bg-white p-8">
            <h2 className="text-base font-bold text-foreground">Direct Collaboration</h2>
            <p className="mt-2 text-xs text-muted leading-relaxed">
              When you partner with Twinstack Solutions, you communicate directly with the engineers building your software. No middlemen, no account managers, and no bureaucratic delays.
            </p>
          </div>

          {/* Social Profiles */}
          <div className="rounded-3xl border border-border bg-gray-50/50 p-8">
            <h2 className="text-base font-bold text-foreground">Online Presence</h2>
            <p className="mt-1 text-xs text-muted">
              Follow our latest releases, updates, and open-source contributions.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold text-accent">
              {site.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {social.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
