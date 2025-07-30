import { useState } from 'react';
import { skills, categories } from './SkillsData';
import { SkillCard } from './SkillCard';
import { SkillFilter } from './SkillFilter';

type Skill = {
  name: string;
  level: number;
  category: string;
};

type SectionTitleProps = {
  title: string;
  highlight: string;
};

type SkillGridProps = {
  skills: Skill[];
};

const SectionTitle = ({ title, highlight }: SectionTitleProps) => (
  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
    {title} <span className="text-primary">{highlight}</span>
  </h2>
);

const SkillGrid = ({ skills }: SkillGridProps) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {skills.map((skill, index) => (
      <SkillCard key={index} name={skill.name} level={skill.level} />
    ))}
  </div>
);

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = skills.filter(
    (skill) => activeCategory === 'All' || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle title="My" highlight="Skills" />

        <SkillFilter
          categories={categories}
          active={activeCategory}
          onChange={setActiveCategory}
        />

        <SkillGrid skills={filteredSkills} />
      </div>
    </section>
  );
};
