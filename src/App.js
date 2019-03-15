import React, { Component } from 'react';
// import logo from './assets/images/logo.svg';
// import './assets/css/App.css';
import './assets/css/index.css';
//引入home组件
import Home from './components/Home';
// import News from './components/News';
// import Home1 from './components/Home1';
// import Home2 from './components/Home2';
// import Lifecycle1 from './components/Lifecycle1';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Router1 from './components/Router1';
import Router2 from './components/Router2';
import Routerinfo from './components/Routerinfo';
import Routerinfo2 from './components/Routerinfo2';
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
        
        <header className="header">
          <Link to="/">Home</Link>
          
          <Link to="/router1">Router1</Link>
          
          <Link to="/router2">Router2</Link>
          
        </header>
        <Route exact path="/" component={Home} />
        <Route path="/router1" component={Router1} />
        <Route path="/router2" component={Router2} />
        <Route path="/routerinfo/:aid" component={Routerinfo} />
        <Route path="/routerinfo2" component={Routerinfo2} />
      </div>
    </Router>
    );
  }
}

export default App;
