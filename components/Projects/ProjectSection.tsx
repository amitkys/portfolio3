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
      title: "Wanderlust",
      image: "/project-img/wanderlust-project.png",
      technologies: ["javascript", "css", "html", "api"],
      liveUrl: "https://wanderlust-5fm7.onrender.com/listings",
      githubUrl: "https://github.com/amitkys/wanderlust",
    },
    {
      id: "5",
      title: "",
      image: "/project-img/quickPoll-project.png",
      technologies: ["react", "nodejs", "mongodb", "express"],
      liveUrl: "https://quick-poll-beta.vercel.app/create",
      githubUrl: "https://github.com/amitkys/quick-poll",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center font-mono">
        <div className="  my-4 flex items-center justify-center ">
          <p className="font-borel">Projects that I Proud of..</p>
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
