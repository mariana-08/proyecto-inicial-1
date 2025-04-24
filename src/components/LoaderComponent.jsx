import React from 'react'
import { Spinner } from 'react-bootstrap';
//import {PacmanLoader} from "react-spinners/PacmanLoader"; // importamos el loader de react-spinners

const LoaderComponent = () => {
  return (
    <div style={{width: '100%', height: '75vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      {/* <PacmanLoader color="yellow" size={50} aria-label="Loading Spinner" data-testid="loader" /> */}
      <Spinner animation="border" variant="secondary" />
    </div>
  )
}

export default LoaderComponent
