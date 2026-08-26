// ─────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for portfolio content.
// Dhayalan Kaniappan — Python & Full-Stack Developer · DevOps Specialist · MERN Stack
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Dhayalan K",
  fullName: "Dhayalan Kaniappan",
  role: "The Code Whisperer · DevOps Specialist · Python & MERN Stack",
  tagline:
    "I build reliable cloud infrastructure, automate deployment pipelines with Ansible and Docker, and engineer robust Python systems and full-stack MERN applications.",
  shortBio:
    "Python & DevOps developer with strong Java and MERN foundations, studying at Sri Shakthi Institute of Engineering and Technology. Active competitor in national 24-hour CTFs and passionate about remote system engineering (ONey), network protocols, and server automation.",
  location: "Coimbatore, Tamil Nadu, India",
  timezone: "Asia/Kolkata (IST · UTC+5:30)",
  education: "Sri Shakthi Institute of Engineering and Technology",
  degree: "Bachelor of Engineering (B.E.)",
  email: "dhaya3486@gmail.com",
  github: "https://github.com/DHAYALANKANIAPPAN",
  githubProjectsRepo: "https://github.com/DHAYALANKANIAPPAN/PROJECTS",
  githubUsername: "DHAYALANKANIAPPAN",
  linkedin: "https://www.linkedin.com/in/dhaya05/",
  linkedinCerts: "https://www.linkedin.com/in/dhaya05/details/certifications/",
  resumeUrl: "/resume.pdf",
  availableForHire: true,
  yearsOfExperience: "2+ Years",
};

