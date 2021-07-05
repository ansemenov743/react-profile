import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

export const Message = ({ text, type }) => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant={type} onClose={() => setShow(false)} dismissible>
        {text}
      </Alert>
    );
  }

  return null;
};
