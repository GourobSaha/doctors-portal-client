import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useToken from '../../Hooks/useToken';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { createUser, updateUser } = useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if (token) {
        navigate('/')
    }

    const handleSignUp = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                console.log(data.name);
                alert('User Created')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => console.error(error))

    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('https://doctors-portal-server-one-plum.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCreatedUserEmail(email);
            })
    }



    return (
        <div className='my-10 md:my-20 flex justify-center items-center'>
            <div className='w-96 p-7 shadow-xl rounded-2xl'>
                <h2 className='text-xl text-center mb-3'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
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
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" className="input input-bordered w-full" {...register("password", { required: 'Password is Required' })} />
                        {errors.password && <p className='text-red-600 text-sm'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-5' value="Sign Up" type="submit" />
                </form>
                <p className='my-2 text-center text-sm'>Already have an account? <Link className='
                text-primary' to='/login'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-accent btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;