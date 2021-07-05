import React from 'react';
import { Spinner } from 'react-bootstrap';

export const Loader = () => (
  <div className="mx-auto pt-2" style={{ width: 40 }}>
    <Spinner animation="border" role="status" />
  </div>
);

export default Loader;
