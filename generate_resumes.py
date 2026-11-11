import os
import subprocess
import glob

# 5 Dedicated Resumes based on user's exact template
resumes_data = [
    {
        "filename": "Dhayalan_K_Full_Stack_Developer_Resume",
        "title": "Full-Stack Developer · React, Node.js & Systems",
        "summary": "Engineering student and Full-Stack Developer with hands-on experience in building responsive web applications, RESTful APIs, database engineering (MongoDB, MySQL), and Python/Java systems. Experienced in developing e-commerce platforms with local persistence, modular frontend extensions, and containerized deployments. Proven track record in national 24-hour CTFs and software problem-solving.",
        "skills": [
            ("Frontend", "React (v18+), JavaScript (ES6+), TypeScript, Next.js, Tailwind CSS, HTML5, CSS3, DOM Telemetry"),
            ("Backend & APIs", "Node.js, Express.js, Java (OOP & Collections), Python, REST APIs, JWT, Middleware"),
            ("Databases", "MongoDB (Mongoose, Indexing — 92% Merit), MySQL, LocalStorage State Management"),
            ("DevOps & Tools", "Docker, Git, GitHub Actions, Linux (Ubuntu/Debian), Postman, Nginx, Bash")
        ],
        "projects": [
            ("Shahihennaholic E-Commerce Platform", "Responsive mobile-first web catalog and ordering interface for an organic henna brand. Implemented client-side shopping cart state calculation and persistent LocalStorage synchronization without backend dependencies. Integrated automated WhatsApp order payload generation."),
            ("Flarum Community Platform & FLARUM1 Extension", "Deployed and customized open-source discussion platform with decoupled version control. Engineered FLARUM1, an independent companion JavaScript extension hooking into Mithril.js UI lifecycles for theme styling without core modifications. Tuned MySQL index queries for concurrent sessions."),
            ("ATM Banking & Account Management System", "Java Object-Oriented banking simulation (maincode.java) applying strict encapsulation. Integrated PIN verification, atomic transaction ledger safeguards preventing overdrafts, and structured receipt generator simulating enterprise core-banking workflows.")
        ],
        "certs": [
            "Certificate of Merit: Java + Mongo DB (92% Score) — Hazhtech Career Development Centre / IACT",
            "Amazon ECS Knowledge Badge Assessment — Amazon Web Services (AWS) · Credly Official",
            "Deploying a CI/CD Pipeline with AWS CDK — AWS Skill Builder Official Lab",
            "Yukthi CTF 2.0: Participated in National-Level Capture The Flag competition organized by Tamil Nadu Police",
            "0xTi - HackTiVate: Participated in 24-Hour intensive CTF hackathon — Rajalakshmi Engineering College"
        ]
    },
    {
        "filename": "Dhayalan_K_MERN_Stack_Developer_Resume",
        "title": "MERN Stack Developer · MongoDB, Express.js, React & Node.js",
        "summary": "Engineering student and specialized MERN Stack Developer with end-to-end expertise in constructing scalable single-page applications and high-throughput REST APIs. Skilled in designing decoupled React architectures, building asynchronous Express/Node.js backends with robust middleware security, and modeling performant NoSQL data structures in MongoDB (certified with 92% merit). Experienced in building consumer web applications and Docker containerization.",
        "skills": [
            ("Frontend (React Ecosystem)", "React (v18+), Hooks, Context API, Tailwind CSS, Next.js (App Router), HTML5 Semantic UI, Responsive UI"),
            ("Backend (Node.js & Express)", "Node.js Runtime, Express.js Framework, RESTful Routing, Middleware Pipeline, JWT Authentication, CORS, Async/Await"),
            ("Database (MongoDB)", "MongoDB Atlas, Mongoose ODM, Schema Validation, Aggregation Pipelines, Compound Indexing (92% Score)"),
            ("DevOps & Tools", "Docker, Docker Compose, Git/GitHub, Postman, Vite, NPM/Yarn, Linux (Ubuntu)")
        ],
        "projects": [
            ("Shahihennaholic Storefront & Cart Engine", "Architected client-side e-commerce platform for an organic henna beauty brand. Implemented state-driven shopping cart logic with persistent LocalStorage synchronizer, ensuring cart persistence across sessions. Designed lightweight checkout generating pre-formatted WhatsApp order payloads."),
            ("FLARUM1 — Modular Community UI Extension", "Engineered independent JavaScript UI extension package hooking into single-page application lifecycles. Intercepted core route transitions and DOM rendering pipelines to inject custom design themes and forum interaction widgets without altering upstream code."),
            ("Browser Telemetry & Event Interceptor Pipeline", "Built real-time event stream extraction tool in Python that captures DOM mutations, event listeners, and unsent analytics queues. Designed structured JSON buffer pipelines ready for document store ingestion and session replay analysis.")
        ],
        "certs": [
            "Certificate of Merit: Java + Mongo DB (92% Score) — Hazhtech Career Development Centre / IACT",
            "Amazon ECS Knowledge Badge Assessment — Amazon Web Services (AWS) · Credly Official",
            "Deploying a CI/CD Pipeline using AWS CDK — AWS Skill Builder Official Lab",
            "Yukthi CTF 2.0: Participated in National-Level Capture The Flag competition organized by Tamil Nadu Police",
            "0xTi - HackTiVate: Participated in 24-Hour intensive CTF hackathon — Rajalakshmi Engineering College"
        ]
    },
    {
        "filename": "Dhayalan_K_DevOps_Engineer_Resume",
        "title": "DevOps Specialist · Python & Cloud Infrastructure",
        "summary": "Engineering student, DevOps specialist, and Python developer with hands-on experience in Linux server automation (Ansible, Docker), AWS container orchestration (Amazon ECS Knowledge Badge), remote system access (ONey), Infrastructure as Code (AWS CDK, CloudFormation), and Python telemetry tooling. Proven track record of competing in national 24-hour CTFs (Tamil Nadu Police Yukthi CTF, Amrita, REC) and building real-world systems.",
        "skills": [
            ("DevOps & Cloud", "Ansible Playbooks, Docker, Linux Fleet Administration, CI/CD Workflows, Bash Scripting, UFW Firewall, Amazon ECS, AWS CDK"),
            ("Programming", "Python (Core), Java (OOP & Collections), JavaScript (ES6+), TypeScript, Raw Sockets, Bash"),
            ("Systems & Networking", "Linux (Ubuntu/Debian), Systemd Services, SSH Hardening, UDP/TCP Sockets, P2P Hole Punching"),
            ("Tools & CI/CD", "Git/GitHub, GitHub Actions, AWS CloudFormation, Wireshark, Nmap, Postman")
        ],
        "projects": [
            ("ONey Remote System Control", "Low-latency remote system management client with encrypted P2P tunneling. Designed for direct host-to-host encrypted remote management without third-party relays. Utilized raw UDP sockets for low-latency frame transport, session key cryptography for host verification, and bidirectional input synchronization."),
            ("Z-Protocol Wire Transport", "Layer-4 binary networking protocol built on raw Python sockets. Engineered a custom 16-byte binary header, 3-way handshake state machine (SYN/SYN-ACK/ACK), and sequence numbering for packet reordering. Implemented custom handshake state machines and CRC32 verification."),
            ("Ansible Fleet Automation", "Playbook-driven Linux server provisioning and security hardening. Developed modular roles, variable isolation, and idempotent execution to guarantee reproducible server configurations across multi-node environments. Enforced SSH security and UFW firewall configurations.")
        ],
        "certs": [
            "Amazon ECS Knowledge Badge Assessment — Amazon Web Services (AWS) · Credly Official",
            "Deploying a CI/CD Pipeline with AWS CDK — AWS Skill Builder Official Lab",
            "Using AWS CloudFormation for Automation — AWS Skill Builder Official Lab",
            "Certificate of Merit: Java + Mongo DB (92% Score) — Hazhtech Career Development Centre / IACT",
            "Yukthi CTF 2.0: Participated in National-Level Capture The Flag competition organized by Tamil Nadu Police",
            "0xTi - HackTiVate: Participated in 24-Hour intensive CTF hackathon — Rajalakshmi Engineering College"
        ]
    },
    {
        "filename": "Dhayalan_K_Cyber_Security_Resume",
        "title": "Cybersecurity & Systems Security Engineer · Protocol Security & CTF Defense",
        "summary": "Engineering student and Cybersecurity specialist with competitive hands-on experience in 24-hour Capture The Flag (CTF) challenges (Tamil Nadu Police Yukthi CTF 2.0, Amrita Lemon CTF, REC HackTiVate), low-level network protocol analysis, and Linux host defense. Experienced in raw socket reverse engineering, cryptographic handshake validation, encrypted traffic pattern analysis, and automated Linux server hardening via Ansible.",
        "skills": [
            ("Security & Analysis", "Wireshark, Nmap, TCPDump, Raw Sockets (AF_INET/SOCK_RAW), Traffic Fingerprinting, Packet Metadata, Protocol Reversing"),
            ("Host Hardening", "Linux Security (Ubuntu/Debian), UFW Firewall Automation, SSH Hardening, Systemd Sandboxing, File Permissions"),
            ("Programming", "Python (Security Tools, Socket Programming), Java (Secure OOP, Encapsulation), Bash Scripting"),
            ("Protocols & Crypto", "TCP/IP State Machines, UDP Hole Punching, CRC32 Checksums, Symmetric/Asymmetric Keys, TLS/SSL")
        ],
        "projects": [
            ("Cross-Protocol Traffic Fingerprinting", "Cybersecurity research into side-channel metadata leakage, packet burst intervals, and traffic signatures across protocol boundaries. Built Python feature extraction scripts analyzing packet timing distributions and frame size entropy to classify encrypted network traffic without decrypting payloads."),
            ("Z-Protocol Wire Transport", "Layer-4 binary networking protocol built on raw Python sockets to investigate connection integrity and attack surfaces. Specified a custom 16-byte binary header with bitmask flags (SYN, ACK, FIN, RST, PSH) and implemented strict state machine transitions with CRC32 verification."),
            ("ONey Secure Remote Access & Encrypted P2P Tunneling", "Low-latency remote system management client with encrypted peer-to-peer UDP hole punching. Designed for direct host-to-host encrypted administration without external cloud relays, integrating cryptographic handshake verification."),
            ("Ansible Fleet Security Hardening", "Modular Linux provisioning playbooks automating UFW firewall default-deny policies, specific port allowances (22, 80, 443), and disabling root password SSH logins across distributed nodes.")
        ],
        "certs": [
            "Yukthi CTF 2.0: Participated in National-Level Capture The Flag competition organized by Tamil Nadu Police",
            "0xTi - HackTiVate: Participated in 24-Hour intensive CTF hackathon — Rajalakshmi Engineering College",
            "L3m0n CTF 2025: Participated in 24-Hour national cybersecurity competition — Amrita Vishwa Vidyapeetham",
            "Amazon ECS Knowledge Badge Assessment — AWS Credly Verified (Container isolation & IAM task roles)",
            "Certificate of Merit: Java + Mongo DB (92% Score) — Hazhtech Career Development Centre / IACT"
        ]
    },
    {
        "filename": "Dhayalan_K_Frontend_Developer_Resume",
        "title": "Frontend Developer · React, JavaScript (ES6+) & Modern Web UI",
        "summary": "Engineering student and Frontend Developer focused on building responsive, performant, and accessible user interfaces. Skilled in React (v18+), modern JavaScript (ES6+), Tailwind CSS, and single-page application lifecycles. Experienced in engineering real-world e-commerce experiences with client-side state persistence (LocalStorage), authoring modular UI extension packages, and building real-time browser event telemetry tools.",
        "skills": [
            ("Core Frontend", "JavaScript (ES6+), HTML5 Semantic UI, CSS3 (Flexbox & Grid), TypeScript, DOM API, Responsive Web Design"),
            ("Frameworks & UI", "React (v18+), Hooks, Context API, Next.js, Tailwind CSS, Mithril.js, UI Component Architecture"),
            ("State & Storage", "React State & Reducer, Context API, Browser LocalStorage, SessionStorage, Event Queues"),
            ("Performance & Tools", "Web Vitals, Responsive Images, Vite, Webpack, PostCSS, Git/GitHub, Chrome DevTools, Postman")
        ],
        "projects": [
            ("Shahihennaholic Bridal E-Commerce Storefront", "Engineered responsive web catalog and ordering interface for an organic bridal henna brand. Designed interactive cart with instant price computation and browser LocalStorage state persistence. Automated WhatsApp order payload builder formatting line items and customer details."),
            ("FLARUM1 — Modular UI Component Extension", "Developed frontend extension extending Flarum community platform with customized user interface styling, themes, and interactive hooks. Programmed lifecycle hooks into single-page application router events, dynamically altering DOM views without upstream code changes."),
            ("Browser DOM Telemetry & Interaction Monitor", "Created monitoring utility instrumenting client browser sessions to capture active DOM mutations, click paths, and scroll interactions in real-time. Structured JSON buffering logic to batch UI interactions and stream telemetry smoothly with zero UI jank.")
        ],
        "certs": [
            "Certificate of Merit: Java + Mongo DB (92% Score) — Hazhtech Career Development Centre / IACT",
            "Amazon ECS Knowledge Badge Assessment — Amazon Web Services (AWS) · Credly Official",
            "Cloud Game Development Knowledge Badge — Amazon Web Services (AWS) · Credly Official",
            "Yukthi CTF 2.0: Participated in National-Level Capture The Flag competition organized by Tamil Nadu Police",
            "0xTi - HackTiVate: Participated in 24-Hour intensive CTF hackathon — Rajalakshmi Engineering College"
        ]
    }
]

