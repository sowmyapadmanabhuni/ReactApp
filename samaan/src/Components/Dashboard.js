import React from 'react';


const Dashboard =()=>{
   return(
    <div style={{marginTop:"20px"}}>
   
   <header>
		<h1>Welcome To Dashboard</h1>
		{/* <div class="top">
			<a href="#" class="menu_icon"><i class="material-icons">Groceries Dashboard</i></a>
		</div> */}
	</header>
	<nav class="menu">
		<a href="#" class="item_menu">home</a>
		<a href="#" class="item_menu">about</a>
		<a href="#" class="item_menu">products</a>
		<a href="#" class="item_menu">services</a>
		<a href="#" class="item_menu">contact</a>
	</nav>
   <p style={{marginLeft:"350px",marginTop:"20px"}}>	Hi, Welcome back!<br/>
      Your Grocery monitoring dashboard template.</p>
	<main>
	
      <div className='dashboardMenu'>
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
      </div>
	</main>
   
    </div>
   )
}


export default Dashboard;