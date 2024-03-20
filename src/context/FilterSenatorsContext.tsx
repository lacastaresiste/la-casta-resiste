import { createContext, useState } from 'react';
import { FiltersContextType, FilterProviderProps } from './types';
import { AdvisorOrderType } from '../utils/filterProps';

export const FiltersContext = createContext<FiltersContextType | undefined>(
  undefined,
);

export const FiltersProvider: React.FC<FilterProviderProps> = ({
  children,
}) => {
  const [orderByAdvisors, setOrderByAdvisors] =
    useState<AdvisorOrderType>('ascending');
  const [filters, setFilters] = useState(() => ['none']);

  return (
    <FiltersContext.Provider
      value={{ filters, setFilters, orderByAdvisors, setOrderByAdvisors }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
