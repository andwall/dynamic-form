/* Responsible for displaying an input element */
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
  )
}

export default InputEl;