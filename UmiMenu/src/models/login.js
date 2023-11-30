import { accountLogin } from '../services/login'
import { notification } from 'antd';
import { history } from 'umi';

export default {
  namespace: 'login',
  state: [],
  effects: {
    *login(payload, { call, put }) {
      const res = accountLogin(payload);
      if (res.status === 200) {
        yield put({
          type: 'changeLoginStatus',
          payload: res.role,
        });
        history.push('/home');
      } else {
        notification.error({
          message: 'Sai tài khoản hoặc mật khẩu',
        });
      }
    },
    logout() {
      localStorage.removeItem("roles");
      history.push('/home');
    },
  },
  reducers: {
    changeLoginStatus(state, { payload }) {
      console.log('payload: ', payload);
      localStorage.setItem('roles', payload);
      return { ...state };
    },
  },
};
