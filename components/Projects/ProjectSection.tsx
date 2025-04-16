import ProjectCard from "@/components/cards/Project-Cards";

export default function ProjectSection() {
  // Sample project data
  const projects = [
    {
      id: "1",
      title: "AI-Integrated Quiz/Test app",
      image: "/project-img/sabnam-project.png",
      technologies: ["react", "nextjs", "tailwind", "typescript"],
      liveUrl: "https://sabnam.vercel.app",
      githubUrl: "https://github.com/amitkys/sabnam_ai",
    },
    {
      id: "2",
      title: "Chat App",
      image: "/project-img/chat-project.png",
      technologies: ["react", "tailwind", "framer-motion"],
      liveUrl: "https://chat-kys.netlify.app",
      githubUrl: "https://github.com/amitkys/chat",
    },
    {
      id: "3",
      title: "Patho Lab Management System",
      image: "/project-img/lab-project.png",
      technologies: ["react", "redux", "firebase", "typescript"],
      liveUrl: "https://www.ak-diagnostic.in/",
      githubUrl: "https://github.com/amitkys/plab-report",
    },
    {
      id: "4",
      title: "Weather Dashboard",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["javascript", "css", "html", "api"],
      liveUrl: "https://example.com/project4",
      githubUrl: "https://github.com/username/project4",
    },
    {
      id: "5",
      title: "Social Media Clone",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["react", "nodejs", "mongodb", "express"],
      liveUrl: "https://example.com/project5",
      githubUrl: "https://github.com/username/project5",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center font-mono">
        <div className="  my-4 flex items-center justify-center ">
          <p className="font-borel">Projects that I Produ of..</p>
        </div>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
