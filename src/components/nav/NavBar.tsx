import { useEffect, useState } from 'react';
import { cn } from '../../lib/utils';
import { NavTitle } from './NavTitle';
import { DesktopNav } from './DesktopNav';
import { MobileNavToggle } from './MobileNavToggle';
import { MobileNavMenu } from './MobileNavMenu';

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
