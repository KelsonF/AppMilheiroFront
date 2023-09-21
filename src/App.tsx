import { SearchBar } from './components/SearchBar'
import { ValueInput } from './components/ValueInput'
import './core/css/App.css'

function App() {

  return (
    <>
      <div className='main-container'>
        <div className='searchBar-holder'>
          <SearchBar />
        </div>
        <div className='milesBox-holder'>

        </div>
        <div className='priceLabel-holder'>
          <ValueInput label='Preco milheiro'/>
        </div>
        <div className='dicountLabel-holder'>
          <ValueInput label='Bonus'/>
        </div>
        <div className='discountValuator-holder'>

        </div>
      </div>
    </>
  )
}

export default App
