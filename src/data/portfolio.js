/**
 * =========================================================================
 * PORTFOLIO DATA CONFIGURATION
 * =========================================================================
 * All personal information, projects, skills, education, and credentials
 * are centralized in this file. Edit values here to update the website content
 * without touching any UI code or React components.
 * =========================================================================
 */

export const personalInfo = {
  name: "Anshika Dubey",
  firstName: "Anshika",
  lastName: "Dubey",
  initials: "AD",
  role: "Computer Science & Engineering Student | Full Stack Developer | AI/ML Enthusiast",
  shortRole: "Full Stack Developer • AI/ML",
  profileImage: "/profile.png",
  location: "India",
  timezone: "Asia/Kolkata",
  email: "anshikadubey68@gmail.com",
  github: "https://github.com/anshikadubey68",
  linkedin: "https://www.linkedin.com/in/anshikadubey",
  resumeUrl: "#contact",
  availability: {
    status: "OPEN TO OPPORTUNITIES",
    active: true,
    detail: "Available for Internships, SWE Roles & High-Impact Projects",
  },
  hero: {
    badge: "PORTFOLIO // 2026 ARCHIVE",
    greeting: "HELLO WORLD, I AM",
    title: "ANSHIKA DUBEY",
    tagline: "BUILDING DIGITAL EXPERIENCES THAT THINK.",
    subhead:
      "Computer Science & Engineering undergraduate at Lovely Professional University focused on full-stack architecture, graph algorithms, applied AI/ML systems, and crafting responsive, high-performance digital products.",
    ctaPrimary: "EXPLORE SELECTED WORK",
    ctaSecondary: "LET'S CONNECT",
  },
  about: {
    statement: "I DON'T JUST WRITE CODE. I BUILD EXPERIENCES.",
    leadParagraph:
      "I am a Computer Science & Engineering undergraduate at Lovely Professional University (8.93 CGPA) passionate about engineering software that operates at the intersection of deep algorithmic rigor, resilient backend architectures, and applied artificial intelligence.",
    storyParagraph1:
      "My journey in computer science began with algorithmic problem solving — dissecting graph theory, discrete data structures, and asymptotic optimizations in C++. That foundational discipline taught me to look beyond surface-level code and analyze system complexity from memory layouts and cache locality to time complexities.",
    storyParagraph2:
      "As my curiosity expanded into full-stack engineering, I began architecting distributed platforms that handle real-time concurrency. From engineering industrial IoT dashboards with sub-50ms automated failover mechanisms to constructing secure session management with scrypt and OTP verification, I prioritize reliability, low latency, and zero-downtime fault tolerance.",
    storyParagraph3:
      "During my AI internship at Infosys Springboard, I spearheaded AgroBot — an intelligent agricultural assistant uniting Convolutional Neural Networks (CNNs) for foliar crop disease classification across 15 distinct classes with fuzzy semantic parsing in 6 languages. I believe applied AI should be democratic, accessible, and solve pressing real-world challenges.",
    storyParagraph4:
      "Today, I enjoy taking an idea from a clear problem statement to a polished, usable product: defining the data flow, choosing the right algorithms, designing calm interfaces, and measuring what matters after launch. I am especially interested in teams where thoughtful engineering can make complex technology feel simple and dependable for people.",

    pillars: [
      {
        number: "01",
        title: "Algorithmic & Graph Systems",
        tag: "C++ • DSA • Graph Theory",
        description:
          "Specializing in directed graph representations, Dijkstra's shortest-path with priority queues, BFS/DFS topological traversal, and complexity minimization. Proven ability to design custom heuristics for dynamic network routing.",
        metrics: "O(V + E) Traversals • Memory Safe",
      },
      {
        number: "02",
        title: "Mission-Critical Full Stack",
        tag: "Node.js • React • Express • MongoDB",
        description:
          "Designing high-throughput microservices, real-time WebSocket/REST telemetry ingestion, finite state machines for automated fault recovery (<50ms), and enterprise auth pipelines (scrypt, HTTP-only cookies, OTP).",
        metrics: "Sub-50ms Failovers • 98.5% Downtime Cut",
      },
      {
        number: "03",
        title: "Applied AI, Vision & NLP",
        tag: "TensorFlow • Keras • CNN • RapidFuzz",
        description:
          "Developing end-to-end deep learning pipelines: Convolutional Neural Network architectures for multi-class image diagnostics, transfer learning, fuzzy colloquial token matching, and low-latency Flask edge inference.",
        metrics: "15 Disease Classes • 6 Dialects",
      },
      {
        number: "04",
        title: "Spatial & Creative Engineering",
        tag: "WebGL • Three.js • Modern CSS",
        description:
          "Bridging visual craft with technical engineering. Crafting immersive 3D WebGL canvases, interactive perspective physics, fluid spring damping, and accessible editorial typography that makes software feel memorable.",
        metrics: "60-120 FPS • Sub-Second TTI",
      },
    ],

    principles: [
      {
        title: "Deterministic Over Ambiguous",
        desc: "I architect software with mathematically provable state machines and explicit error boundaries rather than relying on happy-path assumptions.",
      },
      {
        title: "Latency & Efficiency Obsessed",
        desc: "From query indexing and memory allocations in C++ to client-side GPU shader rendering, performance is treated as a foundational feature.",
      },
      {
        title: "Human-Centric Real Utility",
        desc: "I build technology that solves tangible societal problems — whether optimizing city traffic signals or empowering multilingual farmers with AI.",
      },
    ],

    stats: [
      {
        value: "8.93",
        numericValue: 8.93,
        decimals: 2,
        label: "B.Tech CGPA",
        caption: "Lovely Professional University",
      },
      {
        value: "3+",
        numericValue: 3,
        decimals: 0,
        suffix: "+",
        label: "Major Systems Built",
        caption: "Architected end-to-end",
      },
      {
        value: "6",
        numericValue: 6,
        decimals: 0,
        label: "Languages in AgroBot",
        caption: "Multilingual Agricultural AI",
      },
      {
        value: "15",
        numericValue: 15,
        decimals: 0,
        label: "Disease/Healthy Classes",
        caption: "Deep Learning CNN Model",
      },
    ],
  },
};

