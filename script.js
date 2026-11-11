/* ─────────────────────────────────────────────────────────────
   DHAYALAN KANIAPPAN — PROFESSIONAL PORTFOLIO ENGINE
   DevOps Specialist · Python & MERN Stack · The Code Whisperer
   ───────────────────────────────────────────────────────────── */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavbar();
  initTypewriter();
  initClock();
  initTerminal();
  initDevOpsLab();
  initProjectsFilter();
  initResumeTabs();
  initCertWeightageFilter();
  initModals();
  initParticles();
});

/* 1. Light / Dark Theme Management */
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const themeIcon = document.getElementById("theme-icon");
  const storedTheme = localStorage.getItem("portfolio-theme") || "dark";

  setTheme(storedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      setTheme(nextTheme);
      showToast(`Switched to ${nextTheme === "dark" ? "Dark" : "Light"} mode`, "info");
    });
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
    if (themeIcon) {
      if (theme === "light") {
        themeIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
        themeIcon.setAttribute("title", "Switch to Dark Mode");
      } else {
        themeIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
        themeIcon.setAttribute("title", "Switch to Light Mode");
      }
    }
  }
}

/* 2. Navbar & Mobile Menu */
function initNavbar() {
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileNav = document.getElementById("mobile-nav");

  if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
    });

    mobileNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
      });
    });
  }
}

/* 3. Hero Typewriter Animation */
function initTypewriter() {
  const el = document.getElementById("typewriter-text");
  if (!el) return;

  const phrases = [
    "Python Systems Developer",
    "DevOps Specialist",
    "Full-Stack MERN Engineer",
    "AWS Container & Cloud Builder"
  ];

  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function type() {
    const currentPhrase = phrases[phraseIdx];
    
    if (isDeleting) {
      el.textContent = currentPhrase.substring(0, charIdx - 1);
      charIdx--;
    } else {
      el.textContent = currentPhrase.substring(0, charIdx + 1);
      charIdx++;
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIdx === currentPhrase.length) {
      speed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      speed = 400;
    }

    setTimeout(type, speed);
  }

  type();
}

/* 4. Live Clock (Coimbatore IST) */
function initClock() {
  const clockEl = document.getElementById("live-clock");
  if (!clockEl) return;

  function update() {
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString("en-US", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    });
  }

  update();
  setInterval(update, 1000);
}

/* 5. Developer Interactive Terminal */
function initTerminal() {
  const form = document.getElementById("terminal-form");
  const input = document.getElementById("terminal-input");
  const body = document.getElementById("terminal-body");
  const quickBtns = document.querySelectorAll(".quick-cmd-btn");

  const cmdHistory = [];
  let historyIdx = -1;

  const commands = {
    help: () => `
      <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap: 4px; color: #ffffff;">
        <div><b>whoami</b> — Identity & role</div>
        <div><b>bio</b> — Backstory</div>
        <div><b>docker ps</b> — Running containers</div>
        <div><b>ansible</b> — Fleet playbook status</div>
        <div><b>zprotocol</b> — Wire protocol spec</div>
        <div><b>oney</b> — P2P remote architecture</div>
        <div><b>uptime</b> — Cluster status</div>
        <div><b>uname -a</b> — Host & kernel info</div>
        <div><b>projects</b> — Codebases & tools</div>
        <div><b>skills</b> — Core technical stack</div>
        <div><b>certs</b> — CTFs & AWS Badges</div>
        <div><b>matrix</b> — System telemetry</div>
        <div><b>contact</b> — Email & LinkedIn</div>
        <div><b>clear</b> — Wipe terminal</div>
      </div>`,
    "docker ps": () => `
      <div style="font-family: var(--font-mono); font-size: 0.72rem; overflow-x: auto; color: #10b981;">
        <pre style="margin: 0; white-space: pre;">
CONTAINER ID   IMAGE                 STATUS         PORTS                  NAMES
7a9b1c2d3e     oney-p2p:v1.4         Up 18 days     0.0.0.0:8888->8888/udp oney-daemon
4f8e2a1b9c     zproto-wire:latest    Up 12 days     0.0.0.0:9000->9000/tcp zproto-srv
1d3c5e7b9a     nginx:alpine          Up 34 days     0.0.0.0:80,443->80,443 gateway-proxy
9c8b7a6d5e     ansible-runner:v2.4   Up 5 days      --                     fleet-deployer
        </pre>
      </div>`,
    docker: () => commands["docker ps"](),
    ansible: () => `
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: #ffffff;">
        <p style="color: #38bdf8;">PLAY [Fleet Server Provisioning & Hardening] *************************************</p>
        <p>TASK [Gathering Facts] .................................... <span style="color:#10b981;">ok: [node1, node2, node3]</span></p>
        <p>TASK [Configure UFW Firewall & SSH Port] .................. <span style="color:#10b981;">ok: [node1, node2, node3]</span></p>
        <p>TASK [Deploy Docker Daemon & Metrics Exporter] ............ <span style="color:#fbbf24;">changed: [node1, node2, node3]</span></p>
        <p style="color: #38bdf8;">PLAY RECAP ***********************************************************************</p>
        <p style="color:#10b981;">node1 : ok=14   changed=2    unreachable=0    failed=0</p>
        <p style="color:#10b981;">node2 : ok=14   changed=2    unreachable=0    failed=0</p>
        <p style="color:#10b981;">node3 : ok=14   changed=2    unreachable=0    failed=0</p>
      </div>`,
    "ansible-playbook": () => commands.ansible(),
    uptime: () => `
      <div style="font-family: var(--font-mono); font-size: 0.75rem; color: #10b981;">
        <p>12:18:40 up 48 days, 14:22, 1 user, load average: 0.14, 0.18, 0.12</p>
        <p>Cluster: 4/4 nodes healthy | Fleet Uptime: 99.98%</p>
      </div>`,
    "uname -a": () => `
      <p style="font-family: var(--font-mono); font-size: 0.75rem; color: #ffffff;">
        Linux latitude-3410 6.8.0-45-generic #45-Ubuntu SMP PREEMPT x86_64 x86_64 x86_64 GNU/Linux
      </p>`,
    uname: () => commands["uname -a"](),
    zprotocol: () => `
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: #38bdf8;">
        <p>📡 <b>Z-Protocol Specification v1.2:</b></p>
        <p>16-byte custom binary framing over raw Python sockets:</p>
        <p>Magic: 0x5A50 ('ZP') | Version: 0x0102 | State Machine: SYN -> SYN-ACK -> ACK | Integrity: CRC32</p>
      </div>`,
    oney: () => `
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: #10b981;">
        <p>🔒 <b>ONey Remote System Control:</b></p>
        <p>Direct P2P UDP encrypted session without third-party cloud relays. Latency: &lt;20ms. AES-256-GCM.</p>
      </div>`,
    whoami: () => `
      <div>
        <p style="color: #ffffff; font-weight: bold;">Dhayalan Kaniappan</p>
        <p>The Code Whisperer · DevOps Specialist · Python & MERN Stack</p>
        <p style="color: #a1a1aa;">📍 Coimbatore, Tamil Nadu, India · 🎓 Sri Shakthi Institute</p>
      </div>`,
    bio: () => `
      <div>
        <p>DevOps builder and Python developer passionate about automated Linux server fleets, remote system control (ONey), AWS container orchestration (ECS), and responsive MERN web architectures.</p>
      </div>`,
    skills: () => `
      <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 4px;">
        <span style="background: rgba(255,255,255,0.12); padding: 2px 6px; border-radius: 4px; color: #ffffff;">Python (94%)</span>
        <span style="background: rgba(255,255,255,0.12); padding: 2px 6px; border-radius: 4px; color: #ffffff;">Ansible (90%)</span>
        <span style="background: rgba(255,255,255,0.12); padding: 2px 6px; border-radius: 4px; color: #ffffff;">Docker & Amazon ECS (90%)</span>
        <span style="background: rgba(255,255,255,0.12); padding: 2px 6px; border-radius: 4px; color: #ffffff;">AWS CDK & CloudFormation (86%)</span>
        <span style="background: rgba(255,255,255,0.12); padding: 2px 6px; border-radius: 4px; color: #ffffff;">Linux Admin (92%)</span>
        <span style="background: rgba(255,255,255,0.12); padding: 2px 6px; border-radius: 4px; color: #ffffff;">React/MERN (90%)</span>
      </div>`,
    projects: () => `
      <div style="display: flex; flex-direction: column; gap: 4px;">
        <div>⚡ <b>ONey Remote System</b> [DevOps / Python] — Active WIP P2P remote control</div>
        <div>🌐 <b>Z-Protocol</b> [Systems / Raw Sockets] — Custom Layer-4 binary framing</div>
        <div>🔍 <b>Browser Monitoring Tool</b> [Python] — Live event & telemetry capture</div>
        <div>🏧 <b>ATM Banking System</b> [Java OOP] — Account security & ledger</div>
        <div>📜 <b>Ansible Fleet Automation</b> [DevOps] — Automated Linux provisioning</div>
      </div>`,
    certs: () => `
      <div style="display: flex; flex-direction: column; gap: 4px;">
        <div>🎖️ <b>Amazon ECS Knowledge Badge</b> — AWS · Credly Verified (Sep 2026)</div>
        <div>⚙️ <b>CI/CD Pipeline with AWS CDK</b> — AWS Lab Accreditation (Sep 2026)</div>
        <div>☁️ <b>AWS CloudFormation for Automation</b> — AWS Lab Accreditation (Sep 2026)</div>
        <div>🎮 <b>Cloud Game Development Knowledge Badge</b> — AWS · Credly Verified (Sep 2026)</div>
        <div>🏆 <b>Java + MongoDB Merit (92%)</b> — Hazhtech / IACT</div>
        <div>🛡️ <b>Yukthi CTF 2.0</b> — Tamil Nadu Police & Selfmade Ninja</div>
        <div>⚡ <b>HackTiVate 24h CTF</b> — Rajalakshmi Engineering College</div>
        <div>🍋 <b>L3m0n CTF 2025</b> — Amrita Vishwa Vidyapeetham</div>
      </div>`,
    contact: () => `
      <div>
        <p>📧 Email: <a href="mailto:dhaya3486@gmail.com" style="color: #ffffff; text-decoration: underline;">dhaya3486@gmail.com</a></p>
        <p>💼 LinkedIn: <a href="https://www.linkedin.com/in/dhaya05/" target="_blank" style="color: #ffffff; text-decoration: underline;">linkedin.com/in/dhaya05</a></p>
        <p>🐙 GitHub: <a href="https://github.com/DHAYALANKANIAPPAN" target="_blank" style="color: #ffffff; text-decoration: underline;">github.com/DHAYALANKANIAPPAN</a></p>
      </div>`,
    matrix: () => `
      <div style="color: #ffffff; font-family: var(--font-mono); font-size: 0.75rem;">
        <p>01000100 01001000 01000001 01011001 01000001 01001100 01000001 01001110</p>
        <p>[+] AWS ECS FLEET: ACTIVE | CREDLY BADGES: VERIFIED | AUTOMATION DEPLOYED</p>
      </div>`,
    clear: () => {
      body.innerHTML = "";
      return null;
    },
    sudo: () => `<p style="color: #ffffff;">Access granted. Welcome, root operator.</p>`
  };

  function execute(cmdStr) {
    const raw = cmdStr.trim();
    if (!raw) return;

    cmdHistory.push(raw);
    historyIdx = -1;

    const cmd = raw.toLowerCase();
    const handler = commands[cmd];

    if (cmd === "clear") {
      commands.clear();
      return;
    }

    const item = document.createElement("div");
    item.className = "terminal-history-item";

    const promptLine = document.createElement("div");
    promptLine.className = "terminal-prompt-line";
    promptLine.innerHTML = `<span>dhaya@portfolio:~$</span> <span>${raw}</span>`;
    item.appendChild(promptLine);

    const outputEl = document.createElement("div");
    outputEl.className = "terminal-output";

    if (handler) {
      outputEl.innerHTML = handler();
    } else {
      outputEl.innerHTML = `<p style="color: #f87171;">command not found: ${raw}. Type <span style="color: #ffffff; cursor: pointer; text-decoration: underline;" onclick="document.getElementById('terminal-input').value='help'; document.getElementById('terminal-form').dispatchEvent(new Event('submit'));">help</span> for command list.</p>`;
    }

    item.appendChild(outputEl);
    body.appendChild(item);
    body.scrollTop = body.scrollHeight;
  }

  if (form && input) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      execute(input.value);
      input.value = "";
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (cmdHistory.length > 0) {
          historyIdx = historyIdx + 1 < cmdHistory.length ? historyIdx + 1 : historyIdx;
          input.value = cmdHistory[cmdHistory.length - 1 - historyIdx] || "";
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (historyIdx > 0) {
          historyIdx--;
          input.value = cmdHistory[cmdHistory.length - 1 - historyIdx] || "";
        } else if (historyIdx === 0) {
          historyIdx = -1;
          input.value = "";
        }
      }
    });
  }

  quickBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const cmd = btn.getAttribute("data-cmd");
      if (cmd) {
        execute(cmd);
        if (btn.classList.contains("ws-cmd-chip")) {
          const terminalCard = document.querySelector(".terminal-card");
          if (terminalCard) {
            terminalCard.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }
      }
    });
  });
}

