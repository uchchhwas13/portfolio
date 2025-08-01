import { Project } from './data/projects';
import { ProjectCard } from './ProjectCard';

export const ProjectList = ({ projects }: { projects: Project[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>
);
