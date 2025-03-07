"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Github,
  ExternalLink,
  Code,
  Flame,
  Layers,
  Database,
  Server,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Map of technology names to their corresponding icons
const technologyIcons: Record<string, React.ReactNode> = {
  react: <Flame className="h-3 w-3 mr-1" />,
  nextjs: <Layers className="h-3 w-3 mr-1" />,
  tailwind: <Code className="h-3 w-3 mr-1" />,
  typescript: <Code className="h-3 w-3 mr-1" />,
  javascript: <Code className="h-3 w-3 mr-1" />,
  firebase: <Database className="h-3 w-3 mr-1" />,
  mongodb: <Database className="h-3 w-3 mr-1" />,
  nodejs: <Server className="h-3 w-3 mr-1" />,
  express: <Server className="h-3 w-3 mr-1" />,
  "framer-motion": <Flame className="h-3 w-3 mr-1" />,
  redux: <Layers className="h-3 w-3 mr-1" />,
  css: <Code className="h-3 w-3 mr-1" />,
  html: <Code className="h-3 w-3 mr-1" />,
  api: <Server className="h-3 w-3 mr-1" />,
};

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    image: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/projects/${project.id}`);
  };

  return (
    <div onClick={handleCardClick}>
      <Card
        className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-video">
          <Image
            fill
            alt={project.title}
            className="object-contain"
            src={project.image || "/placeholder.svg"}
          />
        </div>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">{project.title}</h2>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                className="flex items-center"
                variant="secondary"
              >
                {technologyIcons[tech]}
                {tech}
              </Badge>
            ))}
          </div>

          <div
            className={`flex gap-3 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
          >
            <a
              className="flex items-center text-sm text-primary hover:underline"
              href={project.liveUrl}
              rel="noopener noreferrer"
              target="_blank"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              Live Demo
            </a>
            <a
              className="flex items-center text-sm text-primary hover:underline"
              href={project.githubUrl}
              rel="noopener noreferrer"
              target="_blank"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="h-4 w-4 mr-1" />
              GitHub
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