/* 6. Projects Filtering & Search */
function initProjectsFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("project-search");
  const cards = document.querySelectorAll(".project-card");

  let activeCategory = "All";
  let activeTag = null;
  let searchQuery = "";

  function applyFilters() {
    cards.forEach(card => {
      const cardCategory = card.getAttribute("data-category") || "";
      const cardTags = card.getAttribute("data-tags") || "";
      const cardTitle = card.querySelector("h3")?.textContent.toLowerCase() || "";
      const cardTagline = card.querySelector(".project-tagline")?.textContent.toLowerCase() || "";

      const matchesCat = activeCategory === "All" || cardCategory.includes(activeCategory);
      const matchesTag = !activeTag || cardTags.toLowerCase().includes(activeTag.toLowerCase());
      const matchesSearch = !searchQuery || 
        cardTitle.includes(searchQuery) || 
        cardTagline.includes(searchQuery) ||
        cardTags.toLowerCase().includes(searchQuery);

      if (matchesCat && matchesTag && matchesSearch) {
        card.style.display = "grid";
      } else {
        card.style.display = "none";
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-filter") || "All";
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }

  document.querySelectorAll(".tech-tag").forEach(tag => {
    tag.addEventListener("click", () => {
      const tagName = tag.getAttribute("data-tag") || tag.textContent.trim();
      if (activeTag === tagName) {
        activeTag = null;
        showToast("Cleared tag filter", "info");
      } else {
        activeTag = tagName;
        showToast(`Filtering by tag: ${tagName}`, "info");
      }
      applyFilters();
    });
  });

  document.querySelectorAll(".toggle-case-study-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".project-card");
      const caseStudy = card?.querySelector(".project-case-study");
      if (caseStudy) {
        caseStudy.classList.toggle("open");
        const isOpen = caseStudy.classList.contains("open");
        btn.querySelector(".btn-text").textContent = isOpen ? "Hide Details" : "Case Study";
      }
    });
  });
}

/* 7. Resume Tabs */
function initResumeTabs() {
  const tabBtns = document.querySelectorAll(".resume-tab-btn");
  const tabContents = document.querySelectorAll(".resume-tab-content");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");
      
      tabBtns.forEach(b => b.classList.remove("active"));
      tabContents.forEach(c => c.classList.remove("active"));

      btn.classList.add("active");
      const targetContent = document.getElementById(`tab-${targetTab}`);
      if (targetContent) targetContent.classList.add("active");
    });
  });
}

/* 8. Certificate Weightage Filter & Expandable Foundation Drawer */
function initCertWeightageFilter() {
  const certFilterBtns = document.querySelectorAll(".cert-filter-btn");
  const certCards = document.querySelectorAll(".cert-grid .cert-card");
  const drawerBtn = document.getElementById("toggle-foundation-drawer-btn");
  const drawer = document.getElementById("foundation-cert-drawer");

  function filterCerts(filterVal) {
    certCards.forEach(card => {
      const weight = card.getAttribute("data-weightage") || "high";
      const isCredly = card.getAttribute("data-credly") === "true";
      const category = card.getAttribute("data-cert-category") || "";

      if (filterVal === "all") {
        card.style.display = "flex";
      } else if (filterVal === "credly") {
        card.style.display = isCredly ? "flex" : "none";
      } else if (filterVal === "high") {
        card.style.display = weight === "high" ? "flex" : "none";
      } else if (filterVal === "aws") {
        card.style.display = category.includes("aws") ? "flex" : "none";
      } else if (filterVal === "ctf") {
        card.style.display = category.includes("ctf") || category.includes("merit") ? "flex" : "none";
      }
    });
  }

  certFilterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      certFilterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const val = btn.getAttribute("data-cert-filter") || "high";
      filterCerts(val);
    });
  });

  // Expandable Drawer for Foundation & Micro-modules
  if (drawerBtn && drawer) {
    drawerBtn.addEventListener("click", () => {
      drawer.classList.toggle("open");
      const isOpen = drawer.classList.contains("open");
      const textEl = drawerBtn.querySelector(".drawer-btn-text");
      const iconEl = drawerBtn.querySelector(".drawer-btn-icon");

      if (textEl) {
        textEl.textContent = isOpen 
          ? "Hide Foundation Modules & Readiness Overviews" 
          : "Show 10 Additional AWS Technical Modules & Foundations";
      }
      if (iconEl) {
        iconEl.textContent = isOpen ? "▲" : "▼";
      }
    });
  }
}

