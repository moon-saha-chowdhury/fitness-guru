import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';
import {UserContext} from '../../../App';

const AddReview = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const[loggedInUser, setLoggedInUser]= useContext(UserContext);
    const onSubmit = data =>{
        const reviewData ={
            description:data.description,
            ...loggedInUser
        }
        const url ='https://afternoon-refuge-27445.herokuapp.com/addReview'
        fetch(url,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(reviewData)
        })
        .then(res=>res.json())
        .then(data =>{
            if(data){
                alert("Your review submitted successfully")
            }
        })
    };

    return (
        <section className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 ps-5" style={{ position: "absolute", right: 0, backgroundColor:"#222125be" }}>
            <h5 className="text-warning">Add a Review</h5>
            <form  onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                        <label className="text-white pb-2" htmlFor="exampleInputName1">Your Name</label>
                        <input type="text" className="form-control" name="name" defaultValue={loggedInUser.name} {...register("name")}/>
                    </div>
                    <div className="form-group">
                        <label className="text-white pb-2" htmlFor="exampleInputPrice1">Description</label>
                        <textarea cols="10" rows="5" className="form-control" name="description" placeholder="Description"{...register("description")} />
                    </div>
                    <button type="submit" className="btn btn-warning text-dark mt-3">Submit</button>
                 </form>
            </div>
        </section>
    );
};

export default AddReview;