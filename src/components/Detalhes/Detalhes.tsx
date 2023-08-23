import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../../services/api';

type DetalhesType = {
  title: string;
  thumbnail: string;
  price: number;
};

const INITIAL_DETALHE = {
  title: '',
  price: 0,
  thumbnail: '',
};

function Detalhes() {
  const [details, setDetails] = useState<DetalhesType>(INITIAL_DETALHE);
  const [totalCartItems, setTotalCartItems] = useState<number>(0);

  useEffect(() => {
    const productDetails = async () => {
      const detalhes = await api.getProductById(window.location.pathname);
      setDetails(detalhes);
    };
    productDetails();

    // Atualiza o total de itens no carrinho no estado local
    const totalCartItemsString = localStorage.getItem('totalCartItems');
    const totalItems = totalCartItemsString ? JSON.parse(totalCartItemsString) : 0;
    setTotalCartItems(totalItems);

    // Assumindo que você já tem o código para atualizar o total de itens no carrinho quando um item é adicionado ou removido
    // Isso pode ser algo similar ao que fizemos na página Home
    // Certifique-se de chamar setTotalCartItems(novoTotal) após adicionar ou remover um item do carrinho
  }, []);

  const addToCart = (product: any) => {
    const cartString = localStorage.getItem('cart');
    const cart = cartString ? JSON.parse(cartString) : [];

    const itemCart = cart.find(({ id }: any) => id === product.id);
    if (itemCart) {
      itemCart.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    const newTotalCartItems = cart.reduce(
      (total: number, item: any) => total + item.quantity,
      0,
    );
    setTotalCartItems(newTotalCartItems); // Atualiza o total de itens no carrinho no estado local

    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <div>
      <h1>DETALHES PRODUTO</h1>
      <h3 data-testid="product-detail-name">{details.title}</h3>
      <h3 data-testid="product-detail-price">{details.price}</h3>
      <img
        src={ details.thumbnail }
        alt="Imagem do produto"
        data-testid="product-detail-image"
      />
      <Link to="/Cart" data-testid="shopping-cart-button">
        <p data-testid="shopping-cart-size">
          Carrinho (
          {totalCartItems}
          {' '}
          itens)
        </p>
      </Link>
      <button
        data-testid="product-detail-add-to-cart"
        onClick={ () => addToCart(details) }
      >
        Adicionar ao carrinho
      </button>
      <Link to="/">
        Voltar
      </Link>
    </div>
  );
}

export default Detalhes;
