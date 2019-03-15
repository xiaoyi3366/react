import React, { Component } from 'react';//解构赋值
class Home1 extends Component {
    constructor(){
        super();
        this.state={
            msg:'这是一个msg',
            username:''
        }
    }
    run=(event)=>{
        // alert(this.state.msg)
        // console.log(event)
        // alert(event.target)
        // event.target.style.background = 'red';
        alert(event.target.getAttribute('aid'));
    }
    inputChange=(e)=>{
        console.log('111');
        // 获取表单的值
        console.log(e.target.value)
        this.setState({
            username:e.target.value
        })
    }
    getInputValue=()=>{
        alert(this.state.username)
    }
    render(){
       return(
           <div>
               {this.state.msg}
               <br />
               <br />
               <button aid='123' onClick={this.run}>事件对象</button>
               <br />
               <br />
               <h2>表单事件</h2>
               {/* react没有双向数据绑定  注释写法*/}
               {/* 四个步骤 看视频源码 */}
               <input onChange={this.inputChange}/>
               <button onClick={this.getInputValue}>获取input的值</button>
           </div>
       )
    }
}
export default Home1;