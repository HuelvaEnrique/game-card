import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import Play from './views/Play';
import Login from './views/Login';
import RutasPrivadas from './Layout/RutasPrivadas';

import { GlobalStyles } from './styles/globalStyles'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<RutasPrivadas />} >
          <Route index element={<Home />} />
          <Route path='play' element= { <Play /> } />
        </Route>
        <Route path='/login' element={ <Login /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
