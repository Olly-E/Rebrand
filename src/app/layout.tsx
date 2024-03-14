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
  description:
    'Rebrand — TheBrand ™ is a growing design agency, that specializes in helping brands and companies redefine their visual identity and online presence.',
  publisher: 'Rebrand',
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
    title: 'Rebrand — TheBrand ™',
    description:
      'TRebrand — TheBrand ™ is a growing design agency, that specializes in helping brands and companies redefine their visual identity and online presence.',
    images:
      'https://drive.google.com/uc?export=download&id=1LL9cVU_vABh2h65ezBIgSukaE1OSBkw_',
    site: '@rebrandthebrand',
    card: 'summary_large_image',
  },
  openGraph: {
    title: 'Rebrand — TheBrand ™',
    description:
      'Rebrand — TheBrand ™ is a growing design agency, that specializes in helping brands and companies redefine their visual identity and online presence.',
    images:
      'https://pbs.twimg.com/profile_images/1739550368147570688/JvIRNUie_400x400.jpg',
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
