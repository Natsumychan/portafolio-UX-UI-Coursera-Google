import "./Sobre-mi.css"

const SobreMi = () =>{
 return <>
  <section className="sobre-mi">
   <h2>Sobre mi...</h2>
   <p>
    Soy estudiante Frontend developer en Platzi. Me quiero enfocar en la industria de la tecnología y el desarrollo web, porque me parece increíble como simples líneas de código pueden crear página o aplicaciones que sean de interés a las personas.
   </p>
   <br/>
   <p>
     Durante mis estudios he podido empezar mi carrera como frontend developer desde cero, aprendiendo las bases de la programación y sobre herramientas básicas como HTML, CSS y JavaScript para empezar a construir mi portafolio. También he complementado mi formación con el curso de UX y UI de Coursera y Gogle usando figma, para comprender mejor la perspectiva del diseñador, y mejorar la comunicación con ellos. Continuo con mi formaciónpara empezar a abrirme paso y optener mi primer empleo, y tengo el enfoque y la motivación para continuar por este camino y nunca parar de aprender.
   </p>
   <button className="boton-cv"><a href="/CV-Diana_Castaño.pdf" download>Descargar CV</a></button>
  </section>
 </>
}

export default SobreMi