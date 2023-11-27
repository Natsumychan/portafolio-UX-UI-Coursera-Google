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
    <li>Inicio</li>
    <li>proyectos</li>
    <li>Sobre mi</li>
   </ul>
  </nav>
 </header>
 </>
}

export default Header