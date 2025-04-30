This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# 🧠 Breye Foka – Modern Portfolio & Blog

A sleek, developer-focused personal website built with [Next.js](https://nextjs.org/), featuring a professional portfolio, technical blog, dark mode, project showcases, and a comments system.

This site is more than a portfolio — it’s a growing digital space where I share my journey, technical knowledge, and projects with the world.

## 🚀 Features

- 🌐 **Beautiful Homepage** with intro, featured articles, and projects
- 🌓 **Dark/Light Mode** toggle (theme-aware)
- 🧱 **Blog System** with post creation, editing, and commenting
- 🛠️ **Project Showcases** with detailed writeups
- 🔐 **Authentication** via Supabase (Admin dashboard only)
- 📄 **About Page** with personal background and story
- 📬 **Contact Form** with email integration
- 📱 **Fully Responsive** and optimized for all devices
- ⚡ **Fast Deployment** via Vercel

## 🛠 Tech Stack

| Layer       | Tools & Frameworks                      |
|-------------|-----------------------------------------|
| Frontend    | [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [TypeScript](https://www.typescriptlang.org/), [Framer Motion](https://www.framer.com/motion/), [Shadcn/ui](https://ui.shadcn.com/) |
| Backend     | [Supabase](https://supabase.com/) for DB, Auth, and API |
| Blog Engine | MDX + Supabase (Hybrid or Full DB)      |
| Deployment  | [Vercel](https://vercel.com/)           |
| Auth        | Supabase Auth or NextAuth (planned)     |

## 🧪 Setup Locally

Clone the repo and install dependencies:

```bash
git clone https://github.com/BreyeFoka/nextjs-portfolio-blog.git
cd nextjs-portfolio-blog
npm install
Add your environment variables:


# .env.local
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-key
Then run the dev server:


npm run dev
```
## ✍️ Content Overview

**Blog Posts**: Write in Markdown/MDX or manage via Supabase DB

**Projects**: Showcase your work with tech stack, links, and descriptions

**Dashboard**: Admin-only for managing posts and comments

**Comments**: Real-time comment system powered by Supabase

**Analytics**: Vercel Analytics or Plausible (optional)

**SEO Friendly**: Custom meta tags and open graph support

## 📚 Inspiration
Inspired by developers who blend engineering with storytelling, this site is built to grow as I grow. It’s a canvas for ideas, experiments, and experiences.

## 📬 Contact
If you like this project, want to collaborate, or just say hi:

**📧 Email**: breyefokalagloire@gmail.com

**🌍 Website**: breye.dev (coming soon)

**🐙 GitHub**: @BreyeFoka

## 📄 License
MIT License © 2025 Breye Foka


---








