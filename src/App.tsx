import { FiltersProvider } from './context/FilterSenatorsContext';
import { MediaQueryProvider } from './context/MediaQueryContext';
// import { Home } from './pages/Home';
import { MobileMenuProvider } from './context/FilterMenuContext';
import './App.css';
import { Senate } from './pages/Senate';

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function App() {
  return (
    <FiltersProvider>
      <MediaQueryProvider>
        <MobileMenuProvider>
          <Senate />
        </MobileMenuProvider>
      </MediaQueryProvider>
    </FiltersProvider>
  );
}

export default App;
