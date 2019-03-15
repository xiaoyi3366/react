import React from 'react';
import PropTypes from 'prop-types';
// 使用PropTypes需要先引入import PropTypes from 'prop-types';
class Header1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

        };
    }
    getNews=()=>{
        alert(this.props.news.state.msg)
    }
    render() {
        return (
            <div>
                <h2>{this.props.title} --- {this.props.num}</h2>
           
            </div>
        );
    }
}
// defaultProps用在子组件中
Header1.defaultProps={
    title:'标题'
}
// 注意这个propTypes小写
Header1.propTypes={
    num:PropTypes.number
    // PropTypes对应import PropTypes from 'prop-types';这个类名
}
export default Header1;