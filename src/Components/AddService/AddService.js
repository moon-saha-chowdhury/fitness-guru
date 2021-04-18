import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [imageURL, setImageURL]=useState(null);

    const onSubmit = data => {

        const eventData ={
            serviceName: data.name,
            price: data.price,
            serviceTime: data.time,
            imageURL: imageURL
        }

        const newData ={...eventData}
        console.log(newData);

        const url ='https://afternoon-refuge-27445.herokuapp.com/addService'
        fetch(url,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(newData)

        })
        
        .then(res =>res.json())
        .then(data =>{
            if(data){
                alert("New service added successfully");
            }
        })
    };


    const handleImageUpload = event =>{
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '41e3a6f6e2397415ef717e6b33358ed6');
        imageData.append('image',event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload',imageData)
        .then(function (response) {
            setImageURL(response.data.data.display_url);
        })
        .catch(function (error) {
          console.log(error);
        });

    }


    return (
        <section className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 ps-5" style={{ position: "absolute", right: 0, backgroundColor:"#222125be" }}>
            <h5 className="text-warning">Add a New Service</h5>
            <form  onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label className="text-white pb-2" htmlFor="exampleInputName1">Service Name</label>
                        <input type="text" className="form-control" name="name" placeholder="Service Name" {...register("name")}/>
                    </div>
                    <div className="form-group">
                        <label className="text-white pb-2" htmlFor="exampleInputPrice1">Price</label>
                        <input type="text" className="form-control" name="price" placeholder="Service Charge"{...register("price")} />
                    </div>
                    <div className="form-group">
                        <label className="text-white pb-2" htmlFor="exampleInputTime1">Time</label>
                        <input type="text" className="form-control" name="time" placeholder="Service Time"{...register("time")} />
                    </div>
                    <div className="form-group">
                        <label className="text-white pb-2" htmlFor="exampleInputFile1">Upload a image</label>
                        <input onChange={handleImageUpload} type="file" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-warning text-dark mt-3">Submit</button>
                </form>

            </div>

        </section>
    );
};

export default AddService;