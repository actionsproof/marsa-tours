export const translations = {
  en: {
    nav: {
      about: "About",
      experiences: "Experiences", 
      trips: "Trips",
      reviews: "Reviews",
      contact: "Contact"
    }
  },
  pl: {
    nav: {
      about: "O nas",
      experiences: "Doświadczenia",
      trips: "Wycieczki", 
      reviews: "Opinie",
      contact: "Kontakt"
    }
  },
  ar: {
    nav: {
      about: "من نحن",
      experiences: "تجارب",
      trips: "رحلات",
      reviews: "التقييمات",
      contact: "اتصل بنا"
    }
  }
} as const

export type Language = keyof typeof translations
export const languages: Language[] = ['en', 'pl', 'ar']
export const languageNames = {
  en: 'English',
  pl: 'Polski',
  ar: 'العربية'
}
