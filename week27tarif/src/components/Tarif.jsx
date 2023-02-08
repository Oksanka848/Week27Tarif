import React from 'react';

export default class Tarif extends React.Component {
  render() {
    const {price, speed} = this.props;
    
  return (
    <div className='tarifcard'>
      <div className='card__component header'><span>Безлимитный</span><p className='tarif-price'>{price}</p></div>
      <div className='card__component item-1'><span className='tarif-cur'>руб</span><div className='tarif-price'>{price}</div><span>/мес</span></div>
      <div className='card__component item-2'><span>до</span><div className='tarif-speed'>{speed}</div><span>Мбит/сек</span></div>
      <div className='card__component footer'><span>Объем ключенного трафика не ограничен</span></div>
      </div>
  );
}
}
