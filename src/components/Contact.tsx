import { site } from "@/data/site";
import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-2xl text-2xl font-medium tracking-tight">
        Have a project in mind? Let&apos;s talk.
      </p>
      <a
        href={`mailto:${site.email}`}
        className="mt-6 inline-block text-lg font-medium text-accent hover:underline"
      >
        {site.email}
      </a>
      <ul className="mt-6 flex gap-6 text-sm text-muted">
        {site.socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
