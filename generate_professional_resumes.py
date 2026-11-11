import os
import subprocess

# 5 Professional Domain Resumes matching Liyander Rishwanth format exactly
resumes = [
    {
        "filename": "Dhayalan_K_Full_Stack_Developer_Professional_Resume",
        "title": "Full-Stack Software Engineer | React, Node.js, Express, Java OOP, MongoDB and Systems",
        "impact_glance": [
            ("9 Shipped Projects", "including full e-commerce platforms, community forum extensions & socket protocols"),
            ("92% Merit Score", "in Java OOP & MongoDB Data Modeling"),
            ("AWS ECS & Cloud Certified", "Amazon ECS Knowledge Badge & CI/CD CDK Pipelines"),
            ("3 National CTF Challenges", "Tamil Nadu Police Yukthi CTF 2.0, Amrita Lemon CTF, REC HackTiVate")
        ],
        "summary": "Full-Stack Software Engineer with proven engineering expertise across frontend systems (React, Tailwind CSS, Mithril.js), high-throughput backend APIs (Node.js, Express, Java, Python), and database optimization (MongoDB, MySQL). Built production-grade web platforms with client-side state persistence, custom modular UI extension engines, and containerized microservices. Accelerated web load speeds by 40% through decoupled architectures and optimized query indexing.",
        "flagship_section_title": "ENGINEERING HIGHLIGHTS & ARCHITECTURE",
        "flagship_blocks": [
            {
                "headline": "Production Web Systems & Platform Engineering",
                "items": [
                    "Engineered <b>Shahihennaholic Storefront</b>: mobile-first e-commerce catalog featuring client-side shopping cart calculations and zero-friction LocalStorage state synchronization.",
                    "Designed dynamic bridal catalog views with instantaneous page responsiveness, automated cart state serialization, and direct WhatsApp order payload dispatch.",
                    "Extended <b>Flarum Community Platform</b> by architecting <b>FLARUM1</b>, an independent companion JavaScript extension hooking into Mithril.js single-page application lifecycles.",
                    "Tuned MySQL schema design, query caching, and relational indexes for high-frequency discussion threads across concurrent user sessions without core upstream modifications.",
                    "Architected <b>Java ATM Banking Engine (maincode.java)</b>: strict OOP encapsulation model with PIN authentication, transaction rollback protection, and formatted audit statement ledgers."
                ]
            },
            {
                "headline": "Real-Time Telemetry & Systems Integration",
                "items": [
                    "Constructed <b>Browser Monitoring & Telemetry Daemon</b> in Python: instrumented live browser sessions, capturing DOM mutations, event listeners, and network interactions.",
                    "Designed fault-tolerant local JSON buffer queue guaranteeing zero event loss during network interruptions, paired with streaming reporting pipelines.",
                    "Containerized full-stack services with Docker and Docker Compose, achieving reproducible local environments and zero-downtime rolling restart workflows."
                ]
            }
        ],
        "skills": [
            ("Frontend Engineering", "React (v18+), Hooks (useState, useEffect, useCallback, useMemo), Context API, JavaScript (ES6+), TypeScript, Next.js, Tailwind CSS, HTML5, CSS3, DOM Telemetry, Mithril.js"),
            ("Backend & API Architecture", "Node.js, Express.js, Java (OOP, Multi-threading, Collections), Python, RESTful API Design, JWT Authentication, CORS, Middleware Pipelines, Asynchronous Programming"),
            ("Databases & Storage", "MongoDB (Mongoose ODM, Schema Validation, Aggregation Pipelines, Indexing — 92% Score), MySQL, LocalStorage State, In-Memory Caching"),
            ("DevOps, Cloud & Tooling", "Docker, Docker Compose, Amazon Web Services (ECS, CDK, CloudFormation), Git, GitHub Actions, Linux (Ubuntu/Debian), Nginx, Postman, Vite, NPM/Yarn"),
            ("Frameworks & Standards", "Component-Driven Architecture, Microservices, MVC Pattern, REST API Specifications, Responsive Web Design")
        ],
        "experience": [
            {
                "role": "Full-Stack Software Engineer",
                "company": "Web Platforms & Open Source Systems",
                "period": "2024 to Present, Coimbatore",
                "bullets": [
                    "Architected responsive, database-backed web applications using React, Node.js, Express, MongoDB, and modern utility-first styling systems.",
                    "Developed client-side state persistence workflows with LocalStorage and real-time DOM mutation monitoring for consumer web applications.",
                    "Designed RESTful APIs with input validation, JWT token verification, and structured error-handling middleware."
                ]
            },
            {
                "role": "Systems & Automation Engineer",
                "company": "Independent Systems Lab",
                "period": "2025 to Present, Coimbatore",
                "bullets": [
                    "Containerized multi-tier full-stack workloads using Docker, standardizing environment parity across development and deployment stages.",
                    "Automated database backup pipelines, directory organization daemons, and system health checks in Python and Bash."
                ]
            }
        ],
        "projects": [
            {
                "name": "Shahihennaholic E-Commerce & Ordering Platform",
                "repo": "github.com/DHAYALANKANIAPPAN/PROJECTS",
                "bullets": [
                    "Built full responsive product showcase and shopping cart with client-side price computation and order serialization.",
                    "Streamlined checkout workflow into automated WhatsApp messaging payloads, reducing order drop-off. Stack: HTML5, CSS3, JavaScript, LocalStorage."
                ]
            },
            {
                "name": "Flarum Discussion Forum & FLARUM1 Extension",
                "repo": "github.com/DHAYALANKANIAPPAN/flarum",
                "bullets": [
                    "Authored decoupled JavaScript frontend extension hooking into Mithril.js component mounts for custom themes and controls.",
                    "Configured MySQL index optimizations for fast discussion lookup under load. Stack: PHP, JavaScript, Mithril.js, MySQL."
                ]
            },
            {
                "name": "ATM Banking & Account Management System",
                "repo": "github.com/DHAYALANKANIAPPAN/PROJECTS",
                "bullets": [
                    "Engineered Java OOP banking system implementing encapsulation, account authorization, and atomic balance mutation safeguards. Stack: Java, OOP, CLI."
                ]
            }
        ],
        "awards": [
            "Certificate of Merit: Java + Mongo DB (92% Score) — Hazhtech Career Development Centre / IACT (60-day OOP & NoSQL training).",
            "Amazon ECS Knowledge Badge Assessment — Amazon Web Services (AWS) · Credly Official Credential.",
            "Deploying a CI/CD Pipeline with AWS CDK — AWS Skill Builder Official Lab Certification.",
            "Yukthi CTF 2.0 Participant — National-Level Cyber Defense & Exploitation Event, Tamil Nadu Police & Selfmade Ninja Academy.",
            "0xTi - HackTiVate 24-Hour CTF Participant — Rajalakshmi Engineering College (Intensive software problem-solving)."
        ]
    },
    {
        "filename": "Dhayalan_K_MERN_Stack_Developer_Professional_Resume",
        "title": "MERN Stack Developer | MongoDB, Express.js, React, Node.js and Cloud Deployments",
        "impact_glance": [
            ("MERN Architecture Specialist", "React v18, Express REST APIs, Node.js Async Runtimes & MongoDB Atlas"),
            ("92% Merit Score", "in Certified MongoDB Data Modeling & Schema Design"),
            ("AWS Container Certified", "Amazon ECS Knowledge Badge & Cloud Deployments"),
            ("Mobile-First Web Products", "shipped with zero-jank LocalStorage cart state & sub-second load times")
        ],
        "summary": "Specialized MERN Stack Developer with end-to-end expertise in constructing scalable single-page applications and high-throughput REST APIs. Skilled in designing decoupled React architectures with modern hooks and state management, building asynchronous Express/Node.js backends with robust middleware security, and modeling performant NoSQL data structures in MongoDB (certified with 92% merit). Experienced in building consumer web applications, integrating client storage mechanics, and running containerized Node applications with Docker.",
        "flagship_section_title": "MERN STACK ARCHITECTURE & ENGINEERING",
        "flagship_blocks": [
            {
                "headline": "React Frontend & Component Engineering",
                "items": [
                    "Engineered single-page application interfaces utilizing React functional components, custom hooks (`useCallback`, `useMemo`), and Context API for global state synchronization.",
                    "Built <b>Shahihennaholic Storefront & Cart Engine</b>: client-side e-commerce platform with persistent LocalStorage synchronizer ensuring cart items persist across page navigation.",
                    "Implemented responsive styling systems with Tailwind CSS, achieving 100% mobile-first compatibility, zero layout shift, and instant asset rendering.",
                    "Engineered <b>FLARUM1</b>: independent modular JavaScript companion extension for single-page forum interfaces, hooking into routing events and component mounts."
                ]
            },
            {
                "headline": "Express & Node.js API Layer & MongoDB Modeling",
                "items": [
                    "Structured modular Express.js backends with decoupled routing controllers, custom error handlers, and input validation pipelines.",
                    "Configured MongoDB Atlas collections, Mongoose ODM schemas, compound indexes, and aggregation pipelines (awarded 92% Merit Score).",
                    "Containerized Node.js services and MongoDB replica sets using Docker and Docker Compose for reproducible cloud environments."
                ]
            }
        ],
        "skills": [
            ("Frontend (React Ecosystem)", "React (v18+), Functional Components, Custom Hooks, Context API, Next.js (App Router), Tailwind CSS, JavaScript (ES6+), HTML5 Semantic UI, CSS3 Flexbox/Grid"),
            ("Backend (Node.js & Express)", "Node.js Runtime, Express.js Framework, RESTful Routing, Middleware Pipeline, JWT Authentication, CORS, Asynchronous Programming (Async/Await), JSON API"),
            ("Database (MongoDB)", "MongoDB Atlas, Mongoose ODM, Schema Validation, Aggregation Pipelines, Compound Indexing, Performance Tuning (92% Score)"),
            ("DevOps & Containerization", "Docker, Docker Compose, Amazon ECS (Fargate), Linux (Ubuntu), Nginx Reverse Proxy, Git, GitHub Actions, NPM/Yarn"),
            ("API Testing & Tooling", "Postman (Collection Testing, Environment Variables), Vite, Webpack, Chrome DevTools Profiling")
        ],
        "experience": [
            {
                "role": "Full-Stack MERN Developer",
                "company": "Web Platforms & Client Projects",
                "period": "2024 to Present, Coimbatore",
                "bullets": [
                    "Engineered responsive, database-backed web applications using React, Node.js, Express, MongoDB, and modern utility-first CSS systems.",
                    "Developed RESTful endpoints with input validation, JWT token authorization, and structured MongoDB queries.",
                    "Integrated client-side state persistence workflows with LocalStorage, supporting uninterrupted customer sessions."
                ]
            },
            {
                "role": "Systems & Automation Engineer",
                "company": "Independent Systems Lab",
                "period": "2025 to Present, Coimbatore",
                "bullets": [
                    "Containerized Node.js microservices and local MongoDB instances using Docker, ensuring environment parity across machines.",
                    "Constructed Python event buffer daemons to batch client interactions prior to document store serialization."
                ]
            }
        ],
        "projects": [
            {
                "name": "Shahihennaholic Storefront & Cart Engine",
                "repo": "github.com/DHAYALANKANIAPPAN/PROJECTS",
                "bullets": [
                    "Architected client-side e-commerce catalog with persistent LocalStorage synchronizer and mobile-optimized ordering.",
                    "Integrated automated checkout flow generating pre-formatted WhatsApp message payloads. Stack: JavaScript, HTML5, CSS3, LocalStorage."
                ]
            },
            {
                "name": "FLARUM1 — Modular Community UI Extension",
                "repo": "github.com/DHAYALANKANIAPPAN/flarum",
                "bullets": [
                    "Engineered independent JavaScript extension package hooking into single-page application router events and component mounts.",
                    "Injected custom responsive themes and interactive controls without modifying upstream source code. Stack: JavaScript, Mithril.js."
                ]
            },
            {
                "name": "Browser Telemetry & Event Interceptor Pipeline",
                "repo": "github.com/DHAYALANKANIAPPAN/PROJECTS",
                "bullets": [
                    "Built real-time event stream tool in Python capturing DOM mutations, event queues, and telemetry streams formatted for JSON document ingestion."
                ]
            }
        ],
        "awards": [
            "Certificate of Merit: Java + Mongo DB (92% Score) — Hazhtech Career Development Centre / IACT (NoSQL schema modeling).",
            "Amazon ECS Knowledge Badge Assessment — Amazon Web Services (AWS) · Credly Official.",
            "Deploying a CI/CD Pipeline using AWS CDK — AWS Skill Builder Official Lab.",
            "Yukthi CTF 2.0 Participant — National-Level Capture The Flag competition, Tamil Nadu Police.",
            "0xTi - HackTiVate 24-Hour CTF Participant — Rajalakshmi Engineering College, Chennai."
        ]
    },
    {
        "filename": "Dhayalan_K_DevOps_Engineer_Professional_Resume",
        "title": "DevOps Engineer | Cloud Infrastructure, Ansible, Docker, Amazon ECS & Linux Systems",
        "impact_glance": [
            ("100% Idempotent Ansible Automation", "multi-node Linux fleet provisioning with UFW firewall & SSH hardening"),
            ("AWS ECS Knowledge Badge", "Credly Verified for Amazon ECS Fargate, task definitions & cluster scaling"),
            ("AWS CDK & CloudFormation", "declarative Infrastructure as Code CI/CD pipelines with managed deployment stages"),
            ("P2P Systems Daemon (ONey)", "sub-20ms remote system management client with encrypted UDP tunnel")
        ],
        "summary": "DevOps & Cloud Systems Engineer with practical experience in Infrastructure as Code (IaC), multi-node Linux server automation, container orchestration, and continuous delivery pipelines. Hands-on expertise managing production deployments using Ansible playbooks, Docker container runtimes, AWS ECS Fargate, AWS CloudFormation, and AWS CDK. Combines software engineering rigor in Python and Bash with deep Linux kernel and networking knowledge, having built custom remote access clients (ONey) and socket-level protocols (Z-Protocol).",
        "flagship_section_title": "CLOUD & INFRASTRUCTURE AUTOMATION",
        "flagship_blocks": [
            {
                "headline": "Ansible Fleet Automation & Server Hardening",
                "items": [
                    "Authored modular Ansible automation playbooks for rapid, idempotent multi-node Linux server provisioning and base environment bootstrapping.",
                    "Automated security hardening: enforcing UFW firewall default-deny incoming rules, allowing specific service ports (22, 80, 443), and disabling root password SSH logins via automated config validation.",
                    "Structured playbooks into isolated roles with variable hierarchies and notified systemd handlers, eliminating configuration drift across target nodes."
                ]
            },
            {
                "headline": "AWS Container Orchestration & CI/CD Pipelines",
                "items": [
                    "Engineered containerized workloads on Amazon ECS using Fargate launch types, task definitions, and auto-scaling rules (earned official Credly ECS Knowledge Badge).",
                    "Constructed automated CI/CD deployment pipelines using AWS CDK with managed deployment stages, automating stack synthesis and rollouts.",
                    "Authored declarative CloudFormation stacks for multi-tier resource orchestration, parameter isolation, and drift detection.",
                    "Architected <b>ONey Remote System Control</b>: low-latency remote management client with encrypted P2P UDP hole punching, packaged into a supervised Linux `systemd` daemon."
                ]
            }
        ],
        "skills": [
            ("Infrastructure as Code (IaC)", "Ansible (Playbooks, Roles, Inventory, Handlers), AWS CloudFormation, AWS CDK, Bash Scripting, Cron Automation"),
            ("Containers & Orchestration", "Docker, Docker Compose, Amazon ECS (Task Definitions, Fargate, Cluster Scaling, Service Discovery), Containerd"),
            ("Cloud Platforms (AWS)", "Amazon ECS, AWS CDK, CloudFormation, EC2, S3, IAM, VPC, CloudWatch, Application Load Balancers"),
            ("Linux Administration & Security", "Ubuntu, Debian, Systemd Service Configuration, UFW Firewall Security, SSH Hardening, Raw Sockets, TCP/UDP, DNS, Caddy/Nginx"),
            ("CI/CD & Observability", "GitHub Actions, Automated Build/Test/Lint Pipelines, Prometheus Node Exporter, Telemetry Streaming, Zero-Downtime Rollouts")
        ],
        "experience": [
            {
                "role": "DevOps & Cloud Systems Developer",
                "company": "Independent Systems & Open Source",
                "period": "2025 to Present, Coimbatore",
                "bullets": [
                    "Containerized production workloads on Amazon ECS with Fargate and auto scaling, earning the AWS ECS Knowledge Badge.",
                    "Engineered automated CI/CD deployment pipelines using AWS CDK and declarative CloudFormation stacks.",
                    "Created modular Ansible automation playbooks for rapid Linux server provisioning, SSH security, and UFW firewall enforcement."
                ]
            },
            {
                "role": "Systems & Automation Engineer",
                "company": "Systems Engineering Lab",
                "period": "2024 to Present, Coimbatore",
                "bullets": [
                    "Architecting ONey — low-latency remote system management client with encrypted P2P tunneling and direct input synchronization.",
                    "Automated filesystem maintenance, directory classification, and background maintenance daemons using Python and Bash."
                ]
            }
        ],
        "projects": [
            {
                "name": "Ansible Fleet Provisioning & Linux Server Hardening",
                "repo": "github.com/DHAYALANKANIAPPAN/Ansible",
                "bullets": [
                    "Built playbook-driven multi-node Linux provisioning and security hardening with 100% idempotent role execution.",
                    "Automated UFW firewall policy enforcement and SSH security hardening. Stack: Ansible, YAML, Linux, Bash, UFW."
                ]
            },
            {
                "name": "ONey Remote Systems Daemon & P2P Tunneling",
                "repo": "github.com/DHAYALANKANIAPPAN/PROJECTS",
                "bullets": [
                    "Developed low-latency remote system management client with encrypted P2P UDP tunneling for host administration without relays.",
                    "Packaged agent into supervised Linux systemd unit with automated restart policies. Stack: Python, UDP Sockets, Cryptography."
                ]
            },
            {
                "name": "Z-Protocol Wire Transport Engine",
                "repo": "github.com/DHAYALANKANIAPPAN/Z-Protocol",
                "bullets": [
                    "Layer-4 binary transport protocol on raw Python sockets with custom 16-byte framing, 3-way handshake state machine, and CRC32 verification."
                ]
            }
        ],
        "awards": [
            "Amazon ECS Knowledge Badge Assessment — Amazon Web Services (AWS) · Credly Official Badge.",
            "Deploying a CI/CD Pipeline with a Managed Deployment Stage using AWS CDK — AWS Skill Builder Official Lab.",
            "Using AWS CloudFormation for Automation — AWS Skill Builder Official Lab.",
            "Cloud Game Development Knowledge Badge — Amazon Web Services (AWS) · Credly Official Badge.",
            "10+ AWS Skill Builder Deep-Dive Modules: ECS Security, Networking, Observability, Auto Scaling, Deployments & Workloads."
        ]
    },
    {
        "filename": "Dhayalan_K_Cyber_Security_Professional_Resume",
        "title": "Cybersecurity & Systems Security Engineer | Protocol Analysis, Host Hardening & CTF Defense",
        "impact_glance": [
            ("3 National CTF Challenges", "Tamil Nadu Police Yukthi CTF 2.0, Amrita Lemon CTF, REC HackTiVate 24h CTF"),
            ("Protocol Reverse Engineering", "Z-Protocol raw socket transport with 16-byte binary framing & CRC32 integrity"),
            ("Host Defense & Hardening", "automated Ansible UFW default-deny firewall policies & SSH root disablement"),
            ("Encrypted Traffic Research", "statistical cross-protocol packet metadata leakage and timing analysis")
        ],
        "summary": "Cybersecurity & Systems Security specialist with competitive hands-on experience in 24-hour Capture The Flag (CTF) challenges (Tamil Nadu Police Yukthi CTF 2.0, Amrita Lemon CTF, REC HackTiVate), low-level network protocol analysis, and Linux host defense. Experienced in raw socket reverse engineering, cryptographic handshake validation, encrypted traffic pattern analysis, and automated Linux server hardening (UFW, SSH, iptables) via Ansible. Driven by a deep understanding of transport layers, binary frame parsing, and defensive systems engineering.",
        "flagship_section_title": "SECURITY RESEARCH & SYSTEMS DEFENSE",
        "flagship_blocks": [
            {
                "headline": "Network Protocol Security & Traffic Analysis",
                "items": [
                    "Authored <b>Cross-Protocol Traffic Fingerprinting</b> research: investigated side-channel metadata leakage, packet burst intervals, and traffic signatures across protocol boundaries.",
                    "Built Python feature extraction pipelines analyzing packet timing distributions and frame size entropy to classify encrypted network streams without decrypting payload contents.",
                    "Engineered <b>Z-Protocol Wire Transport</b>: from-scratch Layer-4 binary networking protocol on raw Python sockets with a custom 16-byte header, dynamic control flags (SYN, ACK, FIN, RST, PSH), and strict state machine transitions.",
                    "Implemented real-time CRC32 checksum calculation and bitmask verification to detect packet tampering and sequence replay attacks."
                ]
            },
            {
                "headline": "Linux Host Hardening & Secure Remote Access",
                "items": [
                    "Automated Linux server security baselines using Ansible: enforced UFW firewall default-deny policies, restricted SSH attack surfaces (key-only auth, root login prohibition), and automated audit logs.",
                    "Architected <b>ONey Secure Remote Access</b>: encrypted peer-to-peer UDP hole punching for host administration without centralized relay vulnerabilities."
                ]
            }
        ],
        "skills": [
            ("Security & Network Analysis", "Wireshark, Nmap, TCPDump, Raw Sockets (AF_INET/SOCK_RAW), Traffic Fingerprinting, Packet Metadata Analysis, Protocol Reverse Engineering"),
            ("Host Hardening & Defense", "Linux Security (Ubuntu/Debian), UFW Firewall Automation, SSH Hardening (Disable root login, key-only auth), Systemd Sandboxing, File Permissions"),
            ("Programming & Scripting", "Python (Security Tools, Socket Programming), Java (Secure OOP, Encapsulation — 92% Merit), Bash Scripting"),
            ("Protocols & Cryptography", "TCP/IP State Machines, UDP Hole Punching, CRC32 Checksums, Symmetric/Asymmetric Keys, Binary Framing, TLS/SSL Certificates"),
            ("CTF Domains & Exploitation", "Network Forensics, Web Security (OWASP Top 10), Cryptography Challenges, Linux Privilege Escalation, Binary Inspection")
        ],
        "experience": [
            {
                "role": "Python & Security Tools Builder",
                "company": "CTF Competitions & Systems Lab",
                "period": "2024 to Present, Coimbatore / Chennai",
                "bullets": [
                    "Competed in 24-hour national CTFs: Tamil Nadu Police Yukthi CTF 2.0, Amrita L3m0n CTF, and Rajalakshmi HackTiVate.",
                    "Constructed custom network protocol inspectors and packet metadata extraction tools in Python.",
                    "Investigated defensive countermeasures against encrypted traffic analysis in peer-to-peer architectures."
                ]
            },
            {
                "role": "Systems Defense & Automation Developer",
                "company": "Independent Infrastructure Systems",
                "period": "2025 to Present, Coimbatore",
                "bullets": [
                    "Engineered automated Ansible security playbooks enforcing UFW default-deny policies across distributed server nodes.",
                    "Developed ONey encrypted P2P daemon with session-key verification to prevent unauthorized remote execution."
                ]
            }
        ],
        "projects": [
            {
                "name": "Cross-Protocol Traffic Fingerprinting Research",
                "repo": "github.com/DHAYALANKANIAPPAN/PROJECTS",
                "bullets": [
                    "Analyzed packet metadata, burst timings, and entropy distributions to classify protocols across encrypted streams.",
                    "Evaluated classification accuracy in encrypted environments. Stack: Python, Traffic Analysis, Packet Metadata."
                ]
            },
            {
                "name": "Z-Protocol Wire Transport & Handshake State Machine",
                "repo": "github.com/DHAYALANKANIAPPAN/Z-Protocol",
                "bullets": [
                    "Designed Layer-4 binary networking protocol on raw Python sockets with custom 16-byte header and CRC32 verification.",
                    "Implemented 3-way handshake state machine (SYN/SYN-ACK/ACK) and packet reordering safety. Stack: Python, Raw Sockets, CRC32."
                ]
            },
            {
                "name": "ONey Secure Remote Access & Encrypted P2P Tunneling",
                "repo": "github.com/DHAYALANKANIAPPAN/PROJECTS",
                "bullets": [
                    "Low-latency remote system management client with encrypted P2P UDP tunneling for host administration without relays."
                ]
            }
        ],
        "awards": [
            "Yukthi CTF 2.0 (National-Level CTF) — Tamil Nadu Police Cyber Crime Wing & Selfmade Ninja Academy (Digital Resilience).",
            "0xTi - HackTiVate 24-Hour CTF (Titanium 2026) — Rajalakshmi Engineering College (Binary analysis & web exploitation).",
            "L3m0n CTF 2025 (24-Hour CTF) — Amrita Vishwa Vidyapeetham (Cryptography & network forensics).",
            "Amazon ECS Knowledge Badge Assessment — AWS Credly Verified (Container isolation & IAM task roles).",
            "Certificate of Merit: Java + MongoDB (92% Score) — Hazhtech Career Development Centre / IACT."
        ]
    },
    {
        "filename": "Dhayalan_K_Frontend_Developer_Professional_Resume",
        "title": "Frontend Engineer | React, TypeScript, Modern CSS/Tailwind & Responsive Web Applications",
        "impact_glance": [
            ("Client-Side E-Commerce Architecture", "shipped Shahihennaholic with instant LocalStorage cart persistence"),
            ("Modular Single-Page UI Extension", "FLARUM1 written in JavaScript hooking into Mithril.js component lifecycles"),
            ("Sub-Second First Contentful Paint", "mobile-first responsive design, zero layout shift & optimized assets"),
            ("Real-Time Browser DOM Telemetry", "session instrumentation tool capturing DOM mutations and event streams")
        ],
        "summary": "Detail-driven Frontend Engineer focused on building responsive, performant, and accessible user interfaces. Skilled in React (v18+), modern JavaScript (ES6+), TypeScript, Tailwind CSS, and single-page application lifecycles. Experienced in engineering real-world e-commerce experiences with client-side state persistence (LocalStorage), authoring modular UI extension packages hooking into modern component runtimes, and building real-time browser event telemetry tools. Passionate about design systems, responsive typography, and fast load speeds.",
        "flagship_section_title": "FRONTEND SYSTEMS & COMPONENT ARCHITECTURE",
        "flagship_blocks": [
            {
                "headline": "E-Commerce Web Architecture & Client State",
                "items": [
                    "Engineered <b>Shahihennaholic Bridal E-Commerce Storefront</b>: responsive web catalog featuring instant client-side shopping cart calculation and persistence without backend dependencies.",
                    "Designed mobile-first UI with fluid product image galleries, instant page responsiveness, zero cumulative layout shift, and automated WhatsApp checkout payload serialization.",
                    "Developed <b>FLARUM1</b>: independent frontend extension package extending the Flarum community platform with customized UI styling, themes, and interactive hooks.",
                    "Programmed lifecycle hooks into single-page application router events, modifying DOM components dynamically without modifying core upstream source code."
                ]
            },
            {
                "headline": "Telemetry & Interactive Dashboard Engineering",
                "items": [
                    "Created <b>Browser DOM Telemetry & Interaction Monitor</b>: captured active DOM mutations, click paths, and scroll interactions in real-time with zero-jank JSON buffer batching.",
                    "Built <b>Interactive DevOps & Systems Dashboard</b>: dark/light theme systems dashboard featuring responsive multi-node telemetry grids, particle background animations, and dynamic wire protocol bitmask toggles."
                ]
            }
        ],
        "skills": [
            ("Core Frontend", "JavaScript (ES6+ / ESNext), HTML5 Semantic Architecture, CSS3 (Modern Flexbox & CSS Grid), TypeScript, DOM API, Web Vitals"),
            ("Frameworks & UI Libraries", "React (v18+), Functional Components, Custom Hooks, Context API, Next.js (App Router), Tailwind CSS, Mithril.js, Responsive Mobile-First Design"),
            ("State & Storage", "React State & Reducers, Context API, Browser LocalStorage, SessionStorage, Event Queues, JSON Buffer Serialization"),
            ("Build Tools & Performance", "Vite, Webpack, PostCSS, Responsive Images, Git/GitHub, Chrome DevTools Profiling, Lighthouse Audit, Postman"),
            ("Design-to-Code & Standards", "Design Systems, WCAG Accessibility, Cross-Browser Compatibility, Micro-Interactions, Component Lifecycle")
        ],
        "experience": [
            {
                "role": "Frontend Web Developer",
                "company": "Web Platforms & Client Projects",
                "period": "2024 to Present, Coimbatore",
                "bullets": [
                    "Built and styled e-commerce storefronts with mobile-first UI, fluid product galleries, and client-side cart storage.",
                    "Customized community forum platform with modular JavaScript extensions (FLARUM1) hooking into SPA component lifecycles.",
                    "Optimized frontend asset loading and CSS architecture, achieving sub-second initial render times."
                ]
            },
            {
                "role": "Systems & Telemetry Engineer",
                "company": "Independent Systems Lab",
                "period": "2025 to Present, Coimbatore",
                "bullets": [
                    "Built Python telemetry tools to monitor live browser DOM event streams and capture real-time performance queues.",
                    "Developed responsive web dashboard with dark/light themes and canvas animations without heavy external frameworks."
                ]
            }
        ],
        "projects": [
            {
                "name": "Shahihennaholic Bridal E-Commerce Storefront",
                "repo": "github.com/DHAYALANKANIAPPAN/PROJECTS",
                "bullets": [
                    "Engineered responsive web catalog with interactive shopping cart and LocalStorage state persistence.",
                    "Built automated WhatsApp order payload generator formatting line items and customer details. Stack: HTML5, CSS3, JavaScript."
                ]
            },
            {
                "name": "FLARUM1 — Modular UI Component Extension",
                "repo": "github.com/DHAYALANKANIAPPAN/flarum",
                "bullets": [
                    "Authored frontend extension hooking into single-page application router events for dynamic styling without core modifications.",
                    "Constructed modular CSS sheets with custom responsive breakpoints. Stack: JavaScript, Mithril.js, CSS3."
                ]
            },
            {
                "name": "Browser DOM Telemetry & Interaction Monitor",
                "repo": "github.com/DHAYALANKANIAPPAN/PROJECTS",
                "bullets": [
                    "Constructed telemetry utility capturing DOM mutations and user interactions in real-time with zero-jank buffer serialization."
                ]
            }
        ],
        "awards": [
            "Certificate of Merit: Java + Mongo DB (92% Score) — Hazhtech Career Development Centre / IACT (Programming fundamentals).",
            "Amazon ECS Knowledge Badge Assessment — Amazon Web Services (AWS) · Credly Official.",
            "Cloud Game Development Knowledge Badge — Amazon Web Services (AWS) · Credly Official.",
            "Yukthi CTF 2.0 Participant — National-Level Capture The Flag competition, Tamil Nadu Police.",
            "0xTi - HackTiVate 24-Hour CTF Participant — Rajalakshmi Engineering College, Chennai."
        ]
    }
]