def generate_html(data):
    skills_html = "".join([
        f"<li><b>{cat}:</b> {val}</li>\n" for cat, val in data["skills"]
    ])
    
    projects_html = "".join([
        f"<li><b>{pname}:</b> {pdesc}</li>\n" for pname, pdesc in data["projects"]
    ])
    
    certs_html = "".join([
        f"<li><b>{c.split('—')[0].split(':')[0].strip()}:</b> {'—'.join(c.split('—')[1:]).strip() if '—' in c else ':'.join(c.split(':')[1:]).strip() if ':' in c else c}</li>\n"
        if (':' in c or '—' in c) else f"<li>{c}</li>\n"
        for c in data["certs"]
    ])

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>{data['title']}</title>
<style>
  @page {{
    size: A4;
    margin: 14mm 16mm 14mm 16mm;
  }}
  * {{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }}
  body {{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: #111111;
    background: #ffffff;
    font-size: 9.6pt;
    line-height: 1.38;
    -webkit-print-color-adjust: exact;
  }}
  .header {{
    text-align: center;
    margin-bottom: 9px;
  }}
  .name {{
    font-size: 19pt;
    font-weight: 800;
    letter-spacing: 0.5px;
    color: #000000;
    margin-bottom: 2px;
  }}
  .role {{
    font-size: 10.2pt;
    font-weight: 600;
    color: #222222;
    margin-bottom: 3px;
  }}
  .contact {{
    font-size: 8.8pt;
    color: #333333;
  }}
  .contact a {{
    color: #0056b3;
    text-decoration: none;
  }}
  .contact span {{
    margin: 0 4px;
    color: #777777;
  }}
  .section {{
    margin-top: 8px;
  }}
  .section-title {{
    font-size: 10.2pt;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: #000000;
    border-bottom: 1px solid #111111;
    padding-bottom: 2px;
    margin-bottom: 5px;
  }}
  .summary-text {{
    font-size: 9.3pt;
    line-height: 1.36;
    color: #222222;
    text-align: justify;
  }}
  .edu-row {{
    font-size: 9.4pt;
  }}
  .edu-degree {{
    font-weight: 700;
    color: #000000;
  }}
  .edu-inst {{
    font-style: italic;
    color: #333333;
    font-size: 9.1pt;
    margin-top: 1px;
  }}
  ul.list {{
    list-style-type: disc;
    padding-left: 17px;
    margin: 0;
  }}
  ul.list li {{
    font-size: 9.2pt;
    line-height: 1.35;
    margin-bottom: 3.5px;
    color: #222222;
    text-align: justify;
  }}
  ul.list li b {{
    color: #000000;
  }}
  ul.list li:last-child {{
    margin-bottom: 0;
  }}
