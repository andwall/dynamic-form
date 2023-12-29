import React from 'react';
import { GcdsDetails } from '@cdssnc/gcds-components-react';
import Element from './Element';

const Section = ({ section: { name, fields }}) => {
  return (
    <GcdsDetails detailsTitle={ name }>
      {fields ? fields.map((field, i) => <Element key={i} field={field}/>) : null}
    </GcdsDetails>
  )
}

export default Section