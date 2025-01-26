import React, { useContext, useEffect } from 'react';

import img1 from '../../../assets/images/download2.jpg'
import { IoPersonCircleSharp } from 'react-icons/io5';
import { SiMaterialdesignicons } from 'react-icons/si';
import { FaAcquisitionsIncorporated } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { MdOutlineSubtitles } from 'react-icons/md';
import { BiSolidCategory } from 'react-icons/bi';
import { CiDeliveryTruck } from 'react-icons/ci';
import Swal from 'sweetalert2';

const MyEquipment = () => {


    const { user, setUser, mycomponent, setmycomponent } = useContext(AuthContext);

    const { _id, name, email, itemname, categoryName, price, Rating, customizations, deliverytime, Image, ProductQuentity, description, } = mycomponent;



    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/cards?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => setmycomponent(data))
            // .catch((error) => console.error("Error fetching data:", error));
        }
    }, [user?.email]);



    const handleDelete = _id => {
        console.log(_id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/cards/${_id}`, {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify()
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: `${itemname} has been successfully deleted.`,
                                icon: "success"
                            });
                            const remaining = mycomponent.filter(component => component._id !== _id);
                            setmycomponent(remaining);
                        }
                    })
            }
        });
    }






    return (
        <div className=' my-16'>
            <h1 className='text-4xl font-bold uppercase my-10'>My Added all Equepment</h1>
            <div className='grid grid-cols-3'>
                {
                    mycomponent.map(component =>

                        <div key={component._id} className=" rounded-xl bg-slate-800 p-0  shadow-xl mt-5 mx-3 text-white">


                            <img className='w-full rounded-t-xl h-60' src={component.Image} alt="Shoes" />


                            <div className="card-body px-4 py-3">
                                <h2 className="text-xl gap-3 font-bold flex text-left items-center "> <span className='text-2xl'><MdOutlineSubtitles /></span>{component.itemname}</h2>
                                <h2 className="text-lg gap-3 font-semibold flex text-left items-center "> <span className='text-lg'><BiSolidCategory /></span> {component.categoryName} </h2>
                                <div className="grid grid-cols-2">
                                    <div>
                                        <h2 className="text-lg gap-3 font-semibold flex text-left items-center "> <span className='text-lg'><CiDeliveryTruck /></span> {component.deliverytime} </h2>
                                    </div>
                                    <div>
                                        <h2 className="text-lg gap-3 font-semibold flex text-left items-center "> <span className='text-lg'><FaAcquisitionsIncorporated /></span> {component.ProductQuentity} Availavle</h2>
                                    </div>
                                </div>


                                <h3 className="text-left">
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input
                                            type="radio"
                                            name="rating-2"
                                            className="mask mask-star-2 bg-orange-400"
                                            defaultChecked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>

                                </h3>


                                <div className='grid grid-cols-2'>
                                    <button onClick={() => handleDelete(component._id)} className="btn border-t-neutral-800 px-10 text-lg font-bold" > Delete </button>
                                    <Link to={`/updateComponent/${component._id}`}><button className="btn border-t-neutral-800 px-10 text-lg font-bold">Update</button></Link>
                                </div>
                            </div>
                        </div>)
                }



            </div>

        </div>
    );
};

export default MyEquipment;