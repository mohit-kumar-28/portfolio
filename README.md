# MOHIT KUMAR — 3D Developer & Data Engineering Portfolio

A production-ready, dark futuristic personal portfolio website for **MOHIT KUMAR** (B.Tech Computer Science & Engineering, Birla Institute of Technology, Mesra — Expected May 2027).

Combining **Software Development**, **Data Engineering**, **Backend Systems (FastAPI / PostgreSQL / pgvector)**, **Generative AI & RAG**, and **Algorithmic Metaheuristics (ACO / PSO / Genetic Algorithms)**.

---

## ✨ Features

- **Interactive 3D Tech Scene**: Custom Three.js & React Three Fiber scene featuring glowing database cylinders, rotating neural nodes, floating code fragments, upward data streams, and mouse parallax tracking.
- **Signature Data Flow Architecture**: Interactive visual conduit mapping `DATA → PIPELINE → DATABASE → AI → INSIGHTS` with live inspection.
- **Deep-Dive Project Showcase**: Large horizontal interactive cards with custom visualizers:
  - *Enterprise AI Assistant*: Documents → Sentence Transformers → pgvector Similarity Search → LLM Generation.
  - *InsightIQ*: Natural language AI querying to executable SQL and automated Streamlit KPI dashboards.
  - *Bank Transaction Analysis*: 50,000+ records dimensional modeling and fraud anomaly indicator engine.
  - *Real-Time Route Prediction*: Bangalore road network graph with ACO/PSO simulated path convergence (+20% efficiency).
  - *Traffic Light Optimization*: Dynamic signal scheduler using Priority Queues, Genetic Algorithms & PSO (-25%+ congestion).
- **Interactive Project Modals**: Deep-dive architecture diagrams, problem/solution breakdowns, verified CV metrics, and source code links.
- **Work Experience & Live CV Safety Visualizer**: Tata Motors Industrial Safety Monitoring internship featuring real-time YOLOv11 & OpenCV PPE detection simulation.
- **Engineering Impact Matrix**: Verified performance metrics and benchmarks.
- **Interactive Skill Matrix**: Categorized tech stack with live category filter pills and hover glow.
- **Desktop Magnetic Cursor**: Smooth cursor follower with magnetic spring feedback over interactive elements (automatically disabled on mobile/touch).
- **Responsive & Accessible**: Works across 360px up to 4K displays, with full support for `prefers-reduced-motion` and graceful WebGL fallbacks.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **3D & Graphics**: Three.js, `@react-three/fiber`, `@react-three/drei`
- **Styling**: Tailwind CSS, Custom CSS Variables, Glassmorphism design tokens
- **Icons & Motion**: Lucide React, CSS keyframes, Canvas micro-animations
- **Deployment**: Ready for Vercel & Netlify

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server 
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📂 Project Architecture

```
portfolio/
├── public/
│   ├── favicon.svg                 # Glowing MK cyber monogram
│   ├── robots.txt                  # Search engine crawlers config
│   └── sitemap.xml                 # SEO sitemap
├── src/
│   ├── components/
│   │   ├── 3D/                     # Hero 3D scene, visualizers & fallback
│   │   ├── Navbar/                 # Floating glassmorphic header
│   │   ├── Hero/                   # Main intro, animated roles & CTAs
│   │   ├── About/                  # Engineering bio & Data Flow visualizer
│   │   ├── WhatIBuild/             # 4 core specialization cards
│   │   ├── Skills/                 # Categorized technical matrix
│   │   ├── Impact/                 # Verified numerical impact metrics
│   │   ├── Projects/               # Featured projects & detail modal
│   │   ├── Experience/             # Tata Motors timeline & safety visualizer
│   │   ├── Leadership/             # Abhivyakti & Robotics societies
│   │   ├── Education/              # BIT Mesra B.Tech CSE details
│   │   ├── Contact/                # Interactive validated contact form
│   │   ├── Footer/                 # Branded footer & quick links
│   │   └── UI/                     # Cursor, glow cards, background grids
│   ├── data/
│   │   ├── portfolio.ts            # Central source of truth for all content
│   │   └── types.ts                # TypeScript data interfaces
│   ├── hooks/                      # Scroll spy, media query & reduced motion
│   ├── styles/                     # Tailwind & custom CSS design tokens
│   ├── App.tsx                     # Main layout assembly
│   └── main.tsx                    # React entry point
└── tailwind.config.js              # Theme color tokens & animations
```

---

## 📝 Customization Guide

### Editing Portfolio Data
All personal details, projects, skills, experience, and links are centralized in:
👉 `src/data/portfolio.ts`

You can update your projects, add new certifications, or change social links without touching any UI component code.

---

## 🌐 Deployment

### Deploy to Vercel
1. Push this repository to your GitHub account.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your repository. The default build settings (`npm run build`, output directory `dist`) will work out of the box.

### Deploy to Netlify
1. Connect your repository on [Netlify](https://www.netlify.com/).
2. Set Build command: `npm run build`
3. Set Publish directory: `dist`
4. Deploy!

---

## 📄 License & Copyright
© 2026 Mohit Kumar. All rights reserved.
