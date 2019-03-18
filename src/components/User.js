import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount=()=>{
        console.log(this.props.routes)
    }
    render() {
        return (
            <Router>
                <div className="user">
                    <div className="content">
                        <div className="left">
                            <Link to="/user/">个人信息</Link>
                            <Link to="/user/main">账号管理</Link>
                            <Link to="/user/main">完善资料</Link>
                            <Link to="/user/main">设置</Link>
                 
                        </div>
                        <div className="right">
                            {
                                this.props.routes.map((route,key)=>{
                                    return(
                                        <Route key={key} exact path={route.path} component={route.component} />
                                    )
                                })
                            }
                            
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default User;