import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bella Vista Cafe - Where Every Meal Tells a Story',
  description: 'Experience the perfect blend of comfort and sophistication at Bella Vista Cafe, where fresh ingredients meet culinary artistry.',
  keywords: 'cafe, restaurant, fresh food, local ingredients, San Francisco dining',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-gray-400">
              © 2025 Bella Vista Cafe. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}