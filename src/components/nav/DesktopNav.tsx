import { navItems } from './navItems';

export const DesktopNav = () => (
  <div className="hidden md:flex space-x-8">
    {navItems.map((item) => (
      <a
        key={item.name}
        href={item.href}
        className="text-foreground/80 hover:text-primary transition-colors duration-300"
      >
        {item.name}
      </a>
    ))}
  </div>
);
