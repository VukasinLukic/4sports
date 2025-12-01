# Tailwind CSS Setup - 4sports Project

## Overview
Ovaj projekat koristi **Tailwind CSS v3.4.11** sa **shadcn/ui** komponentama za moderan, customizable UI sistem.

---

## 📦 Instalacija i Konfiguracija

### 1. Instalacija Paketa
```bash
npm install -D tailwindcss@3.4.11 postcss autoprefixer
npm install tailwindcss-animate
```

### 2. PostCSS Konfiguracija
**Fajl:** `postcss.config.js`
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 3. Tailwind Konfiguracija
**Fajl:** `tailwind.config.ts`

#### Content Paths
```typescript
content: [
  "./pages/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  "./app/**/*.{ts,tsx}",
  "./src/**/*.{ts,tsx}",
]
```

#### Container Setup
```typescript
container: {
  center: true,
  padding: '2rem',
  screens: {
    '2xl': '1400px'
  }
}
```

---

## 🎨 Color System - CSS Variables

### Fajl: `src/index.css`

#### Primary Color (Zelena)
```css
--primary: 34 197 94; /* #22c55e - Bright Green */
--primary-foreground: 0 0 0;
```

#### Background Colors
```css
--background: 0 0 0; /* Pure Black */
--foreground: 255 255 255; /* Pure White for text */
--card: 10 10 10; /* Very dark for cards */
```

#### Semantic Colors
```css
--destructive: 239 68 68; /* Red for errors */
--muted: 15 15 15;
--accent: 34 197 94; /* Same as primary - green */
--ring: 34 197 94; /* Focus ring - green */
```

### Korišćenje u Tailwind
```tsx
<div className="bg-primary text-primary-foreground">
<div className="border-primary/20"> {/* 20% opacity */}
<div className="text-primary/50"> {/* 50% opacity */}
```

---

## 🎭 Custom Classes i Komponente

### Glass Morphism Effects
```css
.glass-card {
  background: linear-gradient(135deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(10, 10, 10, 0.9) 50%,
    rgba(0, 0, 0, 0.8) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(34, 197, 94, 0.2);
}
```

**Upotreba:**
```tsx
<div className="glass-card p-8 rounded-3xl">
  Content with glass effect
</div>
```

### Text Gradient
```css
.text-gradient {
  background: linear-gradient(135deg,
    #22c55e 0%,
    #16a34a 30%,
    #15803d 70%,
    #22c55e 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

**Upotreba:**
```tsx
<h1 className="text-gradient">4sports</h1>
```

### Buttons
```css
.btn-primary {
  background: transparent;
  border: 2px solid #22c55e;
  /* Hover effects included */
}

.btn-secondary {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
}
```

**Upotreba:**
```tsx
<button className="btn-primary">Click Me</button>
<button className="btn-secondary">Secondary</button>
```

### Form Inputs
```css
.form-input {
  background: linear-gradient(135deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(10, 10, 10, 0.95) 100%);
  border-color: rgba(34, 197, 94, 0.2);
}
```

**Upotreba:**
```tsx
<input className="form-input" type="text" />
```

---

## 🎬 Animacije

### Keyframes Definicije

#### Marquee Animation (za testimonials)
```typescript
keyframes: {
  marquee: {
    from: { transform: 'translateX(0)' },
    to: { transform: 'translateX(calc(-100% - var(--gap)))' }
  }
}

animation: {
  marquee: 'marquee var(--duration) linear infinite'
}
```

**Upotreba:**
```tsx
<div className="animate-marquee [--duration:160s] [--gap:2rem]">
  {/* Scrolling content */}
