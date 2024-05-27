import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTabActive } from "./redux/actions";
import HamburgerIcon from "./HamburgerIcon";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const activeTab = useSelector(state => state.activeTab);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const changeTab = (value) => {
    dispatch(changeTabActive(value));
  };

  return (
    <header>
      <nav className={`links ${clicked ? 'active' : ''}`}>
        <ul>
          {['Inicio', 'Habilidades', 'Proyectos', 'Contacto'].map((value, key) => (
            <li key={key}>
              <a
                onClick={() => { changeTab(value.toLowerCase()); handleClick(); }}
                href={`#${value.toLowerCase()}`}
                className={activeTab === value.toLowerCase() ? 'active' : ''}
              >
                {value}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="icon-bar">
        <HamburgerIcon clicked={clicked} handleClick={handleClick} />
      </div>
    </header>
  );
};

export default Navbar;
