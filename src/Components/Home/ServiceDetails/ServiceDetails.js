import React from 'react';
import { useHistory } from 'react-router';
import { useSpring, animated } from 'react-spring'
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const ServiceDetails = ({service}) => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    const history = useHistory()

    const handleDestination = serviceId =>{
        const url =`/service/${serviceId}`;
        history.push(url);
    }

    return (
        <div className="col-md-4 text-center">
            <animated.div className="card "
             onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
             onMouseLeave={() => set({ xys: [0, 0, 1] })}
             style={{ transform: props.xys.interpolate(trans) }}
            >
                <div>
                <img style={{height:"200px"}} src={service.imageURL} alt="" />      

                </div>
        </animated.div>
        <div className="mb-3">
        <h2 className="mt-3 text-warning mb-3">{service.serviceName}</h2>
            <h5 className="mt-3 mb-3">Charge: {service.price}$</h5>
            <p className="text-secondary">Time: {service.serviceTime} Days</p>
            <button onClick={()=>handleDestination(service._id)} className="btn btn-warning fw-bold">Book Now</button>
        </div>
        </div>
    );
};

export default ServiceDetails;