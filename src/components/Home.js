import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[

            ],
            demain:'http://a.itying.com/'
         };
    }
    getData=()=>{
        var api = this.state.demain+'api/productlist';
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
    componentDidMount=()=>{
        this.getData()
    }
    render() {
        return (
            <div>
                <Link to='/login'>登录</Link>
                {
                    //循环二维数组
                    // 执行循环代表list不为空，否则不执行
                    this.state.list.map((value,key)=>{
                        return(
                            <div className="item" key={key}>
                                <h3 className="item_cate">{value.title}</h3>
                                <ul className="item_list">
                                    {   
                                        value.list.map((v,k)=>{
                                            return(
                                                <li key={k}>	
                                                    <Link to={`/pcontent/${v._id}`}>
                                                        <div className="inner">
                                                            {/* <img src={require('../assets/images/1.jpg')} alt="图片" /> */}
                                                            {/* 解析远程地址 */}
                                                            <img src={`${this.state.demain}${v.img_url}`} alt="图片" />
                                                            <p className="title">{v.title}</p>						
                                                            <p className="price">{v.price}</p>
                                                        </div>	
                                                    </Link>	
                                                </li>
                                            )
                                        })
                                    }
                                    
                                </ul>
                            </div>
                        )
                    })
                }
                
            </div>
        );
    }
}

export default Home;