import React from 'react';
import treatImg from '../../assets/images/treatment.png'

const Banner2 = () => {
    return (
        <div>
            <div className="hero my-5">
                <div className="hero-content flex-col md:flex-row">
                    <img src={treatImg} alt='banner2' className="lg:p-12 w-full md:w-1/2 rounded-lg" />
                    <div>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;