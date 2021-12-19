import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { categoryData } from 'data/CategoryData';
import CategoryProduct from 'components/molecules/CategoryProduct/CategoryProduct';
import { CategoryTitle } from './Category.styles';

const Category = () => {
  const [currentCategory, setCurrentCategory] = useState([]);
  const { pathname } = useLocation();
  const name = pathname.split('/');
  useEffect(() => {
    const [...matchingCategory] = categoryData.filter((product) => `/${product.category.toLowerCase()}` === pathname.toLowerCase());
    setCurrentCategory(matchingCategory);
  }, [pathname]);
  return (
    <div>
      <CategoryTitle>{name[1]}</CategoryTitle>
      {currentCategory.map((product) => (
        <CategoryProduct key={product.name} product={product} />
      ))}
    </div>
  );
};

export default Category;
