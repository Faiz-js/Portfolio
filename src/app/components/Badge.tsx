import Image from "next/image";
import React from "react";

interface BadgeProps {
  image: string;
  altText: string;
  mainText: string;
}

export default function Badge({ image, altText, mainText }: BadgeProps) {
  return (
    <div className="flex items-center gap-2 rounded-lg p-2 bg-[hsl(var(--secondary))]">
      <Image src={image} alt={altText} width={30} height={30} />
      <h1 className="font-medium">{mainText}</h1>
    </div>
  );
}
