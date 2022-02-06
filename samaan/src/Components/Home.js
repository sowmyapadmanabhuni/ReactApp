import React from 'react';

import { Link } from "react-router-dom";

const Home = () => {
 return(
 
<div class = "centered" >
    <h1>Welcome </h1>
    <Link to="/login">
    <button class = "loginbutton">Login</button></Link>
    <Link to="/register">
    <button class = "loginbutton">SignUp</button></Link>    
</div>
)}

 

export default Home;