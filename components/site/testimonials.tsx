'use client'

import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { testimonials } from "@/lib/trips"
import { useLanguage } from "@/components/simple-language-switcher"
import { translations } from "@/lib/translations"

export function Testimonials() {
  const lang = useLanguage()
  const t = translations[lang]?.testimonials || translations.en.testimonials

  return (
    <section id="reviews" className="relative overflow-hidden bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
            {lang === 'pl' ? 'Opinie' : lang === 'ar' ? 'شهادات' : 'Testimonials'}
          </span>
          <h2 className="mt-5 font-heading text-3xl font-bold text-white text-balance md:text-4xl">
            {lang === 'pl' ? 'Kochani przez podróżników z całego świata' : lang === 'ar' ? 'محبوب من قبل المسافرين من جميع أنحاء العالم' : 'Loved by travelers from around the world'}
          </h2>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl bg-white/5 p-7 ring-1 ring-white/10 backdrop-blur-sm"
            >
              <Quote className="h-8 w-8 text-gold" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 leading-relaxed text-white/90">
                {`"${t.quote}"`}
              </blockquote>
              <div className="mt-5 flex items-center gap-1" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-white/10 pt-5">
                <Image
                  src={t.avatar || "/placeholder.svg"}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-white/60">{t.location}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
