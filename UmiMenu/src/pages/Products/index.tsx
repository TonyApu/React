import ProductList from '@/components/ProductList';
import { connect } from 'dva';

const Products = ({ dispatch, products }) => {
  console.log('product: ', products)
  dispatch({
    type: 'products/fetch',
  });

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