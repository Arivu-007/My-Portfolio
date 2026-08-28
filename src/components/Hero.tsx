"use client";

import { Mail, FileText, MapPin, Phone, Globe } from "lucide-react";
import LinkedinIcon from "./LinkedinIcon";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="pt-40 pb-24 bg-gradient-to-b from-blue-50 to-slate-50 dark:from-slate-900 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800 text-center">
      <div className="max-w-4xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative w-32 h-32 mx-auto">
            <Image
              src="/profile.jpg"
              alt="Arivazhagan Pandiyan"
              fill
              className="rounded-full object-cover object-top border-4 border-white dark:border-slate-800 shadow-2xl shadow-blue-200 dark:shadow-blue-900/40"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-semibold tracking-wide uppercase">
            Open to SRE Lead Roles
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 dark:from-slate-100 dark:via-slate-300 dark:to-slate-500 bg-clip-text text-transparent mb-5">
            Arivazhagan Pandiyan
          </h1>

          <p className="text-xl text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Site Reliability Engineering professional with <strong className="text-slate-700 dark:text-slate-300 font-semibold">11+ years</strong> of experience supporting large-scale production environments across financial services and logistics platforms.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <a
              href="mailto:arivu.p@live.in"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md hover:shadow-lg transition-all"
            >
              <Mail className="w-4 h-4" /> Get in Touch
            </a>
            <a
              href="/Arivazhagan_Pandiyan_Resume.pdf"
              target="_blank"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium transition-all"
            >
              <FileText className="w-4 h-4" /> Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/arivazhagan-pandiyan"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium transition-all"
            >
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5"><Mail className="w-4 h-4" /> arivu.p@live.in</span>
            <span className="flex items-center gap-1.5"><Phone className="w-4 h-4" /> +1 346-599-0347</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Houston, Texas, USA</span>
            <a href="https://www.arivu.site" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Globe className="w-4 h-4" /> www.arivu.site
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
