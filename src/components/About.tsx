"use client";

import { motion } from "framer-motion";
import { Calendar, BellOff, Users, Award } from "lucide-react";

const stats = [
  { icon: Calendar, number: "11+", label: "Years Experience" },
  { icon: BellOff, number: "75%", label: "Alert Noise Reduced" },
  { icon: Users, number: "15+", label: "Team Members Led" },
  { icon: Award, number: "2", label: "Certifications" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-5">
        <SectionHead title="About Me" />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3 space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              I am a seasoned <Highlight>Site Reliability Engineering Lead / Senior SRE</Highlight> with over{" "}
              <Highlight>11 years of experience</Highlight> supporting large-scale production environments across financial services and logistics platforms. I specialize in building fault-tolerant, scalable infrastructure and ensuring operational excellence for mission-critical applications.
            </p>
            <p>
              My expertise spans <Highlight>Microsoft Azure</Highlight> and <Highlight>Google Cloud Platform (GCP)</Highlight>, with deep hands-on experience in <Highlight>Kubernetes (GKE)</Highlight> environments and enterprise observability platforms including <Highlight>Datadog (APM, Tracing, DBM, RUM), Splunk, and Dynatrace</Highlight>. I serve as the primary Datadog specialist, managing end-to-end observability pipelines and driving telemetry hygiene through <Highlight>OpenTelemetry</Highlight> adoption.
            </p>
            <p>
              As an <Highlight>Incident Commander</Highlight>, I lead triage for high-severity outages and drive post-incident root cause analysis (RCA) to ensure continuous improvement. I&apos;ve successfully <Highlight>reduced alert noise from 40% to 10%</Highlight> by implementing AI-driven alerting, Watchdog anomaly detection, and SLO-aligned monitoring standards based on the <Highlight>&ldquo;Golden Signals&rdquo;</Highlight> framework.
            </p>
            <p>
              I&apos;m proficient in Infrastructure as Code using <Highlight>Terraform and Ansible</Highlight>, with strong scripting skills in <Highlight>Python, PowerShell, and Shell</Highlight>. I hold the <Highlight>Microsoft Certified: Azure Administrator Associate (AZ-104)</Highlight> and <Highlight>Datadog Fundamentals</Highlight> certifications. I&apos;m passionate about reducing toil through automation, optimizing cloud costs, and mentoring engineering teams on observability best practices.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all text-center"
              >
                <stat.icon className="w-7 h-7 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{stat.number}</div>
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return <strong className="text-blue-700 dark:text-blue-400 font-semibold">{children}</strong>;
}

export function SectionHead({ title }: { title: string }) {
  return (
    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">{title}</h2>
      <div className="h-1 w-14 bg-blue-600 rounded-full mx-auto" />
    </div>
  );
}
