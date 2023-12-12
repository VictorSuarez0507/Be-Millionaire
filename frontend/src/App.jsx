import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import NivelUno from './components/gameLevels/NivelUno'
import NivelDos from './components/gameLevels/NivelDos'
import NivelTres from './components/gameLevels/NivelTres'


function App() {
  window.onload = function (){
    window.location.hash="no-back-button";
    window.location.hash="Again-No-back-button" //chrome bloquear el boton para retroceder

    window.onhashchange=function(){
        window.location.hash = "";
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/nivel-1' element={<NivelUno/>}/>
        <Route path='/nivel-2' element={<NivelDos/>}/>
        <Route path='/nivel-3' element={<NivelTres/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
