import React from 'react';
import { Link } from "react-router-dom";

import logo_ml from '../../../assets/img/nav/logo_ml.png';
import logo_search from '../../../assets/img/nav/search.png';

import './NavBar.scss';

const NavBar = ({
  handleSubmit,
  handlerChange,
  handleRedirect,
}: {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
  handlerChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleRedirect: (event: React.MouseEvent<HTMLButtonElement>) => void,
}) => {

  return (
    <section className='navbar'>
      <Link to={'/'} className='navbar__logo'>
        <img className='logo' src={logo_ml} alt="Inicio" />
      </Link>
      <form className="navbar__form" role="search" onSubmit={handleSubmit}>
        <input className="form__search-input" type="search" placeholder="Nunca dejes de buscar" aria-label="Search" onChange={handlerChange} />
        <button className="form__button" type="submit" onClick={handleRedirect}>
          <img className='button__image' src={logo_search} alt="buscar" />
        </button>
      </form>
    </section>
  );
}

export default NavBar;