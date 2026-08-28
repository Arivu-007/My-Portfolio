"use client";

import { motion } from "framer-motion";
import { SectionHead } from "./About";

const jobs = [
  {
    title: "Site Reliability Engineer",
    period: "Aug 2025 – Present",
    company: "Izen Labs (Client: Uber Freight) · Remote",
    tasks: [
      { label: "On-Prem to GCP Migration", desc: "Spearheaded the comprehensive migration of monitoring infrastructure from legacy on-premises data centers to Google Cloud Platform (GCP), ensuring zero observability gaps." },
      { label: "Datadog Observability Transformation", desc: "Re-architected the monitoring landscape by migrating legacy ELK stack logs and on-prem metrics into Datadog, centralizing telemetry for high-scale GCP workloads." },
      { label: "High Availability & Error Budgets", desc: "Engineered system reliability to maintain 99.99% availability for mission-critical logistics platforms; managed Error Budgets to balance feature velocity with production stability." },
      { label: "Infrastructure as Code (IaC)", desc: "Utilized Terraform to architect and provision multi-region Kubernetes (GKE) clusters, implementing modular code to ensure consistent environment states." },
      { label: "Chaos Engineering Implementation", desc: "Enhanced system resilience by conducting scheduled fault-injection experiments using Chaos Mesh, successfully identifying and mitigating single points of failure." },
      { label: "Kubernetes Scalability", desc: "Optimized application performance via manual and automated scaling (HPA/VPA) of workloads within Kubernetes to handle unpredictable traffic spikes." },
      { label: "CI/CD Pipeline Management", desc: "Orchestrated automated deployment pipelines using Jenkins and GitHub, incorporating automated testing to reduce deployment-related incidents." },
      { label: "Incident Command & RCA", desc: "Acted as Incident Commander for high-severity production outages, coordinating cross-functional teams and utilizing ServiceNow for Root Cause Analysis (RCA)." },
      { label: "Alert Optimization", desc: "Leveraged Datadog Watchdog and AI-driven alerting to reduce alert noise from 40% to 10%, focusing the team on actionable events." },
    ],
  },
  {
    title: "Site Reliability Engineering Lead",
    period: "Aug 2023 – Jul 2024",
    company: "New American Funding",
    tasks: [
      { label: "Strategic Team Leadership", desc: "Led a high-performing 15-member SRE team responsible for the 24/7 reliability of enterprise-level financial and mortgage systems." },
      { label: "Enterprise Monitoring Overhaul", desc: "Designed and implemented a comprehensive enterprise monitoring strategy utilizing Azure Monitor and PagerDuty, increasing visibility into legacy applications." },
      { label: "Service Level Definition", desc: "Established robust service level indicators (SLIs) and service level objectives (SLOs) to align IT performance with business expectations." },
      { label: "Operational Automation", desc: "Significantly reduced manual toil by automating repetitive operational tasks and diagnostic workflows using PowerShell and Python scripting." },
      { label: "Cross-Team Incident Coordination", desc: "Managed high-severity production responses, facilitating blameless post-mortems and coordinating long-term stability fixes." },
    ],
  },
  {
    title: "Technology Operations Associate",
    period: "Oct 2017 – Oct 2022",
    company: "Wells Fargo India Solutions",
    tasks: [
      { label: "Infrastructure Maintenance", desc: "Maintained enterprise infrastructure supporting mission-critical banking applications." },
      { label: "Health Monitoring", desc: "Monitored performance across Windows and VMware environments, automating diagnostics with PowerShell." },
      { label: "Collaboration", desc: "Partnered with network and database teams to resolve complex production incidents." },
    ],
  },
  {
    title: "System Administrator",
    period: "Sep 2015 – Oct 2017",
    company: "NTT DATA",
    tasks: [
      { label: "Server Management", desc: "Managed Windows and Linux production servers in a 35-member command center for financial clients." },
      { label: "Hardware Operations", desc: "Resolved hardware issues via iLO, DRAC, and SMH; managed security compliance and tool integration." },
    ],
  },
  {
    title: "Support Engineer",
    period: "Nov 2014 – Sep 2015",
    company: "Firstsource",
    tasks: [
      { label: "Production Support", desc: "Monitored server stability (CPU/Disk/Memory) and managed VSS backups for United Health Care and GHX." },
      { label: "Technical Support", desc: "Resolved infrastructure alerts and handled incident ticketing through Kayako and XSmart-control." },
    ],
  },
  {
    title: "Assistant Engineer",
    period: "Jun 2013 – Aug 2014",
    company: "Cliptos Technologies",
    tasks: [
      { label: "Systems Deployment", desc: "Installed and upgraded healthcare IT systems (Meditos) and managed asset inventory." },
      { label: "Field Support", desc: "Configured engineering software solutions and assisted in resolving escalated technical issues." },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-5">
        <SectionHead title="Professional Experience" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700" />

          <div className="space-y-10">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative pl-14"
              >
                {/* Dot */}
                <div className="absolute left-3.5 top-1 w-3 h-3 rounded-full bg-white dark:bg-slate-950 border-[3px] border-blue-600 z-10" />

                <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600 transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{job.title}</h3>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">{job.company}</p>
                  <ul className="space-y-2.5">
                    {job.tasks.map((task) => (
                      <li key={task.label} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        <span>
                          <strong className="text-slate-800 dark:text-slate-200">{task.label}:</strong>{" "}
                          {task.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
