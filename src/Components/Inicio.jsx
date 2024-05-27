
const Inicio = () => {
  return (
    <section id="inicio" className="home" >
      <div className="content">
        <div className="name">
          HOLA! SOY <span>NICOLÁS DUARTE</span>
        </div>

        <div className="front">

          PROGRAMADOR WEB FRONT END
        </div>
        <br />
        <br />
        <div className="des">
          Tras el tiempo que me tomé de seguir mejorando para adquirir mas
          experiencia, he tomado la decisión de reorientar mi carrera
          profesional con el ánimo de continuar aprendiendo y, también, aportar
          toda mi experiencia adquirida.
          <br /> <br />
          Considero que el cambio es un signo de capacidad de superación y, por
          ello, creo que siempre sería capaz de aportar valor en la empresa y/o
          trabajo en el que me encuentre. Mi objetivo principal es desarrollarme
          profesionalmente y evolucionar en mi estudio, de modo que busco
          oportunidades que me permitan hacerlo, al tiempo que trataré de
          alinearme completamente con los objetivos de la empresa.
        </div>
        <a className="cv" href="">Por acá dejo mi cv</a>
      </div>

      <div className="avatar">
        <div className="card">
          <img src="fotoNico.jpg" alt="FOTO NICO" />
        </div>

        <div className="data">
          <ul>
            <li>
              <h3>Nombre Completo:</h3>
              <p>Nicolás Iñaki Duarte</p>
            </li>
            <li>
              <h3>Edad:</h3>
              <p>21 Años</p>
            </li>
            <li>
              <h3>Nacionalidad:</h3>
              <p>Argentina</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
