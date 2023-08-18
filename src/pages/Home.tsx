import { Link } from 'react-router-dom';
import Categorias from '../components/Categorias/Categorias';

const home = () => {
  return (
    <div>
      <input type="text" placeholder="Digite o que você busca" />
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
