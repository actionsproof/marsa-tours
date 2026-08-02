export type Trip = {
  slug: string
  title: string
  titleAr: string
  description: string
  price: string
  category: "Sea" | "Desert" | "Culture" | "Service"
  image: string
}

export const trips: Trip[] = [
  {
    slug: "airport-transfers",
    title: "Airport Transfers",
    titleAr: "خدمة النقل من المطار",
    description: "Comfortable private transfers between Marsa Alam Airport and your hotel, on time, every time.",
    price: "From $20",
    category: "Service",
    image: "/images/trip-transfer.png",
  },
  {
    slug: "abu-dabbab",
    title: "Abu Dabbab",
    titleAr: "أبو دباب",
    description: "Swim with dugongs and sea turtles in one of the Red Sea's most beautiful sheltered bays.",
    price: "From $35",
    category: "Sea",
    image: "/images/trip-abu-dabbab.png",
  },
  {
    slug: "marsa-mubarak",
    title: "Marsa Mubarak",
    titleAr: "مرسى مبارك",
    description: "Snorkel over seagrass meadows and vibrant coral home to turtles and colorful reef fish.",
    price: "From $30",
    category: "Sea",
    image: "/images/trip-marsa-mubarak.png",
  },
  {
    slug: "sharm-el-luli",
    title: "Sharm El Luli",
    titleAr: "شرم اللولي",
    description: "Relax on powder-white sand beside the clearest turquoise lagoon on the coast.",
    price: "From $40",
    category: "Sea",
    image: "/images/trip-sharm-el-luli.png",
  },
  {
    slug: "hamata-islands",
    title: "Hamata Islands",
    titleAr: "جزر حماطة",
    description: "A full-day boat trip to pristine islands, mangroves and untouched snorkeling spots.",
    price: "From $55",
    category: "Sea",
    image: "/images/trip-hamata.png",
  },
  {
    slug: "sea-scope",
    title: "Sea Scope",
    titleAr: "سي سكوب",
    description: "Discover the underwater world in comfort aboard a semi-submarine — no swimming required.",
    price: "From $28",
    category: "Sea",
    image: "/images/trip-sea-scope.png",
  },
  {
    slug: "nefertari-yacht",
    title: "Nefertari Yacht",
    titleAr: "يخت نفرتاري",
    description: "A private luxury yacht cruise with snorkeling stops, lunch and endless sea views.",
    price: "From $75",
    category: "Sea",
    image: "/images/trip-yacht.png",
  },
  {
    slug: "rosetta",
    title: "Rosetta",
    titleAr: "روزيتا",
    description: "A relaxed day cruise with sun decks, swimming and reef snorkeling for the whole family.",
    price: "From $50",
    category: "Sea",
    image: "/images/trip-rosetta.png",
  },
  {
    slug: "wadi-el-gemal",
    title: "Wadi El Gemal",
    titleAr: "وادي الجمال",
    description: "Explore a protected national park of desert valleys, wildlife and ancient landscapes.",
    price: "From $45",
    category: "Desert",
    image: "/images/trip-wadi-el-gemal.png",
  },
  {
    slug: "super-safari",
    title: "Super Safari",
    titleAr: "سفاري خارق",
    description: "Jeep adventure across the dunes with a Bedouin dinner, camel ride and sunset views.",
    price: "From $38",
    category: "Desert",
    image: "/images/trip-safari.png",
  },
  {
    slug: "luxor",
    title: "Luxor (Day / Overnight)",
    titleAr: "الأقصر (يوم / مبيت)",
    description: "Visit Karnak, the Valley of the Kings and the temples of the world's greatest open-air museum.",
    price: "From $85",
    category: "Culture",
    image: "/images/trip-luxor.png",
  },
  {
    slug: "aswan",
    title: "Aswan (Day / Overnight + Abu Simbel)",
    titleAr: "أسوان (يوم / مبيت + أبو سمبل)",
    description: "Discover the Nile, the High Dam and the magnificent temples of Abu Simbel.",
    price: "From $95",
    category: "Culture",
    image: "/images/trip-aswan.png",
  },
  {
    slug: "cairo",
    title: "Cairo (Day / Overnight)",
    titleAr: "القاهرة (يوم / مبيت)",
    description: "Stand before the Great Pyramids, the Sphinx and the treasures of the Egyptian Museum.",
    price: "From $110",
    category: "Culture",
    image: "/images/trip-cairo.png",
  },
  {
    slug: "city-tours",
    title: "City Tours",
    titleAr: "جولات المدينة",
    description: "Explore local markets, coastal towns and hidden gems with a friendly local guide.",
    price: "From $25",
    category: "Culture",
    image: "/images/trip-city-tours.png",
  },
  {
    slug: "diving-course",
    title: "Diving Course",
    titleAr: "دورة الغوص",
    description: "Learn to scuba dive with certified instructors on the Red Sea's spectacular reefs.",
    price: "From $120",
    category: "Sea",
    image: "/images/trip-diving.png",
  },
]

export const testimonials = [
  {
    name: "Emma Thompson",
    location: "United Kingdom",
    avatar: "/images/avatar-1.png",
    rating: 5,
    quote:
      "The Abu Dabbab trip was magical — we swam with a turtle within minutes! Everything was perfectly organized from pickup to lunch.",
  },
  {
    name: "Karim Nasser",
    location: "Egypt",
    avatar: "/images/avatar-2.png",
    rating: 5,
    quote:
      "The desert safari with Bedouin dinner under the stars was the highlight of our trip. The guides were warm and professional.",
  },
  {
    name: "Mei Lin",
    location: "Singapore",
    avatar: "/images/avatar-3.png",
    rating: 5,
    quote:
      "Booked the Luxor overnight tour and it exceeded every expectation. Marsa Tours truly delivers where desert meets the sea.",
  },
]
