# Sonu Saini — Personal Developer Portfolio

An editorial, dark-themed personal developer portfolio built with **React**, **Vite**, and **Tailwind CSS**. Designed with an emphasis on intentional typography, negative space, authentic content, and real project evidence.

---

## ✦ Design & Editorial Direction

- **Interactive 3D Robot Hero**: Integrates the viral cursor-tracking 3D robot scene (`https://prod.spline.design/0oDupUjeZGI8zBxt/scene.splinecode`) via `@splinetool/react-spline` that tracks mouse movements across the screen with drag & touch rotation.
- **Framer Motion Landing Animation**: Staggered blur-fade text reveal, floating background light orbs, animated status pill, and spring button interactions.
- **Content Restraint**: Eliminates generic AI badges ("ACTIVE", "LIVE APP", "BEHIND THE CODE", fake status dots, decorative code widgets).
- **Featured Project (SyncFile)**: Prominent flagship showcase with a dedicated architectural preview and accessible case-study dialog.
- **Complementary Projects**: Asymmetric presentation of **Paste App** (Notes CRUD utility) and **Cropzora** (AgriTech weather & leaf inspection tool).
- **Concise About Section**: Honest narrative focusing on curiosity, current BCA studies at Jaipur National University, and problem-solving with C++.
- **Structured Skills Grid**: Categorized without artificial percentage bars or fabricated experience claims.
- **Journey & Academics**: Documented timeline of BCA studies, Smart India Hackathon (SIH) 2026 backend teamwork, Azure workshop, CTF, and Cyclothon.
- **LeetCode & Problem Solving**: Integrated link to LeetCode profile (`@sonusaini123`) emphasizing C++ DSA practice.
- **Direct Contact**: Direct email with one-click copy feedback, working message form, and links to GitHub, LinkedIn, and LeetCode.

---

## 🚀 Running the Project Locally

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build

# 4. Run linter
npm run lint
```

Dev server will be available at: `http://localhost:5173/`

---

## 📁 Directory Structure

```
portfolio/
├── public/
│   ├── sonu-portrait.png          # High-resolution monochrome portrait used in the hero
│   └── resume.pdf                 # Resume file served securely via relative URL
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Minimalist top navigation & mobile drawer
│   │   ├── Hero.jsx               # Cinematic hero with portrait background
│   │   ├── FeaturedProject.jsx    # Flagship SyncFile showcase
│   │   ├── OtherProjects.jsx      # Paste App & Cropzora cards
│   │   ├── ProjectsSection.jsx    # Projects controller
│   │   ├── ProjectModal.jsx       # Accessible case-study dialog
│   │   ├── AboutSection.jsx       # Personal narrative & profile snapshot
│   │   ├── SkillsSection.jsx      # Structured skill categories & learning notes
│   │   ├── EducationSection.jsx   # Journey, academic timeline & LeetCode link
│   │   ├── ContactSection.jsx     # Direct email copy, profiles & message form
│   │   ├── Footer.jsx             # Understated footer with section links
│   │   └── Icons.jsx              # Custom SVG icons (GitHub, LinkedIn, LeetCode)
│   ├── data/
│   │   └── portfolioData.js       # Central data store for all portfolio content
│   ├── App.jsx                    # Root page layout
│   ├── index.css                  # Tailored typography, dark backgrounds & vignettes
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## ✏️ Customizing Content

All copy, project URLs, and details are kept in one place:
👉 [`src/data/portfolioData.js`](file:///c:/Users/user/OneDrive/Desktop/portfolio/src/data/portfolioData.js)
