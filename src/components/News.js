import React from 'react';
import '../assets/css/index.css';
import logo from '../assets/images/logo.svg';
class News extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userinfo:"张三",
            list:['1111','222','333'],
            list2:[<h2 key="1">woshiyige h2</h2>,<h2 key="2">woshiyige h1</h2>],
            list3:[
                {title:'11111111'},
                {title:'22222222'},
                {title:'333333'}
            ]
        }
        
    }
    render(){
        let listResult=this.state.list.map(function(value,key){
            return <li key={key}>{value}</li>
        })
        return(
            <div>
                
                <img src={logo} alt="图片"/>
                <img src={require('../assets/images/logo.svg')} alt="图片"/>
                <img src="https://www.baidu.com/img/baidu_jgylogo3.gif" alt="图片"/>
                <hr />
                {this.state.list2}
                {listResult}
                <ul>
                    {
                        this.state.list3.map(function(value,key){
                            return ( <li key={key}>{value.title}</li>);
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default News;