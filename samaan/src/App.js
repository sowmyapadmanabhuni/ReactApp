// import logo from './logo.svg';
import React,{ Component } from 'react';
import './App.css';
import { Route, Switch,BrowserRouter as Router,Redirect } from 'react-router-dom';

import Login from './Components/Login';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import Registration from './Components/Registration';
import Dashboard from './Components/Dashboard';

class App extends Component{
 render(){
   return(
     <>
    {/* <div> */}
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/register" component ={Registration}/>
        <Route path ="/dashboard" component={Dashboard}/>
        <Redirect to="/" />
      </Switch>
    </Router>       
    {/* </div>  */}
    </>
   );
 }
}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello World !....
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Hello World
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
