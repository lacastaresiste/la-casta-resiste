import { createContext, useState } from 'react';
import { FiltersContextType, FilterProviderProps } from './types';

export const FiltersContext = createContext<FiltersContextType | undefined>(
  undefined,
);

export const FiltersProvider: React.FC<FilterProviderProps> = ({
  children,
}) => {
  const [sortByAdvisors, setSortByAdvisors] = useState(true);
  const [filters, setFilters] = useState(() => ['none']);

  return (
    <FiltersContext.Provider
      value={{ filters, setFilters, sortByAdvisors, setSortByAdvisors }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
