'use client'

import Image from "next/image"
import { ArrowRight, Phone } from "lucide-react"
import { useLanguage } from "@/components/simple-language-switcher"
import { translations } from "@/lib/translations"

export function Hero() {
  const lang = useLanguage()
  const t = translations[lang]?.hero || translations.en.hero

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-sea-desert.png"
        alt="The Red Sea meeting the golden desert at Marsa Alam"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-primary/70" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 pt-24 pb-16 text-center">
        <Image
          src="/marsa-logo.png"
          alt="Marsa Tours logo"
          width={140}
          height={140}
          priority
          className="mb-6 h-28 w-28 rounded-full bg-white/10 p-1 backdrop-blur-sm md:h-32 md:w-32"
        />
        <h1 className="font-heading text-4xl font-bold tracking-wide text-white text-balance md:text-6xl">
          MARSA <span className="text-gold">TOURS</span>
        </h1>
        <div className="mt-4 flex items-center gap-3">
          <span className="h-px w-8 bg-gold" />
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white md:text-base">
            {t.title}
          </p>
          <span className="h-px w-8 bg-gold" />
        </div>
        <p className="mt-3 font-arabic text-lg text-white/90 md:text-xl" dir="rtl">
          {t.arabicTitle}
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <a
            href="#trips"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-base font-semibold text-ink shadow-lg transition-transform hover:scale-105"
          >
            {t.cta}
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-primary"
          >
            <Phone className="h-5 w-5" />
            {translations[lang]?.nav.contact || translations.en.nav.contact}
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center gap-6 bg-primary/60 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm md:gap-12 md:text-sm">
        <span>{t.sea}</span>
        <span className="h-1 w-1 rounded-full bg-gold" />
        <span>{t.desert}</span>
        <span className="h-1 w-1 rounded-full bg-gold" />
        <span>{t.sunSky}</span>
      </div>
    </section>
  )
}
