import Image from "next/image"
import type { SVGProps } from "react"

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Experiences", href: "#experiences" },
  { label: "Trips", href: "#trips" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
]

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  )
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function WhatsappIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35ZM12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5A9.43 9.43 0 0 1 18.7 5.4a9.36 9.36 0 0 1 2.76 6.66c0 5.2-4.24 9.44-9.41 9.44Zm8.02-17.46A11.36 11.36 0 0 0 12.05.7C5.8.7.72 5.78.72 12.02c0 2 .53 3.95 1.52 5.67L.63 23.3l5.75-1.51a11.3 11.3 0 0 0 5.66 1.44h.01c6.24 0 11.32-5.08 11.33-11.32a11.26 11.26 0 0 0-3.31-7.87Z" />
    </svg>
  )
}

function WebsiteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z" />
    </svg>
  )
}

const socials = [
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: WhatsappIcon, label: "WhatsApp", href: "https://wa.me/201224941412" },
  { icon: WebsiteIcon, label: "Website", href: "#" },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <Image
              src="/marsa-logo.png"
              alt="Marsa Tours logo"
              width={52}
              height={52}
              className="h-12 w-12 rounded-full bg-white/10 p-0.5"
            />
            <span className="flex flex-col leading-none">
              <span className="font-heading text-xl font-bold tracking-wide">
                MARSA <span className="text-gold">TOURS</span>
              </span>
              <span className="text-[10px] font-medium tracking-[0.2em] text-primary-foreground/70">
                WHERE DESERT MEETS THE SEA
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-md leading-relaxed text-primary-foreground/80">
            Unforgettable experiences where the Red Sea meets the golden desert. Sea, desert and
            sky — endless beauty in Marsa Alam, Egypt.
          </p>
          <p className="mt-3 font-arabic text-primary-foreground/70" dir="rtl">
            حيث تلتقي الصحراء بالبحر — مرسى تورز
          </p>

          <div className="mt-6 flex gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold hover:text-ink"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-gold">
            Quick Links
          </h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-primary-foreground/80 transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-gold">
            Contact
          </h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-primary-foreground/80">
            <li>Marsa Alam, Egypt</li>
            <li>
              <a href="tel:+201224941412" className="transition-colors hover:text-gold">
                +20 122 494 1412
              </a>
            </li>
            <li>
              <a href="mailto:info@marsa.tours" className="transition-colors hover:text-gold">
                info@marsa.tours
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-gold">
                www.marsa.tours
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-sm text-primary-foreground/70 md:flex-row md:px-6">
          <p>© {new Date().getFullYear()} Marsa Tours. All rights reserved.</p>
          <p className="font-arabic" dir="rtl">
            جميع الحقوق محفوظة لمرسى تورز
          </p>
        </div>
      </div>
    </footer>
  )
}
