'use client'

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/simple-language-switcher"
import { translations } from "@/lib/translations"

export function Featured() {
  const lang = useLanguage()
  const t = translations[lang]?.featured || translations.en.featured

  const experiences = [
    {
      title: t.seaTitle,
      text: t.seaDesc,
      image: "/images/exp-sea.png",
      cta: t.seaCta,
    },
    {
      title: t.desertTitle,
      text: t.desertDesc,
      image: "/images/exp-desert.png",
      cta: t.desertCta,
    },
    {
      title: t.relaxTitle,
      text: t.relaxDesc,
      image: "/images/exp-beach.png",
      cta: t.relaxCta,
    },
  ]

  return (
    <section id="experiences" className="bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
            {t.title}
          </span>
          <h2 className="mt-5 font-heading text-3xl font-bold text-primary text-balance md:text-4xl">
            {t.subtitle}
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {experiences.map((exp) => (
            <article
              key={exp.title}
              className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={exp.image || "/placeholder.svg"}
                  alt={exp.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-xl font-bold text-primary">{exp.title}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">{exp.text}</p>
                <a
                  href="#trips"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-primary"
                >
                  {exp.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
