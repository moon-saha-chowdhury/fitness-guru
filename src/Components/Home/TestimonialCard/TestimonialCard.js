import React from 'react';

const TestimonialCard = ({testimonial}) => {
    return (
        <div className="card shadow-sm">
            <div className="card-header d-flex  align-items-center">
            <img className="mx-3" src={testimonial.photo} alt="" width="60"/>
            <div>
                <h6 className="text-warning fw-bold">{testimonial.name}</h6>
            </div>
        </div>
        <div className="card-body">
            <p className="card-text text-secondary text-center">{testimonial.description}</p>
        </div>
        
   </div>
    );
};

export default TestimonialCard;