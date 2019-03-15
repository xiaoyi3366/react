import React, { Component } from 'react';
import axios from 'axios';
// from 'axios'from后面的axios和npm安装的名字对应
class Lifecycle1 extends Component {
    constructor(props) {
        console.log('01构造函数')
        super(props);
        this.state = { 
            msg:'msg111111'
         };
    }
    updateData=()=>{
        this.setState({
            msg:'222改变222'
        })
    }
    //组件将要挂载时候触发生命周期函数
    componentWillMount=()=>{
        console.log('02组件将要挂载')
    }
    //组件的生命周期函数,组件渲染完成，组件挂载完成的时候触发的生命周期函数
    componentDidMount=()=>{
        //DOM操作放在这里
        // 请求数据也放在这里
        console.log('04刷新时候')

    }
    
    shouldComponentUpdate=()=>{
        // 是否要执行更新数据，返回true是
        console.log('11是否要更新数据')
        return true
    }
    //将要更新数据的时候触发
    componentWillUpdate=()=>{
        console.log('12组件将要更新')
        // 更新时候要渲染数据，执行render函数
    }
    componentDidUpdate=()=>{
        console.log('14组件更新完成')
    }
    //组件销毁的时候触发的生命周期函数，用在组件销毁的时候执行操作
    componentWillUnmount=()=>{
        console.log('组件销毁')
    }
    render() {
        console.log('03数据渲染')
        console.log('13更新数据')
        return (
            <div>
                生命周期函数演示-----{this.state.msg}
                <br /><br />
                <button onClick={this.updateData}>更新msg的数据</button>
            </div>
        );
    }
}

export default Lifecycle1;
