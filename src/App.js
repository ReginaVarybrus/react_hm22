import './App.css';

import HomePage from './components/HomePage';
import ThemeProvider from './providers/ChaningTheme';
import HttpHerosProvider from './providers/HttpProvider';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <HttpHerosProvider>
            <HomePage />
        </HttpHerosProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
