import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'TicketCo Fly',
    description:
      'TicketCO Fly is one of the flagship products of TicketCO AS, designed to help you organise your events in a hassle-free and efficient way.',
    image: 'ticketCoFly.jpg',
    tags: ['SwiftUI', 'Swift', 'XcodeCloud'],
    demoUrl: 'https://apps.apple.com/us/app/ticketco-fly/id6448911011',
  },
  {
    id: 2,
    title: 'Samsung Galaxy Watch (Gear S)',
    description:
      'The Galaxy Watch application connects Gear S2, Gear S3, Gear Sport, Galaxy Watch, Galaxy Watch Active, Galaxy Watch Active2 and Galaxy Watch3 to your mobile device. It also manages and monitors watch features and applications installed through Galaxy App Store.',
    image: 'galaxyWatch.jpg',
    tags: ['Swift', 'Objective-C'],
    demoUrl:
      'https://apps.apple.com/us/app/samsung-galaxy-watch-gear-s/id1117310635',
  },
  {
    id: 3,
    title: 'Samsung Galaxy Fit',
    description:
      'The Samsung Galaxy Fit application connects Samsung Galaxy Fit2, Gear Fit2, Gear Fit2 pro and Galaxy Fit, Galaxy Fitⓔ to your mobile device. It also manages and monitors Samsung Fit features and applications installed through Gear Appstore.',
    image: 'galaxyFit.jpg',
    tags: ['Swift', 'Objective-C'],
    demoUrl:
      'https://apps.apple.com/us/app/samsung-galaxy-fit-gear-fit/id1117312500',
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-24 relative">
      <div className="conatainer mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {' '}
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          created with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    {' '}
                    <ExternalLink size={20}/>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='text-center mt-12'>
          <a className='cosmic-button w-fit flex items-center mx-auto gap-2' 
          href="https://github.com/uchchhwas13" target="_blank">
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
