import React, { Component } from 'react';
// 引入自定义模块
import storage from '../model/storage';
//storage这个名字随便起，把model/storage.js里的代码拿过来复制给storage这个名字
class Todolist2 extends Component{
    constructor(prop){
        super(prop);
        this.state={
            list:[
                
            ]
        }
    }
    addData=(e)=>{
        if(e.keyCode === 13){
            let tempList=this.state.list;
            tempList.push({
                title:e.target.value,
                checked:false
            })
            this.setState({
                list:tempList
            })
            e.target.value='';
            //执行缓存数据 localStorage.setItem() 只能保存字符串不能保存数组对象，使用JSON.stringify()
            //localStorage.getItem()得到的也是字符串，所以用JSON.parse()转对象
            // localStorage.setItem('todoList',JSON.stringify(tempList));
            // 使用封装方法
            storage.set('todoList',tempList);
        }
    }
    checkboxChange=(key)=>{
        console.log('111')
        let tempList=this.state.list;
        tempList[key].checked=!tempList[key].checked
        this.setState({
            list:tempList
        })
        // localStorage.setItem('todoList',JSON.stringify(tempList));
        storage.set('todoList',tempList);
    }
    removeData=(key)=>{
        // alert(key)
        var tempList = this.state.list;
        tempList.splice(key,1)
        this.setState({
            list:tempList
        })
        // localStorage.setItem('todoList',JSON.stringify(tempList));
        storage.set('todoList',tempList);
    }
    //生命周期函数 页面渲染完成触发的方法，页面加载完成会触发，刷新就会触发
    componentDidMount=()=>{
        //localStorage.getItem()得到的也是字符串，所以用JSON.parse()转对象
        // var todoList = JSON.parse(localStorage.getItem('todoList'));
        var todoList = storage.get('todoList');
        if(todoList){
            this.setState({
                list:todoList
            })
        }
    }
    render(){
        return(
            <div>
                <input ref="title" onKeyUp={this.addData}/>
                <h2>待办事项</h2>
                <hr />
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            if(!value.checked){
                                return (
                                    <li key={key}>
                                        <input type="checkbox" checked={value.checked} onChange={this.checkboxChange.bind(this,key)} />
                                        {value.title}
                                        <button onClick={this.removeData.bind(this,key)}>删除</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
                <h2>已完成事项</h2>
                <hr />
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            if(value.checked){
                                return (
                                    <li key={key}>
                                        <input type="checkbox" checked={value.checked} onChange={this.checkboxChange.bind(this,key)} />
                                        {value.title}
                                        <button onClick={this.removeData.bind(this,key)}>删除</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Todolist2;