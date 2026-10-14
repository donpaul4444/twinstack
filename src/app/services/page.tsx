import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services, processSteps } from "@/data/services";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Services — TwinStack Solutions",
  description:
    "End-to-end web development, SaaS MVP engineering, UI/UX design systems, and web performance optimization.",
};

const faqs = [
  {
    q: "How fast can we start a project?",
    a: "Usually within 1 to 2 weeks after initial discovery, depending on current pipeline capacity and scope definition.",
  },
  {
    q: "What is your typical pricing model?",
    a: "We work primarily on fixed-scope project milestones for well-defined deliverables, or on dedicated weekly sprint retainers for ongoing product evolution.",
  },
  {
    q: "Do you offer post-launch support and maintenance?",
    a: "Yes! Every project includes a 30-day post-launch warranty period for bug fixes and adjustments. We also offer monthly retainer plans for continuous feature development.",
  },
  {
    q: "Who owns the intellectual property and code?",
    a: "You do. 100% of the code, designs, and assets created during our engagement belong entirely to you upon completion.",
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      {/* Page Header */}
      <div className="max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent">
          Client Services
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
          Engineering capabilities built around your goals
        </h1>
        <p className="mt-4 text-lg text-muted leading-relaxed">
          We partner with ambitious startups and established companies to design, develop, and launch high-impact digital products.
        </p>
      </div>

      {/* Services Grid */}
      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col justify-between rounded-3xl border border-border p-8 bg-white transition-shadow hover:shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  Service
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-muted">
                  ⏱ {service.timeframe}
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-bold text-foreground">
                {service.title}
              </h2>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                {service.fullDescription}
              </p>

              {/* Deliverables */}
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                  What&apos;s Included
                </p>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Technologies
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-gray-100 px-2 py-0.5 text-xs text-muted font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-border">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-xl bg-accent px-4 py-2.5 text-xs font-semibold text-white transition-opacity hover:opacity-90"
              >
                Discuss This Service →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Process Section */}
      <div className="mt-24 border-t border-border pt-16">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">
            Workflow
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-foreground">
            How we bring ideas to life
          </h2>
          <p className="mt-3 text-sm text-muted">
            A transparent, collaborative roadmap designed to deliver outcomes fast without unexpected surprises.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="rounded-2xl border border-border p-6 bg-white relative overflow-hidden"
            >
              <span className="text-3xl font-extrabold text-accent/20">
                {step.step}
              </span>
              <h3 className="mt-2 text-base font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-xs text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="mt-24 border-t border-border pt-16">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">
            FAQ
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl border border-border p-6 bg-white">
              <h3 className="font-bold text-foreground text-sm">{faq.q}</h3>
              <p className="mt-2 text-xs text-muted leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 rounded-3xl bg-accent p-8 sm:p-12 text-center text-white">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm p-2 mb-4">
          <Image
            src={site.logoMark}
            alt={site.name}
            width={40}
            height={40}
            className="h-10 w-10 object-contain rounded-lg"
          />
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold">
          Ready to kick off your project?
        </h3>
        <p className="mt-3 max-w-lg mx-auto text-sm text-white/80">
          Book an introductory consultation or send us your scope for a fast estimate.
        </p>
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-block rounded-full bg-white px-8 py-3 text-xs font-bold text-accent transition-transform hover:scale-105"
          >
            Start a Conversation
          </Link>
        </div>
      </div>
    </div>
  );
}

