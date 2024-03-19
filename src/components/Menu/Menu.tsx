import { Button } from '@mui/material';
import { FilterByParty } from '../Filters/ByParty/FilterByParty';
import { SortByAdvisors } from '../Filters/SortByAdvisors/SortByAdvisors';
import { useMobileMenu } from '../../context/useMobileMenu';

interface IMenuProps {
  filters: string[];
  setFilters: (newFormats: string[]) => void;
  sortByAdvisors: boolean;
  setSortByAdvisors: (value: boolean) => void;
  floating?: boolean;
}

export const Menu: React.FC<IMenuProps> = ({
  filters,
  setFilters,
  sortByAdvisors,
  setSortByAdvisors,
  floating = false,
}) => {
  // const desktopStyle =
  //   'min-w-[230px] rounded-md p-4 max-w-[600px] max-h-full box-border flex flex-col gap-4 items-center bg-navbar border border-[#555]';
  // const mobileStyle =
  //   'max-w-[500px] absolute rounded-md p-4 box-border flex flex-col gap-4 justify-center items-center bg-navbar border border-[#555] margin-[0_auto] inset-0';

  const { closeMenu } = useMobileMenu();

  return (
    <>
      {floating ? (
        <nav className="absolute flex justify-center items-center inset-0 p-10 z-[999] backdrop:blur-3xl bg-[#0a0505b7]">
          <div className="flex flex-col min-w-[350px] rounded-md bg-[#151515] p-4 gap-4 border border-[#555]">
            <FilterByParty
              filters={filters}
              onChange={(filter) => setFilters(filter)}
            />
            <SortByAdvisors
              value={sortByAdvisors}
              onChange={setSortByAdvisors}
            />
            <Button onClick={closeMenu}>Cerrar</Button>
          </div>
        </nav>
      ) : (
        <nav className="min-w-[230px] rounded-md p-4 max-w-[600px] max-h-full box-border flex flex-col gap-4 items-center bg-navbar border border-[#555]">
          <FilterByParty
            filters={filters}
            onChange={(filter) => setFilters(filter)}
          />
          <SortByAdvisors value={sortByAdvisors} onChange={setSortByAdvisors} />
        </nav>
      )}
    </>
  );
};
