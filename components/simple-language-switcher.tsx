'use client'

import { Globe } from 'lucide-react'
import { useState, useEffect } from 'react'
import { languages, languageNames, type Language } from '@/lib/translations'

export function SimpleLanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState<Language>('en')

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language
    if (saved && languages.includes(saved)) {
      setCurrentLang(saved)
      document.documentElement.lang = saved
      document.documentElement.dir = saved === 'ar' ? 'rtl' : 'ltr'
    }
  }, [])

  const switchLanguage = (lang: Language) => {
    setCurrentLang(lang)
    localStorage.setItem('language', lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    setIsOpen(false)
    window.location.reload()
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent"
        aria-label="Select language"
      >
        <Globe className="h-4 w-4" />
        <span>{languageNames[currentLang]}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full z-50 mt-2 w-40 rounded-lg border bg-background shadow-lg">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => switchLanguage(lang)}
                className={`block w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-accent first:rounded-t-lg last:rounded-b-lg ${
                  currentLang === lang ? 'bg-accent font-semibold' : ''
                }`}
              >
                {languageNames[lang]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export function useLanguage() {
  const [lang, setLang] = useState<Language>('en')
  
  useEffect(() => {
    const saved = localStorage.getItem('language') as Language
    if (saved && languages.includes(saved)) {
      setLang(saved)
    }
  }, [])
  
  return lang
}
