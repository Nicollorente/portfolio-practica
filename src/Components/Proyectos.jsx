
import { useState } from "react";
import { useRef } from "react";
import CustomHooks from "./CustomHooks";
import React from "react";
const Proyectos = () => {
  const [listProyectos] = useState([
    {
      nombre: "Alma Nails",
      des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nemo dolores obcaecati accusamus excepturi aperiam laborum recusandae! Laborum aliquid vitae id omnis quasi temporibus, voluptatem nemo eos praesentium officiis dignissimos?",
      lenguajes: "HTML CSS JAVASCRIPT",
      img: "alma-nails.jpeg",
      link:"https://almanails.netlify.app/"
    },
    {
      nombre: "Alma Nails (Services)",
      des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nemo dolores obcaecati accusamus excepturi aperiam laborum recusandae! Laborum aliquid vitae id omnis quasi temporibus, voluptatem nemo eos praesentium officiis dignissimos?",
      lenguajes: "HTML CSS JAVASCRIPT",
      img: "project-alma-nails-services.png",
      link:"https://alma-nails-card.netlify.app/"
    }
    
    
    ,

    {
      nombre: "Charrua Sports",
      des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nemo dolores obcaecati accusamus excepturi aperiam laborum recusandae! Laborum aliquid vitae id omnis quasi temporibus, voluptatem nemo eos praesentium officiis dignissimos?",
      lenguajes: "HTML CSS JAVASCRIPT",
      img: "charrua-sports.jpeg",
      link:"https://charruasports.netlify.app/"
    },

    {
      nombre: "Esta largo! Barberia",
      des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nemo dolores obcaecati accusamus excepturi aperiam laborum recusandae! Laborum aliquid vitae id omnis quasi temporibus, voluptatem nemo eos praesentium officiis dignissimos?",
      lenguajes: "HTML CSS JAVASCRIPT",
      img: "esta-largo-barberia.jpeg",
      link:"https://esta-largo-barberia.netlify.app/"
    },

    {
      nombre: "Good Food Maker",
      des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nemo dolores obcaecati accusamus excepturi aperiam laborum recusandae! Laborum aliquid vitae id omnis quasi temporibus, voluptatem nemo eos praesentium officiis dignissimos?",
      lenguajes: "HTML CSS JAVASCRIPT",
      img: "good-food-maker.jpeg",
      link:"https://good-food-maker.netlify.app/"
    },
    {
      nombre: "The Coffee Store",
      des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nemo dolores obcaecati accusamus excepturi aperiam laborum recusandae! Laborum aliquid vitae id omnis quasi temporibus, voluptatem nemo eos praesentium officiis dignissimos?",
      lenguajes: "HTML CSS JAVASCRIPT",
      img: "the-coffee-store.jpeg",
      link:"https://the-coffee-store-nicolas-duarte.netlify.app/"
    },
    {
      nombre: "Las 7 Maravillas del Mundo",
      des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nemo dolores obcaecati accusamus excepturi aperiam laborum recusandae! Laborum aliquid vitae id omnis quasi temporibus, voluptatem nemo eos praesentium officiis dignissimos?",
      lenguajes: "HTML CSS JAVASCRIPT",
      img: "las-7-maravillas-del-mundo.jpeg",
      link:"https://las-7-maravillas-del-mundo.netlify.app/"
    },
  ]);
  const refTab = useRef();
  const refDivs = useRef([]);
  CustomHooks(refTab, refDivs);
  return (
    <section id="proyectos" className="projects" ref={refTab}>
      <div className="title" ref={(el) => el && refDivs.current.push(el)}>
        Proyectos
      </div>
      <div className="des" ref={(el) => el && refDivs.current.push(el)}>
        Además de las habilidades que adquirí durante mis estudios, he tenido la
        oportunidad de aplicar y desarrollar estas mismas a través de una serie
        de proyectos prácticos. A continuación, me gustaría compartir algunos de
        estos proyectos que reflejan mi experiencia y habilidades en acción.
        Desde mis inicios, hasta el presente.
      </div>

      <div className="list" ref={(el) => el && refDivs.current.push(el)}>
        {listProyectos.map((value, key) => (
          <div key={key} className="item">
            <div className="images">
              <a href={value.link} target="_blank"> 
              <img src={value.img} alt="imagenes de proyectos"/>
              </a>
            </div>
            <div className="content">
              <h3>{value.nombre}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
