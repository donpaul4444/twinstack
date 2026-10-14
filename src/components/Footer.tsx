import Link from "next/link";
import Image from "next/image";
import { navLinks, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="max-w-sm">
            <Link href="/" className="inline-block transition-opacity hover:opacity-90">
              <Image
                src={site.logoStacked}
                alt={site.name}
                width={160}
                height={80}
                className="h-16 w-auto object-contain rounded-xl"
              />
            </Link>
            <p className="mt-4 text-sm text-muted leading-relaxed">
              {site.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground">Navigation</p>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-muted">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground">Connect</p>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-muted">
                <li>
                  <a href={`mailto:${site.email}`} className="hover:text-foreground transition-colors">
                    {site.email}
                  </a>
                </li>
                {site.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground transition-colors"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-muted">
          <p suppressHydrationWarning>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Crafted with care by independent developers.</p>
        </div>
      </div>
    </footer>
  );
}