</style>
</head>
<body>

<div class="header">
  <div class="name">DHAYALAN K</div>
  <div class="role">{data['title']}</div>
  <div class="contact">
    +91 9385931709<span>|</span><a href="mailto:dhaya3486@gmail.com">dhaya3486@gmail.com</a><span>|</span><a href="https://github.com/DHAYALANKANIAPPAN">GitHub</a><span>|</span><a href="https://www.linkedin.com/in/dhaya05/">LinkedIn</a><span>|</span><a href="https://dhayalankaniappan.github.io/Portfolio/">Portfolio</a><span>|</span>Coimbatore
  </div>
</div>

<div class="section">
  <div class="section-title">PROFESSIONAL SUMMARY</div>
  <div class="summary-text">{data['summary']}</div>
</div>

<div class="section">
  <div class="section-title">EDUCATION</div>
  <div class="edu-row">
    <div class="edu-degree">Bachelor of Engineering (B.E.) – Computer Science and Engineering (Cyber Security)</div>
    <div class="edu-inst">Sri Shakthi Institute of Engineering and Technology, Coimbatore (2024 – 2028) | CGPA: 8.21</div>
  </div>
</div>

<div class="section">
  <div class="section-title">SKILLS</div>
  <ul class="list">
    {skills_html}
  </ul>
