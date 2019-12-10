import React from 'react';
import useLogin from './useLogin';
import './Login.css';
const Login = (props) => {
    console.log(props);
    const {inputs,  handleInputChange, handleSubmit} = useLogin();
    //getting the authorization from localstorage
    const isAuth=localStorage.getItem("isAuth");
    return (
        <div className='login-container text-center m-auto' style={{transform: 'translateY(-10%)'}}>
            {
                //if isAuth is true it will redirect to the dashboard else it continue to display the login page
                isAuth ? props.history.push('/dashboard') : console.log(isAuth)
            }
            <div className='login-form'>
                <h2 className='login-header'>Welcome, sign in below</h2>
                <div className='section' style={{marginTop: '100%'}}>
                    <input type="email" name="email" onChange={handleInputChange} value={inputs.email}
                           required autoComplete='new-password'/>
                    <label className='login-label' htmlFor="username"><span
                        className='login-label-content'>Username</span></label>
                </div>
                <div className='section'>
                    <input type="password" name="password" onChange={handleInputChange} value={inputs.password}
                           required autoComplete='new-password'/>
                    <label className='login-label' htmlFor="password"><span
                        className='login-label-content'>Password</span></label>
                </div>
                <div>
                    <button
                        onClick={handleSubmit}
                        className='general_btn mt-3 float-right'>
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
