import React from 'react';
import { Link } from "react-router-dom";


  function inputChange(btn){
    if(btn === 'password'){
      document.getElementById('password').className='show';
      document.getElementById('otp').className ='hide';
      document.getElementById('message').className ='hide';

    }else if(btn === 'otp'){
      
      document.getElementById('otp').className ='show';
      document.getElementById('password').className ='hide';
      document.getElementById('message').className ='show';

    }
  }
const Login = () =>{
    return(
      <section>
      <div className ="container">
      <form>
         <div className = "step step-1 index active">
            <div className ="form-group">
              <label htmlFor ="emailphone">Email/PhoneNumber</label>
              <input type ="text" id = "emailphone" name ="email-phone" placeholder='Enter Email/PhoneNumber'/>
            </div>
            <input style={{border:'none',backgroundColor:'white',float:'right',color:'blue',textDecorationLine:'underline',cursor:"pointer"}} onClick={()=>{inputChange('otp')}} value ="OTP " type="button"/>
            <input style={{border:'none',backgroundColor:'white',float:'right',color:'blue',textDecorationLine:'underline',cursor:"pointer"}} onClick={()=>{inputChange('password')}} value ="Password /" type="button"/>

            <div className ="form-group">
              <input className='hide' type ="password" id = "password" name ="password" placeholder='Enter Password'/>
              <input className='hide' type ="text" id = "otp" name ="otp" placeholder='Enter OTP'/>
              <p style={{float:'left',marginTop:"10px"}} className='hide' id ="message">OTP sent to MobileNumber</p>
            </div>
            <div style={{marginTop:"20px"}}>
            <Link to ="/dashboard">
            <button className ="loginbutton" type="submit">Submit</button>
            </Link>
            <button type='reset' className='loginbutton'>Reset</button>
            </div>
          </div>
        </form>
          </div>
   
      </section>

      
        // <div>        
        //    <section>
        //      <form>
        //         <center><h1>Welcome LogIn</h1>
        //                   <div className ='container'>
        //                         <div className ="form-group">
        //                             <label htmlFor ="firstName">First Name</label>
        //                             <input type ="text" id = "firstName" name ="firstName"/>
        //                         </div>
        //                     <div className ="form-group">
        //                         <label htmlFor ="lastName">last Name</label>
        //                         <input type ="text" id = "lastName" name ="lastName"/>
        //                     </div>
        //                     <button style={{display:"none"}} id ="otpBtn" class ="buttonStyle" type ="button" >Send OTP</button> 
        //                     {/* <Link to="/signup"> */}
        //                          <button class ="loginbutton" type="submit">Submit</button>

        //                     {/* </Link> */}
        //                     <button class ="loginbutton" type="reset">Reset</button>
        //                   </div>
        //         </center>
        //         </form>
        //    </section>
        // </div>
        //     <form class="form-inline">
        //        <div  className='container'>
        //         <label for="email">EmailID/MobileNumber</label>
        //         <input type="email" id="email" placeholder="Enter EmailID/MobileNumber" name="email"/>
               
        //        <div style={{display:"flex",width:"100%",paddingRight:"10px"}}>
        //         <input  style={{textAlignLast:"end", border:'none',textDecorationLine:'underline',cursor:"pointer",color:"blue"}} type ="button" onClick={onButtonClick} value="Password /"/>
        //                 <div style={{display:"flex"}}>
        //         <input style={{marginLeft:"-19px", textAlignLast:"end",border:"none",cursor:"pointer",textDecorationLine:'underline',color:"blue"}} type ="button"onClick={onButtonClickOTP} value="OTP"/> 
        //         </div>
        //         </div>
               
        //         <input class ="hide"type="password" id="pswd" placeholder="Enter Password" name="pswd"/> 
        //         <div class ="buttonIn"> 

        //         <input class ="hide"type="number" id="otp" placeholder="Enter OTP" name="otp"/>
        //         <button style={{display:"none"}} id ="otpBtn" class ="buttonStyle" type ="button" >Send OTP</button> 
        //         </div>
        //          <button class ="loginbutton" type="reset">Reset</button>
        //         <Link to="/signup">
        //         <button class ="loginbutton" type="submit">Submit</button>

        //         </Link>
        //        </div>
            
        //     </form> 
        //      </center> 
        // </div> 
    )
}


export default Login;