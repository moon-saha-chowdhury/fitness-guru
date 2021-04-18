import React, { useEffect, useState } from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './Testimonial.css'

const Testimonial = () => {
    const[testimonialData, setTestimonialData] =useState([]);

    useEffect(()=>{
        fetch('https://afternoon-refuge-27445.herokuapp.com/allReviews')
        .then(res=>res.json())
        .then(data => setTestimonialData(data))
    },[])
    return (
        <div>
        <section className="testimonials my-5 py-5">
      <div className="container">
          <div className="section-header">
              <h5 style={{color:"#1CC7C1"}} className="text-uppercase text-warning">Testimonial</h5>
              <h1>What Our Client <br/> Says </h1>
          </div>
          <div className="card-deck row mt-5">
               {
                   testimonialData.map(testimonial => 
                   <div className="col-md-4"><TestimonialCard testimonial={testimonial} key={testimonial.name}/></div>)
               }
           </div>
      </div>
  </section>
       
   </div>
    );
};

export default Testimonial;