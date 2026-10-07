# Redesign Audit: BrainWhite Platform

## Current Architecture
- **Framework**: Next.js (App Router), React, TypeScript.
- **Styling**: Tailwind CSS.
- **Animation**: Framer Motion (currently using `RetroGrid`, `SparklesCore`, `AuroraBackground`, `FlickeringGrid`).
- **Routing**: Single page (`/`) with a Waitlist form.
- **Dependencies**: Lucide React, clsx, tailwind-merge.

## Current Content
1. **Hero**: "Onboarding is an Engineering Problem." + short description.
2. **The Problem**: "Scattered documentation", "Repetitive mentor time", "Slow time to first commit".
3. **Client Onboarding**: "Onboarding is different when your engineers move between clients." (Client A, B, C).
4. **Fresher Onboarding**: "Week 1", "Week 2", "Week 3", "Month 1".
5. **Three Views**: For developers, for managers, for admins.
6. **Waitlist / CTA**: Form to capture name, email, company, size.

## Reusable Functionality
- The Waitlist Form validation logic and API submission handler (`submitStatus`, `validateForm`).
- Basic structural layout (Tailwind configuration).
- SEO metadata (`sitemap.ts`, `robots.ts`, `layout.tsx` metadata).

## Problems with Current Implementation
- **Visual Rhythm**: Relies on disjointed background effects (Sparkles -> Aurora -> FlickeringGrid -> Constellation) which look cool individually but lack cohesive art direction. It feels like a showcase of UI components rather than a unified narrative.
- **Typography**: Safe, standard sizing. Lacks the extreme contrast and editorial scale of an Awwwards-level site.
- **Interaction**: Basic fade-ins (BlurFade). No advanced scroll choreography, no horizontal scrolling, no immersive cursor interactions.
- **Storytelling**: Very traditional vertical stacking of sections.

## Proposed New Architecture
- **Preloader**: A fast, minimal cinematic entry.
- **Hero**: Massive kinetic typography. Deep black background. Scroll invitation.
- **Manifesto**: A pinned section with scrub-based text reveal (GSAP ScrollTrigger or Framer Motion `useScroll`).
- **Product Reveal (Horizontal)**: A horizontal scrolling section to showcase the "Three Views" or the "Problems".
- **Feature Storytelling**: Asymmetrical layout combining Client Onboarding and Fresher Onboarding into a cohesive narrative.
- **Final CTA**: A massive, screen-filling magnetic waitlist section.
- **Motion System**: Unified using Framer Motion (since it's already installed and highly capable). We will build custom hooks for smooth scroll (Lenis integration is highly recommended for Awwwards-level sites).