export const skillsData = {
  categories: [
    {
      id: "languages",
      title: "LANGUAGES",
      tagline: "Core engineering, computational syntax & structured querying",
      color: "cyan",
      skills: [
        { name: "C", level: "Advanced", desc: "System concepts & memory primitives" },
        { name: "C++", level: "Advanced", desc: "STL, Graphs, OOP & Shortest-path DSA" },
        { name: "Python", level: "Advanced", desc: "Scientific computing, AI/ML & Flask APIs" },
        { name: "Java", level: "Proficient", desc: "Object-oriented programming & core patterns" },
        { name: "JavaScript", level: "Advanced", desc: "ES6+, Async I/O, Node & DOM engines" },
        { name: "TypeScript", level: "Proficient", desc: "Type safety, generics & enterprise interfaces" },
        { name: "SQL", level: "Advanced", desc: "Complex queries, indexing & schema normalization" },
      ],
    },
    {
      id: "web",
      title: "WEB DEVELOPMENT",
      tagline: "Full-stack application frameworks, reactive UI & high-throughput APIs",
      color: "violet",
      skills: [
        { name: "React.js", level: "Advanced", desc: "Hooks, state management & reactive architecture" },
        { name: "Next.js", level: "Proficient", desc: "SSR, static generation & route handlers" },
        { name: "Node.js", level: "Advanced", desc: "Event-driven runtime & asynchronous services" },
        { name: "Express.js", level: "Advanced", desc: "RESTful architecture, middleware & routing" },
        { name: "Flask", level: "Proficient", desc: "Python microframework for AI inference APIs" },
        { name: "REST APIs", level: "Advanced", desc: "Stateless microservices, rate-limiting & auth" },
        { name: "HTML5 / CSS3", level: "Expert", desc: "Semantic markup, CSS Grid & modern layouts" },
        { name: "Tailwind CSS", level: "Advanced", desc: "Design systems & responsive utility classes" },
      ],
    },
    {
      id: "ai-ml",
      title: "AI / ML & DATA",
      tagline: "Deep neural networks, computer vision, NLP & algorithmic analysis",
      color: "emerald",
      skills: [
        { name: "TensorFlow", level: "Proficient", desc: "Deep learning models & computational graphs" },
        { name: "Keras", level: "Proficient", desc: "High-level neural layer pipelines & transfers" },
        { name: "CNN", level: "Proficient", desc: "Convolutional layers for image classification" },
        { name: "Scikit-learn", level: "Proficient", desc: "Regression, clustering & decision trees" },
        { name: "NumPy", level: "Advanced", desc: "Vectorized linear algebra & matrix arithmetic" },
        { name: "Pandas", level: "Advanced", desc: "Data wrangling, sanitization & analysis" },
        { name: "Matplotlib", level: "Proficient", desc: "Telemetry charts & analytical visualizations" },
        { name: "NLP", level: "Proficient", desc: "Fuzzy text matching, RapidFuzz & tokenization" },
      ],
    },
    {
      id: "tools",
      title: "DATABASES & TOOLS",
      tagline: "Storage engines, distributed version control & DevOps workflows",
      color: "amber",
      skills: [
        { name: "MongoDB", level: "Advanced", desc: "Document database, aggregation pipelines" },
        { name: "MySQL", level: "Advanced", desc: "Relational constraints, joins & ACID compliance" },
        { name: "Git", level: "Advanced", desc: "Branching workflows, rebase & commit hygiene" },
        { name: "GitHub", level: "Advanced", desc: "CI/CD actions, open source & code review" },
        { name: "VS Code", level: "Expert", desc: "Debugging, extensions & workspace tuning" },
      ],
    },
  ],
};

