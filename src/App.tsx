import { useState } from 'react'
import { Body } from './components/Body'
import { Button } from './components/Button'
import { MilesComponent } from './components/MilesComponent'
import { SearchBar } from './components/SearchBar'
import { ValueInput } from './components/ValueInput'

function App() {
  const [milesQuantity, setMilesQuantity] = useState(0)

  function increaseMilesQunatity() {
    setMilesQuantity(milesQuantity + 10)
  }

  function decreaseMilesQunatity() {
    if(milesQuantity < 0){
      return
    }
    
    setMilesQuantity(milesQuantity - 10)
  }

  return (
    <>
      <Body>
        <div className='searchBar-holder'>
          <SearchBar />
        </div>
        <div className='milesBox-holder'>
          <MilesComponent value={milesQuantity} increaseFunction={increaseMilesQunatity} decreaseFunction={decreaseMilesQunatity} />
        </div>
        <div className='priceLabel-holder'>
          <ValueInput label='Preco milheiro' />
        </div>
        <div className='dicountLabel-holder'>
          <ValueInput label='Bonus' />
        </div>
        <div className='discountValuator-holder'>

        </div>
        <div className='button-holder'>
          <Button text='Calcular' />
        </div>
      </Body>
    </>
  )
}

export default App
