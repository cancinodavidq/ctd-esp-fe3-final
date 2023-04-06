import { React, createContext, useEffect, useState, useReducer } from 'react';



export const DentistContext = createContext();

export const DentistProvider = ({ children }) => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setDentists(data);
        console.log(data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <DentistContext.Provider value={{ dentists }}>
      {children}
    </DentistContext.Provider>
  );
};

const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
};

const initialState = { isDarkMode: false };

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const toggleDarkMode = () => {
    dispatch({ type: 'TOGGLE_DARK_MODE' });
  };

  return (
    <ThemeContext.Provider value={{ state, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };