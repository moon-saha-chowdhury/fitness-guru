import React from 'react';

const TeamDetail = ({team}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height:"250px", width:"500px"}} className="img-fluid mb-3" src={team.authorImg} alt=""/>

            
            <h4 className="text-warning">{team.author}</h4>
            <p className="text-dark fw-bold">Trainer of: {team.description}</p>
        </div>
    );
};

export default TeamDetail;