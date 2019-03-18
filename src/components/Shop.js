import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ShopAdd from './Shop/ShopAdd';
import ShopList from './Shop/ShopList';
class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Router>
                <div className="user">
                    <div className="content">
                        <div className="left">
                            {/* <Link to="/shop/">商户列表</Link> */}
                            <Link to={`${this.props.match.url}/`}>商户列表</Link>
                            <Link to={`${this.props.match.url}/shopadd`}>增加商户</Link>
                            {/* {console.log(this.props)} */}
                 
                        </div>
                        <div className="right">
                            <Route exact path="/shop/" component={ShopList} />
                            <Route path="/shop/shopadd" component={ShopAdd} />
                            
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Shop;