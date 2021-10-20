import React from 'react';


const Banner = () => {

    return (
        <div className="container" id="home">
            <div className="row py-5">
                <div className="col-md-6 px-5 py-5">
                    <p className="text-muted text-bolder">Licensed Therapist</p>
                    <h1>Express In <br /> Mental Health.</h1>
                 <div className="my-3">
                 <button className="btn btn-outline-info me-4">Consulation</button>
                    <button className="btn btn-outline-success ">About Me</button>
                 </div>
                </div>
                <div className="col-md-6 p-3 ">
                    <img className="img-fluid rounded" src="https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg" alt="" />
                </div>
            </div>

            <div className="row my-2">
                
                <div className="col-md-6 p-3 ">
                    <img className="img-fluid rounded" src="https://matar-elementor.42theme.com/wp-content/uploads/2020/05/psychologist-having-session-with-her-patient-in-of-574LMR3-1024x683.jpg" alt="" />
                </div>
                <div className="col-md-6 px-5 py-5">
                    <h1 className="">We are Ready to Help Improve Your Treatment.</h1>
                    <p className="text-muted text-bold mb-5">Getting care can feel daunting, especially if you’ve been disappointed by past efforts. That’s why Heading is expanding access to effective new treatments like Transcranial Magnetic Stimulation (TMS) .</p>
                 <div className="my-5">
                 <button className="btn btn-outline-info ">Read more...</button>
                    
                 </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
