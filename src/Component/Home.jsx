import React, { useContext } from 'react';
import { AuthContext } from './Providers/AuthProviders';


const home = () => {
    const {user,createUser} = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            
       <h2>home page
        {
        user && <p>  {user.displayName} </p>

        }
       </h2>
        </div>
    );
};

export default home;