/* 9. Modals (Resume Full-View & Certificate Zoom) */
function initModals() {
  const certModal = document.getElementById("cert-zoom-modal");
  const certImg = document.getElementById("cert-zoom-img");
  const certTitle = document.getElementById("cert-zoom-title");
  const certPdfLink = document.getElementById("cert-zoom-pdf-link");

  document.querySelectorAll(".cert-badge-wrapper, .zoomable-cert-trigger").forEach(wrapper => {
    wrapper.addEventListener("click", () => {
      const img = wrapper.querySelector("img");
      const title = wrapper.getAttribute("data-title") || img?.alt || "Certificate";
      const src = wrapper.getAttribute("data-img") || img?.src || "";
      const pdf = wrapper.getAttribute("data-pdf") || "";

      if (certModal && certImg && certTitle) {
        certImg.src = src;
        certTitle.textContent = title;

        if (certPdfLink) {
          if (pdf) {
            certPdfLink.href = pdf;
            certPdfLink.style.display = "inline-flex";
          } else {
            certPdfLink.style.display = "none";
          }
        }

        certModal.classList.add("open");
      }
    });
  });

  const resumeModal = document.getElementById("resume-full-modal");
  const openResumeBtns = document.querySelectorAll(".open-resume-modal-btn");
  const dynamicResumeBody = document.getElementById("dynamic-resume-body");
  const domainPills = document.querySelectorAll(".domain-resume-pill");
  const modalCopyBtn = document.getElementById("modal-copy-domain-resume-btn");

  const domainResumes = {
    fullstack: {
      title: "Full-Stack Software Engineer · React, Node, Python & Java",
      summary: "Versatile Full-Stack Engineer with strong competencies spanning modern frontend systems (React, JavaScript ES6+, Tailwind CSS), backend API architectures (Node.js, Express, Java OOP, Python), and database engineering (MongoDB, MySQL). Proven track record of shipping end-to-end applications including interactive e-commerce storefronts with local persistence, modular frontend extensions for community platforms, and high-performance socket/protocol tools. Combines deep computer science foundations (92% Merit in Java + MongoDB) with hands-on containerized deployment experience.",
      skills: [
        { label: "Frontend", val: "React, JavaScript (ES6+), TypeScript, Next.js, Tailwind CSS, HTML5, CSS3, DOM Telemetry, Mithril.js" },
        { label: "Backend & APIs", val: "Node.js, Express.js, Java (OOP, Collections), Python, RESTful API Design, JWT, Middleware" },
        { label: "Databases & Storage", val: "MongoDB (Mongoose, Aggregations, Indexing), MySQL, LocalStorage State, In-Memory Caching" },
        { label: "Tools & Deployment", val: "Git, GitHub Actions, Docker, Linux (Ubuntu/Debian), Postman, Nginx, Vite" }
      ],
      projects: [
        { name: "Shahihennaholic E-Commerce Platform", stack: "HTML5, CSS3, JavaScript, LocalStorage", desc: "Engineered responsive e-commerce catalog with client-side shopping cart calculation and persistence without external backend friction. Designed dynamic product views and automated WhatsApp order generation." },
        { name: "Flarum Community Platform & FLARUM1 Extension", stack: "PHP, JavaScript, Mithril.js, MySQL", desc: "Deployed and customized discussion platform with decoupled version control. Engineered FLARUM1 companion extension hooking into Mithril.js component lifecycles for theme styling without core edits. Tuned MySQL index queries." },
        { name: "ATM Banking & Account Management System", stack: "Java OOP, Design Patterns, CLI", desc: "Developed object-oriented banking engine applying strict encapsulation. Integrated PIN verification, atomic transaction ledgers preventing overdrafts, and structured receipt generators." },
        { name: "Browser Telemetry & Event Monitoring Tool", stack: "Python, DOM Telemetry, JSON Buffering", desc: "Real-time session monitoring daemon capturing DOM mutations and event queues. Built fault-tolerant local buffer queue to ensure zero data loss during network disruptions." }
      ],
      certs: [
        "Certificate of Merit: Java + MongoDB (92% Score) — Hazhtech / IACT",
        "Amazon ECS Knowledge Badge Assessment — Amazon Web Services (AWS) · Credly Official",
        "Deploying a CI/CD Pipeline with AWS CDK — AWS Skill Builder Official Lab",
        "AWS CloudFormation for Automation — AWS Skill Builder Official Lab",
        "Competitor in 24h CTFs: Tamil Nadu Police Yukthi CTF 2.0, Amrita L3m0n CTF, REC HackTiVate"
      ]
    },
    mern: {
      title: "MERN Stack Developer · MongoDB, Express.js, React & Node.js",
      summary: "Specialized MERN Stack Developer with end-to-end expertise in constructing scalable single-page applications and high-throughput REST APIs. Skilled in designing decoupled React architectures with modern hooks and state management, building asynchronous Express/Node.js backends with robust middleware security, and modeling performant NoSQL data structures in MongoDB (certified with 92% merit). Experienced in building real-world consumer web applications, integrating client storage mechanics, and running containerized Node applications with Docker.",
      skills: [
        { label: "Frontend (React Ecosystem)", val: "React (v18+), Hooks, Context API, Tailwind CSS, Responsive Design, Next.js (App Router), HTML5 Semantic UI" },
        { label: "Backend (Node.js & Express)", val: "Node.js Runtime, Express.js Framework, RESTful Routing, Middleware Pipeline, JWT Authentication, CORS, Asynchronous Programming" },
        { label: "Database (MongoDB)", val: "MongoDB Atlas, Mongoose ODM, Schema Validation, Aggregation Pipelines, Compound Indexing, Performance Optimization (92% Score)" },
        { label: "Tooling & Environments", val: "Git/GitHub, Postman, Vite, NPM/Yarn, Docker, Linux (Ubuntu), Nginx" }
      ],
      projects: [
        { name: "Shahihennaholic Storefront & Cart Engine", stack: "JavaScript (ES6+), React/DOM Principles, LocalStorage", desc: "Architected client-side e-commerce platform for organic henna brand. Implemented state-driven cart logic with persistent LocalStorage synchronizer and mobile-first checkout payload generation." },
        { name: "FLARUM1 — Modular Community UI Extension", stack: "JavaScript, Single-Page App Architecture, Component Extensions", desc: "Engineered independent JavaScript UI extension package hooking into single-page application lifecycles. Intercepted core route transitions and DOM rendering pipelines to inject custom design themes." },
        { name: "Browser Telemetry & Event Interceptor Pipeline", stack: "Python, JSON Data Pipelines, Buffer Queuing", desc: "Built event stream extraction tool that captures DOM mutations, event listeners, and unsent analytics queues in real-time, serializing UI interactions for document store ingestion." },
        { name: "Dockerized Node/Express Microservices & MongoDB", stack: "Node.js, Docker, MongoDB", desc: "Containerized Node.js REST services and MongoDB replica sets using Docker and Docker Compose for reproducible local and cloud staging environments." }
      ],
      certs: [
        "Certificate of Merit: Java + MongoDB (92% Score) — Hazhtech / IACT (Schema modeling & NoSQL architecture)",
        "Amazon ECS Knowledge Badge — Amazon Web Services (AWS) · Credly Verified",
        "Deploying a CI/CD Pipeline using AWS CDK — AWS Skill Builder Official Lab",
        "AWS CloudFormation for Automation — AWS Skill Builder Official Lab",
        "National 24h Hackathons: Tamil Nadu Police Yukthi CTF 2.0, Amrita L3m0n CTF, HackTiVate 2026"
      ]
    },
    devops: {
      title: "DevOps Engineer · Cloud, Linux, Ansible, Docker & AWS",
      summary: "DevOps & Cloud Systems Engineer with practical experience in Infrastructure as Code (IaC), multi-node Linux server automation, container orchestration, and continuous delivery pipelines. Hands-on expertise managing production deployments using Ansible playbooks, Docker container runtimes, AWS ECS Fargate, AWS CloudFormation, and AWS CDK. Combines software engineering rigor in Python and Bash with deep Linux kernel/networking knowledge, having built custom remote access clients (ONey) and socket-level protocols (Z-Protocol).",
      skills: [
        { label: "IaC & Automation", val: "Ansible (Playbooks, Roles, Inventory, Handlers), AWS CloudFormation, AWS CDK, Bash Scripting, Cron Daemons" },
        { label: "Containers & Orchestration", val: "Docker, Docker Compose, Amazon ECS (Task Definitions, Fargate, Cluster Scaling, Service Discovery), Containerd" },
        { label: "Cloud (AWS)", val: "Amazon ECS, AWS CDK, CloudFormation, EC2, S3, IAM, VPC, CloudWatch, ALB" },
        { label: "Linux Admin & Networking", val: "Ubuntu/Debian, Systemd Unit Configuration, UFW Firewall Security, SSH Hardening, Raw Sockets, TCP/UDP, DNS, Caddy/Nginx" },
        { label: "CI/CD & Observability", val: "GitHub Actions, Automated Testing/Linting Pipelines, Prometheus/Node Exporter, Telemetry Streaming, Zero-Downtime Deployments" }
      ],
      projects: [
        { name: "Ansible Fleet Provisioning & Linux Server Hardening", stack: "Ansible, YAML, Linux, UFW, Bash", desc: "Built modular Ansible automation suite for rapid, idempotent multi-node server provisioning. Automated UFW firewall default-deny policies, specific port allowances (22, 80, 443), and disabled root SSH login across target hosts." },
        { name: "ONey Remote Systems Daemon & P2P Tunneling", stack: "Python, UDP Sockets, Systemd, Cryptography", desc: "Developed low-latency remote system management client and daemon for direct encrypted administration without relays. Implemented UDP hole punching for NAT traversal and packaged agent into supervised Linux systemd unit." },
        { name: "Automated CI/CD Delivery Pipeline with AWS CDK", stack: "AWS CDK, CloudFormation, GitHub Actions", desc: "Implemented automated IaC continuous delivery pipeline with managed deployment stages using AWS CDK. Automated stack synthesis and testing, eliminating manual console drift." },
        { name: "Python File System Classifier & Maintenance Daemon", stack: "Python, Linux Filesystem, Shutil, Cron", desc: "Engineered automated directory organizer daemon categorizing downloads by MIME type and metadata, preventing file collisions in continuous execution environments." }
      ],
      certs: [
        "Amazon ECS Knowledge Badge Assessment — Amazon Web Services (AWS) · Credly Official Badge",
        "Deploying a CI/CD Pipeline with a Managed Deployment Stage using AWS CDK — AWS Skill Builder Lab",
        "Using AWS CloudFormation for Automation — AWS Skill Builder Official Lab",
        "Cloud Game Development Knowledge Badge — Amazon Web Services (AWS) · Credly Official Badge",
        "10+ AWS Skill Builder Deep-Dive Modules: ECS Security, Networking, Observability, Auto Scaling, Deployments"
      ]
    },
    cyber: {
      title: "Cybersecurity & Systems Security Engineer · Protocol Security, CTF Competitor & Defense",
      summary: "Cybersecurity & Systems Security specialist with competitive hands-on experience in 24-hour Capture The Flag (CTF) challenges (Tamil Nadu Police Yukthi CTF 2.0, Amrita Lemon CTF, REC HackTiVate), low-level network protocol analysis, and Linux host defense. Experienced in raw socket reverse engineering, cryptographic handshake validation, encrypted traffic pattern analysis, and automated Linux server hardening (UFW, SSH, iptables) via Ansible. Driven by a deep understanding of transport layers, binary frame parsing, and defensive systems engineering.",
      skills: [
        { label: "Security & Network Analysis", val: "Wireshark, Nmap, TCPDump, Raw Sockets (AF_INET/SOCK_RAW), Traffic Fingerprinting, Packet Metadata Analysis, Protocol Reverse Engineering" },
        { label: "Host Hardening & Defense", val: "Linux Security (Ubuntu/Debian), UFW Firewall Automation, SSH Hardening (Disable root login, key-only auth), Systemd Sandboxing, File Permissions" },
        { label: "Programming & Scripting", val: "Python (Security Tools, Socket Programming), Java (Secure OOP, Encapsulation), Bash Scripting, C/Assembly basics" },
        { label: "Protocols & Cryptography", val: "TCP/IP State Machines, UDP Hole Punching, CRC32 Checksums, Symmetric/Asymmetric Key Concepts, Binary Framing, TLS/SSL" },
        { label: "CTF Domains", val: "Network Forensics, Web Security (OWASP Top 10), Cryptography Challenges, Linux Privilege Escalation, Binary Inspection" }
      ],
      projects: [
        { name: "Cross-Protocol Traffic Fingerprinting Research", stack: "Python, Packet Metadata, Statistical Analysis", desc: "Conducted cybersecurity research into side-channel metadata leakage, packet burst intervals, and traffic signatures across protocol boundaries. Engineered Python scripts classifying encrypted traffic patterns without decrypting payload." },
        { name: "Z-Protocol Wire Transport & Handshake State Machine", stack: "Python, Raw Sockets, Binary Framing, CRC32", desc: "Designed experimental Layer-4 binary transport protocol on raw Python sockets. Specified 16-byte binary header with bitmask flags (SYN, ACK, FIN, RST, PSH) and implemented strict state machines and CRC32 verification." },
        { name: "ONey Secure Remote Access & Encrypted P2P Tunneling", stack: "Python, Cryptography, UDP Sockets", desc: "Developed encrypted peer-to-peer remote administration client bypassing centralized relay vulnerabilities. Integrated host identity verification and cryptographic handshake mechanisms." },
        { name: "Automated Linux Host Security Hardening Suite", stack: "Ansible, UFW, SSH, Linux", desc: "Created automated playbooks eliminating common server misconfigurations across distributed Linux hosts. Enforced default-deny ingress firewall policies and restricted SSH attack surfaces." }
      ],
      certs: [
        "Yukthi CTF 2.0 (National-Level CTF) — Tamil Nadu Police Cyber Crime Wing & Selfmade Ninja Academy",
        "0xTi - HackTiVate 24-Hour CTF (Titanium 2026) — Rajalakshmi Engineering College, Chennai",
        "L3m0n CTF 2025 (24-Hour CTF) — Amrita Vishwa Vidyapeetham",
        "Amazon ECS Knowledge Badge Assessment — AWS Credly Verified (Container isolation & IAM task roles)",
        "Certificate of Merit: Java + MongoDB (92% Score) — Hazhtech / IACT"
      ]
    },
    frontend: {
      title: "Frontend Engineer · React, JavaScript ES6+, UI/UX & Responsive Web Applications",
      summary: "Detail-driven Frontend Engineer focused on building responsive, performant, and accessible user interfaces. Skilled in React (v18+), modern JavaScript (ES6+), Tailwind CSS, and single-page application lifecycles. Experienced in engineering real-world e-commerce experiences with client-side state persistence (LocalStorage), authoring modular UI extension packages hooking into modern component runtimes, and building real-time browser event telemetry tools. Passionate about clean design systems, responsive typography, micro-interactions, and fast load speeds.",
      skills: [
        { label: "Core Frontend", val: "JavaScript (ES6+ / ESNext), HTML5 Semantic Architecture, CSS3 / Modern Flexbox & CSS Grid, TypeScript, DOM API" },
        { label: "Frameworks & UI Libraries", val: "React (Functional Components, Custom Hooks, Context), Next.js, Tailwind CSS, Mithril.js, Responsive Mobile-First Design" },
        { label: "State & Storage", val: "React State/Reducer, Context API, Browser LocalStorage, SessionStorage, Event Queues" },
        { label: "Performance & Tooling", val: "Web Vitals, Responsive Images, Vite, Webpack, PostCSS, Git/GitHub, Chrome DevTools, Postman" }
      ],
      projects: [
        { name: "Shahihennaholic Bridal E-Commerce Storefront", stack: "HTML5, CSS3, JavaScript, LocalStorage", desc: "Engineered responsive web catalog and ordering interface for organic bridal henna brand. Designed interactive cart with instant price computation and browser LocalStorage state persistence. Automated WhatsApp order payload builder." },
        { name: "FLARUM1 — Modular UI Component Extension", stack: "JavaScript, Mithril.js, DOM Extensions", desc: "Developed frontend extension extending Flarum community platform with customized user interface styling, themes, and interactive hooks. Programmed lifecycle hooks into single-page application router events." },
        { name: "Browser DOM Telemetry & Interaction Monitor", stack: "Python, JavaScript DOM Events, Real-Time Streams", desc: "Created monitoring utility instrumenting client browser sessions to capture active DOM mutations, click paths, and scroll interactions in real-time with zero-jank JSON buffer batching." },
        { name: "Interactive DevOps Command Center (Personal Portfolio)", stack: "Modern CSS, Vanilla JS, HTML5 Canvas", desc: "Built interactive dark/light theme systems dashboard featuring responsive multi-node telemetry grids, particle background animations, and dynamic wire protocol bitmask toggles." }
      ],
      certs: [
        "Certificate of Merit: Java + MongoDB (92% Score) — Hazhtech / IACT (Programming & data structures)",
        "Amazon ECS Knowledge Badge Assessment — Amazon Web Services (AWS) · Credly Official",
        "Cloud Game Development Knowledge Badge — Amazon Web Services (AWS) · Credly Official",
        "Deploying a CI/CD Pipeline using AWS CDK — AWS Skill Builder Official Lab",
        "24-Hour Hackathons: Tamil Nadu Police Yukthi CTF 2.0, Amrita L3m0n CTF, HackTiVate 2026"
      ]
    }
  };

  let currentDomainKey = "fullstack";

  function renderResumeBody(domainKey) {
    currentDomainKey = domainKey;
    const r = domainResumes[domainKey] || domainResumes.fullstack;
    if (!dynamicResumeBody) return;

    const skillsHtml = r.skills.map(s => `
      <div style="margin-bottom: 0.35rem; font-size: 0.85rem;">
        <b style="color: var(--text-primary);">${s.label}:</b> <span style="color: var(--text-muted);">${s.val}</span>
      </div>
    `).join("");

    const projectsHtml = r.projects.map(p => `
      <div style="margin-bottom: 0.85rem;">
        <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap;">
          <h4 style="font-size: 0.95rem; font-weight: 800; color: var(--text-primary); margin: 0;">${p.name}</h4>
          <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #10b981; font-weight: 700;">${p.stack}</span>
        </div>
        <p style="font-size: 0.84rem; line-height: 1.5; margin-top: 0.25rem; color: var(--text-muted);">${p.desc}</p>
      </div>
    `).join("");

    const certsHtml = r.certs.map(c => `
      <li style="font-size: 0.84rem; margin-bottom: 0.3rem; color: var(--text-muted);">${c}</li>
    `).join("");

    dynamicResumeBody.innerHTML = `
      <div>
        <h1 style="font-size: 2rem; font-weight: 900; letter-spacing: -0.02em; color: var(--text-primary);">Dhayalan Kaniappan</h1>
        <p style="font-family: var(--font-mono); font-size: 0.95rem; font-weight: 700; margin-top: 0.2rem; color: #10b981;">
          ${r.title}
        </p>
        <p style="font-size: 0.82rem; color: var(--text-subtle); margin-top: 0.4rem;">
          Email: dhaya3486@gmail.com · Location: Coimbatore, Tamil Nadu, India · GitHub: github.com/DHAYALANKANIAPPAN · LinkedIn: linkedin.com/in/dhaya05
        </p>

        <hr style="margin: 1.25rem 0; border: none; border-top: 1px solid var(--border-main);" />

        <h3 style="font-size: 0.92rem; text-transform: uppercase; font-weight: 800; margin-bottom: 0.4rem; color: var(--text-primary); letter-spacing: 0.05em;">Professional Summary</h3>
        <p style="font-size: 0.86rem; line-height: 1.6; color: var(--text-muted); margin-bottom: 1.25rem;">
          ${r.summary}
        </p>

        <h3 style="font-size: 0.92rem; text-transform: uppercase; font-weight: 800; margin-bottom: 0.5rem; color: var(--text-primary); letter-spacing: 0.05em;">Technical Skills</h3>
        <div style="background: rgba(255,255,255,0.02); padding: 0.75rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); margin-bottom: 1.25rem;">
          ${skillsHtml}
        </div>

        <h3 style="font-size: 0.92rem; text-transform: uppercase; font-weight: 800; margin-bottom: 0.6rem; color: var(--text-primary); letter-spacing: 0.05em;">Key Projects &amp; Systems</h3>
        <div style="margin-bottom: 1.25rem;">
          ${projectsHtml}
        </div>

        <h3 style="font-size: 0.92rem; text-transform: uppercase; font-weight: 800; margin-bottom: 0.5rem; color: var(--text-primary); letter-spacing: 0.05em;">Verified Certifications &amp; Accreditations</h3>
        <ul style="padding-left: 1.2rem; margin-bottom: 1.25rem; line-height: 1.6;">
          ${certsHtml}
        </ul>

        <h3 style="font-size: 0.92rem; text-transform: uppercase; font-weight: 800; margin-bottom: 0.35rem; color: var(--text-primary); letter-spacing: 0.05em;">Education</h3>
        <p style="font-size: 0.85rem; color: var(--text-muted);">
          <b style="color: var(--text-primary);">Bachelor of Engineering (B.E.)</b> — Sri Shakthi Institute of Engineering and Technology, Coimbatore (2023 — 2027)
        </p>
      </div>
    `;
  }

  // Domain pill switching
  domainPills.forEach(pill => {
    pill.addEventListener("click", () => {
      domainPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const key = pill.getAttribute("data-domain") || "fullstack";
      renderResumeBody(key);
      showToast(`Loaded ${pill.textContent.trim()} Resume`, "info");
    });
  });

  // Modal Copy Button
  if (modalCopyBtn) {
    modalCopyBtn.addEventListener("click", () => {
      copyResumeMarkdown(currentDomainKey);
    });
  }

  function copyResumeMarkdown(key) {
    const r = domainResumes[key] || domainResumes.fullstack;
    const skillsText = r.skills.map(s => `* **${s.label}:** ${s.val}`).join("\n");
    const projText = r.projects.map(p => `### ${p.name} | ${p.stack}\n* ${p.desc}`).join("\n\n");
    const certText = r.certs.map(c => `* ${c}`).join("\n");

    const md = `
# DHAYALAN KANIAPPAN
**${r.title}**
Email: dhaya3486@gmail.com | Location: Coimbatore, Tamil Nadu, India
GitHub: https://github.com/DHAYALANKANIAPPAN | LinkedIn: https://www.linkedin.com/in/dhaya05/

---

## PROFESSIONAL SUMMARY
${r.summary}

---

## TECHNICAL SKILLS
${skillsText}

---

## KEY PROJECTS
${projText}

---

## CERTIFICATIONS & HONORS
${certText}

---

## EDUCATION
**Bachelor of Engineering (B.E.)** — Sri Shakthi Institute of Engineering and Technology, Coimbatore (2023 — 2027)
`.trim();

    navigator.clipboard.writeText(md);
    showToast(`Copied ${r.title} resume in Markdown format!`, "success");
  }

  openResumeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      renderResumeBody(currentDomainKey);
      resumeModal?.classList.add("open");
    });
  });

  document.querySelectorAll(".modal-close-btn, .modal-overlay").forEach(el => {
    el.addEventListener("click", (e) => {
      if (e.target === el || el.classList.contains("modal-close-btn")) {
        document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("open"));
      }
    });
  });

  const copyEmailBtn = document.getElementById("copy-email-btn");
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      navigator.clipboard.writeText("dhaya3486@gmail.com");
      showToast("Copied dhaya3486@gmail.com to clipboard!", "success");
    });
  }

  const copyResumeBtn = document.getElementById("copy-resume-text-btn");
  if (copyResumeBtn) {
    copyResumeBtn.addEventListener("click", () => {
      copyResumeMarkdown("fullstack");
    });
  }
}

