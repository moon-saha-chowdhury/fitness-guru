import React from 'react';
import Gym from '../../../Images/gym.jpg';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className=" d-flex align-items-center overflow-auto">
            <div className="col-md-4 offset-md-1">
                <h1 className="text-warning">Your New Journey <br/> Starts Here</h1>
                <p className="text-white">We are here, to provide you a best guideline on how to be fit and lead a healthy lifestyle. So, Let's start from today</p>
                <button className="btn btn-warning text-dark">GET APPOINTMENT</button>

            </div>
            <div className="col-md-6">
                <img src={Gym} alt="" className="img-fluid"/>
            </div>

        </main>
    );
};

export default HeaderMain;