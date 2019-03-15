import React from 'react';
class Todolist extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:'111',
            title:'',
            list:[]
         };
    }
    inputChange=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    setUsername=()=>{
        this.setState({
            username:'2222'
        })
    }
    addData=()=>{
        console.log('111')
        var tempList = this.state.list;
        tempList.push(this.refs.title.value);//返回的是索引值，所以不能直接写道setstate中
        this.setState({
            list:tempList
        })
        this.refs.title.value='';
    }
    removeData=(key)=>{
        // alert(key)
        var tempList = this.state.list;
        tempList.splice(key,1)
        this.setState({
            list:tempList
        })
    }
    inputKeyUp=(e)=>{
        if(e.keyCode == 13){
            console.log(this.refs.title.value)
            this.refs.title.value='';
        }
    }
    render() {
        return (
            <div>
                <h2>双向数据绑定</h2>
                {/* 主要用在表单中。双向数据绑定叫MVVM。model改变影响view,view改变影响model */}
                {/* react不是mvvm框架，没有双向数据绑定，可以模拟 */}
                {/* mv定义一个username ,input 的value绑定这个username
                vm onchang事件，改变 setState username */}
                {this.state.username}
                {/* 如果没有监听onchange，要绑定数据需要用defaultValue */}
                <input defaultValue={this.state.username} />
                <input value={this.state.username} onChange={this.inputChange}/>
                <button onClick={this.setUsername}>改变username值</button>
                <h2>todolist</h2>
                <input ref="title" onKeyUp={this.inputKeyUp} />
                <button onClick={this.addData}>添加</button>
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            return(
                                <li key={key}>{value}---- <button onClick={this.removeData.bind(this,key)}>删除</button></li>
                            )
                        })
                    }
                    
                </ul>
            </div>
        );
    }
}

export default Todolist;