import React, { useState, useEffect } from 'react';
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cartString = localStorage.getItem('cart');
    const cartData: Product[] = cartString ? JSON.parse(cartString) : [];
    setCart(cartData);
  }, []);

  const removeProduct = (index: number) => {
    setLoading(true);
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
    setLoading(false);
  };

  const addQuantity = (product: Product, index: number) => {
    setLoading(true);
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
    setLoading(false);
  };

  const decreaseQuantity = (product: Product, index: number) => {
    setLoading(true);
    if (product.quantity > 1) {
      const updatedCart = [...cart];
      updatedCart[index].quantity -= 1;
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      setCart(updatedCart);
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      {cart.length === 0 ? (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      ) : (
        cart.map((product, index) => (
          <div key={ product.id } className="cart-item">
            <h3
              data-testid="shopping-cart-product-name"
            >
              {product.title}
            </h3>
            <img src={ product.thumbnail } alt={ product.title } />
            <p>
              Preço: R$
              {product.price}
            </p>
            <p
              data-testid="shopping-cart-product-quantity"
            >
              Quantidade:
              {product.quantity}
            </p>
            <button onClick={ () => removeProduct(index) }>Remover</button>
            <button onClick={ () => addQuantity(product, index) }>Adicionar</button>
            <button onClick={ () => decreaseQuantity(product, index) }>Diminuir</button>
          </div>
        ))
      )}
      <Link to="/">Voltar para a Página Inicial</Link>
    </div>
  );
}

export default CartPage;
