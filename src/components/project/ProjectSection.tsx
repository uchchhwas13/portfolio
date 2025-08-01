import { ArrowRight } from 'lucide-react';
import { projects } from './data/projects';
import { ProjectList } from './ProjectList';

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          created with attention to detail, performance, and user experience.
        </p>
        <ProjectList projects={projects} />
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/uchchhwas13"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
