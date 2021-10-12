import React from 'react';
import './Login.css'
import { Link,
    useHistory,
    useLocation
 } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {handleGoogleSignIn}=useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from ||"/"
    const handleGoogleButton =()=>{
        handleGoogleSignIn()
        .then(rasult=>{
            history.push(redirect_url);
        })
    }
    return (
        <div className="form">
            <div >
                <h1>Log in</h1>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Enter Email" /><br /><br />
                    <input type="password" name="" id="" placeholder="Enter Password" /><br /><br />
                    <input type="submit" value="Submit" />
                </form><br /><br />
                <button onClick={handleGoogleButton} className="add-btn">Sign In With Google</button>
                <p>------------or-------------</p>
                <p>new to ema-jhon? <Link to="/register">Create Account</Link></p>
            </div>
        </div>
    );
};

export default Login;