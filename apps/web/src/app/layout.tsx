import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Caveat, VT323 } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { PostHogProvider } from '@/components/providers/posthog-provider';
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { Cursor } from "@/components/motion/cursor";
import './globals.css';

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

export const metadata: Metadata = {
  metadataBase: new URL('https://brainwhite.com'),
  title: 'BrainWhite — Onboarding for Client-Facing Engineering Teams',
  description: 'BrainWhite transforms your codebase into personalized learning paths and evidence-based readiness signals for every new developer.',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brainwhite.com',
    siteName: 'BrainWhite',
    title: 'BrainWhite — Onboarding for Engineering Teams',
    description: 'Personalized project-specific learning and assessment.',
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}>
      <body className="min-h-screen bg-black text-white selection:bg-orange-500/30">
        <Cursor />
        <SmoothScroll>
        <PostHogProvider>
          {children}
        </PostHogProvider>
        <Analytics />
        </SmoothScroll>
      </body>
    </html>
  );
}
