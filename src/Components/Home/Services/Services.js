import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [items, setItems] = useState([])
     useEffect( () => {
        fetch('./tools.JSON')
        .then(res => res.json())
        .then(data => setItems(data))
     },[])
    return (
        <div className="container"> 
        <div className="row" id="services">
            <div className="col-md-12">
            <h1 className="text-center text-success">Our Services </h1>
        
            <div className="text-center">
            <p className="text-lighter text-danger">What We Offer</p>
            <h3>Psychological  Service</h3>
            <p className="text-muted">We shouldn’t teach great books; we should teach a love of reading. Knowing the contents of a few works <br /> of literature is a trivial achievement. Being inclined to go on reading is a great achievement.</p>
            </div>
            </div>
        </div>
        
        <div className=" service ">
            {
           items.map(service => <Service
           key = {service.id}
           service ={service}
           ></Service>)
        }
        </div>
      

        </div>
       
        
    );
};

export default Services;