import React from 'react';
import './App.css';
import './components/Tarif.scss';
import Tarif from './components/Tarif';
import cards from './components/cards.json';

export default class App extends React.Component {
    render() {
    return (
      <div className="App">
        {
          cards.map((card) =>
            <Tarif key={card.id} price={card.price} speed={card.speed}></Tarif>
          )
        }
      </div>
    );
  }
}
