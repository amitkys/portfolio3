"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Github, ExternalLink, FileText, X } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description?: string;
    image: string;
    liveUrl: string;
    githubUrl: string;
    docsUrl?: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsImageModalOpen(false);
  };

  return (
    <Card className="group relative overflow-hidden transition-all duration-500 border border-border/50 hover:border-primary/20 bg-card/30 h-full hover:bg-card/50">
      {/* Background gradient that shows on hover */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--tw-gradient-stops))] from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/2 group-hover:to-primary/0 transition-all duration-500 opacity-0 group-hover:opacity-100 pointer-events-none" />

      {/* Image Section with Modal */}
      <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
        <DialogTrigger asChild>
          <div className="relative aspect-video overflow-hidden bg-muted/50 cursor-zoom-in group/image">
            <Image
              fill
              alt={project.title}
              className="object-cover transition-all duration-500 group-hover:brightness-95 group-hover/image:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={project.image || "/placeholder.svg"}
            />

            {/* Diagonal gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Subtle top gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        </DialogTrigger>

        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none">
          <DialogTitle className="sr-only">
            <VisuallyHidden>{project.title} - Project Image</VisuallyHidden>
          </DialogTitle>
          {/* Close button */}
          <div className="absolute top-4 right-4 z-10">
            <Button
              className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              size="sm"
              variant="secondary"
              onClick={handleModalClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Zoomable Image Container */}
          <div className="relative w-full h-[95vh] flex items-center justify-center p-4">
            <Image
              fill
              alt={project.title}
              className="max-w-full max-h-full object-contain select-none"
              draggable={false}
              src={project.image || "/placeholder.svg"}
              style={{
                objectFit: "contain",
                padding: "1rem",
              }}
            />
          </div>

          {/* Image Title Overlay */}
          <div className="absolute bottom-4 left-4 right-4 z-10">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
              <h3 className="text-white font-semibold text-lg">
                {project.title}
              </h3>
              {project.description && (
                <p className="text-white/70 text-sm mt-1">
                  {project.description}
                </p>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* CardContent */}
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

        {/* Action Links */}
        <div className="flex items-center gap-1.5">
          <a
            className="flex items-center gap-1 py-1 px-1.5 text-xs font-medium text-primary bg-primary/10 hover:bg-primary/15 rounded-lg transition-colors duration-200"
            href={project.liveUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <ExternalLink className="h-3 w-3" />
            Demo
          </a>
          <a
            className="flex items-center gap-1 py-1 px-1.5 text-xs font-medium text-primary bg-primary/10 hover:bg-primary/15 rounded-lg transition-colors duration-200"
            href={project.githubUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github className="h-3 w-3" />
            GitHub
          </a>
          {project.docsUrl && (
            <a
              className="flex items-center gap-1 py-1 px-1.5 text-xs font-medium text-primary bg-primary/10 hover:bg-primary/15 rounded-lg transition-colors duration-200"
              href={project.docsUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FileText className="h-3 w-3" />
              Docs
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
