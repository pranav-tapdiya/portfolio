import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// This is a mock function to fetch project data
// In a real application, you would fetch this data from an API or database
const getProjectData = (id: string) => {
  const projects = {
    'modern-nextjs-portfolio': {
      title: 'Modern Next.js Portfolio',
      description: 'A modern portfolio website built with Next.js and Tailwind CSS.',
      image: '/NextWebsite.png',
      longDescription: 'This project showcases a sleek and responsive portfolio design using the latest web technologies. It features smooth animations, dynamic routing, and optimized performance.',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      liveDemo: 'https://example.com/demo',
      sourceCode: 'https://github.com/example/modern-nextjs-portfolio',
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
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/#projects" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Back to Projects</Link>
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <div className="mb-8">
        <Image src={project.image} alt={project.title} width={1000} height={600} className="rounded-lg shadow-lg" />
      </div>
      <p className="text-xl mb-4">{project.description}</p>
      <h2 className="text-2xl font-semibold mb-2">About this project</h2>
      <p className="mb-4">{project.longDescription}</p>
      <h3 className="text-xl font-semibold mb-2">Technologies used:</h3>
      <ul className="list-disc list-inside mb-4">
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <div className="flex space-x-4">
        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Live Demo</a>
        <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">Source Code</a>
      </div>
    </div>
  );
}