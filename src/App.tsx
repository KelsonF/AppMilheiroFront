import React, { useRef, useState } from 'react';
import { Body } from './components/Body';
import { Button } from './components/Button';
import { MilesComponent } from './components/MilesComponent';
import { SearchBar } from './components/SearchBar';
import { ValueInput } from './components/ValueInput';
import { MilesCalculatorWithBonus } from './useCases/MilesCalculator';

function App() {
  const [milesQuantity, setMilesQuantity] = useState<number>(0);
  const [milesPrice, setMilesPrice] = useState<number>(0);
  const [milesBonus, setMilesBonus] = useState<number>(0);
  const [milesRealprice, setMilesRealprice] = useState<number>(0);

  const milesQuantityRef = useRef<HTMLInputElement>(null);
  const milesPriceRef = useRef<HTMLInputElement>(null);
  const milesBonusRef = useRef<HTMLInputElement>(null);

  function increaseMilesQuantity() {
    setMilesQuantity(milesQuantity + 10);
  }

  function decreaseMilesQuantity() {
    if (milesQuantity >= 10) {
      setMilesQuantity(milesQuantity - 10);
    }
  }

  function milesPriceHandleClick() {

    const quantity = parseFloat(milesQuantityRef.current?.value || '0');
    const price = parseFloat(milesPriceRef.current?.value || '0');
    const bonus = parseFloat(milesBonusRef.current?.value || '0');

    if (!isNaN(quantity) && !isNaN(price) && !isNaN(bonus)) {

      let milesPriceWithBonus = MilesCalculatorWithBonus(quantity, bonus, price);

      setMilesQuantity(quantity);
      setMilesBonus(bonus);
      setMilesPrice(price);
      setMilesRealprice(milesPriceWithBonus);
    }

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
            increaseFunction={increaseMilesQuantity}
            decreaseFunction={decreaseMilesQuantity}
            ref={milesQuantityRef}
          />
        </div>
        <div className='priceLabel-holder'>
          <ValueInput label='Preco milheiro' value={milesPrice} ref={milesPriceRef} />
        </div>
        <div className='bonusLabel-holder'>
          <ValueInput label='Bonus' value={milesBonus} ref={milesBonusRef} />
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
