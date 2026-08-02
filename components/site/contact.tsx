"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react"

const details = [
  { icon: Phone, label: "Phone", value: "+20 122 494 1412", href: "tel:+201224941412" },
  { icon: Mail, label: "Email", value: "info@marsa.tours", href: "mailto:info@marsa.tours" },
  { icon: MapPin, label: "Location", value: "Marsa Alam, Egypt", href: "#map" },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-secondary">
            Get in Touch
          </span>
          <h2 className="mt-5 font-heading text-3xl font-bold text-primary text-balance md:text-4xl">
            Marsa Alam is calling
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tell us your dream trip and we&apos;ll craft the perfect itinerary for you.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-card p-7 shadow-sm ring-1 ring-border md:p-8">
            {sent ? (
              <div className="flex h-full min-h-72 flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-14 w-14 text-secondary" />
                <h3 className="mt-4 font-heading text-2xl font-bold text-primary">Thank you!</h3>
                <p className="mt-2 text-muted-foreground">
                  Your message has been received. Our team will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" name="name" placeholder="Your name" />
                  <Field label="Email" name="email" type="email" placeholder="you@email.com" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Phone" name="phone" placeholder="+20 ..." />
                  <Field label="Trip of interest" name="trip" placeholder="e.g. Abu Dabbab" />
                </div>
                <label className="flex flex-col gap-1.5 text-sm font-medium text-foreground">
                  Message
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your trip..."
                    className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-secondary focus:ring-2 focus:ring-secondary/30"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {details.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 rounded-2xl bg-card p-5 shadow-sm ring-1 ring-border transition-colors hover:ring-secondary/40"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {label}
                    </span>
                    <span className="font-semibold text-foreground">{value}</span>
                  </span>
                </a>
              ))}
            </div>

            <a
              href="https://wa.me/201224941412"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground shadow-sm transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>

            <div id="map" className="overflow-hidden rounded-3xl shadow-sm ring-1 ring-border">
              <iframe
                title="Marsa Alam location map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=34.6%2C25.0%2C34.95%2C25.15&layer=mapnik&marker=25.0676%2C34.8830"
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm font-medium text-foreground">
      {label}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-secondary focus:ring-2 focus:ring-secondary/30"
      />
    </label>
  )
}
