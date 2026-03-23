# Carter Ballow — MS Paint Portfolio

A personal portfolio site that looks and works like **Windows 95 MS Paint**. Instead of a normal portfolio page, everything lives inside a retro paint app where you can actually draw on the canvas, switch between tabs, pick colors, and use tools, while also viewing projects, experience, and a resume.

Live site: [carterballow.com](https://carterballow.com)

---

## What It Looks Like

The interface has all the classic MS Paint pieces:

- **Title bar** — "Carter Ballow - Portfolio" with minimize/maximize/close buttons
- **Menu bar** — quick-nav buttons (Home, Projects, About Me, Experience, Contact Me)
- **Tab bar** — open multiple sections at once as closeable tabs (max 7)
- **Toolbar** — left-side panel with Select, Pencil, Brush, Airbrush, Text, Color Picker, and Eraser
- **Color palette** — 16 classic Windows colors with foreground/background swatches
- **Canvas** — the main content area (literally a drawing canvas on the Home tab)
- **Status bar** — shows the current tool and selected color

---

## Sections

| Tab | What's Inside |
|---|---|
| **Home** | HTML5 canvas — draw freely with Pencil, Brush, or Eraser. Drawings persist via localStorage. |
| **Projects** | 6 projects with screenshots and descriptions (Hot Takes, React Portfolio, SafeWorld MUN, Weather App, and more) |
| **About Me** | Bio, profile photo, and skill progress bars (JS, React, etc.) |
| **Experience** | Work history (Amazon, Effective Altruism, CalTeach, AI Safety @ UCLA) + education |
| **Contact** | Contact form + links to GitHub, LinkedIn, Instagram |
| **Resume** | Full resume with education, experience, skills, and projects |
| **High School Archive** | Achievements, scholarships, extracurriculars, and a photo gallery |

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui (Radix UI) |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Deployment | Vercel |

---

## Running It Locally

```bash
# 1. Clone the repo
git clone https://github.com/carterballow/MSPaintPortfolio.git
cd MSPaintPortfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
MSPaintPortfolio/
├── app/
│   ├── page.tsx              # Entry point — renders PaintInterface
│   ├── layout.tsx            # Root layout + metadata
│   ├── globals.css           # Global styles + CSS variables
│   └── exit-warning/
│       └── page.tsx          # Fun page shown when you try to close the window
│
├── components/
│   ├── paint-interface.tsx   # Main shell — manages tabs, tools, and layout
│   ├── home.tsx              # Canvas drawing surface
│   ├── toolbar.tsx           # Tool selector
│   ├── color-palette.tsx     # Color picker
│   ├── window-controls.tsx   # Min/max/close buttons
│   ├── projects.tsx          # Projects section
│   ├── about-me.tsx          # About section
│   ├── experience.tsx        # Work + education history
│   ├── contact.tsx           # Contact form + social links
│   ├── resume.tsx            # Full resume
│   ├── high-school-archive.tsx
│   └── ui/                   # shadcn/ui primitives
│
├── hooks/
│   ├── use-mobile.tsx        # Detects mobile breakpoint (768px)
│   └── use-toast.ts          # Toast notification hook
│
├── lib/
│   └── utils.ts              # cn() className utility
│
└── public/                   # Images, icons, project screenshots
```

---


Built by [Carter Ballow](https://github.com/carterballow) — second year undergrad @ UCLA
