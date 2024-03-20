import { Button, useTheme } from '@mui/material';
import { FilterByParty } from '../Filters/ByParty/FilterByParty';
import { SortByAdvisors } from '../Filters/SortByAdvisors/SortByAdvisors';
import { useFilterMenuContext } from '../../context/useFilterMenuContext';
import { useFiltersContext } from '../../context/useFiltersContext';

export const FiltersMenu = () => {
  const { closeMenu } = useFilterMenuContext();
  const { palette } = useTheme();
  const isLight = palette.mode === 'light' ? true : false;
  const colorScheme = `${isLight ? 'bg-navbar-light' : 'bg-navbar'} p-4 ${isLight ? '' : 'border-b lg:border border-[#555]'}`;
  const borderColorScheme = `${isLight ? 'border-light-border' : 'border-dark-border'}`;

  const { filters, setFilters, orderByAdvisors, setOrderByAdvisors } =
    useFiltersContext();

  return (
    <nav
      className={`absolute flex justify-center items-center inset-0 p-10 z-[999] backdrop:blur-3xl ${isLight ? 'bg-[#888888DF]' : 'bg-[#000000DF]'}`}
    >
      <div
        className={`flex flex-col min-w-[350px] rounded-md ${colorScheme} p-4 gap-4 border ${borderColorScheme}`}
      >
        <FilterByParty
          filters={filters}
          onChange={(filter) => setFilters(filter)}
        />
        <SortByAdvisors value={orderByAdvisors} onChange={setOrderByAdvisors} />
        <Button onClick={closeMenu}>Cerrar</Button>
      </div>
    </nav>
  );
};
