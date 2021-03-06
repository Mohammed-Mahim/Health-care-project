
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const Detail = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState([]);
    const [filtered, setFiltered] = useState({});
    // load service data

    useEffect(()=>{
        fetch('/tools.JSON')
        .then(res=> res.json())
        .then(data=>setService(data));
    },[])
    // find specific service via id
    useEffect(()=>{
        setFiltered(service.find(item => item.id === serviceId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[service]);

    return (
        <div className="service__container text-center container py-3 ">
            <div className="row">
                <div className="col-md-12">
                <div className="service__img">
                <img className="img-fluid w-50 rounded" src={filtered?.img} alt="" />
            </div>
            <h1>{filtered?.name}</h1>
            <p>{filtered?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Detail;