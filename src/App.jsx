import {  BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Inicio from "."
import Peliculas from './proyecto-peliculas'
import Paisita from './proyecto-montañerito-paisa'
import Pasteles from "./proyecto-pasteles"
import Header from "./Header"
import Footer from "./Footer"

const App= () => {
  
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="peliculas" element={<Peliculas />} />
          <Route path="pasteles" element={<Pasteles />} />
          <Route path="montañerito-paisa" element={<Paisita />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
