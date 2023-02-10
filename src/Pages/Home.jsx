import React from 'react';
import banner from '../assets/images/banner.jpg'
import image1 from '../assets/images/Rectangle 16.png'
import image2 from '../assets/images/Rectangle 17.png'
import image3 from '../assets/images/Rectangle 20.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Home = () => {

    return (
        <div>
            <div className='relative'>
                <img src={banner} alt="" className='' />
                <div className='absolute  lg:bottom-28 md:bottom-10 bottom-8 left-10 lg:left-24 md:left-9 flex flex-col lg:gap-6 md:gap-4 gap-3 items-start'>
                    <h1 className='font-thin lg:text-5xl md:text-3xl text-white'>Live up to your expectation <br /> The true delight for your space.</h1>
                    <p className='uppercase text-white lg:text-xl md:text-lg md:block hidden font-light'>Your sense of comfort redefined</p>
                    <button className='md:px-10 px-3 md:py-3 py-1 md:bg-opacity-100 bg-opacity-80 text-white hover:bg-opacity-25' style={{ backgroundColor: "#BCB2A0" }}>SHOP NOW</button>
                </div>
            </div>
            <div style={{ backgroundColor: "#F0F0F0" }}>
                <div className='w-5/6 mx-auto py-10'>
                    <h1 className='text-2xl font-light mt-10'>OUR COLLECTION</h1>
                    <div className='mt-8 flex justify-between'>
                        {/* ========================= card1 =========================== */}
                        <div data-aos="fade-left" className="w-[30%] text-gray-700 hover:shadow-xl hover:scale-105  hover:shadow-gray-300">
                            <img src={image1} alt="" className="w-full max-h-96" />
                            <div className="mt-6 pb-3">
                                <p className="uppercase text-xl text-center">Flower</p>
                                <p className="text-gray-700 text-center font-light text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, magni.</p>
                            </div>
                        </div>
                        {/* ========================= card2 =========================== */}
                        <div data-aos="fade-up" className="w-[30%] text-gray-700 hover:shadow-xl hover:scale-105  hover:shadow-gray-300">
                            <img src={image2} alt="" className="w-full max-h-96" />
                            <div className="mt-6 pb-3">
                                <p className="uppercase text-xl text-center">Candles</p>
                                <p className="text-gray-700 text-center font-light text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, magni.</p>
                            </div>
                        </div>
                        {/* ========================= card3 =========================== */}
                        <div data-aos="fade-right" className="w-[30%] text-gray-700 hover:shadow-xl hover:scale-105  hover:shadow-gray-300">
                            <img src={image3} alt="" className="w-full max-h-96" />
                            <div className="mt-6 pb-3">
                                <p className="uppercase text-xl text-center">Lamp Shade</p>
                                <p className="text-gray-700 text-center font-light text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, magnt.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;