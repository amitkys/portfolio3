"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillsData = {
  Tech: [
    "Next.js",
    "TypeScript",
    "Node.js",
    "Prisma/Drizzle",
    "better-auth/nextAuth",
  ],
  Tools: [
    "Linux",
    "bash",
    "Git/GitHub",
    "Docker",
    "CI/CD",
    "AWS/GCP",
    "Postman",
  ],
};

export default function SkillShowcase() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl md:text-5xl tracking-tight font-extrabold">
          S<span className="underline">kills</span>
          <span className="ml-2 text-4xl">🛠️</span>
        </h1>
        <p className="text-muted-foreground">
          Pick these, or left behind{" "}
          <a className="underline hidden" href="/doc.amitkys.in/docs/skills">
            why?
          </a>
        </p>
      </div>

      <div className="grid gap-6">
        {Object.entries(skillsData).map(([category, skills]) => (
          <Card key={category}>
            <CardHeader>
              <CardTitle className="text-lg">{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
        <p className="text-center text-muted-foreground font-semibold">
          And flexible enough to learn anything when needed
        </p>
      </div>
    </div>
  );
}
