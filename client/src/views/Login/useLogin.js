import {useState} from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken'

const useLogin = () => {
    const [inputs, setInputs] = useState({email: "", password: ""});
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState({id:"",name:"",permissions:""});

    const setAuthToken = token => {
        if (token) {
            
            setAuthenticated(true);
            //storing the authorization in local storage
            localStorage.setItem("isAuth", true);
            // apply auth token to each request if logged in
            axios.defaults.headers.common['Authorization'] = token;
        } else {
            // delete auth header
            delete axios.defaults.headers.common["Authorization"];
        }
    };
    const handleSubmit = async(event) => {
        console.log('got here');
        event.preventDefault();
        const userData = {
            email: inputs.email,
            password: inputs.password
        };
        axios.post("/api/admin/login", userData)
            .then(res => {
                // save tkn locally
                const token = res.headers.authorization;
                localStorage.setItem("jwtToken", token);
                // set token to auth header
                console.log(token);
                setAuthToken(token);
                // decode token to get user
                const decoded = jwt.decode(token.substring(7, token.length).trim());
                // set current user
                setUser(decoded);
                console.log(`${JSON.stringify(decoded)}: has signed in!`)
            });
        //clearing the variables after submitting
        //inputs.email="";
        //inputs.password="";
    };
    const returnAuth=()=>{
        //used to retrieve the value of isAuthenticated
        if(isAuthenticated===true){
            return true;
        }
        else{
            return false;
        }
    };
    
    const logout = () => {
        // remove token from local storage
        localStorage.removeItem("jwtToken");
        // remove auth header for future requests
        localStorage.removeItem("isAuth");
        setAuthenticated(false);
        // set current user to empty obj to set isAuthenticated to false
        setUser({});
    };

    const handleInputChange = (event) => {
        //updating the value inputs (either email or password)
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    };

    return {
        handleSubmit,
        handleInputChange,
        isAuthenticated,
        setAuthenticated,
        user,
        inputs,
        setUser,
        setAuthToken,
        logout,
        returnAuth
    };
};
export default useLogin;
