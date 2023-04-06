import React, {useContext} from 'react';
import { ThemeContext } from './utils/global.context';


const Footer = () => {
  
const { state, toggleDarkMode } = useContext(ThemeContext);

  return (
    <footer className={state.isDarkMode ? 'dark' : 'light'}>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
