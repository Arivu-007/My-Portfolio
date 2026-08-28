"use client";

import { motion } from "framer-motion";
import { SectionHead } from "./About";
import { BadgeCheck } from "lucide-react";

const skillGroups = [
  {
    title: "Cloud & Kubernetes",
    tags: ["Google Cloud Platform (GCP)", "Microsoft Azure", "Google Kubernetes Engine (GKE)", "Kubernetes", "ConfigSync GitOps", "Helm", "Docker"],
  },
  {
    title: "CI/CD & GitOps",
    tags: ["Jenkins on Kubernetes", "JCasC", "Stakater Reloader", "GitOps Environment Promotion", "GitHub Actions"],
  },
  {
    title: "Observability",
    tags: ["Datadog (APM, Tracing, DBM, RUM)", "OpenTelemetry", "ELK Stack", "Splunk", "Dynatrace", "Azure Monitor"],
  },
  {
    title: "Automation / IaC",
    tags: ["Terraform", "Ansible", "Python", "PowerShell", "Bash / Shell Scripting"],
  },
  {
    title: "Secrets & Security",
    tags: ["HashiCorp Vault", "External Secrets Operator", "Kubernetes SecretStores", "RBAC & SecurityContext"],
  },
  {
    title: "SRE Practice",
    tags: ["Error Budgets", "Chaos Engineering (Chaos Mesh)", "Blameless Post-mortems", "Golden Signals", "SLIs / SLOs"],
  },
  {
    title: "ITSM / Incident",
    tags: ["PagerDuty", "Opsgenie", "ServiceNow", "Incident Command & RCA"],
  },
  {
    title: "Platforms & Infra",
    tags: ["Linux (RHEL / Ubuntu)", "VMware", "Windows Server", "WebLogic TMS"],
  },
];

const certs = [
  {
    badge: "DD",
    gradient: "from-purple-600 to-violet-500",
    name: "Datadog Fundamentals Certification",
    issuer: "Datadog · Verified",
  },
  {
    badge: "MS",
    gradient: "from-blue-600 to-sky-400",
    name: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft · AZ-104",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-5">
        <SectionHead title="Technical Proficiency" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Certifications card — spans full row, shown first */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="lg:col-span-3 bg-white dark:bg-slate-800 p-6 rounded-2xl border-2 border-blue-200 dark:border-blue-700 shadow-sm"
          >
            <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-4 pb-3 border-b border-blue-100 dark:border-blue-900 text-sm uppercase tracking-wide">
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {certs.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-sm transition-all"
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center text-white text-xs font-black flex-shrink-0`}>
                    {cert.badge}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-tight">{cert.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{cert.issuer}</p>
                  </div>
                  <BadgeCheck className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                </div>
              ))}
            </div>
          </motion.div>

          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600 transition-all"
            >
              <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4 pb-3 border-b border-slate-100 dark:border-slate-700 text-sm uppercase tracking-wide">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
