import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Products — TwinStack Solutions",
  description:
    "Explore our suite of developer tools, UI systems, analytics solutions, and productivity software.",
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      {/* Page Header */}
      <div className="max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent">
          Digital Products
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl text-foreground">
          Software crafted with precision & speed
        </h1>
        <p className="mt-4 text-lg text-muted leading-relaxed">
          From developer libraries to modern SaaS utilities, our products are engineered to solve real-world engineering bottlenecks without bloat.
        </p>
      </div>

      {/* Product List Grid */}
      <div className="mt-14 space-y-10">
        {products.map((product) => (
          <article
            key={product.id}
            className="flex flex-col lg:flex-row gap-8 rounded-3xl border border-border p-8 transition-shadow hover:shadow-lg bg-white"
          >
            {/* Left info column */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-muted">
                  {product.category}
                </span>
                <span
                  className={`rounded-full px-3 py-0.5 text-xs font-semibold ${
                    product.status === "Available"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : product.status === "Beta"
                      ? "bg-amber-50 text-amber-700 border border-amber-200"
                      : "bg-blue-50 text-blue-700 border border-blue-200"
                  }`}
                >
                  {product.status}
                </span>
                {product.pricing && (
                  <span className="text-xs font-medium text-muted bg-gray-100 rounded-full px-2.5 py-0.5">
                    {product.pricing}
                  </span>
                )}
              </div>

              <h2 className="mt-4 text-2xl font-bold text-foreground">
                {product.name}
              </h2>
              <p className="mt-1 text-base font-medium text-accent">
                {product.tagline}
              </p>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                {product.description}
              </p>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-gray-100 px-2.5 py-1 text-xs text-muted font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right features & actions column */}
            <div className="lg:w-80 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-border pt-6 lg:pt-0 lg:pl-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Key Capabilities
                </p>
                <ul className="mt-4 space-y-2.5 text-sm text-muted">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col gap-2.5">
                {product.demoUrl && (
                  <a
                    href={product.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center rounded-xl bg-accent px-4 py-2.5 text-xs font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    View Live Demo →
                  </a>
                )}
                {product.githubUrl && (
                  <a
                    href={product.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center rounded-xl border border-border bg-white px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-gray-50"
                  >
                    Source on GitHub
                  </a>
                )}
                {product.docsUrl && (
                  <a
                    href={product.docsUrl}
                    className="w-full text-center rounded-xl border border-border bg-white px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-gray-50"
                  >
                    Read Documentation
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}

        {/* Upcoming Products Pipeline Teaser */}
        <div className="rounded-3xl border border-dashed border-border bg-gray-50/50 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-semibold text-accent">
              <span className="inline-block h-2 w-2 rounded-full bg-accent"></span>
              <span>In Active Development</span>
            </div>
            <h3 className="mt-3 text-xl font-bold text-foreground">
              More Software Products Coming Soon
            </h3>
            <p className="mt-1 text-sm text-muted max-w-xl">
              We are working on developer utilities, productivity tools, and modern web platforms. As new tools reach maturity, they will be announced and listed directly here.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-full border border-border bg-white px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-gray-50 transition-colors"
          >
            Get Notified / Inquire →
          </Link>
        </div>
      </div>

      {/* Custom Solution Callout */}
      <div className="mt-20 rounded-3xl border border-border bg-gray-50 p-8 sm:p-12 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white border border-border p-2 mb-4">
          <Image
            src={site.logoMark}
            alt={site.name}
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
        </div>
        <h3 className="text-2xl font-bold text-foreground">
          Need a bespoke product or custom integration?
        </h3>
        <p className="mt-3 max-w-xl mx-auto text-sm text-muted leading-relaxed">
          We license our core modules for enterprise deployments and design proprietary software solutions tailored to your infrastructure.
        </p>
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-block rounded-full bg-accent px-6 py-3 text-xs font-semibold text-white transition-opacity hover:opacity-90"
          >
            Inquire About Custom Builds
          </Link>
        </div>
      </div>
    </div>
  );
}

