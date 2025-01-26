import React, { useContext } from 'react';
import { FaAcquisitionsIncorporated, FaDollarSign } from 'react-icons/fa';
import { IoLocationSharp, IoPersonCircleSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

import cardimg from '../../../assets/bannerimg/banner1.jpg'
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { BiSolidCategory } from 'react-icons/bi';
import { CiDeliveryTruck } from 'react-icons/ci';


const Details = () => {



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


    return (
        <div>

            <div className='grid lg:grid-cols-2  my-10'>
                <div>
                    <img src={Image} className='rounded-xl w-full h-full' alt="" />
                </div>

                <div className='text-left px-7 space-y-2 items-center justify-center pt-5'>
                    <h2 className='text-4xl font-bold'> {itemname}</h2>
                    <div className='flex items-center gap-10'>
                        <h4 className='flex items-center text-2xl font-semibold gap-2'> <span><BiSolidCategory /></span > <span className='text-2xl '> {categoryName}</span></h4>
                        <h4 className='flex items-center text-xl font-semibold gap-2'> <span><CiDeliveryTruck className='text-2xl' /></span > <span className='text-lg '>{deliverytime} days</span></h4>
                    </div>
                    <h4 className='flex items-center text-xl font-semibold gap-2'> <span><FaAcquisitionsIncorporated /></span > <span className='text-lg '> {ProductQuentity} Availale</span></h4>
                    <h4 className='flex items-center text-2xl font-semibold gap-2'> <span><FaDollarSign /></span > <span className='text-2xl '>{price}</span></h4>
                    <div className=' flex items-center gap-5'>
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
                        <div>
                            <h1 className='text-2xl font-semibold'>{Rating} out of 5</h1>
                        </div>
                    </div>

                    <div>
                        <button className='btn w-full mt-5 text-xl font-bold bg-red-500 text-white hover:bg-red-500'>Add Component</button>

                    </div>

                    <div className="stats shadow w-full mt-6 hidden md:block">
                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-8 w-8 stroke-current">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                            </div>
                            <div className="stat-title">Total Review</div>
                            <div className="stat-value text-primary">25.6K</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-8 w-8 stroke-current">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <div className="stat-title">Page Views</div>
                            <div className="stat-value text-secondary">2.6M</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>


                    </div>
                </div>

            </div>
            <div className='border-t border-stone-300'>
                <p className='my-10 mb-20 px-10 text-lg font-semibold'> {description}</p>
            </div>
        </div>
    );
};

export default Details;