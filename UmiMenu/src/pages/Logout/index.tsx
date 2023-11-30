import { Button } from 'antd';
import { connect } from 'umi';
import styles from './style.logout.scss';

const LogoutPage = (props) => {
  const logout = () => {
    props.dispatch({
      type: 'login/logout',
    });
  };

  return (
    <div className={styles.container}>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default connect()(LogoutPage);
