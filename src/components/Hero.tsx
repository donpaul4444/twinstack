import { site } from "@/data/site";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
        {site.tagline}
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">{site.description}</p>
      <a
        href="#projects"
        className="mt-10 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
      >
        View our work
      </a>
    </section>
  );
}
