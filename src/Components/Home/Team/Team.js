import React from 'react';
import gymTrainer from '../../../Images/trainergym.png';
import yogaTrainer from '../../../Images/yoga.png';
import swimTrainer from '../../../Images/swim.png';
import TeamDetail from '../TeamDetail/TeamDetail';
const teamData = [
    {
        description : 'Yoga',
        author:'Ema Watson',
        authorImg : yogaTrainer,
    },
    {
        description : 'Swimming',
        author:'John Smith',
        authorImg : swimTrainer,
    },
    {
        description : 'Gym',
        author:'Adom Aldrin',
        authorImg : gymTrainer,
    },
]

const Team = () => {
    return (
        <div>
             <section className="blogs my-5">
           <div className="container">
               <div className="section-header text-center">
                    <h1 className="text-warning">Our Team</h1>
               </div>
               <div className="row mt-5">
                    {
                        teamData.map(team => 
                        <TeamDetail team={team} key={team.author}/>)
                    }
               </div>
           </div>
       </section>
        </div>
    );
};

export default Team;