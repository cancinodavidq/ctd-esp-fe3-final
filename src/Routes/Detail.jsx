import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { ThemeContext } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const { state, toggleDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!user) {
    return <div>no se encuentra...</div>;
  }

  return (
    <div>
      <Navbar/>
      <div className={state.isDarkMode ? 'dark' : 'light'}>
      <div className='card-grid'>  
      <div className={`card ${state.isDarkMode ? 'dark' : 'light'}`}>
      <h2>{user.name}</h2>
      <img src="/images/doctor.jpg" alt='Doctor' />
      <p>{user.username}</p>
      <p>{user.email}</p>
    
      </div>
      </div>
      
      </div>
      <Footer/>
    </div>
    
  );
}

export default Detail;