/* 10. Toast Notification Helper */
function showToast(message, type = "success") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";

  let icon = `✓`;
  if (type === "info") icon = `ℹ`;
  if (type === "error") icon = `✕`;

  toast.innerHTML = `<span style="font-weight: bold;">${icon}</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.25s ease";
    setTimeout(() => toast.remove(), 250);
  }, 3000);
}

/* 11. Lightweight Subtle Background Canvas */
function initParticles() {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  let mouse = { x: -1000, y: -1000 };
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener("mouseleave", () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  const particleCount = window.innerWidth < 768 ? 28 : 55;
  const particles = Array.from({ length: particleCount }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1.8 + 0.8,
    vx: (Math.random() - 0.5) * 0.45,
    vy: (Math.random() - 0.5) * 0.45,
    alpha: Math.random() * 0.35 + 0.2
  }));

  function draw() {
    ctx.clearRect(0, 0, width, height);

    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    const dotColor = isLight ? "16, 185, 129" : "56, 189, 248";
    const lineColor = isLight ? "16, 185, 129" : "0, 229, 255";

    // Draw connecting mesh lines between nearby nodes
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          const lineAlpha = (1 - dist / 110) * 0.18;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${lineColor}, ${lineAlpha})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }

      // Connect to mouse cursor
      const mdx = particles[i].x - mouse.x;
      const mdy = particles[i].y - mouse.y;
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mdist < 140) {
        const mAlpha = (1 - mdist / 140) * 0.35;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(16, 185, 129, ${mAlpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    // Render nodes
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${dotColor}, ${p.alpha})`;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  draw();
}

