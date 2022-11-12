import React from 'react';
import doctorImg from '../../assets/images/doctor.png'
import appointmentBg from '../../assets/images/appointment.png'

const Banner3 = () => {
    return (
        <section className='md:mt-32 mt-12 mb-12' style={{
            backgroundImage: `url(${appointmentBg})`
        }}>
            <div className="hero">
                <div className="hero-content p-0 flex-col lg:flex-row">
                    <img src={doctorImg} alt='doctor' className="-mt-36 hidden md:block lg:w-1/2 rounded-lg" />
                    <div>
                        <h3 className="text-2xl font-semibold text-primary">Appointment</h3>
                        <h1 className="text-4xl font-bold my-6 text-white">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Appointment</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner3;