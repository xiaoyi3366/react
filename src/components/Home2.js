import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Header1 from './Header1';
class Home2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:'这是home2的头',
            msg:'我是父组件的msg',
            count: 20
         };
    }
    run=()=>{
        alert('我是父组件的run方法')
    }
    //获取子组件传过来的数据
    getChildData=(result)=>{
        alert(result)
        this.setState({
            msg:result,
            
        })
        // alert(this.state.msg)
    }
    getData=()=>{
        alert(this.state.title)
    }
    //父组件主动调用字组件的数据和方法
    getFooter=()=>{
        // alert(this.refs.footer.state.msg)
        this.refs.footer.run();
    }
    render() {
        return (
            <div>
                {/* 父组件给子组件传值 */}
                <Header title={this.state.title} run={this.run} news={this}/>
                <br /><br />
                {/* 没传值 */}
                <Header1 />
                {/* propTypes */}
                <Header1 num={this.state.count}/>
                <hr />
                这是父组件
                {this.state.msg}
                <br />
                <br />
                {/* 父组件调用子组件的值 */}
                <button onClick={this.getFooter}>获取整个Footer组件</button>
                <Footer ref="footer" />
            </div>
        );
    }
}

export default Home2;