export const projectsData = [
  {
    id: "traffic-control",
    displayTitle: "Smart Traffic Signal Control",
    overview: "A graph-based system for responsive urban routing.",
    brief: "I modelled the road network as a weighted graph and used live density to identify efficient paths and signal windows.",
    outcomes: [
      "Mapped 6 intersections and 8+ road segments as a weighted graph.",
      "Used BFS, DFS, and Dijkstra's algorithm for routing and connectivity checks.",
      "Adjusted signal windows from 15 to 45 seconds based on queue pressure.",
    ],
    number: "01",
    featuredBadge: "ALGORITHMS & NETWORKS",
    title: "Smart Traffic Signal Control System",
    subtitle: "Graph-based dynamic traffic routing & congestion-adaptive signal orchestration",
    timeframe: "June 2026 – July 2026",
    role: "Algorithm & Systems Developer",
    tech: ["C++", "DSA", "Graphs", "BFS", "DFS", "Dijkstra's Algorithm", "OOP"],
    summary:
      "Modeled a city's road network as a directed weighted graph with 6 strategic intersections and 8+ interconnecting roads. Implemented BFS, DFS, and Dijkstra's algorithm for network traversal, connectivity checks, and real-time shortest-route computation.",
    description:
      "Integrated linear search and selection sort algorithms to analyze live road density, automatically computing optimal green-signal windows between 15 and 45 seconds based on vehicular queue pressure, minimizing gridlock and vehicle idle emissions.",
    highlights: [
      "Modeled road infrastructure as a weighted graph with 6 intersections and 8+ dynamic road segments",
      "Engineered Breadth-First Search (BFS) and Depth-First Search (DFS) for connectivity auditing",
      "Implemented Dijkstra's algorithm with priority queues for real-time shortest path computation",
      "Dynamic traffic-density heuristics calculate green-signal duration dynamically from 15s to 45s",
      "Pure C++ implementation emphasizing modular OOP structure and minimal computational overhead",
    ],
    metrics: [
      { label: "Intersections", value: "6 Nodes" },
      { label: "Road Segments", value: "8+ Weighted Edges" },
      { label: "Signal Range", value: "15s — 45s Dynamic" },
      { label: "Traversal Complexity", value: "O(V + E) BFS/DFS" },
    ],
    demoType: "traffic-graph",
    githubUrl: "https://github.com/anshikadubey68",
    liveUrl: null,
    accentColor: "#00f0ff",
  },
  {
    id: "stream-changeover",
    displayTitle: "Automated Stream Changeover",
    overview: "Industrial telemetry with automated fault recovery.",
    brief: "A dashboard that detects irregularities across pipeline streams and activates safe, automated flow redirection.",
    outcomes: [
      "Monitored 4 parallel streams with a 2-second telemetry refresh.",
      "Built a failover state machine that responds in under 50 milliseconds.",
      "Added secure sessions, OTP verification, and HTTP-only cookies.",
    ],
    number: "02",
    featuredBadge: "FULL STACK & IIOT",
    title: "Automated Stream Changeover — Flow Metering System",
    subtitle: "Mission-critical industrial stream telemetry with sub-50ms automated failover",
    timeframe: "March 2026 – May 2026",
    role: "Full Stack Engineer & System Architect",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "REST APIs",
      "scrypt Hashing",
      "OTP Auth",
      "HTTP-only Cookies",
      "Render",
    ],
    summary:
      "Engineered an industrial IoT (IIoT) control dashboard that continuously ingests telemetry across 4 parallel pipeline streams with 2-second real-time refresh intervals, providing operators with actionable situational awareness.",
    description:
      "Designed an automated failover finite state machine that instantly identifies sensor irregularities, pressure drops, or pipe blockages and executes seamless valve redirecting in under 50ms, drastically cutting manual intervention time from 3–5 minutes to near-zero downtime.",
    highlights: [
      "Real-time ingestion and telemetry monitoring of 4 parallel streams with 2-second interval polling",
      "Automated state machine executing stream failover within <50ms upon fault detection",
      "Reduced plant manual intervention time from 3–5 minutes down to milliseconds",
      "Enterprise security: scrypt password hashing, session tokens, and secure HTTP-only cookies",
      "Two-factor verification via 4-digit OTP authentication with automatic 10-minute expiry windows",
    ],
    metrics: [
      { label: "Parallel Streams", value: "4 Pipeline Lines" },
      { label: "Telemetry Polling", value: "2s Refresh Cycle" },
      { label: "Failover Response", value: "< 50ms Auto State" },
      { label: "Downtime Reduction", value: "98.5% Cut" },
    ],
    demoType: "pipeline-flow",
    githubUrl: "https://github.com/anshikadubey68",
    liveUrl: null,
    accentColor: "#818cf8",
  },
  {
    id: "agrobot",
    displayTitle: "AgroBot",
    overview: "Multilingual crop-disease guidance powered by AI.",
    brief: "A farmer-focused assistant that pairs crop-image classification with fuzzy multilingual symptom search.",
    outcomes: [
      "Classified healthy and diseased crops across 15 image classes.",
      "Supported symptom queries in 6 regional languages.",
      "Delivered farmer and administrator workflows through a Flask API.",
    ],
    number: "03",
    featuredBadge: "AI & COMPUTER VISION",
    title: "AgroBot — AI Multilingual Crop Disease Detection",
    subtitle: "Deep learning computer vision assistant diagnosing 15 crop disease classes across 6 languages",
    timeframe: "Aug 2025 – Oct 2025",
    role: "AI Developer (Infosys Springboard)",
    tech: [
      "Python",
      "Flask",
      "TensorFlow",
      "Keras",
      "CNN",
      "RapidFuzz",
      "NumPy",
      "Pandas",
      "Multilingual NLP",
    ],
    summary:
      "Developed an AI-driven agricultural assistant for farmers, combining computer vision image recognition with multilingual natural language interaction to identify foliar crop infections and recommend immediate remediation steps.",
    description:
      "Integrated a Convolutional Neural Network (CNN) trained across 15 healthy and diseased crop classes. Augmented with RapidFuzz for fuzzy symptom queries, supporting 6 regional languages and segregated Farmer / Administrator access controls.",
    highlights: [
      "Engineered a Convolutional Neural Network (CNN) image classification pipeline covering 15 disease/healthy classes",
      "Fuzzy query matching via RapidFuzz allowing farmers to report descriptive symptoms colloquially",
      "Multilingual processing supporting 6 languages with automated dialect detection and audio/text guidance",
      "Architected segregated Farmer consultation view and Admin dataset curation modules with dynamic JSON schemas",
      "Deployed via lightweight Flask REST API endpoints optimized for low-latency edge inference",
    ],
    metrics: [
      { label: "Diagnostic Classes", value: "15 Foliar Classes" },
      { label: "Supported Dialects", value: "6 Regional Languages" },
      { label: "Inference Latency", value: "< 120ms Classification" },
      { label: "Role Portals", value: "Farmer & Admin Tiers" },
    ],
    demoType: "ai-scanner",
    githubUrl: "https://github.com/anshikadubey68",
    liveUrl: null,
    accentColor: "#10b981",
  },
];

