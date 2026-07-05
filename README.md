# SRS LLP — A House of Plywood

A modern, responsive e-commerce website for **SRS LLP**, a premium plywood manufacturer and supplier. Built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS 4**.

Design inspired by [plyduniya.com](https://www.plyduniya.com/).

---

##  Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

##  Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── page.tsx              # Home
│   ├── about/page.tsx        # About Us
│   ├── products/             # Products listing
│   │   ├── page.tsx
│   │   ├── ProductsPageContent.tsx
│   │   └── [slug]/page.tsx   # Dynamic product detail
│   ├── brands/page.tsx       # Brand showcase
│   ├── gallery/              # Image gallery
│   ├── downloads/page.tsx    # Brochures & PDFs
│   └── contact/page.tsx      # Contact form + map
├── components/
│   ├── home/                 # Home page sections
│   ├── layout/               # Header & Footer
│   └── ui/                   # Reusable UI components
├── data/                     # Static product/brand data
└── types/                    # TypeScript interfaces
```

---

##  Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero slider, intro, categories, featured products, brands, testimonials |
| `/about` | Company overview, vision, mission, MD message, timeline, quality commitment |
| `/products` | Filterable product listing with category tabs |
| `/products/[slug]` | Product detail with specs, features, applications, related products |
| `/brands` | Partner brand showcase |
| `/gallery` | Filterable photo gallery with lightbox |
| `/downloads` | Product brochures, catalogues, certificates, technical docs |
| `/contact` | Contact form, info cards, Google Maps embed |

---

##  Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React + custom SVG social icons
- **Rendering:** Static (SSG) for all pages
- **Images:** Next.js `<Image>` with AVIF/WebP optimisation

---

##  Features

- Fully responsive (mobile, tablet, desktop)
- SEO metadata on every page
- Accessible (heading hierarchy, alt text, keyboard nav, colour contrast)
- Smooth animations with Framer Motion
- Dynamic product pages from JSON data
- 14 statically generated product detail pages
- Mobile hamburger menu with smooth transitions
- Contact form with validation
- Gallery lightbox

---

##  Products (14 items across 8 categories)

- **Plywood** — BWR, Commercial MR, Marine, Flexible
- **Block Board** — Premium
- **Flush Doors** — Solid Core, Decorative
- **Laminates** — HPL, Acrylic
- **Decorative Veneers** — Natural Wood
- **MDF Board** — Plain
- **Particle Board** — Pre-Laminated
- **Hardware & Accessories** — PVC Edge Band, Wood Adhesive

---

##  License

Private — SRS LLP.
