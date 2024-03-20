import { createContext, useState } from 'react';
import { FilterMenuContextType, FilterMenuProviderProps } from './types';

export const FilterMenuContext = createContext<
  FilterMenuContextType | undefined
>(undefined);

export const MobileMenuProvider: React.FC<FilterMenuProviderProps> = ({
  children,
}) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <FilterMenuContext.Provider value={{ menuOpen, setMenuOpen, closeMenu }}>
      {children}
    </FilterMenuContext.Provider>
  );
};
