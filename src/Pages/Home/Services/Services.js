import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services , setServices] = useState([])

    useEffect(()=> {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='services container mt-5'>
              <h2 className='services-title'>Out Services</h2>
              <div className="services-container mt-5">
                 {
                  services.map(service => <Service
                     key={service.id}
                     service={service}
                  ></Service>)
                 }
              </div>
           
        </div>
    );
};

export default Services;