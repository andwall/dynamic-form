/* Responsible for displaying correct componenet based on field type */
import React from 'react'
import Checkbox from './elements/Checkbox';
import Select from './elements/Select';
import InputEl from './elements/InputEl';

const Element = ({ field: { field_type, field_id, field_label, field_placeholder, field_value, field_options } }) => {
  
  switch(field_type){

    case 'text': 
      return(<InputEl 
        field_id={field_id} 
        field_label={field_label} 
        field_placeholder={field_placeholder}
        field_value={field_value}
      />)

    case 'checkbox':
      return(<Checkbox  
        field_id={field_id} 
        field_label={field_label} 
        field_value={field_value}
      />)
    
    case 'select':
      return(<Select  
        field_id={field_id} 
        field_label={field_label} 
        field_placeholder={field_placeholder}
        field_value={field_value}
        field_options={field_options}
      />)
    
    default: 
      return(null)
  }
}

export default Element;