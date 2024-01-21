import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/productSlice';

const Products = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);
    console.log(productsList.products);
  return (
    <div>

    </div>
  );
};

export default Products;
