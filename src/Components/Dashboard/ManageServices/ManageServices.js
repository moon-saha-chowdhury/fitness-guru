import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const ManageServices = () => {
    const[services, setServices] = useState([]);

    useEffect(()=>{
        fetch('https://afternoon-refuge-27445.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    const deleteService = (id) =>{
        console.log(id);
        fetch('https://afternoon-refuge-27445.herokuapp.com/delete/'+ id,{
            method:'DELETE',
        })
        .then(res => res.json())
        .then(result =>{
           console.log(result);
        })

    }

    
    return (
        <section className="row">
            <Sidebar></Sidebar>
        <div className="col-md-10 p-4 ps-5 overflow-hidden"style={{ position: "absolute", right: 0 }}>

        <h4 className="text-light text-center p-3 w-25 bg-success text-wrap mt-3 ml-auto mr-auto">Available Services</h4>
        <div className="text-center">
        <table className="table table-bordered  w-75 ml-auto mr-auto mb-5">
        <thead>
                            <tr>
                                <th scope="col">Available Services</th>
                                <th scope="col">Price</th>
                                <th scope="col">Time Limit</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>

            {
                services.map(service =>
                       
                        <tbody>
                            <tr>
                                <td>{service.serviceName}</td>
                                <td>{service.price}</td>
                                <td>{service.serviceTime} days</td>
                                <td><button onClick={()=>deleteService(service._id)} className="btn btn-danger text-light">Delete</button></td>
                            </tr>

                        </tbody>
                )
            }
      </table>

        </div>
    </div>
    </section>
    );
};

export default ManageServices;