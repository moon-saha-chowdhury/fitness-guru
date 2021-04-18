import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AllOrders = () => {
    const [allOrders, setAllOrders]=useState([])

    useEffect(()=>{
        fetch('https://afternoon-refuge-27445.herokuapp.com/allOrders')
        .then(res => res.json())
        .then(data => setAllOrders(data))
    },[])
    return (
        <section className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 ps-5 overflow-hidden"style={{ position: "absolute", right: 0 }}>
                <h3 className="text-warning">All Orders</h3>

                <div className="row row-cols-md-3 g-4 card-container ">
                {
                    allOrders.map(order => <div className="col">
                        <div className="card h-100 shadow rounded m-3" style={{backgroundColor:"#222125be"}}>
                        <div className="card-body  ml-auto mr-auto">
                        <h5 className="text-warning">{order.name}</h5>
                        <p className="text-white">{order.email}</p>
                        <p className="text-white">Ordered Service: {order.serviceName}</p>
                        <p className="text-white">Service Cost: {order.price}$</p>
                        <p className="text-white">Order Date: {order.orderTime}</p>
                            </div>
                        </div>
                    </div>)
                }
                </div>

            </div>

        </section>
    );
};

export default AllOrders;