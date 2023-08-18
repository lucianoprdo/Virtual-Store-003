import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type Product = {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  quantity: number;
};

function CartPage() {
  const [cart, setCart] = useState<Product[]>([]);

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      {cart.length === 0 ? (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      ) : (
        cart.map((product) => (
          <div key={ product.id } className="cart-item">
            <h3>{product.title}</h3>
            <img src={ product.thumbnail } alt={ product.title } />
            <p>
              Preço: R$
              {product.price}
            </p>
            <p>
              Quantidade:
              {product.quantity}
            </p>
          </div>
        ))
      )}
      <Link to="/">Voltar para a Página Inicial</Link>
    </div>
  );
}

export default CartPage;
