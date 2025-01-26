import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Swal from 'sweetalert2';

const UpdateEquipment = () => {



    
    const { _id, name, email, itemname, categoryName, price, Rating, customizations, deliverytime, Image, ProductQuentity, description, } = useLoaderData();

    const { selectedTutor, setSelectedTutor, user } = useContext(AuthContext);


    // {
    //     "_id": "679333f079b68f083817e352",
    //     "name": "Ashik Mia",
    //     "email": "ashikmia5686@gmail.com",
    //     "itemname": "Foot Ball",
    //     "categoryName": "Sprts",
    //     "price": "101",
    //     "Rating": "4",
    //     "customizations": "10",
    //     "deliverytime": "2 Days",
    //     "Image": "https://i.ibb.co.com/x5xzZBJ/itms4.jpg",
    //     "ProductQuentity": "39",
    //     "description": " is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-le"
    //   },


    
    const handleUpdateCardData = e => {
        e.preventDefault();
        // console.log('Update a new tutor')

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const itemname = form.itemname.value;
        const categoryName = form.categoryName.value;
        const price = form.price.value;
        const Rating = form.Rating.value;
        const customization = form.customization.value;
        const deliverytime = form.deliverytime.value;
        const Image = form.Image.value;
        const ProductQuentity = form.ProductQuentity.value;
        const description = form.description.value;
        

        // console.log( language, country, description, price, image);
        const UpdateComponentData = {
            
            name,
            email,
            itemname,
            categoryName,
            price,
            Rating,
            customization,
            deliverytime,
            Image,
            ProductQuentity,
            description
            
        };

        
        fetch(`https://star-sport-assingment-server.onrender.com/cards/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateComponentData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your equepment has been sussessfull updated",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
    }



    return (
        <div>
            <div className='my-20'>

                <div>
                    <h2 className="text-3xl uppercase">Update compnent</h2>
                    <form onSubmit={handleUpdateCardData} className="card-body">
                        <div>
                            {/* user Name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" name='name' defaultValue={name} disabled placeholder="Name" className="input input-bordered" required />
                            </div>
                            {/* User Emamil */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Email</span>
                                </label>
                                <input type="text" name='email' defaultValue={email} disabled placeholder="Email" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* item name and item category */}
                        <div className=' grid md:grid-cols-2 gap-5'>
                            {/* Item Name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Item Name</span>
                                </label>
                                <input type="text" name='itemname' defaultValue={itemname} placeholder="Item Name" className="input input-bordered" required />
                            </div>
                            {/* Category Name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category Name</span>
                                </label>
                                <input type="text" name='categoryName' defaultValue={categoryName} placeholder="Category Name" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* item price and reating */}
                        <div className=' grid md:grid-cols-2 gap-5'>
                            {/* Item Price */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Item Pirce</span>
                                </label>
                                <input type="number" name='price' defaultValue={price} placeholder="Price" className="input input-bordered" required />
                            </div>
                            {/* Item Reting */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="number" name='Rating' defaultValue={Rating} placeholder="Rating" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* Customizetion  and Processing  time*/}
                        <div className=' grid md:grid-cols-2 gap-5'>
                            {/* Customizetion */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Customization </span>
                                </label>
                                <input type="text" name='customization' defaultValue={customizations} placeholder="Customization " className="input input-bordered" required />
                            </div>
                            {/* Processing time */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Delivery time</span>
                                </label>
                                <input type="text" name='deliverytime' defaultValue={deliverytime} placeholder="delivery" className="input input-bordered" required />
                            </div>
                        </div>
                        {/*Descrption*/}

                        {/* Image  and Availale Stock product contenty */}
                        <div className=' grid md:grid-cols-2 gap-5'>
                            {/* Image */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image </span>
                                </label>
                                <input type="url" name='Image' defaultValue={Image} placeholder="Image Url " className="input input-bordered" required />
                            </div>
                            {/* Availale Stock product contenty */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Total Product</span>
                                </label>
                                <input type="number" name='ProductQuentity' defaultValue={ProductQuentity} placeholder="Total Product Quentity" className="input input-bordered" required />
                            </div>
                        </div>
                        {/*Descrption*/}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Descrption</span>
                            </label>
                            <textarea className="textarea textarea-bordered" name='description' defaultValue={description} placeholder="Descrption"></textarea>
                        </div>

                        {/* submit button */}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateEquipment;