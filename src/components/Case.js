import React from 'react';
import { GcdsContainer } from '@cdssnc/gcds-components-react';

const Case = ({ searchResults:{ _id, v_number, status, report_type, impact_case } }) => {

  return (
    <>
      <h2>Results</h2>
      <h3>V number: { v_number }</h3>
      <p>Status: { status }</p> 
      <p>Report Type: { report_type }</p>
      <p>Impact Case: { impact_case ? "Yes" : "No" }</p>
    </>
  )
}

export default Case