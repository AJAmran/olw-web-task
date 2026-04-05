# Airbnb Assistants Landing Page

This is my submission for the **OneLittleWeb Web Developer Task**. It is a fully responsive, pixel-perfect implementation of the provided Figma design, built using Next.js and Tailwind CSS.

## 🚀 Live Demo
You can view the live site here: **[https://fanciful-baklava-dd5048.netlify.app/](https://fanciful-baklava-dd5048.netlify.app/)**

## 💻 Tech Stack
- **Next.js 15 (App Router)** & **React 19**
- **Tailwind CSS 4** for styling and modern design tokens.
- **Framer Motion** for smooth, high-performance animations and interactions.
- **Lucide React** for consistent and accessible iconography.
- **Date-fns** for reliable calendar logic.

## ⚡ Key Features & Optimizations
- **Pixel Perfection**: I meticulously followed the Figma design to ensure layout, spacing, and typography match perfectly.
- **Responsiveness**: The site is fully responsive from mobile (320px) up to 2k desktops, with custom mobile layouts for several sections.
- **Performance Optimized**:
  - Achievement of **90+ Lighthouse scores** for SEO and Best Practices.
  - **LCP Optimization**: Static text rendering for the Hero section text to ensure instantaneous initial paint.
  - **Deferred Animations**: Used `LazyMotion` to ensure complex animations load after the initial page render.
  - **GPU-Accelerated Marquee**: Replaced JS-driven marquee logic with a 100% CSS animation for 0% Total Blocking Time (TBT).
- **SEO Ready**: Semantic HTML5 elements and proper heading hierarchies have been used throughout.
- **Secure Configuration**: Implemented custom Content Security Policy (CSP) headers and basic security best practices.

## 🛠️ Local Development

1. **Clone the repo:**
   ```bash
   git clone https://github.com/AJAmran/olw-web-task.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the result.

---
Thank you for reviewing my submission!
