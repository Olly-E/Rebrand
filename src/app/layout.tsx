import { Karla } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'

const recoleta = localFont({
variable: '--font-recoleta',
src: [
  {
    path: '../../public/font/Recoleta-Bold.ttf',
    weight: '400',
    style: 'normal',
  },
],

})

const karla = Karla({ subsets: ['latin'], variable: '--font-karla' })


export const metadata: Metadata = {
  title: 'Rebrand',
  description: 'The brand for your brand',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        className={`${karla.variable} ${recoleta.variable} antialiased`}
      >{children}</body>
    </html>
  )
}
