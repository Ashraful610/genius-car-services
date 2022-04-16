import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id, name,img,price,description} = service
    const nevigate = useNavigate()

    const handleServiceNevigateId = id => {
            nevigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} className='w-100' alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
            <p>{description}</p>
            <button onClick={() => handleServiceNevigateId (id)}>Book : {name}</button>
        </div>
    );
};

export default Service;