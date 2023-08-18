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
    </div>
  );
}
export default Home;
