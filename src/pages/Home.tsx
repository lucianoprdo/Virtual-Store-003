import { Link } from 'react-router-dom';
import { useState } from 'react';
import Categorias from '../components/Categorias/Categorias';
import * as api from '../services/api';

const home = () => {
  const [pesquisar, setPesquisar] = useState('');
  const [resultadoBusca, setResultadoBusca] = useState([]);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value;
    setPesquisar(newSearch);
    // setResultadoBusca(await api.getProductsFromCategoryAndQuery('', pesquisar));
  };

  const handleSearch = async () => {
    console.log(pesquisar);
    const recebe = await api.getProductsFromCategoryAndQuery('', pesquisar);
    // console.log(recebe.results);
    setResultadoBusca(recebe.results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite o que você busca"
        onChange={ (event) => handleChange(event) }
        data-testid="query-input"
      />
      <button
        onClick={ handleSearch }
        data-testid="query-button"
      >
        PESQUISAR
      </button>
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
      <ul>
        {resultadoBusca.map((resultado: any) => (
          <li key={ resultado.id } data-testid="product">
            <p>{ resultado.title }</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default home;
