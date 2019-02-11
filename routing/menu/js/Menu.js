'use strict';

const Menu = () => {
  return (
    <nav className="menu">
      <NavLink 
        className="menu__item" 
        activeClassName="menu__item-active" 
        to="/" 
        exact
      >
        Главная
      </NavLink>
      <NavLink 
        className="menu__item" 
        activeClassName="menu__item-active" 
        to="/drift"
      >
        Дрифт-такси
      </NavLink>
      <NavLink 
        className="menu__item" 
        activeClassName="menu__item-active" 
        to="/timeattack"
      >
        Time Attack
      </NavLink>
      <NavLink
        className="menu__item" 
        activeClassName="menu__item-active" 
        to="/forza"
      >
        Forza Karting
      </NavLink>
    </nav>
  )
}