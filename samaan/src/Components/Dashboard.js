import React from 'react';


const Dashboard =()=>{
   return(
    <div style={{marginTop:"20px"}}>
   
   <header>
		<h1>Welcome To Dashboard</h1>
	</header>
  
	<nav class="menu">
		<a href="#" class="item_menu">home</a>
		<a href="#" class="item_menu">about</a>
		<a href="#" class="item_menu">products</a>
		<a href="#" class="item_menu">services</a>
		<a href="#" class="item_menu">contact</a>
	</nav>
   <p style={{marginLeft:"350px",marginTop:"20px"}}>	Hi, Welcome back!<br/><br/>
      Your Grocery monitoring dashboard...</p>
	<main>
	<div class="main-overview">
  <div class="overviewcard">
    <div class="overviewcard__icon">Total Products</div>
    <div class="overviewcard__info">0</div>
  </div>
  <div class="overviewcard">
    <div class="overviewcard__icon">Total Categories</div>
    <div class="overviewcard__info">0</div>
  </div>
  <div class="overviewcard">
    <div class="overviewcard__icon">Total Orders</div>
    <div class="overviewcard__info">0</div>
  </div>
  <div class="overviewcard">
    <div class="overviewcard__icon">Total Users</div>
    <div class="overviewcard__info">0</div>
  </div>
</div>
      {/* <div className='dashboardMenu'>
         <div className='overviewcard'>
         <p>Total Products<br/>0</p></div>
      </div>
      <div className='dashboardMenu'>
      <div className='overviewcard'>
         <p>Total Categories<br/>0</p></div>
      </div>
      <div className='dashboardMenu'>
      <div className='overviewcard'>
         <p>Total Orders<br/>0</p>
      </div></div>
      <div className='dashboardMenu'>
      <div className='overviewcard'>
         <p>Total Users<br/>0</p></div>
      </div> */}
	</main>
 

  
    </div>
   )
}


export default Dashboard;