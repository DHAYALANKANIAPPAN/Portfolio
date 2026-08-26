"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft } from "lucide-react";
import { profile, skills, projects, resume } from "@/lib/data";

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

const quickCommands = ["whoami", "bio", "projects", "skills", "certs", "contact", "matrix", "clear"];

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1 text-white/80">
          <p className="text-primary font-bold">
            🚀 Dhayalan Kaniappan — DevOps &amp; MERN Shell (The Code Whisperer)
          </p>
          <p className="text-xs text-white/60">
            Type <span className="text-accent font-semibold">help</span> or click the quick commands below to interact.
          </p>
        </div>
      ),
    },
  ]);

  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  function handleCommand(cmdToRun: string) {
    const raw = cmdToRun.trim();
    if (!raw) return;

    const cmd = raw.toLowerCase();
    setCmdHistory((prev) => [...prev, raw]);
    setHistoryIndex(-1);

    let output: React.ReactNode;

    switch (cmd) {
      case "help":
        output = (
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-white/70 py-1 font-mono">
            <div><span className="text-primary font-bold">whoami</span> — Identity &amp; role</div>
            <div><span className="text-primary font-bold">bio</span> — Developer backstory</div>
            <div><span className="text-primary font-bold">projects</span> — Active codebases</div>
            <div><span className="text-primary font-bold">skills</span> — Top technical tools</div>
            <div><span className="text-primary font-bold">certs</span> — CTF &amp; Course certs</div>
            <div><span className="text-primary font-bold">contact</span> — Email &amp; LinkedIn</div>
            <div><span className="text-primary font-bold">matrix</span> — Cyber stream</div>
            <div><span className="text-primary font-bold">clear</span> — Wipe screen</div>
          </div>
        );
        break;

      case "whoami":
        output = (
          <div className="space-y-1 text-xs py-1">
            <p className="text-accent font-bold">{profile.fullName}</p>
            <p className="text-white/80">{profile.role}</p>
            <p className="text-white/60">📍 {profile.location} · 🎓 {profile.education}</p>
          </div>
        );
        break;

      case "cat bio":
      case "bio":
        output = (
          <div className="text-xs text-white/70 py-1 space-y-1">
            <p>{profile.tagline}</p>
            <p className="text-white/50">{profile.shortBio}</p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="py-1">
            <div className="flex flex-wrap gap-1.5 mt-1">
              {skills.slice(0, 10).map((s) => (
                <span
                  key={s.name}
                  className="rounded bg-white/10 px-2 py-0.5 font-mono text-[11px] text-primary"
                >
                  {s.name} ({s.level}%)
                </span>
              ))}
            </div>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-1.5 py-1 text-xs">
            {projects.slice(0, 4).map((p) => (
              <div key={p.slug} className="flex items-center justify-between border-b border-white/5 pb-1">
                <div>
                  <span className="text-accent font-medium">{p.name}</span>
                  <span className="text-white/40 ml-2 font-mono">[{p.category}]</span>
                </div>
                <span className="text-primary font-mono text-[10px]">{p.stack.slice(0, 3).join(", ")}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "certs":
      case "certifications":
        output = (
          <div className="space-y-1.5 py-1 text-xs text-white/80">
            <p className="text-primary font-bold">🏆 Verified Credentials &amp; CTF Honors:</p>
            {resume.certifications.map((c) => (
              <p key={c.title} className="text-white/70">
                • <span className="text-accent">{c.title}</span> — {c.issuer}
              </p>
            ))}
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-xs py-1">
            <p className="text-white/90">📧 Email: <a href={`mailto:${profile.email}`} className="text-primary underline">{profile.email}</a></p>
            <p className="text-white/90">💼 LinkedIn: <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-primary underline">{profile.linkedin}</a></p>
            <p className="text-white/90">🐙 GitHub: <a href={profile.github} target="_blank" rel="noreferrer" className="text-primary underline">{profile.github}</a></p>
          </div>
        );
        break;

      case "matrix":
        output = (
          <div className="font-mono text-[11px] text-accent space-y-0.5 py-1">
            <p>01000100 01001000 01000001 01011001 01000001 01001100 01000001 01001110</p>
            <p>DEVOPS PIPELINES :: ACTIVE | PLAYBOOKS :: LOADED | CONTAINERS :: RUNNING</p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      case "sudo":
        output = (
          <p className="text-accent text-xs py-1">
            Welcome, root. All systems nominal.
          </p>
        );
        break;

      default:
        output = (
          <p className="text-red-400/90 text-xs py-1">
            command not found: {raw}. Type <span className="text-accent underline cursor-pointer" onClick={() => handleCommand("help")}>help</span> to see available commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: raw, output }]);
    setInput("");
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIdx = historyIndex + 1 < cmdHistory.length ? historyIndex + 1 : historyIndex;
      setHistoryIndex(nextIdx);
      setInput(cmdHistory[cmdHistory.length - 1 - nextIdx] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInput(cmdHistory[cmdHistory.length - 1 - nextIdx] || "");
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  }

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="gradient-border glass-strong relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
    >
      {/* Top Title Bar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-[#080d24]/90 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
          <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
          <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
          <span className="ml-2 flex items-center gap-1.5 font-mono text-xs text-white/50">
            <TerminalIcon size={13} className="text-primary" /> dhaya@latitude-3410:~
          </span>
        </div>
        <span className="font-mono text-[10px] text-accent/80">bash · interactive</span>
      </div>

      {/* Terminal Content Body */}
      <div className="flex-1 overflow-y-auto p-4 font-mono text-xs space-y-3 max-h-72">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            {item.command !== "welcome" && (
              <div className="flex items-center gap-2 text-primary/90">
                <span className="text-accent font-bold">dhaya@portfolio:~$</span>
                <span className="text-white">{item.command}</span>
              </div>
            )}
            <div className="pl-0">{item.output}</div>
          </div>
        ))}

        {/* Live Prompt Line */}
        <div className="flex items-center gap-2 text-primary/90 pt-1">
          <span className="text-accent font-bold">dhaya@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type command here..."
            className="flex-1 bg-transparent text-white focus:outline-none placeholder:text-white/20 text-xs font-mono"
          />
          <button
            onClick={() => handleCommand(input)}
            aria-label="Execute command"
            className="text-white/40 hover:text-primary transition-colors p-1"
          >
            <CornerDownLeft size={13} />
          </button>
        </div>
        <div ref={bottomRef} />
      </div>

      {/* Interactive Quick Chip Bar */}
      <div className="border-t border-white/5 bg-black/30 p-2.5 flex items-center gap-1.5 overflow-x-auto">
        <span className="text-[10px] font-mono text-white/40 uppercase pl-1 mr-1 flex items-center gap-1 flex-shrink-0">
          <Sparkles size={11} className="text-primary" /> Quick:
        </span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            onClick={(e) => {
              e.stopPropagation();
              handleCommand(cmd);
            }}
            className="flex-shrink-0 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-white/70 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