/* ─────────────────────────────────────────────────────────────
   DEVOPS COMMAND CENTER & SYSTEMS LAB LOGIC
   ───────────────────────────────────────────────────────────── */

function initDevOpsLab() {
  initClusterTelemetry();
  initCicdSimulator();
  initSystemsProtocolLab();
  initAnsibleRunner();
  initNodeInspector();
}

/* 1. Real-time Cluster Jitter & Health Monitor with Interactive Simulation */
function initClusterTelemetry() {
  const node1Ping = document.getElementById("node1-ping");
  const node2Ping = document.getElementById("node2-ping");
  const node3Ping = document.getElementById("node3-ping");
  const node4Ping = document.getElementById("node4-ping");

  const node1Cpu = document.getElementById("node1-cpu");
  const node1CpuBar = document.getElementById("node1-cpu-bar");
  const node2Cpu = document.getElementById("node2-cpu");
  const node2CpuBar = document.getElementById("node2-cpu-bar");
  const node3Cpu = document.getElementById("node3-cpu");
  const node3CpuBar = document.getElementById("node3-cpu-bar");
  const node4Cpu = document.getElementById("node4-cpu");
  const node4CpuBar = document.getElementById("node4-cpu-bar");

  const simBtns = document.querySelectorAll(".cluster-sim-btn");
  let currentSimMode = "normal"; // 'normal', 'spike', 'failover'

  simBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      simBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentSimMode = btn.getAttribute("data-load") || "normal";

      if (currentSimMode === "spike") {
        if (typeof showToast === "function") {
          showToast("Simulating 10,000 req/sec Spike: Gateway & Workers auto-scaling!", "info");
        }
      } else if (currentSimMode === "failover") {
        if (typeof showToast === "function") {
          showToast("Simulating Ingress Failover: Traffic rerouted via Secondary TLS Gateway!", "info");
        }
      } else {
        if (typeof showToast === "function") {
          showToast("Cluster load normalized: 99.98% fleet stability", "success");
        }
      }
      updateTelemetry();
    });
  });

  function updateTelemetry() {
    if (!node1Ping) return;

    if (currentSimMode === "spike") {
      // Traffic Spike: High CPU, slightly higher ping, auto-scaling runner active
      if (node1Ping) node1Ping.textContent = `Ping: ${22 + Math.floor(Math.random() * 6)}ms`;
      if (node2Ping) node2Ping.textContent = `Ping: ${29 + Math.floor(Math.random() * 8)}ms`;
      if (node3Ping) node3Ping.textContent = `Ping: ${16 + Math.floor(Math.random() * 4)}ms`;
      if (node4Ping) node4Ping.textContent = `Ping: ${32 + Math.floor(Math.random() * 9)}ms`;

      const cpu1 = 78 + Math.floor(Math.random() * 12);
      if (node1Cpu) node1Cpu.textContent = `${cpu1}% (Scaling)`;
      if (node1CpuBar) {
        node1CpuBar.style.width = `${cpu1}%`;
        node1CpuBar.style.background = "#f59e0b";
      }

      const cpu2 = 84 + Math.floor(Math.random() * 8);
      if (node2Cpu) node2Cpu.textContent = `${cpu2}% (Buffering)`;
      if (node2CpuBar) {
        node2CpuBar.style.width = `${cpu2}%`;
        node2CpuBar.style.background = "#f59e0b";
      }

      const cpu4 = 62 + Math.floor(Math.random() * 10);
      if (node4Cpu) node4Cpu.textContent = `${cpu4}% (+2 Fargate Tasks)`;
      if (node4CpuBar) {
        node4CpuBar.style.width = `${cpu4}%`;
        node4CpuBar.style.background = "#f59e0b";
      }
    } else if (currentSimMode === "failover") {
      // Failover mode: Node 1 simulated restart, Node 4 picking up ingress route
      if (node1Ping) node1Ping.textContent = `Ping: 2ms (Internal Sync)`;
      if (node2Ping) node2Ping.textContent = `Ping: 14ms (P2P Mesh)`;
      if (node3Ping) node3Ping.textContent = `Ping: 9ms (Replica Read)`;
      if (node4Ping) node4Ping.textContent = `Ping: 16ms (Hot-Standby)`;

      if (node1Cpu) node1Cpu.textContent = `4% (Standby Reload)`;
      if (node1CpuBar) {
        node1CpuBar.style.width = `8%`;
        node1CpuBar.style.background = "#38bdf8";
      }

      const cpu4 = 42 + Math.floor(Math.random() * 5);
      if (node4Cpu) node4Cpu.textContent = `${cpu4}% (Active Proxy Route)`;
      if (node4CpuBar) {
        node4CpuBar.style.width = `${cpu4}%`;
        node4CpuBar.style.background = "#10b981";
      }
    } else {
      // Normal stable mode
      if (node1Ping) node1Ping.textContent = `Ping: ${13 + Math.floor(Math.random() * 4)}ms`;
      if (node2Ping) node2Ping.textContent = `Ping: ${18 + Math.floor(Math.random() * 5)}ms`;
      if (node3Ping) node3Ping.textContent = `Ping: ${10 + Math.floor(Math.random() * 3)}ms`;
      if (node4Ping) node4Ping.textContent = `Ping: ${21 + Math.floor(Math.random() * 4)}ms`;

      const cpu1 = 16 + Math.floor(Math.random() * 6);
      if (node1Cpu) node1Cpu.textContent = `${cpu1}%`;
      if (node1CpuBar) {
        node1CpuBar.style.width = `${cpu1}%`;
        node1CpuBar.style.background = "#00e5ff";
      }

      const cpu2 = 31 + Math.floor(Math.random() * 8);
      if (node2Cpu) node2Cpu.textContent = `${cpu2}%`;
      if (node2CpuBar) {
        node2CpuBar.style.width = `${cpu2}%`;
        node2CpuBar.style.background = "#10b981";
      }

      const cpu3 = 12 + Math.floor(Math.random() * 4);
      if (node3Cpu) node3Cpu.textContent = `${cpu3}%`;
      if (node3CpuBar) {
        node3CpuBar.style.width = `${cpu3}%`;
        node3CpuBar.style.background = "#a855f7";
      }

      const cpu4 = 8 + Math.floor(Math.random() * 5);
      if (node4Cpu) node4Cpu.textContent = `${cpu4}%`;
      if (node4CpuBar) {
        node4CpuBar.style.width = `${cpu4}%`;
        node4CpuBar.style.background = "#f59e0b";
      }
    }
  }

  if (node1Ping) {
    setInterval(updateTelemetry, 3500);
  }
}

/* 2. Interactive CI/CD Pipeline Simulator */
function initCicdSimulator() {
  const runBtn = document.getElementById("cicd-run-btn");
  const resetBtn = document.getElementById("cicd-reset-btn");
  const consoleEl = document.getElementById("cicd-console");
  const statusText = document.getElementById("cicd-status-text");

  if (!runBtn || !consoleEl) return;

  let isRunning = false;
  let pipelineTimers = [];

  const stages = [
    {
      id: "stage-1",
      icon: "stage-icon-1",
      delay: 200,
      logs: [
        { cls: "log-cmd", text: "$ git push origin main -> commit 7f8a91c" },
        { cls: "", text: "Enumerating objects: 24, done. Compressing objects: 100% (18/18)." },
        { cls: "log-info", text: "Webhook received by CI Runner: Triggering workflow 'Production Deploy'." }
      ]
    },
    {
      id: "stage-2",
      icon: "stage-icon-2",
      delay: 1100,
      logs: [
        { cls: "log-cmd", text: "$ flake8 . && trivy fs --security-checks vuln,config ." },
        { cls: "log-ok", text: "[AUDIT OK] 0 Critical vulnerabilities found. Python PEP8 static analysis passed." }
      ]
    },
    {
      id: "stage-3",
      icon: "stage-icon-3",
      delay: 2100,
      logs: [
        { cls: "log-cmd", text: "$ pytest tests/ -v --cov=app" },
        { cls: "log-ok", text: "================ 42 passed in 1.14s (Coverage: 96.4%) ================" }
      ]
    },
    {
      id: "stage-4",
      icon: "stage-icon-4",
      delay: 3100,
      logs: [
        { cls: "log-cmd", text: "$ docker build --target production -t registry.dhayalan.dev/app:latest ." },
        { cls: "", text: "[+] Building 1.1s (7/7) FINISHED => CACHED layers [1..5]" },
        { cls: "log-ok", text: "=> exporting to image sha256:8b4f17c (Image size: 48.2MB Alpine)" }
      ]
    },
    {
      id: "stage-5",
      icon: "stage-icon-5",
      delay: 4100,
      logs: [
        { cls: "log-cmd", text: "$ ansible-playbook -i inventory.ini deploy.yml --forks 3" },
        { cls: "log-warn", text: "TASK [Rolling Restart & Health Check] => node1, node2, node3 updated sequentially" },
        { cls: "log-ok", text: "PLAY RECAP: node1: ok=14 changed=2 | node2: ok=14 changed=2 | node3: ok=14 changed=2" }
      ]
    },
    {
      id: "stage-6",
      icon: "stage-icon-6",
      delay: 5100,
      logs: [
        { cls: "log-cmd", text: "$ curl -I https://dhayalan.dev/health" },
        { cls: "log-ok", text: "HTTP/2 200 OK — Response: 14ms. Cluster Healthy. ZERO DOWNTIME VERIFIED." }
      ]
    }
  ];

  runBtn.addEventListener("click", () => {
    if (isRunning) return;
    isRunning = true;
    runBtn.disabled = true;
    runBtn.style.opacity = "0.5";

    // Reset UI before run
    resetStages();
    consoleEl.innerHTML = "";
    if (statusText) statusText.textContent = "STATUS: PIPELINE RUNNING...";

    stages.forEach((stage, idx) => {
      // Step to active
      const t1 = setTimeout(() => {
        const stageEl = document.getElementById(stage.id);
        const iconEl = document.getElementById(stage.icon);
        if (stageEl) stageEl.classList.add("active");
        if (iconEl) iconEl.textContent = "⏳";

        stage.logs.forEach(log => {
          const logDiv = document.createElement("div");
          logDiv.className = `cicd-log-line ${log.cls}`;
          const time = new Date().toLocaleTimeString("en-US", { hour12: false });
          logDiv.textContent = `[${time}] ${log.text}`;
          consoleEl.appendChild(logDiv);
          consoleEl.scrollTop = consoleEl.scrollHeight;
        });
      }, stage.delay);

      // Step to success
      const t2 = setTimeout(() => {
        const stageEl = document.getElementById(stage.id);
        const iconEl = document.getElementById(stage.icon);
        if (stageEl) {
          stageEl.classList.remove("active");
          stageEl.classList.add("success");
        }
        if (iconEl) iconEl.textContent = "🟢";

        // If last stage completed
        if (idx === stages.length - 1) {
          isRunning = false;
          runBtn.disabled = false;
          runBtn.style.opacity = "1";
          if (statusText) statusText.textContent = "STATUS: PIPELINE SUCCESS · ZERO DOWNTIME (5.2s)";
          if (typeof showToast === "function") {
            showToast("Production CI/CD deployment succeeded! (Zero downtime)", "info");
          }
        }
      }, stage.delay + 750);

      pipelineTimers.push(t1, t2);
    });
  });

  resetBtn.addEventListener("click", () => {
    pipelineTimers.forEach(t => clearTimeout(t));
    pipelineTimers = [];
    isRunning = false;
    runBtn.disabled = false;
    runBtn.style.opacity = "1";
    resetStages();
    consoleEl.innerHTML = `
      <div class="cicd-log-line log-cmd">$ git status</div>
      <div class="cicd-log-line">On branch main. Ready for commit trigger.</div>
      <div class="cicd-log-line log-info">Click [Trigger Build &amp; Deploy] above to run automated CI/CD simulation.</div>
    `;
    if (statusText) statusText.textContent = "STATUS: IDLE · READY FOR COMMIT TRIGGER";
  });

  function resetStages() {
    stages.forEach(stage => {
      const stageEl = document.getElementById(stage.id);
      const iconEl = document.getElementById(stage.icon);
      if (stageEl) {
        stageEl.classList.remove("active", "success");
      }
      if (iconEl) iconEl.textContent = "⚪";
    });
  }
}

