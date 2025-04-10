# 🧠 Project Overview – Breye’s Modern Portfolio & Blog

This document provides a complete overview of the personal developer portfolio project built using Next.js. It serves as a living reference for development, maintenance, and future enhancements.

---

## 🎯 Vision

To build a professional, fast, and beautiful personal website that:
- Highlights Breye Foka’s identity as a software engineer
- Shares technical knowledge through blog posts
- Showcases projects and creative work
- Provides a contact channel for collaboration and networking
- Grows with your career and learning journey

---

## 🚀 Core Features

### General
- Responsive and modern design (mobile-first)
- Dark mode / light mode toggle
- Framer Motion animations and UI polish
- SEO friendly pages and meta tags

### Homepage
- Hero section with professional intro and CTA buttons
- Featured articles from blog
- Featured projects grid

### Navigation
- Sticky header with logo/name
- Links to Blog, Projects, About, Contact
- Theme toggle
- Write Post button (for logged-in users)

### Blog System
- Create, edit, and display blog posts
- MDX or Supabase-based post management
- Post listing and detail pages
- Comment system (Supabase realtime)
- Auto-timestamps and RLS (Row Level Security) policies for safety

### Projects
- Project gallery with thumbnails, filters (optional)
- Individual project pages: title, description, tools used, live/demo links

### About Page
- Personal background, experience, and values
- Tools and tech stack used
- A brief personal story

### Contact Page
- Contact form (with email backend or static form service)
- Social media links and GitHub

### Admin Dashboard (optional)
- Private dashboard for writing posts and moderating comments

---

## 🛠️ Tech Stack

| Layer         | Tools                                     |
|---------------|-------------------------------------------|
| Frontend      | Next.js (App Router), TailwindCSS, TypeScript |
| UI Components | Shadcn/ui, Framer Motion, Lucide Icons    |
| Backend       | Supabase (Postgres, Auth, Realtime, RLS)  |
| Blog Engine   | MDX or Supabase-stored blog content       |
| Auth          | Supabase Auth (NextAuth possible future)  |
| Deployment    | Vercel                                     |
| Extras        | Vercel Analytics or Plausible, GitHub Actions (CI)

---

## 🧱 Folder Structure

src/ ├── app/  # Routing and layout using App Router 
     ├── components/  # UI components (Navbar, Footer, etc.) 
     ├── lib/ # Utility functions, Supabase client 
     ├── data/ # Static content (optional MDX) 
     ├── styles/ # Tailwind and global styles 
     ├── types/ # TypeScript interfaces and types 
     public/ # Static assets (images, favicon)

---

## 🧪 Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/BreyeFoka/nextjs-portfolio-blog.git
cd nextjs-portfolio-blog
Install dependencies:
```
```bash
npm install
Configure environment variables:
```
```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
Run the development server:

npm run dev
```
📌 Future To-Dos
 Setup Supabase tables (posts, comments, users)

 Add write-post and comment functionality

 Add user authentication & admin dashboard

 Connect Markdown/MDX support if desired

 Add SEO and Open Graph metadata

 Write content for each page (bio, projects, blog)

🧠 Maintainer
Developed by Breye Foka — a passionate learner, builder, and knowledge sharer.

📄 License
MIT License © 2025 Breye Foka