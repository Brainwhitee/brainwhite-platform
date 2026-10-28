import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Geist, Geist_Mono, Caveat } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { PostHogProvider } from '@/components/providers/posthog-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { ToastProvider } from '@/components/ui/toast';
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import './globals.css';

const ppNeueMontreal = localFont({
  src: [
    {
      path: '../../public/fonts/PPNeueMontreal-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPNeueMontreal-Book.woff2',
      weight: '450',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPNeueMontreal-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPNeueMontreal-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPNeueMontreal-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-neue-montreal',
  display: 'swap',
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

const caveat = Caveat({
  variable: '--font-chalk',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://brainwhite.com'),
  title: 'BrainWhite — Onboarding for Client-Facing Engineering Teams',
  description: 'BrainWhite transforms your codebase into personalized learning paths and evidence-based readiness signals for every new developer.',
  robots: 'index, follow',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brainwhite.com',
    siteName: 'BrainWhite',
    title: 'BrainWhite — Onboarding for Engineering Teams',
    description: 'Personalized project-specific learning and assessment.',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'BrainWhite Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'BrainWhite — Onboarding for Engineering Teams',
    description: 'Personalized project-specific learning and assessment.',
    images: ['/icon.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${ppNeueMontreal.variable} ${geistSans.variable} ${geistMono.variable} ${caveat.variable} antialiased`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('bw-theme') || 'light';
                var resolved = theme === 'system'
                  ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
                  : theme;
                if (resolved === 'dark') {
                  document.documentElement.classList.add('dark');
                  document.documentElement.setAttribute('data-theme', 'dark');
                } else {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--brand-orange)]/25">
        <ThemeProvider>
          <ToastProvider>
            <SmoothScroll>
              <PostHogProvider>
                {children}
              </PostHogProvider>
              <Analytics />
            </SmoothScroll>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
