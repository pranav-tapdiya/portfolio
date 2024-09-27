import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/flixel.jpg"
          title="Flixel App | Flutter, Firebase"
          description="Cross-platform app connecting creative professionals with clients, featuring portfolio management and secure, efficient user onboarding."
          id="modern-nextjs-portfolio"
        />
        <ProjectCard
          src="/eznptel.jpg"
          title="EzNPTEL | React, Node, Mongo"
          description="Web platform offering NPTEL course flash quizzes, solutions, and training, designed for interactive learning and scalability."
          id="modern-nextjs-portfolio"
        />
        <ProjectCard
          src="/flixel.jpg"
          title="Flixel App | Flutter, Firebase"
          description="Cross-platform app connecting creative professionals with clients, featuring portfolio management and secure, efficient user onboarding."
          id="modern-nextjs-portfolio"
        />
      </div>
    </div>
  );
};

export default Projects;