# Rexos Properties — Progress Log

> This file tracks conversation progress so Claude can catch up after a lost session.
> Tell Claude: "read PROGRESS.md to catch up" at the start of a new conversation.
>
> **Workflow**: The user has a Figma design for this project. Since Claude cannot access Figma directly,
> the user sends screenshots of each section one by one. Claude builds each section to match the
> screenshot exactly. We go section by section until the full design is implemented.

---

## Project Overview
- **Project**: Rex'o's Properties — real estate listing platform
- **Stack**: Next.js 16.2.1, React 19, TypeScript, Prisma + SQLite, Tailwind CSS v4
- **Fonts**: Oswald (headings), GeneralSans (body) — loaded locally via @font-face
- **Colors**: Navy (#1B2A4A), Blue Steel (#4A5A8A), Navy Dark (#111D35)
- **Approach**: User sends Figma screenshots, Claude builds to match exactly. Keep code simple and readable.

---

## What's Been Built

### Layout
- **Header** (`src/components/layout/Header.tsx`)
  - Sticky nav, logo on left, nav links center, "Contact Us" button right
  - Nav links use Oswald font (`font-heading`), `text-[15px] font-normal`
  - "Contact Us" button: solid navy fill, white text, arrow icon in semi-transparent white circle
  - Mobile responsive with hamburger menu

- **Footer** (`src/components/layout/Footer.tsx`)
  - Unified `bg-blue-steel` background (no separate sections)
  - Top: bold uppercase heading "Rex'o's Properties Combines Local Expertise..."
  - Body: 2-column layout — left has logo, description, contact info; right has Company/Support/Social columns
  - Bottom bar: `border-t` divider, copyright left, Privacy/Copyright/Terms right
  - Social icons: Facebook, Instagram, TikTok

### Homepage Sections (in order on page)
1. **Hero** (`src/components/sections/Hero.tsx`) — auto-rotating carousel, search panel with tabs/filters
2. **Services** (`src/components/sections/Services.tsx`)
   - "Our Services" heading (bold italic Oswald)
   - 3 cards: Property Investment, Property Sale, Property Development
   - Icons: `ser-1.svg`, `ser-2.svg`, `ser-3.svg` (SVGs have built-in card + shadow)
   - Titles are bold (NOT italic)
3. **LatestProjects** (`src/components/sections/LatestProjects.tsx`)
   - "Discover Our Latest Projects" heading
   - 3 property cards with images, status badge, title, location, amenities, price, "View Details" button
   - 5 amenity icons per card: Bedrooms(1), Living Room(1), Dining Area(1), Bathrooms(2), Kitchen(2)
   - Icons from: `Bedrooms.svg`, `living room.svg`, `Dining area.svg`, `bathroom.svg`, `kitchen.svg`
4. **Testimonials** (`src/components/sections/Testimonials.tsx`) — client testimonial with gallery
5. **Milestones** (`src/components/sections/Milestones.tsx`) — stats (98+ Projects, 59+ Clients, 56+ Awards)
6. **FAQ** (`src/components/sections/FAQ.tsx`) — accordion with 4 questions
7. **Newsletter** (`src/components/sections/Newsletter.tsx`) — email subscription form
8. **BlogPreview** (`src/components/sections/BlogPreview.tsx`) — 3 blog post cards

### Database (Prisma)
- Schema at `prisma/schema.prisma` with 9 models:
  Admin, Property, PropertyImage, PageContent, TeamMember, BlogPost, Enquiry, SiteSetting, Testimonial
- SQLite database at `prisma/dev.db`
- Prisma client singleton at `src/lib/prisma.ts`

---

## What's NOT Built Yet
- Auth (next-auth installed but no routes)
- API routes (directories exist but empty)
- Inner pages: About, Services, Contact, Properties listing, Property detail, Blog
- Admin dashboard
- Form submissions (contact, newsletter)

---

## Design Decisions & Notes
- Figma icons in `public/assets/images/Icon/` — some SVGs have built-in card backgrounds (like ser-1 to ser-3), so don't add extra card wrappers
- Service section icon SVGs are 192x192 with their own white rounded card + drop shadow baked in
- Nav links use Oswald font, not GeneralSans
- Keep code simple — no unnecessary abstractions, anyone should be able to read and modify it

---

## Session Log

### Session 1 (2026-03-25) — Initial Build
- Set up project from scratch: Next.js 16, Prisma, Tailwind v4
- Built all homepage sections and layout components
- Created Prisma schema with 9 models
- Initial migration run

### Session 2 (2026-03-26) — Figma Matching
- Fixed Header: nav font to Oswald, "Contact Us" button to solid navy with arrow circle
- Fixed Services: swapped icons to ser-1/2/3.svg, removed italic from service titles, removed extra card wrapper
- Fixed LatestProjects: updated amenities to 5 icons (Bedrooms, Living Room, Dining Area, Bathrooms, Kitchen) with correct counts
- Fixed Footer: unified background, removed arrow button from banner, 2-column layout, border-t bottom bar
