import Image from "next/image"
import { Waves, Mountain, Sun } from "lucide-react"

const highlights = [
  { icon: Waves, label: "Red Sea Adventures" },
  { icon: Mountain, label: "Desert Safaris" },
  { icon: Sun, label: "Sun & Culture" },
]

export function About() {
  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-secondary">
            About Marsa Tours
          </span>
          <h2 className="mt-5 font-heading text-3xl font-bold text-primary text-balance md:text-4xl">
            Unforgettable journeys between two worlds
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            We create unforgettable experiences where the Red Sea meets the golden desert. From
            coral reefs teeming with life to endless dunes glowing at sunset, Marsa Tours brings
            you closer to the natural wonders of Marsa Alam, Egypt.
          </p>
          <p className="mt-4 font-arabic text-lg leading-loose text-muted-foreground" dir="rtl">
            نصنع تجارب لا تُنسى حيث تلتقي الصحراء الذهبية بمياه البحر الأحمر. من الشعاب المرجانية
            النابضة بالحياة إلى الكثبان الرملية اللامتناهية، تأخذك مرسى تورز إلى قلب الطبيعة في مرسى علم.
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
            <p className="text-sm text-primary-foreground/90">Curated experiences</p>
          </div>
        </div>
      </div>
    </section>
  )
}