</div>
```

#### Accordion Animation
```typescript
keyframes: {
  'accordion-down': {
    from: { height: '0' },
    to: { height: 'var(--radix-accordion-content-height)' }
  }
}
```

#### Custom CSS Animations
```css
.fade-in {
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Upotreba:**
```tsx
<div className="fade-in">Animated content</div>
```

---

## 🔧 Utility Classes

### Layout & Spacing
```css
.section-padding {
  @apply py-32 lg:py-40;
}

.container-custom {
  @apply max-w-7xl mx-auto px-6 sm:px-8 lg:px-12;
}
```

### Hover Effects
```css
.hover-lift {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-12px);
}
```

**Upotreba:**
```tsx
<div className="hover-lift">Hover over me</div>
```

### Navigation Links
```css
.nav-link {
  @apply text-gray-300 hover:text-white transition-all duration-300;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #22c55e 0%, #16a34a 100%);
  transition: width 0.4s ease;
}

.nav-link:hover::after {
  width: 100%;
}
```

---

## 📐 Border Radius System

```typescript
borderRadius: {
  lg: 'var(--radius)',        // 1rem
  md: 'calc(var(--radius) - 2px)',  // ~0.875rem
  sm: 'calc(var(--radius) - 4px)'   // ~0.75rem
}
```

**Upotreba:**
```tsx
<div className="rounded-lg">   {/* 1rem */}
<div className="rounded-2xl">  {/* 1rem */}
<div className="rounded-3xl">  {/* 1.5rem */}
```

---

## 🌈 Arbitrary Values (Custom Values)

Tailwind podržava arbitrary values za custom styling:

### Backgrounds
```tsx
<div className="bg-white/[0.03]"> {/* 3% white opacity */}
<div className="bg-black/40">     {/* 40% black opacity */}
```

### Grid Patterns
```tsx
<div className="bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem]">
```

### Blur Effects
```tsx
<div className="blur-[120px]">  {/* 120px blur */}
```

### Custom CSS Variables
```tsx
<div className="[--duration:160s] [--gap:2rem]">
```

---

## 🎯 Responsive Design

### Breakpoints
```typescript
screens: {
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1400px'  // Custom for this project
}
```

**Upotreba:**
```tsx
<div className="text-4xl md:text-6xl lg:text-8xl">
<div className="grid md:grid-cols-2 lg:grid-cols-3">
<div className="px-4 sm:px-8 lg:px-12">
```

---

## 🔌 Plugins

### tailwindcss-animate
Instaliran za animacije (accordion, marquee, itd.)

```typescript
plugins: [require("tailwindcss-animate")]
```

---

## 📝 Typography

### Font Family
```css
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
}
```

### Heading Defaults
```css
h1 { @apply text-6xl sm:text-7xl lg:text-8xl; font-weight: 900; }
h2 { @apply text-4xl sm:text-5xl lg:text-6xl; font-weight: 800; }
h3 { @apply text-2xl sm:text-3xl lg:text-4xl; font-weight: 700; }
```

### Text Balance
```css
.text-balance {
  text-wrap: balance;
}
```

**Upotreba:**
```tsx
<h1 className="text-balance">
  Balanced text wrapping
</h1>
```

---

## 🎨 Primeri Real-World Upotrebe

### Hero Section Card
```tsx
<div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all duration-300">
  <h2 className="text-5xl font-black text-white mb-4">
    Your Sports Club
  </h2>
  <span className="bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent">
    Simplified
  </span>
</div>
```

### Navigation
```tsx
<nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-white/10 z-50">
  <a className="nav-link">Features</a>
  <a className="nav-link">Pricing</a>
</nav>
```

### Contact Form Input
```tsx
<input
  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-200"
  type="text"
/>
```

### Testimonial Card
```tsx
<div className="p-10 rounded-3xl border border-primary/20 shadow-lg shadow-primary/10 bg-black/40 backdrop-blur-sm">
  <p className="text-gray-300">Amazing platform!</p>
</div>
```

---

## 🚀 Best Practices

### 1. Koristi CSS Variable System
```tsx
// ✅ Good
<div className="bg-primary text-primary-foreground">

// ❌ Avoid
<div className="bg-[#22c55e] text-black">
```

### 2. Koristi Opacity Utilities
```tsx
// ✅ Good
<div className="border-primary/20 bg-white/5">

// ❌ Avoid
<div className="border-[rgba(34,197,94,0.2)]">
```

### 3. Koristi Existing Custom Classes
```tsx
// ✅ Good
<div className="glass-card">

// ❌ Avoid
<div className="bg-gradient-to-br from-black/80 to-black/90 backdrop-blur-md border border-primary/20">
```

### 4. Mobile-First Design
```tsx
// ✅ Good
<div className="text-4xl md:text-6xl lg:text-8xl">

// ❌ Avoid
<div className="lg:text-4xl md:text-6xl text-8xl">
```

---

## 🔍 IntelliSense Setup

### VS Code
Instaliraj extension: **Tailwind CSS IntelliSense**

```json
{
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cn\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

---

## 📚 Korisni Linkovi

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Tailwind CSS Animate](https://github.com/jamiebuilds/tailwindcss-animate)

---

## 🎯 Quick Reference

### Najčešće Kombinacije

**Glass Card sa Hover:**
```tsx
className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all duration-300"
```

**Gradient Text:**
```tsx
className="bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent"
```

**Section Container:**
```tsx
className="py-32 relative overflow-hidden bg-black"
```

**Centered Content:**
```tsx
className="container px-4 mx-auto max-w-7xl"
```

**Button sa Icon:**
```tsx
className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-black font-semibold hover:bg-primary/90 transition-all"
```

---

Ovaj setup omogućava brz razvoj sa konzistentnim dizajnom kroz ceo projekat koristeći Tailwind utilities i custom komponente!
