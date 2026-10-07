# Experience Architecture: BrainWhite

## 01. PRELOADER
- **Purpose**: Build anticipation.
- **Content**: Just "BRAINWHITE" and a loading counter (0-100%).
- **Animation**: Counter runs fast, logo masks in. Cinematic wipe up to reveal Hero.

## 02. HERO
- **Purpose**: Immediate impact. Make them feel this is a high-end engineering tool.
- **Content**: "ONBOARDING IS AN ENGINEERING PROBLEM."
- **Visual**: Massive, screen-filling sans-serif typography. Extreme contrast. Maybe a very subtle, high-quality noise/grain overlay. No generic 3D objects.
- **Interaction**: Custom cursor (dot that expands). Staggered text reveal on load.

## 03. MANIFESTO (THE PROBLEM)
- **Purpose**: Validate the user's pain.
- **Content**: "The old way made sense. Until it didn't. Scattered docs. Repetitive mentoring. Weeks to first commit."
- **Animation**: Scroll-driven text masking. The text starts grayed out/opacity 0.2, and fills with white as the user scrolls. The section is `sticky`.

## 04. PRODUCT REVEAL (HORIZONTAL SCROLL)
- **Purpose**: Show how BrainWhite solves it across different contexts (Client vs Fresher).
- **Visual**: A horizontal track.
- **Content**: 
  - Panel 1: For the Client (Fintech, Healthcare).
  - Panel 2: For the Fresher (Week 1, Week 2).
- **Interaction**: Vertical scroll translates to horizontal translation (`x` transform linked to `scrollYProgress`).

## 05. CORE EXPERIENCE (THREE VIEWS)
- **Purpose**: Detail the platform's user segments.
- **Visual**: Asymmetrical grid. Large numbers (01, 02, 03) paired with editorial descriptions.
- **Animation**: Parallax on images/graphics. Images reveal from a zero-height mask.

## 06. FINAL CINEMATIC SEQUENCE / CTA
- **Purpose**: Convert the user.
- **Visual**: A massive, screen-filling section. 
- **Content**: "LET'S BUILD." + The Waitlist Form.
- **Interaction**: The footer/CTA section is revealed from *underneath* the previous section (curtain effect). The submit button is highly magnetic.

## GLOBAL SYSTEMS
- **Smooth Scroll**: Implement Lenis for buttery smooth scrolling (essential for this aesthetic).
- **Cursor**: Global custom cursor that reacts to `data-cursor` attributes.
- **Typography**: `clamp()` based responsive font sizes.
- **Colors**: Deep black `#050505`, off-white `#F5F5F5`, subtle orange accent `#FF6600` used *very* sparingly.
