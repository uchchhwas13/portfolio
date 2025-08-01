import { LucideIcon } from 'lucide-react';

type InfoCardProps = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

export const InfoCard: React.FC<InfoCardProps> = ({
  Icon,
  title,
  description,
}) => {
  return (
    <div className="gradient-border p-6 card-hover">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div className="text-left">
          <h4 className="font-semibold text-lg">{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
