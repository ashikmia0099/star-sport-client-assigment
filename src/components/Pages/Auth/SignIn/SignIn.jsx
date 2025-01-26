import React, { useContext } from 'react';
import { FaApple, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import './SignIn.css'
import { AuthContext } from '../../../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {

    const { SignUpUser, updateUserProfile, SignOutUser,setError, SignInUser,signInwithGoogle,user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleSignIn  = e => {
        e.preventDefault()


        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password)

        
        SignInUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate('/sportcomponent');
                console.log(user);
            })
            .catch((error) => {
                console.log('Error', error)
               
            })

        console.log('Sing in with email', email, password)
    }



    const handlegoogleSignIn = () =>{
        signInwithGoogle()
        .then((result) =>{
            const user = result.user;
            setUser(user);
            
            navigate('/sportcomponent');
            console.log(user)

        })
        .catch((error) =>{
            console.log('ERROR', error)
            // return('ERROR', error)
        })
    }

    return (

        <div className="hero min-h-screen signupbackground">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <div className="card backdrop-blur-sm bg-white/30 w-full  shrink-0 shadow-2xl">
                        <h1 className='text-3xl font-semibold text-slate-800'>Login Now</h1>
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered text-black" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered text-black" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6 w-full">
                                <button className="btn backdrop-blur-sm bg-white/30 text-xl border-none rounded-full">Sign In</button>
                            </div>
                            <div className=' grid grid-cols-3  gap-4 '>
                                <button className='btn mt-2 mx-2' onClick={handlegoogleSignIn} > <FcGoogle /> Google</button>
                                <button className='btn mt-2 mx-2'><FaFacebook className='text-[#005EFF]' />Facebook</button>
                                <button className='btn mt-2 mx-2'> <FaApple /> Apple</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignIn;

