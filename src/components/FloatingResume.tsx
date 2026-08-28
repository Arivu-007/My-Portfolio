"use client";

import { useEffect, useState } from "react";
import { FileText } from "lucide-react";

export default function FloatingResume() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="/Arivazhagan_Pandiyan_Resume.pdf"
      download
      aria-label="Download Resume"
      className={`fixed bottom-7 left-7 z-50 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <FileText className="w-4 h-4" />
      Resume
    </a>
  );
}
