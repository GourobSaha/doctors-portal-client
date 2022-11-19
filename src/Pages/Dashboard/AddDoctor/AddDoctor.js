import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleAddDoctor = data => {
        console.log(data);
    }

    return (
        <div className='w-96 p-7 shadow-xl rounded-2xl mx-auto mt-8'>
            <h3 className="text-3xl my-5">Add Doctor</h3>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="txt" className="input input-bordered w-full" {...register("name", { required: 'Name is Required' })} />
                    {errors.name && <p className='text-red-600 text-sm'>{errors.name?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" className="input input-bordered w-full" {...register("email", { required: 'Email Address is Required' })} />
                    {errors.email && <p className='text-red-600 text-sm'>{errors.email?.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select className="select select-bordered w-full">
                        <option disabled selected>Pick a Specialty</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>

                </div>
                <input className='btn btn-accent w-full mt-5' value="Add Doctor" type="submit" />
            </form>
        </div>
    );
};

export default AddDoctor;