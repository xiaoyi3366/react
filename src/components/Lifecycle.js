import React, { Component } from 'react';
import axios from 'axios';
// from 'axios'from后面的axios和npm安装的名字对应
class Lifecycle extends Component {
    constructor(props) {
        console.log('01构造函数')
        super(props);
        this.state = { 
            list:[]
         };
    }
    getData=()=>{
        var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
        // axios这个名字和import axios from 'axios';这个axios对应
        axios.get(api)
        .then((response)=>{
            console.log(response.data.result)
            this.setState({
                list:response.data.result
            })
        })
        .catch((error)=>{
            console.log(error)
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
        this.getData();
    }
    render() {
        console.log('03数据渲染')
        return (
            <div>
                <h2>axios获取服务器数据</h2>
                <button onClick={this.getData}>获取服务器api接口数据</button>
                <hr />
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            return (
                                <li key={key}>{value.title}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Lifecycle;
