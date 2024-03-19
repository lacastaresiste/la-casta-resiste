import { useTheme } from '@mui/material';
import { Disclaimer } from '../components/Adverticement/Disclaimer';
import { Header } from '../components/Header/Header';
import { Menu } from '../components/Menu/Menu';
import { Senators } from '../components/Senators/Senators';
import { useFilters } from '../context/useBasicTheme';
import { useMediaQueries } from '../context/useMediaQueries';
import { useMobileMenu } from '../context/useMobileMenu';

export const Main = () => {
  const { filters, setFilters, sortByAdvisors, setSortByAdvisors } =
    useFilters();

  const { isMobile } = useMediaQueries();

  const { menuOpen } = useMobileMenu();

  const { palette } = useTheme();
  const isLight = palette.mode === 'light' ? true : false;

  return (
    <main
      className={`flex flex-row ${isLight ? 'bg-background-light' : 'bg-background'} max-h-[100vh] overflow-hidden lg:p-4 gap-4`}
    >
      {isMobile ? (
        menuOpen ? (
          <Menu
            filters={filters}
            setFilters={setFilters}
            sortByAdvisors={sortByAdvisors}
            setSortByAdvisors={setSortByAdvisors}
            floating={true}
          />
        ) : null
      ) : (
        <Menu
          filters={filters}
          setFilters={setFilters}
          sortByAdvisors={sortByAdvisors}
          setSortByAdvisors={setSortByAdvisors}
        />
      )}
      <div className="flex flex-col min-h-[100vh]">
        <div className="flex flex-col w-full items-center justify-center">
          <Header />
        </div>
        <section
          id="senators"
          className={`overflow-y-auto mt-4 rounded-md ${isMobile ? 'hide-scrollbar' : 'thin-scrollbar'}`}
        >
          <div className="grid grid-cols-1 p-4 gap-4 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 min-[2500px]:grid-cols-5 lg:gap-8 md:pr-4">
            <Senators filters={filters} sortByAdvisors={sortByAdvisors} />
          </div>
        </section>
      </div>
      <Disclaimer />
    </main>
  );
};
