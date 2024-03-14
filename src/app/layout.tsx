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
  applicationName: 'Rebrand',
  description: 'The brand for your brand',
  keywords: [
    'brand',
    'design',
    'agency',
    'ui/ux',
    'ui',
    'ux',
    'logo',
    'photoshop',
    'illustrator',
    'illustration',
    'creative',
    'branding',
    'web',
    'web design',
    'web projects',
    'web development',
    'redesign',
    'brand identity',
    'brand strategy',
    'branding agency',
    'branding design',
    'branding identity',
    'branding strategy',
    'branding web',
    'branding web design',
    'branding web projects',
    'branding web development',
    'branding redesign',
  ],
  twitter: {
    creator: '@rebrandthebrand',
    title: 'Rebrand',
    description: 'The brand for your brand',
    images:
      'https://drive.google.com/file/d/11RzFQr9CJUMq9u_yNROSj_FnIrXqOX4q/view?usp=sharing',
    site: '@rebrandthebrand',
    card: 'summary_large_image',
  },
  openGraph: {
    title: 'Rebrand',
    description: 'The brand for your brand',
    images:
      'https://drive.google.com/file/d/11PY_7oJ9DO7xG-_oEwAWaQZxBdE1IPLQ/view?usp=sharing',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${karla.variable} ${recoleta.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
