import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const getProjectData = (id: string) => {
  const projects = {
    'modern-nextjs-portfolio': {
      title: 'Flixel App | Flutter, Firebase',
      description: 'A cross-platform mobile app connecting creative professionals with clients.',
      image: '/flixel.jpg',
      longDescription: 'Flixel is a mobile app that connects creative professionals with clients. It features portfolio management, secure user onboarding, and efficient communication tools. The app is built with Flutter and Firebase, ensuring a smooth and reliable user experience.',
      technologies: ['Flutter', 'Firebase', 'Dart'],
      liveDemo: 'https://example.com/demo',
      sourceCode: 'https://github.com/example/FlixelApp',
    },
    'interactive-website-cards': {
      title: 'Interactive Website Cards',
      description: 'A collection of interactive and animated website cards.',
      image: '/CardImage.png',
      longDescription: 'This project demonstrates advanced CSS and JavaScript techniques to create engaging and interactive website cards. Each card features unique hover effects and animations.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
      liveDemo: 'https://example.com/cards-demo',
      sourceCode: 'https://github.com/example/interactive-cards',
    },
    'space-themed-website': {
      title: 'Space Themed Website',
      description: 'An immersive space-themed website with 3D elements.',
      image: '/SpaceWebsite.png',
      longDescription: 'Explore the cosmos with this visually stunning space-themed website. It incorporates 3D graphics, parallax scrolling, and interactive elements to create an out-of-this-world user experience.',
      technologies: ['Three.js', 'WebGL', 'React', 'Styled Components'],
      liveDemo: 'https://example.com/space-demo',
      sourceCode: 'https://github.com/example/space-website',
    },
  };
  return projects[id as keyof typeof projects];
};

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProjectData(params.id);

  if (!project) {
    return <div className="text-white">Project not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/#projects" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Back to Projects</Link>
      <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#03001417] backdrop-blur-md">
        <Image 
          src={project.image}
          alt={project.title}
          width={1000}
          height={600}
          className="w-full object-cover h-[300px]"
        />
        <div className="relative p-6">
          <h1 className="text-4xl font-semibold text-white mb-4">{project.title}</h1>
          <p className="text-xl text-gray-300 mb-4">{project.description}</p>
          <h2 className="text-2xl font-semibold text-white mb-2">About this project</h2>
          <p className="text-gray-300 mb-4">{project.longDescription}</p>
          <h3 className="text-xl font-semibold text-white mb-2">Technologies used:</h3>
          <ul className="list-disc list-inside mb-4 text-gray-300">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <div className="flex space-x-4">
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">Live Demo</a>
            <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-300">Source Code</a>
          </div>
        </div>
      </div>
    </div>
  );
}