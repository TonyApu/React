import { getMenu } from '../services/product';
export default {
  namespace: 'products',
  state: [],
  effects: {
    *fetch(_, { call, put }) {
      const { data } = yield call(getMenu);
      console.log('menu: ', data);
      yield put({
        type: 'save',
        payload: {
          products: data,
        },
      });
    },
  },
  reducers: {
    save(state, { payload }) {
      console.log('payload: ', payload);
      return {
        ...state,
      };
    },

    delete(state, { payload: id }) {
      return state.filter((item) => item.id !== id);
    },
  },
};
