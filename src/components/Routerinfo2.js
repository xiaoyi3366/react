import React, { Component } from 'react';
//url模块解析url地址，在nodejs里不用安装，在react中需要安装
//cnpm install url --save
import url from 'url';
class Routerinfo2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }
    //声明周期函数里获取路由
    componentDidMount=()=>{
        //获取get传值
        console.log(this.props)
        console.log(this.props.location.search)//得到的是?aid=111
        //现在需要封装一个方法解析出aid
        //用url方法，要先安装url,url可以解析get传值
        console.log(url.parse(this.props.location.search,true))
        var query = url.parse(this.props.location.search,true).query;
        console.log(query);//{aid: "2"}
        // 可以解析多个参数，如http://localhost:3000/routerinfo2?aid=2&cid=111，
        //console.log(query); //得到{aid: "2", cid: "111"}
    }
    render() {
        return (
            <div>
                我是商品详情fssdfdd
                
            </div>
        );
    }
}

export default Routerinfo2;