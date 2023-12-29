// import formJSON from './formElement.json';
import ccaefissJSON from './ccaefiss.json'
import { useState, useEffect } from 'react';
// import Element from './components/Element';
import { FormContext } from './FormContext';
import { GcdsButton } from '@cdssnc/gcds-components-react';
import Section from './components/Section';

function App() {

  //declaring elements state
  const [elements, setElements] = useState(undefined);
  useEffect(() => {
    setElements(ccaefissJSON[0]);
    console.log(elements)
  }, []);

  //derefernce the fields and page label from elements
  const { sections, page_label } = elements ?? {};


  //TODO pass JSON "elements" to sever
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(elements);
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

//  represent states that you want to share via func handleChange
  return (
    <FormContext.Provider value={ { handleChange } }> 
      <div className="App container">
        <h3>{page_label}</h3>
        <form>
          {sections ? sections.map((section, i) => <Section key={i} section={section}/>) : null}

          <GcdsButton type="button" onClick={(e) => handleSearch(e)}>Search</GcdsButton>
        </form>

        <Section />
      </div>
    </FormContext.Provider>
  );
}

export default App;