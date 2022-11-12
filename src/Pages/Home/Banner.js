import React from 'react';
import bgImg from '../../assets/images/bg.png'
import chair from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <div className="hero lg:py-20" style={{
            backgroundImage: `url(${bgImg})`
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='banner' className="w-full lg:w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;