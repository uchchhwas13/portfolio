import { Menu, X } from 'lucide-react';

type MobileNavToggleProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export const MobileNavToggle = ({
  isMenuOpen,
  toggleMenu,
}: MobileNavToggleProps) => (
  <button
    onClick={toggleMenu}
    className="md:hidden p-2 text-foreground z-50"
    aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
  >
    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
);
