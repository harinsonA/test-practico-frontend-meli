import React, { useState } from 'react';
import { useSearchParams, useNavigate } from "react-router-dom";

import Container from '../containers/Container';
import NavBar from '../compoments/navbar/NavBar';
import './Header.scss';

const Header = () => {
  const [productToSearch, setProductToSearch] = useState<string>('');
  const setSearchParams = useSearchParams()[1];
  const navigate = useNavigate();

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductToSearch(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchParams({ search: productToSearch });
  };

  const handleRedirect = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (productToSearch) {
      navigate(`/items?search=${productToSearch}`);
    }
  }

  return (
    <section className='header'>
      <Container>
        <NavBar handleSubmit={handleSubmit} handlerChange={handlerChange} handleRedirect={handleRedirect} />
      </Container>
    </section>
  );
}

export default Header;
