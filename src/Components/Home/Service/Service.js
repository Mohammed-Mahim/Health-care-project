import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const { name, description, img, id} = service;
    // console.log(service);
    return (
        
    <div >
         <div className="row">
             <div className="">
             <img className="img-fluid hover rounded" src={img} alt="" />
            <h3 className="py-3">  {name}</h3>
            <p className="text-muted">{description}</p>

            <Link to={`/service/${id}`}>
                <button className="btn btn-outline-info px-5 m-auto" > Detail</button>
            </Link>
          
        </div>
             </div>
         </div>
         
    );
};

export default Service;