import React from 'react';
import bgImg from '../../assets/images/appointment.png'
const ContactUs = () => {
    return (
        <section
            className=" text-center rounded-xl py-8 mb-16"
            style={{
                background: `url(${bgImg})`,
            }}
        >
            <div>
                <h4 className="text-primary text-lg font-bold">Contact Us</h4>
                <h2 className="text-3xl text-white">Stay connected with us</h2>
            </div>
            <div>
                <form className="">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="input input-bordered w-full mb-4 mt-4 max-w-xs"
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="Subject"
                        className="input input-bordered w-full mb-4  max-w-xs"
                    />
                    <br />
                    <textarea className="textarea w-full mb-4  max-w-xs" placeholder="Your Message"></textarea>
                    <br />
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;