import { Link } from "react-router-dom"

const Inicio= () =>{
 return <>
  <h1>Esta es la página de inicio</h1>
  <Link to="peliculas">Haz click para ver el proyecto de peliculas</Link>
  <Link to="pasteles">Haz click para ver el proyecto de peliculas</Link>
  <Link to="montañerito-paisa">Haz click para ver el proyecto de peliculas</Link>

 </>
}

export default Inicio