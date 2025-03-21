import Link from "next/link";
import React from "react";
import { myData } from "@/constants/myData";

export default function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--border))] mt-10 pt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="transition-all duration-100 hover:font-medium"
          >
            Home
          </Link>
          <Link
            href="#projects"
            className="transition-all duration-100 hover:font-medium"
          >
            Projects
          </Link>
          <Link
            href="#about"
            className="transition-all duration-100 hover:font-medium"
          >
            About
          </Link>
          <Link
            href="#tech"
            className="transition-all duration-100 hover:font-medium"
          >
            Technologies
          </Link>
          <Link
            href="#contact"
            className="transition-all duration-100 hover:font-medium"
          >
            Contact
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            href={myData.linkedin}
            className="transition-all duration-100 hover:font-medium"
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link
            href={myData.github}
            className="transition-all duration-100 hover:font-medium"
            target="_blank"
          >
            Github
          </Link>
          <Link
            href={myData.instagram}
            target="_blank"
            className="transition-all duration-100 hover:font-medium"
          >
            Instagram
          </Link>
        </div>
      </div>

      <h1 className="mt-10 mb-4 text-lg text-center text-[hsl(var(--muted-foreground))]">
        Made with ❤️ inspired by
        <a
          href="https://manuarora.in/"
          target="_blank"
          className="font-semibold text-[hsl(var(--foreground))] transition-colors"
        >
          {" "}
          Manu Arora
        </a>
      </h1>
    </footer>
  );
}
