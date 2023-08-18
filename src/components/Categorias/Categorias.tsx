import { useState, useEffect } from 'react';
import { getCategories } from '../../services/api';

type TypeState = {
  name: string
  id?: string
};

function Categorias() {
  const [categories, setCategories] = useState<TypeState[]>([]);

  useEffect(() => {
    const receiveAllCategories = async () => {
      const receiveCategories = await getCategories();
      setCategories(receiveCategories);
    };
    receiveAllCategories();
  }, []);

  console.log(categories);

  return (
    <div>
      <h3>Categorias</h3>
      {categories.map((category) => (
        <div key={ category.id }>
          <button data-testid="category">{category.name}</button>
        </div>
      ))}
    </div>
  );
}

export default Categorias;
