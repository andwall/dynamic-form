import React, {useContext} from 'react';
import { FormContext } from '../../FormContext';

const InputEl = ({ field_id, field_label, field_placeholder, field_value }) => {
  const { handleChange } = useContext(FormContext);
  return (
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">{field_label}</label>
      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={field_placeholder ? field_placeholder : ''} value={field_value} onChange={e => handleChange(field_id, e)}/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
  )
}

export default InputEl