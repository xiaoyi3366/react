import React, { Component } from 'react';
import axios from 'axios';
// from 'axios'from后面的axios和npm安装的名字对应
class Axios extends Component {
    constructor(props) {
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

export default Axios;
