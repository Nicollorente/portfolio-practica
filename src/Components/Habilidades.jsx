
import { useState,useRef } from "react"
import CustomHooks from "./CustomHooks"
const Habilidades = () => {
  const [listHablidades] = useState([
{
nombre:"HTML", 
icon: "icon-html.png"
},
{
nombre:"CSS",
icon: "icon-css.png"
},
{
  nombre:"JavaScript",
  icon:"icon-js.png"
},
{
  nombre: "React Js",
  icon: "icon-react.png"
},
{
  nombre: "GIT",
  icon: "icon-git.png"
},
{
  nombre: "GitHub",
  icon: "icon-github.png"
},
{
  nombre: "Sass",
  icon: "icon-sass.png"
},
{
  nombre: "Figma",
  icon: "icon-figma.png"
},
{
  nombre: "npm",
  icon: "icon-npm.png"
},
{
  nombre: "Vite",
  icon: "icon-vite.png"
},
{
  nombre: "Tailwind CSS",
  icon: "icon-tailwind.png",
  des:"Aprendiendo"
},
{
  nombre: "TypeScript",
  icon: "icon-typescript.png",
  des:"Aprendiendo"
},
{
  nombre: "Redux",
  icon: "icon-redux.png",
  des:"Aprendiendo"
}
  ]);
  const refTab = useRef();
  const refDivs = useRef([]);
  CustomHooks(refTab,refDivs);

  return (
    <section id="habilidades" className="skills" ref={refTab}>
      <div className="title" ref={(el)=> el && refDivs.current.push(el)}>
        Habilidades y Herramientas
      </div>
      <div className="des" ref={(el)=> el && refDivs.current.push(el)}>
      A continuación, presento las habilidades que he desarrollado durante mi período de estudios.
      </div>
      <div className="list" ref={(el)=> el && refDivs.current.push(el)}> 
        {
          listHablidades.map((value,key)=>(
            <div key={key} className="item">
              <div className="ability">
              <img src={value.icon} alt={value.nombre} style={{margin:"auto",width: "60px", height: "60px"}} />
              <h3 >{value.nombre}</h3>
              <p>{value.des}</p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Habilidades