<<<<<<< HEAD
import React, { useState } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import * as api from '../services/api';

function Home() {
  const [pesquisar, setPesquisar] = useState('');

  async function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newSearch = event.target.value;
    // console.log(newSearch);
    setPesquisar(newSearch);
    // console.log(await getProductsFromCategoryAndQuery('','Games'));
    // console.log(await getCategories());
    console.log(await api.getCategories());
    console.log(await api.getProductsFromCategoryAndQuery('', pesquisar));
  }

  /*const handleSearch = async () => {
    const resultado = await getProductsFromCategoryAndQuery(pesquisar);
    setPesquisar('');
    setLoaging(false);
  };*/

=======
import { Link } from 'react-router-dom';
import Categorias from '../components/Categorias/Categorias';

const home = () => {
>>>>>>> 6d290ced7ab58552e42e845de7fbcc54a361bcc3
  return (
    <div>
      <input
        type="text"
        placeholder="Digite o que você busca"
        onChange={ (event) => handleChange(event) }
      />
      <h2 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h2>
      <Categorias />
      <Link
        to="/cart"
        data-testid="shopping-cart-button"
      >
        Ir para o Carrinho de Compras
      </Link>
    </div>
  );
};

export default home;
