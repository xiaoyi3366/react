import React, { Component } from 'react';
class Routerinfo extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }
    //声明周期函数里获取路由
    componentDidMount=()=>{
        console.log(this.props)
        //打印this.props，可以获得aid的值，为什么叫aid是和上一页设置路由时起的名字一样<Route path="/routerinfo/:aid" component={Routerinfo} />
        //获取动态路由的传值
        console.log(this.props)
        console.log(this.props.match.params.aid)
    }
    render() {
        return (
            <div>
                我是新闻详情{this.props.match.params.aid}
                
            </div>
        );
    }
}

export default Routerinfo;