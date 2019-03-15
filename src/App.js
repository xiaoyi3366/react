import React, { Component } from 'react';
// import logo from './assets/images/logo.svg';
// import './assets/css/App.css';
//引入home组件
// import Home from './components/Home';
// import News from './components/News';
// import Home1 from './components/Home1';
// import Home2 from './components/Home2';
import Lifecycle1 from './components/Lifecycle1';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
        flag:true
    }
  }
  setFlag=()=>{
    this.setState({
      flag:!this.state.flag
    })
  }
  //render放模板，jsx语法
  render() {
    return (
      <div className="App">
        
        {this.state.flag?<Lifecycle1 />:''}
        <br /><br /><br />
        <hr />
        <button onClick={this.setFlag}>挂载和销毁声明周期组件</button>
      </div>
    );
  }
}

export default App;
