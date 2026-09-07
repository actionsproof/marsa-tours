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
      title: translations[lang]?.about.sea || "Sea Adventures",
      text: lang === 'pl' ? 'Snorkeling, wycieczki łodzią i rafy koralowe pełne żółwi i kolorowego życia morskiego.' : lang === 'ar' ? 'الغطس ورحلات القوارب والشعاب المرجانية المليئة بالسلاحف والحياة البحرية الملونة.' : "Snorkeling, boat trips and coral reefs teeming with turtles and colorful marine life.",
      image: "/images/exp-sea.png",
      cta: lang === 'pl' ? 'Zobacz Wycieczki' : lang === 'ar' ? 'عرض الرحلات' : "View Trips",
    },
    {
      title: translations[lang]?.about.desert || "Desert Safari",
      text: lang === 'pl' ? 'Safari jeepem, kolacja beduińska i niezapomniane wycieczki o zachodzie słońca przez złote wydmy.' : lang === 'ar' ? 'رحلة سفاري بالجيب، عشاء بدوي وجولات غروب الشمس عبر الكثبان الذهبية.' : "Jeep safari, Bedouin dinner and unforgettable sunset tours across golden dunes.",
      image: "/images/exp-desert.png",
      cta: lang === 'pl' ? 'Zobacz Safari' : lang === 'ar' ? 'عرض السفاري' : "View Safari",
    },
    {
      title: lang === 'pl' ? 'Relaks i Odkrywanie' : lang === 'ar' ? 'استرخي واستكشف' : "Relax & Discover",
      text: lang === 'pl' ? 'Relaks, dziewicze plaże i urocze nadmorskie miasteczka czekające na odkrycie.' : lang === 'ar' ? 'الاسترخاء والشواطئ النقية والمدن الساحلية الساحرة في انتظار الاستكشاف.' : "Relaxation, pristine beaches and charming coastal towns waiting to be explored.",
      image: "/images/exp-beach.png",
      cta: lang === 'pl' ? 'Odkryj Więcej' : lang === 'ar' ? 'استكشف المزيد' : "Explore More",
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
            {lang === 'pl' ? 'Trzy sposoby, aby zakochać się w Marsa Alam' : lang === 'ar' ? 'ثلاث طرق للوقوع في حب مرسى علم' : 'Three ways to fall in love with Marsa Alam'}
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
