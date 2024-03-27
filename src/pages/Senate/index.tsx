import { Disclaimer } from '../../components/Adverticement/Disclaimer';
import FilterMenu from '../../components/FIlterMenu';
import { FilterByParty } from '../../components/Filters/ByParty/FilterByParty';
import { SortByAdvisors } from '../../components/Filters/SortByAdvisors/SortByAdvisors';
import { Navbar } from '../../components/Navbar';
import { Senators } from '../../components/Senators/Senators';
import { useFiltersContext } from '../../context/useFiltersContext';
import { PageTemplate } from '../Template';

export const Senate = () => {
  const { filters, setFilters, orderByAdvisors, setOrderByAdvisors } =
    useFiltersContext();

  return (
    <PageTemplate>
      <header className="pl-2 pr-2 tablet:pl-4 tablet:pr-4 laptop:pl-8 laptop:pr-8 desktop:pl-16 desktop:pr-16 mb-8 flex flex-col items-center justify-center gap-4 pt-8">
        <Navbar>
          <FilterMenu>
            <SortByAdvisors
              value={orderByAdvisors}
              onChange={setOrderByAdvisors}
            />

            <span className="text-center text-[0.95em]">
              Filtrar por partidos
            </span>
            <FilterByParty filters={filters} onChange={setFilters} />
          </FilterMenu>
        </Navbar>
        {/* <div className="w-full mt-8">
          <BackButton />
        </div> */}
      </header>
      <main className="pl-2 pr-2 tablet:pl-4 tablet:pr-2 tablet:mr-4 laptop:pl-8 laptop:pr-2 laptop:mr-8 desktop:pl-16 desktop:pr-4 desktop:mr-16 max-h-[100vh] overflow-y-scroll pb-[200px]">
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-2">
          <Senators filters={filters} sortByAdvisors={orderByAdvisors} />
        </div>
      </main>
      <Disclaimer />
    </PageTemplate>
  );
};
