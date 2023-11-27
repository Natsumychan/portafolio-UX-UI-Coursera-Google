import { Link } from "react-router-dom"
import './Header.css'

const Header= () =>{
 return <>
 <header className="header">
  <div className="logo-container">
   <img src="/disenador-grafico.png" alt="logo diseñador" />
   <p>Diana Castaño</p>
  </div>
  <nav>
   <ul className='nav-list'>
    <li><Link to="/">Inicio</Link></li>
    <li><Link to="proyectos">Proyectos</Link></li>
    <li><Link to="sobre-mi">Sobre mi</Link></li>
   </ul>
  </nav>
 </header>
 </>
}

export default Header