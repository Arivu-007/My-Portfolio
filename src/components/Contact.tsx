"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import LinkedinIcon from "./LinkedinIcon";
import { SectionHead } from "./About";

const items = [
  { icon: Mail, label: "Email", value: "arivu.p@live.in", href: "mailto:arivu.p@live.in" },
  { icon: Phone, label: "Phone", value: "+1 346-599-0347", href: "tel:+13465990347" },
  { icon: MapPin, label: "Location", value: "Houston, Texas, USA", href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-3xl mx-auto px-5">
        <SectionHead title="Get in Touch" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl p-10 text-center"
        >
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-10">
            I&apos;m currently open to new opportunities as a Site Reliability Engineer Lead. Whether you have a question or just want to connect, feel free to reach out!
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {items.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-slate-100 text-sm">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://www.linkedin.com/in/arivazhagan-pandiyan"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md hover:shadow-lg transition-all"
          >
            <LinkedinIcon className="w-5 h-5" /> Connect on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
