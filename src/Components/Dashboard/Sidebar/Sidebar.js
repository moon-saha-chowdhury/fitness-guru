import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faSignOutAlt, faPlusSquare, faHome, faGripHorizontal, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';


const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(()=>{
        fetch('https://afternoon-refuge-27445.herokuapp.com/isAdmin',{
            method: 'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    },[])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
        <ul className="list-unstyled">
            <li>
                <Link to="/dashboard" className="text-dark">
                    <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                </Link>
            </li>
            <li>
                <Link to="/" className="text-dark">
                    <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                </Link>
            </li>
             {isAdmin &&<div>
                <li>
                    <Link to="/addService" className="text-dark">
                        <FontAwesomeIcon icon={faPlusSquare} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/allOrders" className="text-dark">
                        <FontAwesomeIcon icon={faList} /> <span>All Bookings</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageServices" className="text-dark">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Manage Services</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addAdmin" className="text-dark" >
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make an Admin</span>
                    </Link>
                </li>
                </div>


             }
               {
                   !isAdmin && <div>
                        <li>
                    <Link to="/service/:serviceId" className="text-dark" >
                        <FontAwesomeIcon icon={faList} /> <span>Book</span>
                    </Link>
                </li>
                <li>
                    <Link to="/orderList" className="text-dark" >
                        <FontAwesomeIcon icon={faList} /> <span>Booking List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addReview" className="text-dark" >
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Add Review</span>
                    </Link>
                </li>
                   </div>
               }
        </ul>
        <div>
            <Link to="/" className="text-dark"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
        </div>
    </div>
    );
};

export default Sidebar;