import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';
import { ThemeProvider } from './components/ThemeContext';
import Background from './components/Background';
import reportWebVitals from './reportWebVitals';
import "animate.css/animate.compat.css"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Background>
        <App />
      </Background>
    </ThemeProvider>
  </React.StrictMode>
);
reportWebVitals(ReactDOM.render);