export const resume = {
  summary:
    "Engineering student, DevOps specialist, and Python/MERN developer with hands-on experience in Linux server automation, Ansible playbooks, Docker containerization, remote system access (ONey), Java OOP architectures, and Python telemetry tooling. Proven track record of competing in national 24-hour CTFs (Tamil Nadu Police Yukthi CTF, Amrita Vishwa Vidyapeetham, Rajalakshmi REC) and building real-world web and systems software.",
  
  experience: [
    {
      role: "DevOps & Systems Developer",
      company: "Independent Systems & Open Source",
      period: "2025 — Present",
      type: "Automation & Infrastructure",
      location: "Coimbatore, India",
      description:
        "Developing remote management systems (ONey), automated server provisioning pipelines with Ansible, and containerized Docker environments.",
      highlights: [
        "Architecting ONey — a low-latency remote system management client with encrypted P2P tunneling and direct input/stream synchronization.",
        "Created modular Ansible automation playbooks for rapid Linux server provisioning, UFW firewall security rules, and user environment setups.",
        "Automated filesystem organization, directory classification, and background maintenance daemons using Python and Bash.",
      ],
      skills: ["Python", "Ansible", "Docker", "Linux Administration", "Bash", "P2P Sockets"],
    },
    {
      role: "Full-Stack MERN Developer",
      company: "Web Platforms & Client Projects",
      period: "2024 — Present",
      type: "Full-Stack Engineering",
      location: "Coimbatore, India",
      description:
        "Developing responsive, database-backed web applications using React, Node.js, Express, MongoDB, and modern frontend design systems.",
      highlights: [
        "Built and styled e-commerce and product catalog storefronts (e.g. Shahihennaholic) with mobile-first UI and localized cart storage.",
        "Customized Flarum community platform with modular JavaScript extensions (FLARUM1) and optimized MySQL database indexing.",
        "Engineered RESTful APIs in Express with input validation, JWT user sessions, and efficient MongoDB schemas.",
      ],
      skills: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript", "HTML5/CSS3", "Tailwind CSS"],
    },
    {
      role: "Python & Security Tools Builder",
      company: "CTF Competitions & Systems Lab",
      period: "2024 — Present",
      type: "Systems & Security R&D",
      location: "Coimbatore / Chennai",
      description:
        "Creating custom network inspectors, Python telemetry tools, and competing in state and national 24-hour Capture The Flag (CTF) events.",
      highlights: [
        "Built Browser Monitoring Tool in Python to capture browser DOM mutations and telemetry data streams in real time.",
        "Engineering Z-Protocol — a custom Layer-4 binary transport protocol from scratch using raw Python sockets with CRC32 verification.",
        "Competed in 24-hour CTFs including Tamil Nadu Police Yukthi CTF 2.0, Amrita L3m0n CTF, and Rajalakshmi HackTiVate.",
      ],
      skills: ["Python", "Java", "Raw Sockets", "Wireshark", "Nmap", "CTF Solving"],
    },
  ],

  education: [
    {
      institution: "Sri Shakthi Institute of Engineering and Technology",
      degree: "Bachelor of Engineering (B.E.)",
      location: "Coimbatore, Tamil Nadu",
      period: "2023 — 2027 (Expected)",
      details:
        "Core academic training in Python systems development, Object-Oriented Programming (Java), Operating Systems, Computer Networks, Database Management Systems (DBMS), and Cloud DevOps practices.",
      highlights: [
        "Active member of Technical Coding and Cybersecurity clubs.",
        "Regular competitor in inter-college hackathons and CTF challenges.",
      ],
    },
  ],

  certifications: [
    {
      title: "Certificate of Merit: Java + Mongo DB (92% Score)",
      issuer: "Hazhtech Career Development Centre / IACT",
      date: "August 2025",
      badge: "Java + DB (92%)",
      image: "/certificates/java-mongodb-badge.svg",
      description: "60-day intensive course in Java Object-Oriented Programming, data structures, and MongoDB database modeling.",
      linkedinUrl: "https://www.linkedin.com/in/dhaya05/",
    },
    {
      title: "Yukthi CTF 2.0 (National-Level CTF)",
      issuer: "Tamil Nadu Police & Selfmade Ninja Academy",
      date: "December 2025",
      badge: "National CTF",
      image: "/certificates/yukthi-ctf-badge.svg",
      description: "National-level Capture The Flag competition organized by the Tamil Nadu Police contributing to digital resilience and cyber defense.",
      linkedinUrl: "https://www.linkedin.com/in/dhaya05/",
    },
    {
      title: "0xTi - HackTiVate 24-Hour CTF (Titanium 2026)",
      issuer: "Rajalakshmi Engineering College, Chennai",
      date: "January 2026",
      badge: "24h CTF",
      image: "/certificates/hacktivate-ctf-badge.svg",
      description: "24-hour intensive CTF hackathon showcasing technical problem-solving, binary analysis, and web exploitation.",
      linkedinUrl: "https://www.linkedin.com/in/dhaya05/",
    },
    {
      title: "L3m0n CTF 2025 (24-Hour CTF)",
      issuer: "Amrita Vishwa Vidyapeetham",
      date: "2025",
      badge: "Amrita CTF",
      image: "/certificates/lemon-ctf-badge.svg",
      description: "24-hour national cybersecurity and problem-solving competition hosted by Amrita Vishwa Vidyapeetham.",
      linkedinUrl: "https://www.linkedin.com/in/dhaya05/",
    },
  ],

  competencies: [
    {
      category: "DevOps & Cloud",
      skills: ["Ansible Playbooks", "Docker", "Linux Fleet Administration", "CI/CD Workflows", "Bash Scripting", "AWS (EC2, S3)", "Server Provisioning"],
    },
    {
      category: "Full-Stack Development (MERN)",
      skills: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "REST APIs"],
    },
    {
      category: "Programming & Systems",
      skills: ["Python (Primary)", "Java (OOP, Collections)", "Raw Sockets", "File Automation", "MySQL", "PHP Basics"],
    },
    {
      category: "Security & CTF Tools",
      skills: ["Wireshark", "Nmap", "Network Protocol Analysis", "CTF Web/Crypto Challenges", "Burp Suite Basics"],
    },
  ],
};

