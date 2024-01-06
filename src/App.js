import ccaefissJSON from './ccaefiss.json';
import ccaefissJSON2 from './ccaefiss2.json';
import { useState, useEffect } from 'react';
import { FormContext } from './FormContext';
import { GcdsButton, GcdsContainer, GcdsHeader } from '@cdssnc/gcds-components-react';
import Section from './components/Section';
import Case from './components/Case';
import axios from 'axios';
import "./styles.css"

function App() {

  /* Getting and setting elements from json form */
  const [elements, setElements] = useState(ccaefissJSON2[0]);
  useEffect(() => {
    setElements(ccaefissJSON2[0]);
  }, []);

  /* Derefernce the sections and page label from the form */
  const { sections, page_label } = elements ?? {};

  /* Store search results */
  const [searchResults, setSearchResults] = useState(null);

  /* Responsible for passing JSON "elements" to server */
  const handleSearch = (e) => {
    e.preventDefault();

    /* Get search data to search from the form */
    const search = {
      vNumber: elements.sections[0].fields[0].field_value,
      status: elements.sections[0].fields[1].field_value,
      reportType: elements.sections[1].fields[0].field_value,
      impactCase: elements.sections[1].fields[1].field_value
    }

    /* Show data from form */

    const formData = {};
    console.log(elements)
    for(let i = 0; i < elements.sections.length; i++){
      for(let j = 0; j < elements.sections[i].fields.length; j++){
        formData[elements.sections[i].fields[j].field_id] = elements.sections[i].fields[j].field_value;
      }
    }
    // console.log(formData)
    /* Get all cases */
    // axios.get('http://localhost:3001/cases')
    // .then(res => {
    //   if(res.data.length > 0){
    //     console.log("Cases found for /cases: ");
    //     console.log(res.data);
    //   } 
    //   else console.log("no cases found");
    // })
    // .catch(err => console.log(err))

    /* Get specific cases with search data */
    axios({
      method: 'post',
      url: 'http://localhost:3001/cases/search',
      data: formData
    })
    .then(res => {
      setSearchResults(res.data);
    })
    .catch(err => {
      setSearchResults(null);
      console.log(err);
    }) 

  }

  /* Update the elements with new inputted values */
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
        <GcdsHeader></GcdsHeader>
        <h1>{page_label}</h1>
        <GcdsContainer size='full' border padding='300' >
          {sections ? sections.map((section, i) => <Section key={i} section={ section }/>) : null}

          <GcdsButton style={{paddingTop:"25px"}} type="button" onClick={(e) => handleSearch(e)}>Search</GcdsButton>
        </GcdsContainer>

        <GcdsContainer size='lg' padding='250'>
          {searchResults !== null ? <Case searchResults={ searchResults } /> : null }
        </GcdsContainer>
      </div>
    </FormContext.Provider>
  );
}

export default App;