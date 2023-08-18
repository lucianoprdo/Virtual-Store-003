const URL_ENDPOINT = 'https://api.mercadolibre.com/sites/MLB/categories';
// const URL_TERMO = 'https://api.mercadolibre.com/sites/MLB/search?q=$QUERY';
// const URL_CATEGORY_ID = 'https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID';
// const URL_CATEGORY_QUERY = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${QUERY}`;

const getCategories = async () => {
  const getEndCategories = await fetch(URL_ENDPOINT);
  const response = await getEndCategories.json();
  return response;
};
getCategories();

const getProductsFromCategoryAndQuery = async (categoryId: string, query: string) => {
  const getProductsCategory = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const response = await getProductsCategory.json();
  return response;
  // console.log(response);
};
// getProductsFromCategoryAndQuery();

const getProductById = async () => {
  // Esta implementação específica não é avaliada, mas pode ajudar você. 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
};

export { getCategories, getProductsFromCategoryAndQuery, getProductById };
