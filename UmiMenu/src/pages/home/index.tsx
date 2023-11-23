import doremon from '../../assets/doremon.png';
import style from './style.home.scss'

export default function HomePage() {
  return (
    <div className={style.container}>
      <div className={style.displayName}>Nhà Hàng Doraemon</div>
      <p>
        <img src={doremon} width="600" height="400"/>
      </p>
    </div>
  );
}
