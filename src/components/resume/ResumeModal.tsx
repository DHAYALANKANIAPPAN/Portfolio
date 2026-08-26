"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Printer, Mail, Github, Linkedin, MapPin, Check, Copy } from "lucide-react";
import { profile, resume } from "@/lib/data";
import { useState } from "react";
import { useToast } from "@/components/ui/Toast";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: Props) {
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);

  function handlePrint() {
    window.print();
  }

  function handleCopyText() {
    const textContent = `
${profile.fullName}
${profile.role}
Email: ${profile.email} | GitHub: ${profile.github} | LinkedIn: ${profile.linkedin}
Location: ${profile.location}

SUMMARY:
${resume.summary}

EXPERIENCE:
${resume.experience
  .map(
    (exp) => `
* ${exp.role} — ${exp.company} (${exp.period})
  ${exp.description}
  ${exp.highlights.map((h) => `  - ${h}`).join("\n")}
  Skills: ${exp.skills.join(", ")}
`
  )
  .join("\n")}

EDUCATION:
${resume.education
  .map(
    (edu) => `
* ${edu.degree} — ${edu.institution} (${edu.period})
  ${edu.details}
`
  )
  .join("\n")}

KEY CERTIFICATIONS:
${resume.certifications.map((c) => `* ${c.title} (${c.issuer}, ${c.date})`).join("\n")}

CORE SKILLS:
${resume.competencies.map((c) => `* ${c.category}: ${c.skills.join(", ")}`).join("\n")}
`;

    navigator.clipboard.writeText(textContent.trim());
    setCopied(true);
    showToast("Resume copied to clipboard as text!", "success");
    setTimeout(() => setCopied(false), 3000);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass-strong border border-white/20 bg-[#060a1d] shadow-2xl p-6 sm:p-10 text-white print:static print:max-h-none print:w-full print:bg-white print:text-black print:p-0"
          >
            {/* Header Actions */}
            <div className="sticky top-0 z-20 -mx-6 sm:-mx-10 -mt-6 sm:-mt-10 mb-8 flex items-center justify-between border-b border-white/10 bg-[#060a1d]/95 px-6 py-4 backdrop-blur-xl print:hidden">
              <span className="font-mono text-xs text-primary flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-primary" />
                {profile.fullName} — Professional Resume
              </span>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopyText}
                  className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:border-primary/50 hover:text-primary transition-all"
                >
                  {copied ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
                  <span>{copied ? "Copied" : "Copy Text"}</span>
                </button>

                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary hover:bg-primary/20 transition-all"
                >
                  <Printer size={14} />
                  <span>Print / Save PDF</span>
                </button>

                <button
                  onClick={onClose}
                  aria-label="Close modal"
                  className="rounded-full p-1.5 text-white/50 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Resume Document Content */}
            <div className="space-y-8">
              {/* Profile Header */}
              <div className="border-b border-white/10 pb-6 print:border-black/20">
                <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white print:text-black">
                  {profile.fullName}
                </h1>
                <p className="text-primary font-mono text-sm sm:text-base mt-1 print:text-blue-600 font-semibold">
                  {profile.role}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-white/60 print:text-gray-700">
                  <span className="flex items-center gap-1.5">
                    <Mail size={13} className="text-primary" /> {profile.email}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-primary" /> {profile.location}
                  </span>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 hover:text-primary transition-colors"
                  >
                    <Github size={13} className="text-primary" /> github.com/{profile.githubUsername}
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 hover:text-primary transition-colors"
                  >
                    <Linkedin size={13} className="text-primary" /> linkedin.com/in/dhaya05
                  </a>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h2 className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-2 print:text-black">
                  Professional Summary
                </h2>
                <p className="text-sm leading-relaxed text-white/80 print:text-gray-800">
                  {resume.summary}
                </p>
              </div>

              {/* Experience */}
              <div>
                <h2 className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-4 print:text-black">
                  Experience &amp; Technical Projects
                </h2>
                <div className="space-y-6">
                  {resume.experience.map((exp, idx) => (
                    <div key={idx} className="border-l-2 border-primary/30 pl-4 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="font-semibold text-white print:text-black text-base">
                            {exp.role}
                          </h3>
                          <p className="text-xs text-accent print:text-blue-700 font-mono">
                            {exp.company} · {exp.location}
                          </p>
                        </div>
                        <span className="font-mono text-xs text-white/50 print:text-gray-500">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-xs text-white/70 print:text-gray-700">
                        {exp.description}
                      </p>
                      <ul className="list-disc list-inside text-xs text-white/70 print:text-gray-800 space-y-1">
                        {exp.highlights.map((h, hIdx) => (
                          <li key={hIdx}>{h}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {exp.skills.map((s) => (
                          <span
                            key={s}
                            className="rounded bg-white/10 px-2 py-0.5 font-mono text-[10px] text-white/70 print:border print:border-gray-300"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-4 print:text-black">
                  Education
                </h2>
                <div className="space-y-4">
                  {resume.education.map((edu, idx) => (
                    <div key={idx} className="border-l-2 border-secondary/40 pl-4 space-y-1.5">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="font-semibold text-white print:text-black text-base">
                            {edu.degree}
                          </h3>
                          <p className="text-xs text-primary font-medium">
                            {edu.institution}
                          </p>
                        </div>
                        <span className="font-mono text-xs text-white/50 print:text-gray-500">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-xs text-white/70 print:text-gray-700">
                        {edu.details}
                      </p>
                      <ul className="list-disc list-inside text-xs text-white/60 space-y-0.5">
                        {edu.highlights.map((h, hIdx) => (
                          <li key={hIdx}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-3 print:text-black">
                  Verified Certifications &amp; CTF Achievements
                </h2>
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  {resume.certifications.map((c) => (
                    <div
                      key={c.title}
                      className="rounded-xl border border-white/10 bg-white/5 p-3 print:border-gray-300"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-white print:text-black">{c.title}</span>
                        <span className="font-mono text-[10px] text-primary">{c.date}</span>
                      </div>
                      <p className="text-[11px] text-white/50 print:text-gray-600 mt-1">
                        {c.issuer} — {c.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Competencies Matrix */}
              <div>
                <h2 className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-3 print:text-black">
                  Technical Competencies
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 text-xs">
                  {resume.competencies.map((comp) => (
                    <div
                      key={comp.category}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 print:border-gray-300 print:bg-transparent"
                    >
                      <h4 className="font-semibold text-white print:text-black mb-2 font-mono text-xs text-accent">
                        {comp.category}
                      </h4>
                      <p className="text-white/70 print:text-gray-800 leading-relaxed font-mono text-[11px]">
                        {comp.skills.join(" · ")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
