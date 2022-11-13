import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({ selectedDate }) => {
    return (
        <div className='text-center my-12'>
            <h3 className='text-3xl text-secondary'>Available Appointments on {format(selectedDate, 'PP')}</h3>
        </div>
    );
};

export default AvailableAppointments;