/* Responsible for displaying a select field */
import React, {useContext} from 'react';
import { FormContext } from '../../FormContext';
import { GcdsSelect } from '@cdssnc/gcds-components-react';

const Select = ({ field_id, field_label, field_placeholder, field_value, field_options}) => {
  const { handleChange } = useContext(FormContext);
  return (
    <>
      <GcdsSelect
        selectId={field_id}
        label={field_label}
        defaultValue={field_placeholder}
        changeHandler={e => handleChange(field_id, e)}
      >
        {field_options.length > 0 && field_options.map((option, i) => 
            <option value={option.option_label} key={i}>{option.option_label}</option>
        )} 
      </GcdsSelect>
    </>
  )
}

export default Select;