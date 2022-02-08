import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Popup from './Popup';

var nextBtn, prevBtn,userValue;



function changeStep(btn){
const steps = Array.from(document.querySelectorAll('form .step'));
nextBtn = document.querySelectorAll('form .next-btn');
prevBtn = document.querySelectorAll('form .previous-btn');
// const form = document.querySelector('form');

 let index = 0;
 const active = document.querySelector('form .step.active');
 index = steps.indexOf(active);
 console.log("onclick"+index);
 console.log("steps ", steps);
 steps[index].classList.remove('active');
 if(btn === 'next'){
   index ++;
   console.log("inde ", index);
 }else if(btn === 'prev'){
   index --;
 }
 steps[index].classList.add('active');
 console.log(index);
}

const Registration =(props) =>{
  const [selectedClient,setSelectedClient] = useState([]);

  function handleSelectChange(event) {
      setSelectedClient(event.target.value);
  }

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
    
  }
  const getInputValue = (event)=>{
    // show the user input value to console
     userValue = event.target.value;
};


  return(
  <section>
    <div className ="container">
      <form>
        <div className = "step step-1 index active">
          <div className ="form-group">
            <label htmlFor ="firstName">First Name</label>
            <input type ="text" id = "firstName" name ="firstName"/>
          </div>
          <div className ="form-group">
            <label htmlFor ="lastName">Last Name</label>
            <input type ="text" id = "lastName" name ="lastName"/>
          </div>
          <div className = "form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id ="email" name ="email"/>
            </div>
            <div className = "form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="number" id ="phone" onChange={getInputValue} name ="phone-number"/>
              <button id ="verifyBtn"className="buttonStyle" type="button" onClick={togglePopup}>Verify</button>  
            </div>
          <button type ="button" className ="next-btn" onClick={()=> changeStep('next')}>Next</button>
        </div>
        <div className ="step step-2">
        <div className = "form-group">
              <label htmlFor="role">Role</label>
              <select value={selectedClient} onChange={handleSelectChange}> 
              <option value="default">Select Role</option>
              <option value="customer">Customer</option>  
              <option value="storeowner">StoreOwner</option>
            
              </select> 
        {
          selectedClient === 'storeowner' ?
            <div>
              <div className = "form-group">
              <label htmlFor="storename">Store Name</label>
              <input type="text" id ="storename" name ="store-name"/>
            </div>
            <div className='form-group'>
              <label htmlFor='storeaddress'>Store Address</label>
              <input type='text' id ='storeaddress' name = 'store-address'/>
            </div>
            <div className = "form-group">
              <label htmlFor="storeaddress1">Store Address1</label>
              <input type="text" id ="storeaddress1" name ="store-address1"/>
            </div>
            <div className = "form-group">
              <label htmlFor="storeaddress2">Store Address2</label>
              <input type="text" id ="storeaddress2" name ="store-address2"/>
            </div>           
            <div className = "form-group">
              <label htmlFor="gstin">GSTIN</label>
              <input type="text" id ="gstin" name ="gstin"/>
            </div>
            <div className='form-group'>
              <label htmlFor='pan'>PanNumber</label>
              <input type='text' id ='pan' name = 'pan'/>
            </div>
            </div>
          : null
        }
        {/* customer start*/}
        {

          selectedClient === 'customer'?
                  <><div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" name="Address" />
                  </div><div className='form-group'>
                      <label htmlFor='address1'>Address1</label>
                      <input type='text' id='address1' name='address1' />
                    </div></>:null 
        }
           
        {/* customer end */}
            </div>
      
        
            <button type ="button" className ="previous-btn" onClick={()=> changeStep('prev')}>Prev</button>
            <button type ="button" className ="next-btn" onClick={()=> changeStep('next')}>Next</button>

        </div>

        <div className ="step step-3">
            <div className = "form-group">
              <label htmlFor="country">Country</label>
              <input type="text" id ="country" name ="country"/>
            </div>
            <div className='form-group'>
              <label htmlFor='state'>State</label>
              <input type='text' id ='state' name = 'state'/>
            </div>
            <div className = "form-group">
              <label htmlFor="city">City</label>
              <input type="text" id ="city" name ="city"/>
            </div>
            <div className = "form-group">
              <label htmlFor="pincode">PinCode</label>
              <input type="number" id ="pincode" name ="pincode"/>
            </div>
            <button type ="button" className ="previous-btn"onClick={()=> changeStep('prev')}>Prev</button>
            <Link to="/login">
            <button type ="button" className ="submit-btn">Submit</button>
            </Link>
           
        </div>
      
      
      </form>
      
      {isOpen && <Popup
      content={<>
      <form className ="form-inline">
        <div>
          <p style={{textDecorationStyle:"solid"}}>OTP sent to MobileNumber </p>
        {/* <label>MobileNumber</label> */}
        <input type ="text" value ={userValue} contentEditable = "false" />
        <input id = "otp" type="text" placeholder='Enter OTP'/>
        <button>Send OTP</button>
        </div>
        </form>
      </>}
      handleClose={togglePopup}
    />}


      
    </div>
  </section>
   
)}


export default Registration;