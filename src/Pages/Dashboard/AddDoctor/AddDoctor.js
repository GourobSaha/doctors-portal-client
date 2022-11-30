import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imgHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-one-plum.vercel.app/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = data => {
        console.log(data.image[0]);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }
                    fetch('https://doctors-portal-server-one-plum.vercel.app/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            alert(`${data.name} is added successfully`);
                            navigate('/dashboard/managedoctors');
                        })
                }

            })
    }
    if (isLoading) {
        return <Loading></Loading>
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
                    <select className="select select-bordered w-full" {...register("specialty", { required: 'Specialty  is Required' })}>
                        {
                            specialties.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                        }
                    </select>

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="file" className="input input-bordered w-full" {...register("image", { required: 'Image is Required' })} />
                    {errors.image && <p className='text-red-600 text-sm'>{errors.image?.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-5' value="Add Doctor" type="submit" />
            </form>
        </div>
    );
};

export default AddDoctor;