/* 3. Systems Protocol Lab (Z-Protocol & ONey) */
function initSystemsProtocolLab() {
  // Tab Switching
  const tabZproto = document.getElementById("tab-btn-zproto");
  const tabOney = document.getElementById("tab-btn-oney");
  const paneZproto = document.getElementById("pane-zproto");
  const paneOney = document.getElementById("pane-oney");

  if (tabZproto && tabOney && paneZproto && paneOney) {
    tabZproto.addEventListener("click", () => {
      tabZproto.classList.add("active");
      tabOney.classList.remove("active");
      paneZproto.style.display = "block";
      paneOney.style.display = "none";
    });

    tabOney.addEventListener("click", () => {
      tabOney.classList.add("active");
      tabZproto.classList.remove("active");
      paneZproto.style.display = "none";
      paneOney.style.display = "block";
    });
  }

  // Z-Protocol Flag Toggle Inspector
  const flagBtns = document.querySelectorAll(".flag-toggle-btn");
  const flagsHexEl = document.getElementById("packet-flags-hex");
  const flagsLabelEl = document.getElementById("packet-flags-label");
  const flagsMaskEl = document.getElementById("active-flags-mask");
  const explanationEl = document.getElementById("packet-state-explanation");
  const crcEl = document.getElementById("packet-crc-hex");

  if (!flagBtns.length || !flagsHexEl) return;

  const flagDescriptions = {
    SYN: "Connection handshake initiation. Requests sequence number synchronization.",
    ACK: "Acknowledgment of received sequence number and stream boundary.",
    FIN: "Graceful stream teardown request from raw socket endpoint.",
    RST: "Immediate ungraceful connection reset / reject.",
    PSH: "Push buffer immediately to receiver application layer without waiting for full frame."
  };

  flagBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      updateFlags();
    });
  });

  function updateFlags() {
    let mask = 0;
    const activeNames = [];

    flagBtns.forEach(btn => {
      if (btn.classList.contains("active")) {
        const bit = parseInt(btn.getAttribute("data-bit") || "0", 10);
        const name = btn.getAttribute("data-flag") || "";
        mask |= bit;
        activeNames.push(name);
      }
    });

    const hexStr = "0x" + mask.toString(16).padStart(2, "0").toUpperCase();
    const binStr = "0b" + mask.toString(2).padStart(8, "0");

    flagsHexEl.textContent = hexStr;
    if (flagsMaskEl) flagsMaskEl.textContent = `Bitmask: ${binStr}`;

    if (activeNames.length === 0) {
      flagsLabelEl.textContent = "No Flags Active";
      flagsHexEl.style.color = "var(--text-subtle)";
      explanationEl.innerHTML = `👉 <b>State:</b> Raw payload transfer frame without transport state control flags.`;
      if (crcEl) crcEl.textContent = "0x1A2B3C4D";
    } else {
      flagsHexEl.style.color = "#10b981";
      flagsLabelEl.textContent = `${activeNames.join(" + ")} Active`;

      // Meaningful state summaries
      let expText = "";
      if (activeNames.includes("SYN") && activeNames.includes("ACK")) {
        expText = "<b>3-Way Handshake SYN-ACK Response:</b> Receiver verifies connection, sets sequence window, and acknowledges client.";
      } else if (activeNames.includes("SYN")) {
        expText = "<b>Connection Initiation (SYN):</b> Initiates Layer-4 3-way handshake over raw Python sockets.";
      } else if (activeNames.includes("FIN") && activeNames.includes("ACK")) {
        expText = "<b>Graceful Disconnect (FIN-ACK):</b> Confirms orderly shutdown of raw socket session.";
      } else if (activeNames.includes("RST")) {
        expText = "<b>Connection Reset (RST):</b> Immediate abnormal abort triggered (e.g. invalid CRC32 or sequence mismatch).";
      } else {
        expText = activeNames.map(n => flagDescriptions[n] || n).join(" ");
      }

      explanationEl.innerHTML = `👉 <b>State:</b> ${expText}`;

      // Dynamically compute mock CRC32 with mask
      const mockCrc = ((0x9E3779B9 ^ (mask * 0x1000193)) >>> 0).toString(16).toUpperCase();
      if (crcEl) crcEl.textContent = `0x${mockCrc}`;
    }
  }
}

