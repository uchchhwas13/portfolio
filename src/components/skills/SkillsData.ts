type Skill = {
  name: string;
  level: number;
  category: string;
};

export const skills: Skill[] = [
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

export const categories = ['All', 'Frontend', 'Backend', 'Tools'];
