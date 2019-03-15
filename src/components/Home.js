import React, { Component } from 'react';
import '../assets/css/index.css';
 class Home extends Component{
     constructor(){
        super();
        this.state = {
            name:"张三",
            title:'我是一个title',
            color:'red',
            userinfo:{
                username:"lll"
            },
            style:{
                color:'red',
                fontSize: '40px'
            }
        }
        this.getName = this.getName.bind(this)
     }
    run(){
        alert('我是一个')
    }
    getDate(){
        alert(this.state.name)
    }
    getName(){
        alert(this.state.name)
    }
    getName2=()=>{
        alert(this.state.name)
    }
    setDate=()=>{
        this.setState({
            name:'李四'
        })
    }
    setName=(name)=>{
        this.setState({
            name:name
        })
    } 
     render(){
         return (
             <div>
                 <p>{this.state.name}</p>
                 <p>{this.state.userinfo.username}</p>
                 <div title="1111">{this.state.title}</div>
                 <br />
                 <div title={this.state.title}>{this.state.title}</div>
                 <div className="red">我是一个红色的div</div>
                 <div className={this.state.color}>我是一个红色的div</div>
                 <label htmlFor="name">姓名</label>
                 <input id="name" />
                <div style={{"color":"red","height":'30px',"marginTop":"10px"}}>给div一个行内样式</div>
                <div style={this.state.style}>给div一个行内样式</div>
                <button onClick={this.run}>按钮</button>
                {/* 写this.run()表示执行该方法，实际是，点击按钮才执行方法 */}
                <br />
                <br />
                <button onClick={this.getDate.bind(this)}>获取1</button>
                <br />
                <br />
                <button onClick={this.getName}>获取2</button>
                <br />
                <br />
                <button onClick={this.getName}>获取3</button>
                <br />
                <br />
                <button onClick={this.setDate}>改变state值</button>
                <br />
                <button onClick={this.setDate.bind(this,'王五')}>通过传参数改变state值</button>
             </div>
         )
     }
    
 }
 export default Home;