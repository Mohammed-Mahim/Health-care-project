
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container">
            <img width="100%" src="https://image.freepik.com/free-vector/404-error-design-with-roadworks_23-2147735305.jpg" alt="" />
            <div className="text-center mt-5">
            <Link to="/home"><button className="btn btn-danger">Go to Home</button></Link>
            </div>
        </div>
    );
};

export default NotFound;