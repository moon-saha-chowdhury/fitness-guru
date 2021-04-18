import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Service = () => {
    const [service, setService]=useState([])

    useEffect(()=>{
        fetch('https://afternoon-refuge-27445.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
       <section className="services-container mt-5">
            <div className="text-center">
            <h5>OUR SERVICES</h5>
            <h2 className="text-warning">Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
           <div className="w-100 row mt-5 p-5 ms-5 me-5">
           {
                service.map(service =>
                     <div className="col"><ServiceDetails service={service} key={service._id} ></ServiceDetails>
                     
                     </div>)
            }
           </div>
        </div>

       </section>
    );
};

export default Service;