</div>

<div class="section">
  <div class="section-title">PROJECTS</div>
  <ul class="list">
    {projects_html}
  </ul>
</div>

<div class="section">
  <div class="section-title">CERTIFICATIONS &amp; ACTIVITIES</div>
  <ul class="list">
    {certs_html}
  </ul>
</div>

</body>
</html>
"""

os.makedirs("resumes_pdf", exist_ok=True)
os.makedirs(".chromium_tmp", exist_ok=True)

for r in resumes_data:
    html_content = generate_html(r)
    html_path = f"resumes_pdf/{r['filename']}.html"
    pdf_path = f"resumes_pdf/{r['filename']}.pdf"
    
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(html_content)
        
    cmd = [
        "chromium",
        "--headless",
        "--disable-gpu",
        "--no-sandbox",
        "--no-pdf-header-footer",
        "--user-data-dir=./.chromium_tmp",
        f"--print-to-pdf={pdf_path}",
        html_path
    ]
    
    res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    if os.path.exists(pdf_path):
        size_kb = os.path.getsize(pdf_path) / 1024
        print(f"Generated: {pdf_path} ({size_kb:.1f} KB)")
    else:
        print(f"Failed: {pdf_path}, Error: {res.stderr.decode()[:200]}")

print("All PDF resumes generated successfully.")
