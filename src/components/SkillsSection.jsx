import { useState } from 'react';
import { cn } from '../lib/utils';

const skills = [
  { name: 'HTML/CSS', level: 60, category: 'Frontend' },
  { name: 'JavaScript', level: 60, category: 'Frontend' },
  { name: 'React', level: 60, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 60, category: 'Frontend' },
  { name: 'Swift', level: 80, category: 'Frontend' },
  { name: 'SwiftUI', level: 80, category: 'Frontend' },

  { name: 'Node.js', level: 60, category: 'Backend' },
  { name: 'Express', level: 60, category: 'Backend' },
  { name: 'MongoDB', level: 60, category: 'Backend' },

  { name: 'Github', level: 60, category: 'Tools' },
  { name: 'XcodeCloud', level: 60, category: 'Tools' },
  { name: 'Figma', level: 40, category: 'Tools' },
];

const categories = ['All', 'Frontend', 'Backend', 'Tools'];

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
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-5 py-2 rounded-full transition-colors duration-300',
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-blue-400'
              )}
            >
              {category}{' '}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4 ">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_easeout]"
                  style={{ width: skill.level + '%' }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
