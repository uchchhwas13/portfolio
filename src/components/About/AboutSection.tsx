import { Briefcase, Code, Smartphone } from 'lucide-react';
import { Intro } from './Intro';
import { Actions } from './Actions';
import { InfoCard, InfoCardProps } from './InfoCard';

const infoCards: InfoCardProps[] = [
  {
    icon: Code,
    title: 'Web Development',
    description:
      'Creating responsive websites and web applications with modern frameworks.',
  },
  {
    icon: Smartphone,
    title: 'iOS Mobile Development',
    description:
      'Creating smooth, responsive apps tailored for Apple’s ecosystem and user expectations.',
  },
  {
    icon: Briefcase,
    title: 'Project Management',
    description:
      'Leading projects from conception to completion with agile methodologies.',
  },
];

export const AboutSection = () => (
  <section id="about" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        About <span className="text-primary">Me</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <Intro />
          <Actions />
        </div>

        <div className="grid grid-cols-1 gap-6">
          {infoCards.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  </section>
);
