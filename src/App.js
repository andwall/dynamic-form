import ccaefissJSON from './ccaefiss.json'
import { useState, useEffect } from 'react';
import { FormContext } from './FormContext';
import { GcdsButton } from '@cdssnc/gcds-components-react';
import Section from './components/Section';
import axios from 'axios';

function App() {
  //Getting and setting elements from json form
  const [elements, setElements] = useState(ccaefissJSON[0]);
  useEffect(() => {
    setElements(ccaefissJSON[0]);
  }, []);

  //derefernce the sections and page label from the form
  const { sections, page_label } = elements ?? {};

  //TODO pass JSON "elements" to sever
  const handleSearch = (e) => {
    e.preventDefault();

    //Get search data to search for from the form
    const search = {
      vNumber: elements.sections[0].fields[0].field_value,
      status: elements.sections[0].fields[1].field_value,
      reportType: elements.sections[1].fields[0].field_value,
      impactCase: elements.sections[1].fields[1].field_value
    }
    // console.log("Search Parameters: ");
    // console.log(search);

    //get all cases
    axios.get('http://localhost:3001/cases')
    .then(res => {
      if(res.data.length > 0){
        console.log("Cases found for /cases: ");
        console.log(res.data);
      } 
      else console.log("no cases found");
    })
    .catch(err => console.log(err))

    //get specific cases with search data
    axios({
      method: 'post',
      url: 'http://localhost:3001/cases/search',
      data: search
    })
    .then( (res) => {
      console.log("Search Query res: ")
      console.log(res)
    })   
  }

  //update the elements with new inputted values
  const handleChange = (id, event) => {
    const newElements = {...elements};
    newElements.sections.forEach(section => {
      section.fields.forEach(field => {
        const { field_type, field_id } = field;
  
        if(id === field_id) {
          switch(field_type){
            case 'checkbox':
              field['field_value'] = event.target.checked;
              break;
            
            default:
              field['field_value'] = event.target.value;
              break;
          }
        }
      });
      
      setElements(newElements);
    })
    // console.log(elements);
  }

  return (
    <FormContext.Provider value={ { handleChange } }> 
      <div className="App container">
        <h3>{page_label}</h3>
          {sections ? sections.map((section, i) => <Section key={i} section={ section }/>) : null}

          <GcdsButton style={{paddingTop:"25px"}} type="button" onClick={(e) => handleSearch(e)}>Search</GcdsButton>
      </div>
    </FormContext.Provider>
  );
}

export default App;