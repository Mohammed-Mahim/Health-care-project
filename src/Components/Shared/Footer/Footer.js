import React from 'react';

const Footer = () => {
    return (
    <div className="container-fluid bg-dark my-5 mb-0">
        <div className="text-center row border-bottom p-3">
            <div className="col-md-8 p-3">
            <p class=" p-2 text-white"> This website uses cookies to ensure you get the best experience on our website. <a href="#">Cookies Policy</a>  </p>
            </div>
            <div className="col-md-4 text-white py-2 text-white ">
            <a href="#">Privacy Policy</a><br />
            <a href="#">Terms of Use</a><br />
            <a href="#">Copyright</a>
        
                
            </div>
        </div>
        <div className="col-md text-center">
            <p class=" p-2 text-white"> &copy; All Right Reserved by-Ah Mahim </p>
            </div>
    </div>
       
    );
};

export default Footer;