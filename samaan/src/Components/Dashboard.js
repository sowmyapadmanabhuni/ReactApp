import React from 'react';
import {Route, Link,BrowserRouter} from 'react-router-dom';
import Collapsible from 'react-collapsible';
import {Categories} from '../Utils/Categories';

const routes = [
   {
     path: "/",
     exact: true,
   //   sidebar: () => <div>Home sidebar content</div>,
     main: () => 
     <main>
     <p>	Hi, Welcome back!<br/><br/>
  Your Grocery monitoring dashboard...</p>

 
 <div className="main-overview">
 <div className="overviewcard">
    <div className="overviewcard__icon">Total Products</div>
    <div className="overviewcard__info">0</div>
 </div>
 <div className="overviewcard">
    <div className="overviewcard__icon">Total Categories</div>
    <div className="overviewcard__info">0</div>
 </div>
 <div className="overviewcard">
    <div className="overviewcard__icon">Total Orders</div>
    <div className="overviewcard__info">0</div>
 </div>
 <div className="overviewcard">
    <div className="overviewcard__icon">Total Users</div>
    <div className="overviewcard__info">0</div>
 </div>
 </div>


</main>
   },
   {
     path: "/order",
     main: () => 
    
    <main>
       <div className='main-overview'>
       <div className="overviewcard">

            <Collapsible trigger="Veggies" >
              <p style={{paddingTop:'10px'}}>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
              <p style={{paddingTop:'10px'}}>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
             
            </Collapsible>
            </div>
       </div>
       <div className='main-overview'>
       <div className="overviewcard"  style={{ height: "50px"}}>

            <Collapsible trigger="Veggies" style={{padding:'50px'}} >
              <p style={{paddingTop:'10px'}}>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
            </Collapsible>
            </div>
       </div>
    </main> 
   },
   {
    path: "/product",
    main: () => 

      <main className='mainCardGridView'> 
          <div className={'overviewcard cardCollapsible'}>
                  {/* <p> Choose Products to add in your store</p><br/><br/> */}
                  <Collapsible trigger="Veggies +">
                  <form>
                      <div  style={{padding:'10px'}}>
                      <ul>
                              {Categories.map(({ name }, index) => {
                                return (
                                  <li key={index}>
                                    <div>
                                      <div>
                                        <input style={{ width: "30px", margin: "0 auto"}}
                                          type="checkbox"
                                          id={`custom-checkbox-${index}`}
                                          name={name}
                                          value={name}
                                        />
                                        <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                      </div>
                                    </div>
                                  </li>
                                );
                              })}
                              
                      </ul>
                      </div>
                  </form>
                  </Collapsible>
          </div>
          <div className={'overviewcard cardCollapsible'} >
                  <Collapsible trigger="Fruits +">
                <form>
                <div style={{padding:'10px'}}>
                <ul>
                        {Categories.map(({ name }, index) => {
                          return (
                            <li key={index}>
                              <div>
                                <div>
                                  <input style={{ width: "30px", margin: "0 auto"}}
                                    type="checkbox"
                                    id={`custom-checkbox-${index}`}
                                    name={name}
                                    value={name}
                                  />
                                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                        
                      </ul></div>
                </form>
                  </Collapsible>
        </div>
        <div className={'overviewcard cardCollapsible'} >
                  <Collapsible trigger="Bath Essentials +">
                <form>
                <div style={{padding:'10px'}}>
                <ul>
                        {Categories.map(({ name }, index) => {
                          return (
                            <li key={index}>
                              <div>
                                <div>
                                  <input style={{ width: "30px", margin: "0 auto"}}
                                    type="checkbox"
                                    id={`custom-checkbox-${index}`}
                                    name={name}
                                    value={name}
                                  />
                                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                        
                      </ul></div>
                </form>
                  </Collapsible>
        </div> 
        <div className={'overviewcard cardCollapsible'}>
                  <Collapsible trigger="Kitchen Essentials +" >
                <form>
                <div style={{padding:'10px'}}>
                <ul>
                        {Categories.map(({ name }, index) => {
                          return (
                            <li key={index}>
                              <div>
                                <div>
                                  <input style={{ width: "30px", margin: "0 auto"}}
                                    type="checkbox"
                                    id={`custom-checkbox-${index}`}
                                    name={name}
                                    value={name}
                                  />
                                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                        
                      </ul></div>
                </form>
                  </Collapsible>
        </div> 
      </main>
     
     
  },
   
   
  
  ];
const Dashboard =()=>{
  
   return(
    <div style={{marginTop:"20px"}}>
   
   <header>
		<h1>Welcome To Dashboard</h1>
	</header>
  
	
   <BrowserRouter>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "20px",
            width: "200px",
            paddingTop:'30px',
            background: "#f0f0f0"
          }}
        >
          <ul style={{listStyle:"none"}}>
            <li>
              <Link to="/"><button className='hamburgerList'>Home</button> </Link>
            </li>
            <li>
              <Link to="/product"><button className='hamburgerList'>Products</button></Link>
            </li>
            <li>
              <Link to="/order"><button className='hamburgerList'>Orders</button></Link>
            </li>
        
          </ul>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          {routes.map((route, index) => (
           
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </div>
    </BrowserRouter>
   
   
</div>

   )
}


export default Dashboard;