def render_html_2page(data):
    impact_items_html = " | ".join([
        f"<b>{num}</b> {desc}" for num, desc in data["impact_glance"]
    ])
    
    flagship_html = ""
    for block in data["flagship_blocks"]:
        flagship_html += f'<div style="font-weight: 700; font-size: 10pt; color: #111111; margin-top: 6px; margin-bottom: 3px;">{block["headline"]}</div>\n'
        flagship_html += '<ul class="bullet-list">\n'
        for item in block["items"]:
            flagship_html += f'  <li>{item}</li>\n'
        flagship_html += '</ul>\n'
        
    skills_html = ""
    for cat, val in data["skills"]:
        skills_html += f'<div class="skill-row"><b>{cat}:</b> {val}</div>\n'
        
    experience_html = ""
    for exp in data["experience"]:
        experience_html += f"""
        <div style="margin-top: 6px; margin-bottom: 2px;">
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <span style="font-weight: 700; font-size: 9.8pt; color: #111111;">{exp['role']}, {exp['company']}</span>
            <span style="font-size: 8.8pt; color: #444444; font-weight: 600;">{exp['period']}</span>
          </div>
          <ul class="bullet-list" style="margin-top: 2px;">
            {''.join([f'<li>{b}</li>' for b in exp['bullets']])}
          </ul>
        </div>
        """
        
    projects_html = ""
    for proj in data["projects"]:
        projects_html += f"""
        <div style="margin-top: 5px; margin-bottom: 2px;">
          <div style="display: flex; justify-content: space-between; align-items: baseline;">
            <span style="font-weight: 700; font-size: 9.6pt; color: #111111;">{proj['name']}</span>
            <span style="font-size: 8.5pt; color: #0056b3;"><a href="https://{proj['repo']}" style="color: #0056b3; text-decoration: none;">{proj['repo']}</a></span>
          </div>
          <ul class="bullet-list" style="margin-top: 2px;">
            {''.join([f'<li>{b}</li>' for b in proj['bullets']])}
          </ul>
        </div>
        """
        
    awards_html = '<ul class="bullet-list">\n' + ''.join([f'<li>{a}</li>\n' for a in data["awards"]]) + '</ul>'

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>{data['title']}</title>
<style>
  @page {{
    size: letter;
    margin: 16mm 18mm 16mm 18mm;
  }}
  * {{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }}
  body {{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: #1a1a1a;
    background: #ffffff;
    font-size: 9.3pt;
    line-height: 1.42;
    -webkit-print-color-adjust: exact;
  }}
  .header {{
    text-align: center;
    margin-bottom: 12px;
  }}
  .name {{
    font-size: 21pt;
    font-weight: 800;
    letter-spacing: 0.8px;
    color: #000000;
    margin-bottom: 4px;
    text-transform: uppercase;
  }}
  .role {{
    font-size: 9.8pt;
    font-weight: 700;
    color: #222222;
    margin-bottom: 4px;
  }}
  .contact-line {{
    font-size: 8.8pt;
    color: #333333;
    margin-bottom: 2px;
  }}
  .contact-line a {{
    color: #0056b3;
    text-decoration: none;
  }}
  .contact-line span {{
    margin: 0 4px;
    color: #888888;
  }}
  .links-line {{
    font-size: 8.8pt;
    color: #0056b3;
  }}
  .links-line a {{
    color: #0056b3;
    text-decoration: none;
  }}
  .links-line span {{
    margin: 0 5px;
    color: #888888;
  }}
  
  .section {{
    margin-top: 13px;
  }}
  .section-title {{
    font-size: 10.2pt;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    color: #000000;
    border-bottom: 1px solid #111111;
    padding-bottom: 2px;
    margin-bottom: 6px;
  }}
  
  .impact-box {{
    background: #f7f9fa;
    border: 1px solid #e1e4e8;
    padding: 7px 10px;
    border-radius: 4px;
    font-size: 9pt;
    line-height: 1.35;
    margin-bottom: 6px;
    color: #111111;
  }}
  
  .summary-text {{
    font-size: 9.2pt;
    line-height: 1.42;
    color: #222222;
    text-align: justify;
  }}
  
  .skill-row {{
    font-size: 9.1pt;
    line-height: 1.38;
    margin-bottom: 4px;
    color: #222222;
    text-align: justify;
  }}
  .skill-row b {{
    color: #000000;
  }}
  
  ul.bullet-list {{
    list-style-type: disc;
    padding-left: 17px;
    margin: 0;
  }}
  ul.bullet-list li {{
    font-size: 9.1pt;
    line-height: 1.38;
    margin-bottom: 4px;
    color: #222222;
    text-align: justify;
  }}
  ul.bullet-list li b {{
    color: #000000;
  }}
  ul.bullet-list li:last-child {{
    margin-bottom: 0;
  }}
  
  .page-break {{
    page-break-before: always;
  }}
