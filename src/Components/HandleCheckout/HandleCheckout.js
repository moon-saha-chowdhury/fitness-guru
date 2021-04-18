import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import ProcessPayment from '../ProcessPayment/ProcessPayment/ProcessPayment';

const HandleCheckout = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://afternoon-refuge-27445.herokuapp.com/service/' + serviceId)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId])



    return (
        <section className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 ps-5" style={{ position: "absolute", right: 0 }}>
                <h2 className="text-warning">Confirm Your Booking</h2>
                <table  className="table w-75 ml-auto mr-auto mb-5">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Service Name  </th>
                            <th scope="col">Your Name</th>
                            <th scope="col">Your Email</th>


                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{service.serviceName}</td>
                            <td>{loggedInUser.name}</td>
                            <td>{loggedInUser.email}</td>
                        </tr>
                    </tbody>
                </table>
                <p className="fw-bold">Your Service Charge Will be {service.price}$</p>

                <ProcessPayment service={service}></ProcessPayment>
            </div>
    

        </section>
    );
};

export default HandleCheckout;