export const journey = [
  {
    year: "Chapter 1",
    title: "The Spark · From Code to DevOps",
    body: "Known as 'The Code Whisperer' — my development journey began with deep curiosity for Python and Java programming. As I built larger systems, I realized that writing clean code is only half the battle — understanding how to containerize with Docker, automate servers with Ansible, and keep infrastructure reliable under load is where true engineering excellence happens.",
  },
  {
    year: "Chapter 2",
    title: "The Craft · Full-Stack & Tooling",
    body: "Built end-to-end full-stack applications with the MERN stack (MongoDB, Express, React, Node.js) along with practical Python and Java software: automated filesystem sorters, banking ATM systems, and customized community forum platforms like Flarum.",
  },
  {
    year: "Chapter 3",
    title: "The Wire · Remote Systems & 24h CTFs",
    body: "Dove deep into network protocols and systems engineering. Developing ONey (a remote system access client) and Z-Protocol (raw socket transport), while sharpening adversarial problem-solving in national 24-hour CTFs including the Tamil Nadu Police Yukthi CTF, Amrita L3m0n CTF, and Rajalakshmi HackTiVate.",
  },
  {
    year: "Chapter 4",
    title: "The Horizon · Scalable Cloud Automation",
    body: "Focused on modern DevOps workflows: Infrastructure as Code with Ansible, containerized microservices, automated CI/CD pipelines, and high-performance web products.",
  },
];

export type SkillCategory =
  | "DevOps"
  | "Full-Stack"
  | "Programming"
  | "Security & CTF"
  | "Tools";

export const skills: {
  name: string;
  category: SkillCategory;
  level: number;
  highlight: string;
}[] = [
  // DevOps
  { name: "Ansible", category: "DevOps", level: 90, highlight: "Multi-node fleet provisioning, modular roles, automated setups" },
  { name: "Docker", category: "DevOps", level: 88, highlight: "Containerization, multi-stage builds, Docker Compose" },
  { name: "Linux Administration", category: "DevOps", level: 92, highlight: "Ubuntu, Debian, systemd services, SSH & UFW firewall setup" },
  { name: "CI/CD & GitHub Actions", category: "DevOps", level: 82, highlight: "Automated build, linting, and deployment pipelines" },
  { name: "Bash Scripting", category: "DevOps", level: 85, highlight: "Automated server tasks, log parsing, backup scripts" },
  { name: "AWS Basics", category: "DevOps", level: 75, highlight: "EC2 instances, S3 buckets, security groups" },

  // Full-Stack
  { name: "React", category: "Full-Stack", level: 90, highlight: "Components, hooks, responsive UI, client-side routing" },
  { name: "Node.js", category: "Full-Stack", level: 88, highlight: "Asynchronous backend logic, REST API microservices" },
  { name: "Express.js", category: "Full-Stack", level: 86, highlight: "API routing, middleware, authentication & validation" },
  { name: "MongoDB", category: "Full-Stack", level: 88, highlight: "NoSQL document schemas, Mongoose models, indexing (Hazhtech 92%)" },
  { name: "Tailwind CSS", category: "Full-Stack", level: 92, highlight: "Modern responsive interfaces, glassmorphism, UI components" },
  { name: "Next.js", category: "Full-Stack", level: 84, highlight: "App Router, SSR, fast page loading and SEO" },

  // Programming
  { name: "Python", category: "Programming", level: 94, highlight: "Core development language: ONey remote tool, Z-Protocol, automation & telemetry" },
  { name: "Java", category: "Programming", level: 90, highlight: "OOP principles, encapsulation, collections, ATM system architectures (92% Merit)" },
  { name: "JavaScript", category: "Programming", level: 92, highlight: "ES6+, async/await, DOM manipulation, full-stack web" },
  { name: "TypeScript", category: "Programming", level: 84, highlight: "Type safety, interfaces, scalable React applications" },
  { name: "PHP", category: "Programming", level: 75, highlight: "Flarum core forum extensions, server-side scripts" },

  // Security & CTF
  { name: "CTF Problem Solving", category: "Security & CTF", level: 88, highlight: "Tamil Nadu Police Yukthi CTF, Amrita CTF, 24h HackTiVate" },
  { name: "Network Protocol Analysis", category: "Security & CTF", level: 85, highlight: "Wireshark packet capture, raw socket inspection" },
  { name: "Nmap", category: "Security & CTF", level: 85, highlight: "Port discovery, service detection, network auditing" },
  { name: "Traffic Fingerprinting", category: "Security & CTF", level: 80, highlight: "Encrypted metadata analysis & packet timing research" },

  // Tools
  { name: "Git & GitHub", category: "Tools", level: 92, highlight: "Version control, branching, multi-project monorepo management" },
  { name: "Postman", category: "Tools", level: 85, highlight: "REST API testing, endpoint verification, mock requests" },
  { name: "VS Code & Vim", category: "Tools", level: 88, highlight: "Development environments, terminal workflows, remote SSH" },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: "In Progress" | "Completed" | "Live";
  featured: boolean;
  category: "DevOps" | "Full-Stack" | "Python & Automation" | "Java & Systems" | "Security & Research";
  stack: string[];
  metrics: { label: string; value: string }[];
  timeline: string;
  challenges: string[];
  solutions: string[];
  achievements: string[];
  features: string[];
  github: string;
  demo?: string;
  cover: string;
  gallery: string[];
};

