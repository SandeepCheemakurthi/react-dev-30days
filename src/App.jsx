import './App.css'
import { Accordion } from './components/accordion/Accordion';
import { CountryDropdown } from './components/country_dropdown/CountryDropdown';
import CustomForms from './components/CustomForms/CustomForms';
import CustomForms_Formik from './components/CustomForms_Formik/CustomForms_Formik';

function App() {

  return (
    <>
      {/* <div>
        <h3>Public Holiday's List</h3>
      </div>
      <div className="m-4">
        <CountryDropdown />
      </div>
      <div className="m-4">
        <Accordion />
      </div> */}
      {/* <div className="m-4 overflow-auto">
        <CustomForms />
      </div> */}
      <div>
        <CustomForms_Formik />
      </div>

    </>
  )
}

export default App
