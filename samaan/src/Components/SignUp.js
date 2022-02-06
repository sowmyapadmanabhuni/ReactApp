import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Popup from './Popup';

let userValue ="";
const SignUp = () =>{
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const getInputValue = (event)=>{
    // show the user input value to console
     userValue = event.target.value;
};
function hide() {
  // document.getElementById('verifyBtn').style.display = 'none';
  togglePopup();

}


    return(
    <div>
      <center><h1>Register</h1>
      
      <form class="form-inline">
               <div>
                <label for="username">UserName</label>
                <input type="text" id="username" placeholder="Enter UserName" name="email"/>
                <label for="mobile">MobileNumber</label>
                <div class ="buttonIn">
                <input type="phone" id="mobile" placeholder="Enter MobileNumber"onChange={getInputValue} name="mobile"/>
              
                <button id ="verifyBtn"class="buttonStyle" type="button" onClick={hide}>Verify</button>  
                </div>
                <label for="pwd">Password</label>
                <input type="password" id="pwd" placeholder="Enter Password" name="pswd"/>
                <label for="email">EmailID</label>
                <input type="email" id="email" placeholder="Enter EmailID" name="email"/>
                
                <button type="reset">Reset</button>
                <Link to="/login">
                <button type="submit">Submit</button>
                </Link>
             
                {isOpen && <Popup
                    content={<>

                    <form class ="form-inline">
                      <div>
                        <p style={{textDecorationStyle:"solid"}}>Enter OTP sent to your MobileNumber {userValue}</p>
                      <label>MobileNumber</label>
                      <input type ="text" value ={userValue} contentEditable = "false" />
                      <input id = "otp" type="text" placeholder='Enter OTP'/>
                      <button>Send OTP</button>
                      </div>
                      </form>
                    </>}
                    handleClose={togglePopup}
                  />}
   
               </div>
            </form>
      
      </center>
    </div>
    )
}


export default SignUp;