// import logo from './logo.svg';
import React,{ Component } from 'react';
import './App.css';
import Home from './Components/Home';

class App extends Component{
 render(){
   return(
     <div className = "App">
       <Home/>
     </div>
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
