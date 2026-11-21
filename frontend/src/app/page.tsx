import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import { products } from "@/data/products";
import { services } from "@/data/services";

export default function Home() {
  const featuredProducts = products.slice(0, 3);
  const featuredServices = services.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative mx-auto max-w-5xl px-6 py-14 sm:py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-14">
          {/* Left Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-3.5 py-1 text-xs font-semibold text-accent shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span>Web Architecture & Digital Solutions</span>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground leading-[1.12]">
              We build modern, <span className="text-accent">fast web</span> experiences.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
              {site.description}
            </p>

            {/* Quick credibility bullet points */}
            <div className="mt-8 pt-6 border-t border-border/70 flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-2 text-xs font-medium text-muted">
              <span className="flex items-center gap-1.5">
                <span className="text-accent font-bold">✓</span> Full-Stack Web Apps
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-accent font-bold">✓</span> Next.js & TypeScript
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-accent font-bold">✓</span> Fast & Scalable
              </span>
            </div>
          </div>

          {/* Right Tech Visual */}
          <div className="flex-1 w-full max-w-md lg:max-w-none flex justify-center">
            <div className="relative w-full rounded-3xl border border-border bg-gradient-to-b from-white to-gray-50/50 p-2 sm:p-3 shadow-xl shadow-blue-500/5 transition-all duration-300 hover:shadow-2xl">
              <Image
                src="/hero-tech.png"
                alt="Modern Tech Architecture & Web Solutions"
                width={640}
                height={480}
                className="w-full h-auto rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Stats / Badges */}
      <section className="border-y border-border bg-gray-50/50 py-12">
        <div className="mx-auto max-w-5xl px-6 grid grid-cols-2 gap-6 sm:grid-cols-4 text-center">
          <div>
            <p className="text-3xl font-extrabold text-foreground">100%</p>
            <p className="mt-1 text-xs font-medium text-muted uppercase tracking-wider">Independent & Focused</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-foreground">&lt; 1s</p>
            <p className="mt-1 text-xs font-medium text-muted uppercase tracking-wider">Target Page Load Time</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-foreground">TypeScript</p>
            <p className="mt-1 text-xs font-medium text-muted uppercase tracking-wider">Strict Type-Safe Stack</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-foreground">Modern</p>
            <p className="mt-1 text-xs font-medium text-muted uppercase tracking-wider">React 19 & Tailwind v4</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-5xl px-6 py-20 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-accent">
              Products
            </h2>
            <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Built for speed, reliability & developer joy
            </p>
          </div>
          <Link
            href="/products"
            className="text-sm font-semibold text-accent hover:underline shrink-0"
          >
            Browse all products →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featuredProducts.map((product) => (
            <article
              key={product.id}
              className="flex flex-col justify-between rounded-2xl border border-border p-6 sm:p-8 transition-all hover:shadow-md hover:border-gray-300 bg-white"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {product.category}
                  </span>
                  <span className="rounded-full px-2.5 py-0.5 text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {product.status}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-foreground">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {product.tagline}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-gray-100 px-2 py-0.5 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-700">{product.pricing}</span>
                <div className="flex gap-4">
                  {product.demoUrl && (
                    <a
                      href={product.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-accent hover:underline"
                    >
                      Visit Live App ↗
                    </a>
                  )}
                  <Link
                    href="/products"
                    className="text-xs font-semibold text-muted hover:text-foreground hover:underline"
                  >
                    Details →
                  </Link>
                </div>
              </div>
            </article>
          ))}

          {/* Upcoming Products Pipeline Teaser */}
          <div className="flex flex-col justify-between rounded-2xl border border-dashed border-border p-6 sm:p-8 bg-gray-50/50">
            <div>
              <span className="rounded-full bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-xs font-semibold text-accent">
                Coming Soon
              </span>
              <h3 className="mt-4 text-xl font-bold text-foreground">
                More Software Products in Development
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                Twinstack Solutions is actively building our next wave of web utilities, developer tools, and productivity applications. Stay tuned for our upcoming releases.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-border/60">
              <Link
                href="/contact"
                className="text-xs font-semibold text-accent hover:underline"
              >
                Inquire or suggest a project →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="border-t border-border bg-gray-50/40 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-accent">
                Services
              </h2>
              <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                End-to-end engineering tailored to your vision
              </p>
            </div>
            <Link
              href="/services"
              className="text-sm font-semibold text-accent hover:underline shrink-0"
            >
              Explore all services →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="rounded-2xl border border-border bg-white p-6 transition-all hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {service.shortDescription}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-gray-100 px-2 py-0.5 text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between text-xs text-muted">
                  <span>Estimated timeline: {service.timeframe}</span>
                  <Link
                    href="/services"
                    className="font-semibold text-accent hover:underline"
                  >
                    Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Global Call to Action */}
      <section className="border-t border-border bg-accent text-white py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Have a project or product idea in mind?
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-base text-white/80">
            Let&apos;s build something great together. We are currently accepting new client projects and inquiries.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-accent transition-transform hover:scale-105 shadow-sm"
            >
              Get in Touch with Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
