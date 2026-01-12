import type React from "react"
import type { Metadata } from "next"
import { Merriweather, Inter, Bricolage_Grotesque } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
})

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-bricolage-grotesque",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://zybergeek.com"),
  title: {
    default: "Zybergeek — Digital Workshop & Workbench",
    template: "%s | Zybergeek",
  },
  description:
    "A sophisticated digital workshop for code, design, and technical exploration. Premium portfolio and project showcase.",
  keywords: ["Web Development", "Design", "Portfolio", "Projects", "Development", "Code", "Technical"],
  authors: [{ name: "Zybergeek", url: "https://zybergeek.com" }],
  creator: "Zybergeek",
  publisher: "Zybergeek",
  generator: "v0.app",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Zybergeek — Digital Workshop & Workbench",
    description: "A sophisticated digital workshop for code, design, and technical exploration.",
    siteName: "Zybergeek",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zybergeek — Digital Workshop & Workbench",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zybergeek — Digital Workshop & Workbench",
    description: "A sophisticated digital workshop for code, design, and technical exploration.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
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
      className={`${merriweather.variable} ${inter.variable} ${bricolageGrotesque.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} storageKey="theme-mode">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
