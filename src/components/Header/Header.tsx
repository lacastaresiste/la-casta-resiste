// import ReportIcon from '@mui/icons-material/Report';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import { Menu } from '@mui/material';
import { Button, ButtonProps, styled } from '@mui/material';

import FilterListIcon from '@mui/icons-material/FilterList';
import { useMediaQueries } from '../../context/useMediaQueries';
import { useMobileMenu } from '../../context/useMobileMenu';

const FiltersButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText('#000'),
}));

export const Header = () => {
  const { isMobile } = useMediaQueries();

  const { setMenuOpen } = useMobileMenu();

  return (
    <header className="w-full shadow-md grid grid-rows-1 grid-cols-[60px_auto_60px] lg:flex md:flex-row lg:justify-center md:gap-8 lg:rounded-md md:items-center bg-navbar p-4 border-b lg:border border-[#555]">
      <div className="w-[40px]">
        <img src="/inicio/logo.svg" alt="" />
      </div>
      <div className="flex flex-col justify-center items-center col-start-2 col-end-3 row-start-1 row-end-1 pt-2">
        <h1 className="text-[1em] md:text-lg text-title font-medium text-center">
          LA CASTA SE RESISTE
        </h1>
        <h2 className="text-[0.8em] text-primary">SENADO</h2>
      </div>
      <div className="col-start-3 col-end-4 col row-start-1 row-end-1 pt-2 lg:pt-0">
        {isMobile ? (
          <FiltersButton
            onClick={() => {
              setMenuOpen(true);
            }}
          >
            <FilterListIcon />
          </FiltersButton>
        ) : null}
      </div>
    </header>
  );
};
