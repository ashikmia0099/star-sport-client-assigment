import React, { useContext, useState } from 'react';
import './SignUp.css';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

import shoplotty from '../../../../assets/lotti/balllotti.json'
import Lottie from 'lottie-react';

const SignUp = () => {
    const { SignUpUser, updateUserProfile, setError } = useContext(AuthContext);

    const navigate = useNavigate();
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get('name');
        const photoUrl = form.get('photoUrl');
        const email = form.get('email');
        const password = form.get('password');

        // Name Check
        if (name.length < 6) {
            toast.error('Name must be at least 6 characters long.');
            return;
        }



        //  password celidate check


        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (!passwordRegex.test(password)) {
            setPasswordError(
                'Password must be at least 6 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.'
            );
            return;
        }
        setPasswordError('');


        try {
            // Register user
            const RegisterUser = await SignUpUser(email, password);

            await updateUserProfile({ displayName: name, photoURL: photoUrl });


            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User created successfully.',
                showConfirmButton: false,
                timer: 1500,
            });

            navigate('/signIn');


        } catch (err) {
            let errorMessage;
            switch (err.code) {
                case 'auth/email-already-in-use':
                    errorMessage = 'This email is already in use.';
                    break;
                case 'auth/invalid-email':
                    errorMessage = 'Invalid email address.';
                    break;
                case 'auth/weak-password':
                    errorMessage = 'Password must be at least 6 characters.';
                    break;
                default:
                    errorMessage = 'Something went wrong. Please try again.';
            }


            toast.error(errorMessage);
            setError({ firebase: errorMessage });
        }
    };



    return (
        <div className="hero min-h-screen signinbackground">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="">
                    <div className="card backdrop-blur-sm bg-white/30 w-full shrink-0 shadow-2xl my-10 grid grid-cols-2 flex-row">
                        
                        <div>
                        <h1 className="text-3xl font-semibold text-slate-800 mb-10">Sign Up Now</h1>
                        <Lottie animationData={shoplotty} loop={true} />
                        </div>
                        <div>
                            <form onSubmit={handleSubmit} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered text-black" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="url" name="photoUrl" placeholder="Photo URL" className="input input-bordered text-black" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Email" className="input input-bordered text-black" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Password" className="input input-bordered text-black" required />
                                </div>
                                {passwordError && (
                                    <label className="label text-red-500">{passwordError}</label>
                                )}

                                <div className="form-control mt-6 w-full">
                                    <button className="btn backdrop-blur-sm bg-white/30 text-xl border-none rounded-full">
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
