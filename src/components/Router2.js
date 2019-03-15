import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Router2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {
                    aid:'1',
                    title:'我是商品1111'
                },
                {
                    aid:'2',
                    title:'我是商品2222'
                },
                {
                    aid:'3',
                    title:'我是商品333'
                },
                {
                    aid:'4',
                    title:'我是商品4441'
                },
                {
                    aid:'5',
                    title:'我是商品55511'
                },
                {
                    aid:'6',
                    title:'我是商品66611'
                }
            ]
         };
    }
    render() {
        return (
           <div>
               <h2>新闻组件路由2get传值</h2>
               <ul>
                    {
                        this.state.list.map((value,key)=>{
                            return(
                                // es6模板字符串拼接
                                <li key={key}><Link to={`/routerinfo2?aid=${value.aid}`}>{value.title}</Link></li>
                            )
                        })   
                    }
                </ul>
           </div> 
        );
    }
}

export default Router2;