import React, { useContext } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import banner1 from "../../../assets/bannerimg/banner1.jpg";
import banner2 from "../../../assets/bannerimg/banner2.jpg";
import banner3 from "../../../assets/bannerimg/banner3.jpg";

import { IoPersonCircleSharp } from 'react-icons/io5';
import { SiMaterialdesignicons } from 'react-icons/si';
import { FaAcquisitionsIncorporated, FaBusinessTime, FaSort } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../Context/AuthProvider";
import { MdOutlineSubtitles } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";







const SportComponent = () => {

    const { allcardData, setallcardData } = useContext(AuthContext);




    const handleDesindingSort = () => {


        const sortedData = [...allcardData].sort((a, b) => a.price - b.price);

        setallcardData(sortedData);
    };



    // "name": "Ashik Mia",
    // "email": "ashikmia5686@gmail.com",
    // "itemname": "Foot Ball",
    // "categoryName": "Sprts",
    // "price": "101",
    // "Rating": "4",
    // "customizations": "10",
    // "deliverytime": "2 Days",
    // "Image": "https://i.ibb.co.com/x5xzZBJ/itms4.jpg",
    // "ProductQuentity": "39",



    return (
        <div>

            <div className="mt-20">
                <h1 className="text-black text-4xl text-center font-semibold my-10 uppercase">
                    Our Shop Product
                </h1>
            </div>

            <div className="text-left flex gap-4 items-center">
                <h1 className="text-2xl font-semibold">Sort by price</h1>
                <button onClick={handleDesindingSort} className="text-2xl font-semibold"><FaSort /></button>
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-center">
                                <th>
                                    #
                                </th>
                                <th>Item Name</th>
                                <th>Category Name</th>
                                <th>Price</th>
                                <th>Customization </th>
                                <th>Processing Time </th>
                                <th>Rating </th>
                                <th>Stock Status </th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allcardData.map((carddata, index) => (
                                <tr key={carddata._id} className=" text-center">
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img src={carddata.Image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{carddata.itemname}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{carddata.categoryName}</td>
                                    <td>{carddata.price}</td>
                                    <td>{carddata.customizations}</td>
                                    <td>{carddata.deliverytime}</td>
                                    <td>{carddata.Rating}</td>
                                    <td>{carddata.ProductQuentity}</td>
                                    <th>
                                        
                                        <Link to={`/details/${carddata._id}`}>
                                            <button className="btn border-t-neutral-800 px-10 text-lg font-bold">Details</button>
                                        </Link>
                                    </th>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>


        </div>
    );
};

export default SportComponent;

