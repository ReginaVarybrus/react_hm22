import './App.css';

import HomePage from './components/homePage';
import ThemeProvider from './providers/chaningTheme';
import HttpHerosProvider from './providers/httpProvider';
import PaginationProvider from './providers/paginationProvider';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <HttpHerosProvider>
          <PaginationProvider>
            <HomePage />
          </PaginationProvider>
        </HttpHerosProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
