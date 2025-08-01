import { LucideIcon } from 'lucide-react';

export type InfoCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const InfoCard = ({ icon: Icon, title, description }: InfoCardProps) => {
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
