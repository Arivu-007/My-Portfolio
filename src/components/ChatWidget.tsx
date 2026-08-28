"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";

type Message = { role: "bot" | "user"; text: string };

const KNOWLEDGE: Record<string, string> = {
  experience: "Arivazhagan has 11+ years of experience in SRE, currently working at Izen Labs (client: Uber Freight) since August 2025.",
  skills: "Core skills include Kubernetes (GKE), Datadog, Azure, GCP, Terraform, Ansible, Python, and SRE practices like SLIs/SLOs, chaos engineering, and incident command.",
  projects: "Key projects include On-Prem to GCP Telemetry Migration, Multi-Region GKE & Chaos Resilience (Chaos Mesh), AI-driven Alert Optimization (75% noise reduction), and Model Context Protocol (MCP) tooling.",
  certifications: "He holds Microsoft Certified: Azure Administrator Associate (AZ-104) and Datadog Fundamentals certifications.",
  contact: "You can reach Arivazhagan at arivu.p@live.in or +1 346-599-0347. He's based in Houston, Texas.",
  education: "He completed a Bachelor of Technology in Information Technology from Sri Venkateshwara College of Engineering, Anna University, Chennai.",
  location: "Arivazhagan is based in Houston, Texas, USA.",
  availability: "He is currently open to new SRE Lead opportunities.",
};

function getBotReply(input: string): string {
  const q = input.toLowerCase();
  if (q.match(/experience|years|career|work/)) return KNOWLEDGE.experience;
  if (q.match(/project|initiative|portfolio|arch/)) return KNOWLEDGE.projects;
  if (q.match(/skill|tech|stack|tool|language|platform/)) return KNOWLEDGE.skills;
  if (q.match(/cert|certif|az.104|datadog/)) return KNOWLEDGE.certifications;
  if (q.match(/contact|email|phone|reach|touch/)) return KNOWLEDGE.contact;
  if (q.match(/educat|degree|college|university|study/)) return KNOWLEDGE.education;
  if (q.match(/location|city|where|based|live/)) return KNOWLEDGE.location;
  if (q.match(/availab|open|hire|opportunit|job/)) return KNOWLEDGE.availability;
  return "I can help with questions about Arivazhagan's experience, skills, certifications, education, or contact details. What would you like to know?";
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hello! I'm Arivu's AI assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { role: "bot", text: getBotReply(text) }]);
    }, 900);
  };

  return (
    <div className="fixed bottom-7 right-7 z-50 flex flex-col items-end gap-4">
      {/* Chat panel */}
      <div
        className={`w-80 sm:w-96 bg-white/90 dark:bg-slate-900/95 backdrop-blur-xl border border-white/30 dark:border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          open ? "opacity-100 scale-100 pointer-events-auto max-h-[520px]" : "opacity-0 scale-95 pointer-events-none max-h-0"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-blue-600 to-blue-500">
          <h3 className="text-white font-semibold text-sm">Arivu&apos;s Assistant</h3>
          <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0 scrollbar-thin">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white rounded-br-sm"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-sm"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex justify-start">
              <div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1">
                {[0, 1, 2].map((i) => (
                  <span key={i} className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="px-4 py-3 border-t border-slate-100 dark:border-slate-800 flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Ask about my experience..."
            className="flex-1 px-4 py-2 rounded-full text-sm border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
          />
          <button
            onClick={send}
            className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white flex-shrink-0 transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* FAB */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        aria-label="Open chat"
      >
        {open ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
}
