import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../../services/api';

type DetalhesType = {
  title: string
  thumbnail: string
  price: number
};

const INITIAL_DETALHE = {
  title: '',
  price: 0,
  thumbnail: '',
};

function Detalhes() {
  const [details, setDetails] = useState<DetalhesType>(INITIAL_DETALHE);
  useEffect(() => {
    const productDetails = async () => {
      const detalhes = await api.getProductById(window.location.pathname);
      console.log(detalhes);
      setDetails(detalhes);
    };
    productDetails();
  }, []);

  return (
    <div>
      <h1>DETALHES PRODUTO</h1>
      <h3
        data-testid="product-detail-name"
      >
        {details.title}
      </h3>
      <h3
        data-testid="product-detail-price"
      >
        {details.price}
      </h3>
      <img
        src={ details.thumbnail }
        alt="Imagem do produto"
        data-testid="product-detail-image"
      />
      <Link
        to="/Cart"
        data-testid="shopping-cart-button"
      >
        Carrinho
      </Link>
    </div>
  );
}

export default Detalhes;
