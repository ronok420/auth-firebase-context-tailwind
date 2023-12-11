import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Providers/AuthProviders';



const Login = () => {
    const { signIn,signInWithGoogle } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                console.log(error);
            })

    }
    const handleGoogleSIgnIn = ()=>{
        signInWithGoogle()
        .then((result)=>console.log(result.user))
        .catch(error=>console.log(error))

    }
    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">You Can Login!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to="" href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <button className="btn btn-primary" style={{ backgroundColor: '#fa8072' }}>Login</button>
                                <button onClick={handleGoogleSIgnIn} className="btn btn-active btn-ghost">SignIn with Google</button>
                            </div>
                            <label className="label">
                                <Link to="/register" href="#" className="label-text-alt link link-hover">new to auth master?</Link>
                            </label>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;