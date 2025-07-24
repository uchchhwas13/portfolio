import { useState } from 'react';
import { skills, categories } from './SkillsData';
import { SkillCard } from './SkillCard'
import { SkillFilter } from './SkillFilter';

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = skills.filter(
    (skill) => activeCategory === 'All' || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills </span>
        </h2>

        <SkillFilter
          categories={categories}
          active={activeCategory}
          onChange={setActiveCategory}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </section>
  );
};