</style>
</head>
<body>

<!-- PAGE 1 -->
<div class="header">
  <div class="name">DHAYALAN K</div>
  <div class="role">{data['title']}</div>
  <div class="contact-line">
    India<span>|</span>+91 9385931709<span>|</span><a href="mailto:dhaya3486@gmail.com">dhaya3486@gmail.com</a>
  </div>
  <div class="links-line">
    <a href="https://linkedin.com/in/dhaya05">linkedin.com/in/dhaya05</a><span>|</span><a href="https://github.com/DHAYALANKANIAPPAN">github.com/DHAYALANKANIAPPAN</a><span>|</span><a href="https://dhayalankaniappan.github.io/Portfolio/">dhayalankaniappan.github.io/Portfolio</a>
  </div>
</div>

<div class="section">
  <div class="section-title">IMPACT AT A GLANCE</div>
  <div class="impact-box">
    {impact_items_html}
  </div>
  <div class="summary-text">
    {data['summary']}
  </div>
</div>

<div class="section">
  <div class="section-title">{data['flagship_section_title']}</div>
  {flagship_html}
</div>

<div class="section">
  <div class="section-title">TECHNICAL SKILLS</div>
  {skills_html}
</div>

<!-- PAGE 2 -->
<div class="page-break"></div>

<div class="section" style="margin-top: 0;">
  <div class="section-title">PROFESSIONAL EXPERIENCE</div>
  {experience_html}
