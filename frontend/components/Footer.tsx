"use client";

import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-white mt-24">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            Built by Manu Malakannavar
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/manu-malakannavar-431940202/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-[#6366F1] transition" />
            </Link>

            <Link href="mailto:mm03602@surrey.ac.uk" aria-label="Email">
              <Mail className="w-5 h-5 text-muted-foreground hover:text-[#6366F1] transition" />
            </Link>
          </div>
        </div>

        <p className="text-xs text-muted-foreground text-center md:text-left leading-relaxed font-bold">
          Vivida is not a substitute for professional medical or mental health
          advice, diagnosis, or treatment.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
