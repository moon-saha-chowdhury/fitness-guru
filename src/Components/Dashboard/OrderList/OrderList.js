import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    const[orders, setOrders]=useState([]);
    const[loggedInUser, setLoggedInUser]=useContext(UserContext);
    
    useEffect(()=>{
        fetch('https://afternoon-refuge-27445.herokuapp.com/orders?email='+ loggedInUser.email)
        .then(res=>res.json())
        .then(data => setOrders(data))
    },[])
    return (
        <section className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10 row row-cols-md-3 g-4 card-container p-4 ps-5"style={{ position: "absolute", right: 0 }}>
                {
                    orders.map(order => <div className="col">
                        <div className="card h-100 shadow rounded m-3" style={{backgroundColor:"#222125be"}}>
                        <div className="card-body  ml-auto mr-auto">
                         <h3 className="text-warning">Order Details</h3>
                        <h5 className="text-white">{order.name}</h5>
                        <p className="text-white">Ordered Service: {order.serviceName}</p>
                        <p className="text-white">Service Cost: {order.price}$</p>
                        <p className="text-white">Order Date: {order.orderTime}</p>
                            </div>
                        </div>
                    </div>)
                }

            </div>

        </section>
    );
};

export default OrderList;