export const experienceData = [
  {
    period: "Aug 2025 – Oct 2025",
    year: "2025",
    company: "Infosys Springboard",
    role: "AI Intern",
    location: "Virtual / Bengaluru, India",
    projectFocus: "AgroBot: AI-Based Multilingual Crop Disease Detection System",
    description:
      "Spearheaded development of an AI-powered agricultural diagnosis pipeline combining deep learning computer vision with fuzzy NLP text search to serve multilingual farming communities.",
    responsibilities: [
      "Implemented Convolutional Neural Network (CNN) architecture trained on agricultural leaf disease datasets across 15 distinct pathological classes.",
      "Integrated RapidFuzz tokenization to parse colloquial symptom descriptions submitted by farmers.",
      "Developed an internationalization pipeline accommodating 6 regional languages with dynamic translation layers.",
      "Architected role-based dashboards: Farmer consultation frontend and Administrative dataset curation suite in Flask.",
    ],
    techStack: ["Python", "Flask", "TensorFlow", "Keras", "CNN", "RapidFuzz", "NumPy", "Pandas"],
  },
];

export const educationData = [
  {
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology — Computer Science and Engineering",
    period: "2024 — Present",
    grade: "CGPA: 8.93 / 10.0",
    badge: "Top Academic Standing",
    location: "Punjab, India",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (C++ / Java)",
      "Database Management Systems & SQL",
      "Operating Systems & Process Schedulers",
      "Artificial Intelligence & Machine Learning",
      "Computer Networks & Web Systems",
    ],
    description:
      "Pursuing a rigorous curriculum centered around computer science principles, algorithmic optimization, distributed systems, and cutting-edge machine learning methodologies.",
  },
];

