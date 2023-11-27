import './index.css'
import SobreMi from "./Sobre-mi"
import ProjectContainer from "./project-container"

const Inicio= () =>{
 return <>
  <main>
   <div className="hero-img">
   </div>
   <div className="hero-title">
    <h1 ><span>👋</span> Hola a todos, y bienvenidos a mi sitio web <span>😃</span></h1>
   </div>
  </main>
  <SobreMi/>
  <ProjectContainer/>
 </>
}

export default Inicio