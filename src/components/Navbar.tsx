import { useEffect, useState } from 'react';
import { cn } from '../lib/utils';
import { X, Menu } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed w-full z-40 transition-all duration-300',
        isScrolled ? 'py-3 bg-background/80 backdrop-blur-md shadow-xs' : 'py-5'
      )}
    >
      <div className="container flex items-center justify-between">
        <NavTitle />
        <DesktopNav />
        <MobileNavToggle
          isMenuOpen={isMenuOpen}
          toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        />
        <MobileNavMenu
          isOpen={isMenuOpen}
          onItemClick={() => setIsMenuOpen(false)}
        />
      </div>
    </nav>
  );
};

const NavTitle = () => (
  <a className="text-xl font-bold text-primary flex items-center" href="#hero">
    <span className="relative z-10">
      <span className="text-glow text-foreground"> Uchchhwas Roy</span>{' '}
      Portfolio
    </span>
  </a>
);

const DesktopNav = () => (
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

type MobileNavToggleProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

const MobileNavToggle = ({ isMenuOpen, toggleMenu }: MobileNavToggleProps) => (
  <button
    onClick={toggleMenu}
    className="md:hidden p-2 text-foreground z-50"
    aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
  >
    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
);

type MobileNavMenuProps = {
  isOpen: boolean;
  onItemClick: () => void;
};

const MobileNavMenu = ({ isOpen, onItemClick }: MobileNavMenuProps) => (
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