export const achievementsData = [
  {
    id: "hackathon",
    number: "01",
    title: "Qualified for Round 2 — Build-a-thon 2.0 Hackathon",
    issuer: "Board Infinity",
    category: "Hackathon & Problem Solving",
    highlight: "Advanced into competitive Round 2 among hundreds of collegiate engineering teams.",
    description: "Proposed and engineered innovative software solutions evaluated on algorithmic efficiency, design elegance, and product viability.",
  },
  {
    id: "hackerrank",
    number: "02",
    title: "2x HackerRank Bronze Badges in C++ & Python",
    issuer: "HackerRank",
    category: "Coding Proficiency",
    highlight: "Demonstrated data structures, syntax mastery, and problem-solving agility.",
    description: "Consistently solved algorithmic challenges across memory management, graph theory, strings, and recursion.",
  },
  {
    id: "dance",
    number: "03",
    title: "4th Position — FTS Dance Finale",
    issuer: "Lovely Professional University",
    category: "Creative Leadership & Co-Curricular",
    highlight: "Secured 4th Place among 300+ talented university participants.",
    description: "Demonstrated creative expression, disciplined stage choreography, performance endurance, and collaborative teamwork.",
  },
];

export const certificationsData = [
  {
    title: "Database Management System Part – 1",
    issuer: "Infosys Springboard",
    date: "July 2026",
    id: "INF-DBMS-26",
    topics: "Relational Schema, SQL Joins, Normalization, ACID Transactions, Indexing",
    status: "Verified Credential",
    badgeColor: "cyan",
  },
  {
    title: "Programming using C++",
    issuer: "Infosys Springboard",
    date: "August 2025",
    id: "INF-CPP-25",
    topics: "OOP Paradigms, Memory Management, STL Containers, Pointers, Algorithmic Efficiency",
    status: "Verified Credential",
    badgeColor: "violet",
  },
  {
    title: "Introduction to Artificial Intelligence & Machine Learning",
    issuer: "MOOC Certification",
    date: "March 2025",
    id: "MOOC-AIML-25",
    topics: "Supervised & Unsupervised Learning, Neural Architectures, Model Optimization",
    status: "Verified Credential",
    badgeColor: "emerald",
  },
  {
    title: "Introduction to C Programming Language",
    issuer: "MOOC Certification",
    date: "January 2025",
    id: "MOOC-CPRG-25",
    topics: "Procedural Syntax, Memory Models, Pointers, Arrays, File I/O",
    status: "Verified Credential",
    badgeColor: "amber",
  },
];

export const navigationLinks = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "WORK", href: "#projects" },
  { name: "SKILLS", href: "#skills" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "CONTACT", href: "#contact" },
];
