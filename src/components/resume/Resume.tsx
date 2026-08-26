"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { resume, profile } from "@/lib/data";
import {
  Briefcase,
  GraduationCap,
  Award,
  Layers,
  FileDown,
  Printer,
  Copy,
  Check,
  Calendar,
  ExternalLink,
  ChevronRight,
  Maximize2,
  X,
  Linkedin,
  ShieldCheck,
} from "lucide-react";
import ResumeModal from "./ResumeModal";
import { useToast } from "@/components/ui/Toast";

type Tab = "certifications" | "experience" | "education" | "competencies";

export default function Resume() {
  const [activeTab, setActiveTab] = useState<Tab>("certifications");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewCert, setPreviewCert] = useState<{ title: string; image: string } | null>(null);
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  function handleCopyText() {
    const text = `
${profile.fullName} — ${profile.role}
Email: ${profile.email} | Location: ${profile.location}
GitHub: ${profile.github} | LinkedIn: ${profile.linkedin}

SUMMARY:
${resume.summary}

EXPERIENCE:
${resume.experience.map((e) => `• ${e.role} at ${e.company} (${e.period})\n  ${e.highlights.join("\n  ")}`).join("\n\n")}

EDUCATION:
${resume.education.map((e) => `• ${e.degree} — ${e.institution} (${e.period})`).join("\n")}

CERTIFICATIONS:
${resume.certifications.map((c) => `• ${c.title} — ${c.issuer} (${c.date})`).join("\n")}
`;
    navigator.clipboard.writeText(text.trim());
    setCopied(true);
    showToast("Resume copied to clipboard!", "success");
    setTimeout(() => setCopied(false), 3000);
  }

  return (
    <section id="resume" className="section-pad relative">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Credentials &amp; Resume"
            title="Certifications &amp; Experience"
            description="Verified credentials, national CTF participation, and academic background at Sri Shakthi Institute."
            align="left"
          />

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white/80 hover:border-primary/40 hover:text-primary transition-all"
            >
              {copied ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
              <span>{copied ? "Copied Text" : "Copy Text"}</span>
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-5 py-2.5 text-xs font-medium text-primary hover:bg-primary/20 transition-all shadow-glow"
            >
              <Printer size={14} />
              <span>Print / View Full</span>
            </button>

            <a
              href={profile.resumeUrl}
              download="Dhayalan_Kaniappan_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-xs font-semibold text-[#050816] hover:shadow-glow-secondary transition-all"
            >
              <FileDown size={14} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mt-12 flex flex-wrap gap-3 border-b border-white/10 pb-4">
          <button
            onClick={() => setActiveTab("certifications")}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium transition-all ${
              activeTab === "certifications"
                ? "border border-accent bg-accent/10 text-accent shadow-glow-accent"
                : "border border-white/10 text-white/60 hover:border-white/20 hover:text-white"
            }`}
          >
            <Award size={15} />
            <span>Verified Credentials ({resume.certifications.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("experience")}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium transition-all ${
              activeTab === "experience"
                ? "border border-primary bg-primary/10 text-primary shadow-glow"
                : "border border-white/10 text-white/60 hover:border-white/20 hover:text-white"
            }`}
          >
            <Briefcase size={15} />
            <span>Experience &amp; Roles</span>
          </button>

          <button
            onClick={() => setActiveTab("education")}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium transition-all ${
              activeTab === "education"
                ? "border border-secondary bg-secondary/10 text-secondary shadow-glow-secondary"
                : "border border-white/10 text-white/60 hover:border-white/20 hover:text-white"
            }`}
          >
            <GraduationCap size={15} />
            <span>Education</span>
          </button>

          <button
            onClick={() => setActiveTab("competencies")}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium transition-all ${
              activeTab === "competencies"
                ? "border border-primary bg-primary/10 text-primary shadow-glow"
                : "border border-white/10 text-white/60 hover:border-white/20 hover:text-white"
            }`}
          >
            <Layers size={15} />
            <span>Domain Matrix</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            {/* Certifications Tab */}
            {activeTab === "certifications" && (
              <motion.div
                key="certifications"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* LinkedIn Callout Banner */}
                <div className="rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/10 via-secondary/10 to-transparent p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-primary font-mono text-xs font-semibold">
                      <Linkedin size={16} />
                      <span>Original Verified Certificates Available on LinkedIn</span>
                    </div>
                    <p className="text-sm text-white/80">
                      All original signed credentials and CTF event records are verifiable on my LinkedIn profile.
                    </p>
                  </div>

                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-bold text-black hover:bg-white transition-all shadow-glow flex-shrink-0"
                  >
                    <span>Check Out On LinkedIn</span>
                    <ExternalLink size={14} />
                  </a>
                </div>

                {/* Certificates Grid with Clean Vector Badges */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {resume.certifications.map((c, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="gradient-border glass-strong rounded-3xl overflow-hidden flex flex-col justify-between border border-white/10 group"
                    >
                      <div>
                        {/* Certificate Vector Badge Preview */}
                        <div
                          onClick={() => setPreviewCert({ title: c.title, image: c.image })}
                          className="relative aspect-[4/3] w-full bg-[#080d24] cursor-pointer overflow-hidden border-b border-white/10"
                        >
                          <Image
                            src={c.image}
                            alt={c.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 25vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-mono backdrop-blur-[2px]">
                            <Maximize2 size={16} className="text-primary" />
                            <span>Click to Zoom</span>
                          </div>
                        </div>

                        {/* Details */}
                        <div className="p-5">
                          <span className="font-mono text-[10px] text-white/40">{c.date}</span>
                          <h3 className="font-display text-base font-bold text-white mt-1 leading-snug">
                            {c.title}
                          </h3>
                          <p className="text-xs text-accent font-mono mt-1">
                            {c.issuer}
                          </p>
                          <p className="text-xs text-white/60 mt-2.5 leading-relaxed">
                            {c.description}
                          </p>
                        </div>
                      </div>

                      <div className="p-5 pt-0">
                        <a
                          href={c.linkedinUrl || profile.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 py-2 text-[11px] font-mono text-white/70 hover:border-primary/50 hover:text-primary transition-all"
                        >
                          <Linkedin size={12} />
                          <span>View on LinkedIn</span>
                          <ExternalLink size={10} />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Experience Tab */}
            {activeTab === "experience" && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6 md:grid-cols-3"
              >
                {resume.experience.map((item, idx) => (
                  <div
                    key={idx}
                    className="gradient-border glass-strong flex flex-col justify-between rounded-3xl p-6 sm:p-8"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="eyebrow text-[10px] text-accent">
                          {item.type}
                        </span>
                        <span className="font-mono text-xs text-white/40 flex items-center gap-1">
                          <Calendar size={12} /> {item.period}
                        </span>
                      </div>

                      <h3 className="font-display text-xl font-bold text-white mt-3">
                        {item.role}
                      </h3>

                      <p className="text-xs text-primary font-mono mt-1">
                        {item.company} · {item.location}
                      </p>

                      <p className="text-xs text-white/70 mt-3 leading-relaxed">
                        {item.description}
                      </p>

                      <ul className="mt-4 space-y-2 border-t border-white/5 pt-4">
                        {item.highlights.map((h, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-start gap-2 text-xs text-white/60"
                          >
                            <ChevronRight size={14} className="text-primary flex-shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
                      {item.skills.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] text-white/60"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Education Tab */}
            {activeTab === "education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6 lg:grid-cols-12"
              >
                {resume.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="lg:col-span-8 gradient-border glass-strong rounded-3xl p-6 sm:p-10"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div className="rounded-2xl bg-secondary/10 border border-secondary/30 p-3 text-secondary">
                          <GraduationCap size={26} />
                        </div>
                        <div>
                          <span className="eyebrow text-secondary text-[10px]">Degree Program</span>
                          <h3 className="font-display text-2xl font-bold text-white mt-0.5">
                            {edu.degree}
                          </h3>
                        </div>
                      </div>

                      <span className="font-mono text-xs text-white/50 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 w-fit">
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-base text-primary font-medium mt-4">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-white/40 font-mono mt-0.5">
                      {edu.location}
                    </p>

                    <p className="text-sm text-white/70 mt-4 leading-relaxed">
                      {edu.details}
                    </p>

                    <div className="mt-6 border-t border-white/10 pt-6">
                      <h4 className="font-mono text-xs uppercase tracking-widest text-white/60 mb-3">
                        Key Focus &amp; Highlights
                      </h4>
                      <ul className="space-y-2.5">
                        {edu.highlights.map((h, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-center gap-2 text-xs sm:text-sm text-white/70"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}

                <div className="lg:col-span-4 gradient-border glass-strong rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <span className="eyebrow text-primary text-[10px]">Academic Profile</span>
                    <h4 className="font-display text-lg font-bold text-white mt-1">
                      DevOps &amp; Python / Java
                    </h4>
                    <p className="text-xs text-white/60 mt-2 leading-relaxed">
                      Rigorous foundation in Python systems, Java OOP architectures, Linux administration, Computer Networks, and MERN Stack Web Applications.
                    </p>

                    <div className="mt-4 space-y-2 font-mono text-xs text-white/70">
                      <div className="flex justify-between border-b border-white/5 pb-1">
                        <span className="text-white/40">Status</span>
                        <span className="text-accent">Active Engineering Student</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-1">
                        <span className="text-white/40">Campus</span>
                        <span className="text-white">Sri Shakthi Institute</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-1">
                        <span className="text-white/40">Focus</span>
                        <span className="text-primary">DevOps &amp; Python/MERN</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="mt-6 w-full rounded-2xl border border-white/15 bg-white/5 py-3 text-center text-xs font-semibold text-white hover:border-primary/50 hover:text-primary transition-all"
                  >
                    View Full Resume Layout →
                  </button>
                </div>
              </motion.div>
            )}

            {/* Competency Matrix Tab */}
            {activeTab === "competencies" && (
              <motion.div
                key="competencies"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6 md:grid-cols-2"
              >
                {resume.competencies.map((comp, idx) => (
                  <div
                    key={idx}
                    className="gradient-border glass-strong rounded-3xl p-6 sm:p-8"
                  >
                    <span className="eyebrow text-primary text-[10px]">
                      Core Domain 0{idx + 1}
                    </span>
                    <h3 className="font-display text-xl font-bold text-white mt-1">
                      {comp.category}
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {comp.skills.map((s) => (
                        <span
                          key={s}
                          className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-white/80 hover:border-primary/40 hover:text-primary transition-colors"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Certificate Image Zoom Modal */}
      <AnimatePresence>
        {previewCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewCert(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative z-10 max-w-3xl w-full rounded-3xl overflow-hidden border border-white/20 bg-[#070c24] p-4 sm:p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h4 className="font-display text-sm font-semibold text-white truncate pr-4">
                  {previewCert.title}
                </h4>
                <button
                  onClick={() => setPreviewCert(null)}
                  className="rounded-full p-1 text-white/60 hover:text-white"
                  aria-label="Close image preview"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="relative aspect-[4/3] w-full mt-4 rounded-2xl overflow-hidden bg-black">
                <Image
                  src={previewCert.image}
                  alt={previewCert.title}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Full Resume Modal */}
      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
