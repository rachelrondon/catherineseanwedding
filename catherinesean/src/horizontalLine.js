import React from 'react';

const HorizontalLine = ({ color }) => {

  return (
    <hr
      style={{
        color: color,
        backgroundColor: color,
      }}
    />
  );

}

export default HorizontalLine;
