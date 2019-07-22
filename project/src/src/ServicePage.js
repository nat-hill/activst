import React from 'react';
import Service from './Service';
import services from './Services';

const ServicePage = () => {
  console.log(services);
  const serviceComponents = services.map(s =>(
    <Service fname = {s.fname} lname = {s.lname} service = {s.service}/>
  ));
  return(
    <div>
      <p>Here's a list of services</p>
      {serviceComponents}
    </div>

  );
}

export default ServicePage;
