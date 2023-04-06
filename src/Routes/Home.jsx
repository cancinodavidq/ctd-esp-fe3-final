import React, { createContext, useState, useEffect, useContext } from 'react';
import Card from '../Components/Card'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import { ThemeContext } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Home = () => {

  const { state, toggleDarkMode } = useContext(ThemeContext);

  return (
    <main className={state.isDarkMode ? 'dark' : 'light'}>
      <Navbar/>
      <h1>Home</h1>
        <Card/>
      <Footer/>
    </main>
    
  )
}

export default Home