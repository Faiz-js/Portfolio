import React from "react";
import Badge from "./Badge";

export default function Technologies() {
  return (
    <section id="tech" className="py-4">
      <h1 className="text-2xl md:text-3xl font-bold text-[hsl(var(--foreground))] mb-6">
        Technologies
      </h1>
      <div className="flex flex-wrap gap-4">
        <Badge image="/html.svg" altText="HTML Logo" mainText="HTML" />
        <Badge image="/css.svg" altText="CSS Logo" mainText="CSS" />
        <Badge
          image="/javascript.svg"
          altText="JS Logo"
          mainText="Javascript"
        />
        <Badge
          image="/tailwind.svg"
          altText="tailwindCSS Logo"
          mainText="TailwindCSS"
        />
        <Badge image="/reactjs.svg" altText="Reactjs Logo" mainText="ReactJS" />
        <Badge image="/nextjs.svg" altText="Nextjs Logo" mainText="NextJS" />
        <Badge
          image="/typescript.svg"
          altText="Typescript Logo"
          mainText="Typescript"
        />
        <Badge image="/github.svg" altText="Github Logo" mainText="Github" />
        <Badge
          image="/materialui.svg"
          altText="MaterialUI Logo"
          mainText="MaterialUI"
        />
        <Badge image="/shadcn.svg" altText="Shadcn Logo" mainText="ShadcnUI" />
        <Badge
          image="/framerMotion.svg"
          altText="Framer-motion Logo"
          mainText="Framer Motion"
        />
      </div>
    </section>
  );
}
