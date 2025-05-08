"use client";

import React, { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { useTheme } from "../context/ThemeContext";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <nav className="py-6 px-4 md:px-0 sticky top-0 z-50 bg-[hsl(var(--background))]/50 backdrop-blur-sm">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div
            className="p-2 border border-[hsl(var(--border))] rounded-lg text-xl hover:cursor-pointer"
            onClick={toggleTheme}
          >
            {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
          </div>

          <ul className="hidden md:flex gap-6 text-[hsl(var(--foreground))] font-medium">
            <Link
              href="/"
              className="hover:cursor-pointer duration-300 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[hsl(var(--foreground))] after:left-0 after:-bottom-1 after:rounded-xl after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
            <Link
              href="#projects"
              className="hover:cursor-pointer duration-300 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[hsl(var(--foreground))] after:left-0 after:-bottom-1 after:rounded-xl after:duration-300 hover:after:w-full"
            >
              Projects
            </Link>
            <Link
              href="#about"
              className="hover:cursor-pointer duration-300 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[hsl(var(--foreground))] after:left-0 after:-bottom-1 after:rounded-xl after:duration-300 hover:after:w-full"
            >
              About
            </Link>
            <Link
              href="#tech"
              className="hover:cursor-pointer duration-300 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[hsl(var(--foreground))] after:left-0 after:-bottom-1 after:rounded-xl after:duration-300 hover:after:w-full"
            >
              Technologies
            </Link>
            <Link
              href="#contact"
              className="hover:cursor-pointer duration-300 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[hsl(var(--foreground))] after:left-0 after:-bottom-1 after:rounded-xl after:duration-300 hover:after:w-full"
            >
              Contact
            </Link>
          </ul>

          <div
            className="p-2 border border-[hsl(var(--border))] rounded-lg hover:cursor-pointer block md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
          </div>
        </div>
      </nav>

      {isOpen && (
        <ul className="text-left sticky top-22 z-40 border border-[hsl(var(--border))] rounded-md space-y-1 p-2 shadow-md bg-[hsl(var(--secondary))] text-[hsl(var(--foreground))] flex flex-col gap-1 font-semibold">
          <Link
            href="/"
            className="border-b border-[hsl(var(--border))] pb-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#projects"
            className="border-b border-[hsl(var(--border))] pb-2"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#about"
            className="border-b border-[hsl(var(--border))] pb-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#tech"
            className="border-b border-[hsl(var(--border))] pb-2"
            onClick={() => setIsOpen(false)}
          >
            Technologies
          </Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </ul>
      )}
    </>
  );
}
