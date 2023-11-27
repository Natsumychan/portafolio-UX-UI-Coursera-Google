import { Link } from "react-router-dom"
import './index.css'

const Inicio= () =>{
 return <>
  <main>
   <div className="hero-img">
   </div>
   <div className="hero-title">
    <h1 ><span>👋</span> Hola a todos, y bienvenidos a mi sitio web <span>😃</span></h1>
   </div>
  </main>
 <button><a href="/CV-Diana_Castaño.pdf" download>Descargar CV</a></button>
  <Link to="peliculas">Haz click para ver el proyecto de peliculas</Link>
  <Link to="pasteles">Haz click para ver el proyecto de peliculas</Link>
  <Link to="montañerito-paisa">Haz click para ver el proyecto de peliculas</Link>

 </>
}

export default Inicio