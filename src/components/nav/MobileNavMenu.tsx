import { navItems } from './navItems';
import { cn } from '../../lib/utils';

type MobileNavMenuProps = {
  isOpen: boolean;
  onItemClick: () => void;
};

export const MobileNavMenu = ({ isOpen, onItemClick }: MobileNavMenuProps) => (
  <div
    className={cn(
      'fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center',
      'transition-all duration-300 md:hidden',
      isOpen
        ? 'opacity-100 pointer-events-auto'
        : 'opacity-0 pointer-events-none'
    )}
  >
    <div className="flex flex-col space-y-8 text-xl">
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-foreground/80 hover:text-primary transition-colors duration-300"
          onClick={onItemClick}
        >
          {item.name}
        </a>
      ))}
    </div>
  </div>
);
