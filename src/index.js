import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import { Content } from './components/content';
import { LanguageSelection } from './components/languageSelection';
import { ThemeContainer } from './components/themeContainer';
import { AppProvider } from './context/appProvider.js';

function App() {
  return (
    <div className="App">
      <div className="light">
        <AppProvider>
          <LanguageSelection />
          <ThemeContainer />
          <Content />
        </AppProvider>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

