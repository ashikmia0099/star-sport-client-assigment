import React, { useContext } from 'react';


import img1 from '../../../assets/images/download.jpg';
import img2 from '../../../assets/images/download1.jpg';
import img3 from '../../../assets/images/download2.jpg';

import banner1 from '../../../assets/bannerimg/banner1.jpg'
import banner2 from '../../../assets/bannerimg/banner2.jpg'
import banner3 from '../../../assets/bannerimg/banner3.jpg'
import banner4 from '../../../assets/bannerimg/banner4.jpg'
import banner5 from '../../../assets/bannerimg/banner5.jpg'
import banner6 from '../../../assets/bannerimg/banner6.jpg'

import items1 from '../../../assets/slide/item1.jpg'
import items2 from '../../../assets/slide/items2.jpg'
import items3 from '../../../assets/slide/itms3.jpg'
import items4 from '../../../assets/slide/itms4.jpg'
import items5 from '../../../assets/slide/itms5.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import { IoPersonCircleSharp } from 'react-icons/io5';
import { SiMaterialdesignicons } from 'react-icons/si';
import { FaAcquisitionsIncorporated } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Component } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Marquee from "react-fast-marquee";
import { Fade, Slide } from "react-awesome-reveal";




import './styles.css';
import { AuthContext } from '../../Context/AuthProvider';
import BannerCard from '../BannerCard/BannerCard';


const Home = () => {


    const { allcardData, setallcardData } = useContext(AuthContext)

    return (
        <div>
            {/* section one */}
            <div >
                <Carousel >
                    <div>
                        <img src={banner1} />

                    </div>
                    <div>
                        <img src={banner2} />

                    </div>
                    <div>
                        <img src={banner3} />

                    </div>
                    <div>
                        <img src={banner4} />

                    </div>
                    <div>
                        <img src={banner5} />

                    </div>
                </Carousel>
            </div>


            {/* section 2 */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                {

                    allcardData.slice(0, 6).map(card => <BannerCard key={card._id} card={card}></BannerCard>)
                }


            </div>

            {/* section 3 */}


            <div className='px-10'>
                <Marquee>
                    <div className="flex items-center  h-[360px] my-10">
                        <img src={items1} className="rounded-xl h-full w-60 mx-3" alt="Item 1" />
                        <img src={items2} className="rounded-xl h-full w-60 mx-3" alt="Item 2" />
                        <img src={items3} className="rounded-xl h-full w-60 mx-3" alt="Item 3" />
                        <img src={items4} className="rounded-xl h-full w-60 mx-3" alt="Item 4" />
                        <img src={items5} className="rounded-xl h-full w-60 mx-3" alt="Item 5" />

                    </div>
                </Marquee>

            </div>


            {/* section four */}
            <div className="hero min-h-screen signupbackground">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="lg:px-40 lg:py-10">
                        <div className="card backdrop-blur-sm bg-white/30 w-full  shrink-0 shadow-2xl my-20">
                            <Slide>
                                <h1 className='text-5xl font-semibold text-slate-800 my-7'>Sport Club</h1>
                            </Slide>
                            <Fade delay={1e3} cascade damping={1e-1}>
                                <p className='mb-10'>
                                    Over 2 Lac people shop online worldwide, and they appreciate updates on their purchases and returns. Sending order update text messages builds trust in the purchase process and leads to long-lasting relationships between your brand and customers. By showing your customers that you care about their shopping experience, you can encourage repeat purchases and develop a loyal customer base.
                                </p>
                            </Fade>


                        </div>
                    </div>
                </div>
            </div>


        </div>


    );
};

export default Home;


