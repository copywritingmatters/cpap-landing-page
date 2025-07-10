import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Super Seven CPAP Stations - $1K+ Monthly Passive Revenue for Pharmacies',
  description: 'Help your pharmacy earn $1K+ monthly passive revenue with our plug-and-play CPAP stations. Trusted by 100+ pharmacies across North America.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 