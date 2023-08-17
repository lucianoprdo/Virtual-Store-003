import React from 'react';

function Home() {
  return (
    <div>
      <input type="text" placeholder="Digite o que você busca" />
      <h2 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h2>
    </div>
  );
}
export default Home;
