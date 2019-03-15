import React, { Component } from 'react';
// import logo from './assets/images/logo.svg';
// import './assets/css/App.css';
//引入home组件
// import Home from './components/Home';
// import News from './components/News';
// import Home1 from './components/Home1';
// import Home2 from './components/Home2';
import Lifecycle1 from './components/Lifecycle1';
class App1 extends Component {
  constructor(props){
    super(props);
    this.state={
        flag:true,
        title:'我是父组件的title'
    }
  }
  setFlag=()=>{
    this.setState({
      flag:!this.state.flag
    })
  }
  setTitle=()=>{
    this.setState({
      title:'改变后的父组件的title'
    })
  }
  //render放模板，jsx语法
  render() {
    return (
      <div className="App">
        
        {this.state.flag?<Lifecycle1 title={this.state.title} />:''}
        <br /><br /><br />
        <button onClick={this.setTitle}>改变父组件里的title</button>
        <hr />
        <button onClick={this.setFlag}>挂载和销毁声明周期组件</button>
      </div>
    );
  }
}

export default App1;
