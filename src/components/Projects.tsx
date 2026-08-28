"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHead } from "./About";
import {
  Cloud,
  Layers,
  Cpu,
  Zap,
  Bot,
  BarChart3,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

type Project = {
  title: string;
  category: "Cloud & K8s" | "Observability & AIOps" | "Automation & AI";
  icon: typeof Cloud;
  organization: string;
  summary: string;
  keyPoints: string[];
  tags: string[];
};

const projects: Project[] = [
  {
    title: "On-Prem to GCP Telemetry & Observability Migration",
    category: "Observability & AIOps",
    icon: Cloud,
    organization: "Izen Labs · Client: Uber Freight",
    summary:
      "Spearheaded comprehensive migration of legacy on-premises logging and monitoring infrastructure to Google Cloud Platform with centralized Datadog telemetry.",
    keyPoints: [
      "Migrated legacy ELK stack logs and on-prem metrics into Datadog, ensuring zero observability blind spots for high-scale GCP workloads.",
      "Established OpenTelemetry standard pipelines for distributed tracing across cloud microservices.",
      "Provisioned repeatable monitoring infrastructure using Terraform IaC modules.",
    ],
    tags: ["GCP", "Datadog (APM/Tracing)", "OpenTelemetry", "Terraform", "ELK Stack"],
  },
  {
    title: "Multi-Region Kubernetes & Chaos Resilience Engineering",
    category: "Cloud & K8s",
    icon: Layers,
    organization: "Uber Freight Workloads",
    summary:
      "Architected fault-tolerant multi-region Kubernetes (GKE) clusters with automated scaling and proactive chaos engineering fault-injection tests.",
    keyPoints: [
      "Provisioned multi-region GKE clusters using modular Terraform code for immutable infrastructure.",
      "Conducted scheduled fault-injection experiments using Chaos Mesh to uncover and mitigate single points of failure.",
      "Implemented automated HPA/VPA scaling policies to smoothly absorb unexpected freight traffic surges while maintaining 99.99% availability.",
    ],
    tags: ["Kubernetes (GKE)", "Chaos Mesh", "Terraform", "HPA / VPA", "Docker"],
  },
  {
    title: "AI-Driven Alert Optimization & AIOps Platform",
    category: "Observability & AIOps",
    icon: Zap,
    organization: "Production Operations",
    summary:
      "Engineered an AIOps telemetry framework that reduced on-call alert fatigue by 75% and automated incident triage workflows.",
    keyPoints: [
      "Leveraged Datadog Watchdog AI anomaly detection and Golden Signals framework to drop alert noise from 40% down to 10%.",
      "Defined actionable SLIs/SLOs and managed Error Budgets to balance feature release velocity with system stability.",
      "Integrated automated incident dispatch and root cause analysis (RCA) reporting through ServiceNow and PagerDuty.",
    ],
    tags: ["AIOps", "Datadog Watchdog", "PagerDuty", "ServiceNow", "SLIs / SLOs", "Python"],
  },
  {
    title: "Enterprise Azure & Dynatrace Observability Overhaul",
    category: "Observability & AIOps",
    icon: Cpu,
    organization: "New American Funding",
    summary:
      "Designed and executed end-to-end observability strategy across critical financial and mortgage platforms.",
    keyPoints: [
      "Configured Dynatrace monitors, Real User Monitoring (RUM), and deep distributed tracing for legacy and modern financial apps.",
      "Automated diagnostic and remediation runbooks using PowerShell and Python scripts to eliminate repetitive manual toil.",
      "Led 15-member SRE team through high-severity incident responses and blameless post-mortem reviews.",
    ],
    tags: ["Microsoft Azure", "Dynatrace", "Azure Monitor", "PowerShell", "Incident Command"],
  },
  {
    title: "AI Tooling & Workflow Automation via MCP",
    category: "Automation & AI",
    icon: Bot,
    organization: "SRE Automation Initiative",
    summary:
      "Built custom Model Context Protocol (MCP) integrations and AI-assisted workflows to accelerate SRE diagnostics and incident resolution.",
    keyPoints: [
      "Connected developer agents (Claude, Cursor) to internal monitoring telemetry and infrastructure APIs via MCP standards.",
      "Automated log parsing, anomaly summarization, and routine operational runbooks, reducing MTTR for common incidents.",
      "Authored custom Python automation utilities for cloud health audits and configuration consistency checks.",
    ],
    tags: ["Model Context Protocol (MCP)", "Claude / Cursor", "Python", "AIOps", "Shell"],
  },
  {
    title: "Operations & Reliability Analytics Platform",
    category: "Automation & AI",
    icon: BarChart3,
    organization: "Enterprise Infrastructure & Logistics",
    summary:
      "Built interactive Power BI and SQL-driven observability analytics dashboards tracking mission-critical operational KPIs and SLA adherence.",
    keyPoints: [
      "Constructed executive Power BI dashboards visualizing multi-service SLA adherence, MTTA/MTTR metrics, and incident trends.",
      "Aggregated database and operational telemetry using Datadog DBM, Azure SQL, and ServiceNow APIs.",
      "Delivered real-time operational insights for both engineering leadership and business operations stakeholders.",
    ],
    tags: ["Power BI", "Power Query", "Azure SQL", "Datadog DBM", "SLA Analytics"],
  },
];

const categories = ["All", "Cloud & K8s", "Observability & AIOps", "Automation & AI"] as const;

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-5">
        <SectionHead title="Key Projects & Initiatives" />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-500/30"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 text-blue-600 dark:text-blue-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-3">
                      {project.organization}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-2 mb-6">
                      {project.keyPoints.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
