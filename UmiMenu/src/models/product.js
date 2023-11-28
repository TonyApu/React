import { getMenu, deleteItem } from '../services/product';
export default {
  namespace: 'products',
  state: [],
  effects: {
    *fetch(_, { call, put }) {
      const { data } = yield call(getMenu);
      yield put({
        type: 'save',
        payload: data,
      });
    },
    *deleteItem({payload}, {call, put}) {
      const {data } = yield call(deleteItem(payload));
      yield put({
        type: 'save',
        payload: data,
      });
    },
  },
  reducers: {
    save(state, { payload }) {
      return payload;
    },

    // delete(state, { payload: id }) {
    //   return state.filter((item) => item.id !== id);
    // },
  },
};
