# Implementation Plan - SOMA ID Card System

Build a high-fidelity, interactive ID card preview and generation tool based on the provided SOMA ID card HTML/CSS template. The project will be a React-based frontend application that allows users to view the ID card and potentially print it.

## Scope Summary
- **UI/UX:** A responsive web interface featuring the SOMA ID card front and back.
- **Visuals:** High-fidelity CSS implementation of security features (Guilloche, Kinegram, UV Layer, Holo-foil, Embossing).
- **Functionality:** 
  - Dynamic ID card preview.
  - Print-ready layout (using CSS `@media print`).
  - Interactive "Front/Back" toggle or side-by-side view.
- **Non-Goals:**
  - Remote database persistence (Supabase is out of scope).
  - Backend PDF generation (will rely on browser print-to-PDF).
  - User authentication.

## Assumptions & Open Questions
- **Data Persistence:** Since Supabase is out of scope, any "editing" functionality will be local-only or using temporary state.
- **Assets:** The user provided relative paths for images (e.g., `./SOMA ID Card.../Imaanaa.png`). These will be replaced with placeholders or default assets if not provided as files.
- **QR Codes:** Will use a client-side QR generation library (e.g., `qrcode.react`).

## Affected Areas
- **Frontend:**
  - `src/App.tsx`: Main application shell.
  - `src/components/id-card/`: New components for the Front and Back of the card.
  - `src/components/id-card/security-layers/`: Specialized CSS/SVG components for security effects.
  - `src/index.css`: Global styles including the specific `@page` and print configurations.

## Ordered Phases

### Phase 1: Security Feature Components (Frontend)
- Implement the "Guilloche", "Kinegram", "UV Layer", and "Holo-foil" as modular React/CSS components.
- Ensure animations (kine, holo-move, holo-text) are accurately ported.
- **Owner:** `frontend_engineer`

### Phase 2: ID Card Core Layout (Frontend)
- Create `IDCardFront` and `IDCardBack` components using the exact dimensions (85.6mm x 54mm).
- Port the typography, positioning, and logo styling.
- Integrate placeholders for the photo, signature, and QR codes.
- **Owner:** `frontend_engineer`

### Phase 3: Application Shell & Interaction (Frontend)
- Set up a clean UI in `App.tsx` to display the cards.
- Add a "Print" button that triggers `window.print()`.
- Ensure the `@media print` styles hide the UI and only show the cards.
- **Owner:** `frontend_engineer`

### Phase 4: Final Polish (Quick Fix)
- Refine text colors, spacing, and border-radius to match the reference exactly.
- Fix any minor CSS glitches or alignment issues found after assembly.
- **Owner:** `quick_fix_engineer`

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Build the core card components and security layers.
2. quick_fix_engineer — Final visual polish and alignment.

**Per-agent instructions:**

### 1. frontend_engineer
- **Phases:** 1, 2, 3
- **Scope:** 
  - Install `qrcode.react` if needed for the QR code implementation.
  - Create `src/components/IDCardFront.tsx` and `src/components/IDCardBack.tsx`.
  - Port all security feature CSS into a CSS module or global CSS if more appropriate for print.
  - Implement `App.tsx` with a preview area and a print action.
- **Files:** `src/App.tsx`, `src/index.css`, `src/components/IDCardFront.tsx`, `src/components/IDCardBack.tsx`.
- **Depends on:** none
- **Acceptance criteria:** 
  - Cards are exactly 85.6mm x 54mm.
  - Animations (Holo/Kinegram) are active in the browser.
  - Printing (Ctrl+P) shows only the front and back cards on separate pages/areas as per `@page` rules.

### 2. quick_fix_engineer
- **Phases:** 4
- **Scope:** 
  - Fine-tune colors (`#0A1F3D`, `#D4AF37`).
  - Adjust micro-text and letter-spacing to match the reference HTML exactly.
  - Ensure the "Authorized Signature" section is perfectly centered and styled.
- **Files:** `src/index.css`, `src/components/IDCardBack.tsx`
- **Depends on:** frontend_engineer
- **Acceptance criteria:** 
  - Visuals are indistinguishable from the provided HTML reference.
