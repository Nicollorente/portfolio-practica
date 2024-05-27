import { useRef, useState } from "react";
import CustomHooks from "./CustomHooks";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contacto = () => {
  const [listaContactos] = useState([
    {
      nombre: "Télefono",
      icon: faPhone,
      value: "11-3492-0895",
    },
    {
      nombre: "Gmail",
      icon: faEnvelope,
      value: "nicollorente2002@gmail.com",
    },
    {
      nombre: "Linkedín",
      icon: faLinkedin,
      value: "https://www.linkedin.com/in/nicol%C3%A1s-duarte-46923b217/",
    },
  ]);
  const refTab = useRef();
  const divs = useRef([]);
  CustomHooks(refTab, divs);
  return (
    <section id="contacto" className="contacts" ref={refTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Mis Contactos
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        Estoy disponible para oportunidades laborales y colaboraciones. Si
        estás interesado en mi trabajo o tienes alguna consulta, no dudes en
        contactarme a través de los siguientes medios.
      </div>
      <div className="list" ref={(el) => el && divs.current.push(el)}>
        {listaContactos.map((value, key) => (
          <div key={key} className="item">
            <FontAwesomeIcon className="icons" icon={value.icon} />
            <h3>{value.nombre}</h3>
            <a href={value.value}>{value.value}</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contacto;
