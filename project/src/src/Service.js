import React from 'react';

const Service = (props) => {
  return(
    <div>
      <p>{props.fname} {props.lname} : {props.service}</p>
    </div>
  );
}

export default Service;
