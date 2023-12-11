import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Providers/AuthProviders';

const Register = () => {
const {user,createUser} =useContext(AuthContext);
console.log(createUser);




    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name=form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,'email:',email, 'pass:',password);

        createUser(email,password)
        .then(result =>{
            const loggedUser =result.user;
            form.reset();
            console.log(loggedUser);
        })
        .catch(error =>{
            console.log(error);
        })

        

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Register</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="enter name" className="input input-bordered" required />
                            </div>
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
                               
                            </div>
                            <div className="form-control mt-6">

                                <button className="btn btn-primary" style={{ backgroundColor: '#fa8072' }}>Register</button>
                            </div>
                            <label className="label">
                                    <Link to="/login" href="#" className="label-text-alt link link-hover">already a user ?</Link>
                                </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;