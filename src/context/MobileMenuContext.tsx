import { createContext, useState } from 'react';
import { MobileMenuContextType, MobileMenuProviderProps } from './types';

export const MobileMenuContext = createContext<
  MobileMenuContextType | undefined
>(undefined);

export const MobileMenuProvider: React.FC<MobileMenuProviderProps> = ({
  children,
}) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <MobileMenuContext.Provider value={{ menuOpen, setMenuOpen, closeMenu }}>
      {children}
    </MobileMenuContext.Provider>
  );
};
