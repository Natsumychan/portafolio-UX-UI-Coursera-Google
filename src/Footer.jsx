import "./Footer.css"

const Footer= () =>{
 return <footer className="footer">
  <div className="contact-info">
   <p>Contacto</p>
   <p>Teléfono: 50-123-678</p>
   <p>Correo: diana@gmail.com</p>
  </div>
  <div className="datos-pagina">
   <p>Esta página fue diseñada por:</p>
   <p>Diana Castaño</p>
   <p>2023</p>
  </div>
  <div className="media-container">
   <a href="https://github.com/Natsumychan" target="_blank" rel="noopener noreferrer"><img src="/github.png" alt="github logo" /></a>
   <a href="https://www.linkedin.com/in/diana-casta%C3%B1o-zapata-aba84284/" target="_blank" rel="noopener noreferrer"><img src="/linkedin.png" alt="Linkedin logo" /></a>
  </div>
 </footer>
}

export default Footer