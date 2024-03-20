import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { FiltersProvider } from './context/FilterSenatorsContext';
import { MediaQueryProvider } from './context/MediaQueryContext';
import { useMediaQuery } from 'react-responsive';
import { Main } from './pages/main';
import { useMemo } from 'react';
import './App.css';
import { MobileMenuProvider } from './context/FilterMenuContext';

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function App() {
  const prefersDarkMode = useMediaQuery({
    query: '(prefers-color-scheme: dark)',
  });

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FiltersProvider>
        <MediaQueryProvider>
          <MobileMenuProvider>
            <Main />
          </MobileMenuProvider>
        </MediaQueryProvider>
      </FiltersProvider>
    </ThemeProvider>
  );
}

export default App;
