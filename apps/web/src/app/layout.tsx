import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Caveat, VT323 } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

const vt323 = VT323({
  variable: "--font-vt323",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brainwhite.com"),
  title: "Brainwhite — Technical onboarding for client-facing engineering teams",
  description: "Brainwhite helps IT staffing and consulting firms get engineers productive on new client codebases faster with a structured, repeatable onboarding process.",
  keywords: ["technical onboarding", "staffing firms", "consulting firms", "engineering ramp-up", "client codebase", "delivery velocity"],
  authors: [{ name: "Brainwhite" }],
  creator: "Brainwhite",
  publisher: "Brainwhite",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brainwhite.com",
    siteName: "Brainwhite",
    title: "Brainwhite — Technical onboarding for client-facing engineering teams",
    description: "Brainwhite helps IT staffing and consulting firms get engineers productive on new client codebases faster with a structured, repeatable onboarding process.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Brainwhite — Technical onboarding for staffing & consulting firms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brainwhite — Technical onboarding for client-facing engineering teams",
    description: "Brainwhite helps IT staffing and consulting firms get engineers productive on new client codebases faster.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} ${vt323.variable} antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=General+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Averia+Serif+Libre:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-screen bg-black text-white font-display"
      >
        {children}
      </body>
    </html>
  );
}