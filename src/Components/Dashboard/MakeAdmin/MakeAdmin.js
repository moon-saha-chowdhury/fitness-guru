import React from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const newData ={
            email:data.email
        }
        const url ='https://afternoon-refuge-27445.herokuapp.com/addAdmin'
        fetch(url,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(newData)
        })
        .then(res=>res.json())
        .then(data =>{
            if(data){
                alert("Email added successfully")
            }
        })
    }

    return (
       <section className="row">
           <Sidebar></Sidebar>
           <div className="col-md-10 p-4 ps-5" style={{ position: "absolute", right: 0, backgroundColor:"#222125be" }}>
            <h5 className="text-warning">Add a Review</h5>
            <form  onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                        <label className="text-white pb-2" htmlFor="exampleInputName1">Add Email</label>
                        <input type="text" className="form-control" name="email" placeholder="Email Address" {...register("email")}/>
                    </div>
                    <button type="submit" className="btn btn-warning text-dark mt-3">Submit</button>
                    </form>
                    </div>
       </section>
    );
};

export default MakeAdmin;