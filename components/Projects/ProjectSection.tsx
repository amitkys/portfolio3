"use client";

import { useEffect, useRef, useState } from "react";

import ProjectCard from "@/components/cards/Project-Cards";
import { Card } from "@/components/ui/card";

export default function ProjectSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Sample project data
  const projects = [
    {
      id: "1",
      title: "AI-Integrated Quiz/Test app",
      description:
        "Smart quiz platform powered by AI with adaptive testing and real-time feedback.",
      image: "/project-img/sabnam-project.png",
      liveUrl: "https://sabnam.vercel.app",
      githubUrl: "https://github.com/amitkys/sabnam_ai",
    },
    {
      id: "2",
      title: "Chat App",
      description:
        "Real-time messaging application with modern UI and smooth animations.",
      image: "/project-img/chat-project.png",
      liveUrl: "https://chat-kys.netlify.app",
      githubUrl: "https://github.com/amitkys/chat",
    },
    {
      id: "3",
      title: "Patho Lab Management System",
      description:
        "Complete laboratory management solution with patient tracking and report generation.",
      image: "/project-img/lab-project.png",
      liveUrl: "https://www.ak-diagnostic.in/",
      githubUrl: "https://github.com/amitkys/plab-report",
    },
    {
      id: "4",
      title: "Wanderlust",
      description:
        "Travel discovery platform to explore and book amazing destinations worldwide.",
      image: "/project-img/wanderlust-project.png",
      liveUrl: "https://wanderlust-5fm7.onrender.com/listings",
      githubUrl: "https://github.com/amitkys/wanderlust",
    },
    {
      id: "5",
      title: "QuickPoll",
      description:
        "Fast and intuitive polling application for gathering opinions and feedback.",
      image: "/project-img/quickPoll-project.png",
      liveUrl: "https://quick-poll-beta.vercel.app/create",
      githubUrl: "https://github.com/amitkys/quick-poll",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-2 md:px-4 bg-gradient-to-br from-background via-background to-muted/10"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary/60" />
            <span className="text-sm font-medium text-muted-foreground">
              Featured Work
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
            Projects I'm Proud Of
          </h1>
        </div>

        {/* Projects Container Card */}
        <Card
          className={`p-4 md:p-6 lg:p-8 bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-700 ease-out delay-200 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8 shadow-lg"
            }`}
        >
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`transition-all duration-500 ease-out ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                  }`}
                style={{
                  transitionDelay: `${300 + index * 100}ms`,
                }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </Card>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-700 ease-out delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-border" />
            <span className="text-sm">More projects coming soon</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-border" />
          </div>
        </div>
      </div>
    </section>
  );
}
