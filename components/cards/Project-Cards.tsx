"use client";

import type React from "react";

import Image from "next/image";
import { Github, ExternalLink, FileText } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description?: string;
    image: string;
    liveUrl: string;
    githubUrl: string;
    docsUrl: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all duration-500 border border-border/50 hover:border-primary/20 bg-card/30 h-full hover:bg-card/50">
      {/* Background gradient that shows on hover */}
      {/* ADD pointer-events-none here to allow clicks to pass through */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--tw-gradient-stops))] from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/2 group-hover:to-primary/0 transition-all duration-500 opacity-0 group-hover:opacity-100 pointer-events-none" />

      {/* Image Section */}
      <div className="relative aspect-video overflow-hidden bg-muted/50">
        <Image
          fill
          alt={project.title}
          className="object-cover transition-all duration-500 group-hover:brightness-95"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={project.image || "/placeholder.svg"}
        />

        {/* Diagonal gradient overlay */}
        {/* ADD pointer-events-none */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Subtle top gradient for text readability */}
        {/* ADD pointer-events-none */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* CardContent has pointer-events-auto, which is good */}
      <CardContent className="p-4 md:p-6 pointer-events-auto">
        {/* Title and Description */}
        <div className="space-y-3 mb-2 md:mb-4">
          <h3 className="text-base md:text-xl font-semibold transition-colors duration-200">
            {project.title}
          </h3>
          {project.description && (
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          )}
        </div>

        {/* Action Links - these are naturally clickable because they are <a> tags */}
        <div className="flex items-center gap-1.5">
          <a
            className="flex items-center gap-1 py-1 px-1.5 text-xs font-medium text-primary bg-primary/10 hover:bg-primary/15 rounded-lg "
            href={project.liveUrl}
            target="_blank"
          // You might want to add cursor-pointer here if the default isn't enough,
          // but for <a> tags, it's usually automatic.
          >
            <ExternalLink className="h-3 w-3" />
            Demo
          </a>

          <a
            className="flex items-center gap-1 py-1 px-1.5 text-xs font-medium text-primary bg-primary/10 hover:bg-primary/15 rounded-lg "
            href={project.githubUrl}
            target="_blank"
          // Same here, cursor-pointer might be redundant but harmless.
          >
            <Github className="h-3 w-3" />
            GitHub
          </a>

          <a
            className="flex items-center gap-1 py-1 px-1.5 text-xs font-medium text-primary bg-primary/10 hover:bg-primary/15 rounded-lg "
            href={project.docsUrl}
            target="_blank"
          // Same here, cursor-pointer might be redundant but harmless.
          >
            <FileText className="h-3 w-3" />
            Docs
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
