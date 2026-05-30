# ForgeAI

ForgeAI is a production-oriented SaaS starter for an AI app-builder platform using Next.js, Firebase, and a modular multi-provider AI layer.

## Stack

- Next.js 16 + React + TypeScript
- Tailwind CSS + Framer Motion
- Monaco Editor
- Firebase Authentication + Firestore + Storage
- Modular AI providers (OpenAI, Gemini, Anthropic)

## Implemented Scope

- Futuristic landing page with animated gradients, particles, hover cards, demo section, testimonials, and pricing toggle
- Firebase auth screens: login, signup, forgot password, verify email, Google sign-in action
- SaaS app shell with sidebar + top nav
- Dashboard metrics page
- Project creation page with generation intake form
- AI workspace with project tree, Monaco editor, preview, and assistant panel
- Templates, community, competitions, settings, admin sections
- API routes:
  - `POST /api/ai/generate`
  - `POST /api/projects/export`
- Firestore collections mapping for core entities
- Loading skeletons for auth and platform routes

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy env template:
   ```bash
   cp .env.example .env.local
   ```
3. Fill Firebase and AI provider keys in `.env.local`.
4. Start development server:
   ```bash
   npm run dev
   ```

## Build & Validate

```bash
npm run lint
npm run build
```

## Deployment (Vercel)

1. Push repo to GitHub.
2. Import project in Vercel.
3. Add all variables from `.env.example` in Vercel Project Settings.
4. Deploy.

## Firestore Collections

- users
- projects
- templates
- likes
- comments
- competitions
- notifications
- subscriptions
- analytics
