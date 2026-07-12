import type { Metadata } from "next"
import { IBM_Plex_Mono, IBM_Plex_Sans, Space_Grotesk } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { SmoothScroll } from "@/components/ui/smooth-scroll"
import {
  siteDescription,
  siteKeywords,
  siteName,
  siteUrl,
} from "@/lib/site"
import { cn } from "@/lib/utils"

const fontSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
})

const fontMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
})

const fontDisplay = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Chetan Bhosale — Full Stack Engineer",
    template: "%s — Chetan Bhosale",
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: "Chetan Bhosale — Full Stack Engineer",
    description: siteDescription,
    locale: "en_US",
    images: [
      {
        url: "/image/gibli.png",
        width: 1024,
        height: 1536,
        alt: "Chetan Bhosale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@cbtweets810",
    creator: "@cbtweets810",
    title: "Chetan Bhosale — Full Stack Engineer",
    description: siteDescription,
    images: ["/image/gibli.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        "font-sans",
        fontSans.variable,
        fontMono.variable,
        fontDisplay.variable
      )}
    >
      <body>
        <ThemeProvider forcedTheme="light">
          <SmoothScroll>
            <ScrollProgress />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}
