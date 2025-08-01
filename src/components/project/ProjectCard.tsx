import { ExternalLink } from 'lucide-react';
import { Project } from './data/projects';
import { ProjectImage } from './ProjectImage';
import { ProjectTags } from './ProjectTags';

export const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
    <ProjectImage src={project.image} alt={project.title} />
    <div className="p-6">
      <ProjectTags tags={project.tags} />
      <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
      <p className="text-sm mb-4">{project.description}</p>
      <div className="flex justify-between items-center">
        <a
          href={project.demoUrl}
          target="_blank"
          className="text-foreground/80 hover:text-primary transition-colors duration-300"
          rel="noopener noreferrer"
        >
          <ExternalLink size={20} />
        </a>
      </div>
    </div>
  </div>
);
