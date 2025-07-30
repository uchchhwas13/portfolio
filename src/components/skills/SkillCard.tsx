type SkillCardProps = {
  name: string;
  level: number;
};

type SkillCardHeaderProps = {
  name: string;
};

const SkillCardHeader = ({ name }: SkillCardHeaderProps) => (
  <div className="text-left mb-4">
    <h3 className="font-semibold text-lg">{name}</h3>
  </div>
);

type SkillProgressBarProps = {
  level: number;
};

const SkillProgressBar = ({ level }: SkillProgressBarProps) => (
  <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
    <div
      className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_easeout]"
      style={{ width: `${level}%` }}
    />
  </div>
);

const SkillLevelText = ({ level }: SkillProgressBarProps) => (
  <div className="text-right mt-1">
    <span className="text-sm">{level}%</span>
  </div>
);

export const SkillCard = ({ name, level }: SkillCardProps) => (
  <div className="bg-card p-6 rounded-lg shadow-xs card-hover">
    <SkillCardHeader name={name} />
    <SkillProgressBar level={level} />
    <SkillLevelText level={level} />
  </div>
);