// Projects: ONey & Z-Protocol are In Progress, balance are Completed
export const projects: Project[] = [
  {
    slug: "oney-remote-system",
    name: "ONey Remote System Control",
    tagline: "Low-latency remote system management client with encrypted P2P tunneling",
    description:
      "A brand new remote system management client currently under active development. Designed for fast, secure remote system access, peer-to-peer UDP hole punching, zero-copy screen capture streaming, and bidirectional clipboard/file synchronization without relying on third-party cloud relays.",
    status: "In Progress",
    featured: true,
    category: "DevOps",
    stack: ["Python", "P2P Tunneling", "UDP Sockets", "Screen Streaming", "Cryptography"],
    metrics: [
      { label: "State", value: "Active WIP" },
      { label: "Tunneling", value: "P2P Direct" },
      { label: "Target Latency", value: "< 20ms" },
    ],
    timeline: "2026 — Present",
    challenges: [
      "Achieving smooth low-latency frame streaming over variable internet connections.",
      "Establishing direct peer-to-peer connections across restrictive NATs and firewalls.",
    ],
    solutions: [
      "Engineered lightweight UDP socket streaming with frame compression.",
      "Implemented session-key cryptographic authentication for secure remote host verification.",
    ],
    achievements: [
      "Core prototype active and currently expanding into full multi-host remote management.",
    ],
    features: [
      "Encrypted P2P remote session control",
      "Low-latency screen stream capture & input forwarding",
      "Direct clipboard bridge and remote terminal access",
    ],
    github: "https://github.com/DHAYALANKANIAPPAN/PROJECTS",
    cover: "/projects/oney-cover.svg",
    gallery: ["/projects/oney-cover.svg"],
  },
  {
    slug: "z-protocol",
    name: "Z-Protocol Wire Transport",
    tagline: "From-scratch Layer-4 binary networking protocol built on raw Python sockets",
    description:
      "An experimental transport protocol built from scratch in Python to understand how the wire works. Implements custom binary framing, 3-way handshake state machines, stream sequence numbers, and CRC32 payload checksum verification.",
    status: "In Progress",
    featured: true,
    category: "Java & Systems",
    stack: ["Python", "Raw Sockets", "Binary Framing", "CRC32", "Network Protocols"],
    metrics: [
      { label: "State", value: "Ongoing" },
      { label: "Overhead", value: "16 Bytes" },
      { label: "Integrity", value: "CRC32" },
    ],
    timeline: "Jun 2026 — Ongoing",
    challenges: [
      "Designing a custom binary packet header and socket stream framer from scratch.",
      "Handling stream fragmentation across raw socket boundaries.",
    ],
    solutions: [
      "Built message framing logic directly on raw Python sockets with length-prefixed payload extraction.",
    ],
    achievements: [
      "Working reference implementation for custom socket communication.",
    ],
    features: [
      "Custom 16-byte binary frame specification",
      "3-way handshake state machine (SYN / SYN-ACK / ACK)",
      "Socket-level client and server implementation",
    ],
    github: "https://github.com/DHAYALANKANIAPPAN/Z-Protocol",
    cover: "/projects/zprotocol-cover.svg",
    gallery: ["/projects/zprotocol-cover.svg"],
  },
  {
    slug: "browser-monitoring-tool",
    name: "Browser Monitoring Tool",
    tagline: "Python-built telemetry tool for capturing browser activity and event streams",
    description:
      "A dedicated Python monitoring tool from the PROJECTS suite that instruments browser sessions to capture DOM events, unsent buffer queues, network interactions, and execution telemetry in real time.",
    status: "Completed",
    featured: true,
    category: "Python & Automation",
    stack: ["Python", "JSON Buffer", "DOM Telemetry", "Event Intercept"],
    metrics: [
      { label: "Status", value: "Completed" },
      { label: "Data Format", value: "JSON Buffer" },
      { label: "Execution", value: "Real-time" },
    ],
    timeline: "Completed",
    challenges: [
      "Reliably capturing live browser interactions without dropping event streams.",
      "Managing unsent telemetry buffers safely when network disconnects occur.",
    ],
    solutions: [
      "Structured a local JSON buffer queue to persist events prior to analysis.",
      "Implemented streamlined Python parsing logic for quick reporting.",
    ],
    achievements: [
      "Actively maintained in the official PROJECTS repository with regular updates.",
    ],
    features: [
      "Browser activity and event stream capture",
      "Local JSON buffer queue management",
      "Python-based analysis pipeline",
    ],
    github: "https://github.com/DHAYALANKANIAPPAN/PROJECTS/tree/main/Browser_Monitoring_Tool",
    cover: "/projects/browser-monitoring-cover.svg",
    gallery: ["/projects/browser-monitoring-cover.svg"],
  },
  {
    slug: "atm-system",
    name: "ATM Banking & Account System",
    tagline: "Java Object-Oriented banking simulation with PIN security and transaction ledger",
    description:
      "A complete Java OOP banking and ATM management system (`maincode.java`) implementing encapsulated account models, PIN validation, atomic deposit/withdrawal operations, and mini-statement receipt generation.",
    status: "Completed",
    featured: true,
    category: "Java & Systems",
    stack: ["Java", "OOP", "Encapsulation", "Collections", "CLI Interface"],
    metrics: [
      { label: "Status", value: "Completed" },
      { label: "Architecture", value: "OOP / MVC" },
      { label: "Data Integrity", value: "Atomic TXN" },
    ],
    timeline: "Completed",
    challenges: [
      "Ensuring balance consistency and preventing negative withdrawal overdraws.",
      "Structuring clean object-oriented class hierarchies for accounts and ledger entries.",
    ],
    solutions: [
      "Encapsulated sensitive balance mutations behind verified authentication gates in Java.",
      "Built clean interactive CLI menus with formatted receipt outputs.",
    ],
    achievements: [
      "Reinforced core Java OOP certification concepts (awarded 92% Merit Score in Java + MongoDB).",
    ],
    features: [
      "Account balance checking, deposits, and cash withdrawals",
      "PIN authentication and session validation",
      "Transaction history logging and mini-statement generator",
    ],
    github: "https://github.com/DHAYALANKANIAPPAN/PROJECTS/tree/main/ATM",
    cover: "/projects/atm-cover.svg",
    gallery: ["/projects/atm-cover.svg"],
  },
  {
    slug: "ansible-fleet-automation",
    name: "Ansible Fleet Provisioning & Automation",
    tagline: "Playbook-driven Linux server provisioning, UFW firewalls & automated setups",
    description:
      "An automated Ansible configuration and deployment project designed to eliminate repetitive manual shell commands. Provisions Linux hosts, configures SSH security, applies UFW firewall policies, and ensures consistent state across server nodes.",
    status: "Completed",
    featured: true,
    category: "DevOps",
    stack: ["Ansible", "YAML", "Linux", "Bash", "UFW Firewall"],
    metrics: [
      { label: "Status", value: "Completed" },
      { label: "Idempotency", value: "100%" },
      { label: "Setup Time", value: "< 2 Mins" },
    ],
    timeline: "Completed",
    challenges: [
      "Writing idempotent playbooks that can run repeatedly without unintended configuration drift.",
      "Modularizing playbooks into reusable roles for different server configurations.",
    ],
    solutions: [
      "Structured playbooks into isolated roles with clear variables and handlers.",
      "Tested and iterated against live target environments.",
    ],
    achievements: [
      "Provides one-command automated provisioning for new Linux systems.",
    ],
    features: [
      "Automated Linux user and SSH key configuration",
      "UFW firewall policy enforcement",
      "Modular, reusable YAML playbook architecture",
    ],
    github: "https://github.com/DHAYALANKANIAPPAN/Ansible",
    cover: "/projects/ansible-cover.svg",
    gallery: ["/projects/ansible-cover.svg"],
  },
  {
    slug: "shahihennaholic-storefront",
    name: "Shahihennaholic Storefront",
    tagline: "Responsive web catalog and ordering interface for an organic henna brand",
    description:
      "A tailored web application and product showcase built for Shahihennaholic, featuring organic bridal henna cones (`cones.html`), care oils, responsive mobile-friendly layouts, and local storage state persistence.",
    status: "Completed",
    featured: true,
    category: "Full-Stack",
    stack: ["HTML5", "CSS3", "JavaScript", "Local Storage", "Responsive UI"],
    metrics: [
      { label: "Status", value: "Completed" },
      { label: "Design", value: "Mobile-First" },
      { label: "Load Speed", value: "Instant" },
    ],
    timeline: "Completed",
    challenges: [
      "Creating an elegant, mobile-friendly catalog with instant load times.",
      "Managing cart items and order details using client-side storage without backend friction.",
    ],
    solutions: [
      "Crafted custom responsive CSS layouts tailored to visual product presentations.",
      "Implemented lightweight JavaScript state management for cart calculation and direct WhatsApp order generation.",
    ],
    achievements: [
      "Real-world business catalog shipped with active product listings.",
    ],
    features: [
      "Product showcase for organic henna cones and aftercare oils",
      "Interactive cart with local storage persistence",
      "Direct ordering workflow and mobile-optimized layouts",
    ],
    github: "https://github.com/DHAYALANKANIAPPAN/PROJECTS/tree/main/shahihennaholic",
    cover: "/projects/shahihennaholic-cover.svg",
    gallery: ["/projects/shahihennaholic-cover.svg"],
  },
  {
    slug: "file-organizer",
    name: "Python Automated File Organizer",
    tagline: "Automated filesystem classifier and directory sorting daemon in Python",
    description:
      "A practical Python automation utility (`main.py`) that monitors target folders, automatically categorizes incoming files by extension and MIME type into dedicated directories (Documents, Images, Archives, Audio), and prevents filename collisions.",
    status: "Completed",
    featured: false,
    category: "Python & Automation",
    stack: ["Python", "Filesystem OS", "Shutil", "Automation"],
    metrics: [
      { label: "Status", value: "Completed" },
      { label: "Classification", value: "Instant" },
      { label: "OS Support", value: "Cross-Platform" },
    ],
    timeline: "Completed",
    challenges: [
      "Safely moving large batches of files without overwriting existing files of the same name.",
      "Categorizing diverse file extensions accurately into appropriate subfolders.",
    ],
    solutions: [
      "Built deterministic rule mappings with collision detection and automatic renaming.",
      "Utilized Python's `os` and `shutil` libraries for robust file stream handling.",
    ],
    achievements: [
      "Reliable background tool for keeping messy download directories organized.",
    ],
    features: [
      "Automated directory sorting for PDFs, images, zips, audio, and code files",
      "Duplicate file collision prevention",
      "Clean Python script ready for CLI or cron execution",
    ],
    github: "https://github.com/DHAYALANKANIAPPAN/PROJECTS/tree/main/File-organizer",
    cover: "/projects/file-organizer-cover.svg",
    gallery: ["/projects/file-organizer-cover.svg"],
  },
  {
    slug: "cross-protocol-fingerprinting",
    name: "Cross-Protocol Traffic Fingerprinting",
    tagline: "Research into traffic metadata analysis and cross-protocol packet patterns",
    description:
      "A cybersecurity research project investigating how network traffic patterns, packet burst sequences, and metadata leakage can be analyzed across protocol boundaries even when payload contents are encrypted.",
    status: "Completed",
    featured: false,
    category: "Security & Research",
    stack: ["Python", "Traffic Analysis", "Packet Metadata", "Security Research"],
    metrics: [
      { label: "Status", value: "Completed" },
      { label: "Domain", value: "Network Traffic" },
    ],
    timeline: "Completed",
    challenges: [
      "Extracting distinct statistical packet signatures from encrypted network streams.",
    ],
    solutions: [
      "Built feature extraction pipelines in Python analyzing packet sizes, bursts, and intervals.",
    ],
    achievements: [
      "Deepened practical understanding of network protocols, packet structures, and traffic defenses.",
    ],
    features: [
      "Packet burst extraction and timing analyzer",
      "Cross-protocol statistical comparison in Python",
    ],
    github: "https://github.com/DHAYALANKANIAPPAN/PROJECTS/tree/main/Cross-Protocol-Fingerprinting",
    cover: "/projects/fingerprinting-cover.svg",
    gallery: ["/projects/fingerprinting-cover.svg"],
  },
  {
    slug: "flarum-community-platform",
    name: "Flarum Forum & FLARUM1 Extension",
    tagline: "Customized Flarum forum deployment with custom JavaScript frontend extension",
    description:
      "A forum deployment starting from a fork of Flarum (PHP/MySQL) and extended with a separate custom companion extension (FLARUM1) for JavaScript/Mithril frontend theming, UI hooks, and custom configuration.",
    status: "Completed",
    featured: false,
    category: "Full-Stack",
    stack: ["Flarum", "PHP", "JavaScript", "Mithril.js", "MySQL"],
    metrics: [
      { label: "Status", value: "Completed" },
      { label: "Architecture", value: "PHP + JS" },
    ],
    timeline: "Completed",
    challenges: [
      "Extending Flarum's frontend with custom JavaScript without modifying core upstream files.",
    ],
    solutions: [
      "Decoupled customizations into a dedicated extension package (FLARUM1).",
    ],
    achievements: [
      "Maintains two actively updated repositories for core forum and extensions.",
    ],
    features: [
      "Trackable Flarum core setup",
      "Modular JavaScript frontend extension in FLARUM1",
    ],
    github: "https://github.com/DHAYALANKANIAPPAN/flarum",
    cover: "/projects/flarum-cover.svg",
    gallery: ["/projects/flarum-cover.svg"],
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Resume & Certs", href: "#resume" },
  { label: "Contact", href: "#contact" },
];
