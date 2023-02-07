export default function Tarif(props) {
  return (
    <div className='tarifcard'>
      <div className='card__component header'><span className='tarif-name'>Безлимитный</span><p className='tarif-price'>{props.price}</p></div>
      <div className='card__component item-1'><p className='tarif-cur'>руб</p><div className='tarif-price'>{props.price}</div><span>/мес</span></div>
      <div className='card__component item-2'><span>До</span><div className='tarif-speed'>{props.speed}</div><span>Мбит/сек</span></div>
      <div className='card__component footer'><span>Объем ключенного трафика не ограничен</span></div>
      </div>
  );
}
