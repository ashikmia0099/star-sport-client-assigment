import React from 'react';
import { BiSolidCategory } from 'react-icons/bi';
import { CiDeliveryTruck } from 'react-icons/ci';
import { FaAcquisitionsIncorporated } from 'react-icons/fa';
import { MdOutlineSubtitles } from 'react-icons/md';
import { Link } from 'react-router-dom';

const BannerCard = ({ card }) => {


    const { _id, name, email, itemname, categoryName, price, Rating, customizations, deliverytime, Image, ProductQuentity, description, } = card;


    return (
        <div className=" rounded-xl bg-slate-800 p-0  shadow-xl mt-5 mx-3 text-white">


            <img className='w-full rounded-t-xl h-60' src={Image} alt="Shoes" />


            <div className="card-body px-4 py-3">
                <h2 className="text-xl gap-3 font-bold flex text-left items-center "> <span className='text-2xl'><MdOutlineSubtitles /></span>{itemname}</h2>
                <h2 className="text-lg gap-3 font-semibold flex text-left items-center "> <span className='text-lg'><BiSolidCategory /></span> {categoryName} </h2>
                <div className="grid grid-cols-2">
                    <div>
                        <h2 className="text-lg gap-3 font-semibold flex text-left items-center "> <span className='text-lg'><CiDeliveryTruck /></span> {deliverytime} </h2>
                    </div>
                    <div>
                        <h2 className="text-lg gap-3 font-semibold flex text-left items-center "> <span className='text-lg'><FaAcquisitionsIncorporated /></span> {ProductQuentity} Availavle</h2>
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


                <div className="card-actions justify-between">
                    <button className=" text-xl font-semibold">${price}</button>
                    <Link to={`/details/${_id}`}><button className="btn border-t-neutral-800 px-10 text-lg font-bold">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BannerCard;