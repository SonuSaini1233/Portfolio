export const PERSONAL_INFO = {
  name: "Sonu Saini",
  title: "BCA Student | Developer | Problem Solver",
  headline: "I build web experiences, solve real problems and keep learning every day. Welcome to my portfolio!",
  secondaryLine: "Focused on backend development, full-stack projects, and problem-solving in C++.",
  email: "sonusaini10102008@gmail.com",
  github: "https://github.com/SonuSaini1233",
  linkedin: "https://www.linkedin.com/in/sonusaini123/",
  leetcode: "https://leetcode.com/u/sonusaini123/",
  resumeUrl: "/resume.pdf",
  education: {
    degree: "BCA",
    institution: "Jaipur National University",
    year: "Second Year",
    graduation: "2028",
    school: "Bhagwati Senior Secondary School",
    schoolStream: "PCM (89%)",
    schoolYears: "2023 — 2025",
  },
  portrait: "/sonu-portrait.png",
  splineScene: "https://prod.spline.design/0oDupUjeZGI8zBxt/scene.splinecode",
};

export const ABOUT_TEXT = {
  story: [
    "I became curious about how apps and websites work when I was a teenager. Discovering coding helped me turn that curiosity into a goal: becoming a software engineer.",
    "I am pursuing a BCA at Jaipur National University, building web applications, and strengthening my problem-solving skills with C++. Getting stuck can be frustrating, but I remind myself that this is the future I chose."
  ],
  facts: [
    { label: "Degree", value: "BCA (2nd Year)" },
    { label: "University", value: "Jaipur National University" },
    { label: "Schooling", value: "Bhagwati Sr. Sec. School (PCM 89%)" },
    { label: "Expected Graduation", value: "2028" },
    { label: "Core Focus", value: "Backend Development & C++ DSA" },
  ]
};

export const PROJECTS = [
  {
    id: "syncfile",
    title: "SyncFile",
    featured: true,
    tagline: "Cross-Device File Access",
    description: "A file-access application designed to help users access and transfer files across devices.",
    liveUrl: "https://sync-file-chi.vercel.app",
    githubUrl: "https://github.com/SonuSaini1233/SyncFile",
    tech: ["React", "Node.js", "Express.js", "Firebase Auth", "Vite"],
    caseStudy: {
      problem: "Moving files between computers and mobile devices often requires flash drives or logging into personal accounts on public or lab terminals.",
      solution: "A web utility combining a React client with an Express server and Firebase authentication for direct, sign-in-free destination file accessibility.",
      features: [
        "Cross-device file transfer without signed-in destination device",
        "Firebase-based authentication and user session control",
        "Node.js and Express REST endpoints managing file routing",
        "Responsive interface built with Vite and React"
      ],
      learnings: "Working with file upload streams, coordinating frontend state with Firebase auth tokens, and handling timeout edge cases."
    }
  },
  {
    id: "paste-app",
    title: "Paste App",
    featured: false,
    tagline: "Notes Management Utility",
    description: "A simple notes application with read, write, update, and delete operations.",
    liveUrl: "https://paste-app-psi-eight.vercel.app/",
    githubUrl: "https://github.com/SonuSaini1233/pasteApp",
    tech: ["React", "JavaScript", "Vite"],
    caseStudy: {
      problem: "Quickly capturing and organizing scratchpad notes, code snippets, and text without complex software overhead.",
      solution: "A lightweight dashboard providing responsive CRUD actions and client-side persistence for immediate note capture.",
      features: [
        "Create, read, update, and delete notes",
        "One-click text copy and snippet management",
        "Search and filter across stored entries"
      ],
      learnings: "Managing component state efficiently and implementing clipboard integration."
    }
  },
  {
    id: "cropzora",
    title: "Cropzora",
    featured: false,
    tagline: "Agricultural Assistant",
    description: "An agriculture-focused application offering weather reports and a leaf-disease detection feature.",
    liveUrl: "https://cropzora.vercel.app/",
    githubUrl: "https://github.com/SonuSaini1233/cropzora",
    tech: ["React", "JavaScript", "Weather API"],
    caseStudy: {
      problem: "Providing farmers with direct access to local meteorological forecasts and initial visual leaf inspection in one accessible interface.",
      solution: "A targeted web app combining third-party weather feeds with a photo upload workflow for crop disease identification.",
      features: [
        "Real-time local weather reports and forecasts",
        "Leaf image upload workflow for visual inspection",
        "Clean, high-contrast interface designed for mobile accessibility"
      ],
      learnings: "Integrating third-party APIs with asynchronous data handling and designing accessible layouts for non-technical users."
    }
  }
];

