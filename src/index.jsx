import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DentistProvider } from './Components/utils/global.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DentistProvider>
      <App/>
    </DentistProvider>
  </React.StrictMode>
);


