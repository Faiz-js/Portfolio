import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { myData } from "@/constants/myData";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row justify-between gap-8 mt-8 md:mt-16 py-4"
    >
      <div className="order-2 md:order-1 flex flex-col gap-6">
        <div className="text-2xl lg:text-5xl">
          <h1>
            Hi, I'm <span className="font-bold">Faiz Mohamed</span> 👋
          </h1>

          <p>Frontend Developer</p>
        </div>

        <div className="text-lg md:text-xl space-y-2">
          <p>
            Building responsive, accessible, and performant web applications.
          </p>

          <p>
            Specialized in building modern web application with ReactJS and
            NextJS.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
          <a
            href={myData.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-6 py-3 rounded-lg text-lg text-center hover:scale-110 hover:shadow-lg transition duration-300"
          >
            Resume
          </a>

          <div className="flex gap-2 text-2xl">
            <Link
              href={myData.linkedin}
              target="_blank"
              className="p-2 rounded-lg hover:bg-[hsl(var(--secondary))] transition-colors"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href={myData.github}
              target="_blank"
              className="p-2 rounded-lg hover:bg-[hsl(var(--secondary))] transition-colors"
            >
              <FaGithub />
            </Link>
            <Link
              href={myData.instagram}
              target="_blank"
              className="p-2 rounded-lg hover:bg-[hsl(var(--secondary))] transition-colors"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>

      <div className="order-1 md:order-2">
        <Image
          src="/DP.jpg"
          alt="DP"
          width={120}
          height={120}
          className="rounded-xl"
        />
      </div>
    </section>
  );
}
