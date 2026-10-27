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

  openResumeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
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
      const text = `
DHAYALAN KANIAPPAN
The Code Whisperer · DevOps Specialist · Python & MERN Stack
Email: dhaya3486@gmail.com | Location: Coimbatore, TN, India
GitHub: https://github.com/DHAYALANKANIAPPAN | LinkedIn: https://www.linkedin.com/in/dhaya05/

SUMMARY:
Engineering student, DevOps specialist, and Python/MERN developer with experience in Linux server automation (Ansible, Docker), AWS container orchestration (Amazon ECS Knowledge Badge), remote system access (ONey), Java OOP architectures, and Python telemetry tooling. Competed in national 24-hour CTFs (Tamil Nadu Police Yukthi CTF, Amrita, REC).

EDUCATION:
* Bachelor of Engineering (B.E.) — Sri Shakthi Institute of Engineering and Technology, Coimbatore

KEY PROJECTS:
* ONey Remote System Control — Encrypted P2P UDP tunnel, remote control client
* Ansible Fleet Automation — Modular Linux provisioning & UFW firewall setup
* Browser Monitoring Tool — Python telemetry & event stream inspector
* ATM Banking System — Java OOP encapsulated account transactions
* Shahihennaholic Storefront — Web catalog & cart interface
* Z-Protocol — Layer-4 binary networking protocol on raw Python sockets

CORE CERTIFICATIONS & CREDLY BADGES:
* Amazon ECS Knowledge Badge — AWS Skill Builder / Credly Verified (Sep 05, 2026)
* Lab: Deploying a CI/CD Pipeline with Managed Deployment Stage using AWS CDK (Sep 04, 2026)
* Lab: Using AWS CloudFormation for Automation (Sep 04, 2026)
* Cloud Game Development Knowledge Badge — AWS Skill Builder / Credly (Sep 09, 2026)
* Certificate of Merit: Java + MongoDB (92% Score) — Hazhtech / IACT (Aug 2025)
* Yukthi CTF 2.0 — Tamil Nadu Police & Selfmade Ninja Academy (Dec 2025)
* HackTiVate 24h CTF — Rajalakshmi Engineering College (Jan 2026)
* L3m0n CTF 2025 — Amrita Vishwa Vidyapeetham (2025)
* (+10 Additional AWS Technical Modules in ECS Security, Networking, Observability, Auto Scaling)
`.trim();
      navigator.clipboard.writeText(text);
      showToast("Full resume copied as text!", "success");
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

  const particles = Array.from({ length: 30 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1.5 + 0.5,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    alpha: Math.random() * 0.25 + 0.1
  }));

  function draw() {
    ctx.clearRect(0, 0, width, height);

    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    const baseColor = isLight ? "0, 0, 0" : "255, 255, 255";

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${baseColor}, ${p.alpha})`;
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
}

/* 1. Real-time Cluster Jitter & Health Monitor */
function initClusterTelemetry() {
  const node1Ping = document.getElementById("node1-ping");
  const node2Ping = document.getElementById("node2-ping");
  const node3Ping = document.getElementById("node3-ping");
  const node4Ping = document.getElementById("node4-ping");

  const node1Cpu = document.getElementById("node1-cpu");
  const node1CpuBar = document.getElementById("node1-cpu-bar");
  const node2Cpu = document.getElementById("node2-cpu");
  const node2CpuBar = document.getElementById("node2-cpu-bar");

  if (!node1Ping) return;

  setInterval(() => {
    // Ping jitter
    if (node1Ping) node1Ping.textContent = `Ping: ${13 + Math.floor(Math.random() * 4)}ms`;
    if (node2Ping) node2Ping.textContent = `Ping: ${18 + Math.floor(Math.random() * 5)}ms`;
    if (node3Ping) node3Ping.textContent = `Ping: ${10 + Math.floor(Math.random() * 3)}ms`;
    if (node4Ping) node4Ping.textContent = `Ping: ${21 + Math.floor(Math.random() * 4)}ms`;

    // CPU jitter
    const cpu1 = 16 + Math.floor(Math.random() * 6);
    if (node1Cpu) node1Cpu.textContent = `${cpu1}%`;
    if (node1CpuBar) node1CpuBar.style.width = `${cpu1}%`;

    const cpu2 = 31 + Math.floor(Math.random() * 8);
    if (node2Cpu) node2Cpu.textContent = `${cpu2}%`;
    if (node2CpuBar) node2CpuBar.style.width = `${cpu2}%`;
  }, 3500);
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

