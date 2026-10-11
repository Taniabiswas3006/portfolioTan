export interface Project {
  id: string;
  num: string;
  title: string;
  italicTitle?: string;
  subtitle: string;
  category: string;
  description: string;
  problem: string;
  metrics: string[];
  contributions?: string[];
  tech: string[];
  image: string;
  links: {
    github?: string;
    demo?: string;
  };
}

export interface ExperienceItem {
  period: string;
  role: string;
  italicRole?: string;
  organization: string;
  description: string;
  tags: string[];
  isCurrent?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  proficiency: "Advanced" | "Proficient" | "Competent";
  progress: number; // percentage
  description: string;
  tech: string[];
}

export interface HackathonItem {
  num: string;
  name: string;
  italicName?: string;
  role: string;
  achievement: string;
  project?: string;
  description?: string;
  highlights?: string[];
  tech?: string[];
  year: string;
  url?: string;
  image?: string;
}

export interface CertificationItem {
  year: string;
  title: string;
  issuer: string;
  url?: string;
}

export interface HobbyItem {
  id: string;
  title: string;
  italicWord?: string;
  caption: string;
  description: string;
  image: string;
  tags: string[];
  rotation: string;
}

export const portfolioData = {
  personal: {
    name: "Tania",
    surname: "Biswas",
    role: "AI Engineer & Full Stack Developer",
    tagline: "A Learner with Code and Coffee.",
    bioQuote: "Creating elegant, autonomous code is like composing poetry; every line must sing with purpose.",
    bioParagraph1: "I am an AI Engineer & Full Stack Developer specializing in crafting high-impact, autonomous systems that bridge machine intelligence with tactile digital interfaces.",
    bioParagraph2: "Pursuing Computer Science & Engineering at JIS College of Engineering (CGPA 9.4), I engineer end-to-end architectures—from custom OCR pipelines and NLP transformer fine-tuning to high-converting, silky-smooth web applications.",
    bioParagraph3: "Whether benchmarking edge models or orchestrating micro-interactions, I focus on quiet luxury, high performance, and unapologetic precision.",
    origin: "West Bengal, IN",
    working: "Parot.Dev",
    status: "Active & Available",
    email: "taniabiswas232@gmail.com",
    phone: "+91 9123918909",
    github: "https://github.com/Taniabiswas3006",
    linkedin: "https://www.linkedin.com/in/tania-biswas-30469a29a",
    profileImage: "/profile.png",
  },

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Research", href: "#research" },
    { label: "Hackathons", href: "#hackathons" },
    { label: "Certifications", href: "#certifications" },
    { label: "Beyond", href: "#beyond" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "#contact" },
  ],

  experiences: [
    {
      period: "2025 — Present",
      role: "Frontend Developer & AI Engineer",
      italicRole: "Developer & AI",
      organization: "Parot.Dev",
      description: "Architecting high-performance web applications and embedding generative AI workflows. Bridging client-side fluidity with scalable AI model endpoints.",
      tags: ["Next.js", "AI/ML", "TypeScript", "Tailwind CSS", "Framer Motion"],
      isCurrent: true,
    },
    {
      period: "Nov 2025 — Jan 2026",
      role: "Freelance ML & Frontend Engineer",
      italicRole: "ML & Frontend",
      organization: "Australia-based Startup",
      description: "Engineered production document parsing with customized OCR inference models, slashing document extraction processing times by 30% with robust accuracy gains.",
      tags: ["OCR", "Computer Vision", "React", "Python", "FastAPI"],
    },
    {
      period: "Oct — Dec 2024",
      role: "Machine Learning Intern",
      italicRole: "Machine Learning",
      organization: "Internship Studio",
      description: "Delivered hands-on model tuning, exploratory data analysis, and edge-oriented inference benchmarks across structured and perceptual datasets.",
      tags: ["Python", "TensorFlow", "Scikit-Learn", "TinyML"],
    },
    {
      period: "2023 — 2027",
      role: "B.Tech Computer Science & Engineering",
      italicRole: "Computer Science",
      organization: "JIS College of Engineering",
      description: "Academic Excellence with CGPA 9.4. Deep specialization in Artificial Intelligence, Systems Architecture, and Data Structures.",
      tags: ["CGPA 9.4", "Deep Learning", "Algorithms", "C++"],
    },
    {
      period: "2011 — 2023",
      role: "Higher Secondary (PCMB)",
      italicRole: "Pure Science",
      organization: "RKVM Vidyabhawan, Barrackpore",
      description: "Scored 84.6% in WBCHSE. Groundwork in rigorous mathematics, physics, and computational thinking.",
      tags: ["84.6%", "Physics", "Chemistry", "Mathematics"],
    },
  ] as ExperienceItem[],

  skills: [
    {
      id: "ml",
      title: "Machine Learning",
      proficiency: "Advanced",
      progress: 95,
      description: "Predictive modeling, NLP pipelines, transformer fine-tuning, and edge inference optimization.",
      tech: ["Python", "PyTorch", "TensorFlow", "Scikit-Learn", "Pandas", "NumPy", "Hugging Face"],
    },
    {
      id: "fullstack",
      title: "Full Stack Development",
      proficiency: "Advanced",
      progress: 92,
      description: "End-to-end resilient web apps with Next.js App Router, SSR microfrontends, and Node/Flask APIs.",
      tech: ["Next.js", "React", "TypeScript", "Node.js", "Flask", "Tailwind CSS", "Framer Motion"],
    },
    {
      id: "database",
      title: "Database Architecture",
      proficiency: "Advanced",
      progress: 90,
      description: "Relational modeling, NoSQL document design, query profiling, and transactional integrity.",
      tech: ["PostgreSQL", "Supabase", "MongoDB", "Redis", "MySQL", "SQLite"],
    },
    {
      id: "data-analysis",
      title: "Data Analysis & Viz",
      proficiency: "Proficient",
      progress: 86,
      description: "Extracting hidden patterns, statistical testing, multivariate modeling, and executive storytelling dashboards.",
      tech: ["Pandas", "Matplotlib", "Seaborn", "SQL", "Tableau", "Excel"],
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity & Pentesting",
      proficiency: "Competent",
      progress: 78,
      description: "Vulnerability scanning, web application security (OWASP Top 10), and pen-testing sandboxes.",
      tech: ["Kali Linux", "Metasploit", "VirtualBox", "Wireshark", "Bash"],
    },
    {
      id: "android",
      title: "Android Engineering",
      proficiency: "Competent",
      progress: 76,
      description: "Native and cross-platform mobile architectures focused on ergonomics, offline-first sync, and smooth animations.",
      tech: ["Java", "Kotlin", "Android Studio", "XML", "Jetpack"],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "ecotwin",
      num: "01",
      title: "EcoTwin",
      italicTitle: "Twin",
      subtitle: "Autonomous Sustainability Digital Twin",
      category: "AI & Climate Tech",
      description: "An AI-powered digital twin platform that analyzes personal carbon footprints and industrial energy consumption in real time.",
      problem: "Traditional sustainability tracking is fragmented, static, and lacks predictive foresight for actionable reduction.",
      metrics: ["20% Accuracy Gain via Ensemble ML", "30% Faster Real-time Ingestion", "Lighthouse 94"],
      contributions: [
        "Architected real-time predictive ML pipeline in Flask/Scikit-Learn",
        "Engineered reactive analytics dashboard with interactive metrics",
        "Integrated PostgreSQL & Supabase for low-latency time-series queries"
      ],
      tech: ["Next.js", "Flask", "Python", "Scikit-Learn", "PostgreSQL", "Supabase", "Tailwind CSS"],
      image: "/Screenshot 2026-04-11 140655.png",
      links: {
        github: "https://github.com/Taniabiswas3006/Eco-Twin",
        demo: "https://eco-twin-flame.vercel.app/",
      },
    },
    {
      id: "nestate",
      num: "02",
      title: "Nestate",
      italicTitle: "State",
      subtitle: "Intelligent Real Estate Automation",
      category: "Full Stack & OCR",
      description: "A comprehensive real estate enterprise dashboard engineered to automate document verification, valuation, and listing pipelines.",
      problem: "Manual property document data entry was slow, error-prone, and choked agency transaction cycles.",
      metrics: ["30% Faster Document Processing", "Automated Deed Extraction", "Zero Loss OCR Pipeline"],
      contributions: [
        "Built automated OCR ingestion pipeline for property deeds",
        "Formulated machine learning valuation models",
        "Designed clean administrative control hub with real-time alerts"
      ],
      tech: ["Next.js", "Node.js", "React", "Tailwind CSS", "PostgreSQL", "OCR"],
      image: "/Screenshot 2026-04-12 023733.png",
      links: {
        github: "https://nestate.parot.dev/",
        demo: "https://nestate.parot.dev/",
      },
    },
    {
      id: "ahaarsetu",
      num: "03",
      title: "Ahaarsetu",
      italicTitle: "Setu",
      subtitle: "Smart India Hackathon 2025 Finalist Platform",
      category: "Deep Tech & Agritech",
      description: "A smart livestock health and supply network that assigns every animal a Digital Medicine Passport—tracking drug withdrawal intervals and MRL compliance to assure residue-free farm-to-table food.",
      problem: "Antibiotic misuse and lack of traceability in livestock leads to drug-resistant residues in the food supply.",
      metrics: ["SIH 2025 Finalist", "100% Traceable MRL Ledger", "Sub-second Query Speed"],
      contributions: [
        "Developed deep learning demand forecasting models",
        "Built NLP-driven resource matching algorithms for veterinarians and farmers",
        "Formulated real-time MRL compliance tracker"
      ],
      tech: ["React Native", "Node.js", "MongoDB", "PyTorch", "NLP", "Express"],
      image: "/Screenshot 2026-04-12 023413.png",
      links: {
        github: "https://github.com/Aritra-221B/AhaarSetu",
        demo: "https://ahaarsetu-theta.vercel.app/",
      },
    },
    {
      id: "threatguardx",
      num: "04",
      title: "ThreatGuardX",
      italicTitle: "GuardX",
      subtitle: "Real-time Vulnerability Inspection Engine",
      category: "Cybersecurity & Systems",
      description: "A security-hardened browser extension engineered to detect malicious scripts, phishing vectors, and protocol vulnerabilities on the fly.",
      problem: "Web threats exploit subtle DOM mutations and asynchronous injection vectors that evade generic ad-blockers.",
      metrics: ["40% Faster Threat Detection", "Instant Heuristic Scoring", "StatusCode 2 Finalist"],
      contributions: [
        "Architected core asynchronous heuristic inspection engine",
        "Implemented lightweight DOM surveillance routines with negligible memory footprint",
        "Crafted dark editorial HUD for instant security telemetries"
      ],
      tech: ["Python", "JavaScript Extension API", "Kali Linux", "Bash", "OWASP Standards"],
      image: "/Screenshot 2026-04-12 020642.png",
      links: {
        github: "https://github.com/Aritra-221B/ThreatGuardX-webextension",
      },
    },
    {
      id: "zbyte",
      num: "05",
      title: "ZByte",
      italicTitle: "Byte",
      subtitle: "High-Velocity Gourmet Experience",
      category: "Motion & Frontend Architecture",
      description: "A gourmet commerce storefront engineered with fluid physics, kinetic transitions, and high-conversion interactions.",
      problem: "Complex motion frequently destroys mobile performance, degrading accessibility and user retention.",
      metrics: ["90+ Lighthouse Performance", "60 FPS Silky Animations", "Zero Cumulative Layout Shift"],
      contributions: [
        "Engineered custom antigravity physics and gesture interactions",
        "Optimized asset pipelines for instant zero-jank hydration",
        "Crafted bespoke micro-interactions and tactile soundless feedback"
      ],
      tech: ["React", "JavaScript", "Framer Motion", "Tailwind CSS", "Node.js"],
      image: "/Screenshot 2026-04-12 002648.png",
      links: {
        demo: "https://zbyte.parot.dev/",
      },
    },
    {
      id: "twintitles",
      num: "06",
      title: "TwinTitles",
      italicTitle: "Titles",
      subtitle: "Academic Plagiarism & Semantic Deduplication",
      category: "NLP & Transformer Models",
      description: "An advanced NLP system that detects duplicated research papers and academic plagiarism by evaluating semantic context rather than naive keyword matching.",
      problem: "Academic databases suffer from duplicate registrations and title paraphrase evasions that bypass classical search.",
      metrics: ["92% Semantic Similarity Accuracy", "Hack4Bengal Top Contributor", "Sub-100ms Inference"],
      contributions: [
        "Fine-tuned Sentence Transformers for cosine similarity vector indexing",
        "Engineered batch embedding computation pipelines",
        "Designed clean academic comparison inspection UI"
      ],
      tech: ["PyTorch", "Sentence Transformers", "Hugging Face", "NLP", "Python", "FastAPI"],
      image: "/Screenshot 2026-04-12 120557.png",
      links: {
        github: "https://github.com/Aritra-221B/TwinTitles",
      },
    },
    {
      id: "eleve",
      num: "07",
      title: "Eleve",
      italicTitle: "Elegance",
      subtitle: "Minimalist Haute Couture Storefront",
      category: "Design System & UI",
      description: "A luxury fashion commerce showcase focusing on editorial typography, fluid cart transitions, and pristine visual hierarchy.",
      problem: "Fashion e-commerce often feels cluttered, transactional, and detached from the brand's aesthetic narrative.",
      metrics: ["Sub-second Page Transitions", "Clean Editorial Layout", "Accessible Keyboard Navigation"],
      contributions: [
        "Designed bespoke typographic hierarchy and glassmorphic drawer components",
        "Implemented smooth state persistence across product filters",
        "Maintained stringent WCAG AAA contrast compliance"
      ],
      tech: ["React", "Framer Motion", "Tailwind CSS", "Node.js"],
      image: "/Screenshot 2026-04-12 010007.png",
      links: {
        demo: "https://eleve.parot.dev/",
      },
    },
  ] as Project[],

  marqueeTechRow1: [
    "PyTorch", "Next.js", "TensorFlow", "TypeScript", "Tailwind CSS", "Scikit-Learn", "Framer Motion", "Lenis", "PostgreSQL"
  ],

  marqueeTechRow2: [
    "Hugging Face", "React", "Python", "Docker", "MongoDB", "FastAPI", "GraphQL", "Supabase", "Git"
  ],

  research: {
    badge: "Published Chapter • Scrivener Publishing",
    title: "Advances in TinyML: A Systematic Review of Architectures, Algorithms and Innovations",
    publication: "Tiny Machine Learning: Fundamentals, Applications and Security",
    publisher: "Scrivener Publishing / Wiley partnership",
    year: "2024",
    link: "https://www.scrivenerpublishing.com/cart/title.php?id=1334",
    quote: "This research navigates the critical intersection of compact hardware and complex intelligence, defining the next frontier of edge computing.",
    abstract: "A rigorous deep dive into quantization, memory-efficient neural architecture search (NAS), and low-power inference on microcontrollers, laying foundational benchmarks for edge AI deployments.",
  },

  hackathons: [
    {
      num: "01",
      name: "Hack4Bengal",
      italicName: "Bengal",
      role: "Participant & Project Lead",
      achievement: "Top Project Contributor",
      project: "TwinTitles",
      description: "Built an NLP-based semantic deduplication platform leveraging sentence transformer embeddings to detect paraphrased academic papers and duplicate submissions with sub-100ms vector lookup.",
      highlights: ["36h Sprint", "Team Lead", "92% Deduplication Accuracy"],
      tech: ["PyTorch", "Sentence Transformers", "FastAPI", "Python", "Hugging Face"],
      year: "2024",
      url: "https://drive.google.com/file/d/14BnTOEgxNkIcMH0m-RqLgor1_V6-2HP3/view?usp=drive_link",
      image: "/hack4bengal.png",
    },
    {
      num: "02",
      name: "StatusCode 2",
      italicName: "Code 2",
      role: "Competitive Engineer",
      achievement: "Hackathon Finalist",
      project: "ThreatGuardX",
      description: "Developed an adversarial intrusion detection pipeline delivering real-time network telemetry analysis, automated threat classification, and anomaly alerts under stringent latency bounds.",
      highlights: ["Podium Finalist", "Network Security", "Real-Time Telemetry"],
      tech: ["Python", "Machine Learning", "FastAPI", "Docker", "Network Security"],
      year: "2024",
      url: "https://drive.google.com/file/d/1R6Zo_mYEroEvNg6v5e_UGOzlBmznD6nj/view?usp=drive_link",
      image: "/statuscode.png",
    },
    {
      num: "03",
      name: "Hackodisha 5.0",
      italicName: "Odisha",
      role: "National Level Participant",
      achievement: "Finalist",
      project: "eSahayak",
      description: "Developed a single-window civic tech web platform bridging citizens and welfare schemes, featuring a secure complaint tracking portal for real-time reporting, location-based issue tagging, and progress monitoring.",
      highlights: ["National Participant", "Civic Tech", "Complaint Portal"],
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      year: "2025",
      url: "https://drive.google.com/file/d/1S45LnJP0-5Hd2TV2gzm0XeTIiWX_lk59/view?usp=drive_link",
      image: "/hackodisha.png",
    },
    {
      num: "04",
      name: "Smart India Hackathon",
      italicName: "SIH 2025",
      role: "ML Engineer and Front End developer",
      achievement: "Intra College SIH Finalist",
      project: "Ahaarsetu",
      description: "Engineered a transparent supply chain and farm-to-table traceability web platform bridging farmers, vendors, and consumers, featuring live lot-tracking ledgers, tamper-proof QR verification, and automated compliance management.",
      highlights: ["Supply Chain", "Traceability Ledger", "Tamper-Proof QR"],
      tech: ["Next.js", "Node.js", "PostgreSQL", "Google Maps API", "Tailwind CSS"],
      year: "2025",
      url: "https://drive.google.com/file/d/1P0SSN1tKJV9kuQrtZN0jU4oAHELX1dA0/view?usp=drive_link",
      image: "/sih.png",
    },
  ] as HackathonItem[],

  certifications: [
    {
      year: "2026",
      title: "SAP Global Certification — Back-End Developer ABAP Cloud",
      issuer: "SAP",
      url: "https://drive.google.com/file/d/12tiqij51BR5y_eRyJbsxAlqB2g3mWtR6/view?usp=sharing",

    },
    {
      year: "2026",
      title: "NPTEL Cloud Computing",
      issuer: "NPTEL (IIT Kharagpur)",
      url: "https://drive.google.com/file/d/13IxWwSj5qDqDead5LerAGauHyTXD1baP/view?usp=sharing",
    },
    {
      year: "2025",
      title: "MongoDB Associate Developer Badge",
      issuer: "MongoDB University",
      url: "https://drive.google.com/file/d/1znfTtFZlVsR1cudnFSb__V5IfG8d1YF9/view?usp=drive_link",
    },
    {
      year: "2025",
      title: "Cybersecurity & Network Defense",
      issuer: "Ardent Computech",
      url: "https://drive.google.com/file/d/1KB_6exP1fLzAfZPVL6wHgmy-RGf0GiR7/view?usp=drive_link",
    },
    {
      year: "2025",
      title: "Android App Development Certification",
      issuer: "Google powered by EduSkills",
      url: "https://drive.google.com/file/d/1iqaX0U4rSm2yjVgr1Hp5RhXccISEFt5I/view?usp=drive_link",
    },
    {
      year: "2025",
      title: "NPTEL Certificate — OOPS with Java",
      issuer: "NPTEL (IIT Kharagpur)",
      url: "https://drive.google.com/file/d/1LLwgRQteyoKyeEvaH6wnmUtjvA9LYacK/view?usp=drive_link",
    },
    {
      year: "2024",
      title: "AWS AI & Machine Learning Foundations",
      issuer: "AWS Training & Certification",
      url: "https://drive.google.com/file/d/1PyUVNHpiOf--AkXLgsUSJ2BeHJ7eMlnI/view?usp=sharing",
    },
    {
      year: "2024",
      title: "Python Bootcamp Specialization",
      issuer: "Udemy",
      url: "https://drive.google.com/file/d/1AfeWgX_zy8_totiUD1Wrcuuk38uwXByM/view?usp=sharing",
    },
  ] as CertificationItem[],

  beyond: [
    {
      id: "music",
      title: "Singing & Music",
      italicWord: "Melody",
      caption: "Rabindrasangeet & Nazrulgeeti classical vocals",
      description: "Formally trained in Bengali semi-classical, Rabindrasangeet, and Nazrulgeeti. Passed the 1st year examination under Pracheen Kala Kendra in Nazrulgeeti, finding structural harmony between musical cadence and algorithmic flow.",
      image: "/Firefly.jpg",
      tags: ["Vocals", "Semi-Classical", "Rabindrasangeet", "Nazrulgeeti"],
      rotation: "-rotate-2",
    },
    {
      id: "reading",
      title: "Literature & Inquiry",
      italicWord: "Inquiry",
      caption: "Sci-Fi, Detective Mysteries & Psychothrillers",
      description: "Immersed in detective deductions, hard science fiction worldbuilding, and psycho-thrillers. Reading feeds analytical curiosity and deep narrative empathy into user interfaces.",
      image: "/6257936825846534729.jpg",
      tags: ["Sci-Fi", "Detective Fiction", "Psychothrillers", "Philosophy", "Non Fiction"],
      rotation: "rotate-2",
    },
    {
      id: "photography",
      title: "Photography & Travel",
      italicWord: "Perspectives",
      caption: "Frames of raw humanity and silent landscapes",
      description: "Documenting humans, geometry, and uncurated nature through both DSLR and street lenses. Travel expands perspective, instilling reverence for contrast, light, and stillness.",
      image: "/6257936825846535015.jpg",
      tags: ["DSLR", "Street Photography", "Exploration", "Landscapes"],
      rotation: "-rotate-1",
    },
  ] as HobbyItem[],
};
