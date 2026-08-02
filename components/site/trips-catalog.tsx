"use client"

import { useState } from "react"
import Image from "next/image"
import { trips, type Trip } from "@/lib/trips"
import { cn } from "@/lib/utils"

const categories = ["All", "Sea", "Desert", "Culture", "Service"] as const
type Category = (typeof categories)[number]

const categoryStyles: Record<Trip["category"], string> = {
  Sea: "bg-secondary/10 text-secondary",
  Desert: "bg-gold/15 text-gold",
  Culture: "bg-primary/10 text-primary",
  Service: "bg-muted text-muted-foreground",
}

export function TripsCatalog() {
  const [active, setActive] = useState<Category>("All")

  const filtered = active === "All" ? trips : trips.filter((t) => t.category === active)

  return (
    <section id="trips" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-secondary">
            Trips Catalog
          </span>
          <h2 className="mt-5 font-heading text-3xl font-bold text-primary text-balance md:text-4xl">
            Find your next adventure
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Sea, desert and culture — handpicked trips across Marsa Alam and beyond.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-semibold transition-colors",
                active === cat
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-muted/70",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((trip) => (
            <article
              key={trip.slug}
              className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={trip.image || "/placeholder.svg"}
                  alt={trip.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className={cn(
                    "absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm",
                    categoryStyles[trip.category],
                  )}
                >
                  {trip.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-lg font-bold text-primary">{trip.title}</h3>
                <p className="font-arabic text-sm text-muted-foreground" dir="rtl">
                  {trip.titleAr}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {trip.description}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-heading text-lg font-bold text-gold">{trip.price}</span>
                  <a
                    href="#contact"
                    className="rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground transition-transform hover:scale-105"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
