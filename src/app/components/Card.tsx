import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  children: React.ReactNode;
}

interface CardImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface CardContentProps {
  children: React.ReactNode;
}

interface CardTitleProps {
  children: React.ReactNode;
}

interface CardDescriptionProps {
  children: React.ReactNode;
}

interface CardBadgesProps {
  children: React.ReactNode;
}

interface CardBadgeProps {
  children: React.ReactNode;
}

interface CardButtonsProps {
  children: React.ReactNode;
}

interface CardLiveButton {
  children: React.ReactNode;
  live: string;
}

interface CardURLButtonProps {
  children: React.ReactNode;
  github: string;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] rounded-xl shadow-sm hover:shadow-lg hover:shadow-[hsl(var(--secondary))] transition-all duration-300 p-4 flex flex-col justify-between gap-2 h-full mx-auto max-w-[460px] md:w-auto border border-[hsl(var(--border))] hover:-translate-y-2">
      {children}
    </div>
  );
}

function CardImage({ src, alt, width, height }: CardImageProps) {
  return (
    <div className="aspect-video relative overflow-hidden rounded-lg">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

function CardContent({ children }: CardContentProps) {
  return <div className="flex flex-col gap-3 flex-grow">{children}</div>;
}

function CardTitle({ children }: CardTitleProps) {
  return (
    <h2 className="text-xl lg:text-2xl font-bold tracking-tight">{children}</h2>
  );
}

function CardDescription({ children }: CardDescriptionProps) {
  return (
    <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
      {children}
    </p>
  );
}

function CardBadges({ children }: CardBadgesProps) {
  return <div className="flex flex-wrap gap-2 mt-auto pt-4">{children}</div>;
}

function CardBadge({ children }: CardBadgeProps) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] border border-[hsl(var(--border))]">
      {children}
    </span>
  );
}

function CardButtons({ children }: CardButtonsProps) {
  return (
    <div className="flex justify-between mt-4 pt-1 border-t border-zinc-300">
      {children}
    </div>
  );
}

function CardLiveButton({ children, live }: CardLiveButton) {
  return (
    <Link
      href={live}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--secondary-foreground))] p-2 rounded-md"
    >
      {children}
    </Link>
  );
}

function CardURLButton({ children, github }: CardURLButtonProps) {
  return (
    <Link
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--secondary-foreground))] p-2 rounded-md"
    >
      {children}
    </Link>
  );
}

Card.Image = CardImage;
Card.Content = CardContent;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Badges = CardBadges;
Card.Badge = CardBadge;
Card.Buttons = CardButtons;
Card.LiveButton = CardLiveButton;
Card.URLButton = CardURLButton;
