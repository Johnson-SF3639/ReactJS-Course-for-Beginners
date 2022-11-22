import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/home'
import User from './component/user'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Home/>}>
            <Route path='/about' element={<Home/>} />
            <Route path='/user' element={<User/>} />
            <Route path='/contact' element={<Home/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
