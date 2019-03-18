import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import '../assets/css/pcontent.css';
class Pcontent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[],
            demain:'http://a.itying.com/'
         };
    }
    requestData=(id)=>{
        var api = this.state.demain+'api/productcontent?id='+ id;
        // axios这个名字和import axios from 'axios';这个axios对应
        axios.get(api)
        .then((response)=>{
            console.log(response.data.result)
            this.setState({
                list:response.data.result[0]
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    componentDidMount=()=>{
        console.log(this.props)
        console.log(this.props.match.params.id)
        let id= this.props.match.params.id
        this.requestData(id)
    }
    render() {
        return (
            <div>
                <div className="back"><Link to="/">返回</Link></div>
		
                <div className="p_content">		
                    <div className="p_info">	
                        {/* 第一次执行render函数时，list为空，所以图片undefined	,所以先判断是否为空		 */}
                        {this.state.list.img_url? <img src={`${this.state.demain}${this.state.list.img_url}`} alt="图片" /> : ''}
                        			
                        <h2>{this.state.list.title}</h2>				
                        <p className="price">{this.state.list.num}/份</p>
                    </div>
                    <div className="p_detial">
                        <h3>
                            商品详情					
                        </h3>
                        <div className="p_content" dangerouslySetInnerHTML={{__html:this.state.list.content}}> 
                        {/* react解析html标签 */}
                       {/* 文档链接 https://reactjs.org/docs/dom-elements.html   API->DOM element*/}
                        </div>
                    </div>
                </div>
                
                
                <footer className="pfooter">
                    
                    <div className="cart">				
                        <strong>数量:</strong>
                        <div className="cart_num">
                        <div className="input_left">-</div>
                        <div className="input_center">
                            <input type="text"  readOnly="readOnly" value="1" name="num" id="num" />
                        </div>
                        <div className="input_right">+</div>				      
                        </div>								
                    
                    </div>
                    
                    <button className="addcart">加入购物车</button>			
                </footer>
            </div>
        );
    }
}

export default Pcontent;