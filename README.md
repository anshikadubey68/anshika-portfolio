# Anshika Dubey — 3D Interactive Developer Portfolio

An Awwwards-inspired, high-performance 3D interactive portfolio designed and engineered for **Anshika Dubey** — Computer Science & Engineering Student, Full Stack Developer, and AI/ML Enthusiast.

Built with **React**, **Vite**, **Three.js**, and **Tailwind CSS v4**, featuring real-time WebGL interactions, editorial typography, animated simulations, and fluid micro-interactions.

---

## ✨ Key Features & Architectural Highlights

- **3D WebGL Hero Canvas (`HeroScene3D.jsx`)**:
  - Interactive dual-layer crystalline icosahedron with procedural glowing wireframe and orbital rings.
  - 750+ particle constellation with subtle orbital velocity.
  - Dynamic mouse tracking, drag-to-rotate inertia, and scroll-based camera parallax.
  - Pauses render loop when scrolled off-screen via `IntersectionObserver` for battery and GPU optimization.

- **Cinematic Preloader (`Preloader.jsx`)**:
  - High-tech system telemetry initialization logs and percentage counter under 2 seconds.
  - Smooth shutter reveal transition into the hero scene.

- **Custom Interactive Spring Cursor (`CustomCursor.jsx`)**:
  - Smooth spring-damped follower with contextual cursor badges (`"VIEW PROJECT →"`, `"DRAG 3D"`, `"COPY EMAIL"`).
  - Automatically disables on touch and mobile devices for native fluid touch interaction.

- **Full-Width Case Studies with Interactive Simulations (`Projects.jsx`)**:
  - **Smart Traffic Signal Control System**: Interactive C++ graph simulation demonstrating Dijkstra's shortest path, BFS traversal, and dynamic 15s–45s traffic signal timings.
  - **Automated Stream Changeover — Flow Metering System**: Industrial IIoT dashboard showing 4 parallel streams with a live "Simulate Fault" trigger demonstrating the sub-50ms automated failover state machine.
  - **AgroBot AI Multilingual Crop Disease Detection**: Deep learning leaf diagnostic scanner with animated laser inspection, CNN 15-class confidence scores, and real-time 6-language switcher (English, Hindi, Punjabi, Bengali, Marathi, Tamil).

- **Animated Statistics Count-Up (`About.jsx`)**:
  - 8.93 B.Tech CGPA (Lovely Professional University), 3+ Major Projects, 6 Supported Languages, 15 Foliar Classes.

- **Interactive Skills Arsenal (`Skills.jsx`)**:
  - Filterable matrix across Languages, Web Development, AI/ML & Data, and Databases & Tools.

- **Timeline Experience & Academic Foundation (`Experience.jsx`, `Education.jsx`)**:
  - Infosys Springboard AI Intern timeline and Lovely Professional University academic highlights.

- **Dramatic Contact Suite (`Contact.jsx`)**:
  - "Click to Copy Email" with celebratory confetti particles and visual toast feedback.
  - Instant note dispatcher form and direct social access cards.

- **Live IST Clock (`Footer.jsx`)**:
  - Real-time India Standard Time (IST) clock with live seconds.

---

## 🛠️ Modifying Portfolio Content (Zero React Knowledge Required!)

All personal information, project summaries, skills, experience, education, achievements, and social links are centralized in a single configuration file:

📁 **`src/data/portfolio.js`**

To customize:
1. Open [`src/data/portfolio.js`](file:///c:/Users/Lenovo/Downloads/Anshika-Portfolio/src/data/portfolio.js).
2. Edit any text, link, metric, project, or certificate directly.
3. Save the file — the changes will update instantly on the website!

---

## 🚀 Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deploying to Vercel (1-Click Deployment)

This repository is optimized for zero-configuration deployment on **Vercel**:

1. Push this project to your GitHub account:
   ```bash
   git add .
   git commit -m "feat: complete modern 3D interactive portfolio for Anshika Dubey"
   git branch -M main
   git push -u origin main
   ```
2. Go to [Vercel Dashboard](https://vercel.com).
3. Click **"Add New Project"** and select your GitHub repository `Anshika-Portfolio`.
4. Leave settings as default:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **"Deploy"**. Your portfolio will be live worldwide in under 1 minute!

---

## 📦 Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4 + Custom Modern CSS Design Tokens
- **3D Graphics & Shaders**: Three.js WebGL
- **Icons**: Lucide React + Custom SVG Icons
- **Interactive Effects**: Canvas Confetti
- **Typography**: Syne, Space Grotesk, Plus Jakarta Sans, JetBrains Mono

