import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AboutMe from './Pages/AboutMe'
import Hobbies from './Pages/Hobbies'
import LikesDislikes from './Pages/LikesDislikes'
import Games from './Pages/Games'
import Music from './Pages/Music'
import NoPage from './Pages/NoPage'
import Home from './Pages/Home'
import './App.css';

function App() {
  return (
    <div className="App ">
       <div className="place-content-center text-center">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/AboutMe' element={<AboutMe/>}/>
          <Route path='/Hobbies' element={<Hobbies/>}/>
          <Route path='/LikesDislikes' element={<LikesDislikes/>}/>
          <Route path='/Games' element={<Games/>}/>
          <Route path='/Music' element={<Music/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='*' element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
      
      </div>
    </div>
  );
}

export default App;
