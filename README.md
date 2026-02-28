# StaffPro — Staffing & Recruitment Website

A production-ready corporate website for StaffPro, a staffing and recruitment company based in India. Built with React, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** React 18 (Vite)
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion
- **Routing:** React Router v6
- **Icons:** Lucide React
- **Forms:** React Hook Form + EmailJS
- **SEO:** react-helmet-async
- **Fonts:** DM Sans + Playfair Display (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Environment Variables

Copy `.env.example` to `.env` and fill in your EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Deployment

### Vercel

Push to GitHub and import the repository in Vercel. The `vercel.json` file handles SPA routing.

### Netlify

Push to GitHub and import the repository in Netlify. The `netlify.toml` file handles SPA redirects.

## Pages

- `/` — Home
- `/about` — About Us
- `/services` — Our Services
- `/industries` — Industries We Serve
- `/contact` — Contact Us
- `/employers` — For Employers
- `/job-seekers` — For Job Seekers
- `/privacy-policy` — Privacy Policy
- `/terms-of-use` — Terms of Use

## Project Structure

```
src/
├── components/
│   ├── layout/     # Navbar, Footer, Layout, ScrollToTop
│   ├── ui/         # Reusable UI components
│   └── seo/        # SEO head component
├── pages/          # Route pages
├── data/           # Static data files
├── hooks/          # Custom React hooks
├── utils/          # Utility functions
└── config/         # Configuration files
```
