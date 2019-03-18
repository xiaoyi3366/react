import React, { Component } from 'react';
import './assets/css/index.css';
//引入home组件

import routes from './model/router.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




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
            <Link to="/">HOME</Link>
            <Link to="/user">USER</Link>
            <Link to="/shop">SHOP</Link>
          </header>
          {
            // 路由的模块化
            routes.map((route,key)=>{
              if(route.exact){
                return(
                  // exact叫严格模式
                  // <Route key={key} exact path={route.path} component={route.component} routes={route.routes} />
                  <Route key={key} exact path={route.path} render={props=>(
                    <route.component {...props} routes={route.routes} />
                    // <route.component 是 value.component
                    // <route.component {...props} routes={route.routes} />相当于
                    // <User  {...props} routes={route.routes} />
                  )} />
                )
              }else{
                return(
                  <Route key={key} path={route.path} render={props=>(
                    <route.component {...props} routes={route.routes} />
                  )} />
                )
              }
              
            })
          }
          
          
        </div>
      </Router>
    );
  }
}

export default App;