export const SKILLS_DATA = [
  {
    category: "Programming",
    items: ["C", "C++", "Java (currently learning)"]
  },
  {
    category: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js"]
  },
  {
    category: "Databases & Services",
    items: ["MongoDB", "MySQL", "Firebase"]
  },
  {
    category: "Developer Tools",
    items: ["VS Code", "GitHub", "IntelliJ IDEA", "Postman"]
  },
  {
    category: "Problem-Solving",
    items: ["Data Structures & Algorithms in C++"]
  }
];

export const JOURNEY_ENTRIES = [
  {
    id: "bca",
    period: "2024 — 2028",
    title: "BCA — Jaipur National University",
    subtitle: "Undergraduate Degree · Second Year",
    category: "Education",
    badge: "Undergraduate",
    highlight: "Core Academic Foundation",
    description: "Pursuing Bachelor of Computer Applications. Hands-on coursework in Data Structures, Object-Oriented Programming (C++), Operating Systems, and modern full-stack web engineering.",
  },
  {
    id: "school",
    period: "2023 — 2025",
    title: "Bhagwati Senior Secondary School",
    subtitle: "Higher Secondary (12th Grade) · PCM",
    grade: "PCM (89%)",
    category: "Education",
    badge: "Schooling",
    highlight: "Score: 89% in PCM",
    description: "Completed Senior Secondary education with 89% in Physics, Chemistry, and Mathematics (PCM). Built strong analytical reasoning, problem deduction, and mathematical intuition that formed the basis for software development.",
  },
  {
    id: "sih",
    period: "2026",
    title: "Smart India Hackathon (SIH)",
    subtitle: "National Level Hackathon · Team Participant",
    category: "Hackathons",
    badge: "Hackathon",
    highlight: "Backend & System APIs",
    description: "Collaborated on problem statements and handled backend architecture, REST API routing, database schema design, and asynchronous endpoint integration.",
  },
  {
    id: "azure",
    period: "Workshop",
    title: "Microsoft Azure Cloud Workshop",
    subtitle: "Hands-on Cloud Infrastructure",
    category: "Workshops",
    badge: "Cloud & DevOps",
    highlight: "Cloud Virtualization",
    description: "Explored cloud fundamentals, virtual machine provisioning, blob storage mechanisms, and the deployment of AI-powered cloud APIs.",
  },
  {
    id: "ctf",
    period: "Extracurricular",
    title: "Capture the Flag (CTF)",
    subtitle: "Cybersecurity & Deductive Logic Challenges",
    category: "Competitions",
    badge: "Cybersecurity",
    highlight: "Algorithmic Puzzles",
    description: "Participated in logic deduction puzzles, cryptographic challenges, and vulnerability discovery focusing on foundational security principles.",
  },
  {
    id: "cyclothon",
    period: "Sports",
    title: "Institutional Cyclothon",
    subtitle: "Campus Athletics & Endurance",
    category: "Athletics",
    badge: "Endurance",
    highlight: "Health & Discipline",
    description: "Participated in campus endurance athletic event promoting community, personal stamina, focus, and sustained discipline.",
  }
];
