import { useState, useEffect } from 'react';
import { getCategories } from '../../services/api';

type TypeState = {
  name: string
  id?: string
};

interface CategoriasProps {
  onCategoryClick: (categoryId: string) => void;
}

function Categorias({ onCategoryClick }: CategoriasProps) {
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
          <button
            data-testid="category"
            onClick={ () => onCategoryClick(category.id || '') }
          >
            {category.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Categorias;
