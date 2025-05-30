This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## E-commerce Website on Next.js

### Routing

- **File-based routing:** All routes must be inside the `/src/app` directory.
- **Every route must have a `page.js` file.**
- **Every folder represents a URL segment.**

#### Examples

- **Simple route:**  
    `/src/app/about/page.js` → `/about`

- **Nested routes:**  
    `/src/app/courses/designing/photoshop/page.js`  
    `/src/app/courses/designing/web-design/page.js`

- **Dynamic routes:**  
    `/src/app/products/[productId]/page.js`

- **Nested dynamic routes:**  
    `/src/app/products/[productId]/reviews/[reviewId]/page.js`

- **Catch-all segments:**  
    `/src/app/news/[...slug]/page.js`

- **Private folders:**  
    `/src/app/_components`

- **Route groups:**  
    `/src/app/(auth)/...`

### Layouts

- **UI components that are shared among pages.**
- **Nested layouts are supported.**

#### Special Files

- `page.js`
- `layout.js`
- `not-found.js`
- `template.js` (similar to `layout.js` but does not preserve state)
- `loading.js`
- `error.js` (client component)
- `global-error.js` (catches errors in root-level layouts, only works in production)

### Params & Search Params

- `params` resolves into route parameters.
- `searchParams` resolves into query parameters.

**Example:**  
`/news/sports?year=2025&game=football`  
- `/news` → route  
- `/sports` → route param  
- `?year=2025&game=football` → query params

### Metadata

- The Metadata API is used to define metadata in each page.
- Useful for search engines.
- Can be defined in `layout.js` & `page.js`.

### Rendering

- **Client-side rendering:** Generates HTML in the browser.
- **Server-side rendering:** Generates HTML on the server.

#### Components

- **RSC (React Server Component):** Rendered on the server.
- **Client Component:** Rendered in the browser (can also be rendered on the server).  
    - Use `"use client"` directive.
    - Can access browser APIs, manage state, and handle user interactivity.
- **Server Component:**  
    - Rendered on the server.
    - Used for data fetching and direct server access.