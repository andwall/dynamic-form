import React from 'react';
import { GcdsDetails } from '@cdssnc/gcds-components-react';
import Element from './Element';

const Section = ({section}) => {
  return (
    <GcdsDetails style={{padding: "15px"}} detailsTitle={ section.name }>
      {section.fields ? section.fields.map((field, i) => <Element key={i} field={field}/>) : null}
    </GcdsDetails>
  )
}

export default Section