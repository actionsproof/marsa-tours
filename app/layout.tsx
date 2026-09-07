import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat, Cairo } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Marsa Tours | Where Desert Meets the Sea',
  description:
    'Marsa Tours creates unforgettable experiences in Marsa Alam, Egypt — where the Red Sea meets the golden desert. Explore sea adventures, desert safaris, and cultural day trips.',
  keywords: [
    'Marsa Tours',
    'Marsa Alam',
    'Red Sea',
    'Egypt tours',
    'desert safari',
    'snorkeling',
    'diving',
  ],
  icons: {
    icon: [
      { url: '/marsa-logo.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
    shortcut: '/marsa-logo.png',
  },
  openGraph: {
    title: 'Marsa Tours | Where Desert Meets the Sea',
    description:
      'Unforgettable experiences where the Red Sea meets the golden desert.',
    type: 'website',
    images: [
      {
        url: '/marsa-logo-full.png',
        width: 1200,
        height: 630,
        alt: 'Marsa Tours - Where Desert Meets the Sea',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marsa Tours | Where Desert Meets the Sea',
    description:
      'Unforgettable experiences where the Red Sea meets the golden desert.',
    images: ['/marsa-logo-full.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#0f4c81',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} ${cairo.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
