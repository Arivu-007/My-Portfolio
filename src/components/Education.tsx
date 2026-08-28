"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHead } from "./About";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-5">
        <SectionHead title="Education" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative pl-14"
        >
          <div className="absolute left-3.5 top-1 w-3 h-3 rounded-full bg-white dark:bg-slate-900 border-[3px] border-blue-600 z-10" />
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700" />

          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1">
                Bachelor of Technology (Information Technology)
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Sri Venkateshwara College of Engineering, Anna University — Chennai, India
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
