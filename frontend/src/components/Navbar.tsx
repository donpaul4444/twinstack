"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks, site } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
        >
          <Image
            src={site.logoMark}
            alt={site.name}
            width={38}
            height={38}
            className="h-9 w-9 object-contain rounded-lg"
            priority
          />
          <div className="flex flex-col leading-tight">
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-foreground">
              Twinstack
            </span>
            <span className="text-[9px] tracking-widest font-bold uppercase text-muted">
              Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`transition-all px-2.5 py-1 rounded-full text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isActive
                      ? "text-accent font-semibold bg-blue-50"
                      : "text-muted hover:text-foreground hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex p-2 text-foreground focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-background px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4 text-sm">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-1 font-medium transition-colors ${
                      isActive
                        ? "text-accent font-semibold"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-block w-full text-center rounded-full bg-accent px-4 py-2.5 text-xs font-semibold text-white"
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
