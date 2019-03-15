import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Router1 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {
                    aid:'1',
                    title:'我是新闻1111'
                },
                {
                    aid:'2',
                    title:'我是新闻2222'
                },
                {
                    aid:'3',
                    title:'我是新闻333'
                },
                {
                    aid:'4',
                    title:'我是新闻4441'
                },
                {
                    aid:'5',
                    title:'我是新闻55511'
                },
                {
                    aid:'6',
                    title:'我是新闻66611'
                }
            ]
        };
    }
    render() {
        return (
           <div>
               <h2>新闻组件路由1动态传值</h2>
               <ul>
                    {
                        this.state.list.map((value,key)=>{
                            return(
                                // es6模板字符串拼接
                                <li key={key}><Link to={`/routerinfo/${value.aid}`}>{value.title}</Link></li>
                            )
                        })   
                    }
                </ul>
           </div> 
        );
    }
}

export default Router1;