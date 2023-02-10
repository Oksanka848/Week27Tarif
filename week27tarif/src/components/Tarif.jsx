import React from 'react';
import './Tarif.scss';

export default class Tarif extends React.Component {
  render() {
    const {price, speed, isSelected, theme, isFiltr} = this.props;
  return (
    <div className={`tarifcard`+(isSelected?" selected":"")}>
      <div className={`card__component header ${theme}`}><span>Безлимитный</span><p className='tarif-price'>{price}</p></div>
      <div className={`card__component item-1 ${theme}`+(isFiltr?" filtr":"")}><span className='tarif-cur'>руб</span><div className='tarif-price'>{price}</div><span>/мес</span></div>
      <div className={`card__component item-2`}><span>до</span><div className='tarif-speed'>{speed}</div><span>Мбит/сек</span></div>
      <div className={`card__component footer`+(isFiltr?" filtr":"")}><span>Объем ключенного трафика не ограничен</span></div>
      </div>
  );
}
}
