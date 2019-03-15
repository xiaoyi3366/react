import React, { Component } from 'react';
// 快捷键cccs
class List extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'张三',
            keyup:'1111'
            
        }
    }
    inputChange=()=>{
        let val = this.refs.username.value;
        this.setState({
            username:val
        })
    }
    getInputValue=()=>{
        alert(this.state.username)
    }
    // 键盘事件
    inputKeyUp=(e)=>{
        console.log(e.keyCode)
        if (e.keyCode === 13) {
            this.setState({
                keyup:this.refs.phone.value
            })
        }
    }
    render(){
        return(
            <div>
                <input ref="username" />
               <button onClick={this.getInputValue}>获取input的值</button>
               <br />
               <br />
               {/* 键盘事件 */}
               <input onKeyUp={this.inputKeyUp} ref="phone"/>
               <div>{this.state.keyup}</div>
            </div>
        )
    }
}
export default List;
