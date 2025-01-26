import React from 'react';
import bannerimg from '../../../assets/bannerimg/banner1.jpg'
import Lottie from "lottie-react";

import shop from '../../../assets/lotti/shop.json'


const AboutUs = () => {
    return (
        <div>
            <div className=' grid lg:grid-cols-2 mt-32 mb-7'>
                <div className='-mt-10'>
                    <Lottie animationData={shop} loop={true} />;
                </div>
                <div>
                    <h1 className='text-4xl font-semibold text-black'>Welcome to, Star Sport</h1>
                    <div className='text-left my-3'>
                        <h3 className='text-2xl font-semibold my-3'>We offered :</h3>
                        <ul className=' space-y-4'>
                            <li><span className='text-lg font-semibold'>Live Updates:</span>Stay on top of the latest scores, match highlights, and breaking news.</li>
                            <li><span className='text-lg font-semibold'>In-Depth Analysis:</span>Dive into expert opinions, game strategies, and player insights.</li>
                            <li><span className='text-lg font-semibold'>Exclusive Interviews:</span>Hear from your favorite athletes and sports icons.</li>
                            <li><span className='text-lg font-semibold'>Event Coverage:</span>Experience the biggest tournaments, from local leagues to global championships.</li>

                        </ul>
                    </div>

                    <div className='text-left'>
                    <h3 className=' text-2xl font-semibold my-2'>Our Vision:</h3>
                    <p>
                        To create a platform where sports enthusiasts can celebrate their love for games, stay informed, and connect with a community that shares the same passion.

                        die-hard fan or just discovering the excitement of sports, Sport Show is here to keep you entertained and engaged.
                    </p>
                </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;