/* 4. Interactive Ansible Playbook Automation Runner */
function initAnsibleRunner() {
  const tabs = document.querySelectorAll(".ansible-tab-pill");
  const runBtn = document.getElementById("ansible-run-btn");
  const fileLabel = document.getElementById("ansible-file-label");
  const statusBadge = document.getElementById("ansible-status-badge");
  const consoleEl = document.getElementById("ansible-console");

  if (!runBtn || !consoleEl) return;

  let activePlaybook = "hardening";
  let isRunning = false;
  let runnerTimers = [];

  const playbooksData = {
    hardening: {
      file: "playbooks/security-hardening.yml",
      yaml: [
        { cls: "log-cmd", text: "$ cat playbooks/security-hardening.yml" },
        { cls: "", text: "---", style: "color: #38bdf8;" },
        { cls: "", text: "- name: Fleet Server Hardening & UFW Firewall Policy", style: "color: #38bdf8;" },
        { cls: "", text: "  hosts: all" },
        { cls: "", text: "  become: true" },
        { cls: "", text: "  tasks:" },
        { cls: "", text: "    - name: Ensure UFW firewall is active & default deny" },
        { cls: "", text: "      community.general.ufw: state=enabled policy=deny direction=incoming" },
        { cls: "", text: "    - name: Allow SSH on secure port & HTTP/HTTPS" },
        { cls: "", text: "      community.general.ufw: rule=allow port={{ item }}" },
        { cls: "", text: "      loop: ['22/tcp', '80/tcp', '443/tcp']" },
        { cls: "", text: "    - name: Disable Root Password SSH Login" },
        { cls: "", text: "      ansible.builtin.lineinfile: path=/etc/ssh/sshd_config regexp='^PermitRootLogin' line='PermitRootLogin prohibit-password'" },
        { cls: "", text: "      notify: restart sshd" }
      ],
      runLogs: [
        { delay: 100, cls: "log-cmd", text: "$ ansible-playbook -i inventories/production.ini playbooks/security-hardening.yml -v" },
        { delay: 400, cls: "", text: "PLAY [Fleet Server Hardening & UFW Firewall Policy] *************************************" },
        { delay: 800, cls: "log-info", text: "TASK [Gathering Facts] *****************************************************************" },
        { delay: 1200, cls: "log-ok", text: "ok: [node-01.gateway.local]" },
        { delay: 1400, cls: "log-ok", text: "ok: [node-02.telemetry.local]" },
        { delay: 1600, cls: "log-ok", text: "ok: [node-03.database.local]" },
        { delay: 2000, cls: "log-info", text: "TASK [Ensure UFW firewall is active & default deny] ************************************" },
        { delay: 2400, cls: "log-ok", text: "ok: [node-01.gateway.local]" },
        { delay: 2600, cls: "log-warn", text: "changed: [node-02.telemetry.local] => (ufw status: active; incoming: deny)" },
        { delay: 2800, cls: "log-ok", text: "ok: [node-03.database.local]" },
        { delay: 3200, cls: "log-info", text: "TASK [Allow SSH on secure port & HTTP/HTTPS] *******************************************" },
        { delay: 3500, cls: "log-ok", text: "ok: [node-01.gateway.local] => (item=22/tcp, 80/tcp, 443/tcp)" },
        { delay: 3700, cls: "log-ok", text: "ok: [node-02.telemetry.local] => (item=22/tcp, 80/tcp, 443/tcp)" },
        { delay: 3900, cls: "log-ok", text: "ok: [node-03.database.local] => (item=22/tcp, 80/tcp, 443/tcp)" },
        { delay: 4300, cls: "log-info", text: "TASK [Disable Root Password SSH Login] *************************************************" },
        { delay: 4600, cls: "log-warn", text: "changed: [node-01.gateway.local] => (sshd_config updated)" },
        { delay: 4800, cls: "log-ok", text: "ok: [node-02.telemetry.local]" },
        { delay: 5000, cls: "log-warn", text: "changed: [node-03.database.local] => (sshd_config updated)" },
        { delay: 5400, cls: "log-info", text: "RUNNING HANDLER [restart sshd] **********************************************************" },
        { delay: 5700, cls: "log-warn", text: "changed: [node-01.gateway.local] & changed: [node-03.database.local]" },
        { delay: 6100, cls: "", text: "PLAY RECAP *****************************************************************************" },
        { delay: 6300, cls: "log-ok", text: "node-01.gateway.local   : ok=5    changed=2    unreachable=0    failed=0    skipped=0" },
        { delay: 6450, cls: "log-ok", text: "node-02.telemetry.local : ok=5    changed=1    unreachable=0    failed=0    skipped=0" },
        { delay: 6600, cls: "log-ok", text: "node-03.database.local  : ok=5    changed=2    unreachable=0    failed=0    skipped=0" },
        { delay: 6800, cls: "log-ok", text: "[SUCCESS] 3/3 target nodes hardened and synchronized. Zero unreachable, zero failed." }
      ]
    },
    docker: {
      file: "playbooks/docker-engine-setup.yml",
      yaml: [
        { cls: "log-cmd", text: "$ cat playbooks/docker-engine-setup.yml" },
        { cls: "", text: "---", style: "color: #38bdf8;" },
        { cls: "", text: "- name: Provision Container Engine & Daemon Log Limits", style: "color: #38bdf8;" },
        { cls: "", text: "  hosts: docker_swarm" },
        { cls: "", text: "  become: true" },
        { cls: "", text: "  tasks:" },
        { cls: "", text: "    - name: Add Docker Official GPG APT Key" },
        { cls: "", text: "      ansible.builtin.apt_key: url=https://download.docker.com/linux/ubuntu/gpg state=present" },
        { cls: "", text: "    - name: Install Docker CE, CLI & Containerd Runtime" },
        { cls: "", text: "      ansible.builtin.apt: name=['docker-ce', 'docker-ce-cli', 'containerd.io'] state=latest" },
        { cls: "", text: "    - name: Deploy daemon.json with JSON log rotation (max-size=20m)" },
        { cls: "", text: "      ansible.builtin.copy: dest=/etc/docker/daemon.json content='{\"log-driver\":\"json-file\",\"log-opts\":{\"max-size\":\"20m\",\"max-file\":\"3\"}}'" },
        { cls: "", text: "      notify: restart docker" }
      ],
      runLogs: [
        { delay: 100, cls: "log-cmd", text: "$ ansible-playbook -i inventories/production.ini playbooks/docker-engine-setup.yml" },
        { delay: 400, cls: "", text: "PLAY [Provision Container Engine & Daemon Log Limits] **********************************" },
        { delay: 800, cls: "log-info", text: "TASK [Gathering Facts] *****************************************************************" },
        { delay: 1200, cls: "log-ok", text: "ok: [node-01.gateway.local]" },
        { delay: 1400, cls: "log-ok", text: "ok: [node-04.aws-runner.cloud]" },
        { delay: 1900, cls: "log-info", text: "TASK [Add Docker Official GPG APT Key] *************************************************" },
        { delay: 2300, cls: "log-ok", text: "ok: [node-01.gateway.local]" },
        { delay: 2500, cls: "log-ok", text: "ok: [node-04.aws-runner.cloud]" },
        { delay: 2900, cls: "log-info", text: "TASK [Install Docker CE, CLI & Containerd Runtime] *************************************" },
        { delay: 3400, cls: "log-ok", text: "ok: [node-01.gateway.local] (already latest 26.0.1)" },
        { delay: 3700, cls: "log-ok", text: "ok: [node-04.aws-runner.cloud] (already latest 26.0.1)" },
        { delay: 4100, cls: "log-info", text: "TASK [Deploy daemon.json with JSON log rotation] ***************************************" },
        { delay: 4500, cls: "log-warn", text: "changed: [node-01.gateway.local] => (log rotation configured)" },
        { delay: 4700, cls: "log-ok", text: "ok: [node-04.aws-runner.cloud]" },
        { delay: 5100, cls: "log-info", text: "RUNNING HANDLER [restart docker] ********************************************************" },
        { delay: 5500, cls: "log-warn", text: "changed: [node-01.gateway.local] => systemctl restart docker.service" },
        { delay: 5900, cls: "", text: "PLAY RECAP *****************************************************************************" },
        { delay: 6100, cls: "log-ok", text: "node-01.gateway.local    : ok=5    changed=2    unreachable=0    failed=0    skipped=0" },
        { delay: 6250, cls: "log-ok", text: "node-04.aws-runner.cloud : ok=4    changed=0    unreachable=0    failed=0    skipped=0" },
        { delay: 6400, cls: "log-ok", text: "[SUCCESS] Docker runtime verified & daemon telemetry synchronized." }
      ]
    },
    oney: {
      file: "playbooks/oney-remote-daemon.yml",
      yaml: [
        { cls: "log-cmd", text: "$ cat playbooks/oney-remote-daemon.yml" },
        { cls: "", text: "---", style: "color: #38bdf8;" },
        { cls: "", text: "- name: Deploy ONey Encrypted P2P Daemon & Systemd Unit", style: "color: #38bdf8;" },
        { cls: "", text: "  hosts: edge_nodes" },
        { cls: "", text: "  become: true" },
        { cls: "", text: "  tasks:" },
        { cls: "", text: "    - name: Deploy ONey Executable Binary to /usr/local/bin" },
        { cls: "", text: "      ansible.builtin.copy: src=files/oney-agent dest=/usr/local/bin/oney-agent mode='0755'" },
        { cls: "", text: "    - name: Deploy Systemd Unit Template" },
        { cls: "", text: "      ansible.builtin.template: src=templates/oney-agent.service.j2 dest=/etc/systemd/system/oney-agent.service" },
        { cls: "", text: "    - name: Reload Systemd Daemon & Enable Service" },
        { cls: "", text: "      ansible.builtin.systemd: name=oney-agent state=started enabled=yes daemon_reload=yes" }
      ],
      runLogs: [
        { delay: 100, cls: "log-cmd", text: "$ ansible-playbook -i inventories/production.ini playbooks/oney-remote-daemon.yml" },
        { delay: 400, cls: "", text: "PLAY [Deploy ONey Encrypted P2P Daemon & Systemd Unit] **********************************" },
        { delay: 800, cls: "log-info", text: "TASK [Gathering Facts] *****************************************************************" },
        { delay: 1200, cls: "log-ok", text: "ok: [node-02.telemetry.local]" },
        { delay: 1700, cls: "log-info", text: "TASK [Deploy ONey Executable Binary to /usr/local/bin] *********************************" },
        { delay: 2100, cls: "log-ok", text: "ok: [node-02.telemetry.local] => (SHA256 matches build release)" },
        { delay: 2500, cls: "log-info", text: "TASK [Deploy Systemd Unit Template] ****************************************************" },
        { delay: 2900, cls: "log-warn", text: "changed: [node-02.telemetry.local] => (unit /etc/systemd/system/oney-agent.service)" },
        { delay: 3300, cls: "log-info", text: "TASK [Reload Systemd Daemon & Enable Service] ******************************************" },
        { delay: 3800, cls: "log-warn", text: "changed: [node-02.telemetry.local] => (daemon_reload: true, active: running)" },
        { delay: 4200, cls: "", text: "PLAY RECAP *****************************************************************************" },
        { delay: 4400, cls: "log-ok", text: "node-02.telemetry.local : ok=4    changed=2    unreachable=0    failed=0    skipped=0" },
        { delay: 4600, cls: "log-ok", text: "[SUCCESS] ONey P2P daemon active on port UDP:9000 with systemd supervision." }
      ]
    }
  };

  function displayPlaybookYaml(pbKey) {
    const pb = playbooksData[pbKey];
    if (!pb) return;
    if (fileLabel) fileLabel.textContent = `PLAYBOOK: ${pb.file}`;
    if (statusBadge) {
      statusBadge.textContent = "STATUS: READY";
      statusBadge.style.color = "#10b981";
    }
    consoleEl.innerHTML = "";
    pb.yaml.forEach(line => {
      const lineDiv = document.createElement("div");
      lineDiv.className = `cicd-log-line ${line.cls}`;
      if (line.style) lineDiv.setAttribute("style", line.style);
      lineDiv.textContent = line.text;
      consoleEl.appendChild(lineDiv);
    });
    consoleEl.scrollTop = 0;
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      if (isRunning) return;
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activePlaybook = tab.getAttribute("data-playbook") || "hardening";
      displayPlaybookYaml(activePlaybook);
    });
  });

  runBtn.addEventListener("click", () => {
    if (isRunning) return;
    const pb = playbooksData[activePlaybook];
    if (!pb) return;

    isRunning = true;
    runBtn.disabled = true;
    runBtn.style.opacity = "0.5";
    if (statusBadge) {
      statusBadge.textContent = "STATUS: EXECUTING TASKS...";
      statusBadge.style.color = "#f59e0b";
    }

    consoleEl.innerHTML = "";
    runnerTimers.forEach(t => clearTimeout(t));
    runnerTimers = [];

    pb.runLogs.forEach((log, index) => {
      const timer = setTimeout(() => {
        const lineDiv = document.createElement("div");
        lineDiv.className = `cicd-log-line ${log.cls}`;
        lineDiv.textContent = log.text;
        consoleEl.appendChild(lineDiv);
        consoleEl.scrollTop = consoleEl.scrollHeight;

        if (index === pb.runLogs.length - 1) {
          isRunning = false;
          runBtn.disabled = false;
          runBtn.style.opacity = "1";
          if (statusBadge) {
            statusBadge.textContent = "STATUS: PLAY RECAP OK (ALL PASS)";
            statusBadge.style.color = "#10b981";
          }
          if (typeof showToast === "function") {
            showToast(`Ansible execution completed for ${pb.file}`, "info");
          }
        }
      }, log.delay);
      runnerTimers.push(timer);
    });
  });
}

