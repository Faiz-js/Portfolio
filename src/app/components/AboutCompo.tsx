import React from "react";

interface AboutCompoProps {
  children: React.ReactNode;
}

interface AboutHeadingProps {
  children: React.ReactNode;
}

interface AboutParaProps {
  children: React.ReactNode;
}

export default function AboutCompo({ children }: AboutCompoProps) {
  return <div className="my-8">{children}</div>;
}

function AboutHeading({ children }: AboutHeadingProps) {
  return <h1 className="text-xl font-semibold mb-2 text-[hsl(var(--foreground))]">{children}</h1>;
}

function AboutPara({ children }: AboutParaProps) {
  return <p className="text-lg text-[hsl(var(--muted-foreground))]">✅ {children}</p>;
}

AboutCompo.Heading = AboutHeading;
AboutCompo.Paragraph = AboutPara;
