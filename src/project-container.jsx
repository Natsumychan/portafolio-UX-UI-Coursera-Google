import { Link } from "react-router-dom"
const ProjectContainer= () =>{
 return <>
  <h2>Proyectos</h2>
  <div className="card-container">
   <Link to="peliculas">Haz click para ver el proyecto de peliculas</Link>
   <Link to="pasteles">Haz click para ver el proyecto de peliculas</Link>
   <Link to="montañerito-paisa">Haz click para ver el proyecto de peliculas</Link>
  </div>
 </>
}

export default ProjectContainer