/* 5. Live Node Diagnostics & Systemd Daemon Inspector */
function initNodeInspector() {
  const modal = document.getElementById("node-inspect-modal");
  const modalTitle = document.getElementById("node-modal-title");
  const modalContent = document.getElementById("node-modal-content");
  const restartBtn = document.getElementById("node-modal-restart-btn");
  const inspectBtns = document.querySelectorAll(".node-inspect-btn");

  if (!modal || !modalTitle || !modalContent) return;

  let currentNodeId = "node1";

  const nodeDiagnosticsData = {
    node1: {
      name: "node-01.gateway.local (Reverse Proxy & Ingress Gateway)",
      ip: "10.0.1.14",
      kernel: "Linux 6.8.0-45-generic x86_64 #45-Ubuntu SMP",
      load: "0.18, 0.22, 0.15",
      service: "caddy.service",
      serviceDesc: "Caddy Reverse Proxy & Automatic TLS Termination",
      systemdLogs: [
        "● caddy.service - Caddy Reverse Proxy & Ingress Gateway",
        "   Loaded: loaded (/lib/systemd/system/caddy.service; enabled; vendor preset: enabled)",
        "   Active: active (running) since Thu 2026-10-23 04:12:10 UTC; 4 days ago",
        "     Docs: https://caddyserver.com/docs/",
        " Main PID: 1248 (caddy)",
        "    Tasks: 14 (limit: 4915)",
        "   Memory: 42.1M (peak: 68.3M)",
        "      CPU: 18min 42.120s",
        "   CGroup: /system.slice/caddy.service",
        "           └─1248 /usr/bin/caddy run --environ --config /etc/caddy/Caddyfile"
      ],
      containers: [
        { id: "a93b118c72e1", img: "envoyproxy/envoy:v1.28", status: "Up 4 days", ports: "0.0.0.0:80->80, 0.0.0.0:443->443", name: "ingress-envoy" },
        { id: "5f1c99a41b20", img: "prom/node-exporter:v1.6", status: "Up 4 days", ports: "127.0.0.1:9100->9100", name: "node-exporter" }
      ]
    },
    node2: {
      name: "node-02.telemetry.local (Raw Packet Engine & WebSocket Broker)",
      ip: "10.0.1.28",
      kernel: "Linux 6.8.0-45-generic x86_64 #45-Ubuntu SMP",
      load: "0.44, 0.38, 0.31",
      service: "oney-agent.service",
      serviceDesc: "ONey Encrypted P2P Systemd Unit & Raw Socket Monitor",
      systemdLogs: [
        "● oney-agent.service - ONey Encrypted P2P Tunnel Daemon",
        "   Loaded: loaded (/etc/systemd/system/oney-agent.service; enabled)",
        "   Active: active (running) since Sun 2026-10-25 11:20:04 UTC; 2 days ago",
        " Main PID: 3892 (python3 -m oney.daemon)",
        "    Tasks: 8 (limit: 4915)",
        "   Memory: 84.6M",
        "      CPU: 42min 11.080s",
        "   CGroup: /system.slice/oney-agent.service",
        "           └─3892 /usr/bin/python3 -m oney.daemon --listen 0.0.0.0:9000"
      ],
      containers: [
        { id: "c720bb8e104d", img: "zprotocol-capture:latest", status: "Up 51 hours", ports: "UDP *:9000 (CRC32 Checksum)", name: "zproto-pcap-worker" },
        { id: "b2110c48e89a", img: "prom/node-exporter:v1.6", status: "Up 2 days", ports: "127.0.0.1:9100->9100", name: "node-exporter" }
      ]
    },
    node3: {
      name: "node-03.database.local (Primary MongoDB & Redis Cache Replica)",
      ip: "10.0.1.42",
      kernel: "Linux 6.8.0-45-generic x86_64 #45-Ubuntu SMP",
      load: "0.25, 0.28, 0.21",
      service: "mongod.service",
      serviceDesc: "MongoDB Database Server Engine with WiredTiger Engine",
      systemdLogs: [
        "● mongod.service - MongoDB Database Server Engine",
        "   Loaded: loaded (/lib/systemd/system/mongod.service; enabled; vendor preset: enabled)",
        "   Active: active (running) since Sun 2026-10-18 01:05:32 UTC; 9 days ago",
        " Main PID: 890 (mongod)",
        "    Tasks: 42 (limit: 4915)",
        "   Memory: 412.8M (WiredTiger Cache Target: 256MB)",
        "      CPU: 2h 14min 33.190s",
        "   CGroup: /system.slice/mongod.service",
        "           └─890 /usr/bin/mongod --config /etc/mongod.conf"
      ],
      containers: [
        { id: "d410ae8921cf", img: "redis:7.2-alpine", status: "Up 9 days", ports: "127.0.0.1:6379->6379/tcp", name: "redis-cache-replica" },
        { id: "3e8912bc4010", img: "prom/mongodb-exporter:v0.40", status: "Up 9 days", ports: "127.0.0.1:9216->9216", name: "mongo-exporter" }
      ]
    },
    node4: {
      name: "node-04.aws-runner.cloud (AWS ECS Fargate Task & CI Runner)",
      ip: "172.31.44.19",
      kernel: "Linux 5.10.217-205.860.amzn2.x86_64",
      load: "0.10, 0.12, 0.09",
      service: "amazon-ecs-agent.service",
      serviceDesc: "AWS ECS Container Agent & Fargate Task Supervisor",
      systemdLogs: [
        "● ecs-fargate-task.service - AWS ECS Task Runner [ap-south-1]",
        "   Task ARN: arn:aws:ecs:ap-south-1:718291029182:task/prod-cluster/9a81c03",
        "   Task Def: prod-portfolio-service:4 (LaunchType: FARGATE)",
        "   Status: RUNNING (Desired: 2, Running: 2)",
        "   VPC: vpc-0a819bcf891 | Subnet: subnet-priv-c01 (ap-south-1a)",
        "   HealthCheck: curl -f http://localhost:80/health (Interval: 15s, Healthy: true)",
        "   SecurityGroup: sg-071a9b42 (Allows 80/443 from ALB)"
      ],
      containers: [
        { id: "ecs-task-prod", img: "718291029182.dkr.ecr.ap-south-1.amazonaws.com/portfolio-gateway:v2.4", status: "Running (Healthy)", ports: "Port 80/TCP -> ALB TargetGroup", name: "portfolio-prod-svc" },
        { id: "ecs-aws-xray", img: "amazon/aws-xray-daemon:latest", status: "Running", ports: "UDP 127.0.0.1:2000", name: "xray-daemon" }
      ]
    }
  };

  function renderNodeDetails(nodeKey) {
    currentNodeId = nodeKey;
    const data = nodeDiagnosticsData[nodeKey] || nodeDiagnosticsData.node1;

    modalTitle.textContent = data.name;

    let containerRows = data.containers.map(c => `
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
        <td style="padding: 0.4rem 0.5rem; color: #38bdf8;">${c.id}</td>
        <td style="padding: 0.4rem 0.5rem; color: #d4d4d8;">${c.img}</td>
        <td style="padding: 0.4rem 0.5rem; color: #10b981;">● ${c.status}</td>
        <td style="padding: 0.4rem 0.5rem; color: #a1a1aa;">${c.ports}</td>
        <td style="padding: 0.4rem 0.5rem; color: #f59e0b;">${c.name}</td>
      </tr>
    `).join("");

    let logsHtml = data.systemdLogs.map(l => {
      let color = "#d4d4d8";
      if (l.startsWith("●") || l.includes("Active: active")) color = "#10b981";
      if (l.includes("Task ARN") || l.includes("Loaded:")) color = "#38bdf8";
      return `<div style="color: ${color}; line-height: 1.45;">${l}</div>`;
    }).join("");

    modalContent.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 0.75rem; background: rgba(255,255,255,0.02); padding: 0.75rem 1rem; border: 1px solid var(--border-subtle); border-radius: 6px;">
        <div>
          <span style="color: var(--text-subtle); font-size: 0.68rem; text-transform: uppercase;">Internal IP</span>
          <div style="color: #ffffff; font-weight: 700; margin-top: 0.15rem;">${data.ip}</div>
        </div>
        <div>
          <span style="color: var(--text-subtle); font-size: 0.68rem; text-transform: uppercase;">Kernel Release</span>
          <div style="color: #ffffff; font-weight: 700; margin-top: 0.15rem; font-size: 0.7rem;">${data.kernel}</div>
        </div>
        <div>
          <span style="color: var(--text-subtle); font-size: 0.68rem; text-transform: uppercase;">Load Average</span>
          <div style="color: #10b981; font-weight: 700; margin-top: 0.15rem;">${data.load}</div>
        </div>
        <div>
          <span style="color: var(--text-subtle); font-size: 0.68rem; text-transform: uppercase;">Supervised Unit</span>
          <div style="color: #f59e0b; font-weight: 700; margin-top: 0.15rem; font-size: 0.7rem;">${data.service}</div>
        </div>
      </div>

      <div>
        <div style="font-weight: 700; color: #ffffff; margin-bottom: 0.4rem; font-size: 0.75rem;">$ systemctl status ${data.service}</div>
        <div style="background: #000000; border: 1px solid var(--border-subtle); border-radius: 6px; padding: 0.75rem 1rem; font-family: var(--font-mono); font-size: 0.72rem; overflow-x: auto;">
          ${logsHtml}
        </div>
      </div>

      <div>
        <div style="font-weight: 700; color: #ffffff; margin-bottom: 0.4rem; font-size: 0.75rem;">$ docker ps --format "table {{.ID}}\\t{{.Image}}\\t{{.Status}}\\t{{.Ports}}\\t{{.Names}}"</div>
        <div style="background: #000000; border: 1px solid var(--border-subtle); border-radius: 6px; overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.7rem;">
            <thead>
              <tr style="border-bottom: 1px solid var(--border-strong); background: rgba(255,255,255,0.03); color: var(--text-subtle);">
                <th style="padding: 0.4rem 0.5rem;">ID</th>
                <th style="padding: 0.4rem 0.5rem;">IMAGE</th>
                <th style="padding: 0.4rem 0.5rem;">STATUS</th>
                <th style="padding: 0.4rem 0.5rem;">PORTS</th>
                <th style="padding: 0.4rem 0.5rem;">NAME</th>
              </tr>
            </thead>
            <tbody>
              ${containerRows}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  inspectBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const nodeKey = btn.getAttribute("data-node") || "node1";
      renderNodeDetails(nodeKey);
      modal.classList.add("open");
    });
  });

  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      const originalText = restartBtn.textContent;
      restartBtn.disabled = true;
      restartBtn.textContent = "⏳ Reloading...";
      restartBtn.style.opacity = "0.7";

      setTimeout(() => {
        restartBtn.disabled = false;
        restartBtn.textContent = originalText;
        restartBtn.style.opacity = "1";
        renderNodeDetails(currentNodeId);
        if (typeof showToast === "function") {
          showToast(`Service on ${currentNodeId} reloaded successfully! (Zero downtime)`, "success");
        }
      }, 700);
    });
  }
}


