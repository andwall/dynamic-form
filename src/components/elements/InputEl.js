import React, {useContext} from 'react';
import { FormContext } from '../../FormContext';
import { GcdsInput } from '@cdssnc/gcds-components-react';

const InputEl = ({ field_id, field_label, field_placeholder, field_value }) => {
  const { handleChange } = useContext(FormContext);
  return (
  <GcdsInput
    inputId="example-default"
    label={field_label}
    hint={field_placeholder ? field_placeholder : ''}
    value={field_value}
    onGcdsChange={e => handleChange(field_id, e)}
    type="text"
  >
  </GcdsInput>
    // <div className="mb-3">
    //   <label htmlFor="exampleInputEmail1" className="form-label">{field_label}</label>
    //   <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={field_placeholder ? field_placeholder : ''} value={field_value} onChange={e => handleChange(field_id, e)}/>
    // </div>
  )
}

export default InputEl