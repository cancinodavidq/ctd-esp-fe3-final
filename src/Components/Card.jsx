import React, { useContext, useState} from 'react';
import { DentistContext } from '../Components/utils/global.context';
import '../index.css';
import { Link } from 'react-router-dom';
import { ThemeContext } from './utils/global.context';

const Card = ({ name, email, phone }) => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const { state, toggleDarkMode } = useContext(ThemeContext);
  const { dentists } = useContext(DentistContext);

  const [isFav, setIsFav] = useState(false);

  const addFav = (dentist)=>{

    const currentFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    const newFavs = [...currentFavs, dentist];

    const isDuplicate = currentFavs.some((fav) => (
      fav.name === dentist.name && fav.email === dentist.email && fav.phone === dentist.phone
    ));

    if (isDuplicate) {
      alert("This dentist is already in favorites!");
    } else {
      const newFavs = [...currentFavs, dentist];
      localStorage.setItem("favorites", JSON.stringify(newFavs));
      setIsFav(true);
    }}

  return (
    
    <div className='card-grid'>
    {dentists.map((dentist, index) => (
      <div key={index} className={`card ${state.isDarkMode ? 'dark' : 'light'}`}>
        <img src="./images/doctor.jpg" alt='Doctor' />
        <h2>{dentist.name}</h2>
        <p>{dentist.email}</p>
  
        <Link to={`/dentist/${dentist.id}`}>Ver detalles</Link>
        <button onClick={() => addFav(dentist)}>⭐</button>
      </div>
    ))}
  </div>
  );
};

export default Card;
