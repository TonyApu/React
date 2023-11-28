import ProductList from '@/components/ProductList';
import { connect } from 'dva';
import { useEffect } from 'react';

const Products = ({ dispatch, products }) => {
  console.log('render', products);
   useEffect(() => {
    dispatch({
      type: 'products/fetch',
    });
  },[]) 
 

  return (
    <div>
      <h2>List of Products</h2>
      <ProductList dispatch={dispatch} products={products} />
    </div>
  );
};

export default connect(({ products }) => ({
  products,
}))(Products);