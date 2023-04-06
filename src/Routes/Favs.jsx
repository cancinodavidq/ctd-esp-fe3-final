import React, { useContext } from "react";
import { DentistContext } from "../Components/utils/global.context";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer';
import { ThemeContext } from '../Components/utils/global.context';

const Favs = () => {
  const { dentists } = useContext(DentistContext);
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const { state, toggleDarkMode } = useContext(ThemeContext);

  return (

    <div className={state.isDarkMode ? 'dark' : 'light'}>
      <Navbar/>
      <h2>Favorite Dentists</h2>
      <div className="card-grid">
      {favorites.map((dentist, index) => (
      <div key={index} className={`card ${state.isDarkMode ? 'dark' : 'light'}`}>
        <img src="./images/doctor.jpg" alt='Doctor' />
        <h2>{dentist.name}</h2>
        <p>{dentist.email}</p>
        </div> 
    ))}
      </div>
    <Footer/>
    </div>
  );
};

export default Favs;