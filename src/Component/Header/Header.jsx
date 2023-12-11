import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Header = () => {
    const {user,logOut} =useContext(AuthContext);
    const handleSignOut= ()=>{
        logOut()
        .then(()=>{

        })
        .catch(e=>{
            console.log(e);
        })
    }
    return (
        <div>


          

            {/* <div className=" navbar bg-neutral text-neutral-content"> */}
            <div className="navbar text-neutral-content" style={{ backgroundColor: 'black' }}>
                <button className="btn btn-ghost text-xl">Auth Master</button>
                <Link className="btn btn-ghost normal-case text-xl" to="/">home</Link>
                {user && <Link className="btn btn-ghost normal-case text-xl" to="/orders">orders</Link>}
                <Link className="btn btn-ghost normal-case text-xl" to="/login">login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/register">register</Link>
                {user? <> <span>{user.email}</span> 
                <button onClick={handleSignOut} style={{marginLeft:'6px'}} className="btn btn-active btn-accent">Sign Out</button></> : 
                <> <Link to="/login"><button  style={{marginLeft:'6px'}} className="btn btn-active btn-accent">LogIn</button></Link>
                </>
                  
                }

            </div>

        

        </div>
    );
};

export default Header;