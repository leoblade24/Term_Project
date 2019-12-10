import React from 'react';
import './Dashboard.css';
import "react-pdf/dist/Page/AnnotationLayer.css";
import Editor from '../../components/Admin/Editor/Editor';
import AccountSettings from '../../components/Admin/AccountSettings/AccountSettings';
import useLogin from "../Login/useLogin"
import {Redirect} from 'react-router-dom';
import Button from "react-bootstrap/Button"
import jwt from 'jsonwebtoken';

const Dashboard = () => {
    const {logout, returnAuth} = useLogin();
    //gets the value of isAuthenticated and if it is false will redirect to login page
    if (returnAuth()) {
        console.log(returnAuth());
        return (
            <Redirect to="/login"/>
        )
    }
    //retrieve the jwt token 
    const token = localStorage.getItem("jwtToken");
    let decoded;
    //if the token exists it is decoded else it redirects to login
    if (token) {
        decoded = jwt.decode(token.substring(7, token.length).trim());
    } else {
        return (
            <Redirect to="/login"/>
        )
    }
    const time = Date.now() / 1000;
    //if the token has not expired it will display the dashboard else it will log the person out and redirect to login
    if (decoded.exp > time) {
        return (
            <div className="wide-container">
                {
                    //on click it will call the logout function and remove the JWT token and force user back to the login page
                }
                <Button onClick={logout} className='float-right mt-2'>Log out</Button>
                
                
                <AccountSettings token={decoded} jwt={token}/>
                <Editor token={decoded}/> 


            </div>
        );
    } else {
        logout();
        return (
            <Redirect to="/login"/>
        );
    }
};

export default Dashboard;
