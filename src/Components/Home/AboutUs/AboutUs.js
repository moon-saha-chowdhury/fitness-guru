import React from 'react';
import About from '../../../Images/about.jpg';

const AboutUs = () => {
    return (
        <section className="featured-service p-5 pb-md-5  my-5">
        <div className="container mt-5">
            <div className="row mt-5 ">
            <div className="col-md-7 align-self-center">
                    <h1 className="text-warning">Why Choose Us?</h1>
                    <p className="text-dark my-3">We are always ready to 
                    provide our best services. If you are thinking about your fitness and want to lead a healthiest lifestyle then you are in right place.
                    You can choose us because we have </p>

                    <ul>
                        <li>Indoor Cycling</li>
                        <li>Swimming</li>
                        <li>Well Gym</li>
                        <li>Special Yoga Class</li>
                    </ul>
                    <p>and so on. Because your satisfaction is our achievement</p>
                    <button className="btn btn-warning text-dark">Learn More</button>
                </div>
                <div className="col-md-5 mb-5 m-md-0">
                    <img className="img-fluid" src={About} alt="" />

                </div>
               
            </div>

        </div>

    </section>
    );
};

export default AboutUs;