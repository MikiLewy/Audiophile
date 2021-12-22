import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import CategoryProduct from 'components/molecules/CategoryProduct/CategoryProduct';
import { CategoryTitle } from './Category.styles';
import { useProducts } from 'hooks/useProducts';
import Loader from 'components/atoms/Loader/Loader';

const Category = () => {
  const [currentCategory, setCurrentCategory] = useState([]);
  const products = useProducts();
  const { pathname } = useLocation();
  const name = pathname.split('/');
  useEffect(() => {
    const [...matchingCategory] = products.filter((product) => `/${product.category.toLowerCase()}` === pathname.toLowerCase());
    setCurrentCategory(matchingCategory);
  }, [pathname, products]);
  return (
    <div>
      <CategoryTitle>{name[1]}</CategoryTitle>
      {currentCategory.length > 0 ? currentCategory.map((product) => <CategoryProduct key={product.name} product={product} />) : <Loader />}
    </div>
  );
};

export default Category;
