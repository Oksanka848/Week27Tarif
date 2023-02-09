import React from 'react';
import style from './App.css';

/*import tarif from './components/Tarif.scss';*/
import Tarif from './components/Tarif';
import cards from './components/cards.json';

export default class App extends React.Component {
    render() {
    return (
      <div className={style.App}>
        {
          cards.map((card) =>
            <Tarif key={card.id} price={card.price} speed={card.speed} isSelected={card.isSelected} isBlue={card.isBlue} isFiltr={card.isFiltr}
            ></Tarif>
          )
        }
      </div>
    );
  }
}
