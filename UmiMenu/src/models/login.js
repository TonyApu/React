import { accountLogin } from '../services/login'
export default {
  namespace: 'login',
  state: [],
  effects: {
    *login(payload, { call, put }) {
      const { status, role } = yield call(accountLogin(payload));
      if (response.code === 200) {

      }
    },
  },
  reducers: {
    changeLoginStatus(state, { payload }) {
      localStorage.setItem('token', payload.data.token);
      localStorage.setItem('roles', payload.data.auth);
      return { ...state };
    },
  },
};
