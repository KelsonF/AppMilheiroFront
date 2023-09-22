import { useState } from 'react';
import { Body } from './components/Body';
import { Button } from './components/Button';
import { MilesComponent } from './components/MilesComponent';
import { SearchBar } from './components/SearchBar';
import { ValueInput } from './components/ValueInput';
import { MilesCalculator } from './useCases/MilesCalculator';

function App() {
  const [milesQuantity, setMilesQuantity] = useState(0);
  const [milesPrice, setMilesPrice] = useState(0);
  const [milesBonus, setMilesBonus] = useState(0);  
  const [milesDiscount, setMilesDiscount] = useState(0);
  const [milesRealprice, setMilesRealprice] = useState(0);


  function increaseMilesQunatity() {
    setMilesQuantity(milesQuantity + 10);
  }

  function decreaseMilesQunatity() {
    if (milesQuantity < 0) {
      return;
    }

    setMilesQuantity(milesQuantity - 10);
  }

  function milesPriceHandleClick(){
    let milesRealprice = MilesCalculator(milesPrice, milesDiscount, milesBonus, milesQuantity);
    setMilesRealprice(milesRealprice)
  }

  return (
    <>
      <Body>
        <div className='searchBar-holder'>
          <SearchBar />
        </div>
        <div className='milesBox-holder'>
          <MilesComponent
            value={milesQuantity}
            increaseFunction={increaseMilesQunatity}
            decreaseFunction={decreaseMilesQunatity}
          />
        </div>
        <div className='priceLabel-holder'>
          <ValueInput label='Preco milheiro' value={milesPrice} />
        </div>
        <div className='dicountLabel-holder'>
          <ValueInput label='Bonus' value={milesBonus}/>
        </div>
        <div className='button-holder'>
          <Button
            text='Calcular'
            onClickFunction={milesPriceHandleClick}
          />
        </div>
      </Body>
    </>
  );
}

export default App;
