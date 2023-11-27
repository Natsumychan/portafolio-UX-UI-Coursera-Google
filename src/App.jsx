import {  BrowserRouter, Routes, Route} from "react-router-dom"
import Inicio from "."
import './App.css'
import Peliculas from './proyecto-peliculas'
import Paisita from './proyecto-montañerito-paisa'
import Pasteles from "./proyecto-pasteles"
import Header from "./Header"
import Footer from "./Footer"
import SobreMi from "./Sobre-mi"
import ProjectContainer from "./project-container"

const App= () => {
  
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/proyectos/peliculas" element={<Peliculas />} />
          <Route path="/proyectos/pasteles" element={<Pasteles />} />
          <Route path="/proyectos/montañerito-paisa" element={<Paisita />} />
          <Route path="sobre-mi" element={<SobreMi />} />
          <Route path="proyectos" element={<ProjectContainer />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
