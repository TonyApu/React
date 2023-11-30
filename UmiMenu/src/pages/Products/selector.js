import { createSelector, } from 'reselect';
import { PRODUCT_NAMESPACE } from './state'
 
const allState = (state) => state[PRODUCT_NAMESPACE];
 
const selectorProducts = createSelector(allState, (state) => state.products);
 
export {
 selectorProducts,
};