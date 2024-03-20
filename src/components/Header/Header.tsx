import {
  Button,
  ButtonProps,
  Typography,
  styled,
  useTheme,
} from '@mui/material';

import FilterListIcon from '@mui/icons-material/FilterList';
import { useFilterMenuContext } from '../../context/useFilterMenuContext';
import { useMediaQueriesContext } from '../../context/useMediaQueriesContext';

const FiltersButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText('#000'),
}));

export const Header = () => {
  const { setMenuOpen } = useFilterMenuContext();
  const { isMobile } = useMediaQueriesContext();

  const { palette } = useTheme();
  const isLight = palette.mode === 'light' ? true : false;
  const colorScheme = `${isLight ? 'bg-navbar-light' : 'bg-navbar'} p-4 ${isLight ? 'border-light-border' : 'border-dark-border'}`;

  return (
    <header
      className={`w-full shadow-md grid grid-rows-1 grid-cols-[60px_auto_60px] lg:flex 
      md:flex-row lg:justify-center md:gap-8 lg:rounded-md 
      md:items-center ${colorScheme} border-b lg:border`}
    >
      <div className="w-[40px]">
        <img src="/inicio/logo.svg" alt="" />
      </div>
      <div className="flex flex-col justify-center items-center col-start-2 col-end-3 row-start-1 row-end-1 pt-2">
        <h1 className="text-[1em] md:text-lg font-medium text-center">
          <Typography>LA CASTA SE RESISTE</Typography>
        </h1>
        <h2 className="text-[0.8em] text-primary">SENADO</h2>
      </div>
      <div className="col-start-3 col-end-4 col row-start-1 row-end-1 pt-2 lg:pt-0">
        <FiltersButton
          onClick={() => {
            setMenuOpen(true);
          }}
          className="flex flex-row gap-2"
        >
          {isMobile ? null : <span>Filtros</span>}
          <FilterListIcon className={isLight ? 'text-black' : 'text-white'} />
        </FiltersButton>
      </div>
    </header>
  );
};
