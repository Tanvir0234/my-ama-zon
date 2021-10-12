import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Register = () =>{
const {handleSignIn} = useAuth();
    return (
        <div className="form">
            <div>
            <h1>Create Account</h1>
            <form onSubmit="">
                <input type="email" placeholder="Enter Email"/><br /><br />
                <input type="password" name="" id="" placeholder="Password" /><br /><br />
                <input type="password" name="" id="" placeholder="Re-enter Password" /><br /><br />
                <input type="submit" value="Submit" /><br /><br />
            </form>
            <button onClick={handleSignIn} className="add-btn">Google Sign In</button>
            <p>------or--------</p>
            <p>Already have an account? <Link to="/login">Log in</Link> </p>
            </div>
        </div>
    );
};

export default Register;