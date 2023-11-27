import { Link } from "react-router-dom"
import "./project-container.css"

const ProjectContainer= () =>{
 return <section className="project-container">
  <h2>Proyectos</h2>
  <div className="card-container">
   <Link to="peliculas">
    <div  className="app-img app-1" >
    </div>
    <h3 className="app-title">Sitio web Depelicula</h3>
   </Link>
   <Link to="pasteles">
    <div  className="app-img app-2" >
    </div>
    <h3 className="app-title">App Antojos y más</h3>
   </Link>
   <Link to="montañerito-paisa">
    <div  className="app-img app-3" >
    </div>
    <h3 className="app-title">App El nido del paisita</h3>
   </Link>
  </div>
 </section>
}

export default ProjectContainer