
import Contact from './Routes/Contact';
import Home from './Routes/Home';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
import { ThemeProvider } from './Components/utils/global.context';


import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (

      <div className="App">
        <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/favs' element={<Favs/>}/>
            <Route path='/dentist/:id' element={<Detail/>}/>
          </Routes>
        </BrowserRouter>
        </ThemeProvider>
      </div>
   
  );
}

export default App;
