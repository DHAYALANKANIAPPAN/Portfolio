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
  initProjectsFilter();
  initResumeTabs();
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
        // Moon icon for switching to dark
        themeIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
        themeIcon.setAttribute("title", "Switch to Dark Mode");
      } else {
        // Sun icon for switching to light
        themeIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
        themeIcon.setAttribute("title", "Switch to Light Mode");
      }
    }
  }
}

/* 2. Navbar & Mobile Menu */
function initNavbar() {
  const navbar = document.getElementById("navbar");
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
    "Java OOP & Automation Builder"
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
        <div><b>projects</b> — Codebases & tools</div>
        <div><b>skills</b> — Core technical stack</div>
        <div><b>certs</b> — CTFs & Certificates</div>
        <div><b>contact</b> — Email & LinkedIn</div>
        <div><b>matrix</b> — System status</div>
        <div><b>clear</b> — Wipe terminal</div>
      </div>`,
    whoami: () => `
      <div>
        <p style="color: #ffffff; font-weight: bold;">Dhayalan Kaniappan</p>
        <p>The Code Whisperer · DevOps Specialist · Python & MERN Stack</p>
        <p style="color: #a1a1aa;">📍 Coimbatore, Tamil Nadu, India · 🎓 Sri Shakthi Institute</p>
      </div>`,
    bio: () => `
      <div>
        <p>DevOps builder and Python developer passionate about automated Linux server fleets, remote system control (ONey), and responsive MERN web architectures.</p>
      </div>`,
    skills: () => `
      <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 4px;">
        <span style="background: rgba(255,255,255,0.12); padding: 2px 6px; border-radius: 4px; color: #ffffff;">Python (94%)</span>
        <span style="background: rgba(255,255,255,0.12); padding: 2px 6px; border-radius: 4px; color: #ffffff;">Ansible (90%)</span>
        <span style="background: rgba(255,255,255,0.12); padding: 2px 6px; border-radius: 4px; color: #ffffff;">Docker (88%)</span>
        <span style="background: rgba(255,255,255,0.12); padding: 2px 6px; border-radius: 4px; color: #ffffff;">Linux Admin (92%)</span>
        <span style="background: rgba(255,255,255,0.12); padding: 2px 6px; border-radius: 4px; color: #ffffff;">React/MERN (90%)</span>
        <span style="background: rgba(255,255,255,0.12); padding: 2px 6px; border-radius: 4px; color: #ffffff;">Java OOP (90%)</span>
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
        <div>🏆 <b>Java + MongoDB Merit (92%)</b> — Hazhtech / IACT</div>
        <div>🛡️ <b>Yukthi CTF 2.0</b> — Tamil Nadu Police & Selfmade Ninja</div>
        <div>⚡ <b>HackTiVate 24h CTF</b> — Rajalakshmi Engineering College (Titanium 2026)</div>
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
        <p>[+] DEVOPS FLEET: PROVISIONED | PYTHON SOCKETS: OPEN | ALL SYSTEMS OPERATIONAL</p>
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
      if (cmd) execute(cmd);
    });
  });
}

/* 6. Projects Filtering, Search & Case Studies */
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
    tag.addEventListener("click", (e) => {
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

  // Case study toggles
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

/* 8. Modals (Resume Full-View & Certificate Zoom) */
function initModals() {
  // Certificate Zoom Modal
  const certModal = document.getElementById("cert-zoom-modal");
  const certImg = document.getElementById("cert-zoom-img");
  const certTitle = document.getElementById("cert-zoom-title");

  document.querySelectorAll(".cert-badge-wrapper").forEach(wrapper => {
    wrapper.addEventListener("click", () => {
      const img = wrapper.querySelector("img");
      const title = wrapper.getAttribute("data-title") || img?.alt || "Certificate";
      const src = wrapper.getAttribute("data-img") || img?.src || "";

      if (certModal && certImg && certTitle) {
        certImg.src = src;
        certTitle.textContent = title;
        certModal.classList.add("open");
      }
    });
  });

  // Resume Modal
  const resumeModal = document.getElementById("resume-full-modal");
  const openResumeBtns = document.querySelectorAll(".open-resume-modal-btn");

  openResumeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      resumeModal?.classList.add("open");
    });
  });

  // Close buttons
  document.querySelectorAll(".modal-close-btn, .modal-overlay").forEach(el => {
    el.addEventListener("click", (e) => {
      if (e.target === el || el.classList.contains("modal-close-btn")) {
        document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("open"));
      }
    });
  });

  // Copy email button
  const copyEmailBtn = document.getElementById("copy-email-btn");
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      navigator.clipboard.writeText("dhaya3486@gmail.com");
      showToast("Copied dhaya3486@gmail.com to clipboard!", "success");
    });
  }

  // Copy plain text resume
  const copyResumeBtn = document.getElementById("copy-resume-text-btn");
  if (copyResumeBtn) {
    copyResumeBtn.addEventListener("click", () => {
      const text = `
DHAYALAN KANIAPPAN
The Code Whisperer · DevOps Specialist · Python & MERN Stack
Email: dhaya3486@gmail.com | Location: Coimbatore, TN, India
GitHub: https://github.com/DHAYALANKANIAPPAN | LinkedIn: https://www.linkedin.com/in/dhaya05/

SUMMARY:
Engineering student, DevOps specialist, and Python/MERN developer with experience in Linux server automation (Ansible, Docker), remote system access (ONey), Java OOP architectures, and Python telemetry tooling. Competed in national 24-hour CTFs (Tamil Nadu Police Yukthi CTF, Amrita, REC).

EDUCATION:
* Bachelor of Engineering (B.E.) — Sri Shakthi Institute of Engineering and Technology, Coimbatore

KEY PROJECTS:
* ONey Remote System Control — Encrypted P2P UDP tunnel, remote control client
* Ansible Fleet Automation — Modular Linux provisioning & UFW firewall setup
* Browser Monitoring Tool — Python telemetry & event stream inspector
* ATM Banking System — Java OOP encapsulated account transactions
* Shahihennaholic Storefront — Web catalog & cart interface
* Z-Protocol — Layer-4 binary networking protocol on raw Python sockets

CERTIFICATIONS:
* Certificate of Merit: Java + MongoDB (92% Score) — Hazhtech / IACT
* Yukthi CTF 2.0 — Tamil Nadu Police & Selfmade Ninja Academy
* HackTiVate 24h CTF — Rajalakshmi Engineering College (Titanium 2026)
* L3m0n CTF 2025 — Amrita Vishwa Vidyapeetham
`.trim();
      navigator.clipboard.writeText(text);
      showToast("Full resume copied as text!", "success");
    });
  }
}

/* 9. Toast Notification Helper */
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

/* 10. Lightweight Subtle Background Canvas */
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
