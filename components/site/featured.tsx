import Image from "next/image"
import { ArrowRight } from "lucide-react"

const experiences = [
  {
    title: "Sea Adventures",
    text: "Snorkeling, boat trips and coral reefs teeming with turtles and colorful marine life.",
    image: "/images/exp-sea.png",
    cta: "View Trips",
  },
  {
    title: "Desert Safari",
    text: "Jeep safari, Bedouin dinner and unforgettable sunset tours across golden dunes.",
    image: "/images/exp-desert.png",
    cta: "View Safari",
  },
  {
    title: "Relax & Discover",
    text: "Relaxation, pristine beaches and charming coastal towns waiting to be explored.",
    image: "/images/exp-beach.png",
    cta: "Explore More",
  },
]

export function Featured() {
  return (
    <section id="experiences" className="bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
            Featured Experiences
          </span>
          <h2 className="mt-5 font-heading text-3xl font-bold text-primary text-balance md:text-4xl">
            Three ways to fall in love with Marsa Alam
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
