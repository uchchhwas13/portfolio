import { cn } from '../../lib/utils';

type SkillFilterProps = {
  categories: string[];
  active: string,
  onChange: (value: string) => void
}

export const SkillFilter = ({ categories, active, onChange }: SkillFilterProps) => (
  <div className="flex flex-wrap justify-center gap-4 mb-12">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => onChange(category)}
        className={cn(
          'px-5 py-2 rounded-full transition-colors duration-300',
          active === category
            ? 'bg-primary text-primary-foreground'
            : 'text-foreground hover:bg-blue-400'
        )}
      >
        {category}
      </button>
    ))}
  </div>
);
