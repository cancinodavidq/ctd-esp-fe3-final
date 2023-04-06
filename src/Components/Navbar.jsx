import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from './utils/global.context';



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, toggleDarkMode } = useContext(ThemeContext);


  return (
    <nav className={state.isDarkMode ? 'dark' : 'light'}>
      <img src="/DH.ico" alt='DH-logo' />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
        <li>
          <Link to="/favs">Favoritos</Link>
        </li>
    
      </ul>
      <button onClick={toggleDarkMode}>
            {state.isDarkMode ? '🌞' : '🌙'}
          </button>
    </nav>
  );
};

export default Navbar;