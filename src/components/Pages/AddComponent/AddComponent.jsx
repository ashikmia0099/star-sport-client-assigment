import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Swal from 'sweetalert2';

const AddComponent = () => {

    const { SignUpUser, updateUserProfile, SignOutUser,setError, SignInUser,signInwithGoogle,user, setUser } = useContext(AuthContext);
    



    const handleAddCartData = e => {
        e.preventDefault();
        
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const itemname = form.itemname.value;
        const categoryName = form.categoryName.value;
        const price = form.price.value;
        const Rating = form.Rating.value;
        const customizations = form.customizations.value;
        const deliverytime = form.deliverytime.value;
        const Image = form.Image.value;
        const ProductQuentity = form.ProductQuentity.value;
        const description = form.description.value;


        // console.log(name, email, itemname, categoryName, price, Rating, customizations, deliverytime, Image, ProductQuentity, description,)


        const newCardData = {
            name,
            email,
            itemname,
            categoryName,
            price,
            Rating,
            customizations,
            deliverytime,
            Image,
            ProductQuentity,
            description,

        };


        fetch('https://star-sport-assingment-server.onrender.com/cards', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCardData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "New Equpment Post Successfull",
                        icon: "success",
                        draggable: true
                    });
                }
            })
    }


    return (
        <div className='my-20'>

            <div>
                <h2 className="text-3xl uppercase">add compnent</h2>
                <form onSubmit={handleAddCartData} className="card-body">
                    <div>
                        {/* user Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" name='name' disabled defaultValue={user.displayName} placeholder="Name" className="input input-bordered" required />
                        </div>
                        {/* User Emamil */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="text" name='email' disabled defaultValue={user.email} placeholder="Email" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* item name and item category */}
                    <div className=' grid md:grid-cols-2 gap-5'>
                        {/* Item Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Item Name</span>
                            </label>
                            <input type="text" name='itemname' placeholder="Item Name" className="input input-bordered" required />
                        </div>
                        {/* Category Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category Name</span>
                            </label>
                            <input type="text" name='categoryName' placeholder="Category Name" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* item price and reating */}
                    <div className=' grid md:grid-cols-2 gap-5'>
                        {/* Item Price */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Item Pirce</span>
                            </label>
                            <input type="number" name='price' placeholder="Price" className="input input-bordered" required />
                        </div>
                        {/* Item Reting */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" name='Rating' placeholder="Rating" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* Customizetion  and Processing  time*/}
                    <div className=' grid md:grid-cols-2 gap-5'>
                        {/* Customizetion */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Customization </span>
                            </label>
                            <input type="text" name='customizations' placeholder="Customization " className="input input-bordered" required />
                        </div>
                        {/* Processing time */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Delivery time</span>
                            </label>
                            <input type="text" name='deliverytime' placeholder="delivery" className="input input-bordered" required />
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
                            <input type="url" name='Image' placeholder="Image Url " className="input input-bordered" required />
                        </div>
                        {/* Availale Stock product contenty */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Total Product</span>
                            </label>
                            <input type="number" name='ProductQuentity' placeholder="Total Product Quentity" className="input input-bordered" required />
                        </div>
                    </div>
                    {/*Descrption*/}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Descrption </span>
                        </label>
                        <textarea name='description' className="textarea textarea-bordered" placeholder="Descrption"></textarea>
                    </div>

                    {/* submit button */}
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddComponent;