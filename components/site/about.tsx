'use client'

import Image from "next/image"
import { Waves, Mountain, Sun } from "lucide-react"
import { useLanguage } from "@/components/simple-language-switcher"
import { translations } from "@/lib/translations"

export function About() {
  const lang = useLanguage()
  const t = translations[lang]?.about || translations.en.about

  const highlights = [
    { icon: Waves, label: t.sea },
    { icon: Mountain, label: t.desert },
    { icon: Sun, label: t.culture },
  ]

  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-secondary">
            {t.title}
          </span>
          <h2 className="mt-5 font-heading text-3xl font-bold text-primary text-balance md:text-4xl">
            {translations[lang]?.hero.title || translations.en.hero.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {t.description}
          </p>
          <p className="mt-4 font-arabic text-lg leading-loose text-muted-foreground" dir="rtl">
            {translations.ar.about.description}
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {highlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-4 text-center shadow-sm"
              >
                <Icon className="h-7 w-7 text-gold" />
                <span className="text-xs font-semibold text-foreground md:text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/about-desert-sea.png"
              alt="Aerial view of golden desert dunes meeting the turquoise Red Sea"
              width={720}
              height={720}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-primary px-6 py-5 text-primary-foreground shadow-lg sm:block">
            <p className="font-heading text-3xl font-bold text-gold">15+</p>
            <p className="text-sm text-primary-foreground/90">
              {lang === 'pl' ? 'Kuratorowanych doświadczeń' : lang === 'ar' ? 'تجارب منسقة' : 'Curated experiences'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
