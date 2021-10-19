import React from 'react';

const Service = ({service}) => {
    const { name, description, img} = service;
    console.log(service);
    return (
        
    <div className="">
         <div className="row">
             <div className="">
             <img className="img-fluid hover rounded" src={img} alt="" />
            <h3 className="py-3">  {name}</h3>
            <p className="text-muted">{description}</p>

          <button className="btn btn-outline-info px-5 m-auto">Detail </button>
        </div>
             </div>
         </div>
         
    );
};

export default Service;