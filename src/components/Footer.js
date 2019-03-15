import React from 'react';
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'我是一个底部组件'
        };
    }
   run=()=>{
       alert('我是底部组件的一个run方法')
   }
    render() {
        return (
            <div>
                <hr />
                <h2>这是一个footer组件</h2>
               
            </div>
        );
    }
}

export default Footer;