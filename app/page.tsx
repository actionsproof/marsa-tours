import { MessageCircle } from "lucide-react"
import { SiteHeader } from "@/components/site/site-header"
import { Hero } from "@/components/site/hero"
import { About } from "@/components/site/about"
import { Featured } from "@/components/site/featured"
import { TripsCatalog } from "@/components/site/trips-catalog"
import { Testimonials } from "@/components/site/testimonials"
import { Contact } from "@/components/site/contact"
import { SiteFooter } from "@/components/site/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Featured />
        <TripsCatalog />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />

      <a
        href="https://wa.me/201224941412"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-lg transition-transform hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </>
  )
}
