
import style from './App.css';
import Tarif from './components/Tarif';
import cards from './components/cards.json';

/*export default class App extends React.Component {
  render() {
    return (
      <div className={style.App}>
        {
          cards.map((card) =>
            <Tarif key={card.id} price={card.price} speed={card.speed} isSelected={card.isSelected} theme={card.theme} isFiltr={card.isFiltr}></Tarif>
          )
        }
      </div>
    );
  }
}
*/

export default function App (){

  

  return ( 
    <div className={style.App}>
      {
          cards.map((card) =>
            <Tarif key={card.id} price={card.price} onClick={card.isSelected}
            speed={card.speed}  
            theme={card.theme} isFiltr={card.isFiltr}></Tarif>
          )
        }
    </div>
  );
}