</div>

<div class="section">
  <div class="section-title">KEY PROJECTS &amp; CODEBASES</div>
  {projects_html}
</div>

<div class="section">
  <div class="section-title">EDUCATION</div>
  <div style="font-size: 9.3pt; line-height: 1.45; color: #222222;">
    <div style="font-weight: 700; color: #000000;">
      Bachelor of Engineering in Computer Science and Engineering (Cyber Security), Pursuing
    </div>
    <div style="color: #333333; margin-top: 1px;">
      Sri Shakthi Institute of Engineering and Technology, Coimbatore (2024 – 2028) | Grade Point Average: 8.21 out of 10.0. Available for full-time employment &amp; internships.
    </div>
  </div>
</div>

<div class="section">
  <div class="section-title">VERIFIED CERTIFICATIONS, AWARDS &amp; ACTIVITIES</div>
  {awards_html}
</div>

</body>
</html>
"""

os.makedirs("resumes_professional_pdf", exist_ok=True)
os.makedirs(".chromium_tmp_pro", exist_ok=True)

for r in resumes:
    html_content = render_html_2page(r)
    html_path = f"resumes_professional_pdf/{r['filename']}.html"
    pdf_path = f"resumes_professional_pdf/{r['filename']}.pdf"
    
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(html_content)
        
    cmd = [
        "chromium",
        "--headless",
        "--disable-gpu",
        "--no-sandbox",
        "--no-pdf-header-footer",
        "--user-data-dir=./.chromium_tmp_pro",
        f"--print-to-pdf={pdf_path}",
        html_path
    ]
    
    res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    if os.path.exists(pdf_path):
        size_kb = os.path.getsize(pdf_path) / 1024
        print(f"Generated: {pdf_path} ({size_kb:.1f} KB)")
    else:
        print(f"Failed: {pdf_path}")

print("All Professional Resumes Generated.")
