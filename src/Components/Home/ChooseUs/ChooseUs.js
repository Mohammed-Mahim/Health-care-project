import React from 'react';
import "./ChooseUs.css";

const ChooseUs = () => {
    return (
        
        <div className="py-5  mt-5 choose__us mt-2 grid md:grid-cols-2 sm:grid-cols-1 row" id="choose-us">
            <h1 className="text-success text-center py-2">Why Choose Us.</h1>
            <div className="col-md-6 py-5 mt-5">
                <img className="img-fluid" src="https://polpress.smartdemowp.com/wp-content/uploads/2021/08/chooseus-2.jpg" alt="" />
            </div>
            <div className="choose__us__container col-md-6 mt-4">
                <div>
                    
                    <h1>We Always Provide The Best <br /> Services</h1>
                    <h5>To be a renowned organization at the leading edge of Medicine, <br /> providing quality healthcare to meet our nation's aspirations.</h5>
                </div>
                <div className="grid gap-8 md:grid-cols-2 sm:grid-cols-1 ml-8">
                    <div>
                        <h2>Qualified Doctors</h2>
                        <p>SQUARE Hospital aims to provide the highest possible level of care by the qualified consultants from India, Singapore, USA, UK quality hospitals in the Middle East. </p>
                    </div>
                    <div>
                        <h2>Emergency Departments</h2>
                        <p>Emergency department became commonly used when emergency medicine was recognized as a medical specialty, and hospitals and medical centres developed departments.</p>
                    </div>
                    <div>
                        <h2>Excellent Services</h2>
                        <p>Clinical excellence must be the priority for any health care service provider. SQUARE Hospital ensures the best healthcare service comprise of professional.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;