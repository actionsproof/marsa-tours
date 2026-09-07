"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { SimpleLanguageSwitcher, useLanguage } from "@/components/simple-language-switcher"
import { translations } from "@/lib/translations"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const lang = useLanguage()
  const t = translations[lang]?.nav || translations.en.nav

  const navLinks = [
    { label: t.about, href: "#about" },
    { label: t.experiences, href: "#experiences" },
    { label: t.trips, href: "#trips" },
    { label: t.reviews, href: "#reviews" },
    { label: t.contact, href: "#contact" },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/90 shadow-sm backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/marsa-logo.png"
            alt="Marsa Tours logo"
            width={48}
            height={48}
            className="h-11 w-11 rounded-full"
            priority
          />
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                "font-heading text-lg font-bold tracking-wide transition-colors",
                scrolled ? "text-primary" : "text-white",
              )}
            >
              MARSA <span className="text-secondary">TOURS</span>
            </span>
            <span
              className={cn(
                "text-[10px] font-medium tracking-[0.2em] transition-colors",
                scrolled ? "text-muted-foreground" : "text-white/80",
              )}
            >
              WHERE DESERT MEETS THE SEA
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                scrolled ? "text-foreground" : "text-white",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <SimpleLanguageSwitcher />
          <a
            href="#trips"
            className="rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground shadow-sm transition-transform hover:scale-105"
          >
            {t.trips}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden",
            scrolled ? "text-primary hover:bg-muted" : "text-white hover:bg-white/10",
          )}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
            <div className="px-3 py-2">
              <SimpleLanguageSwitcher />
            </div>
            <a
              href="#trips"
              onClick={() => setOpen(false)}
              className="mt-2 mb-2 rounded-full bg-secondary px-5 py-3 text-center text-sm font-semibold text-secondary-foreground"
            >
              {t.trips}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
