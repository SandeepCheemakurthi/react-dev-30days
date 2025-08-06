import './App.css'
import { Accordion } from './components/accordion/accordion';
import { CountryDropdown } from './components/country_dropdown/CountryDropdown';

function App() {

  return (
    <>
      <div>
        <h3>Public Holiday's List</h3>
      </div>
      <div className="m-4">
        <CountryDropdown />
      </div>
      <div className="m-4">
        <Accordion />
      </div>

    </>
  )
}

export default App
