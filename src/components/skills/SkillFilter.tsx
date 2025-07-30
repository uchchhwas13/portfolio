import { cn } from '../../lib/utils';

type SkillFilterProps = {
  categories: string[];
  active: string;
  onChange: (value: string) => void;
};

type FilterButtonProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

const FilterButton = ({ label, isActive, onClick }: FilterButtonProps) => (
  <button
    onClick={onClick}
    className={cn(
      'px-5 py-2 rounded-full transition-colors duration-300',
      isActive
        ? 'bg-primary text-primary-foreground'
        : 'text-foreground hover:bg-blue-400'
    )}
  >
    {label}
  </button>
);

export const SkillFilter = ({ categories, active, onChange }: SkillFilterProps) => {
  const renderButtons = () =>
    categories.map((category) => (
      <FilterButton
        key={category}
        label={category}
        isActive={category === active}
        onClick={() => onChange(category)}
      />
    ));

  return <div className="flex flex-wrap justify-center gap-4 mb-12">{renderButtons()}</div>;
};
