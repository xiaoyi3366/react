import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './assets/css/basic.css';
import './assets/css/index.css';
//引入home组件
import Login from './components/Login';
import Home from './components/Home';
import Pcontent from './components/Pcontent';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
        
    }
  }
  
  //render放模板，jsx语法
  render() {
    return (
      <Router>
      <div>
        {/* <Home /> */}
        {/* <Link to="/">Home</Link> */}
        <Route exact path='/' component={Home} />
        <Route path='/pcontent/:id' component={Pcontent} />
        <Route path='/login' component={Login} />
      </div>
    </Router>
    );
  }
}

export default App;
