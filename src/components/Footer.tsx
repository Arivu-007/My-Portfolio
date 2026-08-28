import { Mail, Globe } from "lucide-react";
import LinkedinIcon from "./LinkedinIcon";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 text-center">
      <div className="max-w-5xl mx-auto px-5">
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-5">
          &copy; 2026 Arivazhagan Pandiyan. All rights reserved.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a href="mailto:arivu.p@live.in" className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-all" aria-label="Email">
            <Mail className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/arivazhagan-pandiyan" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-all" aria-label="LinkedIn">
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a href="https://www.arivu.site" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-all" aria-label="Website">
            <Globe className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
