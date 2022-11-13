import React from 'react';

const AppointmentOption = ({ option, setTreatment }) => {
    const { name, slots } = option;

    return (
        <div className="card bg-base-100 shadow-xl my-10">
            <div className="card-body">
                <h2 className="card-title text-primary justify-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} Space/s Available</p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"
                        onClick={() => setTreatment(option)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;